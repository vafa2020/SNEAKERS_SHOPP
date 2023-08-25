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

const helpProductContext = createContext<IproductFetch[] | []>([]);
const helpProductDispatchContext = createContext<
  Dispatch<SetStateAction<IproductFetch[]>>
>(() => []);

const ProductHelpProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [helpProducts, setHelpProducts] = useState<IproductFetch[] | []>([]);
  const data = useFetch();

  useEffect(() => {
    setHelpProducts(data);
  }, [data]);

  return (
    <helpProductContext.Provider value={helpProducts}>
      <helpProductDispatchContext.Provider value={setHelpProducts}>
        {children}
      </helpProductDispatchContext.Provider>
    </helpProductContext.Provider>
  );
};

export default ProductHelpProvider;

export const useHelpProduct = () => {
  const helpProducts = useContext(helpProductContext);
  if (helpProducts === null) {
    throw new Error("useHelpProduct must be used within a productProvider");
  }
  return helpProducts;
};
export const useHelpProductDispatch = () => {
  const setHelpProducts = useContext(helpProductDispatchContext);
  if (setHelpProducts === null) {
    throw new Error(
      "useHelpProductDispatch must be used within a productProvider"
    );
  }
  return setHelpProducts;
};
