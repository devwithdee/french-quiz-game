import React, {useContext} from "react";
import {QuizContext} from "../Helpers/Context";
import "../App.css";

export default function StartGame() {

    //import quizcontext to keep track of quizstate

    const {quizState, setQuizState} = useContext(QuizContext);

    return (
        <div>
            <h1>Test Your French</h1>
            <button className="start-bttn"
            onClick={() => {
                setQuizState("Levels");
                }}
                >
                Start Game
                </button>
        </div>
    );
}