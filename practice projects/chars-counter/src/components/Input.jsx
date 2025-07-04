
function Input({ value, inputRef, setValue }) {
  return (
    <input
      type="text"
      value={value}
      ref={inputRef}
      onChange={(e) => setValue(e.target.value)}
      className="w-full p-4 text-xl bg-gray-700 border-2 border-gray-600 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400 transition-all duration-300"
      placeholder="Type something..."
    />
  );
}

export default Input;