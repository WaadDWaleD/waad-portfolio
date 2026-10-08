'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  Terminal,
  Cpu,
  Sparkles,
  Download,
  Code,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import { personalInfo } from '@/data/portfolioData';

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const fullText = personalInfo.titles[currentTitleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseTime = 1800;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? fullText.substring(0, displayedText.length - 1)
            : fullText.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-mono tracking-wide mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Software Engineering & AI Roles</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4 text-slate-900 dark:text-white">
              Hi, I&apos;m{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
                Waad Waled
              </span>
            </h1>

            {/* Typewriter Title */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300 font-mono">
                &gt; {displayedText}
                <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
              </span>
            </div>

            {/* Bio Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mb-8">
              Computer Science &amp; Artificial Intelligence graduate from{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-medium">
                Capital University
              </span>
              . Bridging the gap between scalable modern web engineering (
              <span className="text-slate-800 dark:text-slate-200 font-medium">Next.js &amp; React</span>) and intelligent deep learning systems (
              <span className="text-slate-800 dark:text-slate-200 font-medium">TensorFlow, Computer Vision &amp; MediaPipe</span>).
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 hover:border-cyan-500/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-cyan-500" />
                <span>Contact Me</span>
              </Link>

              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 hover:text-cyan-400 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 hover:text-blue-400 hover:border-blue-500/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-200 dark:border-slate-800/80">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl font-bold font-mono text-cyan-600 dark:text-cyan-400">
                    {stat.value}
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: High-tech Visualizer Card & Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Back Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-2xl -z-10" />

            {/* Futuristic Terminal / AI Diagnostic Card */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-700/60 shadow-2xl relative overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    waad-waled@ai-system: ~
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Code / Pipeline Inspection Snippet */}
              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <p className="text-slate-500">// AI Model Architecture</p>
                  <p className="text-cyan-400">
                    <span className="text-purple-400">const</span> pipeline ={' '}
                    <span className="text-yellow-300">new</span> DeepVisionSystem({'{'}
                  </p>
                  <p className="pl-4 text-slate-300">
                    model: <span className="text-emerald-400">&apos;ESL-Egyptian-Sign&apos;</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    framework: <span className="text-emerald-400">&apos;TensorFlow + MediaPipe&apos;</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    landmarks: <span className="text-cyan-300">21_HandPoints_3D</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    realTimeAccuracy: <span className="text-emerald-400">&apos;98.2%&apos;</span>,
                  </p>
                  <p className="text-cyan-400">{'}'});</p>
                </div>

                {/* Live System Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col">
                    <span className="text-[10px] text-slate-400">Frontend Stack</span>
                    <span className="text-xs font-semibold text-cyan-400">Next.js 14 + Tailwind</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex flex-col">
                    <span className="text-[10px] text-slate-400">AI / ML Domain</span>
                    <span className="text-xs font-semibold text-purple-400">Computer Vision &amp; DL</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 flex items-center gap-2 text-emerald-300 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Graduation Project: Egyptian Sign Language System Ready</span>
                </div>
              </div>

              {/* Floating Pill Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-lg border border-purple-400/40 flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3" />
                <span>AI Specialist</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-3 -left-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-lg border border-cyan-400/40 flex items-center gap-1.5"
              >
                <Code className="w-3 h-3" />
                <span>Modern Web Dev</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
