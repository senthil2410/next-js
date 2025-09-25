import {
  handledeleteProductById,
  handleGetProductById,
} from "@/controller/product.Controller";
import { NextResponse } from "next/server";

export const GET = async (_req: Request,{ params }: { params: { id: string } }) =>
{
  try {
    const product = await handleGetProductById(params.id);

    return NextResponse.json(product, { status: 200 });
  } 
  catch (error)
  {
    const message =error instanceof Error ? error.message : "Something went Wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
};

export const DELETE = async (_req: Request,{ params }: { params: { id: string } }) =>
{
  try {
    const result = await handledeleteProductById(params.id);

    if (!result) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json(result, { status: 200 });
  } 
  catch (error) {
    const message =
      error instanceof Error ? error.message : "Something went  Wrong";
    return NextResponse.json({ error: message }, { status: 500 });
  }
};
