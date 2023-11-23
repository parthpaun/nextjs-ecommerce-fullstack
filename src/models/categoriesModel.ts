import mongoose from "mongoose";
const Schema = mongoose.Schema;

const categoriesSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a category name"],
    unique: true,
  },
  parentCategory: { type: Schema.Types.ObjectId, ref: "categories" },
  subcategories: [{ type: Schema.Types.ObjectId, ref: "categories" }],
  description: String,
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },

  //   attributes: {
  //     // Define additional attributes based on your categories type
  //   },
});  

export default mongoose.models.categories || mongoose.model("categories", categoriesSchema);;
