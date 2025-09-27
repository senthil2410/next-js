 "use client"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"; 

const AuthLogin=()=>
{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


   const handleSubmit = async (e: React.FormEvent) =>
   {
    e.preventDefault();

    const res=await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
   

   if(res?.error)
   {
     setError(res.error);
   }
   else{
    setError("");
    router.push("/users")

   }
  }

 return(
    <div>
        <h1 >Login page</h1>

         <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
         </form>
         {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
 )
}

export default AuthLogin;