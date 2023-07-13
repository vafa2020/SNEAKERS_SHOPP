import { IproductFetch } from "../services/fetchProduct";

interface dataProps {
  data: IproductFetch[] | undefined;
}

const Product: React.FC<dataProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-3 grow">
      {data?.map((product) => (
        <div
          key={product.id}
          className="flex flex-col items-center justify-center shadow-lg cursor-pointer w-full rounded-md border-2 hover:border-green-400"
        >
          <img className="h-52" src={product.image} alt={product.name} />
          <div className="flex flex-col w-full">
            <div>
              <span className="flex justify-center w-10 h-10 bg-red-500 text-white rounded-full p-2">{product.discount}%</span>
              <span className="">{product.price}</span>
            </div>
            <div className="w-full flex items-center justify-between p-5">
              <span>{product.offPrice}</span>
              <span>{product.name}</span>
            </div>
            <button className="bg-green-500 text-white py-2">AddToCart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
