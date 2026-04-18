"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, Users, FileText, BarChart2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const phases = [
  {
    number: "01",
    phase: "初步诊断",
    phaseEn: "Discovery",
    title: "了解您的业务现状",
    icon: Users,
    duration: "第1-2周",
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    textColor: "text-blue-400",
    description:
      "没有好的诊断，就没有好的方案。我们花足够的时间真正了解您的业务——不是通过表面调查，而是深入到日常工作中观察、倾听和理解。",
    activities: [
      {
        title: "管理层战略访谈",
        desc: "了解企业愿景、核心目标和当前面临的主要挑战",
      },
      {
        title: "一线员工流程访谈",
        desc: "了解实际工作中的痛点、低效环节和改进建议",
      },
      {
        title: "现有工具和系统盘点",
        desc: "梳理当前使用的软件、工具和数据存储情况",
      },
      {
        title: "关键业务指标收集",
        desc: "采集核心KPI数据，建立效率基准线",
      },
    ],
    deliverables: ["访谈记录摘要", "工具和系统清单", "初步痛点报告", "数据需求清单"],
  },
  {
    number: "02",
    phase: "深度分析",
    phaseEn: "Analysis",
    title: "识别瓶颈与AI机会",
    icon: BarChart2,
    duration: "第2-3周",
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/30",
    textColor: "text-indigo-400",
    description:
      "将收集到的信息转化为结构化的洞察。我们对每个业务流程进行量化分析，识别最高价值的AI化机会，并进行优先级排序。",
    activities: [
      {
        title: "全链路流程可视化",
        desc: "使用流程图工具将所有业务流程可视化，建立完整的流程地图",
      },
      {
        title: "瓶颈量化分析",
        desc: "量化每个节点的时间成本、错误率、人力投入和改进潜力",
      },
      {
        title: "AI机会评分矩阵",
        desc: "从可行性、影响力、实施难度三个维度为每个AI机会打分",
      },
      {
        title: "ROI预测建模",
        desc: "基于行业标准和已有案例，预测各项AI改造的投资回报",
      },
    ],
    deliverables: ["完整流程地图", "瓶颈分析报告", "AI机会清单（优先级排序）", "ROI预测模型"],
  },
  {
    number: "03",
    phase: "方案设计",
    phaseEn: "Design",
    title: "定制AI驱动的解决方案",
    icon: FileText,
    duration: "第3-4周",
    color: "from-violet-500 to-violet-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-400",
    description:
      "基于分析结果，为您企业的具体情况设计最合适的AI解决方案。我们不套用模板，每个方案都是针对您的业务量身定制。",
    activities: [
      {
        title: "AI工作流架构设计",
        desc: "设计新的人机协作工作流，明确AI负责什么、人负责什么",
      },
      {
        title: "技术选型与工具评估",
        desc: "基于需求、预算和现有技术栈，选择最合适的AI工具和平台",
      },
      {
        title: "系统架构规划",
        desc: "设计系统集成方案，确保新工具与现有系统顺畅对接",
      },
      {
        title: "分阶段实施路线图",
        desc: "制定详细的实施计划，明确里程碑、资源需求和风险预案",
      },
    ],
    deliverables: ["AI工作流设计图", "技术选型报告", "系统架构文档", "详细实施路线图"],
  },
  {
    number: "04",
    phase: "系统落地",
    phaseEn: "Implementation",
    title: "从设计到真正运行",
    icon: Clock,
    duration: "第4-8周",
    color: "from-blue-600 to-indigo-600",
    bgColor: "bg-blue-600/10",
    borderColor: "border-blue-600/30",
    textColor: "text-blue-300",
    description:
      "我们不只是交付设计文档，而是真正动手搭建系统。从初版开发到内测，到小范围试点，再到全面上线，我们全程陪伴，确保系统稳定运行并达到预期效果。",
    activities: [
      {
        title: "系统搭建与开发",
        desc: "根据设计方案，搭建自动化工作流、配置AI工具、集成系统",
      },
      {
        title: "内部测试与调优",
        desc: "使用真实数据进行测试，识别并修复问题，优化系统性能",
      },
      {
        title: "小范围试点运行",
        desc: "选择一个部门或业务场景先行试点，收集反馈并进一步优化",
      },
      {
        title: "全面上线与培训",
        desc: "系统全面上线，对团队成员进行培训，确保所有人会用、愿意用",
      },
    ],
    deliverables: ["正式运行的AI系统", "测试报告", "用户操作手册", "团队培训记录"],
  },
  {
    number: "05",
    phase: "持续优化",
    phaseEn: "Optimization",
    title: "持续迭代，不断成长",
    icon: CheckCircle,
    duration: "上线后持续",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    description:
      "系统上线是旅程的开始，不是终点。AI技术在快速进步，业务环境在不断变化。我们的持续优化服务确保您的AI系统始终保持最佳状态，并随着业务增长不断扩展。",
    activities: [
      {
        title: "系统性能监控",
        desc: "实时监控所有自动化流程的运行状态、成功率和处理量",
      },
      {
        title: "数据分析与洞察",
        desc: "定期分析系统运行数据，发现优化机会和潜在风险",
      },
      {
        title: "功能迭代升级",
        desc: "基于反馈和数据，持续改进系统功能，引入新的AI能力",
      },
      {
        title: "业务场景扩展",
        desc: "成功落地初始场景后，逐步将AI扩展到更多业务环节",
      },
    ],
    deliverables: ["月度性能报告", "优化实施记录", "新功能发布说明", "扩展规划建议"],
  },
];

