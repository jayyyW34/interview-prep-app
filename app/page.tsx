'use client';

import { useState } from 'react';

const questions = [
  {
    id: 1,
    question: "What is the difference between REST and GraphQL?",
    answer: "REST is a resource-based architectural style with multiple endpoints, whereas GraphQL is a query language for APIs where 
clients request exactly the data they need in a single endpoint.",
    category: "System Design"
  },
  {
    id: 2,
    question: "Explain closures in JavaScript.",
    answer: "A closure is the combination of a function bundled together (enclosed) with references to its lexical environment. It 
allows an inner function to access an outer function's scope even after the outer function has closed.",
    category: "JavaScript"
  },
  {
    id: 3,
    question: "What is server-side rendering (SSR)?",
    answer: "SSR is a technique where the web application's pages are rendered on the server on each request rather than on the client 
browser, improving initial load performance and SEO.",
    category: "Web Development"
  },
  {
    id: 4,
    question: "What is Big O notation used for?",
    answer: "Big O notation describes the performance or complexity of an algorithm, specifically how the time or memory requirements 
grow as the input size scales.",
    category: "Algorithms"
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(false);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <div className="z-10 max-w-xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-3xl font-bold text-center mb-2">Tech Interview Prep</h1>
        <p className="text-center text-gray-400 mb-8">Ludwitt Week 4 Learning Application</p>

        {!completed ? (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-xl flex flex-col items-center min-h-[300px] 
justify-between">
            <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
              {questions[currentIndex].category} (Question {currentIndex + 1} of {questions.length})
            </span>

            <div className="text-center my-6 cursor-pointer w-full" onClick={() => setIsFlipped(!isFlipped)}>
              <p className="text-xl font-medium mb-4">
                {isFlipped ? questions[currentIndex].answer : questions[currentIndex].question}
              </p>
              <span className="text-xs text-gray-400 underline">
                {isFlipped ? "Click to see question" : "Click card to flip for answer"}
              </span>
            </div>

            <button
              onClick={handleNext}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg transition"
            >
              {currentIndex === questions.length - 1 ? "Finish Session" : "Next Question"}
            </button>
          </div>
        ) : (
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Session Completed! 🎉</h2>
            <p className="text-gray-400 mb-6">You have successfully finished your interview prep review session.</p>
            <button
              onClick={handleRestart}
              className="bg-indigo-600 hover:bg-indigo-500 text-whe font-semibold px-6 py-3 rounded-lg transition"
            >
              Practice Again
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
