"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../lib/animations";

function Node({ position, color }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.16, 18, 18]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} />
    </mesh>
  );
}

function AutomationFlow() {
  const groupRef = useRef();

  useEffect(() => {
    console.log("GSAP:", gsap);
    console.log("ScrollTrigger:", ScrollTrigger);
    if (!groupRef.current) return;

    const ctx = gsap.context(() => {
      // breathing
      gsap.to(groupRef.current.scale, {
        x: 1.06,
        y: 1.06,
        z: 1.06,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // scroll → rotate
      ScrollTrigger.create({
        trigger: "#signature",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          console.log("scroll progress:", self.progress);
          const p = self.progress;
          groupRef.current.rotation.y = p * Math.PI * 1.5;
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <group ref={groupRef}>
      <Node position={[-2, 0, 0]} color="#38bdf8" />
      <Node position={[0, 0.8, 0]} color="#22c55e" />
      <Node position={[1.8, -0.4, 0]} color="#eab308" />
      <Node position={[3.2, 0.4, 0]} color="#f97316" />

      {/* connecting cylinders */}
      <mesh position={[-1, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.03, 2, 12]} />
        <meshStandardMaterial color="#38bdf8" />
      </mesh>
      <mesh position={[0.9, 0.2, 0]} rotation={[0, 0, -0.4]}>
        <cylinderGeometry args={[0.03, 0.03, 2.1, 12]} />
        <meshStandardMaterial color="#22c55e" />
      </mesh>
      <mesh position={[2.5, 0, 0]} rotation={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.03, 0.03, 1.8, 12]} />
        <meshStandardMaterial color="#eab308" />
      </mesh>
    </group>
  );
}

export default function Signature() {
  return (
    <section
      id="signature"
      className="mt-20 flex flex-col items-center justify-between gap-10 pb-10 pt-6 md:flex-row"
    >
      <div className="max-w-md">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/80">
          Signature interaction
        </p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-50">
          Automations as a living graph.
        </h2>
        <p className="mt-3 text-sm text-slate-400 sm:text-[15px]">
          Each node represents a decision: triggers, models, and actions. As you move, the
          automation spine responds — showing how Xai executes end‑to‑end without losing context.
        </p>
        <p className="mt-4 text-xs text-slate-500">
          Scroll to rotate the graph. In the real product, each node would expand into editable
          playbooks, guardrails, and telemetry — but the core feeling stays the same.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-[260px] w-full max-w-md overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/70"
      >
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[3, 4, 4]} intensity={1} />
          <AutomationFlow />
        </Canvas>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-3">
          <span className="rounded-full border border-slate-700/90 bg-slate-950/80 px-3 py-1 text-[10px] text-slate-400">
            Scroll to explore the automation spine
          </span>
        </div>
      </motion.div>
    </section>
  );
}