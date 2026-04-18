"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  GitMerge,
  Bot,
  Cpu,
  LineChart,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    id: "diagnostics",
    icon: Activity,
    title: "AI运营诊断",
    titleEn: "AI Process Audit",
    tagline: "先诊断，再开方",
    description:
      "在引入任何AI工具之前，我们首先深入了解您企业的真实运营状态。通过系统性的诊断方法，识别最高价值的AI化机会，避免浪费预算在错误的方向上。",
    whatWeDo: [
      "深度访谈管理层和关键岗位员工",
      "全链路业务流程可视化建模",
      "每个流程节点的效率数据采集",
      "AI适用性评估与机会打分",
      "竞争对手AI应用情况分析",
      "定制化AI转型优先级路线图",
    ],
    howWeDo:
      "我们通过结构化访谈、流程观察和数据分析三位一体的方法，在2-3周内完成全面诊断。所有发现都会整理成可视化报告，让您一目了然地了解当前状态和改进机会。",
    whoFor: [
      "想评估AI投资回报的企业主",
      "感知到效率问题但不知从哪入手的团队",
      "准备进行数字化转型的中小企业",
    ],
    outcomes: ["清晰的流程地图", "AI机会优先级排序", "预期ROI测算", "实施路线图"],
    duration: "2-3周",
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
  },
  {
    id: "redesign",
    icon: GitMerge,
    title: "流程重构设计",
    titleEn: "Process Redesign",
    tagline: "不是优化，是重建",
    description:
      "很多企业的问题不在于执行，而在于流程本身就是错的。我们不只是在现有流程上打补丁，而是以终为始，重新设计以AI为驱动核心的新工作流，从根本上消除低效。",
    whatWeDo: [
      "基于诊断结果重新设计业务流程",
      "识别可被AI替代或增强的每个节点",
      "设计人机协作的新工作模式",
      "制定详细的流程切换计划",
      "创建标准操作手册(SOP)",
      "设计关键绩效指标(KPI)体系",
    ],
    howWeDo:
      "我们采用设计思维方法，与您的团队共同参与流程设计。通过原型验证、小范围测试到全面推广的渐进式方式，降低切换风险，确保新流程被团队真正接受和执行。",
    whoFor: [
      "现有流程混乱，需要系统化梳理的企业",
      "准备引入AI但需要先整理好流程的团队",
      "正在快速扩张，需要可复制流程的企业",
    ],
    outcomes: ["重构后的流程设计图", "人机协作规范", "SOP文档", "KPI体系设计"],
    duration: "3-4周",
    gradient: "from-indigo-500 to-indigo-600",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-700",
    borderColor: "border-indigo-200",
  },
  {
    id: "automation",
    icon: Bot,
    title: "AI自动化系统",
    titleEn: "AI Automation Systems",
    tagline: "让重复的工作消失",
    description:
      "将您业务中的重复性、规律性任务交给AI处理。从邮件自动分类回复，到客户入职流程，到数据整理分析，我们搭建端到端的自动化系统，让您的团队从繁琐中解放。",
    whatWeDo: [
      "需求分析与自动化场景梳理",
      "选择最适合的自动化工具和平台",
      "设计和搭建自动化工作流",
      "系统集成与数据打通",
      "异常处理和人工介入机制设计",
      "测试、优化和正式部署",
    ],
    howWeDo:
      "我们使用包括n8n、Make、Zapier等主流自动化平台，以及OpenAI、Anthropic等AI API，根据您的具体需求和技术栈选择最合适的方案。我们负责从设计到部署的全过程，并提供完整的操作文档。",
    whoFor: [
      "有大量重复性工作的运营团队",
      "希望在不增加人力的情况下扩大规模",
      "多个系统数据分散，需要整合的企业",
    ],
    outcomes: ["运行稳定的自动化工作流", "系统集成文档", "操作手册", "监控仪表盘"],
    duration: "4-6周",
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    textColor: "text-violet-700",
    borderColor: "border-violet-200",
  },
  {
    id: "agent",
    icon: Cpu,
    title: "AI Agent集成",
    titleEn: "AI Agent Integration",
    tagline: "智能决策，自动执行",
    description:
      "AI Agent代表了AI应用的新一代范式——不只是执行简单任务，而是能够理解上下文、进行推理、做出决策并自动执行复杂任务链。我们将AI Agent深度嵌入您的业务流程。",
    whatWeDo: [
      "业务场景Agent适用性分析",
      "定制化Agent提示词工程",
      "知识库构建与向量数据库配置",
      "多Agent协作架构设计",
      "与现有业务系统集成",
      "Agent性能监控与优化",
    ],
    howWeDo:
      "我们基于RAG（检索增强生成）架构，为您的企业构建专属知识库，让AI Agent真正了解您的业务。支持对接主流CRM、ERP、通讯工具等系统，实现真正的业务智能化。",
    whoFor: [
      "需要处理复杂、多步骤业务场景的企业",
      "拥有大量内部知识需要被AI利用的团队",
      "希望打造智能客服或智能助理的企业",
    ],
    outcomes: ["部署就绪的AI Agent系统", "企业知识库", "集成API文档", "性能监控体系"],
    duration: "6-10周",
    gradient: "from-cyan-500 to-blue-500",
    lightBg: "bg-cyan-50",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-200",
  },
  {
    id: "consulting",
    icon: LineChart,
    title: "持续优化顾问",
    titleEn: "Ongoing Optimization",
    tagline: "系统上线不是终点",
    description:
      "AI系统需要持续迭代才能发挥最大价值。市场在变，业务在变，AI技术也在快速进步。我们提供长期顾问服务，确保您的AI系统持续优化，始终领先于竞争对手。",
    whatWeDo: [
      "每月系统性能分析报告",
      "基于数据的优化建议和实施",
      "新AI技术和工具的评估引入",
      "团队AI能力培训和提升",
      "新业务场景的AI化扩展",
      "季度战略复盘和路线图更新",
    ],
    howWeDo:
      "我们通过月度汇报会、实时监控仪表盘和专属顾问联系方式，确保随时掌握系统运行状态。当出现问题或发现新机会时，我们第一时间响应，为您的持续增长保驾护航。",
    whoFor: [
      "已完成AI初步落地，希望持续优化的企业",
      "AI技术快速变化，需要专业指导的团队",
      "希望将AI作为核心竞争力持续建设的企业",
    ],
    outcomes: ["月度优化报告", "系统KPI仪表盘", "新功能持续迭代", "专属顾问支持"],
    duration: "月度续签",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
  },
];

