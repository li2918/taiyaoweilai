import type { Metadata } from "next";
import ProcessPageContent from "./ProcessPageContent";

export const metadata: Metadata = {
  title: "方法论 | 太耀未来AI转型方法",
  description:
    "太耀未来采用五阶段AI转型方法论：初步诊断、深度分析、方案设计、系统落地、持续优化。经过验证的科学方法，确保每个项目成功交付。",
};

export default function ProcessPage() {
  return <ProcessPageContent />;
}
