import React, { useState, useEffect } from 'react';
import "./App.css";
import StartGame from "./components/pages/startGame";
import Quiz from "./components/pages/quizeasy";
import Scoreboard from "./components/pages/results";
import Levels from "./components/pages/levels";
import questionsData from '../src/components/Helpers/questions.json';
import { AccessibilityProvider } from "./components/Helpers/accessibilityContext";


//create context to keep track of quiz state and score

import { QuizContext } from "./components/Helpers/quizContext";

function App() {


  //set the quizstate to the start page

  const [quizState, setQuizState] = useState("Start");

  //create state to track score

  const [score, setScore] = useState(0);

  const [selectedLevel, setSelectedLevel] = useState("easy");

  const [quizLevel, setQuizLevel] = useState(questionsData[selectedLevel]);

  const [theme, setTheme] = useState("light");


  const isDark = () => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    isDark(); // Call the function when the component mounts
    // Add an event listener to update the theme when the user preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", isDark);

    // Clean up the event listener when the component unmounts
    return () => {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", isDark);
    };
  }, []);
  /*
  const lightTheme = {
    backgroundColor: "#A2DBFF",
    color: "black"
  }

  const darkTheme = {
    backgroundColor: "#051E2D",
    color: "#DCD1BD"
  }
  */


  return (
      <AccessibilityProvider>
        <div className="container">
          <div className={`App ${theme}`}>
            <div className='quiz-container'>
              <QuizContext.Provider value=
                {{ quizState,
                  setQuizState,
                  quizLevel,
                  setQuizLevel,
                  selectedLevel,
                  setSelectedLevel,
                  score,
                  setScore, }}>
                {quizState === "Start" && <StartGame />}
                {quizState === "Levels" && <Levels />}
                {quizState === "Quiz" && <Quiz />}
                {quizState === "Scoreboard" && <Scoreboard />}
              </QuizContext.Provider>
            </div>
          </div>
        </div>
      </AccessibilityProvider>
  );
}

export default App;