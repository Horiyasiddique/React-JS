import { useSelector } from "react-redux";

const Display = () => {
  const counterValue = useSelector((state) => state.counter.value);
  return (
    <div className="text-2xl font-bold text-center mb-4 p-4 bg-gray-100 rounded-lg">
      Counter Value: {counterValue}
    </div>
  );
};

export default Display;
