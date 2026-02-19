"use client";

import { motion } from "framer-motion";

const stages = [
  {
    id: 1,
    title: "Ingest data",
    description:
      "Connect apps, warehouses, and streams. Xai continuously listens to metrics, events, and documents.",
    badge: "Step 1",
  },
  {
    id: 2,
    title: "Analyze with AI",
    description:
      "Signals are clustered, ranked, and merged into a single intelligence model tuned to your context.",
    badge: "Step 2",
  },
  {
    id: 3,
    title: "Generate insight",
    description:
      "Xai surfaces anomalies, risks, and opportunities with recommended next-best-actions.",
    badge: "Step 3",
  },
];

export default function Flow() {
  return (
    <section className="relative mt-10 scroll-mt-24 border-y border-slate-800/80 py-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950" />
      <div className="relative mx-auto max-w-5xl px-4">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/80">
            Data → Intelligence → Insight
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Watch the signal emerge from the noise.
          </h2>
          <p className="mt-3 text-sm text-slate-400 sm:text-[15px]">
            As you move through the flow, raw events compress into a living map of how your
            business is behaving — and what to do next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
              whileHover={{
                y: -4,
                borderColor: "rgba(56, 189, 248, 0.6)",
                boxShadow: "0 18px 45px rgba(15,23,42,0.95)",
              }}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/70 p-4 text-sm"
            >
              <div>
                <span className="inline-flex items-center rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-cyan-200">
                  {stage.badge}
                </span>
                <h3 className="mt-2 text-sm font-semibold text-slate-50">
                  {stage.title}
                </h3>
                <p className="mt-2 text-xs text-slate-400">{stage.description}</p>
              </div>

              {/* geometry-based mini visual */}
              <div className="mt-4 h-16 overflow-hidden">
                <motion.div
                  layout
                  className="relative h-full w-full rounded-xl bg-slate-900/80"
                >
                  {index === 0 && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-2 top-3 h-0.5 w-10 bg-cyan-400/50" />
                      <div className="absolute right-3 top-6 h-0.5 w-8 bg-cyan-500/40" />
                      <div className="absolute left-8 bottom-4 h-0.5 w-6 bg-cyan-300/40" />
                    </motion.div>
                  )}
                  {index === 1 && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute left-2 top-3 h-px w-10 bg-gradient-to-r from-cyan-400/10 to-cyan-400" />
                      <div className="absolute left-2 top-7 h-px w-14 bg-gradient-to-r from-cyan-400/10 to-cyan-300" />
                      <div className="absolute left-2 top-10 h-px w-20 bg-gradient-to-r from-cyan-400/10 to-cyan-200" />
                    </motion.div>
                  )}
                  {index === 2 && (
                    <motion.div
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute inset-2 grid grid-cols-3 gap-1">
                        {Array.from({ length: 9 }).map((_, i) => (
                          <div
                            key={i}
                            className={`rounded-[4px] ${
                              i === 3 || i === 5
                                ? "bg-cyan-400/70"
                                : "bg-slate-800/80"
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}