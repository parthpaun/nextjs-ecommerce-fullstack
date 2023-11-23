"use client";

import React, { useState } from "react";
import { addProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/Modal";

type Props = {};

const CreateCategory = () => {
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [categoryInfo, setCategoryInfo] = useState({
    name: "",
    parentCategory: "",
    descryption: "",
  });

  // const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log("categoryInfo", categoryInfo);
    //   const res = await addProduct(productData);
    //   if (res.status === 200) {
    // setProductData({
    //   productName: "",
    //   descryption: "",
    //   price: 0,
    // });
    // router.refresh();
    //   }
  };
  const handleChangeValue = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    setCategoryInfo({ ...categoryInfo, [name]: value });
  };
  return (
    <>
      <button className="btn" onClick={() => setIsAddCategoryOpen(true)}>
        Add Category
      </button>
      <Modal isOpen={isAddCategoryOpen} setIsOpen={setIsAddCategoryOpen}>
        <div className="flex flex-col py-2">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center py-2"
          >
            <input
              name="name"
              placeholder="Product Name"
              onChange={handleChangeValue}
              className="p-5 border-4 border-indigo-500/100 m-2"
              value={categoryInfo.name}
            />
            <textarea
              name="descryption"
              placeholder="Descryption"
              onChange={handleChangeValue}
              className="p-5 border-4 border-indigo-500/100 m-2"
              value={categoryInfo.descryption}
            />
            <div className="flex">
              <button
                type="button"
                onClick={() => setIsAddCategoryOpen(false)}
                className="p-2 mx-2 bg-blue-400 border-4 border-indigo-500/100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="p-2 mx-2 bg-blue-400 border-4 border-indigo-500/100"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CreateCategory;
