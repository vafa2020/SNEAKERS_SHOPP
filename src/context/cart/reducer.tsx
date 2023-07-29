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
      const cloneState = [...state.cart];
      const findIndexItem = cloneState.findIndex((p) => p.id === payload.id);
      const product = { ...cloneState[findIndexItem] };
      if (findIndexItem > 0 && product.qty !== undefined) {
        product.qty++;
        cloneState[findIndexItem] = product;
        return {
          cart: cloneState,
          total: state.total + payload.offPrice,
        };
      }

      const updateArray = cloneState.push({ ...payload, qty: 1 });
      return {
        cart: [...state.cart, updateArray],
        total: payload.offPrice,
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
