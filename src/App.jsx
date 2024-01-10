import { useEffect, useState } from 'react';
import QuizResult from './Components/Options/QuizResult/QuizResult';
import './App.css';
import animatedLogo from "./animatedlogo.gif";

function App() {
  let [currQuestion, setCurrQuestion] = useState(0);
  let [questionsArray, setQuestionsArray] = useState([]);
  let [clickedOpt, setClickedOpt] = useState(0);
  let [isClicked, setIsClicked] = useState(false);
  let [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  let optionsArr = [];

  function getDataFromAPI() {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        setQuestionsArray(res);
      })
  }

  useEffect(() => {
    getDataFromAPI();
    optionsArr.sort(() => Math.random() - 0.5)
  }, []);

  if (!questionsArray.length) {
    return <img src={animatedLogo} alt="" className='animatedLoader' />
  }

  const nextQuestion = () => {
    updateScore();
    setIsClicked(false);
    if (currQuestion < questionsArray.length - 1) {
      setCurrQuestion(currQuestion + 1);
      setClickedOpt(null);
    } else {
      setShowResult(true)
    }
  }

  const updateScore = () => {
    if (optionsArr[clickedOpt] === correctAns) {
      setScore(score + 1);
    }
  }


  let incorrectOpts = questionsArray[currQuestion].incorrectAnswers;
  optionsArr.push(...incorrectOpts);
  let correctAns = questionsArray[currQuestion].correctAnswer;
  optionsArr.push(correctAns);

  return (
    <>
      <h1>Quiz APP</h1>
      <div className="container">
        {showResult ? (
          < QuizResult score={score} totalScore={questionsArray.length} />
        ) : (
          <>
            <div className="questionDiv">
              <h3>{currQuestion + 1}.{questionsArray[currQuestion].question.text}</h3>
            </div>
            <div className="optionsDiv">
              {optionsArr.map((option, i) => {
                return (
                  <button
                    key={i}
                    className={`option-btn ${clickedOpt === i + 1 ? "checked" : null
                      }`}
                    onClick={() => { 
                      setClickedOpt(i + 1);
                      setIsClicked(true);
                     }}
                  >
                    {option}
                  </button>
                )
              })}
            </div>

            <button id="next-button" onClick={nextQuestion} disabled={!isClicked ? true : false}>
              Next
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default App; 