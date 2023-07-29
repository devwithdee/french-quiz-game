import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../../App.css";

export default function StartGame() {

    //import quizcontext to keep track of quizstate

    const { setQuizState } = useContext(QuizContext);

    return (
        <div>
            <h1>French Quiz</h1>
            <p>Welcome to the French Quiz Adventure!
                Embark on a journey to test and sharpen your French skills!
                Are you ready to test your French?
                Let's have some fun as we explore the depths of your knowledge!
                Let's begin this exciting French quiz quest! Ready?</p>
            <button className="start-bttn"
                onClick={() => {
                    setQuizState("Levels");
                }}
            >
                Let's Go!
            </button>
        </div>
    );
};