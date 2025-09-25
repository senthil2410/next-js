import mongoose, { Document, Schema, models, model } from 'mongoose';

export interface IProduct extends Document {
_id: mongoose.Types.ObjectId;
  name: string;
  price: number;
  category: string;
  stock: number;
  inActive: boolean;
  adminId: mongoose.Types.ObjectId;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  stock: { type: Number, required: true },
  inActive: { type: Boolean, required: true, default: true },
  adminId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
});

const Product = models.Product || model<IProduct>('Product', ProductSchema);

export default Product;