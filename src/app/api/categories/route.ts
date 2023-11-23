import { connect } from "@/dbConfig/dbConfig";
import { CategoriesModel as Categories } from "@/models";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const catagories = await Categories.find({})
      .populate([
        { path: "parentCategory", select: "_id name" },
        { path: "subcategories", select: "_id name" },
      ])
      .exec();
    const res = NextResponse.json({
      success: true,
      data: { catagories },
    });
    return res;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { name, descryption, parentCategory, image } = reqBody;
  const categoriesData = {
    name,
    parentCategory: new mongoose.Types.ObjectId(parentCategory),
    descryption,
    image,
  };
  const newCategories = new Categories(categoriesData);
  const category = await newCategories.save();
  const newCategoryId = category._id;
  const parentCategoryObject = await Categories.findById(parentCategory);
  parentCategoryObject?.subcategories?.push(newCategoryId);
  await parentCategoryObject.save();
  try {
    const res = NextResponse.json({
      message: "Category created successfully",
      success: true,
      data: { category },
    });
    return res;
  } catch (error: any) {
    console.log("error", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
