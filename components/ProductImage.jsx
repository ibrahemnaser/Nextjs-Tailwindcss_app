import React from "react";
import Image from "next/image";

const ProductImage = ({ product }) => {
  return (
    <div className="flex items-center justify-center gap-9 lg:w-[60%]">
      <ul className="flex flex-col gap-6">
        {product &&
          product.img.map((img, indx) => {
            return (
              <li
                className="relative w-8 h-8 lg:w-20 lg:h-20 cursor-pointer"
                key={indx}
              >
                <Image
                  src={img}
                  alt={product.name + ` small image`}
                  className="object-contain"
                  layout="fill"
                />
              </li>
            );
          })}
      </ul>
      <div className="relative w-[210px] h-[210px] lg:w-[75%] lg:min-w-[450px] lg:h-[500px] cursor-pointer">
        {product && (
          <Image
            src={product.img[0]}
            alt={product.name + ` image`}
            className="object-contain"
            layout="fill"
          />
        )}
      </div>
    </div>
  );
};

export default ProductImage;
