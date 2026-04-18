"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Shield,
  CheckCircle,
  Send,
  ChevronDown,
} from "lucide-react";

const businessTypes = [
  "教育培训",
  "医疗健康",
  "零售连锁",
  "本地服务",
  "专业服务（律所/会计所/咨询）",
  "制造业",
  "电子商务",
  "餐饮餐厅",
  "其他行业",
];

const companySizes = [
  "1-10人",
  "11-50人",
  "51-200人",
  "200人以上",
];

const faqItems = [
  {
    q: "初次咨询完全免费吗？",
    a: "是的，完全免费。我们提供60分钟的初次诊断咨询，不收取任何费用，也不会在咨询中强制推销。",
  },
  {
    q: "咨询后多久能收到回复？",
    a: "我们承诺1个工作日内与您联系，安排咨询时间。通常情况下，我们会在几个小时内回复。",
  },
  {
    q: "我需要提前准备什么？",
    a: "不需要任何准备。只需要您对自己业务的大概了解就够了。我们会通过专业的问题引导整个对话。",
  },
  {
    q: "你们会为竞争对手提供服务吗？",
    a: "在同一细分市场内，我们会明确告知并征得客户同意。我们非常重视信息保密和利益冲突管理。",
  },
];

type FormData = {
  name: string;
  company: string;
  contact: string;
  businessType: string;
  companySize: string;
  needs: string;
};

