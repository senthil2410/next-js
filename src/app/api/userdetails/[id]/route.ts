import { connectDB } from "@/lib/db";
import User from "@/lib/models/user";
import { NextRequest, NextResponse } from "next/server";


export const GET=async(_request: NextRequest, { params }: { params: { id: string } })=>
 {

  const { id } = params;

  if (!id) 
  {
  return NextResponse.json({message:"Invalid Credientails"}, {status: 400 });
  }

  await connectDB();

  const user = await User.findById(id).select('-password');

  if (!user) 
  {
    return NextResponse.json({message:"User not found"}, {status: 404 });
  }

  return NextResponse.json(user);
}


export const PUT=async(request: NextRequest, { params }: {params: { id: string } })=> 
{

 const { id } = params;

 if (!id) 
  {
    return NextResponse.json({message:"Invalid Credientails" }, { status: 400 });
  }
  await connectDB();

  const body = await request.json();

  try {
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true }).select('-password');

    if (!updatedUser) {
      return NextResponse.json({ message:"User not found" }, { status: 404 });
    }

    return NextResponse.json(updatedUser);
  } 
  catch (error) {
    return NextResponse.json({message:"Failed to update user"}, { status: 500 });
  }
}


export async function DELETE(_request: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

   if (!id) 
   {
   return NextResponse.json({message:"Invalid Credientails"}, { status: 400 });
   }
   await connectDB();
   
  try {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return NextResponse.json({message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({message:"User deleted successfully"});
  } 
  catch (error) 
  {
    return NextResponse.json({message:"Failed to delete user"}, { status: 500 });
  }
}


