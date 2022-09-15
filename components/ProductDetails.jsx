import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getData } from "../helpers/methods";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    getData(
      `https://63189f2cf6b281877c71eab0.mockapi.io/products/${productId}`,
      setProduct
    );
  }, [productId]);
  return (
    <section className="pt-[10px] lg:pt-14">
      <div className="container flex flex-col lg:flex-row lg:items-start lg:justify-between gap-9">
        <div className="flex items-center justify-center gap-9 lg:w-[60%]">
          <ul className="flex flex-col gap-6">
            {product &&
              product.img.map((img, indx) => {
                return (
                  <li
                    className="w-8 h-8 lg:w-20 lg:h-20 cursor-pointer"
                    key={indx}
                  >
                    <img src={img} alt={product.name + ` small image`} />
                  </li>
                );
              })}
          </ul>
          <div className="w-[210px] h-[210px] lg:w-[75%] lg:min-w-[500px] lg:h-[500px] cursor-pointer">
            {product && (
              <img
                className="lg:h-full"
                src={product.img[0]}
                alt={product.name + ` image`}
              />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="price-details flex flex-col mb-3">
            <div className="flex w-full items-center justify-between text-[#888888]">
              <span className="text-xs font-[600]">APPLE</span>
              <span className="leading-[1px]">
                <i className="fa-regular fa-heart"></i>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">
              {product &&
                product?.name[0].toUpperCase() + product?.name.substr(1)}
            </h3>
            <div className="flex items-center gap-1">
              <ul className="flex ">
                {product &&
                  [...new Array(product.numberOfStars)].map((ele, indx) => {
                    return (
                      <li key={indx}>
                        <i className="fa-solid fa-star text-[#FFCF09]"></i>
                      </li>
                    );
                  })}
                {product &&
                  [...new Array(5 - product.numberOfStars)].map((ele, indx) => {
                    return (
                      <li key={indx}>
                        <i className="fa-regular fa-star text-[#AAAAAA]"></i>
                      </li>
                    );
                  })}
              </ul>
              <span className="text-[#888888] text-xs">{`(${product?.numberOfReviews} Reviews)`}</span>
            </div>
            <span
              className={`font-bold text-3xl mt-3 ${
                product?.inStock ? "text-[#0D4EB7]" : "text-black"
              }`}
            >
              &#36;{product?.priceAfterdiscount}
            </span>
            <span
              className={`text-[8px] ${
                product?.inStock ? "text-[#36BA5C]" : "text-[#D63030]"
              }`}
            >
              {product?.inStock ? "In Stock" : "Out of Stock"}
            </span>
            <ul className="flex mt-5 items-center gap-2">
              <li className="w-7 h-7 border rounded-full border-black flex items-center justify-center text-xl cursor-pointer">
                +
              </li>
              <li className="text-xl">1</li>
              <li className="w-7 h-7 border rounded-full border-black flex items-center justify-center text-xl cursor-pointer">
                -
              </li>
            </ul>
          </div>
          <div className="bank-cards flex flex-col gap-[6px]">
            <div className="upper flex gap-2">
              <div className="details-card">
                <span className="text-[11px] text-[#C3C3C3] font-[600]">
                  Full Price
                </span>
              </div>
              <div className="details-card">
                <span className="text-[11px] text-black font-[600]">
                  Installments
                </span>
              </div>
            </div>
            <div className="lower flex gap-[6px]">
              {[...new Array(4)].map((ele, indx) => {
                return (
                  <div key={indx} className="details-card">
                    <img src="../assets/CIB.png" alt="cib logo" />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="memory mt-3">
            <h4 className="mb-1 font-[600]">Memory</h4>
            <div className="lower flex gap-[6px]">
              <div className="details-card flex flex-col border-black">
                <span className="text-[10px]  font-bold">128GB</span>
                <span className="text-xs">&#36;999.00</span>
              </div>
              <div className="details-card flex flex-col text-[#AAAAAA]">
                <span className="text-[10px]  font-bold">256GB</span>
                <span className="text-xs">&#36;999.00</span>
              </div>
              <div className="details-card flex flex-col text-[#AAAAAA]">
                <span className="text-[10px]  font-bold">512GB</span>
                <span className="text-xs">&#36;999.00</span>
              </div>
              <div className="details-card flex flex-col text-[#AAAAAA]">
                <span className="text-[10px]  font-bold">1TB</span>
                <span className="text-xs">&#36;999.00</span>
              </div>
            </div>
          </div>
          <div className="insurance mt-3">
            <h4 className="mb-1 font-[600]">Color</h4>
            <div className="lower flex gap-[6px]">
              <div className="details-card flex flex-col p-0">
                <span className="text-[10px] font-bold text-[#AAAAAA]">
                  Silver
                </span>
                <span className="block w-6 h-6 bg-[#EDEDED] border border-[#707070] rounded-full"></span>
              </div>
              <div className="details-card flex flex-col border-black p-0">
                <span className="text-[10px] font-bold">Sierra Blue</span>
                <span className="block w-6 h-6 bg-[#90BAD1] border border-[#707070] rounded-full"></span>
              </div>
            </div>
          </div>
          <div className="insurance mt-3">
            <h4 className="mb-1 font-[600]">Insurance</h4>
            <div className="lower flex gap-[6px]">
              <div className="details-card flex flex-col  text-[#AAAAAA]">
                <span className="text-[10px]  font-bold">1 year</span>
                <span className="text-xs">&#36;99.00</span>
              </div>
              <div className="details-card flex flex-col border-black ">
                <span className="text-[10px]  font-bold">2 years</span>
                <span className="text-xs">&#36;159.00</span>
              </div>
            </div>
          </div>
          <button
            className={`mt-10 mb-4 text-white px-6 py-3 rounded-[10px] font-[600] text-xs ${
              product?.inStock
                ? "bg-[#0D4EB7] hover:bg-blue-900"
                : "bg-black hover:bg-black/90"
            }`}
          >
            Add to cart
          </button>
          <ul className="shipping text-[#AAAAAA] border-t-2 py-7">
            <li className="flex items-center gap-3 mb-4">
              <i className="w-4 h-4">
                <img src="../assets/shipping.png" alt="shipping" />
              </i>
              <span className="text-xs">
                Free shipping, arrives by Tue, Nov 23
              </span>
            </li>
            <li className="flex items-center gap-3 mb-4">
              <i className="w-4 h-4">
                <img src="../assets/return.png" alt="return" />
              </i>
              <span className="text-xs">
                Free 10-day return window starts Dec 26th Details
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