export default function ProcessPageContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-20 lg:py-28 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0F1E3D 50%, #0A1628 100%)",
        }}
      >
        <div className="absolute inset-0 bg-dot-pattern-dark opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
              方法论
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            经过验证的
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              五阶段方法论
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-100/70 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            我们的方法论不是凭空设计的，而是在多个项目中反复验证、持续优化的结果。每一步都有明确的目标和可交付成果。
          </motion.p>

          {/* Phase pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {phases.map((phase) => (
              <a
                key={phase.number}
                href={`#phase-${phase.number}`}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full ${phase.bgColor} ${phase.textColor} border ${phase.borderColor} hover:opacity-80 transition-opacity`}
              >
                {phase.number} {phase.phase}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F8FAFF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-emerald-500 hidden md:block"
              style={{ marginLeft: "calc(3rem - 1px)" }}
            />

            <div className="flex flex-col gap-12">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <motion.div
                    key={phase.number}
                    id={`phase-${phase.number}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative md:pl-20"
                  >
                    {/* Timeline node */}
                    <div
                      className={`hidden md:flex absolute left-0 w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} items-center justify-center shadow-lg z-10`}
                    >
                      <span className="text-white font-black text-sm">{phase.number}</span>
                    </div>

                    {/* Phase card */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
                      {/* Header */}
                      <div
                        className={`p-6 border-b ${phase.borderColor}`}
                        style={{ background: `linear-gradient(to right, ${phase.bgColor.replace("bg-", "").replace("/10", "1a")}, transparent)` }}
                      >
                        <div className="flex flex-wrap items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-md md:hidden flex-shrink-0`}
                          >
                            <span className="text-white font-black">{phase.number}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                              <span
                                className={`text-xs font-bold tracking-widest uppercase ${phase.textColor}`}
                              >
                                Phase {phase.number} · {phase.phaseEn}
                              </span>
                              <span
                                className={`text-xs font-medium px-2.5 py-1 rounded-full ${phase.bgColor} ${phase.textColor} border ${phase.borderColor}`}
                              >
                                {phase.duration}
                              </span>
                            </div>
                            <h2
                              className="text-2xl font-bold"
                              style={{ color: "#0A1628" }}
                            >
                              {phase.phase}：{phase.title}
                            </h2>
                          </div>
                          <div
                            className={`w-12 h-12 rounded-xl ${phase.bgColor} flex items-center justify-center flex-shrink-0`}
                          >
                            <Icon className={`w-6 h-6 ${phase.textColor}`} />
                          </div>
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left */}
                        <div>
                          <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            {phase.description}
                          </p>
                          <h3
                            className={`text-sm font-bold mb-3 ${phase.textColor}`}
                          >
                            核心活动
                          </h3>
                          <div className="flex flex-col gap-3">
                            {phase.activities.map((activity) => (
                              <div
                                key={activity.title}
                                className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100"
                              >
                                <div
                                  className={`w-2 h-2 rounded-full bg-gradient-to-br ${phase.color} flex-shrink-0 mt-1.5`}
                                />
                                <div>
                                  <p
                                    className="text-sm font-semibold mb-0.5"
                                    style={{ color: "#0A1628" }}
                                  >
                                    {activity.title}
                                  </p>
                                  <p className="text-xs text-gray-500 leading-relaxed">
                                    {activity.desc}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Right: Deliverables */}
                        <div>
                          <h3
                            className={`text-sm font-bold mb-3 ${phase.textColor}`}
                          >
                            交付成果
                          </h3>
                          <div className="grid grid-cols-1 gap-2 mb-6">
                            {phase.deliverables.map((d) => (
                              <div
                                key={d}
                                className={`flex items-center gap-2 p-3 rounded-xl ${phase.bgColor} border ${phase.borderColor}`}
                              >
                                <CheckCircle
                                  className={`w-4 h-4 ${phase.textColor} flex-shrink-0`}
                                />
                                <span
                                  className={`text-sm font-medium ${phase.textColor}`}
                                >
                                  {d}
                                </span>
                              </div>
                            ))}
                          </div>
                          <Link
                            href="/contact"
                            className={`inline-flex items-center gap-2 text-sm font-semibold ${phase.textColor} group`}
                          >
                            了解这个阶段更多详情
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="常见问题"
            title="关于我们方法论"
            titleHighlight="的问题"
            align="center"
            light={false}
          />
          <div className="mt-12 grid grid-cols-1 gap-4">
            {[
              {
                q: "整个项目需要多长时间？",
                a: "典型项目从启动到系统上线大约需要4-8周，具体时间取决于项目复杂度和您团队的配合程度。持续优化服务是长期进行的。",
              },
              {
                q: "我们的团队需要花多少时间参与？",
                a: "诊断阶段需要管理层配合1-2次访谈（各约60分钟）。系统落地阶段需要指定1-2名内部联系人进行日常沟通和测试反馈。",
              },
              {
                q: "如果中途需求发生变化怎么办？",
                a: "这是很常见的情况。我们采用敏捷迭代方式，能够灵活应对需求变化。重大变更会与您协商并更新项目计划。",
              },
              {
                q: "你们用什么技术和工具？",
                a: "我们不绑定特定工具，而是根据您的需求选择最合适的方案。常用工具包括n8n、Make、Zapier（自动化），以及OpenAI、Anthropic Claude（AI能力），以及各类CRM、数据分析工具。",
              },
            ].map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl p-6 border border-white/10"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <h3 className="text-white font-semibold mb-2">{faq.q}</h3>
                <p className="text-blue-100/50 text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 transition-all"
            >
              预约免费咨询，深入了解
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
