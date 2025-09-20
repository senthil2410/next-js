import ProductDetails from "@/app/components/ProductDetails";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  try {
    const res = await axios.get<Product>(
      `https://fakestoreapi.com/products/${params.productId}`
    );
    const product = res.data;

    return <ProductDetails product={product} />;
  } catch (error) {
    return <h1>Product not exists</h1>;
  }
};

export default ProductPage;
