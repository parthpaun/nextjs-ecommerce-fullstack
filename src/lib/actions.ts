import axios from "axios";
import { revalidatePath } from "next/cache";




export async function addProduct(productData: productData) {
  const addProductres = await axios.post(
    "http://localhost:3000/api/products",
    productData
  );
  return addProductres;
}

export async function getProducts() {
  try {
    const productsRes = await fetch(`http://localhost:3000/api/products`, {
      cache: "no-store",
    });
    const data = await productsRes.json();
    return data;
  } catch {
    return;
  }
}

export async function getCategories() {
  try {
    const productsRes = await fetch(`http://localhost:3000/api/categories`, {
      cache: "no-store",
    });
    const data = await productsRes.json();
    return data;
  } catch {
    return;
  }
}

export async function deleteProduct(id: String) {
  const deleteProduct = await axios.delete(
    "http://localhost:3000/api/products",
    { data: { id } }
  );
  return deleteProduct;
}
