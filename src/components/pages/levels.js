import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../../App.css";



export default function Levels() {

    //import quizcontext to keep track of quizstate

    const { setQuizState } = useContext(QuizContext);

    return (
        <div>
            <h1>Choose level of difficulty.</h1>
            <button className="start-bttn"
                onClick={() => {
                    setQuizState("QuizEasy");
                }}
            >
                Easy
            </button>
            <button className="start-bttn"
                onClick={() => {
                    setQuizState("QuizMedium");
                }}
            >
                Medium
            </button>
            <button className="start-bttn"
                onClick={() => {
                    setQuizState("QuizHard");
                }}
            >
                Hard
            </button>
        </div>
    );
}