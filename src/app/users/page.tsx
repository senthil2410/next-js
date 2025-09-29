export const revalidate = 10;

interface User  {
  id: number
  name: string
  email: string
}

const getUsers= async (): Promise<User[]> =>
{
  const res = await fetch('http://localhost:3000/api/users', {
    next: { revalidate: 10 },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch users Details ')
  }

  const data: User[] = await res.json()
  return data

}

const UserPage=async()=>
{
    const users=getUsers();
  return(
    <div>
        <h1>Users</h1>
        <ul>
            {(await users).map(user=>(
                <li key={user.id}>
                    <div>Name:{user.name}</div>
                    <div>Email:{user.email}</div>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default UserPage;