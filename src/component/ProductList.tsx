import Product from "./Product";
import Filter from "./Filter";
import { useProduct } from "../context/product/ProductProvider";

const ProductList: React.FC = () => {
  const products = useProduct();
  return (
    <div className="flex items-start w-full p-10">
      <Product data={products} />
      <Filter />
    </div>
  );
};

export default ProductList;
