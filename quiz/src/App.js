import React, { Component, useState } from 'react';
import "./App.css";
import StartGame from "./components/startGame";
import Quiz from "./components/quizform";
import Scoreboard from "./components/results";


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
        {quizState === "Quiz" && <Quiz />}
        {quizState === "Scoreboard" && <Scoreboard />}
        </QuizContext.Provider>
      </div>
    </div>
  );
}

export default App;