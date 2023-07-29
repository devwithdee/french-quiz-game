import React, { useState, useContext } from "react";
import { Questions3 } from '../Helpers/level3questions';
import { QuizContext } from '../Helpers/Context';
import { AccessibleFeature } from "../../features/text_to_speech/accessibility";
import { RestartButton } from "../../components/CommonUI/restartButton";
import { useAccessibilityContext } from "../Helpers/accessibilityContext";



function Quiz3() {
    //import speechcontext to keep track of speechsynthesis state
    const { speechState, setSpeechState } = useAccessibilityContext();

    //import quizcontext to keep track of quizstate and score

    const { score, setScore, setQuizState } = useContext(QuizContext);

    //create state to keep track of questions and update the question based on the state

    const [currQuestion, setCurrQuestion] = useState(0);

    /*when the button is clicked load the next set of questions and answers 
    everytime an button is clicked update the score if the answer is correct and load next question
    if the last question is longer than the questions array then change the quizstate to results*/

    const handleButtonClick = (iscorrect) => {
        const nextQuestion = currQuestion + 1;
        //add to score if true
        if (iscorrect === true) {
            setScore(score + 1);

        }
        //go to the next question after answer is clicked
        if (nextQuestion < Questions3.length) {
            setCurrQuestion(nextQuestion);

        } else {
            //all questions complete show score
            setQuizState("Scoreboard");
        }
         //stop speechsynthesis api from speaking if an answer is clicked
         if (speechState !== "stopped") {
            window.speechSynthesis.cancel();
            setSpeechState("stopped");
            console.log("all stopped");
        }
    }

    

    const questionText = 
     Questions3[currQuestion]?.question + "translate to which of the following?" +
     Questions3[currQuestion].answerOptions
    .map((answerOption) => answerOption.answers)
    .join(", ");
    console.log("Current Question Index:", currQuestion);
    console.log("Question Text:", questionText);

  




    return (
        <div className="quiz-container">
            <div className="question-container">
                <h1>{Questions3[currQuestion].question}</h1>
                <AccessibleFeature question={questionText} />
            </div>
            <div className="answer-container">
                {/* Add key prop to each button element */}
                {Questions3[currQuestion].answerOptions.map((answerOption, index) => (
                    <button key={index} onClick={() => handleButtonClick(answerOption.iscorrect)}>
                        {answerOption.answers}
                    </button>
                ))}
                < RestartButton />
            </div>
        </div>
    )
}

export default Quiz3;