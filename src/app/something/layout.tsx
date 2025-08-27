import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gr8",
  description: "contact",
};

export default function SomethingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
