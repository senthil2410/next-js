'use client'
import { getUsers, User } from "@/services/userService";
import { useLinkStatus } from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const UserList=()=>
{
    const [users,setUsers]=useState<User[]>([]);
    const router=useRouter();
    const {pending}=useLinkStatus();

    useEffect(()=>
    {
        getUsers()
        .then((data)=>
         {
            setUsers(data)
         })
        .catch((error)=>
        {
          console.error("Failed to fetch users",error);
          throw new Error("Failed to fetch User details" )
        })

    },[])

    return (
        <div>
            <h2>User List</h2>
            {pending && (
              <h1>Loading...</h1>
            )}
            <ul>
             {users.map((user)=>(
              <li 
                key={user.id}
                onClick={()=>router.push(`/users/${user.id}`)}
                style={{cursor:"pointer"}}
              >
                {user.name.firstname}
              </li>
             
            ))}
            </ul>
        </div>
    )

}

export default UserList;