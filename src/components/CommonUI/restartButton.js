import { QuizContext } from '../Helpers/quizContext';
import { useContext } from 'react';

export const RestartButton = () => {

    const { setQuizState} = useContext(QuizContext);

    const restartGame = () => {
        setQuizState("Start");
    }

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <>
            <button onClick={() => { restartGame(); refreshPage(); }} className="restart-bttn">
                Re-Start
            </button>
        </>
    )

}