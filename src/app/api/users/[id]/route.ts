import { NextResponse } from 'next/server';

export const GET=async(_request: Request,{ params }: { params: { id: string } })=> 
{
  try {
    const res = await fetch(`https://fakestoreapi.com/users/${params.id}`);

    if (!res.ok) {
      return new Response(' not found', { status: 404 });
    }

    const data = await res.json();

    return NextResponse.json(data);
  } 
  catch (error) 
  {
    return new Response('Failed to load user', { status: 500 });
  }
}