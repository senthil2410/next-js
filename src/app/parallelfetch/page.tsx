
const userApi=async()=>
{
    const res=await fetch('https://fakestoreapi.com/users',{
        cache:'no-store'
    })
    return res.json();
}

const productApi=async()=>
{
    const res=await fetch('https://fakestoreapi.com/products',
        {
          cache:'no-store'
        })
        return res.json();
}

const ParallelRoutes=async()=>
{
    const [users,products]=await Promise.all([userApi(),productApi()]);
    return(
        <>
        <h1 style={{textAlign:"center"}}><strong>Users</strong></h1>
        <div>
            {users.map((user:any)=>(
                <li key={user.id}>{user.username}</li>
            ))}
        </div>
        <h1 style={{textAlign:"center"}}><strong>Product</strong></h1>
        <div>
            {products.map((product:any)=>(
                <li key={product.id}>{product.title}</li>
            ))}
        </div>
         </>
    )

}

export default ParallelRoutes;

