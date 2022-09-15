import React from "react";
import { useRouter } from "next/router";
import Products from "../../components/Products";
import ProductDetails from "../../components/ProductDetails";

const ProductId = () => {
  const router = useRouter();
  const { productId } = router.query;
  console.log(productId);
  return (
    <div className="pt-[69px] lg:pt-20">
      <ProductDetails />
      <Products />
    </div>
  );
};

export default ProductId;
