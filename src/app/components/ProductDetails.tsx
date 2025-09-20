interface Product
{
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductDetails=({ product }: { product: Product })=>
{

    return(
        <div>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} width={300}/>
            <p><strong>Category:</strong>{product.category}</p>
            <p><strong>Price:</strong>{product.price}</p>
            <p>{product.description}</p>           
        </div>
    )

}

export default ProductDetails;