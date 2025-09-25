import { NextResponse } from 'next/server';

export const GET=async()=>
{
  try {
    const res = await fetch('https://fakestoreapi.com/users');
    if (!res.ok) 
    {
      return new Response(' not found', { status: 404 });
    }
    const data = await res.json();
    return NextResponse.json(data);
  }
  catch (err) {
    return new Response('Failed to user', { status: 500 });
  }
}