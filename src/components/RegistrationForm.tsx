"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

interface RegistrationFormProps {
  onSuccess?: () => void;
  variant?: "hero" | "inline";
  className?: string;
}

export default function RegistrationForm({
  onSuccess,
  variant = "hero",
  className = "",
}: RegistrationFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "duplicate" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [isFounding, setIsFounding] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setMessage("");

    try {
      const params = new URLSearchParams(window.location.search);
      const referralSource = params.get("ref") ?? "direct";

      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, referralSource }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      if (data.alreadyRegistered) {
        setStatus("duplicate");
        setMessage(data.message);
        return;
      }

      setStatus("success");
      setIsFounding(data.isFoundingMember);
      setMessage(data.message);
      setEmail("");
      onSuccess?.();
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  const isHero = variant === "hero";

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="relative">
        <div
          className={`flex flex-col gap-3 ${
            isHero ? "sm:flex-row sm:items-stretch" : "flex-col"
          }`}
        >
          <div className="relative flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle" && status !== "loading") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              placeholder="Enter your email"
              required
              disabled={status === "loading" || status === "success"}
              className={`w-full rounded-xl border border-white/20 bg-white/5 px-5 py-4 font-body text-lg text-white placeholder:text-white/40 outline-none transition-all focus:border-nexus-cyan/60 focus:ring-2 focus:ring-nexus-cyan/30 disabled:opacity-60 ${
                isHero ? "sm:py-5" : "py-3 text-base"
              }`}
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-nexus-purple/10 via-transparent to-nexus-cyan/10 opacity-0 transition-opacity focus-within:opacity-100" />
          </div>
          <motion.button
            type="submit"
            disabled={status === "loading" || status === "success"}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative overflow-hidden rounded-xl bg-anime-gradient px-8 font-display text-sm font-bold uppercase tracking-widest text-white shadow-lg transition-shadow hover:shadow-nexus-purple/50 disabled:cursor-not-allowed disabled:opacity-60 ${
              isHero ? "py-5 sm:px-10" : "py-3"
            }`}
          >
            <span className="relative z-10">
              {status === "loading" ? "Joining..." : "Pre-Register"}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity hover:opacity-100 animate-shimmer bg-[length:200%_100%]" />
          </motion.button>
        </div>
      </form>

      {message && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 text-sm ${
            status === "error"
              ? "text-red-400"
              : status === "duplicate"
                ? "text-nexus-cyan"
                : "text-green-400"
          }`}
        >
          {status === "success" && isFounding && (
            <span className="mr-2 inline-block rounded-full bg-nexus-pink/20 px-2 py-0.5 text-xs font-bold uppercase text-nexus-pink">
              Founding Member
            </span>
          )}
          {message}
        </motion.p>
      )}
    </div>
  );
}
