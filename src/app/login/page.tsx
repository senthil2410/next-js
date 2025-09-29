"use client"

import { signIn } from "next-auth/react";
import {  useRouter } from "next/navigation";
import { useState } from "react"


const Login=()=>
{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const router=useRouter();

    const handleSubmit=async (e:React.FormEvent)=>
    {
        e.preventDefault();

        const res=await signIn("credentials",{email,password});

        if(res?.error)
        {
            setError("");
        }
        else
        {
            router.push("/")
        }
    }

    return(
        <div>
            <h1>Login</h1>
             <form onSubmit={handleSubmit}>
                <input type="email" 
                       name="email"
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}  
                       required 
                />
                <input type="password" 
                       name="password"
                       value={password} 
                       onChange={(e) => setPassword(e.target.value)}  
                       required 
                />
               
               <button type="submit">Login</button>

             </form>

             {error&&<p>{error}</p>}
        </div>
    )

}

export default Login;