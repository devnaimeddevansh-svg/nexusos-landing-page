"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DEMO_STEPS = [
  "input",
  "research",
  "agents",
  "tasks",
] as const;

type DemoStep = (typeof DEMO_STEPS)[number];

const STEP_DURATION = 5000;

export default function ProductDemo() {
  const [step, setStep] = useState<DemoStep>("input");
  const [typedText, setTypedText] = useState("");
  const fullQuery = "Analyze competitor pricing strategies in the SaaS market";

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((current) => {
        const idx = DEMO_STEPS.indexOf(current);
        return DEMO_STEPS[(idx + 1) % DEMO_STEPS.length];
      });
    }, STEP_DURATION);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (step !== "input") return;
    setTypedText("");
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i <= fullQuery.length) {
        setTypedText(fullQuery.slice(0, i));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 40);
    return () => clearInterval(typeInterval);
  }, [step, fullQuery]);

  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-nexus-darker via-nexus-dark/50 to-nexus-darker" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-nexus-cyan">
            Live Preview
          </span>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
            See <span className="anime-text-gradient">NexusOS</span> in Action
          </h2>
          <p className="mt-4 font-body text-lg text-white/60 max-w-2xl mx-auto">
            From question to insight to action — watch your AI operating system work.
          </p>
        </motion.div>

        {/* Demo window */}
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -inset-4 rounded-3xl bg-anime-gradient opacity-20 blur-2xl" />
          <div className="relative glass-panel neon-border rounded-2xl overflow-hidden">
            {/* Title bar */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/70" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                  <div className="h-3 w-3 rounded-full bg-green-500/70" />
                </div>
                <span className="font-display text-sm text-white/60">NexusOS</span>
              </div>
              <div className="flex gap-2">
                {DEMO_STEPS.map((s) => (
                  <div
                    key={s}
                    className={`h-1.5 w-8 rounded-full transition-all duration-500 ${
                      step === s ? "bg-anime-gradient" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="min-h-[400px] p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {step === "input" && (
                  <motion.div
                    key="input"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <p className="font-display text-lg text-white/80">
                      What do you want to accomplish?
                    </p>
                    <div className="relative">
                      <div className="rounded-xl border border-nexus-purple/40 bg-white/5 px-5 py-4 font-body text-lg text-white min-h-[56px]">
                        {typedText}
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-0.5 h-5 bg-nexus-cyan ml-0.5 align-middle"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Research", "Analyze docs", "Run agents", "Create tasks"].map(
                        (chip) => (
                          <span
                            key={chip}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                          >
                            {chip}
                          </span>
                        )
                      )}
                    </div>
                  </motion.div>
                )}

                {step === "research" && (
                  <motion.div
                    key="research"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="h-5 w-5 rounded-full border-2 border-nexus-cyan border-t-transparent"
                      />
                      <span className="font-display text-sm text-nexus-cyan">
                        Generating research report...
                      </span>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-4">
                      <h3 className="font-display font-bold text-white">
                        SaaS Competitor Pricing Analysis
                      </h3>
                      <p className="font-body text-sm text-white/70 leading-relaxed">
                        Enterprise SaaS pricing has shifted toward usage-based models,
                        with 67% of top competitors adopting hybrid pricing...
                      </p>

                      <div className="space-y-2 pt-2">
                        <p className="text-xs font-display uppercase tracking-wider text-white/40">
                          Citations
                        </p>
                        {[
                          { title: "Gartner SaaS Pricing Report 2026", url: "gartner.com" },
                          { title: "OpenView Pricing Benchmark Study", url: "openview.com" },
                          { title: "SaaStr Annual Pricing Survey", url: "saastr.com" },
                        ].map((cite, i) => (
                          <motion.div
                            key={cite.url}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.3 }}
                            className="flex items-center gap-2 text-sm"
                          >
                            <span className="text-nexus-cyan">[{i + 1}]</span>
                            <span className="text-white/80">{cite.title}</span>
                            <span className="text-white/30 text-xs">— {cite.url}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === "agents" && (
                  <motion.div
                    key="agents"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <p className="font-display text-sm text-white/60">
                      AI Company-in-a-Box — Agents Running
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {[
                        { name: "Researcher", task: "Gathering market data", progress: 100 },
                        { name: "Business Analyst", task: "Building financial model", progress: 75 },
                        { name: "Marketing Mgr", task: "Drafting campaign brief", progress: 60 },
                        { name: "Sales Assistant", task: "Updating CRM pipeline", progress: 45 },
                        { name: "Ops Manager", task: "Optimizing workflows", progress: 30 },
                        { name: "Executive Asst", task: "Scheduling review meeting", progress: 90 },
                      ].map((agent, i) => (
                        <motion.div
                          key={agent.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="rounded-xl border border-white/10 bg-white/5 p-3"
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div className="h-8 w-8 rounded-lg bg-anime-gradient flex items-center justify-center text-xs font-bold">
                              {agent.name[0]}
                            </div>
                            <div>
                              <p className="text-xs font-display font-bold text-white">
                                {agent.name}
                              </p>
                              <p className="text-[10px] text-white/40">{agent.task}</p>
                            </div>
                          </div>
                          <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              className="h-full bg-anime-gradient"
                              initial={{ width: 0 }}
                              animate={{ width: `${agent.progress}%` }}
                              transition={{ duration: 1.5, delay: i * 0.15 }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === "tasks" && (
                  <motion.div
                    key="tasks"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                  >
                    <p className="font-display text-sm text-white/60">
                      AI Life Admin — Tasks Created
                    </p>
                    <div className="space-y-2">
                      {[
                        { task: "Review competitor pricing report", due: "Today, 3:00 PM", priority: "high" },
                        { task: "Approve marketing campaign draft", due: "Tomorrow", priority: "medium" },
                        { task: "Follow up with sales pipeline leads", due: "This week", priority: "medium" },
                        { task: "Weekly ops review meeting", due: "Friday, 10:00 AM", priority: "low" },
                      ].map((item, i) => (
                        <motion.div
                          key={item.task}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                        >
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                            className="flex h-5 w-5 items-center justify-center rounded border border-nexus-cyan/50"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ delay: i * 0.2 + 0.5 }}
                              className="h-2.5 w-2.5 rounded-sm bg-nexus-cyan"
                            />
                          </motion.div>
                          <div className="flex-1">
                            <p className="text-sm text-white">{item.task}</p>
                            <p className="text-xs text-white/40">{item.due}</p>
                          </div>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase ${
                              item.priority === "high"
                                ? "bg-red-500/20 text-red-400"
                                : item.priority === "medium"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-green-500/20 text-green-400"
                            }`}
                          >
                            {item.priority}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
