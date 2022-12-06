import React, {useState, useContext} from "react";
import { Questions3 } from '../Helpers/level3questions';
import { QuizContext } from '../Helpers/Context';
import { MdPlayCircleFilled } from "react-icons/md";

function Quiz3() {

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

        if(nextQuestion < Questions3.length) {
            setCurrQuestion(nextQuestion);
        } else {
            setQuizState("Scoreboard");
        }
    }

    //get speech synthesis object

    let msg = new SpeechSynthesisUtterance();

    //pass the question in questions object to the message text

    msg.text = Questions3[currQuestion].question;

    //get french voice from speechSynthesis

    let voices = speechSynthesis.getVoices();
    msg.voice = voices[9];

    //create function to speak message when button is clicked

    const handleMsg = () => {
    window.speechSynthesis.speak(msg);
    }

    return (
        <div className="quiz-container">
            <div className="question-container">
            <h1>{Questions3[currQuestion].question}</h1>
            <button className="play-bttn" onClick={handleMsg}><MdPlayCircleFilled className="play-bttn-icon"/></button>
            </div>
            <div className="answer-container">
                {Questions3[currQuestion].answerOptions.map((answerOption) => (
                <button onClick={()=> handleButtonClick(answerOption.iscorrect)} >
                    {answerOption.answers}
                </button>
                ))}
            </div>
        </div>
    )
}

export default Quiz3;