import { useEffect, useState } from "react";
import { fetchProduct, IproductFetch } from "../services/fetchProduct";
import Product from "./Product";
import Filter from "./Filter";

const ProductList: React.FC = () => {
  const [dataFetch, setDataFetch] = useState<IproductFetch[] | undefined>();
  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProduct();
      setDataFetch(data);
    };
    getProduct();
  }, []);
  return (
    <div className="flex items-start w-full">
      <Product data={dataFetch} />
      <Filter />
    </div>
  );
};

export default ProductList;
