import React, { useEffect, useState } from "react";
import { getData } from "../helpers/methods";

const Slider = () => {
  const [imgs, setImgs] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    getData("https://63189f2cf6b281877c71eab0.mockapi.io/slider", setImgs);
  }, []);
  return (
    <section className="relative pt-[68px] lg:pt-20 flex justify-center">
      <div className="flex justify-center relative">
        <div className="flex overflow-x-hidden">
          {imgs.length &&
            imgs.map((img) => {
              return (
                <img
                  key={img.id}
                  className={`min-h-[200px] duration-1000 origin-left ${
                    active !== +img.id
                      ? ` opacity-0`
                      : ` opacity-100 order-first`
                  }`}
                  src={img.img}
                  alt={`image ` + img.id}
                />
              );
            })}
        </div>
        <div className="container hidden md:flex absolute top-0 w-full h-full justify-center">
          <div className="flex items-center w-full justify-between ">
            <span
              className="slider-arrow"
              onClick={() => {
                setActive((prev) => (prev <= 1 ? 4 : prev - 1));
              }}
            >
              <i className="fa-solid fa-angle-left" />
            </span>
            <span
              className="slider-arrow"
              onClick={() => {
                setActive((prev) => (prev >= imgs.length ? 1 : prev + 1));
              }}
            >
              <i className="fa-solid fa-angle-right" />
            </span>
          </div>
        </div>
        <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 p-2 bg-white shadow-md rounded-full">
          <ul className="flex gap-3">
            {imgs.length &&
              imgs.map((img) => {
                return (
                  <li
                    key={img.id}
                    onClick={() => {
                      setActive(+img.id);
                    }}
                  >
                    <span
                      className={`block w-2 h-2 rounded-full ${
                        active === +img.id ? `bg-slate-800` : `bg-slate-400`
                      } cursor-pointer`}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;
