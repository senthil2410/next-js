import DeleteProductButton from "@/components/DeleteProductButton";
import { handleAllProduct } from "@/controller/product.Controller";
import { IProduct } from "@/lib/models/Products";
import { getAllProducts } from "@/services/product.Service";
import Link from "next/link";

const ProductPage = async () => {
  let products: IProduct[] | undefined;

  try {
    products = await getAllProducts();
  } catch (error) {
    <h1>Failed to laod Product</h1>;
  }
  return (
    <>
      {products?.length === 0 && <h1>No Product Found</h1>}

      {products?.map((product, index) => (
        <li key={index}>
          <Link href={`product/${product._id.toString()}`}>{product.name}</Link>
          <div>{product.name}</div>
          <div> Price:{product.price}</div>
          <div>category:{product.category}</div>
          <div>Stock : {product.stock}</div>
          <DeleteProductButton productId={product._id.toString()} />
        </li>
        
      ))}
    </>
  );
};

export default ProductPage;
