import React from "react";
import AuthProvider from "../context/auth/AuthProvider";
import CartProvider from "../context/cart/CartProvider";
interface IProvider {
  children: React.ReactNode;
}
const ProviderContext: React.FC<IProvider> = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>{children}</CartProvider>
    </AuthProvider>
  );
};

export default ProviderContext;
