"use client";

const GlobalError=({error,reset}:{error:Error,reset:()=>void})=>
{
    return(
    <html>
        <body>
            <h2>Some-thing went wrong</h2>
            <h4>{error.message}</h4>
            <button onClick={()=>{reset()}}>Retry</button>
        </body>
    </html>
    )
}

export default GlobalError;