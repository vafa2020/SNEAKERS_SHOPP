import { useCart } from "../context/CartProvider";
import { BiPlus, BiMinus } from "react-icons/bi";

const Cart = () => {
  const { cart, total } = useCart();

  return (
    <div className="flex items-start">
      <div className="flex-grow">
        <h1>سبد خرید</h1>
        <div>
          <table className="w-full text-center">
            <thead>
              <tr>
                <th scope="col">کالا</th>
                <th scope="col">نام کالا</th>
                <th scope="col">برند کالا</th>
                <th scope="col">رنگ کالا</th>
                <th scope="col">تعداد کالا</th>
                <th scope="col">قیمت کالا</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
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
                      <button className="w-8 h-8 rounded-sm bg-green-500 text-white" >
                        <BiPlus/>
                      </button>
                      <span>{item.qty}</span>
                      <button className="w-8 h-8 rounded-sm bg-red-500 text-white">
                        <BiMinus />
                      </button>
                    </div>
                  </td>
                  <td>
                    <span>{item.offPrice}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-1/3 bg-red-600">
        <h1>مروری بر خرید</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Cart;
