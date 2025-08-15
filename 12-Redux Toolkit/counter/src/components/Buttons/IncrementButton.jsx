import { useDispatch } from "react-redux";
import { increment } from "../../features/counter/counterSlice";

const IncrementButton = () => {
  const dispatch = useDispatch();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      onClick={() => dispatch(increment())}
    >
      Increment
    </button>
  );
};

export default IncrementButton;
