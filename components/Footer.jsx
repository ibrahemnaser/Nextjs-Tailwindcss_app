import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  const { productId } = router.query;
  const icons = [
    {
      src: "/assets/Prem-Seller.png",
      alt: "premium reseller",
    },
    {
      src: "/assets/Auth-Reseller.png",
      alt: "premium reseller",
    },
    {
      src: "/assets/Auth-Service.png",
      alt: "authorized provider",
    },
    {
      src: "/assets/Sol-Expert.png",
      alt: "solution expert",
    },
  ];
  return (
    <footer
      className={`bg-black text-white pt-1 lg:pt-7 pb-3 lg:pb-0 ${
        productId ? "mt-48" : ""
      }`}
    >
      <div className="container">
        <ul className="flex gap-12 items-center justify-between max-w-[320px] lg:max-w-full lg:w-[890px] mx-auto">
          {icons.map((ele, indx) => {
            return (
              <li
                key={indx}
                className="relative w-[42px] lg:w-[76px] h-[42px] lg:h-[76px]"
              >
                <Image
                  src={ele.src}
                  alt={ele.alt}
                  className="object-contain"
                  layout="fill"
                />
              </li>
            );
          })}
        </ul>
        <p className="mt-6 lg:mt-7 text-center text-xs">
          Copyright &copy; {new Date().getFullYear()} - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
