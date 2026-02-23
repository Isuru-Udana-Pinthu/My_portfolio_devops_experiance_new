"use client";

import { useState } from "react";
import Terminal from "@/components/Terminal";
import Dashboard from "@/components/Dashboard";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [isDeployed, setIsDeployed] = useState(false);

  return (
    <main className="min-h-screen relative flex items-center justify-center overflow-x-hidden p-4 md:p-8 bg-[#050510]">
      {/* Background conditionally rendered based on deployment state */}
      <AnimatePresence>
        {!isDeployed ? (
          <motion.div
            key="terminal-bg"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 z-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.25) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.25) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        ) : (
          <motion.div
            key="dashboard-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          >
            {/* Lightweight Colorful Background using animated CSS gradients/blurs */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c102a] via-[#100a26] to-[#0a1f26]"></div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[120px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-600/20 blur-[140px]"
            />
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-[#39ff14]/10 blur-[100px]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global CSS Scanline conditionally shown only for terminal */}
      {!isDeployed && <div className="scanline z-50 pointer-events-none absolute inset-0"></div>}

      <div className="w-full h-full z-10 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {!isDeployed ? (
            <motion.div
              key="terminal-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="w-full max-w-4xl"
            >
              <Terminal onDeployComplete={() => setIsDeployed(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="dashboard-container"
              initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="w-full"
            >
              <Dashboard />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
