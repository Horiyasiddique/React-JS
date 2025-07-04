
function Output({ count }) {
  return (
    <div className="flex justify-center">
      <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-1 rounded-full">
        <div className="bg-gray-800 px-8 py-4 rounded-full">
          <p className="text-2xl font-mono">
            <span className="text-gray-300">Count: </span>
            <span className={`font-bold ${
              count === 0 ? 'text-gray-500' : 
              count < 10 ? 'text-teal-400' :
              count < 20 ? 'text-pink-400' : 
              'text-orange-400'
            }`}>
              {count}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Output;