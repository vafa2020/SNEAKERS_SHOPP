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
