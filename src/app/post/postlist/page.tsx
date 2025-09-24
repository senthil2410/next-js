import { fetchPost, Post } from "@/services/searchService";

interface PostListTypes {
  searchParams: { search?: string };
}

const PostList = async ({ searchParams }: PostListTypes) => {
  const posts: Post[] = await fetchPost();

  const search = searchParams.search|| "";

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.length > 3 ? search : "")
  );

  return (
     <div>
      <table  cellSpacing="20">
        <thead>
          <tr> 
            <th><strong>PostId</strong></th>
            <th><strong>UserId</strong></th>
            <th><strong>title</strong></th>
            <th><strong>Body</strong></th>
          </tr>
        </thead>
        <tbody>
          
            {filteredPosts.map((post)=>(
              <tr key={post.id}>
               <td>{post.id}</td>
               <td >{post.userId}</td>
               <td>{post.title}</td>
               <td>{post.body}</td>
              </tr>
            ))}
         
        </tbody>
      </table>
    </div>

  );
};

export default PostList;
