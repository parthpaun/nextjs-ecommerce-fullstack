"use client";

import React, { useState } from "react";
import { addProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";

type Props = {};

const CreateProduct = () => {
  const [productData, setProductData] = useState({
    productName: "",
    descryption: "",
    price: 0,
  });
  const router = useRouter()
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await addProduct(productData);
    if (res.status === 200) {
      
      setProductData({
        productName: "",
        descryption: "",
        price: 0,
      });
      router.refresh()
    }
  };
  const handleChangeValue = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    setProductData({ ...productData, [name]: value });
  };
  return (
    <div className="flex flex-col py-2">
      <form onSubmit={handleSubmit} className="flex flex-col items-center py-2">
        <input
          name="productName"
          placeholder="Product Name"
          onChange={handleChangeValue}
          className="p-5 border-4 border-indigo-500/100 m-2"
          value={productData.productName}
        />
        <textarea
          name="descryption"
          placeholder="Descryption"
          onChange={handleChangeValue}
          className="p-5 border-4 border-indigo-500/100 m-2"
          value={productData.descryption}
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChangeValue}
          className="p-5 border-4 border-indigo-500/100 m-2"
          value={productData.price}
        />
        <button
          type="submit"
          className="p-2 bg-blue-400 border-4 border-indigo-500/100"
        >
          Add product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
