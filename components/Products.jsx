import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { getData } from "../helpers/methods";

const Products = () => {
  const [products, setProducts] = useState([]);

  // const displayProducts = () => {
  //   const iterationCount = Math.ceil(products.length / 2);
  //   let productIndex = -2;

  //   for (let i = 0; i < iterationCount; i++) {
  //     productIndex += 2;

  //     products.splice(productIndex, 1).map((ele) => {
  //       return (
  //         <div className="flex basis-full lg:basis-1/2 divide-x divide-[#DDD]">
  //           {products.splice(productIndex, 2).map((ele) => {
  //             return (
  //               <div key={ele.id} className=" w-40 h-30 basis-1/2 ">
  //                 <ProductCard />
  //               </div>
  //             );
  //           })}
  //         </div>
  //       );
  //     });
  //   }
  // };
  useEffect(() => {
    getData(
      "https://63189f2cf6b281877c71eab0.mockapi.io/products",
      setProducts
    );
  }, []);
  return (
    <section>
      <h2 className="font-black text-lg lg:text-2xl mt-8 text-center leading-5 lg:leading-7">
        Explore Products
      </h2>
      <div className="container mt-3 lg:mt-9 pt-0">
        <div className="flex flex-wrap lg:flex-nowrap border-[#DDD] border-[1px] rounded-[10px]  ">
          {products.length &&
            products.map((ele) => {
              return <ProductCard key={ele.id} product={ele} />;
            })}

          {/* <div className="flex basis-full lg:basis-1/2 divide-x divide-[#DDD]">
            <div className=" w-40 h-30 basis-1/2 ">
              <ProductCard />
            </div>
            <div className=" w-40 h-30 basis-1/2  ">
              <ProductCard />
            </div>
          </div>
          <div className="flex basis-full lg:basis-1/2 divide-x divide-[#DDD]">
            <div className=" w-40 h-30 basis-1/2  ">
              <ProductCard />
            </div>
            <div className=" w-40 h-30 basis-1/2  ">
              <ProductCard />
            </div>
          </div> */}
        </div>
        <div className="hidden lg:flex mt-8 justify-center gap-3">
          <span className="flex items-center text-[#A7A9AC] cursor-pointer">
            <i className="fa-solid fa-angle-left" />
          </span>
          <ul className="flex items-center gap-2">
            {products.length &&
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
