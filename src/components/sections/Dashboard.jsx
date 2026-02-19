"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "pipelines", label: "Pipelines" },
  { id: "insights", label: "Insights" },
  { id: "automations", label: "Automations" },
];

export default function Dashboard() {
  const [active, setActive] = useState("overview");

  return (
    <section className="mt-16">
      <div className="mb-6 max-w-xl">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/80">
          Intelligence workspace
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          A calm command center for your AI decisions.
        </h2>
        <p className="mt-3 text-sm text-slate-400 sm:text-[15px]">
          Not a marketing dashboard. A working surface where signals, models, and automations come
          together in one spine.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-950/80 shadow-xl shadow-slate-950/80"
      >
        <div className="flex">
          {/* Sidebar */}
          <aside className="flex w-48 flex-col border-r border-slate-800/80 bg-slate-950/90">
            <div className="px-4 py-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                Workspace
              </p>
              <p className="mt-1 text-sm font-medium text-slate-100">Northwind Labs</p>
            </div>
            <nav className="mt-2 flex-1 space-y-1 px-2 text-xs">
              {tabs.map((tab) => {
                const isActive = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className="relative flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-[11px] font-medium text-slate-400 transition-colors hover:text-slate-50"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-pill"
                        className="absolute inset-0 rounded-md bg-slate-800"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main panel */}
          <div className="flex-1 bg-slate-950/60 p-4 text-xs">
            {/* Top bar */}
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
                  {active === "overview"
                    ? "Live map"
                    : active === "pipelines"
                    ? "Pipelines"
                    : active === "insights"
                    ? "Insights"
                    : "Automations"}
                </p>
                <p className="text-sm font-medium text-slate-100">
                  {active === "overview"
                    ? "Intelligence across your stack"
                    : active === "pipelines"
                    ? "Where data becomes signal"
                    : active === "insights"
                    ? "What Xai thinks matters right now"
                    : "AI-driven workflows that execute decisions"}
                </p>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-400">
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-200">
                  Realtime
                </span>
                <span>Last update · 2s ago</span>
              </div>
            </div>

            {/* Content area */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid h-full grid-rows-[minmax(0,1.2fr)_minmax(0,1fr)] gap-3"
              >
                {/* Upper row */}
                <div className="grid grid-cols-[2fr,1.2fr] gap-3">
                  {/* mock chart */}
                  <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Signal density</span>
                      <span>Last 24 hours</span>
                    </div>
                    <div className="mt-2 h-[120px] rounded-lg bg-slate-950/80">
                      <div className="flex h-full items-end gap-1 px-2 pb-2">
                        {[25, 40, 60, 55, 70, 90, 65, 40, 30, 45, 80, 50].map((h, i) => (
                          <motion.div
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{
                              delay: 0.1 + i * 0.03,
                              duration: 0.5,
                              ease: "easeOut",
                            }}
                            className="flex-1 rounded-full bg-gradient-to-t from-cyan-500/20 to-cyan-400/70"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* summary cards */}
                  <div className="space-y-2">
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.35 }}
                      className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2"
                    >
                      <p className="text-[11px] text-slate-400">Active signals</p>
                      <p className="mt-1 text-lg font-semibold text-slate-50">128</p>
                      <p className="mt-1 text-[11px] text-emerald-400">
                        +18 new opportunities · last 1h
                      </p>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.16, duration: 0.35 }}
                      className="rounded-xl border border-slate-800/80 bg-slate-900/60 px-3 py-2"
                    >
                      <p className="text-[11px] text-slate-400">Automations on</p>
                      <p className="mt-1 text-lg font-semibold text-slate-50">23</p>
                      <p className="mt-1 text-[11px] text-slate-400">
                        92% executed without human review
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Lower row: table */}
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12, duration: 0.35 }}
                  className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3"
                >
                  <div className="mb-2 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Recent insights</span>
                    <span>Ranked by impact</span>
                  </div>
                  <div className="overflow-hidden rounded-lg border border-slate-800/80 bg-slate-950/60">
                    <table className="min-w-full border-collapse text-[11px]">
                      <thead>
                        <tr className="bg-slate-950/80 text-slate-500">
                          <th className="px-3 py-2 text-left font-medium">Insight</th>
                          <th className="px-3 py-2 text-left font-medium">Type</th>
                          <th className="px-3 py-2 text-left font-medium">Confidence</th>
                          <th className="px-3 py-2 text-left font-medium">Automation</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            label: "Churn risk spiking in mid-tier accounts",
                            type: "Risk",
                            conf: "0.93",
                            auto: "Escalation playbook",
                          },
                          {
                            label: "Revenue upside in self-serve in EU",
                            type: "Opportunity",
                            conf: "0.88",
                            auto: "Pricing experiment",
                          },
                          {
                            label: "Latency anomaly in ingest pipeline",
                            type: "Incident",
                            conf: "0.81",
                            auto: "On-call rota",
                          },
                        ].map((row, idx) => (
                          <motion.tr
                            key={row.label}
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.16 + idx * 0.04, duration: 0.3 }}
                            className="border-t border-slate-800/80 text-slate-300 hover:bg-slate-900/80"
                          >
                            <td className="px-3 py-2">{row.label}</td>
                            <td className="px-3 py-2 text-slate-400">{row.type}</td>
                            <td className="px-3 py-2 text-slate-400">{row.conf}</td>
                            <td className="px-3 py-2 text-slate-400">{row.auto}</td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
}