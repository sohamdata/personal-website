import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "← resume →",
  description: "oh",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
