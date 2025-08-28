import React from "react";
import Link from "next/link";

type Props = {
  onClick?: () => void;
  link?: string;
  icon?: React.ReactNode;
  text: string;
  disabled?: boolean;
};

export default function LinkButton({
  onClick,
  link,
  disabled = false,
  icon,
  text,
}: Props) {
  return link ? (
    <Link
      href={link}
      target="_blank"
      className="bg-urban-steel text-frozen-glow font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-steel-shadow cursor-pointer transition duration-200"
    >
      {icon} {text}
    </Link>
  ) : (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-urban-steel text-frozen-glow font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-steel-shadow cursor-pointer transition duration-200 ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {icon} {text}
    </button>
  );
}
