import Image from "next/image";
import React from "react";

type Props = {
  categories: {
    _id: any;
    name: String;
    descryption?: string;
    image?: String;
    parentCategory?: { name: String; _id: String };
    // parentCategory: Number;
  }[];
};

const CategoryList = (props: Props) => {
  const { categories = [] } = props;
  return (
    <table className="items-center table overflow-x-auto rounded-lg font-semibold text-white text-base">
      <thead>
        <tr>
          <th className="px-4 py-4">Sr. No.</th>
          <th className="px-4 py-4">Category Name</th>
          <th className="px-4 py-4">Parent category</th>
          {/* <th className="px-4 py-4">Price</th> */}
        </tr>
      </thead>
      <tbody>
        {categories?.length &&
          categories.map((category, index): any => {
            return (
              <tr className="" key={category._id}>
                <td className="px-4 py-4">{index + 1}</td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          src={
                            category?.image?.toString() || "/category-grid.png"
                          }
                          alt={"category"}
                        />
                      </div>
                    </div>
                    {category.name}
                  </div>
                </td>
                <td className="px-4 py-4">{category?.parentCategory?.name}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default CategoryList;
