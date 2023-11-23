import React from "react";
import Container from "../components/Container";
import CreateCategory from "./components/CreateCategory";
import CategoryList from "./components/CategoryList";
import { getCategories } from "@/lib/actions";

const Categories = async () => {
  const categoryList = await getCategories();
  return (
    <div className="m-5">
      <div className="flex justify-end">
        <CreateCategory />
      </div>
      <Container>
        <CategoryList categories={categoryList?.data?.catagories} />
      </Container>
    </div>
  );
};

export default Categories;
