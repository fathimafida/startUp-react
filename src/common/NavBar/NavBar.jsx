


import Logo from '../../assets/logo.png';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (nav) {
      const handleOutsideClick = (event) => {
        if (nav && !document.getElementById('drawer').contains(event.target) && !document.getElementById('menu-button').contains(event.target)) {
          setNav(false);
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
      return () => document.removeEventListener('mousedown', handleOutsideClick);
    }
  }, [nav]);

  return (
    <div className="bg-[#74C69D] flex flex-col  px-8 py-3 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="h-8 w-8" src={Logo} alt="Logo" />
          <h1 className="text-[25px] text-white font-semibold">Start</h1>
        </div>

        <ul className="text-white gap-2 hidden md:flex">
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
        <div id="menu-button" onClick={handleNav} className="flex md:hidden text-white">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        id="drawer"
        className={
          nav
            ? "fixed right-0 top-0 w-[35%] h-full border-l border-l-gray-600 bg-white text-black ease-in-out duration-500"
            : "fixed right-[-100%]"
        }
      >
        <div className="flex items-center justify-between p-4 gap-2">
          <div onClick={handleNav} className="text-black border rounded-full p-1">
            <AiOutlineClose size={20} />
          </div>
          <h1 className="text-bold text-xl">DashBoard</h1>
        </div>
        <ul className="text-black gap-2 p-5 py-5 items-center justify-center">
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
};

export default NavBar;
