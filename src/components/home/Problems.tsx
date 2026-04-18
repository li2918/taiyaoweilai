"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  TrendingUp,
  BarChart2,
  Database,
  Zap,
} from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const problems = [
  {
    icon: GitBranch,
    title: "流程混乱，难以追踪",
    titleEn: "Workflow Chaos",
    description:
      "团队各行其是，信息不同步，关键任务时常被遗漏，管理层无法实时掌握业务进展。",
    stat: "72%",
    statLabel: "中小企业主反映此问题",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
    borderColor: "border-red-500/20",
  },
  {
    icon: TrendingUp,
    title: "人工成本不断攀升",
    titleEn: "Rising Labor Costs",
    description:
      "重复性工作占据大量人力，员工疲于应付手动任务，招人成本高，留人更难。",
    stat: "45%",
    statLabel: "营业额流向重复性工作",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/20",
  },
  {
    icon: BarChart2,
    title: "转化率低，商机流失",
    titleEn: "Low Conversion Rate",
    description:
      "潜在客户跟进不及时，销售漏斗管理混乱，大量商机在跟进过程中白白流失。",
    stat: "60%",
    statLabel: "潜在客户未能及时跟进",
    color: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-500/10",
    borderColor: "border-yellow-500/20",
  },
  {
    icon: Database,
    title: "缺乏数据，无法决策",
    titleEn: "No Data Insights",
    description:
      "业务数据分散在各个系统，无法形成完整视图，管理层只能凭感觉做决策，风险极高。",
    stat: "83%",
    statLabel: "企业缺乏实时数据洞察",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    icon: Zap,
    title: "想用AI，不知从哪开始",
    titleEn: "AI Adoption Barrier",
    description:
      "知道AI能帮助企业，但市场产品眼花缭乱，不知如何选择，更不知如何落地到具体业务场景。",
    stat: "91%",
    statLabel: "SMB主认为AI太复杂",
    color: "from-indigo-500 to-violet-500",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
  },
];

export default function Problems() {
  return (
    <section
      id="problems"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ backgroundColor: "#0F172A" }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dot-pattern-dark opacity-40" />
      <div className="absolute inset-0 bg-grid-pattern" />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="痛点识别"
          title="你是否面临"
          titleHighlight="这些问题？"
          subtitle="这些困境正在悄悄吃掉你的利润、时间和增长机会。你并不孤独——80%的中小企业都在面对同样的挑战。"
          align="center"
          light={false}
        />

        {/* Problem cards grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl p-6 border ${problem.borderColor} bg-white/3 hover:bg-white/5 transition-all duration-300 cursor-default overflow-hidden`}
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl ${problem.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon
                    className="w-6 h-6"
                    style={{
                      color: problem.color.includes("red")
                        ? "#f87171"
                        : problem.color.includes("orange")
                        ? "#fb923c"
                        : problem.color.includes("yellow")
                        ? "#facc15"
                        : problem.color.includes("blue")
                        ? "#60a5fa"
                        : "#a78bfa",
                    }}
                  />
                </div>

                {/* English label */}
                <p className="text-xs font-semibold tracking-widest uppercase text-white/30 mb-2">
                  {problem.titleEn}
                </p>

                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3 leading-tight">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="text-blue-100/50 text-sm leading-relaxed">
                  {problem.description}
                </p>

                {/* Stat */}
                <div
                  className={`mt-5 pt-4 border-t ${problem.borderColor} flex items-baseline gap-2`}
                >
                  <span
                    className={`text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${problem.color}`}
                  >
                    {problem.stat}
                  </span>
                  <span className="text-white/40 text-xs">{problem.statLabel}</span>
                </div>

                {/* Corner decoration */}
                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${problem.color} opacity-5 rounded-bl-3xl`}
                />
              </motion.div>
            );
          })}

          {/* CTA card — 6th position on desktop, centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative rounded-2xl p-6 border border-blue-500/30 overflow-hidden flex flex-col justify-between"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.15), rgba(79,70,229,0.1))",
            }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-4 shadow-lg shadow-blue-500/30">
                <svg
                  className="w-6 h-6 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                这些问题都有解
              </h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">
                太耀未来专注于帮助中小企业通过AI和流程重构，系统性解决以上挑战。
              </p>
            </div>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 font-semibold text-sm group transition-colors"
            >
              预约免费诊断
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
