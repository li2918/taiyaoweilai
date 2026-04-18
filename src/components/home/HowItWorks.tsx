"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/shared/SectionHeader";

const steps = [
  {
    number: "01",
    label: "分析",
    labelEn: "Analyze",
    title: "深入了解企业运营现状",
    description:
      "我们从访谈开始。与您的核心团队深度对话，了解业务流程、痛点和目标。没有预设结论，只有真实聆听。",
    duration: "第1-2周",
    activities: [
      "管理层访谈",
      "一线员工沟通",
      "现有工具盘点",
      "关键指标收集",
    ],
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
  },
  {
    number: "02",
    label: "拆解",
    labelEn: "Map",
    title: "绘制全链路流程地图",
    description:
      "将所有业务流程可视化，识别每个节点的时间成本、错误率和人力投入，建立完整的流程基线。",
    duration: "第2-3周",
    activities: [
      "流程可视化建模",
      "瓶颈识别评估",
      "数据流追踪",
      "效率基线建立",
    ],
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
    textColor: "text-indigo-400",
  },
  {
    number: "03",
    label: "设计",
    labelEn: "Design",
    title: "制定AI驱动的解决方案",
    description:
      "基于流程地图，为每个高优先级节点设计AI解决方案，包括工具选型、集成方案和预期效果测算。",
    duration: "第3-4周",
    activities: [
      "AI方案架构设计",
      "工具选型评估",
      "ROI测算建模",
      "实施路线规划",
    ],
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-500/10",
    textColor: "text-violet-400",
  },
  {
    number: "04",
    label: "落地",
    labelEn: "Implement",
    title: "系统搭建、测试与上线",
    description:
      "我们亲自参与系统搭建、测试和上线，进行团队培训，确保每个自动化系统稳定运行并交付预期成果。",
    duration: "第4-8周",
    activities: [
      "系统搭建部署",
      "集成测试验证",
      "团队培训交接",
      "上线监控优化",
    ],
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-600/10",
    textColor: "text-blue-300",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#0A1628" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-50" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="工作方式"
          title="我们的"
          titleHighlight="工作方式"
          subtitle="透明、协作、以结果为导向。每个项目都遵循经过验证的四步流程，确保项目按时交付并超出预期。"
          align="center"
          light={false}
        />

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative group"
            >
              <div
                className="rounded-2xl p-7 border border-white/10 hover:border-blue-500/30 transition-all duration-300 h-full"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                {/* Header */}
                <div className="flex items-start gap-5 mb-5">
                  {/* Step circle */}
                  <div className="flex-shrink-0">
                    <div
                      className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex flex-col items-center justify-center shadow-lg`}
                    >
                      <span className="text-white/60 text-xs font-bold leading-none">
                        {step.number}
                      </span>
                      <span className="text-white font-black text-lg leading-none">
                        {step.label}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <p className={`text-xs font-semibold tracking-widest uppercase ${step.textColor}`}>
                        {step.labelEn}
                      </p>
                      <span className="text-xs text-white/30 bg-white/5 px-2.5 py-1 rounded-full border border-white/10 flex-shrink-0">
                        {step.duration}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-blue-100/55 text-sm leading-relaxed mb-5">
                  {step.description}
                </p>

                {/* Activities */}
                <div className="grid grid-cols-2 gap-2">
                  {step.activities.map((activity) => (
                    <div
                      key={activity}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg ${step.bgColor} border border-white/5`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} flex-shrink-0`}
                      />
                      <span className={`text-xs font-medium ${step.textColor}`}>
                        {activity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner number decoration */}
              <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "#0A1628" }}
              >
                <span className={`text-sm font-black ${step.textColor}`}>
                  {step.number}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 rounded-2xl border border-white/10"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <p className="text-white/60 text-sm text-center mb-5 font-medium">
            典型项目周期 — 从启动到系统上线
          </p>
          <div className="relative">
            <div className="flex items-center gap-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className="flex-1 relative"
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${step.color} ${
                      index === 0
                        ? "rounded-l-full"
                        : index === steps.length - 1
                        ? "rounded-r-full"
                        : ""
                    }`}
                  />
                  <div className="mt-2 px-1">
                    <p className={`text-xs font-semibold ${step.textColor}`}>
                      {step.label}
                    </p>
                    <p className="text-white/30 text-xs">{step.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-blue-300/50 text-xs mt-4">
            总周期：4-8周 · 视项目复杂度调整
          </p>
        </motion.div>
      </div>
    </section>
  );
}
