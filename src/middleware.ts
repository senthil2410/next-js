import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const middleware=(req:NextRequest)=>
{
  const token = req.cookies.get("token")?.value;

   if (!token) 
    {
    return NextResponse.redirect(new URL("/login", req.url));
    }

    try {

        const decoded = jwt.verify(token, "Secret");
        console.log("JWT token value",decoded);
        return NextResponse.next();

     } 
     catch(error)
     {
         console.error("Error",error);
         return NextResponse.redirect(new URL("/login", req.url));
     }

  }

  export const config={
    matcher:["/about"]
  }

