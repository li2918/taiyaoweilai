"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  titleHighlight,
  subtitle,
  align = "center",
  light = false,
  className = "",
}: SectionHeaderProps) {
  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  const containerAlign =
    align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "";

  return (
    <div
      className={`flex flex-col gap-4 max-w-3xl ${containerAlign} ${alignStyles[align]} ${className}`}
    >
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase ${
              light
                ? "bg-blue-100 text-blue-700"
                : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
            }`}
          >
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: badge ? 0.1 : 0 }}
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-[#0A1628]" : "text-white"
        }`}
      >
        {titleHighlight ? (
          <>
            {title}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              {titleHighlight}
            </span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: badge ? 0.2 : 0.1 }}
          className={`text-lg leading-relaxed ${
            light ? "text-gray-600" : "text-blue-100/80"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
