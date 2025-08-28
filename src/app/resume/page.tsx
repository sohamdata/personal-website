"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Resume() {
  const router = useRouter();
  const pdfUrl = `${process.env.NEXT_PUBLIC_R2_BASE_URL}/misc/Soham Datta 2025.pdf`;

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-void-black">
      <header className="my-3">
        <Image
          src="/icons/favicon.ico"
          alt="Soham Datta Logo"
          width={40}
          height={40}
          onClick={() => router.push("/")}
          className="h-10 w-10 rounded-full m-2 mx-auto cursor-pointer transform transition-transform duration-200 hover:scale-150 hover:animate-spin"
        />
      </header>

      <iframe
        src={pdfUrl}
        className="w-full max-w-5xl flex-1 rounded-2xl"
        title="Soham Datta"
      />
    </div>
  );
}
