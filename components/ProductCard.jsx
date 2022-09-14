import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="flex flex-col items-center justify-center w-40 h-30 basis-1/2 border-[1px] border-pink-700 px-3 pt-3 pb-5">
      <div className="w-28 h-28 text-center">
        <img src={product.img[0]} alt={product.name + "image"} />
      </div>
      <div className="flex flex-col w-full mt-4 self-start">
        <h4 className="text-xs mb-5">
          {product.name[0].toUpperCase() + product.name.substr(1)}
        </h4>
        <div className="flex justify-between">
          <span className="font-bold">&#36;{product.priceAfterdiscount}</span>
          <span className="text-[#A7A9AC] line-through">{product.price}</span>
        </div>
        <span
          className={`text-[8px] ${
            product.inStock ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
