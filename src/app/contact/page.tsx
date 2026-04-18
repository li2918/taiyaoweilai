import type { Metadata } from "next";
import ContactPageContent from "./ContactPageContent";

export const metadata: Metadata = {
  title: "联系我们 | 预约免费AI咨询",
  description:
    "预约太耀未来免费AI咨询。填写表单，我们1个工作日内回复。免费、无义务，保密处理您的信息。",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
