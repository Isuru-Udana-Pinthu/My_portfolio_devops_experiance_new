"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Server, Shield, Globe, TerminalSquare, Database } from 'lucide-react';

export default function Dashboard() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', bounce: 0.4 } }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-6xl mx-auto p-4 md:p-8 space-y-8 z-10"
        >
            <header className="flex flex-col md:flex-row justify-between w-full border-b border-green-800/50 pb-6 gap-4">
                <div>
                    <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#39ff14] to-[#00f3ff]">ISURU UDANA</h1>
                    <p className="text-gray-400 mt-2 text-lg flex items-center gap-2">
                        <TerminalSquare size={18} className="text-[#39ff14]" /> DevOps Enthusiast
                    </p>
                </div>
                <div className="flex items-center gap-4 text-sm font-mono">
                    <div className="px-3 py-1 bg-green-900/40 border border-green-500/50 rounded flex items-center gap-2 shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        SYSTEM STATUS: ONLINE
                    </div>
                    <div className="px-3 py-1 bg-blue-900/40 border border-blue-500/50 text-[#00f3ff] rounded flex items-center gap-2 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                        DEPLOYMENTS: 100%
                    </div>
                </div>
            </header>

            {/* Grid sections */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Core Competencies Box */}
                <motion.div variants={itemVariants} className="md:col-span-2 bg-[#0a0a0d]/90 backdrop-blur-md border border-green-500/30 p-6 rounded-lg relative overflow-hidden group hover:border-[#39ff14]/70 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(57,255,20,0.15)]">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#39ff14] to-[#00f3ff] opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h2 className="text-2xl mb-6 text-[#39ff14] flex items-center gap-3 font-semibold tracking-wider"><Server className="text-green-400" /> Core Infrastructure</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'Ansible', 'Linux', 'Jenkins', 'GitOps'].map((skill) => (
                            <div key={skill} className="bg-black/60 border border-green-900/80 p-3 rounded text-center text-sm font-semibold hover:bg-green-900/40 hover:border-[#39ff14]/50 hover:text-[#39ff14] cursor-default transition-all duration-300">
                                {skill}
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Bio Box */}
                <motion.div variants={itemVariants} className="bg-[#0a0a0d]/90 backdrop-blur-md border border-blue-500/30 p-6 rounded-lg relative overflow-hidden group hover:border-[#00f3ff]/70 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(0,243,255,0.15)]">
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#00f3ff] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <h2 className="text-2xl mb-4 text-[#00f3ff] flex items-center gap-3 font-semibold tracking-wider"><Shield className="text-blue-400" /> Identity Overlay</h2>
                    <p className="text-gray-300 leading-relaxed text-sm mt-4">
                        Passionate about bridging the gap between development and operations. I specialize in designing scalable architectures, automating full lifecycle deliveries, and securing multi-cloud platforms.
                    </p>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
                {/* Past Projects */}
                <motion.div variants={itemVariants} className="bg-[#0a0a0d]/90 backdrop-blur-md border border-green-500/30 p-6 rounded-lg relative overflow-hidden hover:border-[#39ff14]/70 transition-colors shadow-lg h-full">
                    <h2 className="text-2xl mb-6 text-[#39ff14] flex items-center gap-3 font-semibold tracking-wider"><Globe className="text-green-400" /> Active Deployments</h2>
                    <div className="space-y-4">
                        <div className="p-4 border border-green-900/60 rounded-md bg-black/50 hover:bg-black/80 hover:border-green-500/40 transition-all duration-300">
                            <h3 className="text-[#00f3ff] font-bold text-lg mb-2">Microservices E-Commerce Platform</h3>
                            <p className="text-sm text-gray-400 mb-3 leading-relaxed">Deployed a fully resilient architecture on AWS EKS using Auto Scaling and Istio Service Mesh.</p>
                            <div className="flex gap-2">
                                <span className="text-xs px-2 py-1 bg-green-950/50 border border-green-900 text-green-300 rounded">Kubernetes</span>
                                <span className="text-xs px-2 py-1 bg-green-950/50 border border-green-900 text-green-300 rounded">Terraform</span>
                            </div>
                        </div>
                        <div className="p-4 border border-green-900/60 rounded-md bg-black/50 hover:bg-black/80 hover:border-green-500/40 transition-all duration-300">
                            <h3 className="text-[#00f3ff] font-bold text-lg mb-2">Zero-Downtime CI/CD Pipelines</h3>
                            <p className="text-sm text-gray-400 mb-3 leading-relaxed">Automated end-to-end delivery using GitHub Actions and ArgoCD for immutable GitOps state.</p>
                            <div className="flex gap-2">
                                <span className="text-xs px-2 py-1 bg-blue-950/50 border border-blue-900 text-[#00f3ff] rounded">ArgoCD</span>
                                <span className="text-xs px-2 py-1 bg-blue-950/50 border border-blue-900 text-[#00f3ff] rounded">Jenkins</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Telemetry/Metrics Panel */}
                <motion.div variants={itemVariants} className="bg-[#0a0a0d]/90 backdrop-blur-md border border-blue-500/30 p-6 rounded-lg relative overflow-hidden hover:border-[#00f3ff]/70 transition-colors shadow-lg h-full flex flex-col">
                    <h2 className="text-2xl mb-6 text-[#00f3ff] flex items-center gap-3 font-semibold tracking-wider"><Database className="text-blue-400" /> Telemetry Logs</h2>
                    <div className="flex-1 min-h-[200px] w-full border border-green-900/70 bg-black/60 rounded-md flex flex-col justify-end p-2 gap-2 items-end relative overflow-hidden shadow-inner">
                        {/* Decorative bar chart metrics */}
                        <div className="w-full flex justify-between items-end h-full px-4 gap-2 opacity-80 z-10">
                            {[40, 70, 45, 90, 65, 80, 55, 100, 30, 85].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ duration: 1.5, delay: i * 0.1, type: "spring" }}
                                    className="w-full bg-[#155e2d] rounded-t relative group min-w-[12px] opacity-70 hover:opacity-100 hover:bg-[#22c55e] transition-colors"
                                >
                                    <div className="absolute top-0 w-full h-1 bg-[#39ff14] shadow-[0_0_5px_#39ff14]"></div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Grid overlay */}
                        <div className="absolute inset-0 pointer-events-none z-0" style={{
                            backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px)',
                            backgroundSize: '100% 20%',
                        }}></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-20"></div>
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-gray-400 font-mono">
                        <span>CPU Utilization (24h)</span>
                        <span className="text-[#39ff14] font-bold">Peak: 12%</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
