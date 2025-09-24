import 'server-only'

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const fetchPost=async()=>
{ 
    
const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
    headers:{
        authorization:process.env.API_KEY??''
    }
});
return res.json();
}

