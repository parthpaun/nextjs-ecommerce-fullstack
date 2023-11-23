import React from "react";
import ProductListActions from "./ProductListActions";
type Props = {
  products: {
    _id: any;
    productName: String;
    descryption: string | undefined;
    price: Number;
    brand: String;
    category: { name: String };
    stockQuantity: number;
  }[];
};

const ProductList = (props: Props) => {
  const { products = [] } = props;
  return (
    <table className="items-center table overflow-x-auto rounded-lg font-semibold text-white text-base">
      <thead>
        <tr>
          <th className="px-4 py-4">Sr. No.</th>
          <th className="px-4 py-4">Product Name</th>
          {/* <th className="px-4 py-4">Description</th> */}
          <th className="px-4 py-4">Brand</th>
          <th className="px-4 py-4">Category</th>
          <th className="px-4 py-4">Quantity</th>
          <th className="px-4 py-4">Price</th>
          <th className="px-4 py-4 flex items-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {products?.length &&
          products.map((product, index): any => {
            return (
              <tr className="" key={product._id}>
                <td className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">{product.productName}</td>
                <td className="px-4 py-4">{product.brand}</td>
                <td className="px-4 py-4">{product.category?.name}</td>
                <td className="px-4 py-4">{product.stockQuantity}</td>
                <td className="px-4 py-4">{product.price.toString()}</td>
                <td className="px-4 py-4">
                  <ProductListActions id={product._id} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ProductList;
