import MoreOption from "./MoreOption"
import NavLink from "./NavLink"
import Image from "next/image";
import Logo from '@/public/images/logo.png'

function Navbar() {
  return (
    <header className="h-screen w-[250px] border-r bg-white px-4 pt-11 pb-8">
        <nav className="flex flex-col justify-between h-full w-full">
            <div>
              <Image 
              src={Logo}
              height={25}
              alt="logo"
              />
            </div>
            <NavLink />  
            <MoreOption /> 
        </nav>
    </header>
  )
}

export default Navbar