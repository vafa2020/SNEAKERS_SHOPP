import { useState, useEffect } from "react";
import { IproductFetch } from "../services/fetchProduct";
import { http } from "../services/http";

export const useFetch = () => {
  const [data, setData] = useState<IproductFetch[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await http.get(`/product`);
      setData(data);
    };

    fetchData();
  }, []);
  return data;
};
