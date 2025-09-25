import { NextResponse } from "next/server";
import { handleAllProduct } from "@/controller/product.Controller";

export const GET=async()=> {
  try {
    const products = await handleAllProduct();
    return NextResponse.json({ products }, { status: 200 });
  } 
  catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to fetch products';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


