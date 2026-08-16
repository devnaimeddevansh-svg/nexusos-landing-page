"use client";

import { motion } from "framer-motion";

const features = [
  {
    id: "research",
    title: "AI Research Analyst",
    subtitle: "Deep Research, Real Sources",
    description:
      "Ask any question and get comprehensive research reports with real, cited web sources. No hallucinated references — every claim is backed.",
    icon: "🔬",
    gradient: "from-violet-600 to-purple-500",
    accent: "border-violet-500/30",
  },
  {
    id: "business",
    title: "AI Business Brain",
    subtitle: "Your Docs, Your Answers",
    description:
      "Upload your company documents and chat with your entire knowledge base. Contracts, reports, SOPs — instant answers from your own data.",
    icon: "🧠",
    gradient: "from-pink-600 to-rose-500",
    accent: "border-pink-500/30",
  },
  {
    id: "company",
    title: "AI Company-in-a-Box",
    subtitle: "Six AI Employees",
    description:
      "Researcher, Business Analyst, Marketing Manager, Sales Assistant, Operations Manager, and Executive Assistant — working together on multi-step workflows.",
    icon: "🏢",
    gradient: "from-cyan-600 to-blue-500",
    accent: "border-cyan-500/30",
  },
  {
    id: "life",
    title: "AI Life Admin",
    subtitle: "Tasks & Productivity",
    description:
      "Automatically created tasks, smart reminders, and productivity tracking. NexusOS handles the admin so you can focus on what matters.",
    icon: "⚡",
    gradient: "from-amber-500 to-orange-500",
    accent: "border-amber-500/30",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-nexus-purple/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-nexus-pink">
            Four Pillars
          </span>
          <h2 className="mt-4 font-display text-4xl font-black sm:text-5xl">
            One OS. <span className="anime-text-gradient">Infinite Power.</span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border ${feature.accent} glass-panel p-8 transition-all hover:border-white/20`}
            >
              <div
                className={`absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br ${feature.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`}
              />

              <div className="relative">
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-2xl shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    <p className="font-body text-sm text-white/50">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
                <p className="font-body text-base leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>

              {/* Diagonal accent */}
              <div className="absolute bottom-0 right-0 h-24 w-24 translate-x-12 translate-y-12 rotate-45 bg-gradient-to-r from-white/5 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
