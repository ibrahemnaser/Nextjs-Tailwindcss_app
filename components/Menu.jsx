import Image from "next/image";
import React from "react";

const Menu = ({ hide }) => {
  const menuLinks = [
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "TV",
    "Accessories",
    "Offers",
    "",
    "Support",
    "Services",
    "Locations",
  ];
  const icons = [
    {
      src: "/assets/search-xl.png",
      alt: "search",
    },
    {
      src: "/assets/user-xl.png",
      alt: "profile",
    },
    {
      src: "/assets/bag-xl.png",
      alt: "bag",
    },
  ];
  return (
    <div
      className={`menu-list ${
        hide && "scale-y-0 opacity-0"
      } lg:scale-y-100 lg:opacity-100`}
    >
      <div className="flex justify-center flex-1">
        <ul className="flex flex-col lg:flex-row items-center gap-4 xl:gap-6 2xl:gap-8">
          {menuLinks.map((link, indx) => {
            return (
              <li key={indx} className={link ? "" : "hidden lg:block h-full"}>
                {link ? (
                  <a href="#" className="font-bold text-sm">
                    {link}
                  </a>
                ) : (
                  <span className="block h-[110%] border-[0.5px] translate-y-[-5%]" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul className="flex gap-4 lg:gap-2 xl:gap-4 2xl:gap-6">
          {icons.map((icon, indx) => {
            return (
              <li key={indx}>
                <a href="#" className="flex">
                  <Image
                    width={"24px"}
                    height={"24px"}
                    src={icon.src}
                    alt={icon.alt}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
