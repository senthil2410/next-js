import { createPost,deletePost,getPosts } from "@/lib/post";

export const blog=async()=>
{
    const posts=await getPosts();

    return(
        <div>
            <form action={createPost}>
              <input name="title" placeholder="Title" required /> <br/>
              <textarea name="content" placeholder="Content" required /> <br />
              <button type="submit">Submit</button>
            </form>

            <h2>Posts</h2>

            {posts&& posts.map(post=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>

                    <form action={deletePost}>
                        <input type="hidden" name="id" value={post.id}/>
                        <button type="submit">Delete</button>
                    </form>

                </div>
            ))}
        </div>
        
    )
}

export default blog