"use client";

import { useEffect } from "react";

const Error =({error, reset,}: {error: Error;reset: () => void;})=>
 {
  useEffect(() => {
    console.error("Errror occured while routing in blog:", error);
  }, [error]);

  return(
    <div >
      <h1>Something went wrong in the blog Route</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}

export default Error;