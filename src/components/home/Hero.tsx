"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronDown } from "lucide-react";

const trustItems = [
  "免费初步诊断",
  "1个工作日响应",
  "可量化效果保证",
];

const flowSteps = [
  { label: "现状分析", sublabel: "Process Audit", icon: "🔍", color: "from-blue-500 to-blue-600" },
  { label: "流程拆解", sublabel: "Process Map", icon: "🗺️", color: "from-indigo-500 to-indigo-600" },
  { label: "AI设计", sublabel: "AI Design", icon: "⚡", color: "from-violet-500 to-violet-600" },
  { label: "自动化落地", sublabel: "Deploy", icon: "🚀", color: "from-blue-600 to-indigo-600" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0A1628 0%, #0F1E3D 40%, #0A1628 100%)",
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-60" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-3xl" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-fit"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
                AI驱动的运营变革专家
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                用AI重构
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300">
                  你的运营流程
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-blue-100/70 leading-relaxed max-w-lg">
                我们帮助中小企业深度诊断运营瓶颈，设计并落地AI自动化解决方案，让您的团队专注于真正重要的事。
              </p>
              <p className="text-sm font-semibold tracking-widest text-blue-400/80 uppercase">
                Analyze · Optimize · Automate
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#cta"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-200 group"
              >
                预约免费咨询
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl border border-white/20 text-white font-semibold text-base hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                了解我们的方法
              </Link>
            </motion.div>

            {/* Trust items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-2"
            >
              {trustItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-blue-200/70 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right side: Animated Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex flex-col items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl blur-2xl" />

              {/* Card container */}
              <div className="relative glass-card rounded-3xl p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-medium mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                    AI转型路线图
                  </div>
                  <p className="text-white/60 text-sm">从现状到自动化，全程把控</p>
                </div>

                {/* Flow steps */}
                <div className="flex flex-col gap-0">
                  {flowSteps.map((step, index) => (
                    <div key={step.label} className="flex flex-col items-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                        className="w-full"
                      >
                        <div
                          className={`flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r ${step.color} bg-opacity-10 border border-white/10 hover:border-blue-500/40 transition-all duration-300`}
                          style={{
                            background: `linear-gradient(135deg, rgba(37,99,235,0.12), rgba(79,70,229,0.08))`,
                          }}
                        >
                          <div
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-xl shadow-lg flex-shrink-0`}
                          >
                            {step.icon}
                          </div>
                          <div className="flex-1">
                            <p className="text-white font-semibold text-base leading-none mb-1">
                              {step.label}
                            </p>
                            <p className="text-blue-300/60 text-xs">{step.sublabel}</p>
                          </div>
                          <div className="w-6 h-6 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center">
                            <svg className="w-3 h-3 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        </div>
                      </motion.div>

                      {/* Arrow connector */}
                      {index < flowSteps.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, scaleY: 0 }}
                          animate={{ opacity: 1, scaleY: 1 }}
                          transition={{ duration: 0.3, delay: 0.75 + index * 0.15 }}
                          className="flex flex-col items-center py-1"
                        >
                          <div className="w-px h-5 bg-gradient-to-b from-blue-500/60 to-indigo-500/60" />
                          <svg
                            className="w-4 h-4 text-indigo-400 -mt-1"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Result badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">平均效率提升</p>
                      <p className="text-blue-300/60 text-xs mt-0.5">实施后3个月内可见</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl font-bold text-gradient">60%+</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating stats */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl p-3 border border-blue-500/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-green-400 font-bold text-sm leading-none">+40%</p>
                    <p className="text-blue-200/50 text-xs">成本节省</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-3 border border-indigo-500/20"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-300 font-bold text-sm leading-none">&lt;8周</p>
                    <p className="text-blue-200/50 text-xs">落地周期</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300/50"
      >
        <p className="text-xs tracking-widest uppercase">向下滚动</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
