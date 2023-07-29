import React, { useState } from 'react';
import "./App.css";
import StartGame from "./components/pages/startGame";
import QuizEasy from "./components/pages/quizeasy";
import QuizMedium from "./components/pages/quizmedium";
import QuizHard from "./components/pages/quizhard";
import Scoreboard from "./components/pages/results";
import Levels from "./components/pages/levels";


//create context to keep track of quiz state and score

import { QuizContext } from "./components/Helpers/Context";

function App () {


//set the quizstate to the start page

const [quizState, setQuizState] = useState("Start");

//create state to track score

const [score, setScore] = useState(0);

  return (
    <div className="container">
      <div className='quiz-container'>
        <QuizContext.Provider value=
        {{ quizState, setQuizState, score, setScore }}>
        {quizState === "Start" && <StartGame />}
        {quizState === "Levels" && <Levels />}
        {quizState === "QuizEasy" && <QuizEasy />}
        {quizState === "QuizMedium" && <QuizMedium />}
        {quizState === "QuizHard" && <QuizHard />}
        {quizState === "Scoreboard" && <Scoreboard />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;