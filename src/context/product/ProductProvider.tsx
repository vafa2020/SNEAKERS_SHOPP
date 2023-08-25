import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { IproductFetch } from "../../services/fetchProduct";
import { useFetch } from "../../hook/useFetch";

type ProductProviderProps = {
  children: React.ReactNode;
};

const productContext = createContext<IproductFetch[] | []>([]);
const productDispatchContext = createContext<
  Dispatch<SetStateAction<IproductFetch[]>>
>(() => []);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<IproductFetch[] | []>([]);
  const data = useFetch();

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <productContext.Provider value={products}>
      <productDispatchContext.Provider value={setProducts}>
        {children}
      </productDispatchContext.Provider>
    </productContext.Provider>
  );
};

export default ProductProvider;

export const useProduct = () => {
  const products = useContext(productContext);
  if (products === null) {
    throw new Error("useProduct must be used within a productProvider");
  }
  return products;
};
export const useProductDispatch = () => {
  const setProducts = useContext(productDispatchContext);
  if (setProducts === null) {
    throw new Error("useProductDispatch must be used within a productProvider");
  }
  return setProducts;
};
