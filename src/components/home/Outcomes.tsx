"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const metrics = [
  {
    value: 60,
    suffix: "%+",
    label: "效率提升",
    labelEn: "Efficiency Gain",
    description: "流程自动化后，团队完成相同工作所需时间大幅缩短",
    color: "from-blue-500 to-blue-600",
    textColor: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    value: 40,
    suffix: "%",
    label: "人工成本降低",
    labelEn: "Labor Cost Reduction",
    description: "重复性任务由AI处理，人力可集中在更高价值的工作上",
    color: "from-indigo-500 to-indigo-600",
    textColor: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
  {
    value: 35,
    suffix: "%",
    label: "转化率提升",
    labelEn: "Conversion Improvement",
    description: "AI驱动的线索跟进和个性化体验显著提升销售转化",
    color: "from-violet-500 to-violet-600",
    textColor: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
  },
  {
    value: 98,
    suffix: "%",
    label: "客户满意度",
    labelEn: "Client Satisfaction",
    description: "我们以结果说话，每个项目都以客户满意为最终标准",
    color: "from-emerald-500 to-teal-500",
    textColor: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    value: 8,
    prefix: "<",
    suffix: "周",
    label: "系统落地周期",
    labelEn: "Time to Deploy",
    description: "从项目启动到系统上线，快速交付可见成果",
    color: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
];

function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
  isInView,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;
    const endValue = value;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (endValue - startValue) * eased);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
}

export default function Outcomes() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="outcomes"
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-40" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="真实成果"
          title="可量化的"
          titleHighlight="实际价值"
          subtitle="我们相信结果说话。以下是太耀未来项目交付后，客户在业务上看到的真实改变。"
          align="center"
          light={false}
        />

        {/* Metrics grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-6 border ${metric.borderColor} ${metric.bgColor} hover:border-opacity-40 transition-all duration-300 flex flex-col items-center text-center group`}
            >
              {/* Gradient glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}
              />

              {/* Large number */}
              <div
                className={`text-5xl lg:text-4xl xl:text-5xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-br ${metric.color} leading-none`}
              >
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  isInView={isInView}
                  duration={2 + index * 0.2}
                />
              </div>

              {/* Label */}
              <h3 className="text-white font-bold text-sm mb-1">
                {metric.label}
              </h3>
              <p className={`text-xs ${metric.textColor} opacity-70 mb-3`}>
                {metric.labelEn}
              </p>

              {/* Divider */}
              <div className={`w-12 h-px bg-gradient-to-r ${metric.color} opacity-40 mb-3`} />

              {/* Description */}
              <p className="text-blue-100/45 text-xs leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-white/25 text-xs">
            * 数据基于已完成项目的平均结果。具体成果因企业规模、行业和实施范围而有所不同。
          </p>
        </motion.div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {[
            {
              quote: "太耀未来帮助我们把客服响应从24小时缩短到了2分钟，团队效率翻了一倍。",
              author: "某连锁教育机构 COO",
              initials: "张",
              color: "from-blue-500 to-indigo-500",
            },
            {
              quote: "原本需要5个人做的数据整理工作，现在1个AI系统就能自动完成，准确率更高。",
              author: "某本地服务连锁 创始人",
              initials: "李",
              color: "from-indigo-500 to-violet-500",
            },
            {
              quote: "从诊断到系统上线只用了6周，比我预期的快多了，而且系统非常稳定。",
              author: "某专业服务机构 总经理",
              initials: "王",
              color: "from-violet-500 to-purple-500",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 border border-white/8 flex flex-col gap-4"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <p className="text-blue-100/60 text-sm leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div
                  className={`w-9 h-9 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-white font-bold text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <p className="text-blue-200/50 text-xs">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
