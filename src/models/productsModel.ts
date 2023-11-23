import mongoose from "mongoose";
const Schema = mongoose.Schema;

const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Please provide a Product Name"],
    unique: true,
  },
  descryption: {
    type: String,
  },
  category: { type: Schema.Types.ObjectId, ref: "categories" },
  price: {
    type: Number,
    required: [true, "Please provide a price"],
  },
  stockQuantity: {
    type: Number,
    default: 0,
  },
  images: [String],
  brand: String,
  rating: { type: Number, default: 0 },
  reviews: [
    { user: { type: Schema.Types.ObjectId, ref: "User" }, text: String },
  ],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

// const Products =
 

export default  mongoose.models.products || mongoose.model("products", productSchema);;
