import Link from "next/link";

const HomePage=()=>
{
 return(
    <div>
        <h1>Home page</h1>
        <Link href="/interceptingroutes/(login)">Login</Link>
    </div>
 )
}

export default HomePage;