import { useCart, useCartDispatch } from "../context/CartProvider";
import { BiPlus, BiMinus, BiTrash } from "react-icons/bi";
import { commaMoney } from "../utils/Helper";
import { IproductFetch } from "../services/fetchProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useCartDispatch();
  const { cart, total } = useCart();
  const calc = () => {
    let result: number;

    result = cart.reduce((acc: number, curr: IproductFetch): number => {
      if (curr.qty !== undefined) {
        acc = acc + curr.price * curr.qty;
      }
      return acc;
    }, 0);
    return result;
  };
  if (cart.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-red-500">سبد خرید شما خالی است</p>
        <Link
          to="/"
          className="animate-pulse text-green-500 mt-10 font-bold text-2xl"
        >
          رفتن به فروشگاه
        </Link>
      </div>
    );
  }
  const incrementProduct = (product: IproductFetch) => {
    dispatch({ type: "increment", payload: product });
  };
  const decrementProduct = (product: IproductFetch) => {
    dispatch({ type: "Decrement", payload: product });
  };
  return (
    <div className="flex items-start">
      <div className="flex-grow">
        <h1 className="font-bold ">سبد خرید</h1>
        <div>
          <table className="w-full text-center mt-5">
            <thead>
              <tr>
                <th scope="col">شماره</th>
                <th scope="col">کالا</th>
                <th scope="col">نام کالا</th>
                <th scope="col">برند کالا</th>
                <th scope="col">رنگ کالا</th>
                <th scope="col">تعداد کالا</th>
                <th scope="col">قیمت کالا</th>
              </tr>
            </thead>
            <tbody className="overflow-y-auto">
              {cart.map((item, index) => (
                <tr key={item.id}>
                  <td align="center">
                    <span>{index + 1}</span>
                  </td>
                  <td align="center">
                    <img className="h-20" src={item.image} alt={item.name} />
                  </td>
                  <td>
                    <span>{item.name}</span>
                  </td>
                  <td>
                    <span>{item.brand}</span>
                  </td>
                  <td>
                    <span>{item.color}</span>
                  </td>
                  <td>
                    <div>
                      <button
                        onClick={() => incrementProduct(item)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-green-500 text-white"
                      >
                        <BiPlus />
                      </button>
                      <span className="inline-block w-10">{item.qty}</span>
                      <button
                        onClick={() => decrementProduct(item)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-sm bg-red-500 text-white"
                      >
                        {item.qty === 1 ? <BiTrash /> : <BiMinus />}
                      </button>
                    </div>
                  </td>
                  <td>
                    <span>{commaMoney(item.offPrice)}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-1/4 border-2 rounded-lg p-2">
        <h1 className="text-center font-bold">جزئیات خرید</h1>
        <div className="flex flex-col items-start mt-5">
          <div className="flex items-center justify-between w-full mt-5">
            <p>قیمت اصلی کالا</p>
            <p>{commaMoney(calc())}</p>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <p>مبلغ تخفیف</p>
            <p>{commaMoney(calc() - total)}</p>
          </div>
          <div className="flex items-center justify-between w-full border-t-2 mt-6">
            <p>قیمت کالا با تخفیف</p>
            <p>{commaMoney(total)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
