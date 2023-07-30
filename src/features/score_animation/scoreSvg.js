import React, { useCallback, useEffect, useContext, useState } from "react";
import { QuizContext } from '../../components/Helpers/quizContext';
import "../score_animation/scoreAnim.css";

export const ScoreSVG = () => {
    const { score } = useContext(QuizContext);
    const number = score * 10;
    const [strokeDashoffset, setStrokeDashOffset] = useState(472);
    
    const updateStrokeDashOffset = useCallback(() => {
        if (number === 90) {
            setStrokeDashOffset(75);
        } else if (number === 80) {
            setStrokeDashOffset(110);
        } else if (number === 70) {
            setStrokeDashOffset(150);
        } else if (number === 60) {
            setStrokeDashOffset(190);
        } else if (number === 50) {
            setStrokeDashOffset(250);
        } else if (number === 40) {
            setStrokeDashOffset(300);
        } else if (number === 30) {
            setStrokeDashOffset(340);
        } else if (number === 20) {
            setStrokeDashOffset(390);
        } else if (number === 10) {
            setStrokeDashOffset(430);
        } else {
            setStrokeDashOffset(472);
        }
    }, [number]);

    useEffect(() => {
        updateStrokeDashOffset();
    }, [updateStrokeDashOffset]);

    return (
        <>
        <svg width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#14CBC6" />
                        <stop offset="100%" stopColor="#14CB30" />
                    </linearGradient>
                </defs>
                <circle id="circle" cx="80" cy="80" r="70" strokeLinecap="round" strokeDashoffset={strokeDashoffset}
                    strokeDasharray="472" />
            </svg>
        </>
    )
}