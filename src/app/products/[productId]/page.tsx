import ProductDetails from "../../../../components/ProductDetails";
import axios from "axios";
import Template from "./template";
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductPage = async ({ params }: { params: { productId: string } }) => {
  const res = await axios.get<Product>(
    `https://fakestoreapi.com/products/${params.productId}`
  );
  const product = res.data;

  return (
    <Template key={params.productId}>
      <ProductDetails product={product} />
    </Template>
  );
};

export default ProductPage;
