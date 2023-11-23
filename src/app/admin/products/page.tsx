import React from "react";
import ProductList from "./components/ProductList";
import CreateProduct from "./components/CreateProduct";
import { getProducts } from "@/lib/actions";
import Container from "@/app/admin/components/Container";

type Props = {};

const Products = async () => {
  const productsData = await getProducts();
  
  return (
    <div className="m-5">
      <div className="flex justify-end">
        <CreateProduct />
      </div>
      <Container>
        <ProductList products={productsData?.products} />
      </Container>
    </div>
  );
};

export default Products;
