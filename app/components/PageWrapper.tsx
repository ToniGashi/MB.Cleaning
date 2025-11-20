"use client";

import { useTheme } from "./ThemeProvider";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  const backgroundClasses = {
    residential:
      "min-h-screen bg-gradient-to-br from-blue-50 via-green-50 via-blue-50 to-emerald-50",
    construction:
      "min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 via-slate-900 to-orange-950",
  };

  return (
    <div className={`${backgroundClasses[theme]} transition-all duration-500`}>
      {theme === "residential" && (
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />
      )}
      {theme === "construction" && (
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(249,115,22,0.15),transparent_50%)] pointer-events-none" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
