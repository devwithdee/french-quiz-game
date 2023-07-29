import React, { useCallback, useContext, useEffect, useState } from "react";
import { QuizContext } from '../../components/Helpers/Context';
import "../score_animation/scoreAnim.css";
import Lottie from "lottie-react";
import animationData from '../../components/CommonUI/Winner.json';
import { ScoreSVG } from "./scoreSvg";



function ScoreAnim() {
    const { score } = useContext(QuizContext);
    const number = score * 10;
    const [showAnimation, setShowAnimation] = useState(false);
    const [showScoreSvg, setShowScoreSvg] = useState(true);


    const winnerFunction = useCallback(() => {
        if (number === 100) {
            setShowAnimation(true);
            setShowScoreSvg(false);

        }
    }, [number]);

    useEffect(() => {
        winnerFunction();
    }, [winnerFunction]);



    return (
        <div className="animation-container">
            <div className="lottie-container">
                {showAnimation &&
                    <Lottie animationData={animationData}
                        loop={true}
                        className="custom-lottie"
                    />}
            </div>
            {showScoreSvg &&
                <div className="outer">
                    <div className="inner">
                        <div className="number">
                            {number}%
                        </div>
                    </div>
                    <ScoreSVG />
                </div>
            }
        </div>
    )
}


export default ScoreAnim;