import React, {useState, useContext} from "react";
import { Questions } from '../Helpers/level1questions';
import { QuizContext } from '../Helpers/Context';
import { RestartButton } from "../CommonUI/restartButton";
import { AccessibleFeature } from "../../features/text_to_speech/accessibility";



function Quiz() {

    //import quizcontext to keep track of quizstate and score

    const { score, setScore, setQuizState} = useContext(QuizContext);

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

    //get speech synthesis object

    let msg = new SpeechSynthesisUtterance();

    //pass the question in questions object to the message text

    msg.text = Questions[currQuestion].question;

    //get french voice from speechSynthesis

    let voices = speechSynthesis.getVoices();
    msg.voice = voices[9];

    //create function to speak message when button is clicked

    const questionText = 
    Questions[currQuestion]?.question + "translate to which of the following?" +
    Questions[currQuestion].answerOptions
   .map((answerOption) => answerOption.answers)
   .join(", ");
   console.log("Current Question Index:", currQuestion);
   console.log("Question Text:", questionText);

    return (
        <div className="quiz-container">
            <div className="question-container">
            <h1>{Questions[currQuestion].question}</h1>
            <AccessibleFeature question={questionText} />
            </div>
            <div className="answer-container">
                {Questions[currQuestion].answerOptions.map((answerOption) => (
                <button onClick={()=> handleButtonClick(answerOption.iscorrect)} >
                    {answerOption.answers}
                </button>
                ))}
                < RestartButton />
            </div>
        </div>
    )
}

export default Quiz;