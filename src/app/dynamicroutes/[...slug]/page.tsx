interface Props
{
 params:
 {
    slug?:string[]
 }
}

const DynamicRoutes=({params}:Props)=>
{
    const slug=params.slug??[];

    const path=slug.join('/').toLowerCase();

    return(
    <div>
       {slug.length === 0 ? (
        <p>Welcome to the home page.</p>
      ) :(
        <div>
           {path==='courses'&&(
            <p>In the course topic in the home page </p>
           )}
           {path==='tutorials'&&(
            <p>In the tutorial topic inside the  home page</p>
           )}
           {path==='Explore'&&(
            <p>In the explore topic inside the home page</p>
           )}
           {
            !['courses','tutorials','Explore'].includes(path) &&(
                <p>The {path} topic is not in the home page</p>
            )
           }
         
        </div>
      )}
      </div>
    )
        
}

export default DynamicRoutes;