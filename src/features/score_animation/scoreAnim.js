import React, { useCallback, useContext, useEffect, useState } from "react";
import { QuizContext } from '../../components/Helpers/Context';
import "../score_animation/scoreAnim.css";
import Lottie from 'react-lottie';
import animationData from '../../components/CommonUI/Winner.json';



function ScoreAnim() {
    const { score } = useContext(QuizContext);
    const number = score * 10;
    const [strokeDashoffset, setStrokeDashOffset] = useState(472);
    const [showAnimation, setShowAnimation] = useState(false);

    const updateStrokeDashOffset = useCallback(() => {
        if (number === 100) {
            setStrokeDashOffset(0);
        } else if (number === 90) {
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


    const winnerFunction = useCallback(() => {
        if (number === 100) {
          setShowAnimation(true);
        }
      }, [number]);
    
      useEffect(() => {
        winnerFunction();
      }, [winnerFunction]);

      // Lottie options (adjust to fit your animation)
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
                        <stop offset="0%" stop-color="#14CBC6" />
                        <stop offset="100%" stop-color="#14CB30" />
                    </linearGradient>
                </defs>
                <circle id="circle" cx="80" cy="80" r="70" strokeLinecap="round" strokeDashoffset={strokeDashoffset}
                    strokeDasharray="472" />
            </svg>
        </div>
    )
}


export default ScoreAnim;