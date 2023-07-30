import React, { useState, useContext, useRef } from "react";
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

    //initialize an array to hold in state variable for answer button classes

    const [buttonClasses, setButtonClasses] = useState({});

    //initialize state for disabled buttons

    const [disabled, setDisabled] = useState(false);

    //create reference for correct and incorrect answer options

    const correctButtonRef = useRef(null);
    const incorrectButtonRef = useRef(null);

    //initialize state to hold the user selected answer

    const [selectedAnswer, setSelectedAnswer] = useState(null);


    /* function to execute once an answer is chosen */

    const handleButtonClick = (iscorrect, index) => {
        if (iscorrect === true) {
            //update score if correct
            setScore(score + 1);
            //disable options
            setDisabled(true);
            //change the state of selected answer to true
            setSelectedAnswer('true');
            //store the class of the selected answer as correct
            setButtonClasses(prevClasses => ({ ...prevClasses, [index]: 'correct' }));


        } else if (iscorrect === false) {
            //disable options
            setDisabled(true);
            //change the state of selected answer to false
            setSelectedAnswer('false');
            //store the class of the selected answer as incorrect
            setButtonClasses(prevClasses => ({ ...prevClasses, [index]: 'incorrect' }));


        }
        //stop speechsynthesis api from speaking if an option is clicked
        if (speechState !== "stopped") {
            window.speechSynthesis.cancel();
            setSpeechState("stopped");
            console.log("all stopped");
        }

        //set quizState to scoreboard if end of quiz
        if (currQuestion >= quizLevel.length -1) {
            setQuizState("Scoreboard");
            console.log(quizLevel.length);
        } 
    }

    const nextQuestionClick = () => {
        // Reset button classes and other states for the next question
        setCurrQuestion(currQuestion + 1);
        setButtonClasses({});
        setSelectedAnswer(null);
        setDisabled(false);
    }


    //return error if quiz questions null
    if (!quizLevel || quizLevel.length === 0) {
        return <div>No questions available for the selected level.</div>;
    } 

    //set the current question
    const currentQuestion = quizLevel[currQuestion];

    //set the text for the speechapi from the current quiz question and options
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
                        className={buttonClasses[index]}
                        ref={(el) =>
                            answerOption.iscorrect
                                ? (correctButtonRef.current = el)
                                : (incorrectButtonRef.current = el)
                        }
                        onClick={() => handleButtonClick(answerOption.iscorrect, index)}                    >
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