"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TerminalProps {
    onDeployComplete: () => void;
}

export default function Terminal({ onDeployComplete }: TerminalProps) {
    const [history, setHistory] = useState<string[]>([
        "Isuru's Portfolio OS v1.0.0",
        "Type 'help' to see available commands.",
    ]);
    const [input, setInput] = useState("");
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    const handleCommand = async (cmd: string) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;

        setHistory((prev) => [...prev, `user@isuru-os:~$ ${trimmed}`]);

        switch (trimmed.toLowerCase()) {
            case "help":
                setHistory((prev) => [
                    ...prev,
                    "Available commands:",
                    "  help       - Lists all available commands.",
                    "  whoami     - Shows brief bio of Isuru Udana.",
                    "  ls skills  - Lists core DevOps tools.",
                    "  deploy     - Triggers deployment sequence.",
                ]);
                break;
            case "whoami":
                setHistory((prev) => [
                    ...prev,
                    "Isuru Udana - A passionate DevOps Enthusiast and Systems Engineer.",
                    "Specializing in automating workflows, managing infrastructure, and ensuring seamless delivery.",
                ]);
                break;
            case "ls skills":
                setHistory((prev) => [
                    ...prev,
                    "Docker      [||||||||||] 100%",
                    "Kubernetes  [||||||||| ]  90%",
                    "AWS         [||||||||| ]  90%",
                    "Ansible     [||||||||  ]  80%",
                    "Terraform   [||||||||  ]  80%",
                    "Linux       [||||||||||] 100%",
                ]);
                break;
            case "deploy":
                setHistory((prev) => [...prev, "Initiating global deployment sequence..."]);
                setInput(""); // prevent further typing

                const logs = [
                    "Pulling generic linux image...",
                    "Setting up environment...",
                    "Running tests: [jest, cypress]...",
                    "Tests passed successfully.",
                    "Building production assets...",
                    "Optimizing Docker container...",
                    "Pushing image to internal registry...",
                    "Deploying to AWS Elastic Kubernetes Service...",
                    "Waiting for pods to be ready...",
                    "Deployment successful!",
                    "Switching to graphical UI layout...",
                ];

                for (const log of logs) {
                    await new Promise((res) => setTimeout(res, 600 + Math.random() * 400));
                    setHistory((prev) => [...prev, `[INFO] ${log}`]);
                }

                setTimeout(() => {
                    onDeployComplete();
                }, 1500);
                return;
            case "clear":
                setHistory([]);
                break;
            default:
                setHistory((prev) => [...prev, `bash: ${trimmed}: command not found`]);
                break;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
            className="md:w-3/4 w-full h-[70vh] bg-black/80 backdrop-blur border border-green-500 rounded-md p-4 overflow-y-auto font-mono text-green-500 shadow-[0_0_20px_rgba(34,197,94,0.3)] relative group flex flex-col"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex items-center gap-2 mb-4 border-b border-green-800 pb-2 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-80"></div>
                <span className="text-gray-400 text-sm ml-2">bash - 80x24 - isuru-os</span>
            </div>

            <div className="flex-1 overflow-y-auto">
                {history.map((line, i) => (
                    <div key={i} className="whitespace-pre-wrap">{line}</div>
                ))}

                <div className="flex items-center mt-1">
                    <span className="mr-2 text-green-300">user@isuru-os:-$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        className="bg-transparent outline-none flex-1 text-green-500 caret-green-500 shadow-none border-none focus:ring-0 p-0"
                        value={input}
                        disabled={history[history.length - 1] === "Switching to graphical UI layout..."}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleCommand(input);
                                setInput("");
                            }
                        }}
                        autoComplete="off"
                        spellCheck="false"
                    />
                </div>
                <div ref={bottomRef} className="h-4" />
            </div>
        </motion.div>
    );
}
