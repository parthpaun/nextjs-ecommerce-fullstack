import { connect } from "@/dbConfig/dbConfig";
import { ProductsModel as Products } from "@/models";
import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";

connect();

export async function GET(request: NextRequest) {
  try {
    const products = await Products.find({})
      .populate({ path: "category", select: "_id name" })
      .exec();
    const res = NextResponse.json({
      message: "User created successfully",
      success: true,
      products,
    });
    return res;
  } catch (error: any) {
    console.log("error", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const {
    productName,
    descryption,
    category,
    price,
    stockQuantity,
    images,
    brand,
    isActive,
  } = reqBody;
  const newProduct = new Products({
    productName,
    descryption,
    category: new mongoose.Types.ObjectId(category),
    price: Number(price),
    stockQuantity,
    images,
    brand,
    isActive,
  });
  try {
    const product = await newProduct.save();
    const res = NextResponse.json({
      message: "Product created successfully",
      success: true,
      product,
    });
    return res;
  } catch (error: any) {
    console.error("Error saving product:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const reqBody = await request.json();
  const { id } = reqBody;
  try {
    await Products.findByIdAndDelete(id);
    const res = NextResponse.json({
      message: "Product deleted successfully",
      success: true,
    });
    return res;
  } catch (error: any) {
    const res = NextResponse.json({ error: error.message }, { status: 400 });
  }
}
