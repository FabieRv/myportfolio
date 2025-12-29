interface TitleProps {
  label: string
}

export default function Title(props: TitleProps) {
  const { label } = props

  return (
    <div className="text-center mb-10">
      <h2 className="text-4xl italic font-serif font-light  font-bold sm:text-4x py-4">
        {label}
      </h2>
    </div>
  )
}
