import React from "react";
import AuthProvider from "../context/auth/AuthProvider";
import CartProvider from "../context/cart/CartProvider";
import ProductProvider from "../context/product/ProductProvider";
import ProductHelpProvider from "../context/product/ProductHelpProvider";
interface IProvider {
  children: React.ReactNode;
}
const ProviderContext: React.FC<IProvider> = ({ children }) => {
  return (
    <ProductProvider>
      <ProductHelpProvider>
        <AuthProvider>
          <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </ProductHelpProvider>
    </ProductProvider>
  );
};

export default ProviderContext;
