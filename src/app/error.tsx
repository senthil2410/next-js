"use client";

import { useEffect } from "react";

const Error=({error,reset}:{error:Error,reset:()=>void})=>
{
    useEffect(()=>
    {
    console.error(error);

    },[error])


    return(
        <div>
            <h1>Some thing Went Wrong</h1>
            <h4>{error.message}</h4>
            <button onClick={()=>reset()}>Try-again</button>
        </div>
    )

}

export default Error;
