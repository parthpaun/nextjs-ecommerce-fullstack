
import React from "react";

type Props = {
  products: {
    _id: any;
    productName: String;
    descryption: string | undefined;
    price: Number;
  }[];
};



const ProductList = (props: Props) => {
  const { products = [] } = props;
  return (
    <div className="flex flex-col items-center min-w-full">
      <table className="items-center">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {products?.length &&
            products.map((product): any => {
              return (
                <tr className="bg-gray-100" key={product._id}>
                  <td className="px-4 py-2">{product.productName}</td>
                  <td className="px-4 py-2">{product.descryption}</td>
                  <td className="px-4 py-2">{product.price.toString()}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
