"use client";

import React, { useState, useEffect } from "react";
import { addProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";
import Modal from "@/app/components/Modal";
import { getCategories } from "@/lib/actions";

const CreateProduct = () => {
  const initialProductData = {
    productName: "",
    descryption: "",
    category: "",
    brand: "",
    price: 0,
    stockQuantity: 1,
  };
  const [isAddProductOpen, setIsAddProductOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState(initialProductData);
  useEffect(() => {
    getCategories().then((data) => {
      setCategories(data?.data?.catagories);
    });
    return () => {
      setProductData(initialProductData);
    };
  }, []);
  const router = useRouter();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const res = await addProduct(productData);
    if (res.status === 200) {
      setIsAddProductOpen(false);
      setProductData(initialProductData);
      router.refresh();
      // revalidatePath("/admin/products");
    }
  };
  const handleChangeValue = (event: any) => {
    const value = event.target.value;
    const name = event.target.name;
    setProductData({ ...productData, [name]: value });
  };
  return (
    <>
      <button className="btn" onClick={() => setIsAddProductOpen(true)}>
        Add Product
      </button>
      <Modal isOpen={isAddProductOpen} setIsOpen={setIsAddProductOpen}>
        <div className="flex flex-col py-2">
          <div className="text-center font-bold text-4xl my-5 ">
            Create Products
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center py-2"
          >
            <div className="flex justify-items-stretch flex-row form-control w-full m-4">
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  name="productName"
                  placeholder="Product Name"
                  onChange={handleChangeValue}
                  className="input input-bordered"
                  value={productData.productName}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  className="select select-bordered w-full "
                  onChange={handleChangeValue}
                  value={productData.category}
                  name="category"
                >
                  <option key={""} value={""} disabled></option>
                  {categories?.map((item: { _id: String; name: String }) => {
                    return (
                      <option
                        key={item._id.toString()}
                        value={item?._id.toString()}
                        className="my-4"
                      >
                        {item?.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            {/* <div className="form-control w-full max-w-s m-4"></div> */}

            <div className="flex flex-row form-control w-full m-4">
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  onChange={handleChangeValue}
                  className="input input-bordered "
                  value={productData.price}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Quantity</span>
                </label>
                <input
                  name="stockQuantity"
                  type="number"
                  placeholder="Quantity"
                  onChange={handleChangeValue}
                  className="input input-bordered"
                  value={productData.stockQuantity}
                  required
                />
              </div>
            </div>
            <div className="flex flex-row form-control w-full m-4">
              <div className="w-1/2">
                <label className="label">
                  <span className="label-text">Brand</span>
                </label>
                <input
                  name="brand"
                  placeholder="Brand"
                  onChange={handleChangeValue}
                  className="input input-bordered "
                  value={productData.brand}
                  required
                />
              </div>
            </div>
            <div className="form-control w-full max-w-s m-4">
              <label className="label">
                <span className="label-text">Descryption</span>
              </label>
              <textarea
                name="descryption"
                placeholder="Descryption"
                onChange={handleChangeValue}
                className="textarea textarea-bordered w-full px-4"
                value={productData.descryption}
              />
            </div>

            <div className="flex justify-end w-full">
              <button
                type="button"
                className="p-2 mx-2 btn btn-ghost "
                onClick={() => setIsAddProductOpen(false)}
              >
                cancel
              </button>

              <button type="submit" className="btn btn-primary ">
                Add
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default CreateProduct;
