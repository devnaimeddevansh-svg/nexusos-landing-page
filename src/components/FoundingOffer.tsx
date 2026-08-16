"use client";

import { motion } from "framer-motion";
import { FOUNDING_MEMBER_LIMIT } from "@/lib/constants";
import { useStats } from "@/hooks/useStats";
import RegistrationForm from "./RegistrationForm";

export default function FoundingOffer() {
  const { stats, loading, refreshStats } = useStats();
  const spotsRemaining = stats.foundingSpotsRemaining;
  const spotsClaimed = FOUNDING_MEMBER_LIMIT - spotsRemaining;
  const percentClaimed = (spotsClaimed / FOUNDING_MEMBER_LIMIT) * 100;

  return (
    <section id="founding" className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-nexus-pink/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-nexus-pink/30 bg-gradient-to-br from-nexus-pink/10 via-nexus-purple/10 to-nexus-cyan/10 p-8 sm:p-12"
        >
          {/* Decorative corner */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-nexus-pink/20 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-nexus-purple/20 blur-3xl" />

          <div className="relative text-center">
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block rounded-full border border-nexus-pink/50 bg-nexus-pink/20 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-nexus-pink"
            >
              Limited Founding Offer
            </motion.span>

            <h2 className="mt-6 font-display text-3xl font-black sm:text-4xl lg:text-5xl">
              First <span className="anime-text-gradient">500</span> Get Pro Free
            </h2>
            <p className="mt-4 font-body text-lg text-white/70 max-w-xl mx-auto">
              Pre-register now and lock in 1 month of NexusOS Pro — completely
              free. Full access to all four pillars and six AI employees.
            </p>

            {/* Spots counter */}
            <div className="mt-10 inline-block">
              <div className="font-display text-6xl font-black sm:text-7xl">
                <span className="anime-text-gradient text-shadow-glow">
                  {loading ? "—" : spotsRemaining}
                </span>
              </div>
              <p className="mt-2 font-body text-sm uppercase tracking-widest text-white/50">
                spots remaining of {FOUNDING_MEMBER_LIMIT}
              </p>

              <div className="mt-6 mx-auto max-w-xs">
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-nexus-pink to-nexus-purple"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentClaimed}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <p className="mt-2 text-xs text-white/40">
                  {loading ? "—" : spotsClaimed} founding spots claimed
                </p>
              </div>
            </div>

            <div className="mt-10 max-w-md mx-auto">
              <RegistrationForm variant="inline" onSuccess={refreshStats} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
