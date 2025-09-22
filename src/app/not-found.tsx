import Link from 'next/link'
 
const  NotFound=()=> {
  return (
    <div>
      <h2>Page Not Found</h2>
      <Link href="/"> Back to Home</Link>
    </div>
  )
}

export default NotFound;