import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://api.quotable.io/random");
      const result = await response.json();
      setQuote(result.content);
      setAuthor(result.author);
      setError(false);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center justify-center p-6 transition-colors duration-300">
      <div className="max-w-2xl w-full bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-400">
          Quote Generator
        </h1>

        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-400 mb-4">Failed to fetch quote</p>
            <button
              onClick={fetchQuote}
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition-colors"
            >
              Retry
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <blockquote className="text-xl italic text-gray-300">
              "{quote}"
            </blockquote>
            <p className="text-right text-gray-400">— {author}</p>
            <div className="flex justify-center pt-4">
              <button
                onClick={fetchQuote}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95"
              >
                Get New Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
