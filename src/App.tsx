import { Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import CartProvider from "./context/CartProvider";
import Layout from "./layout/Layout";
import Cart from "./pages/Cart";

function App() {
  return (
    <Layout>
      <CartProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </Layout>
  );
}

export default App;
