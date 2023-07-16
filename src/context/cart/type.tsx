import { IproductFetch } from "../../services/fetchProduct";


export interface IinitialState {
  cart: IproductFetch[];
  total: number;
}
// export type cartDispatchType = {
//   addToCart: (value: IproductFetch) => void;
//   Remove: (id: number) => void;
//   Increment: (id: number) => void;
//   Decrement: (id: number) => void;
// };


