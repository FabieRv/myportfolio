"use client"
function MyMenu({
  isClicked,
  onClick,
}: {
  isClicked: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col cursor-pointer relative gap-2 w-[30px] lg:w-10 z-20 lg:hidden `}
    >
      <span
        className={`w-full ${
          isClicked ? "bg-black" : "bg-black"
        } h-0.5 lg:h-1 transition duration-400 ${
          isClicked && "absolute rotate-45 top-1/2"
        }`}
      ></span>
      <span
        className={`w-full ${
          isClicked ? "bg-black" : "bg-black"
        } h-0.5 lg:h-1 transition duration-400 ${
          isClicked && "absolute opacity-0 top-1/2"
        } `}
      ></span>
      <span
        className={`w-full ${
          isClicked ? "bg-black" : "bg-black"
        } h-0.5 lg:h-1 transition duration-400 ${
          isClicked && "absolute -rotate-45 top-1/2 "
        }`}
      ></span>
    </div>
  )
}

export default MyMenu
