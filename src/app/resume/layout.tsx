import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "soham's resume",
  description:
    "with 1+ yr experience, hire a driven, cracked software engineer / co-founder",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
