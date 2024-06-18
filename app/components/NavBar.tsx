"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRef, useState } from "react";
import { Divider, Dropdown } from 'keep-react'

function NavBar() {
  const [ShowMenu, SetMenu] = useState(true);
  const MenuRef = useRef<HTMLDivElement | null>(null);

  function HandleShowMenu() {
    if (MenuRef.current) {
      if (ShowMenu) {
        MenuRef.current.style.top = "13vh";
        SetMenu(!ShowMenu);
      } else {
        MenuRef.current.style.top = "-100vh";
        SetMenu(!ShowMenu);
      }
    }
  }

  return (
    <>
      <div className="NavBar_Mani_container flex w-[100%] h-fit justify-between px-4 mt-2 box-border overflow-y-hidden">
        <div className="Logo font-bold text-xl cursor-pointer">Toingg</div>
        <div className="MenuIcon text-orange-500 cursor-pointer ">
          <GiHamburgerMenu size={30} onClick={HandleShowMenu} />
        
          
        </div>

        <div
          className="DropDown w-[80%] h-[450px] p-6 box-border bg-gradient-to-b rounded-[20px] absolute top-[-100vh] right-3 duration-500 from-[#FEECDF] to-[#D38751] "
          ref={MenuRef}
        >
          <div className="contact flex justify-between px-5 mb-5 hover:scale-110">
            <p>Contact</p>
            <FaArrowRightLong size={30} />
          </div>
          <div className="contact flex justify-between px-5 mb-5 hover:scale-110">
            <p>Pricing</p>
            <FaArrowRightLong size={30} />
          </div>
          <div className="contact flex justify-between px-5 mb-5 hover:scale-110">
            <p>Documentation</p>
            <FaArrowRightLong size={30} />
          </div>
          <div className="contact flex justify-between px-5 mb-5 hover:scale-110">
            <p>Join our community</p>
            <FaArrowRightLong size={30} />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
