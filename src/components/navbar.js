import Image from "next/image"
import Link from "next/link";
import logo from "../images/logo_main.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Dropdown } from "@nextui-org/react";
import { useRouter } from "next/router";

export default function Navbar({ name }) {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    router.push("/");
  };
  return (
    <div className='flex justify-between items-center px-5 bg-[#383635] w-full p-2 text-white text-xl'>
      <Link href='/home' className='flex items-center space-x-3 font-bold'>
        <Image src={logo} className='h-10 w-10' />
        <h1 className='text-lg'>Mugirar Corp</h1>
      </Link>
      <div className='flex space-x-4 items-center'>
        <div className='flex flex-col text-sm font-semibold space-y-2'>
          <h1>{name}</h1>
        </div>
        <Dropdown>
          <Dropdown.Button style={{ backgroundColor: "inherit" }}>
            <FontAwesomeIcon
              icon={faUserCircle}
              className='text-4xl cursor-pointer'
            />
          </Dropdown.Button>
          <Dropdown.Menu>
            <Dropdown.Item key='profile'>
              <Link href='/profile'>My Profile</Link>
            </Dropdown.Item>
            <Dropdown.Item key='projects'>
              <Link href='/myprojects'>My Projects</Link>
            </Dropdown.Item>
            <Dropdown.Item key='logout'>
              <button onClick={() => logout()}>Logout</button>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}