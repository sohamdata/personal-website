import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "← sd →",
  description: "oh",
  icons: {
    icon: "/icons/favicon.ico",
  },
  manifest: "/manifest.json",
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      {children}
    </section>
  );
}
