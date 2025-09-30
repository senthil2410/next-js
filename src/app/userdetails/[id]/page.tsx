import UserForm from "@/components/UserForm";
const getUser=async (id: string)=>
{
  const res = await fetch(`http://localhost:3000/api/userdetails/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }

  return res.json();
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  return <UserForm user={user} id={params.id} />;
}
