"use client";

import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background elements */}
      <div className="pointer-events-none absolute inset-0 speed-lines" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-nexus-purple/30 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-nexus-pink/20 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-nexus-cyan/15 blur-[80px]" />

      {/* Diagonal accent lines */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-l from-nexus-purple/10 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Nav */}
        <nav className="mb-20 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-anime-gradient font-display text-lg font-black">
              N
            </div>
            <span className="font-display text-xl font-bold tracking-wider">
              Nexus<span className="text-nexus-cyan">OS</span>
            </span>
          </motion.div>
          <motion.a
            href="#features"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden rounded-lg border border-white/20 px-5 py-2 font-body text-sm font-semibold uppercase tracking-wider text-white/80 transition-colors hover:border-nexus-cyan/50 hover:text-white sm:block"
          >
            Explore
          </motion.a>
        </nav>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-6 inline-block rounded-full border border-nexus-pink/40 bg-nexus-pink/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-[0.2em] text-nexus-pink">
                Coming Soon — Pre-Register Now
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
            >
              <span className="anime-text-gradient text-shadow-glow">
                The AI Operating
              </span>
              <br />
              <span className="text-white">System for</span>
              <br />
              <span className="relative inline-block text-white">
                Everything
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 w-full bg-anime-gradient"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  style={{ originX: 0 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-lg font-body text-xl font-light leading-relaxed text-white/70"
            >
              Deep research with real citations. Chat with your company docs.
              Six AI employees running your business. Life admin on autopilot.
              One OS to run it all.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <RegistrationForm variant="hero" />
              <p className="mt-4 text-sm text-white/40">
                Free to join. First 500 get Pro free for 1 month.
              </p>
            </motion.div>
          </div>

          {/* Key visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:max-w-none">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-3xl bg-anime-gradient opacity-20 blur-2xl animate-pulse-glow" />

              <div className="relative glass-panel neon-border rounded-3xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500/80" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                      <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="font-display text-xs uppercase tracking-widest text-white/50">
                      NexusOS Terminal
                    </span>
                  </div>

                  <div className="font-mono text-sm space-y-2">
                    <p className="text-nexus-cyan">
                      <span className="text-nexus-pink">nexus@os</span> ~ $
                      research &quot;AI market trends 2026&quot;
                    </p>
                    <p className="text-white/60 pl-4">
                      ▸ Scanning 847 sources...
                    </p>
                    <p className="text-white/60 pl-4">
                      ▸ Generating report with citations...
                    </p>
                    <p className="text-green-400 pl-4">✓ Report ready</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {["Research", "Business", "Sales"].map((agent) => (
                      <div
                        key={agent}
                        className="rounded-lg bg-white/5 border border-white/10 p-2 text-center"
                      >
                        <div className="mx-auto mb-1 h-6 w-6 rounded-full bg-anime-gradient opacity-80" />
                        <span className="text-[10px] uppercase tracking-wider text-white/60">
                          {agent}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-8 glass-panel rounded-xl px-4 py-2 border border-nexus-cyan/30"
              >
                <span className="font-display text-xs font-bold text-nexus-cyan">
                  6 AI Agents
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-16 glass-panel rounded-xl px-4 py-2 border border-nexus-pink/30"
              >
                <span className="font-display text-xs font-bold text-nexus-pink">
                  Real Citations
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-nexus-darker to-transparent" />
    </section>
  );
}
