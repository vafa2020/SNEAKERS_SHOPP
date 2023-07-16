import React, {
  createContext,
  useReducer,
  Reducer,
  Dispatch,
  useContext,
} from "react";
import { cartActions, cartReducer, initialState } from "./cart/reducer";
import { IinitialState } from "./cart/type";

type CartProviderProps = {
  children: React.ReactNode;
};

const cartContext = createContext<IinitialState | null>(null);
const cartContextDispatch = createContext<Dispatch<cartActions> | null>(null);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
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

// interface useCartProps {
//   cart: () => IinitialState;
// }
export const useCart: React.FC<()=>IinitialState> = () => {
  const cart = useContext(cartContext);
  if (cart === null) {
    throw new Error("useCart must be used within a cartProvider");
  }
  return cart;
};
