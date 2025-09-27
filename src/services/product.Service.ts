import Product from "@/lib/models/Products";
import { connectDB } from "@/lib/mongoose";


export const getAllProducts=async()=>
{
    try{
    await connectDB();
    const result=await Product.find();
    return result;
    }
    catch (err) {
     if (err instanceof Error) {
     console.error(err.message);
     throw new Error('Failed to get all products' + err.message);
    }
  }

}

export const getProductById=async(id:string)=>
{
    try{
        await connectDB();
        const result=await Product.findById(id);
        return result;
    }
    catch (err) {
     if (err instanceof Error) {
     console.error(err.message);
     throw new Error('Failed to get the product by ID' + err.message);
    }
  }
}

export const deleteProductById=async(id:string)=>
{
    try{
        await connectDB();
    
        const result=await Product.findByIdAndDelete(id);  
        return result;
    }
    catch (err) {
     if (err instanceof Error) {
     console.error(err.message);
     throw new Error('Failed to delete Product' + err.message);
    }
   }

}


export const createProduct = async (data: {
  name: string;
  price: number;
  category: string;
  stock: number;
  inActive?: boolean;
  adminId: string;
}) => 
{
  try {
    await connectDB();

    const newProduct = new Product(data);
    const result = await newProduct.save();

    return result;
  } 
  catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      throw new Error("Failed To Create Product: " + err.message);
    }
  }
};


export const updateProductById = async (
  id: string,
  data: {
    name?: string;
    price?: number;
    category?: string;
    stock?: number;
    inActive?: boolean;
    adminId?: string;
  }
) => {
  try {
    await connectDB();
    const result = await Product.findByIdAndUpdate(id, data, { new: true });
    return result;
  } 
  catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
      throw new Error("Failed  update product " + err.message);
    }
  }
};
