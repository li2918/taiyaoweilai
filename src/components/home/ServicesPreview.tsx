"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Activity,
  GitMerge,
  Bot,
  Cpu,
  LineChart,
  ArrowRight,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const services = [
  {
    id: "diagnostics",
    icon: Activity,
    title: "AI运营诊断",
    titleEn: "AI Process Audit",
    description:
      "深度分析企业全链路运营流程，识别低效节点和AI化机会，交付可执行的优化路线图。",
    highlights: ["流程可视化建模", "瓶颈量化分析", "AI机会打分"],
    color: "blue",
    gradient: "from-blue-500 to-blue-600",
    lightBg: "bg-blue-50",
    textColor: "text-blue-600",
    bgAccent: "bg-blue-600/10",
  },
  {
    id: "redesign",
    icon: GitMerge,
    title: "流程重构设计",
    titleEn: "Process Redesign",
    description:
      "不只是优化现有流程，而是以终为始，重新设计以AI为驱动的新工作流，消除根本性低效。",
    highlights: ["端到端流程设计", "AI嵌入点规划", "团队协同优化"],
    color: "indigo",
    gradient: "from-indigo-500 to-indigo-600",
    lightBg: "bg-indigo-50",
    textColor: "text-indigo-600",
    bgAccent: "bg-indigo-600/10",
  },
  {
    id: "automation",
    icon: Bot,
    title: "AI自动化系统",
    titleEn: "AI Automation",
    description:
      "搭建端到端的自动化解决方案，将重复性任务交给AI处理，让您的团队专注高价值工作。",
    highlights: ["工作流自动化", "系统集成对接", "异常处理机制"],
    color: "violet",
    gradient: "from-violet-500 to-violet-600",
    lightBg: "bg-violet-50",
    textColor: "text-violet-600",
    bgAccent: "bg-violet-600/10",
  },
  {
    id: "agent",
    icon: Cpu,
    title: "AI Agent集成",
    titleEn: "AI Agent Integration",
    description:
      "将智能AI Agent嵌入您的业务流程，实现复杂任务的自动推理、决策和执行，提升业务智能化水平。",
    highlights: ["多Agent协作架构", "业务系统集成", "知识库构建"],
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
    lightBg: "bg-cyan-50",
    textColor: "text-cyan-600",
    bgAccent: "bg-cyan-600/10",
  },
  {
    id: "consulting",
    icon: LineChart,
    title: "持续优化顾问",
    titleEn: "Ongoing Optimization",
    description:
      "系统上线不是终点。我们提供长期优化咨询，持续监控效果，迭代改进，确保AI投资的持续回报。",
    highlights: ["KPI监控仪表盘", "月度优化复盘", "新场景扩展"],
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    lightBg: "bg-emerald-50",
    textColor: "text-emerald-600",
    bgAccent: "bg-emerald-600/10",
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F8FAFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="核心服务"
          title="五大服务"
          titleHighlight="全程覆盖"
          subtitle="从发现问题到系统落地，从单点优化到持续增长，太耀未来提供完整的AI转型服务体系。"
          align="center"
          light={true}
        />

        {/* Services grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Top: icon + number */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-13 h-13 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg w-14 h-14`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-4xl font-black text-gray-100 group-hover:text-gray-50 transition-colors leading-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">
                    {service.titleEn}
                  </p>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: "#0A1628" }}
                  >
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${service.lightBg} ${service.textColor}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <Link
                  href={`/services#${service.id}`}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold ${service.textColor} group/link`}
                >
                  了解更多
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Hover border accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 group"
          >
            咨询服务方案
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
