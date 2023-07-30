import { useCart, useCartDispatch } from "../context/CartProvider";
import { IproductFetch } from "../services/fetchProduct";
import { commaMoney, productOfCart } from "../utils/Helper";
interface dataProps {
  data: IproductFetch[] | undefined;
}

const Product: React.FC<dataProps> = ({ data }) => {
  const disptch = useCartDispatch();
  const { cart } = useCart();

  const addProductHandler = (product: IproductFetch) => {
    disptch({ type: "AddToCart", payload: product });
  };
  return (
    <div className="grid grid-cols-3 gap-3 grow">
      {data?.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center shadow-lg cursor-pointer w-full rounded-md border-2 hover:border-green-400"
        >
          <img className="h-52" src={product.image} alt={product.name} />
          <div className="flex flex-col w-full p-5">
            <div className="flex items-center">
              <span className="flex justify-center items-center w-8 h-8 bg-red-500 text-white rounded-full p-4 mr-2">
                {product.discount}%
              </span>
              <span className="line-through decoration-red-500">
                {commaMoney(product.price)}
              </span>
            </div>
            <div className="w-full flex items-center justify-between">
              <span>{commaMoney(product.offPrice)}</span>
              <span>{product.name}</span>
            </div>
            <button
              onClick={() => addProductHandler(product)}
              className="bg-green-500 text-white py-2 mt-2 rounded-lg"
            >
              {productOfCart(product.id, cart) !== -1 ? "InCart" : "AddToCart"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
