import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <nav className="fixed z-50 w-full bg-black text-white">
      <div className="container lg:py-3">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="relative w-8 lg:w-10 h-8 lg:h-16 pl-2 cursor-pointer">
              <Image
                src="/assets/logo-xl.png"
                alt="logo"
                className="object-contain"
                layout="fill"
              />
            </span>
          </Link>

          <span className="cursor-pointer flex lg:hidden" onClick={toggleMenu}>
            <Image
              width={"24px"}
              height={"24px"}
              src="/assets/menu-xl.png"
              alt="toggler"
            />
          </span>
          <Menu hide={isHidden} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
