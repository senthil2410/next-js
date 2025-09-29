import { error } from "console";
import { NextResponse } from "next/server";

export const GET=async()=>
{
    try
    {
        const res=await fetch("https://fakestoreapi.com/products");
         console.log("Fetch status:", res.status); 

        if(!res.ok)
        {
            return NextResponse.json({error:'Failed to fetch the products'},{status:500});
        }
        const products=await res.json();

        return NextResponse.json(products);
    }
    catch(error)
    {
        return NextResponse.json({error:"Internal Server error"},{status:500});

    }

}

