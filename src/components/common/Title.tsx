interface TitleProps {
  label: string
}

export default function Title(props: TitleProps) {
  const { label } = props

  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl  text-[#0F172A] font-bold sm:text-4xl py-4">
        {label}
      </h2>
    </div>
  )
}
