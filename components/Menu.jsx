import React from "react";

const Menu = ({ hide }) => {
  return (
    <div
      className={`menu-list ${
        hide && "scale-y-0 opacity-0"
      } lg:scale-y-100 lg:opacity-100`}
    >
      <div className="flex justify-center flex-1">
        <ul className="flex flex-col lg:flex-row items-center gap-4 xl:gap-6 2xl:gap-8">
          <li>
            <a href="#">Mac</a>
          </li>
          <li>
            <a href="#">iPad</a>
          </li>
          <li>
            <a href="#">iPhone</a>
          </li>
          <li>
            <a href="#">Watch</a>
          </li>
          <li>
            <a href="#">TV</a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li className="hidden lg:block h-full">
            <span className="block h-[110%] border-[0.5px] translate-y-[-5%]" />
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Locations</a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex gap-4 lg:gap-2 xl:gap-4 2xl:gap-6">
          <li>
            <a href="#">
              <img className="w-5" src="/assets/search-xl.png" alt="search" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-5" src="/assets/user-xl.png" alt="profile" />
            </a>
          </li>
          <li>
            <a href="#">
              <img className="w-5" src="/assets/bag-xl.png" alt="bag" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
