import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getData } from "../helpers/methods";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const router = useRouter();
  const { productId } = router.query;

  console.log(product?.img);
  useEffect(() => {
    getData(
      `https://63189f2cf6b281877c71eab0.mockapi.io/products/${productId}`,
      setProduct
    );
  }, [productId]);
  return (
    <section className="pt-[10px]">
      <div className="container flex flex-col gap-9">
        <div className="flex items-center justify-center gap-9">
          <ul className="flex flex-col gap-6">
            {product.img &&
              product.img.map((img, indx) => {
                return (
                  <li className="w-8 h-8" key={indx}>
                    <img src={img} alt={product.name + ` small image`} />
                  </li>
                );
              })}
          </ul>
          <div className="w-[210px] h-[210px]">
            {product.img && (
              <img src={product.img[0]} alt={product.name + ` image`} />
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="price-details flex flex-col mb-3">
            <div className="flex w-full items-center justify-between text-[#888888]">
              <span className="text-xs font-[600]">APPLE</span>
              <span className="leading-[1px]">
                <i class="fa-regular fa-heart"></i>
              </span>
            </div>
            <h3 className="text-xl font-bold mb-4">
              {product?.name[0].toUpperCase() + product?.name.substr(1)}
            </h3>
            <div className="flex items-center gap-1">
              <ul className="flex ">
                <li>
                  <i class="fa-solid fa-star text-[#FFCF09]"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star text-[#FFCF09]"></i>
                </li>
                <li>
                  <i class="fa-solid fa-star text-[#FFCF09]"></i>
                </li>
                <li>
                  <i class="fa-regular fa-star text-[#AAAAAA]"></i>
                </li>
                <li>
                  <i class="fa-regular fa-star text-[#AAAAAA]"></i>
                </li>
              </ul>
              <span className="text-[#888888] text-xs">{`(${product?.numberOfReviews} Reviews)`}</span>
            </div>
            <span className="font-bold text-3xl mt-3">
              &#36;{product?.priceAfterdiscount}
            </span>
            <span
              className={`text-[8px] ${
                product.inStock ? "text-[#36BA5C]" : "text-[#D63030]"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
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
            <h4>Memory</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
