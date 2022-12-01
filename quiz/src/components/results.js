import React, {useState, useContext} from "react";
import { QuizContext } from '../Helpers/Context';

function Scoreboard() {

    //import quizcontext to reset game and update the results state with the total score.
    
    const { score, quizState, setQuizState} = useContext(QuizContext);

    return (
        <div class="results-container">
            <h1>You scored out {score} of 10</h1>
            <button className="restart-bttn"
            onClick={() => {
                setQuizState("Start");
                }}
                >
                    Re-Start Quiz
                </button>
        </div>
    )
}

export default Scoreboard;