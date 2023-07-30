import React, { createContext, useState, useContext } from "react";

export const QuizContext = createContext();

export const useQuizContext = () => useContext(QuizContext);

export const QuizProvider = ({ children }) => {
  const [quizState, setQuizState] = useState("Start");
  const [selectedLevel, setSelectedLevel] = useState("easy");
  const [quizLevel, setQuizLevel] = useState([]);
  const [score, setScore] = useState(0);

  return (
    <QuizContext.Provider
      value={{
        quizState,
        setQuizState,
        quizLevel,
        setQuizLevel,
        selectedLevel,
        setSelectedLevel,
        score,
        setScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

