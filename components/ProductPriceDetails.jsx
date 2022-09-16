import React from "react";

const ProductPriceDetails = ({ product }) => {
  return (
    <div className="price-details flex flex-col mb-3">
      <div className="flex w-full items-center justify-between text-[#888888]">
        <span className="text-xs font-[600]">APPLE</span>
        <span className="leading-[1px]">
          <i className="fa-regular fa-heart"></i>
        </span>
      </div>
      <h3 className="text-xl font-bold mb-4">
        {product && product?.name[0].toUpperCase() + product?.name.substr(1)}
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
  );
};

export default ProductPriceDetails;
