import AddToCardButton from "@/components/AddtoCard";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const param = await params;

  const res = await fetch(`http://localhost:3000/api/products/${param.id}`,{cache:"no-cache"});

  if (!res.ok) {
    throw new Error("Product not found");
  }
  const product: Product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width={300} />
      <p>{product.description}</p>
      <p>
        <strong>Price:{product.price}</strong>
      </p>
      <p>{product.category}</p>
      <AddToCardButton
        params={{
          id: product.id.toString(),
          title: product.title,
        }}
      />
    </div>
  );
};

export default ProductDetails;
