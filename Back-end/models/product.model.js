import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true, // create_at, updated_at
  }
);

const Product = mongoose.model("Product", productSchema)
export default Product  