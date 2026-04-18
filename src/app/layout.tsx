import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "太耀未来 | AI驱动的运营变革专家",
    template: "%s | 太耀未来",
  },
  description:
    "太耀未来帮助中小企业通过AI技术重构运营流程，提升效率，降低成本。从流程诊断到AI落地，全程陪伴企业实现数字化转型。",
  keywords: [
    "AI咨询",
    "流程自动化",
    "AI Agent",
    "企业数字化",
    "运营优化",
    "中小企业AI",
    "太耀未来",
    "TaiYao Future",
  ],
  authors: [{ name: "太耀未来 TaiYao Future" }],
  creator: "太耀未来",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://taiyaofuture.com",
    siteName: "太耀未来",
    title: "太耀未来 | AI驱动的运营变革专家",
    description:
      "用AI重构你的运营流程。太耀未来帮助中小企业通过AI技术实现效率革命。",
  },
  twitter: {
    card: "summary_large_image",
    title: "太耀未来 | AI驱动的运营变革专家",
    description: "用AI重构你的运营流程。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
