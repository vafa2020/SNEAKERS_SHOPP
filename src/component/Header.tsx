import { BiLogIn, BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartProvider";
const Header: React.FC = () => {
  const { cart } = useCart();
  return (
    <header className="flex flex-col bg-white h-32 shadow-md shadow-gray-200	sticky top-0 px-5">
      <div className="flex items-center justify-between py-5 border-b">
        <div className="flex items-center">
          <div className="flex items-center ml-5">
            <span className="text-green-300">SNEAKERS</span>
            <span className="text-red-400">SHOPP</span>
          </div>
          <input
            className="w-80 rounded-md p-2 outline-none border-2 focus:border-green-400"
            type="text"
            placeholder="جستجو"
            dir="rtl"
          />
        </div>
        <div className="flex items-center">
          <Link to="signup">
            <button className="flex items-center border p-1 rounded-sm">
              <span>ورود/ثبت نام</span>
              <span>
                <BiLogIn fontSize={30} />
              </span>
            </button>
          </Link>
          <Link to={"/cart"}>
            <button className="mr-5 border p-1 rounded-sm relative">
              <span className="absolute w-6 h-6 rounded-full bg-red-500 text-white -right-4 -top-4">
                {cart.length}
              </span>
              <BiCart fontSize={30} />
            </button>
          </Link>
        </div>
      </div>
      <nav className="">
        <ul className="flex items-center my-3">
          <li className="pl-5 hover:text-green-400">
            <Link to="/">صفحه نخست</Link>
          </li>
          <li className="pl-5 hover:text-green-400">
            <Link to="/contact-us">تماس باما</Link>
          </li>
          <li className="hover:text-green-400">
            <Link to="/about-us">درباره ما</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
