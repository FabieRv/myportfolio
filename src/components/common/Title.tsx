interface TitleProps {
  label: string
}

export default function Title(props: TitleProps) {
  const { label } = props

  return (
    <div className="text-center mb-6">
      <h2 className="text-3xl font-extrabold text-gray-700 sm:text-4x py-4">
        {label}
      </h2>
    </div>
  )
}
