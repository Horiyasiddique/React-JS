import { useDispatch } from "react-redux";
import { decrement } from "../../features/counter/counterSlice";

const DecrementButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => dispatch(decrement())}
    >
      Decrement
    </button>
  );
};

export default DecrementButton;
