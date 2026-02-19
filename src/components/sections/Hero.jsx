"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "../../lib/animations";

function DataPoints() {
  const groupRef = useRef();

  useEffect(() => {
    if (!groupRef.current) return;

    const ctx = gsap.context(() => {
      // slow breathing rotation
      gsap.to(groupRef.current.rotation, {
        y: "+=2",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      // scroll --> points compress towards center = raw --> structured
      ScrollTrigger.create({
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress; // 0..1
          const factor = 1 - p * 0.6;

          groupRef.current.children.forEach((mesh) => {
            mesh.position.x *= factor;
            mesh.position.y *= factor;
            mesh.position.z *= factor;
          });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const points = [];
  for (let i = 0; i < 140; i++) {
    points.push(
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
        ]}
      >
        <sphereGeometry args={[0.06, 12, 12]} />
        <meshStandardMaterial color="#38bdf8" emissive="#0f172a" emissiveIntensity={0.45} />
      </mesh>
    );
  }

  return <group ref={groupRef}>{points}</group>;
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] flex-col items-center justify-center gap-10 pb-24 pt-16"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-2xl text-center"
      >
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-cyan-300/80">
          From raw data to real decisions
        </p>
        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
          Calm intelligence for chaotic data.
        </h1>
        <p className="mx-auto max-w-xl text-sm text-slate-400 sm:text-base">
          Xai ingests fragmented signals across your business, structures them into a living
          intelligence layer, and turns them into AI-native decisions & automations.
        </p>
      </motion.div>

      {/* 3D visual */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }}
        className="relative z-10 h-[320px] w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]"
      >
        <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 4, 4]} intensity={1} />
          <DataPoints />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
        </Canvas>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-900/40" />
      </motion.div>
    </section>
  );
}