import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY  ;

export const POST=async (request:Request)=>
{  
    try{
    const { email, password } = await request.json();

    if(!email||!password)
    {
        return NextResponse.json(
        { error: "Invalid Credientails" },
        { status: 400 });
    }

    if (email === "senthil@gmail.com" && password === "senthil@123")
    {

        const token = jwt.sign({ email },"secret", {expiresIn: "1d",})
        
          const response=NextResponse.json({message:"Logged in Sucessful"});
          response.cookies.set("token", token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24, 
            sameSite: "lax",
        });
          return response;  
    }
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

   }

   catch(error)
   {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
    
   }
    
}