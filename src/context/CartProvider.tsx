import React, { createContext, useReducer, Reducer ,Dispatch} from "react";
import { cartActions, cartReducer } from "./cart/reducer";
import { IinitialState } from "./cart/type";

type propsLayout = {
  children: React.ReactNode;
};
const initialState = {
  cart: [],
  total: 0,
};
const cartContext = createContext<IinitialState | null>(null);
const cartContextDispatch = createContext<cartActions  | null>(null);



const CartProvider: React.FC<propsLayout> = ({ children }) => {
  const [cart, dispatch] = useReducer<Reducer<IinitialState, cartActions>>(
    cartReducer,
    initialState
  );
  return (
    <cartContext.Provider value={cart}>
      <cartContextDispatch.Provider value={dispatch}>
        {children}
      </cartContextDispatch.Provider>
    </cartContext.Provider>
  );
};

export default CartProvider;
