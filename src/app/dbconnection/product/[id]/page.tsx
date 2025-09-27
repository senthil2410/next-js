
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { IProduct } from "@/lib/models/Products";
import { getProductById } from "@/services/product.Service";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const ProductPage=async ({ params }: { params: { id: string } })=>
{
   const session = await getServerSession(authOptions);

  if (!session) {
   
    redirect("/login")
  }
    let product: IProduct| undefined;

    try{
       product=await getProductById(params.id);
    }
    catch(error)
    {
      <h1>Failed to laod Product</h1>
    }
    return(
        <>
           <div>{product?.name}</div>
           <div> Price:{product?.price}</div>
           <div>category:{product?.category}</div>
           <div>Stock : {product?.stock}</div>
        </>
    )
}

export default ProductPage;