export default function ContactPageContent() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    contact: "",
    businessType: "",
    companySize: "",
    needs: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-300";

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1.5";

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="relative py-16 lg:py-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0F1E3D 50%, #0A1628 100%)",
        }}
      >
        <div className="absolute inset-0 bg-dot-pattern-dark opacity-50" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold">
              开始咨询
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight"
          >
            预约你的
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              免费AI咨询
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-blue-100/70 max-w-2xl mx-auto mb-8"
          >
            填写下方表单，我们会在1个工作日内与您联系，安排免费的60分钟初步诊断会议。
          </motion.p>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
          >
            {[
              { icon: CheckCircle, label: "完全免费" },
              { icon: Clock, label: "1工作日内回复" },
              { icon: Shield, label: "信息保密" },
              { icon: MessageCircle, label: "无强制销售" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-blue-200/70 text-sm"
                >
                  <Icon className="w-4 h-4 text-blue-400" />
                  {item.label}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16 lg:py-20" style={{ backgroundColor: "#F8FAFF" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left: Contact info */}
            <div className="flex flex-col gap-6">
              {/* Contact methods */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card"
              >
                <h2
                  className="text-lg font-bold mb-5"
                  style={{ color: "#0A1628" }}
                >
                  联系方式
                </h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:hello@taiyaofuture.com"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Mail className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">邮件</p>
                      <p className="text-sm font-medium text-gray-900">
                        hello@taiyaofuture.com
                      </p>
                    </div>
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors">
                      <Phone className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">电话/微信</p>
                      <p className="text-sm font-medium text-gray-900">
                        +1 (234) 567-8900
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">WhatsApp</p>
                      <p className="text-sm font-medium text-gray-900">
                        即时咨询
                      </p>
                    </div>
                  </a>
                </div>
              </motion.div>

              {/* Response time */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-6 text-white"
              >
                <Clock className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="font-bold text-lg mb-2">我们会在1个工作日内回复</h3>
                <p className="text-blue-100/80 text-sm leading-relaxed">
                  填写表单后，我们通常在几小时内就会联系您。我们知道您的时间宝贵。
                </p>
              </motion.div>

              {/* What to expect */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-card"
              >
                <h3
                  className="text-base font-bold mb-4"
                  style={{ color: "#0A1628" }}
                >
                  咨询过程中会发生什么
                </h3>
                <div className="flex flex-col gap-4">
                  {[
                    { step: "1", title: "确认时间", desc: "我们联系您安排60分钟视频通话" },
                    { step: "2", title: "了解业务", desc: "深度了解您的运营现状和痛点" },
                    { step: "3", title: "初步建议", desc: "现场给出3-5个AI化改进方向" },
                    { step: "4", title: "后续方案", desc: "如有需要，发送详细方案和报价" },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-blue-600 text-xs font-bold">
                          {item.step}
                        </span>
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "#0A1628" }}
                        >
                          {item.title}
                        </p>
                        <p className="text-gray-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden">
                {isSubmitted ? (
                  <div className="p-10 flex flex-col items-center text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mb-6 shadow-lg"
                    >
                      <CheckCircle className="w-10 h-10 text-white" />
                    </motion.div>
                    <h2
                      className="text-2xl font-bold mb-3"
                      style={{ color: "#0A1628" }}
                    >
                      已成功提交！
                    </h2>
                    <p className="text-gray-500 text-base leading-relaxed mb-2">
                      感谢您的咨询请求。我们会在
                      <strong className="text-blue-600"> 1个工作日内</strong> 联系您。
                    </p>
                    <p className="text-gray-400 text-sm">
                      同时，如果您有任何紧急问题，可以直接发邮件到{" "}
                      <a
                        href="mailto:hello@taiyaofuture.com"
                        className="text-blue-600 hover:underline"
                      >
                        hello@taiyaofuture.com
                      </a>
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="p-7 sm:p-9">
                    <h2
                      className="text-xl font-bold mb-6"
                      style={{ color: "#0A1628" }}
                    >
                      填写咨询表单
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          您的姓名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="请输入您的姓名"
                          className={inputClass}
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label htmlFor="company" className={labelClass}>
                          公司/机构名称 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="您的公司名称"
                          className={inputClass}
                        />
                      </div>

                      {/* Contact (phone or email) */}
                      <div>
                        <label htmlFor="contact" className={labelClass}>
                          联系方式（手机或邮箱）<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact"
                          name="contact"
                          required
                          value={formData.contact}
                          onChange={handleChange}
                          placeholder="手机号或邮箱地址"
                          className={inputClass}
                        />
                      </div>

                      {/* Business type */}
                      <div>
                        <label htmlFor="businessType" className={labelClass}>
                          所属行业 <span className="text-red-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            id="businessType"
                            name="businessType"
                            required
                            value={formData.businessType}
                            onChange={handleChange}
                            className={`${inputClass} appearance-none pr-10`}
                          >
                            <option value="">请选择行业</option>
                            {businessTypes.map((type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Company size */}
                      <div>
                        <label htmlFor="companySize" className={labelClass}>
                          公司规模
                        </label>
                        <div className="relative">
                          <select
                            id="companySize"
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleChange}
                            className={`${inputClass} appearance-none pr-10`}
                          >
                            <option value="">请选择规模</option>
                            {companySizes.map((size) => (
                              <option key={size} value={size}>
                                {size}
                              </option>
                            ))}
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                      </div>

                      {/* Empty grid slot for alignment */}
                      <div className="hidden sm:block" />

                      {/* Needs - full width */}
                      <div className="sm:col-span-2">
                        <label htmlFor="needs" className={labelClass}>
                          简述您的业务挑战或需求 <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="needs"
                          name="needs"
                          required
                          rows={5}
                          value={formData.needs}
                          onChange={handleChange}
                          placeholder="例如：我们目前客服团队工作量很大，每天大量重复性问题需要回答，希望通过AI降低这部分工作量，同时提升响应速度..."
                          className={`${inputClass} resize-none`}
                        />
                        <p className="text-xs text-gray-400 mt-1">
                          描述越详细，我们能提供越有价值的初步建议
                        </p>
                      </div>
                    </div>

                    {/* Privacy notice */}
                    <div className="mt-5 p-3.5 rounded-xl bg-gray-50 border border-gray-100 flex items-start gap-2">
                      <Shield className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-gray-500 leading-relaxed">
                        您的信息将严格保密，仅用于本次咨询服务，不会与任何第三方共享。
                      </p>
                    </div>

                    {/* Submit */}
                    <div className="mt-6">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                        className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            提交中...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            提交咨询申请
                          </>
                        )}
                      </motion.button>
                      <p className="text-center text-xs text-gray-400 mt-3">
                        我们会在1个工作日内联系您
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl font-bold text-center mb-10"
            style={{ color: "#0A1628" }}
          >
            常见问题
          </h2>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-card overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span
                    className="text-base font-semibold"
                    style={{ color: "#0A1628" }}
                  >
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 border-t border-gray-100 pt-4">
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
