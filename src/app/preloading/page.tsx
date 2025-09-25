'use client'

import { useState,useEffect } from "react";

interface User {
  id: number;
  email: string;
  name: {
  firstname: string;
  lastname: string;
}
  address: {
    city: string;
    zipcode: string;
  };

}

const Preload=()=>
{
    const [users,setUsers]=useState<User[]>([]);
    const [storedData,setStoredData]=useState<Record<number,User>>({});
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

    useEffect(()=>
    {
        const fetchUsers= async () => 
    {
        const res = await fetch('/api/users');
        const data = await res.json();
        setUsers(data);
    };

    fetchUsers();

    },[])

    const handlepreload = async (id:number) => 
    {
    if (storedData[id]) return;

    const res = await fetch(`/api/users/${id}`);
    const data = await res.json();
    setStoredData((prev) => ({ ...prev, [id]: data }));
    console.log( data);
   };

  const selectedUser = selectedUserId ? storedData[selectedUserId] : null;

  return(
    <div>
        <h1>User List</h1>
        {
            users.map((user)=>(
                <div
                 key={user.id}
                 onMouseEnter={()=>handlepreload(user.id)}
                 onClick={() => setSelectedUserId(user.id)}
                 style={{cursor:"pointer"}}
                 >
                 {user.name.firstname}
                </div>
            ))
        }

        {selectedUser && (
        <div>
           <h2>User Details</h2>
          <p>Name: {selectedUser.name.firstname}{selectedUser.name.lastname}</p>
          <p>Email: {selectedUser.email}</p>
          <p>City: {selectedUser.address.city}</p>
          <p>Zipcode: {selectedUser.address.zipcode}</p>
        </div>
      )}

    </div>
  )
}

export default Preload;