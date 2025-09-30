import { Product } from "@/app/parallel/@products/[id]/page";
import { notFound } from "next/navigation";

interface Props 
{
  params: { category?: string };
}

const ProductsPage=async({params}:Props)=>
{
    const { category } = params;

     let url = "https://fakestoreapi.com/products";

      if (category) {
      url = `https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`;
     }

     const res = await fetch(url, { cache: "no-store" });

      if(!res.ok)
      {
        if(res.status===404)
        {
            return notFound();
        }
        throw new Error("FAILED TO fETCH THE PRODUCTS");
      }

      const products:Product[]=await res.json();

      if(products.length===0)
      {
        <h1>No products </h1>
      }

      return(
        <>
        <h1>Products</h1>
        <ul>
            {products.map((product)=>
            (
                <div key={product.id}>
                    <img src={product.image} alt={product.title} height={200} width={200} />

                    <h2>{product.title}</h2>

                    <h3><strong>{product.price}</strong></h3>
                    <h3>{product.category}</h3>
                </div>
            ))}
        </ul>
        </>
      )
}

export default ProductsPage;