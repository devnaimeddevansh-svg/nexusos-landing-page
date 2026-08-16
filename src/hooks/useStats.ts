"use client";

import { useEffect, useState, useCallback } from "react";
import { REGISTRATION_GOAL } from "@/lib/constants";

export interface Stats {
  registrationCount: number;
  visitCount: number;
  foundingCount: number;
  foundingSpotsRemaining: number;
}

export function useStats(pollInterval = 30000) {
  const [stats, setStats] = useState<Stats>({
    registrationCount: 0,
    visitCount: 0,
    foundingCount: 0,
    foundingSpotsRemaining: 500,
  });
  const [loading, setLoading] = useState(true);

  const fetchStats = useCallback(async () => {
    try {
      const res = await fetch("/api/stats");
      if (res.ok) {
        const data = await res.json();
        setStats(data);
      }
    } catch {
      // Silently fail — counters will show last known values
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetch("/api/track-visit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ referrer: document.referrer }),
    }).catch(() => {});

    fetchStats();
    const interval = setInterval(fetchStats, pollInterval);
    return () => clearInterval(interval);
  }, [fetchStats, pollInterval]);

  const progressPercent = Math.min(
    100,
    (stats.registrationCount / REGISTRATION_GOAL) * 100
  );

  return { stats, loading, progressPercent, refreshStats: fetchStats };
}