export default function ServicesPageContent() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
              核心服务
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            从诊断到落地
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              五大专业服务
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-100/70 leading-relaxed max-w-2xl mx-auto"
          >
            无论您处于AI转型的哪个阶段，太耀未来都有对应的服务帮助您迈出下一步。
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "#F8FAFF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expandedId === service.id;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`bg-white rounded-2xl border shadow-card overflow-hidden transition-all duration-300 ${
                    isExpanded ? "shadow-card-hover border-blue-200" : "border-gray-100"
                  }`}
                >
                  {/* Card header */}
                  <button
                    onClick={() =>
                      setExpandedId(isExpanded ? null : service.id)
                    }
                    className="w-full text-left"
                  >
                    <div className="flex items-start sm:items-center gap-5 p-6 sm:p-7">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg flex-shrink-0`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>

                      {/* Title */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-3 mb-1">
                          <h2
                            className="text-xl sm:text-2xl font-bold"
                            style={{ color: "#0A1628" }}
                          >
                            {service.title}
                          </h2>
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${service.lightBg} ${service.textColor}`}
                          >
                            {service.tagline}
                          </span>
                          <span className="text-xs text-gray-400 ml-auto">
                            约{service.duration}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm line-clamp-2">
                          {service.description}
                        </p>
                      </div>

                      {/* Expand toggle */}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 ml-2"
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`border-t ${service.borderColor} p-6 sm:p-7 grid grid-cols-1 lg:grid-cols-2 gap-8`}
                        >
                          {/* Left: What we do + How */}
                          <div className="flex flex-col gap-6">
                            <div>
                              <h3
                                className={`text-base font-bold mb-3 ${service.textColor}`}
                              >
                                我们做什么
                              </h3>
                              <ul className="flex flex-col gap-2">
                                {service.whatWeDo.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2 text-sm text-gray-600"
                                  >
                                    <CheckCircle
                                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.textColor}`}
                                    />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3
                                className={`text-base font-bold mb-2 ${service.textColor}`}
                              >
                                我们怎么做
                              </h3>
                              <p className="text-gray-500 text-sm leading-relaxed">
                                {service.howWeDo}
                              </p>
                            </div>
                          </div>

                          {/* Right: Who it's for + Outcomes */}
                          <div className="flex flex-col gap-6">
                            <div>
                              <h3
                                className={`text-base font-bold mb-3 ${service.textColor} flex items-center gap-2`}
                              >
                                <Users className="w-4 h-4" />
                                适合哪些企业
                              </h3>
                              <ul className="flex flex-col gap-2">
                                {service.whoFor.map((item) => (
                                  <li
                                    key={item}
                                    className="flex items-start gap-2 text-sm text-gray-600"
                                  >
                                    <Target
                                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.textColor}`}
                                    />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h3
                                className={`text-base font-bold mb-3 ${service.textColor} flex items-center gap-2`}
                              >
                                <TrendingUp className="w-4 h-4" />
                                交付成果
                              </h3>
                              <div className="grid grid-cols-2 gap-2">
                                {service.outcomes.map((outcome) => (
                                  <div
                                    key={outcome}
                                    className={`text-xs font-medium px-3 py-2 rounded-lg ${service.lightBg} ${service.textColor} text-center`}
                                  >
                                    {outcome}
                                  </div>
                                ))}
                              </div>
                            </div>

                            <Link
                              href="/contact"
                              className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg mt-auto`}
                            >
                              咨询这项服务
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20" style={{ backgroundColor: "#0A1628" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            badge="合作流程"
            title="如何开始"
            titleHighlight="合作"
            subtitle="我们让整个启动过程尽可能简单。三步即可开始您的AI转型之旅。"
            align="center"
            light={false}
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "预约初次咨询",
                desc: "填写联系表单或发送邮件，我们1个工作日内与您约定免费咨询时间。",
              },
              {
                step: "02",
                title: "免费诊断会议",
                desc: "60分钟深度沟通，了解您的业务现状和目标，提供初步的AI化建议。",
              },
              {
                step: "03",
                title: "定制方案报价",
                desc: "根据诊断结果，制定专属的服务方案和详细报价，无隐藏收费。",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl p-6 border border-white/10 text-left"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/30 transition-all"
            >
              立即预约免费咨询
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
