import { http } from "./http";

export interface IproductFetch {
  id: number;
  name: string;
  brand: string;
  size: number[];
  color: string[];
  description: [{ support: string }, { support: string }, { support: string }];
  price: number;
  offPrice: number;
  discount: number;
  image: string;
  qty?: number;
}

export const fetchProduct = async (): Promise<IproductFetch[] | undefined> => {
  try {
    const data = await http.get("/product");
    if (data.status === 200) {
      return data.data;
    }
  } catch (error) {
    console.log(error);
  }
};
