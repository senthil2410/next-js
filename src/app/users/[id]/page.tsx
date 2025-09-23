import { getUserByID,User } from "@/services/userService";

interface Props
{
    params:{id:string}
}

const userDetailPage=async({ params }: Props)=>
{
     const userId = Number(params.id);

    if (isNaN(userId)) {
    return <p>Invalid User ID</p>;
     }

    let user: User | null = null;
    
     try{
        
        user=await getUserByID(userId);
     }
     catch
     {
        return <p>User Not Found</p>
     }

     return(
        <div>
           <h1>User</h1>
             <p>{user?.id}</p>
             <p>{user?.username}</p>
              <p>{user?.name.firstname}</p>
             <p>{user?.email}</p>
             <p>{user?.address.city}</p>
        </div>
     )
}

export default userDetailPage;