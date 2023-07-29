import { log } from "console";
import { IproductFetch } from "../../services/fetchProduct";
import { IinitialState } from "./type";

type AddToCart = { type: "AddToCart"; payload: IproductFetch };
type RemoveOfCart = { type: "RemoveOfCart"; payload: number };
type Increment = { type: "increment"; payload: number };
type Decrement = { type: "Decrement"; payload: number };
export type cartActions = AddToCart | RemoveOfCart | Increment | Decrement;

export const initialState: IinitialState = {
  cart: [],
  total: 0,
};

export const cartReducer = (state: IinitialState, action: cartActions) => {
  const { payload, type } = action;

  switch (type) {
    case "AddToCart": {
      const updatedCart = [...state.cart];
      const findIndexItem = updatedCart.findIndex((p) => p.id === payload.id);
      const updatedItem = { ...updatedCart[findIndexItem] };
      console.log(updatedItem.qty);

      if (findIndexItem >= 0 && updatedItem.qty !== undefined) {
        updatedItem.qty++;
        updatedCart[findIndexItem] = updatedItem;
      } else {
        updatedCart.push({ ...payload, qty: 1 });
      }

      return {
        cart: updatedCart,
        total: state.total + payload.offPrice,
      };
    }
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
