import type { Metadata } from "next";
import AboutPageContent from "./AboutPageContent";

export const metadata: Metadata = {
  title: "关于我们 | 太耀未来",
  description:
    "太耀未来是一家专注于帮助中小企业实现AI驱动运营变革的专业咨询公司。了解我们的使命、价值观和为什么不同。",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
