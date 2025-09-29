
import { NextResponse } from "next/server";

export const GET=async(request:Request,{params}:{params:{id:string}})=>
{
    const {id}=params;
    try{
       const res=await fetch(`https://fakestoreapi.com/products/${id}`);
       if(!res.ok)
       {
         return NextResponse.json({error:"Product not found"},{status:400});
       }
      const product = await res.json();
      return NextResponse.json(product);
    }
    catch(error)
    {
        console.error("Fetch error",error);
        return NextResponse.json(
            {error:"Internal Server error"},
            {status:500}
        )

    }

};