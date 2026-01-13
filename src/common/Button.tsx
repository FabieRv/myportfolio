import React from "react"

interface ButtonProps {
  label: string
  icon?: React.ReactNode
  className?: string
  type?: "submit" | "button"
  onClick?: () => void
  // Ajout d'une variante pour choisir le style selon la maquette
  variant?: "primary-dark" | "primary-purple" | "outline-purple"
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
      "bg-[#5DA9E9] text-white py-3 px-4 rounded-full hover:bg-[#e6d4d4]",

    "primary-purple":
      "bg-[#A855F7]  text-white py-4 px-10 rounded-xl shadow-lg shadow-purple-100 ",

    "outline-purple":
      "border-2 border-[#D8C5F7] text-[#7E22CE] py-4 px-10 rounded-xl hover:bg-purple-50",
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
