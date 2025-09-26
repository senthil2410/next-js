'use server'

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

let posts:{id:number;title:string;content:string}[]=[];

let nextId=1

export const createPost=async(formData:FormData)=>
{
   const title=formData.get('title') as string;
   const content = formData.get('content') as string;

   if (!title || !content) 
  {
    throw new Error('Invalid Inputs')
  }

   posts.push({ id: nextId++, title, content })

     redirect('/blog') 

}

export  const  deletePost=async(formData:FormData)=>
{
    const id = parseInt(formData.get('id') as string);

    if(!id)
    {
        throw new Error("Invalid Inputs");
    }
    posts = posts.filter(post => post.id !== id)
    
    revalidatePath('/blog')
}

export const updatePost=async(formData:FormData)=>
{
    const id = parseInt(formData.get('id') as string)
    const title = formData.get('title') as string
    const content = formData.get('content') as string

     if (!id || !title || !content)
     {
        throw new Error('Invalid fields')
     }
    posts = posts.map(post =>
    post.id === id ? { ...post,  content } : post
  )

    revalidatePath('/blog');
}

export const getPosts=async()=> {
  return posts
}