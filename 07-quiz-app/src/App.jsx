import { useState, useEffect, useRef, useCallback } from "react";

const QuizApp = () => {
  // Quiz questions (hardcoded)
  const quizQuestions = [
    {
      question: "What is React?",
      options: ["A framework", "A library", "A programming language"],
      correctAnswer: "A library",
    },
    {
      question: "Which hook is used for side effects?",
      options: ["useState", "useEffect", "useCallback"],
      correctAnswer: "useEffect",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JavaScript Style eXchange",
      ],
      correctAnswer: "JavaScript XML",
    },
  ];

  // State management
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10); // Timer per question
  const [liflineUsed, setLifelineUsed] = useState(false);
  const [filteredOptions, setFilteredOptions] = useState(null);
  const timerRef = useRef(null);

  // Handle answer selection
  const handleAnswer = useCallback(
    (selectedAnswer) => {
      const isCorrect =
        selectedAnswer === quizQuestions[currentQuestion].correctAnswer;
      if (isCorrect) setScore(score + 1);
      setSelectedOption(selectedAnswer);

      // Move to next question after 1s delay (for feedback)
      setTimeout(() => {
        if (currentQuestion < quizQuestions.length - 1) {
          setCurrentQuestion(currentQuestion + 1);
          setSelectedOption(null);
          setTimeLeft(10); // Reset timer
        } else {
          setShowScore(true);
        }
      }, 1000);
    },
    [currentQuestion, score]
  );

  // Lifeline logic 
  const lifeline = () => {

  }

  // Timer logic
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleAnswer(null); // Auto-skip if time runs out
    }
  }, [timeLeft, handleAnswer]);

  // Reset quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedOption(null);
    setTimeLeft(10);
  };

  return (
    <div className="min-h-screen bg-[#101828] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#101828] rounded-xl shadow-lg p-6 border border-gray-700">
        {showScore ? (
          // Results Screen
          <div className="text-center">
            <h2 className="text-2xl font-bold text-emerald-400 mb-4">
              Your Score: {score}/{quizQuestions.length}
            </h2>
            <button
              onClick={resetQuiz}
              className="mt-4 bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          // Quiz Screen
          <>
            <div className="flex justify-between items-center mb-6 ">
              <span className="text-gray-300">
                Question {currentQuestion + 1}/{quizQuestions.length}
              </span>
              <span className="bg-gray-700 text-emerald-400 px-3 py-1 rounded-full text-sm">
                {timeLeft}s
              </span>
            </div>

            <h3 className="text-xl text-white font-medium mb-6">
              {quizQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-3">
              {quizQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedOption === option
                      ? option === quizQuestions[currentQuestion].correctAnswer
                        ? "bg-green-600 text-white" // Correct answer
                        : "bg-red-600 text-white" // Wrong answer
                      : selectedOption !== null &&
                        option === quizQuestions[currentQuestion].correctAnswer
                      ? "bg-green-600 text-white" // Show correct answer after selection
                      : "bg-gray-700 hover:bg-gray-600 text-gray-200" // Default
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizApp;
