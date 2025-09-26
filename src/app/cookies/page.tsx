'use client'

import { deleteCookie, getCookie, setCookie } from "@/lib/cookies"
import { useEffect, useState } from "react"


const Cookies=()=>
{
    const [detail,setDetail]=useState("");
    
    const [cookieValue, setCookieValue] = useState<string | null>(null);

    useEffect(() => {
    const fetchCookie = async () => {
    const value = await getCookie();
    setCookieValue(value)
   }
   fetchCookie()
   }, [])

    const handleSet = async () => {
    await setCookie(detail)
    const value = await getCookie()
    setCookieValue(value)
   }

   const handleDelete=async()=>
   {
    await deleteCookie();
    setCookieValue(null);
   }

   return(
    <div>
        <input 
          type="text"
          placeholder="Enter your details"
          value={detail}
          onChange={(e)=>setDetail(e.target.value)}
          />
          <button onClick={handleSet}>Add-Cookies</button>
          <button onClick={handleDelete}>Delete-Cookies</button>

          {
            cookieValue?<p>{cookieValue}</p>:<p>No-Cookies</p>
          }

    </div>
   )

}

export default Cookies;