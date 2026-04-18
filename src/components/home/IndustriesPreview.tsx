"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const industries = [
  {
    id: "education",
    icon: "🎓",
    title: "教育培训",
    titleEn: "Education",
    description: "自动化学员管理、课程推荐和续费提醒，提升运营效率与学员体验。",
    aiUse: "AI客服 · 学习路径推荐 · 自动续费",
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textLight: "text-blue-600",
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "医疗健康",
    titleEn: "Healthcare",
    description: "简化预约流程、患者随访和健康管理，让医护人员专注于真正的医疗服务。",
    aiUse: "智能预约 · 患者随访 · 健康提醒",
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    textLight: "text-emerald-600",
  },
  {
    id: "retail",
    icon: "🛍️",
    title: "零售连锁",
    titleEn: "Retail",
    description: "智能库存管理、销售预测和客户忠诚度计划，驱动门店和电商双增长。",
    aiUse: "库存预测 · 个性化营销 · 客户分析",
    color: "from-orange-500 to-rose-500",
    bgLight: "bg-orange-50",
    textLight: "text-orange-600",
  },
  {
    id: "local",
    icon: "📍",
    title: "本地服务",
    titleEn: "Local Services",
    description: "优化预约排班、客户回访和口碑管理，让本地服务业务高效运转。",
    aiUse: "智能排班 · 评价管理 · 客户回访",
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
    textLight: "text-violet-600",
  },
  {
    id: "services",
    icon: "💼",
    title: "专业服务",
    titleEn: "Professional Services",
    description: "自动化客户入职、项目管理和账单处理，提升律所、会计所等专业机构效率。",
    aiUse: "客户入职 · 文档自动化 · 账单处理",
    color: "from-cyan-500 to-blue-500",
    bgLight: "bg-cyan-50",
    textLight: "text-cyan-600",
  },
  {
    id: "manufacturing",
    icon: "🏭",
    title: "制造业",
    titleEn: "Manufacturing",
    description: "优化供应链管理、质量检测流程和生产调度，降本增效提升竞争力。",
    aiUse: "质量检测 · 供应链优化 · 预测维护",
    color: "from-slate-500 to-gray-600",
    bgLight: "bg-slate-50",
    textLight: "text-slate-600",
  },
];

export default function IndustriesPreview() {
  return (
    <section
      id="industries"
      className="py-20 lg:py-28"
      style={{ backgroundColor: "#F8FAFF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="服务行业"
          title="深耕六大"
          titleHighlight="核心行业"
          subtitle="我们不做通用解决方案。深耕特定行业，让我们能为您提供真正了解您业务的专业建议。"
          align="center"
          light={true}
        />

        {/* Industries grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Icon + title row */}
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-3xl shadow-md group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}
                >
                  {industry.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">
                    {industry.titleEn}
                  </p>
                  <h3
                    className="text-lg font-bold"
                    style={{ color: "#0A1628" }}
                  >
                    {industry.title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                {industry.description}
              </p>

              {/* AI use tags */}
              <div
                className={`text-xs font-medium px-3 py-2 rounded-lg ${industry.bgLight} ${industry.textLight} mb-4`}
              >
                <span className="font-semibold">应用场景：</span>
                {industry.aiUse}
              </div>

              {/* Link */}
              <Link
                href={`/industries#${industry.id}`}
                className={`inline-flex items-center gap-1.5 text-sm font-semibold ${industry.textLight} group/link`}
              >
                了解案例
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border-2 border-blue-600 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 group"
          >
            查看全行业解决方案
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
