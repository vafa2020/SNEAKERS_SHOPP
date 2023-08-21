import { useState, useEffect } from "react";
import { IproductFetch } from "../services/fetchProduct";
import { http } from "../services/http";

type ICustomHook = {
  id?: number;
};
export const useFetch = ({ id }: ICustomHook) => {
  const [data, setData] = useState<IproductFetch | null>(null);

  useEffect(() => {
    const fetchDatawithId = async () => {
      const { data } = await http.get(`/product/${id}`);
      setData(data);
    };
    const fetchDatawithoutId = async () => {
      const { data } = await http.get(`/product`);
      setData(data);
    };
    if (typeof id === "number") {
      fetchDatawithId();
    } else {
      fetchDatawithoutId();
    }
  }, [id]);
  return data;
};
