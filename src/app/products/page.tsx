import React from "react";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import { getProducts } from "@/lib/actions";

type Props = {};

const Products = async () => {
  const productsData = await getProducts();
  return (
    <div>
      <CreateProduct />
      <ProductList products={productsData?.products} />
    </div>
  );
};

export default Products;
