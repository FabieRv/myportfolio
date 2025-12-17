interface ButtonProps {
  label: string
  icon?: React.ReactNode
  className?: string
  type?: "submit" | "button"
  onClick?: () => void
  children?: React.ReactNode
}

export default function Button(props: ButtonProps) {
  const {
    label,
    icon,
    className = "",
    type = "button",
    onClick,
    children,
  } = props

  return (
    <button
      type={type}
      className={`py-2 px-2 lg:px-8 lg:text-lg ${className}  bg-[#eb34e5] rounded-2xl`}
      onClick={onClick}
    >
      {icon && (
        <span>
          <div> icon </div>
        </span>
      )}

      {/* label */}
      <span>{label}</span>

      {/* children */}
      <span>{children}</span>
    </button>
  )
}
