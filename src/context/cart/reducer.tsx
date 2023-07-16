import { IproductFetch } from "../../services/fetchProduct";
import { IinitialState } from "./type";

type AddToCart = { type: "AddToCart"; payload: IproductFetch };
type RemoveOfCart = { type: "RemoveOfCart"; payload: number };
type Increment = { type: "increment"; payload: number };
type Decrement = { type: "Decrement"; payload: number };
export type cartActions = AddToCart | RemoveOfCart | Increment | Decrement;

export const initialState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state: IinitialState, action: cartActions) => {
  const { payload, type } = action;
  console.log(payload, type);

  switch (type) {
    case "AddToCart":
      return state;
    case "RemoveOfCart":
      return state;
    case "increment":
      return state;
    case "Decrement":
      return state;

    default:
      return state;
  }
};
