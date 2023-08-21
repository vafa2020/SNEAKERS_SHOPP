import { Route, Routes } from "react-router-dom";
import ProductList from "./component/ProductList";
import Layout from "./layout/Layout";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProviderContext from "./component/ProviderContext";
import ProductDetail from "./component/ProductDetail";

function App() {
  return (
    <ProviderContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductList />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </ProviderContext>
  );
}

export default App;
