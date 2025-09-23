export interface User {
  id: number;
  name: {
    firstname: string;
    lastname: string;
  };
  username: string;
  email: string;
  address:
  {
    city:string
  }
}

export const getUsers=async()=>
{
    const res=await fetch("https://fakestoreapi.com/users",{
         next: { revalidate: 60 },
   })
   if(!res.ok)
   {
    throw new Error("Failed to fetch user details");
   }
   return res.json();

}

export const getUserByID=async (id:number)=>
{
    const res=await fetch(`https://fakestoreapi.com/users/${id}`,{
         next: { revalidate: 60 },
   })

   if(!res.ok)
   {
    throw new Error ("User not Found")
   }
   return res.json();

}