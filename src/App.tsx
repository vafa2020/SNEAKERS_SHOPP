import ProductList from "./component/ProductList";
import CartProvider from "./context/CartProvider";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <CartProvider>
        <ProductList />
      </CartProvider>
    </Layout>
  );
}

export default App;
