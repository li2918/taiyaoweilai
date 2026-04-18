import type { Metadata } from "next";
import IndustriesPageContent from "./IndustriesPageContent";

export const metadata: Metadata = {
  title: "行业 | AI解决方案",
  description:
    "太耀未来深耕教育培训、医疗健康、零售连锁、本地服务、专业服务和制造业，提供行业特定的AI自动化解决方案。",
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
