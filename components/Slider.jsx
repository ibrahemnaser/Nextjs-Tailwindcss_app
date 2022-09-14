import React, { useEffect, useState } from "react";
import { getData } from "../helpers/methods";

const Slider = () => {
  const [imgs, setImgs] = useState([]);
  const [active, setActive] = useState(1);

  useEffect(() => {
    // setImgs([
    //   {
    //     img: "http://preview.bit68.com/bit68Task/slider.png",
    //     id: "1",
    //   },
    //   {
    //     img: "https://www.91-cdn.com/hub/wp-content/uploads/2021/12/moto-edge-x30-specs-feat-2-1024x538.jpg?tr=q-100",
    //     id: "2",
    //   },
    //   {
    //     img: "https://assets.thehansindia.com/h-upload/2022/05/30/1600x960_1295133-mobiles-11.jpg",
    //     id: "3",
    //   },
    //   {
    //     img: "https://www.reliancedigital.in/wp-content/uploads/2022/03/cover_new_mobiles.jpg",
    //     id: "4",
    //   },
    // ]);
    getData("https://63189f2cf6b281877c71eab0.mockapi.io/slider", setImgs);
  }, []);
  return (
    <section className="relative pt-[75px] lg:pt-20 flex justify-center">
      <div>
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
    </section>
  );
};

export default Slider;
