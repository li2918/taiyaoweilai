import type { Metadata } from "next";
import ServicesPageContent from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "服务 | AI运营诊断与自动化",
  description:
    "太耀未来提供五大核心服务：AI运营诊断、流程重构设计、AI自动化系统、AI Agent集成、持续优化顾问。帮助中小企业实现AI驱动的运营变革。",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
