import { NextResponse } from "next/server";
import { handleAllProduct } from "@/controller/product.Controller";
import { createProduct } from "@/services/product.Service";

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

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const newProduct = await createProduct(data);

    return NextResponse.json(newProduct, { status: 201 });
  } 
  catch (error) {
    const message = error instanceof Error ? error.message : "Something went wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
};




