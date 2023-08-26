import Product from "./Product";
import Filter from "./Filter";
import { useProduct } from "../context/product/ProductProvider";

const ProductList: React.FC = () => {
  const products = useProduct();
  return (
    <div className="flex items-start w-full p-10">
      <Filter />
      <Product data={products} />
    </div>
  );
};

export default ProductList;
