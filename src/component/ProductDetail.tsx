import { useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

const ProductDetail = () => {
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
  return (
    <div className="bg-white rounded-2xl w-2/3 my-0 mx-auto shadow-xl">
      <img src={data?.image} alt="" />
    </div>
  );
};

export default ProductDetail;
