"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const industries = [
  {
    id: "education",
    icon: "🎓",
    title: "教育培训",
    titleEn: "Education & Training",
    tagline: "提升学员体验，降低运营成本",
    description:
      "教育培训行业竞争激烈，学员获取成本高，续费率直接影响企业生死。通过AI自动化，我们帮助教育机构在不增加人力的情况下提升学员体验，显著提高续费率和口碑传播。",
    painPoints: [
      "学员咨询量大，销售团队应接不暇",
      "学习进度跟踪耗时，难以及时干预",
      "续费提醒全靠人工，效率低下",
      "家长和学员沟通散乱，信息难以汇总",
    ],
    aiSolutions: [
      {
        title: "智能招生助理",
        desc: "24小时自动回复咨询，筛选高意向客户，让销售专注高价值跟进",
        impact: "咨询转化率提升40%",
      },
      {
        title: "学习进度追踪系统",
        desc: "自动收集学员学习数据，生成进度报告，识别需要干预的学员",
        impact: "教师工作量减少60%",
      },
      {
        title: "智能续费提醒",
        desc: "基于学员行为数据，在最佳时机发送个性化续费提醒和优惠",
        impact: "续费率提升25-35%",
      },
      {
        title: "家校沟通自动化",
        desc: "自动发送课程提醒、作业通知、出勤报告，减少教师行政负担",
        impact: "行政时间减少70%",
      },
    ],
    color: "from-blue-500 to-indigo-500",
    bgLight: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    gradientText: "from-blue-400 to-indigo-400",
  },
  {
    id: "healthcare",
    icon: "🏥",
    title: "医疗健康",
    titleEn: "Healthcare & Wellness",
    tagline: "让医护专注医疗，让AI处理行政",
    description:
      "医疗健康行业的专业人员花费大量时间在行政工作上，而不是患者护理。通过AI自动化，我们帮助诊所和健康机构减少行政负担，提升患者体验，降低爽约率。",
    painPoints: [
      "预约管理混乱，爽约率高",
      "患者随访不及时，复诊率低",
      "病历和档案管理耗时",
      "药品和耗材库存管理粗放",
    ],
    aiSolutions: [
      {
        title: "智能预约管理",
        desc: "自动化预约确认、提醒和候补名单管理，大幅降低爽约率",
        impact: "爽约率降低50%",
      },
      {
        title: "患者随访自动化",
        desc: "治疗后自动发送个性化随访信息，追踪恢复情况，提醒复诊",
        impact: "复诊率提升30%",
      },
      {
        title: "健康提醒系统",
        desc: "基于患者档案，自动发送个性化健康建议、用药提醒和体检通知",
        impact: "患者依从性提升45%",
      },
      {
        title: "文档自动化",
        desc: "自动化初诊问卷、同意书填写、保险信息收集等文档流程",
        impact: "行政时间减少55%",
      },
    ],
    color: "from-emerald-500 to-teal-500",
    bgLight: "bg-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    gradientText: "from-emerald-400 to-teal-400",
  },
  {
    id: "retail",
    icon: "🛍️",
    title: "零售连锁",
    titleEn: "Retail & Chain Stores",
    tagline: "数据驱动增长，智能管理运营",
    description:
      "零售连锁面临库存管理、会员运营和多店协调等复杂挑战。通过AI赋能，我们帮助零售企业实现精准营销、智能库存和高效会员运营，驱动销售额持续增长。",
    painPoints: [
      "库存积压或缺货，难以精准预测需求",
      "会员数据分散，难以做精准营销",
      "多店信息不同步，管理成本高",
      "促销效果难以追踪和量化",
    ],
    aiSolutions: [
      {
        title: "销售预测与库存优化",
        desc: "基于历史数据和季节因素预测需求，自动化补货提醒",
        impact: "库存周转率提升35%",
      },
      {
        title: "会员个性化运营",
        desc: "分析会员消费行为，发送个性化推荐和专属优惠，提升复购",
        impact: "复购率提升40%",
      },
      {
        title: "全渠道客户服务",
        desc: "统一线上线下客服入口，AI助理7x24小时处理咨询和投诉",
        impact: "客服成本降低60%",
      },
      {
        title: "营销效果追踪",
        desc: "实时追踪每个促销活动的ROI，数据驱动下一轮营销决策",
        impact: "营销ROI提升50%",
      },
    ],
    color: "from-orange-500 to-rose-500",
    bgLight: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    gradientText: "from-orange-400 to-rose-400",
  },
  {
    id: "local",
    icon: "📍",
    title: "本地服务",
    titleEn: "Local Services",
    tagline: "口碑为王，智能赋能",
    description:
      "美容美发、家政维修、宠物服务等本地服务行业依赖口碑和回头客。通过AI自动化，帮助本地服务企业提升客户体验，增加复购，降低运营成本，在竞争中脱颖而出。",
    painPoints: [
      "预约管理全靠电话和微信，容易出错",
      "客户不知道回访何时到期，复购率低",
      "差评处理不及时，口碑受损",
      "员工排班依赖人工，效率低",
    ],
    aiSolutions: [
      {
        title: "在线智能预约系统",
        desc: "自动化预约接受、确认、提醒，减少爽约，提升客户体验",
        impact: "爽约率降低60%",
      },
      {
        title: "客户关怀自动化",
        desc: "自动发送服务到期提醒、节日祝福和专属优惠，激活沉睡客户",
        impact: "复购率提升35%",
      },
      {
        title: "口碑管理系统",
        desc: "服务后自动邀请评价，实时监控并及时响应差评",
        impact: "五星好评率提升50%",
      },
      {
        title: "智能排班助手",
        desc: "基于预约量自动优化员工排班，减少空档和超负荷情况",
        impact: "人工效率提升30%",
      },
    ],
    color: "from-violet-500 to-purple-500",
    bgLight: "bg-violet-50",
    textColor: "text-violet-700",
    borderColor: "border-violet-200",
    gradientText: "from-violet-400 to-purple-400",
  },
  {
    id: "services",
    icon: "💼",
    title: "专业服务",
    titleEn: "Professional Services",
    tagline: "用AI解放专业人才的时间",
    description:
      "律所、会计所、咨询公司等专业服务机构，高度依赖专业人才的时间和经验。通过AI自动化行政和重复性工作，让专业人才能够服务更多客户，提升整体业务容量。",
    painPoints: [
      "客户入职流程繁琐，耗费大量时间",
      "文档审核和整理占用专业人员时间",
      "账单和合同流程效率低下",
      "知识管理混乱，经验难以沉淀复用",
    ],
    aiSolutions: [
      {
        title: "客户入职自动化",
        desc: "自动化KYC信息收集、合同签署、资料整理，快速完成客户入职",
        impact: "入职时间缩短75%",
      },
      {
        title: "文档AI处理",
        desc: "AI辅助文档审核、要点提取、风险识别，大幅提升文档处理效率",
        impact: "文档处理效率提升3x",
      },
      {
        title: "账单与收款自动化",
        desc: "自动生成账单、发送付款提醒、追踪应收账款，优化现金流",
        impact: "收款周期缩短40%",
      },
      {
        title: "知识库AI系统",
        desc: "构建企业知识库，AI辅助快速检索过往案例和模板，提升服务质量",
        impact: "服务效率提升50%",
      },
    ],
    color: "from-cyan-500 to-blue-500",
    bgLight: "bg-cyan-50",
    textColor: "text-cyan-700",
    borderColor: "border-cyan-200",
    gradientText: "from-cyan-400 to-blue-400",
  },
  {
    id: "manufacturing",
    icon: "🏭",
    title: "制造业",
    titleEn: "Manufacturing",
    tagline: "智能制造，降本增效",
    description:
      "制造业面临供应链波动、质量管控和生产调度等复杂挑战。通过AI赋能，帮助制造企业实现智能排产、质量预警和供应链优化，在竞争中保持成本和质量优势。",
    painPoints: [
      "生产排程依赖经验，容易出现瓶颈",
      "质量问题发现滞后，返工成本高",
      "供应链信息不透明，备货不准确",
      "设备故障无法预测，停线损失大",
    ],
    aiSolutions: [
      {
        title: "智能生产排程",
        desc: "基于订单、产能和物料情况自动优化生产计划，减少等待和浪费",
        impact: "产能利用率提升25%",
      },
      {
        title: "质量预警系统",
        desc: "实时分析生产数据，在质量问题扩大前发出预警并触发处理流程",
        impact: "废品率降低40%",
      },
      {
        title: "供应链可视化",
        desc: "整合供应商、库存和物流数据，提供实时供应链视图和预警",
        impact: "库存持有成本降低30%",
      },
      {
        title: "设备预测性维护",
        desc: "监测设备运行数据，预测故障发生，提前安排维护，减少停线",
        impact: "设备停线时间减少50%",
      },
    ],
    color: "from-slate-500 to-gray-600",
    bgLight: "bg-slate-50",
    textColor: "text-slate-700",
    borderColor: "border-slate-200",
    gradientText: "from-slate-400 to-gray-400",
  },
];

