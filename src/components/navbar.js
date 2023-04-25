import Image from "next/image"
import logo from "../images/logo_main.png"

export default function Navbar() {
    return (
      <div className='bg-[#383635] w-full p-2 text-white text-xl'>
        <div className='flex items-center space-x-3 font-bold'>
          <Image src={logo} className='h-10 w-10' />
          <h1 className="text-lg">Mugirar Corp</h1>
        </div>
      </div>
    );
}