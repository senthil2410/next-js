import { connectDB } from "@/lib/db";
import User from "@/lib/models/user";

import { NextResponse } from 'next/server';

export const GET = async () => {
  try {
    await connectDB();

    const users = await User.find().select('-password');

    return NextResponse.json(users);
  } 
  catch (error)
   {
    return NextResponse.json({message:'Failed to fetch users'},{ status: 500 });
   }
};
