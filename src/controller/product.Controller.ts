import { getAllProducts,getProductById,deleteProductById } from "@/services/product.Service";


export const handleAllProduct=async()=>
{
    const products=await getAllProducts();
    if(!products)
    {
      throw new Error('Products Not Found');
    }
    return products;
}

export const handleGetProductById=async(id:string)=>
{
    const product=await getProductById(id);
    if(!product)
    {
        throw new Error("Product not Found ")
    }
    return product;

}

export const handledeleteProductById=async(id:string)=>
{
    const result=await deleteProductById(id);
    if(!result)
     {
        throw new Error("Product not found to delete");
     }
    return result;      
}