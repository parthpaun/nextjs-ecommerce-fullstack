import React, { FormEvent } from "react";
import { deleteProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";
import { connect } from "@/dbConfig/dbConfig";
import { ProductsModel } from "@/models";
import { revalidatePath } from "next/cache";

type Props = {
  id: String;
};

const ProductListActions = (props: Props) => {
  const { id } = props;
  //   const router = useRouter();
  //   const handleDeleteProduct = async () => {
  //     await deleteProduct(id);
  //     router.refresh();
  //     // revalidatePath("/admin/products");
  //   };
  const updateProductAction = async (formData: any) => {
    'use server'
    const { id } = Object.fromEntries(formData);
    console.log('id update', id)
  };
  const deleteProductAction = async (formData: any) => {
    "use server";
    const { id } = Object.fromEntries(formData);
    console.log("foemData", { formData, id });
    try {
      connect();
      await ProductsModel.findByIdAndDelete(id);
    } catch (err) {
      console.log(err);
      throw new Error("Failed to delete product!");
    }
    revalidatePath("/dashboard/products");
  };
  return (
    <div className="flex">
      <form>
        <input type="hidden" name="id" value={id.toString()} />
        <button className="btn btn-xs mx-2 btn-success">view</button>
        <button
          className="btn btn-xs mx-2 btn-warning"
          formAction={updateProductAction}
        >
          update
        </button>
        <button
          className="btn btn-xs mx-2 btn-error"
          formAction={deleteProductAction}

          //   onClick={handleDeleteProduct}
        >
          delete
        </button>
      </form>
    </div>
  );
};

export default ProductListActions;
