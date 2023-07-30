import React, { useContext, useEffect } from "react";
import { QuizContext } from "../Helpers/quizContext";
import questionsData from '../Helpers/questions.json';

export default function Levels() {
    //import quizcontext to keep track of quizstate
    const { setQuizState, selectedLevel, setSelectedLevel, setQuizLevel } = useContext(QuizContext);

    // Initialize selectedLevel state with the questions data for the initial level (e.g., "easy")

    useEffect(() => {
        // Fetch the questions based on the selected level and set the quizLevel state
        setQuizLevel(questionsData[selectedLevel]);
      }, [selectedLevel, setQuizLevel]);
    
      const handleChange = (level) => {
        setSelectedLevel(() => {
          setQuizLevel(questionsData[level]);
          return level;
        });
        setQuizState("Quiz");
      };

    return (
        <div className="level-container">
      <div className="select-level-container">
        <legend>Select a level:</legend>
        <button
          className={`level-button ${selectedLevel === "easy" ? "selected" : ""}`}
          onClick={() => handleChange("easy")}
        >
          Easy
        </button>
        <button
          className={`level-button ${selectedLevel === "medium" ? "selected" : ""}`}
          onClick={() => handleChange("medium")}
        >
          Medium
        </button>
        <button
          className={`level-button ${selectedLevel === "hard" ? "selected" : ""}`}
          onClick={() => handleChange("hard")}
        >
          Hard
        </button>
      </div>
    </div>
    );
}
