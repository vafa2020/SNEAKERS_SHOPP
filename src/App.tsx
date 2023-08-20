import { Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import CartProvider from "./context/cart/CartProvider";
import Layout from "./layout/Layout";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AuthProvider from "./context/auth/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
