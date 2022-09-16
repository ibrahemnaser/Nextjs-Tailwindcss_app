import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getData } from "../helpers/methods";
import Loader from "./Loader";

const Products = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    getData(
      "https://63189f2cf6b281877c71eab0.mockapi.io/products",
      setProducts,
      controller.signal
    );
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <section>
      <h2 className="font-black text-lg lg:text-2xl mt-8 text-center leading-5 lg:leading-7">
        Explore Products
      </h2>
      <div className="container mt-3 lg:mt-9 pt-0">
        <div className="flex flex-wrap lg:flex-nowrap border-[#DDD] border-[1px] rounded-[10px] divide-x divide-[#DDD] ">
          <div className="flex flex-col lg:flex-row basis-1/2 lg:basis-1/2 divide-y lg:divide-x lg:divide-y-0 divide-[#DDD]">
            {products ? (
              products.slice(0, Math.ceil(products.length / 2)).map((ele) => {
                return <ProductCard key={ele.id} product={ele} />;
              })
            ) : (
              <Loader />
            )}
          </div>
          <div className="flex flex-col lg:flex-row basis-1/2 lg:basis-1/2 divide-y lg:divide-x lg:divide-y-0 divide-[#DDD]">
            {products ? (
              products.slice(Math.ceil(products.length / 2)).map((ele) => {
                return <ProductCard key={ele.id} product={ele} />;
              })
            ) : (
              <Loader />
            )}
          </div>
        </div>
        <div className="hidden lg:flex mt-8 justify-center gap-3">
          <span className="flex items-center text-[#A7A9AC] cursor-pointer">
            <i className="fa-solid fa-angle-left" />
          </span>
          <ul className="flex items-center gap-2">
            {products &&
              products.map((ele, indx) => {
                return (
                  <li key={indx}>
                    <span
                      className={`block w-[6px] h-[6px] rounded-full ${
                        indx === 0 ? "bg-[#A7A9AC]" : "bg-[#D1D3D4]"
                      } cursor-pointer`}
                    />
                  </li>
                );
              })}
          </ul>
          <span className="flex items-center text-[#A7A9AC] cursor-pointer">
            <i className="fa-solid fa-angle-right" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
