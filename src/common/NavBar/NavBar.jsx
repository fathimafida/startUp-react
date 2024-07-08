
import Logo from '../../assets/logo.png'

import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {

    const [nav,setNav] = useState(false)
    const handleNav = () => {
      setNav(!nav);
    };

  return (
    <div className="bg-[#74C69D] flex flex-col mx-auto  px-8 py-3 ">
      <div className="flex  items-center   justify-between ">
        <div className="flex items-center gap-2 ">
          <img className="h-8  w-8" src={Logo}></img>
          <h1 className="text-[25px] text-white font-semibold">Start</h1>
        </div>

        <ul className="text-white  gap-2  hidden md:flex">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div onClick={handleNav} className="flex  md:hidden text-white">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20}  />
          )}
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-600 bg-white text-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <ul className="text-black  gap-2 p-5 py-5 ">
          <li className="text-lg font-bold">
            <a href="#home">Home</a>
          </li>
          <li className="text-lg font-bold">
            <a href="#about">About</a>
          </li>
          <li className="text-lg font-bold">
            <a href="#Services">Services</a>
          </li>
          <li className="text-lg font-bold">
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar