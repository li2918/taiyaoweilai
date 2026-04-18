"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="cta"
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1e40af 0%, #4338ca 50%, #1e40af 100%)",
        }}
      />

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-30" />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-900/30 rounded-full blur-3xl -translate-y-1/2" />

      {/* Decorative circles */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full border border-white/10" />
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full border border-white/10" />
      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full border border-white/10" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 border border-white/25 text-white text-sm font-medium mb-6"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          现在开始，免费咨询
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          准备好让AI
          <br />
          <span className="text-blue-200">重构你的运营了吗？</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-blue-100/80 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          预约一次免费的1对1咨询，我们将分析您的业务流程，识别AI化机会，并提供初步的优化建议——完全免费，无任何义务。
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 shadow-xl shadow-blue-900/30 transition-all duration-200 group"
          >
            <Calendar className="w-5 h-5" />
            预约免费咨询
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href="mailto:hello@taiyaofuture.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5" />
            直接发邮件咨询
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "✓ 完全免费，无任何费用",
            "✓ 1个工作日内回复",
            "✓ 不会强制销售",
            "✓ 保密，绝不泄露信息",
          ].map((item) => (
            <span
              key={item}
              className="text-blue-200/70 text-sm font-medium"
            >
              {item}
            </span>
          ))}
        </motion.div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            { number: "50+", label: "已服务企业", sub: "各行业中小企业" },
            { number: "4-8周", label: "落地周期", sub: "从启动到系统上线" },
            { number: "98%", label: "满意度", sub: "客户持续合作率" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 px-4 py-5 rounded-2xl bg-white/10 border border-white/15"
            >
              <span className="text-3xl font-black text-white">{stat.number}</span>
              <span className="text-white font-semibold text-sm">{stat.label}</span>
              <span className="text-blue-200/60 text-xs">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
