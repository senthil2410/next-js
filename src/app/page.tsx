import axios from "axios";
import Link from "next/link";

interface Product{
  id:number,
  title:string
}

const Home=async()=>
{
  try {
    const res=await axios.get<Product[]>("https://fakestoreapi.com/products");
     const products = res.data;
      return(
    <div>
      <h1>Home page</h1>
      <ul>
         {products.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
      </ul>
    </div>
  )
  } 
  catch (error) {
    <h1>Error while fetching  product data</h1>
  }

}

export default Home;