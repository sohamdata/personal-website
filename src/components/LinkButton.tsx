import React from "react";

type Props = {
  onClick: () => void;
  icon?: React.ReactNode;
  text: string;
  disabled?: boolean;
};

export default function LinkButton({
  onClick,
  disabled = false,
  icon,
  text,
}: Props) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="bg-urban-steel text-frozen-glow font-bold px-6 py-3 rounded-lg flex items-center gap-2 shadow-md hover:bg-steel-shadow transition cursor-pointer"
    >
      {icon} {text}
    </button>
  );
}
