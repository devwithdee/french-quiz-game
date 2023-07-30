import React, { useState, useContext, useRef, useEffect } from "react";
import { QuizContext } from '../Helpers/quizContext';
import { RestartButton } from "../CommonUI/restartButton";
import { useAccessibilityContext } from "../Helpers/accessibilityContext";
import { AccessibleFeature } from "../../features/text_to_speech/accessibility";



function Quiz() {


    //import speechcontext to keep track of speechsynthesis state
    const { speechState, setSpeechState } = useAccessibilityContext();

    //import quizcontext to keep track of quizstate and score

    const { quizLevel, score, setScore, setQuizState } = useContext(QuizContext);

    //create state to keep track of questions and update the question based on the state

    const [currQuestion, setCurrQuestion] = useState(0);

    const [buttonColor, setButtonColor] = useState('correct');

    const [disabled, setDisabled] = useState(false);

    const correctButtonRef = useRef(null);
    const incorrectButtonRef = useRef(null);

    useEffect(() => {
        if (correctButtonRef.onClick) {
            setButtonColor('correct');
            console.log("that is the correct button");
        }
    },[setButtonColor,buttonColor])

    /*when the button is clicked load the next set of questions and answers 
    everytime an button is clicked update the score if the answer is correct 
    and load next question if the last question is longer than the questions 
    array then change the quizstate to results*/

    const handleButtonClick = (iscorrect) => {

        //add to score if true
        if (iscorrect === true) {
            setScore(score + 1);
            setDisabled(true);

        } else if (iscorrect === false) {
            setButtonColor("incorrect");
            setDisabled(true);
        }
        //stop speechsynthesis api from speaking if an answer is clicked
        if (speechState !== "stopped") {
            window.speechSynthesis.cancel();
            setSpeechState("stopped");
            console.log("all stopped");
        }
    }

    //set the button color to the correct and incorrect answers


    const nextQuestionClick = () => {

        const nextQuestion = currQuestion + 1;

        //go to the next question after answer is clicked
        if (nextQuestion < quizLevel.length) {
            setCurrQuestion(nextQuestion);
        } else {
            //all questions complete show score
            setQuizState("Scoreboard");

        }
        setDisabled(false);
    }

    if (!quizLevel || quizLevel.length === 0) {
        return <div>No questions available for the selected level.</div>;
    }

    const currentQuestion = quizLevel[currQuestion];

    // Access the 'question' property from the 'currentQuestion' object
    const questionText =
        currentQuestion.question +
        " translates to which of the following words? " +
        currentQuestion.answerOptions
            .map((answerOption) => answerOption.answers)
            .join(", ");


    return (

        <div className="quiz-container">
            <div className="question-container">
                <h1>{currentQuestion.question}</h1>
                <AccessibleFeature question={questionText} />

            </div>
            <div className="answer-container">
                {currentQuestion.answerOptions.map((answerOption, index) => (
                    <button
                        disabled={disabled}
                        key={index}
                        id="answerBtn"
                        className={`answerBtn ${buttonColor}`}
                        ref={(el) =>
                            answerOption.iscorrect
                              ? (correctButtonRef.current = el)
                              : (incorrectButtonRef.current = el)
                          }
                        onClick={() => handleButtonClick(answerOption.iscorrect)}
                    >
                        {answerOption.answers}
                    </button>
                ))}
                <button id="next" onClick={nextQuestionClick}>Next</button>
                < RestartButton />
            </div>
        </div>
    )
}

export default Quiz;