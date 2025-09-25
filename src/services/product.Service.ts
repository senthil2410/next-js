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

