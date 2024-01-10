import React from 'react'
import coffinDanceGif from "../../../coffin-dance-gif.gif";
import celebrateGif from "../../../celebrate-gif.gif";

export default function QuizResult({ score, totalScore }) {
    let percentage =  (score / totalScore) * 100;
    return (
        <>
            <div className="showScoreDiv">
                <div className='show-score'>
                    <img src={percentage >= 70 ? {celebrateGif} : coffinDanceGif} alt="" id='perImg'/>
                    <p>Your Score: {score}</p>

                    <p>Total Score: {totalScore}</p>

                </div>
            </div>

        </>
    )
}
