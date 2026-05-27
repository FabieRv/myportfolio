import React from "react"

interface ButtonProps {
  label: string
  icon?: React.ReactNode
  className?: string
  type?: "submit" | "button"
  onClick?: () => void

  variant?: "primary-dark"
  children?: React.ReactNode
}

export default function Button({
  label,
  icon,
  className = "",
  type = "button",
  onClick,
  variant = "primary-dark",
  children,
}: ButtonProps) {
  const baseStyles =
    "flex items-center justify-center gap-2 transition-all duration-200 font-italic font-bold "

  const variants = {
    "primary-dark":
      "bg-[#2563EB] text-white py-3 px-4 rounded-full hover:bg-[#5DA9E9] text-sm",
  }

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span>{label}</span>
      {icon && <span className="flex items-center justify-center">{icon}</span>}
      {children}
    </button>
  )
}
