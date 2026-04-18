import Link from "next/link";
import { Mail, MessageCircle, Linkedin, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: {
    label: "服务",
    links: [
      { href: "/services#diagnostics", label: "AI运营诊断" },
      { href: "/services#redesign", label: "流程重构设计" },
      { href: "/services#automation", label: "AI自动化系统" },
      { href: "/services#agent", label: "AI Agent集成" },
      { href: "/services#consulting", label: "持续优化顾问" },
    ],
  },
  company: {
    label: "公司",
    links: [
      { href: "/about", label: "关于我们" },
      { href: "/process", label: "方法论" },
      { href: "/industries", label: "服务行业" },
      { href: "/contact", label: "联系我们" },
    ],
  },
  industries: {
    label: "行业",
    links: [
      { href: "/industries#education", label: "教育培训" },
      { href: "/industries#healthcare", label: "医疗健康" },
      { href: "/industries#retail", label: "零售连锁" },
      { href: "/industries#services", label: "专业服务" },
      { href: "/industries#local", label: "本地服务" },
      { href: "/industries#manufacturing", label: "制造业" },
    ],
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628]">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold">太</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl font-bold">
                  太耀<span className="text-blue-400">未来</span>
                </span>
                <span className="text-blue-300/60 text-xs tracking-widest">
                  TaiYao Future
                </span>
              </div>
            </Link>

            <p className="text-blue-100/60 text-sm leading-relaxed max-w-xs">
              用AI重构你的运营流程。我们帮助中小企业通过AI技术实现效率革命，从流程诊断到系统落地，全程陪伴。
            </p>

            <div className="flex flex-col gap-2">
              <p className="text-blue-300/80 text-xs font-semibold uppercase tracking-widest mb-1">
                Analyze. Optimize. Automate.
              </p>
              <a
                href="mailto:hello@taiyaofuture.com"
                className="flex items-center gap-2 text-blue-100/60 hover:text-blue-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@taiyaofuture.com
              </a>
              <a
                href="https://wa.me/1234567890"
                className="flex items-center gap-2 text-blue-100/60 hover:text-blue-400 text-sm transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp 咨询
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center text-blue-100/60 hover:text-white transition-all duration-200 border border-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 flex items-center justify-center text-blue-100/60 hover:text-white transition-all duration-200 border border-white/10"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold text-sm mb-4 tracking-wide">
                {section.label}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-blue-100/50 hover:text-blue-400 text-sm transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl px-6 py-5 border border-blue-500/20">
            <div>
              <p className="text-white font-semibold text-base">
                准备好开始AI转型之旅了吗？
              </p>
              <p className="text-blue-200/60 text-sm mt-0.5">
                免费咨询，无任何义务
              </p>
            </div>
            <Link
              href="/contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/25 whitespace-nowrap"
            >
              预约免费咨询
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-100/30">
            <p>
              &copy; {currentYear} 太耀未来 TaiYao Future. 保留所有权利。
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors">
                隐私政策
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors">
                服务条款
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
