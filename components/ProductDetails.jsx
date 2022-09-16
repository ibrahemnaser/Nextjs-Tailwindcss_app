import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getData } from "../helpers/methods";
import Loader from "./Loader";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductImage from "./ProductImage";
import ProductPriceDetails from "./ProductPriceDetails";

const ProductDetails = () => {
  const [product, setProduct] = useState();
  const router = useRouter();
  const { productId } = router.query;

  useEffect(() => {
    const controller = new AbortController();
    getData(
      `https://63189f2cf6b281877c71eab0.mockapi.io/products/${productId}`,
      setProduct,
      controller.signal
    );
    return () => {
      controller.abort();
    };
  }, [productId]);
  return (
    <section className="pt-[10px] lg:pt-14">
      <div className="container flex flex-col lg:flex-row lg:items-start lg:justify-between gap-9">
        {product ? <ProductImage product={product} /> : <Loader />}
        <div className="flex flex-col">
          <ProductPriceDetails product={product} />
          <div className="bank-cards flex flex-col gap-[6px]">
            <div className=" flex gap-2">
              <ProductDetailsCard type="price" />
            </div>
            <div className=" flex gap-[6px]">
              {[...new Array(4)].map((ele, indx) => {
                return <ProductDetailsCard key={indx} type="bank" />;
              })}
            </div>
          </div>
          <div className="memory mt-3">
            <h4 className="mb-1 font-[600]">Memory</h4>
            <div className=" flex gap-[6px]">
              <ProductDetailsCard type="memory" />
            </div>
          </div>
          <div className="color mt-3">
            <h4 className="mb-1 font-[600]">Color</h4>
            <div className="lower flex gap-[6px]">
              <ProductDetailsCard type="color" />
            </div>
          </div>
          <div className="insurance mt-3">
            <h4 className="mb-1 font-[600]">Insurance</h4>
            <div className="lower flex gap-[6px]">
              <ProductDetailsCard type="insurance" />
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
