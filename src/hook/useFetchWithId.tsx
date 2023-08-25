import { useState, useEffect } from "react";
import { IproductFetch } from "../services/fetchProduct";
import { http } from "../services/http";

type ICustomHook = {
  id: number;
};
export const useFetchWithId = ({ id }: ICustomHook) => {
  const [data, setData] = useState<IproductFetch>();

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await http.get(`/product/${id}`);
      setData(data);
    };

    fetchData();
  }, [id]);
  return data;
};
