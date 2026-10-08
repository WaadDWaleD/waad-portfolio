'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  MapPin,
  Sparkles,
  Brain,
  Code2,
  CheckCircle2,
  Cpu,
  Layers,
  Award,
} from 'lucide-react';
import { personalInfo, educationData } from '@/data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Deep Learning Mastery',
      description:
        'Hands-on computer vision modeling, 3D hand tracking with MediaPipe, and real-time deep neural networks with TensorFlow.',
      color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
    },
    {
      icon: Code2,
      title: 'Full-Stack & Frontend Architecture',
      description:
        'Building fast, accessible, responsive web interfaces with Next.js App Router, React, Tailwind CSS, and REST API integration.',
      color: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
    },
    {
      icon: GraduationCap,
      title: 'Rigorous CS Fundamentals',
      description:
        'Capital University graduate with deep grounding in Algorithms, Data Structures, OOP, Database Systems, and Software Engineering.',
      color: 'text-blue-400 border-blue-500/20 bg-blue-500/10',
    },
    {
      icon: Award,
      title: 'Impact-Driven Engineering',
      description:
        'Engineered an assistive Egyptian Sign Language system as a graduation capstone, translating complex AI research into real-world utility.',
      color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 // Background &amp; Philosophy</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Engineering With <span className="text-gradient">Precision &amp; Intelligence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl"
          >
            A closer look into my technical journey, academic background, and passion for building next-generation digital products.
          </motion.p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Side: Narrative Biography */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="glass-card rounded-2xl p-8 border border-slate-200 dark:border-slate-800 space-y-5">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Passionate Software Engineer &amp; AI Specialist
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                I am a Computer Science and Artificial Intelligence graduate from{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Capital University
                </strong>{' '}
                based in Giza, Egypt. My academic and practical journey is centered on blending modern front-end web engineering with advanced machine learning and computer vision architectures.
              </p>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                Whether implementing high-performance responsive web applications using{' '}
                <span className="text-cyan-600 dark:text-cyan-400 font-medium">Next.js &amp; Tailwind CSS</span>, or training convolutional neural networks with{' '}
                <span className="text-purple-600 dark:text-purple-400 font-medium">TensorFlow, MediaPipe, and OpenCV</span>, I focus on delivering clean, scalable, and human-centric software.
              </p>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-4 text-xs font-mono text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-purple-500" />
                  <span>Capital University (2022 – 2026)</span>
                </div>
              </div>
            </div>

            {/* Quick Core Strengths Box */}
            <div className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                Core Engineering Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Modern React &amp; Next.js App Router</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                  <span>Computer Vision &amp; Image Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>Deep Learning (CNNs, MediaPipe)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                  <span>End-to-End ML Pipelines (Scikit-learn)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Tailwind CSS &amp; Fluid Responsive UX</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Relational Database Modeling (MySQL)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Four Interactive Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glow-card glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${item.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
