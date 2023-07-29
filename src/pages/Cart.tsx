import { useCart } from "../context/CartProvider";

const Cart = () => {
  const { cart, total } = useCart();
  console.log(cart);

  return (
    <div className="flex items-start">
      <div className="flex-grow bg-blue-800">
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
                      <button>+</button>
                      <span>{item.qty}</span>
                      <button> -</button>
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
