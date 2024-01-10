import React from 'react'
import coffinDanceGif from "../../../coffin-dance-gif.gif";
import celebrateGif from "../../../celebrate-gif.gif";

export default function QuizResult({ score, totalScore }) {
    let percentage =  (score / totalScore) * 100;
    return (
        <>
            <div className="showScoreDiv">
                <div className='show-score'>
                    <div className="remarkDiv">
                        <h3>{percentage >= 50 ? "Congratulations!" : "Sorry!"}</h3>
                    </div>

                    <img src={percentage >= 50 ? celebrateGif : coffinDanceGif} alt="" id='perImg'/>

                    <p>Percentage: {percentage}</p>

                    <p>Your Score: {score}</p>

                    <p>Total Score: {totalScore}</p>

                </div>
            </div>

        </>
    )
}
