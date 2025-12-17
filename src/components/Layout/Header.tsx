import { useState } from "react"
import Button from "../common/Button"
import Container from "../common/Container"
import MyMenu from "../common/MyMenu"
import { headerLinks } from "../constant"

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <div className="shadow-sm">
      <Container
        tag="header"
        className="flex justify-between px-4! py-4!  font-base "
      >
        <div className="px-1 py-1 text-2xl font-mosteria font-bold">
          <h1 className="text-gray-700">
            Fabie <span className="text-[#eb34e5]">Rav</span>
          </h1>
        </div>

        <MyMenu isClicked={open} onClick={() => setOpen(!open)} />
        <ul
          className={`flex items-center lg:flex-row flex-col justify-center gap-3 absolute lg:static w-screen lg:w-fit h-screen lg:h-fit bg-zinc-100 lg:bg-white top-0 left-0 lg:translate-0 z-10 ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-500`}
        >
          {headerLinks.map((link) => (
            <li
              onClick={() => setOpen(false)}
              key={link.href}
              className="inline-block px-3 py-2"
            >
              <a
                href={link.href}
                className="text-xl  font-medium text-black lg:text-dark  hover:text-gray-900 hover:underline "
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/#">
              <Button label="Upload CV" className="text-xs text-white " />
            </a>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default Header
