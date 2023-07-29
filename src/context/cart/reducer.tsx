import { IproductFetch } from "../../services/fetchProduct";
import { IinitialState } from "./type";

type AddToCart = { type: "AddToCart"; payload: IproductFetch };
type RemoveOfCart = { type: "RemoveOfCart"; payload: IproductFetch };
type Increment = { type: "increment"; payload: IproductFetch };
type Decrement = { type: "Decrement"; payload: IproductFetch };
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
    case "increment": {
      const updatedCart = [...state.cart];
      const findIndexItem = updatedCart.findIndex((p) => p.id === payload.id);
      const updatedItem = { ...updatedCart[findIndexItem] };
      if (updatedItem.qty !== undefined) {
        updatedItem.qty++;
      }
      updatedCart[findIndexItem] = updatedItem;
      return {
        cart: updatedCart,
        total: state.total + payload.offPrice,
      };
    }
    case "Decrement":
      const updatedCart = [...state.cart];
      const findIndexItem = updatedCart.findIndex((p) => p.id === payload.id);
      const updatedItem = { ...updatedCart[findIndexItem] };
      if (updatedItem.qty !== undefined && updatedItem.qty > 1) {
        updatedItem.qty--;
        updatedCart[findIndexItem] = updatedItem;
      } else if (updatedItem.qty === 1) {
        const filterCart = updatedCart.filter((item) => item.id !== payload.id);
        return {
          cart: filterCart,
          total: state.total - payload.offPrice,
        };
      }

      return {
        cart: updatedCart,
        total: state.total - payload.offPrice,
      };

    default:
      return state;
  }
};
