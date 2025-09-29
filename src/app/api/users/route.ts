import { NextResponse } from 'next/server'

export const GET=async()=> 
{
 
  const users = [
    { id: 1, name: 'Senthil', email: 'senthil@gamil.com' },
    { id: 2, name: 'Kumar', email: 'kumar@gmail.com' },
    { id: 3, name: 'Thangaraj', email: 'thangraj@gmail.com' },
  
  ]

  return NextResponse.json(users)

}
