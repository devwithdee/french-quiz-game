import React, {useState, useContext} from "react";
import { Questions } from '../Helpers/level1questions';
import { QuizContext } from '../Helpers/Context';

function Quiz() {

    //import quizcontext to keep track of quizstate and score

    const { score, setScore, quizState, setQuizState} = useContext(QuizContext);

    //create state to keep track of questions and update the question based on the state
    
    const [currQuestion, setCurrQuestion] = useState(0);

    /*when the button is clicked load the next set of questions and answers 
    everytime an button is clicked update the score if the answer is correct and load next question
    if the last question is longer than the questions array then change the quizstate to results*/

    const handleButtonClick = (iscorrect) => {
        const nextQuestion = currQuestion + 1;

        if(iscorrect === true) {
            setScore(score + 1);
        }

        if(nextQuestion < Questions.length) {
            setCurrQuestion(nextQuestion);
        } else {
            setQuizState("Scoreboard");
        }
    }

    return (
        <div className="quiz-container">
            <h1>{Questions[currQuestion].question}</h1>
            <div className="questions-container">
                {Questions[currQuestion].answerOptions.map((answerOption) => (
                <button onClick={()=> handleButtonClick(answerOption.iscorrect)} >
                    {answerOption.answers}
                </button>
                ))}
            </div>
        </div>
    )
}

export default Quiz;