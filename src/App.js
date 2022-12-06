import React, { useState } from 'react';
import "./App.css";
import StartGame from "./components/startGame";
import Quiz from "./components/quizform";
import Quiz2 from "./components/quiz2";
import Quiz3 from "./components/quiz3";
import Scoreboard from "./components/results";
import Levels from "./components/levels";


//create context to keep track of quiz state and score

import { QuizContext } from "./Helpers/Context";

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
        {quizState === "Quiz" && <Quiz />}
        {quizState === "Quiz2" && <Quiz2 />}
        {quizState === "Quiz3" && <Quiz3 />}
        {quizState === "Scoreboard" && <Scoreboard />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;