import React, { useContext} from "react";
import { QuizContext } from '../Helpers/quizContext';
import ScoreAnim from "../../features/score_animation/scoreAnim";




function Scoreboard() {
    //import quizcontext to reset game and update the results state with the total score.

    const { score, setQuizState } = useContext(QuizContext);

    //set quiz state back to start

    const handleBttnClick = () => {
        setQuizState("Start");
    }
    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div className="results-container">
            <h1>You scored out {score} of 10</h1>
            <div className="results">
                <ScoreAnim />
                <button onClick={() => { handleBttnClick(); refreshPage(); }} className="restart-bttn">
                    Re-Start
                </button>
                </div>
        </div>
    )
}

export default Scoreboard;