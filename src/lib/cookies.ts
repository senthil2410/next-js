"use server"
import { cookies} from 'next/headers'

export const setCookie=async(name: string)=>
{
  const cookieStore = await cookies()
  cookieStore.set('name', name)
}

export const getCookie=async()=>
{
  const cookieStore = await cookies()
  return cookieStore.get('name')?.value || null
}


export const deleteCookie=async()=>
 {
  const cookieStore = await cookies()
  cookieStore.delete('name')
}

