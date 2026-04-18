"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const values = [
  {
    icon: "🎯",
    title: "以结果为导向",
    titleEn: "Results-Driven",
    description:
      "我们不靠PPT打动客户，靠真实的业务成果说话。每个项目都设定可量化的目标，并对目标负责到底。",
    principles: [
      "明确定义项目成功标准",
      "数据追踪每个优化结果",
      "不达标就持续优化",
    ],
  },
  {
    icon: "🤝",
    title: "真实的伙伴关系",
    titleEn: "Genuine Partnership",
    description:
      "我们把每一个客户的业务当作自己的业务来对待。不是来卖服务的，是来共同成长的。",
    principles: [
      "主动分享行业最新动态",
      "提前识别潜在风险",
      "客户成功才是我们成功",
    ],
  },
  {
    icon: "💡",
    title: "持续学习进化",
    titleEn: "Continuous Learning",
    description:
      "AI领域日新月异。我们持续学习最新技术和最佳实践，确保为客户提供的始终是当下最有效的解决方案。",
    principles: [
      "紧跟AI技术前沿发展",
      "定期内部知识分享",
      "将新技术应用于客户实践",
    ],
  },
  {
    icon: "🔒",
    title: "诚信与透明",
    titleEn: "Integrity & Transparency",
    description:
      "我们对能做什么、不能做什么始终保持诚实。不过度承诺，不夸大效果。每一步都清晰透明。",
    principles: [
      "实事求是评估项目可行性",
      "清晰透明的收费结构",
      "主动分享项目进展和风险",
    ],
  },
];

const philosophies = [
  {
    title: "为什么专注中小企业？",
    content:
      "大企业有足够资源自建团队应对AI转型。但中小企业——往往是最具活力和创新潜力的市场主体——却缺乏获得专业AI咨询的途径。我们认为这是不公平的，也是最值得改变的。",
  },
  {
    title: "为什么要负责落地？",
    content:
      "太多的咨询公司停留在出报告、交方案层面。但方案再好，不落地等于零。我们从一开始就把自己定义为'落地专家'，这意味着我们只接能真正做到的项目，而且要亲自把系统跑起来。",
  },
  {
    title: "为什么不绑定特定工具？",
    content:
      "我们不是任何AI工具或平台的销售代理。我们的立场永远站在客户一边，选择最适合客户的工具组合，而不是最有利润的产品。这是我们保持独立性的核心原则。",
  },
  {
    title: "我们如何衡量成功？",
    content:
      "当客户的业务真正因为我们的工作而变得更好——效率更高、成本更低、团队更幸福——这才是成功。量化的业务指标改善是我们唯一认可的成功标准。",
  },
];

const stats = [
  { number: "50+", label: "已服务企业" },
  { number: "6", label: "深耕行业" },
  { number: "98%", label: "客户满意度" },
  { number: "4-8周", label: "平均落地周期" },
];

export default function AboutPageContent() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0F1E3D 50%, #0A1628 100%)",
        }}
      >
        <div className="absolute inset-0 bg-dot-pattern-dark opacity-50" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold">
              关于太耀未来
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-3xl"
          >
            让每一家中小企业
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              都能用上AI
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-100/70 leading-relaxed max-w-2xl mb-10"
          >
            太耀未来成立的初衷很简单：让AI不再是大企业的专属特权。我们相信，正确使用AI，每一家中小企业都可以以更小的团队做出更大的成果。
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center p-4 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-3xl font-black text-white mb-1">
                  {stat.number}
                </span>
                <span className="text-blue-200/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
                我们的使命
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold mb-6 leading-tight"
                style={{ color: "#0A1628" }}
              >
                用AI重构运营，
                <br />
                释放企业真正潜力
              </h2>
              <p className="text-gray-500 leading-relaxed mb-6">
                我们的使命是成为中小企业最信赖的AI转型伙伴。不是卖工具，不是做报告，而是真正深入到企业内部，用AI技术帮助他们解决实际问题，实现可量化的业务成果。
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                我们相信：当企业的运营更高效、成本更低、决策更聪明，企业主和团队成员的生活质量都会得到真正的提升。这才是AI真正的价值所在。
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "让中小企业获得与大企业同等的AI能力",
                  "用结果而非承诺赢得客户信任",
                  "成为客户长期的AI战略合作伙伴",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-2 text-gray-700 text-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    {point}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Visual element */}
              <div
                className="relative rounded-3xl p-8 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #0A1628 0%, #0F1E3D 100%)",
                }}
              >
                <div className="absolute inset-0 bg-dot-pattern-dark opacity-40" />
                <div className="relative">
                  {/* Quote */}
                  <div className="text-6xl text-blue-500/30 font-serif mb-4">&ldquo;</div>
                  <p className="text-white text-xl font-semibold leading-relaxed mb-6">
                    AI不应该只属于财富500强。每一家有抱负的中小企业，都应该能够用上AI的力量。
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">太</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">太耀未来创始团队</p>
                      <p className="text-blue-300/60 text-sm">TaiYao Future</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#0A1628" }}>
                      结果驱动
                    </p>
                    <p className="text-gray-400 text-xs">
                      可量化的业务成果
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "#F8FAFF" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="核心价值观"
            title="我们信奉的"
            titleHighlight="四大原则"
            subtitle="这四个原则决定了我们如何选择项目、如何服务客户、如何做出日常决策。"
            align="center"
            light={true}
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center text-3xl flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium mb-0.5">
                      {value.titleEn}
                    </p>
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#0A1628" }}
                    >
                      {value.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {value.description}
                </p>
                <div className="flex flex-col gap-2">
                  {value.principles.map((p) => (
                    <div
                      key={p}
                      className="flex items-center gap-2 text-xs text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                      {p}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="我们的思考"
            title="为什么太耀"
            titleHighlight="与众不同"
            align="center"
            light={true}
          />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philosophies.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-blue-50/40 hover:border-blue-200 transition-all duration-300"
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "#0A1628" }}
                >
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team philosophy */}
      <section
        className="py-20"
        style={{ backgroundColor: "#0A1628" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="团队理念"
            title="我们是谁"
            subtitle="太耀未来的核心团队由具有业务运营经验的AI从业者组成。我们不是纯技术背景，也不是纯业务背景——我们是两者的结合。这让我们能够既看懂技术可行性，又理解业务逻辑。"
            align="center"
            light={false}
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                label: "业务思维",
                desc: "从业务目标出发思考问题，而不是从技术角度",
                icon: "🏢",
              },
              {
                label: "AI专长",
                desc: "深入了解AI工具和技术，能够评估和实施最新解决方案",
                icon: "🤖",
              },
              {
                label: "落地能力",
                desc: "有实际系统搭建和项目管理经验，而不只是理论知识",
                icon: "⚙️",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-white/10"
                style={{ background: "rgba(255,255,255,0.04)" }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-white/10 flex items-center justify-center text-4xl mb-4">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
                <p className="text-blue-100/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            想与我们合作？
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-blue-100/80 text-lg mb-8"
          >
            无论您现在处于AI转型的哪个阶段，我们都很乐意聊聊，看看是否合适合作。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-700 font-bold text-base hover:bg-blue-50 shadow-xl transition-all"
            >
              预约免费咨询
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:hello@taiyaofuture.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold hover:bg-white/10 transition-all"
            >
              发送邮件
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
