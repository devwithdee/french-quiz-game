import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from '../Helpers/Context';
import "../App.css";


function ScoreAnim() {

    //use score from results

    const { score } = useContext(QuizContext);

    //calculate percentage of score to display in the component
    
    const number = score * 10;

    // create strokedashoffset state

    useState(472);

    const [strokeDashoffset, updateStrokeDashOffset] = useState();

    //function to change the strokedashoffset size depending on the total score

    function setStrokeDashOffset() {
        if (number === 100) {
            updateStrokeDashOffset(0)
        } else if (number === 90) {
            updateStrokeDashOffset(75)
        } else if (number === 80) {
            updateStrokeDashOffset(110)
        } else if (number === 70) {
            updateStrokeDashOffset(150)
        } else if (number === 60) {
            updateStrokeDashOffset(190)
        } else if (number === 50) {
            updateStrokeDashOffset(250)
        } else if (number === 40) {
            updateStrokeDashOffset(300)
        } else if (number === 30) {
            updateStrokeDashOffset(340)
        } else if (number === 20) {
            updateStrokeDashOffset(390)
        } else if (number === 10) {
            updateStrokeDashOffset(430)
        } else (updateStrokeDashOffset(472))
    };

    //set the strokedashoffset to update once each time the scoreanim component mounts

    useEffect(() => {
        setStrokeDashOffset();
    }, [])


    return (
        <div className="animation-container">
            <div className="outer">
                <div className="inner">
                    <div className="number">
                        {number}%
                    </div>
                </div>
            </div>
            <svg width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stop-color="#e91e63" />
                        <stop offset="100%" stop-color="#673ab7" />
                    </linearGradient>
                </defs>
                <circle id="circle" cx="80" cy="80" r="70" strokeLinecap="round" strokeDashoffset={strokeDashoffset}
                    strokeDasharray="472" />
            </svg>
        </div>
    )
}


export default ScoreAnim;