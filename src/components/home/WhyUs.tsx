"use client";

import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const differentiators = [
  {
    icon: "🚀",
    title: "不只是咨询",
    titleEn: "Beyond Consulting",
    description:
      "我们负责落地，而不只是交报告。项目结束后，您手上拿到的是真正运行的系统，而不是厚厚的文档。",
    highlight: "交付运行的系统，不是PPT方案",
  },
  {
    icon: "🧠",
    title: "不只是工具",
    titleEn: "Beyond Tools",
    description:
      "我们理解业务逻辑，而不只是部署软件。我们花时间深入了解您的业务，确保AI解决方案真正解决实际问题。",
    highlight: "业务导向，而非技术导向",
  },
  {
    icon: "💡",
    title: "真正懂业务",
    titleEn: "Business-First",
    description:
      "结合行业知识与AI能力，设计真实有效的方案。我们不是通用AI工具销售商，而是您的行业AI顾问。",
    highlight: "行业深度 + AI广度",
  },
  {
    icon: "🤝",
    title: "全程陪伴",
    titleEn: "Full Partnership",
    description:
      "从诊断到落地，持续优化，见证成效。我们是长期合作伙伴，与您共同成长，而不是完成项目就消失的服务商。",
    highlight: "项目后继续支持，确保ROI",
  },
];

const comparisonData = [
  { feature: "深度业务诊断", us: true, traditional: false, tools: false },
  { feature: "定制化方案设计", us: true, traditional: true, tools: false },
  { feature: "系统实际落地", us: true, traditional: false, tools: true },
  { feature: "团队培训支持", us: true, traditional: false, tools: false },
  { feature: "持续优化服务", us: true, traditional: false, tools: false },
  { feature: "可量化效果保证", us: true, traditional: false, tools: false },
  { feature: "行业专业知识", us: true, traditional: true, tools: false },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-20 lg:py-28 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="为什么选择我们"
          title="为什么选择"
          titleHighlight="太耀未来"
          subtitle="市场上有很多AI工具和咨询公司。我们的不同在于：我们真正理解业务，并且亲自负责系统落地。"
          align="center"
          light={true}
        />

        {/* Differentiators */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative flex gap-5 p-6 rounded-2xl bg-gradient-to-br from-white to-blue-50/50 border border-gray-100 hover:border-blue-200 hover:shadow-card-hover transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-200">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-1">
                  {item.titleEn}
                </p>
                <h3 className="text-[#0A1628] text-lg font-bold mb-2" style={{ color: "#0A1628" }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
                {/* Highlight badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-100">
                  <CheckCircle className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  <span className="text-xs font-semibold text-blue-700">
                    {item.highlight}
                  </span>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-center text-xl font-bold mb-6" style={{ color: "#0A1628" }}>
            与其他方案对比
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-card">
            <table className="w-full">
              <thead>
                <tr style={{ backgroundColor: "#F8FAFF" }}>
                  <th className="text-left px-6 py-4 text-sm font-semibold text-gray-500 w-1/2">
                    功能对比
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="text-sm font-bold text-blue-600">太耀未来</span>
                      <span className="text-xs text-blue-500/60">TaiYao</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="text-sm font-semibold text-gray-500">传统咨询</span>
                      <span className="text-xs text-gray-400">Consulting</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="inline-flex flex-col items-center gap-1">
                      <span className="text-sm font-semibold text-gray-500">AI工具商</span>
                      <span className="text-xs text-gray-400">AI Tools</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={row.feature}
                    className={`border-t border-gray-100 ${
                      index % 2 === 1 ? "bg-gray-50/50" : "bg-white"
                    }`}
                  >
                    <td className="px-6 py-3.5 text-sm font-medium text-gray-700">
                      {row.feature}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.us ? (
                        <CheckCircle className="w-5 h-5 text-blue-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.traditional ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-3.5 text-center">
                      {row.tools ? (
                        <CheckCircle className="w-5 h-5 text-green-400 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
