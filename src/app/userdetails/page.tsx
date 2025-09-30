'use client';

import useSWR from "swr"
import Link from 'next/link';

const fetcher = (url: string)=>
(
    fetch(url)
     .then(res=>res.json())
)

const UserList=()=>
{
      const { data, error, isLoading } = useSWR('/api/userdetails', fetcher);

      if(isLoading)
      {
       <p>Loading Users</p>
      }

      if(error)
      {
        throw new Error(`There is an error ${error}`)
      }

return(
    <div>
        <h1>User-List</h1>

        <ul>
          {data&&data.map((user:any)=>
            (
                <li key={user._id}>
                    <Link href={`/userdetails/${user._id}`}>{user.name}</Link>
                </li>
            )
          )}
        </ul>

    </div>
)
}

export default UserList;

