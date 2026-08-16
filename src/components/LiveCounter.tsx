"use client";

import { motion } from "framer-motion";
import { REGISTRATION_GOAL } from "@/lib/constants";
import { useStats } from "@/hooks/useStats";

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

export default function LiveCounter() {
  const { stats, loading, progressPercent } = useStats();

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-nexus-purple/10 via-transparent to-nexus-cyan/10" />
      <div className="pointer-events-none absolute inset-0 speed-lines opacity-50" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-nexus-cyan">
            Join the Movement
          </span>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
            <span className="anime-text-gradient">
              {loading ? "—" : formatNumber(stats.registrationCount)}
            </span>
            <span className="text-white"> people pre-registered</span>
          </h2>
          <p className="mt-4 font-body text-lg text-white/60">
            Help us reach {formatNumber(REGISTRATION_GOAL)} early adopters
          </p>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative h-4 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full bg-anime-gradient"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer bg-[length:200%_100%]" />
          </div>
          <div className="mt-3 flex justify-between font-body text-sm text-white/40">
            <span>0</span>
            <span className="text-nexus-cyan font-semibold">
              {progressPercent.toFixed(1)}% to goal
            </span>
            <span>{formatNumber(REGISTRATION_GOAL)}</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-sm text-white/30"
        >
          {loading ? "—" : formatNumber(stats.visitCount)} page visits
        </motion.p>
      </div>
    </section>
  );
}
