"use client";

import { motion } from "framer-motion";
import { Search, Map, Lightbulb, Rocket } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "流程拆解",
    titleEn: "Decompose",
    description:
      "我们深入企业内部，通过访谈、观察和数据分析，将现有业务流程逐一拆解，找到每个环节的真实状态。",
    details: ["深度访谈关键岗位", "流程可视化建模", "瓶颈定位与量化"],
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    icon: Map,
    title: "AI机会识别",
    titleEn: "AI Opportunities",
    description:
      "基于流程地图，系统评估每个节点的AI化潜力，量化可节省的时间、成本和提升的质量。",
    details: ["AI适用性评估矩阵", "ROI预测模型", "优先级排序方案"],
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-600",
  },
  {
    number: "03",
    icon: Lightbulb,
    title: "方案设计",
    titleEn: "Solution Design",
    description:
      "结合业务目标和技术可行性，设计最适合您企业的AI解决方案，包括工具选型、架构设计和实施路线图。",
    details: ["定制化AI工作流设计", "系统架构规划", "分阶段实施计划"],
    color: "violet",
    gradient: "from-violet-500 to-violet-600",
  },
  {
    number: "04",
    icon: Rocket,
    title: "系统落地",
    titleEn: "Implementation",
    description:
      "我们不只交付方案文档，而是真正参与系统搭建、测试和上线，确保每个自动化节点稳定运行。",
    details: ["系统搭建与集成", "团队培训与交接", "持续监控与优化"],
    color: "blue",
    gradient: "from-blue-600 to-indigo-600",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; ring: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-100",
    ring: "ring-blue-100",
  },
  indigo: {
    bg: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-100",
    ring: "ring-indigo-100",
  },
  violet: {
    bg: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-100",
    ring: "ring-violet-100",
  },
};

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-50 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="我们的方法"
          title="我们如何"
          titleHighlight="解决问题"
          subtitle="太耀未来采用经过验证的四步方法论，确保AI解决方案真正契合您的业务需求，而不是生搬硬套。"
          align="center"
          light={true}
        />

        {/* Steps grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connecting line (desktop) */}
          <div className="absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200 hidden lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            const colors = colorMap[step.color] || colorMap.blue;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative flex flex-col"
              >
                {/* Step card */}
                <div className="flex flex-col gap-5 p-6 rounded-2xl border border-gray-100 bg-white shadow-card hover:shadow-card-hover transition-all duration-300 h-full group">
                  {/* Number + Icon */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border-2 border-gray-100 flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-gray-600">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <span className="text-5xl font-black text-gray-100 group-hover:text-blue-50 transition-colors leading-none">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col gap-2 flex-1">
                    <div>
                      <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">
                        {step.titleEn}
                      </p>
                      <h3 className="text-[#0A1628] text-xl font-bold" style={{ color: "#0A1628" }}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details list */}
                  <ul className="flex flex-col gap-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className={`flex items-center gap-2 text-xs font-medium ${colors.text} ${colors.bg} px-3 py-1.5 rounded-lg`}
                      >
                        <svg
                          className="w-3 h-3 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Arrow between steps (mobile/tablet) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-3 lg:hidden">
                    <svg
                      className="w-6 h-6 text-blue-300"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="/#how-it-works"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-indigo-600 font-semibold text-base group transition-colors"
          >
            了解完整方法论
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <span className="text-gray-300 hidden sm:block">|</span>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 transition-all"
          >
            立即预约免费诊断
          </a>
        </motion.div>
      </div>
    </section>
  );
}