export default function IndustriesPageContent() {
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

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-6">
              服务行业
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            深耕行业
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              专属AI解决方案
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-100/70 leading-relaxed max-w-2xl mx-auto mb-8"
          >
            我们不做通用解决方案。深耕特定行业，让我们能够为您提供真正了解您业务的AI方案。
          </motion.p>

          {/* Industry nav pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {industries.map((ind) => (
              <a
                key={ind.id}
                href={`#${ind.id}`}
                className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
              >
                <span>{ind.icon}</span>
                {ind.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <div className="py-12" style={{ backgroundColor: "#F8FAFF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-12">
            {industries.map((industry, index) => (
              <motion.section
                key={industry.id}
                id={industry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-card overflow-hidden"
              >
                {/* Header */}
                <div
                  className={`p-7 sm:p-9 border-b ${industry.borderColor}`}
                >
                  <div className="flex flex-wrap items-start gap-5">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-4xl shadow-lg flex-shrink-0`}
                    >
                      {industry.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h2
                          className="text-2xl sm:text-3xl font-bold"
                          style={{ color: "#0A1628" }}
                        >
                          {industry.title}
                        </h2>
                        <span
                          className={`text-xs font-semibold px-3 py-1.5 rounded-full ${industry.bgLight} ${industry.textColor}`}
                        >
                          {industry.tagline}
                        </span>
                      </div>
                      <p className="text-gray-500 leading-relaxed">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Pain points */}
                  <div>
                    <h3
                      className={`text-base font-bold mb-4 ${industry.textColor}`}
                    >
                      常见痛点
                    </h3>
                    <ul className="flex flex-col gap-2.5">
                      {industry.painPoints.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-gray-50 border border-gray-100"
                        >
                          <div className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                          <span className="text-sm text-gray-600">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* AI solutions */}
                  <div>
                    <h3
                      className={`text-base font-bold mb-4 ${industry.textColor}`}
                    >
                      AI解决方案
                    </h3>
                    <div className="flex flex-col gap-3">
                      {industry.aiSolutions.map((sol) => (
                        <div
                          key={sol.title}
                          className={`p-4 rounded-xl ${industry.bgLight} border ${industry.borderColor}`}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4
                              className={`text-sm font-bold ${industry.textColor}`}
                            >
                              {sol.title}
                            </h4>
                            <span
                              className={`text-xs font-semibold whitespace-nowrap ml-2 ${industry.textColor} bg-white px-2 py-0.5 rounded-full border ${industry.borderColor}`}
                            >
                              {sol.impact}
                            </span>
                          </div>
                          <p className="text-gray-500 text-xs leading-relaxed">
                            {sol.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div
                  className={`px-7 sm:px-9 py-5 border-t ${industry.borderColor} flex flex-wrap items-center justify-between gap-4`}
                  style={{ backgroundColor: industry.bgLight.replace("bg-", "#").replace("-50", "") }}
                >
                  <p className="text-sm text-gray-500">
                    想了解更多{industry.title}行业的AI应用案例？
                  </p>
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r ${industry.color} text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-md`}
                  >
                    预约行业专项咨询
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, #1e40af 0%, #4338ca 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            没有看到您的行业？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100/80 text-lg mb-8"
          >
            我们的能力不限于以上行业。与我们沟通您的具体情况，我们会评估AI化可能性并给出专业建议。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 shadow-xl transition-all"
            >
              预约免费行业咨询
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
