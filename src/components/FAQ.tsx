"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What is NexusOS?",
    answer:
      "NexusOS is an AI Operating System that combines deep research, business intelligence, a full team of AI employees, and life admin into one unified platform. Think of it as your personal AI command center.",
  },
  {
    question: "When will NexusOS launch?",
    answer:
      "We're targeting a public launch in Q2 2026. Pre-registered users will be the first to get access, with founding members receiving early beta access before the general release.",
  },
  {
    question: "What does the founding member offer include?",
    answer:
      "The first 500 people to pre-register get NexusOS Pro free for 1 full month at launch. This includes unlimited research reports, all six AI employees, document uploads, and priority support.",
  },
  {
    question: "Is pre-registration free?",
    answer:
      "Yes, completely free. No credit card required. Just enter your email to secure your spot and founding member benefits if you're among the first 500.",
  },
  {
    question: "How does AI Research Analyst work?",
    answer:
      "Ask any research question and NexusOS searches the web, analyzes sources, and generates a comprehensive report with real citations. Every claim links back to an actual source — no made-up references.",
  },
  {
    question: "What are the six AI employees?",
    answer:
      "Researcher (market & competitive intel), Business Analyst (financial modeling & strategy), Marketing Manager (campaigns & content), Sales Assistant (CRM & outreach), Operations Manager (workflows & processes), and Executive Assistant (scheduling & admin). They collaborate on multi-step projects.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-display text-xs font-bold uppercase tracking-[0.3em] text-nexus-purple">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-black">
            Questions? <span className="anime-text-gradient">Answered.</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-white/5"
              >
                <span className="font-display text-sm font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className="flex-shrink-0 text-nexus-cyan text-xl font-light"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 font-body text-sm leading-relaxed text-white/60">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
