type IconProps = {
  className?: string
}

function Linkedin({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path
        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 
      2.761 2.239 5 5 5h14c2.761 0 5-2.239 
      5-5v-14c0-2.761-2.239-5-5-5zm-11 
      19h-3v-10h3v10zm-1.5-11.268c-.966 
      0-1.75-.79-1.75-1.764s.784-1.764 
      1.75-1.764 1.75.79 
      1.75 1.764-.784 1.764-1.75 
      1.764zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.865 
      0-2.151 1.455-2.151 2.965v5.698h-3v-10h2.881v1.367h.041c.401-.761 
      1.379-1.562 2.838-1.562 3.034 0 3.595 1.996 
      3.595 4.59v5.605z"
      />
    </svg>
  )
}

export default Linkedin
