import React from 'react'

export default function QuizResult({ score, totalScore, tryAgain }) {
    return (
        <>
            <div className="showScoreDiv">
                <div className='show-score'>
                    <p>Your Score: {score}</p>

                    <p>Total Score: {totalScore}</p>

                </div>
                <button id="next-button"
                    onClick={tryAgain}
                >
                    Try Again
                </button>
            </div>

        </>
    )
}
