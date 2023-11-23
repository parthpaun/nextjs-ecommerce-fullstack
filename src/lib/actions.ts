import axios from "axios";
import { request } from "./utils";

export async function addProduct(productData: productData) {
  const addProductres = await request("/api/products", {
    body: JSON.stringify(productData),
    method: "POST",
  });
  return addProductres;
}

export async function getProducts() {
  try {
    const url = "/api/products";
    const requestOptions = {
      cache: "no-store",
    };
    const productsRes = await request(url, requestOptions);
    const data = await productsRes.json();
    return data;
  } catch (error) {
    return { error };
  }
}

export async function getCategories() {
  try {
    const productsRes = await fetch(`/api/categories`, {
      cache: "no-store",
    });
    const data = await productsRes.json();
    return data;
  } catch {
    return;
  }
}

export async function deleteProduct(id: String) {
  const deleteProduct = await request("/api/products", {
    body: JSON.stringify({id}),
    method: "DELETE",
  });
  return deleteProduct;
}
