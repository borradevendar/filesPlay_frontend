// src/common/Button.tsx
import React from "react";
import clsx from "clsx";

interface ButtonProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "danger" | "black" | "custom";
  icon?: React.ReactNode;
  isLoading?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  size = "md",
  color = "primary",
  icon,
  isLoading = false,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  /** SIZE MAP */
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2.5 text-[15px]",
    lg: "px-5 py-3 text-base",
  };

  /** COLOR MAP */
  const colorClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-700",
    danger: "bg-red-600 hover:bg-red-700 text-white",
    black: "bg-black hover:bg-black/90 text-white",
    custom: "",
  };

  /** SPINNER COLOR MAP */
  const spinnerColor = {
    primary: "border-white",
    secondary: "border-gray-700",
    danger: "border-white",
    black: "border-white",
    custom: "border-current",
  }[color];

  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-lg transition font-medium disabled:opacity-60 disabled:cursor-not-allowed",
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    >
      {isLoading ? (
        <div
          className={clsx(
            "w-5 h-5 border-2 border-t-transparent rounded-full animate-spin",
            spinnerColor
          )}
        ></div>
      ) : (
        icon && <span className="text-lg">{icon}</span>
      )}

      {!isLoading && children}
    </button>
  );
}
