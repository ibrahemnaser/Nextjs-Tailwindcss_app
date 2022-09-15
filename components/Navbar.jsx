import React, { useState } from "react";
import Menu from "./Menu";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleMenu = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <nav className="fixed z-50 w-full bg-black text-white">
      <div className="container lg:py-3">
        <div className="flex items-center justify-between">
          <span className="pl-2 cursor-pointer">
            <img className="h-8 lg:h-16" src="/assets/logo-xl.png" alt="logo" />
          </span>
          <span className="cursor-pointer lg:hidden" onClick={toggleMenu}>
            <img className="w-6" src="/assets/menu-xl.png" alt="toggler" />
          </span>
          <Menu hide={isHidden} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
