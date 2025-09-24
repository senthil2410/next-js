import SearchPost from "./searchpost/page";
import PostList from "./postlist/page";

interface PageProps
{
    searchParams:{search ?:string};
}

const PostPage=({searchParams}:PageProps)=>
{
    return(
    <>
        <SearchPost/>
        <PostList searchParams={searchParams}/>
    </>
    )

}

export default PostPage;