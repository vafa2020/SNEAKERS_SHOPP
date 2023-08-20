import React, {
  createContext,
  useReducer,
  Reducer,
  Dispatch,
  useContext,
} from "react";
import { cartActions, cartReducer, initialState } from "./reducer";
import { IinitialState } from "./type";

type CartProviderProps = {
  children: React.ReactNode;
};

const cartContext = createContext<IinitialState | null>(null);
const cartDispatchContext = createContext<Dispatch<cartActions> | null>(null);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, dispatch] = useReducer<Reducer<IinitialState, cartActions>>(
    cartReducer,
    initialState
  );
  return (
    <cartContext.Provider value={cart}>
      <cartDispatchContext.Provider value={dispatch}>
        {children}
      </cartDispatchContext.Provider>
    </cartContext.Provider>
  );
};

export default CartProvider;

// interface useCartProps {
//   cart: () => IinitialState;
// }
export const useCart = (): IinitialState => {
  const cart = useContext(cartContext);
  if (cart === null) {
    throw new Error("useCart must be used within a cartProvider");
  }
  return cart;
};
export const useCartDispatch = (): Dispatch<cartActions> => {
  const dispatch = useContext(cartDispatchContext);
  if (dispatch === null) {
    throw new Error("useCartDispatch must be used within a cartProvider");
  }
  return dispatch;
};
