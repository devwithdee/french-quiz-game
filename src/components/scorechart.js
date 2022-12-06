import React, { useContext, useEffect, useState } from "react";
import { QuizContext } from '../Helpers/Context';
import "../App.css";


function ScoreAnim() {


    const { score } = useContext(QuizContext);

    const number = score * 10;

    useState(472);

    const [strokeDashoffset, updateStrokeDashOffset] = useState();

    function setStrokeDashOffset() {
        if (number === 100) {
            updateStrokeDashOffset(0)
        } else if (number === 90) {
            updateStrokeDashOffset(47.2)
        } else if (number === 80) {
            updateStrokeDashOffset(94.4)
        } else if (number === 70) {
            updateStrokeDashOffset(141.6)
        } else if (number === 60) {
            updateStrokeDashOffset(188.8)
        } else if (number === 50) {
            updateStrokeDashOffset(250)
        } else if (number === 40) {
            updateStrokeDashOffset(283)
        } else if (number === 30) {
            updateStrokeDashOffset(330.4)
        } else if (number === 20) {
            updateStrokeDashOffset(377.6)
        } else if (number === 10) {
            updateStrokeDashOffset(424.8)
        } else (updateStrokeDashOffset(472))
    };


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