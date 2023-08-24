import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";
import { commaMoney } from "../utils/Helper";
import { useCartDispatch } from "../context/cart/CartProvider";
import { IproductFetch } from "../services/fetchProduct";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

const ProductDetail = () => {
  const dispatch = useCartDispatch();
  let { id } = useParams();
  const ID: number = id !== undefined ? Number(id) : 1;
  const data = useFetch({ id: ID });
  if (data === null) {
    return (
      <div className="bg-white rounded-2xl w-2/3 my-0 mx-auto shadow-xl">
        <p>data is loading ...</p>
      </div>
    );
  }
  const addProduct = (product: IproductFetch) => {
    dispatch({ type: "AddToCart", payload: product });
  };

  return (
    <div className="h-screen p-10 ">
      <div className="flex items-center justify-between bg-white rounded-2xl w-2/3 h-80 my-0 mx-auto shadow-2xl">
        <div className="flex items-center justify-center w-2/5">
          <img className="h-40" src={data?.image} alt={data.name} />
        </div>
        <div className="flex flex-col justify-between w-2/5 h-full p-3">
          <div className="flex items-center">
            <span className="font-bold text-red-400">نام کالا:</span>
            <h2 className="font-bold text-xl text-gray-400">
              &nbsp;{data.name}
            </h2>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-red-400">نام برند:</span>
            <h3 className="font-bold text-xl text-gray-400">
              &nbsp;{data.brand}
            </h3>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-red-400">رنگ ها:</span>
            {data.color.map((color, index) => (
              <span
                key={index}
                style={{ backgroundColor: `${color}` }}
                className={`flex items-center justify-center rounded-full w-5 h-5 mt-0 mx-1`}
              ></span>
            ))}
          </div>
          <div className="flex items-center">
            <span className="font-bold text-red-400">سایزها: &nbsp;</span>
            {data.size.map((size, index) => (
              <span
                key={index}
                className="flex items-center justify-center rounded-lg w-6 h-6 bg-gray-400 text-white mt-0 mx-1"
              >
                {size}
              </span>
            ))}
          </div>
          <div className="flex items-start">
            <span className="font-bold text-red-400">توضیحات: &nbsp;</span>
            <ul
              style={{ listStyleType: " disclosure-closed" }}
              className="flex flex-col mr-5"
            >
              {data.description.map((des, index) => (
                <li key={index} className="text-gray-400 font-bold">
                  {des.support}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center">
            <span className="font-bold text-red-400"> قیمت:</span>
            <h3 className="font-bold text-xl text-gray-400">
              &nbsp;{commaMoney(data.offPrice)}
            </h3>
          </div>
        </div>
        <div className="flex flex-1">
          <button
            className="flex items-center bg-green-400 p-3 rounded-md text-white"
            onClick={() => addProduct(data)}
          >
            <span className="ml-2 font-bold">addToCart</span>
            <BiArrowFromRight size="25"/> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
