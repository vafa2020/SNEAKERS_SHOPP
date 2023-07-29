import { Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import CartProvider from "./context/CartProvider";
import Layout from "./layout/Layout";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
