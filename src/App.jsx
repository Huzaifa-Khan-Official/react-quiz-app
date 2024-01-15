import { useEffect, useState } from 'react';
import QuizResult from './Components/Options/QuizResult/QuizResult';
import './App.css';
import animatedLogo from "./animatedlogo.gif";

function App() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [questionsArray, setQuestionsArray] = useState([]);
  const [clickedOpt, setClickedOpt] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [optionsArr, setOptionsArr] = useState([]);

  function getDataFromAPI() {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        setQuestionsArray(res);
      })
  }

  const shuffleOptions = () => {
    const options = [];
    const incorrectOpts = questionsArray[currQuestion].incorrectAnswers;
    options.push(...incorrectOpts);
    const correctAns = questionsArray[currQuestion].correctAnswer;
    options.push(correctAns);

    options.sort(() => Math.random() - 0.5);
    setOptionsArr(options);
  }

  useEffect(() => {
    getDataFromAPI();
  }, []);

  useEffect(() => {
    if (questionsArray.length > 0) {
      shuffleOptions();
    }
  }, [currQuestion, questionsArray]);

  const updateScore = () => {
    if (optionsArr[clickedOpt - 1] === questionsArray[currQuestion].correctAnswer) {
      setScore(score + 1);
    }
  }

  const nextQuestion = () => {
    updateScore();
    setIsClicked(false);
    if (currQuestion < questionsArray.length - 1) {
      setCurrQuestion(currQuestion + 1);
      setClickedOpt(0);
    } else {
      setShowResult(true);
    }
  }

  if (!questionsArray.length) {
    return <img src={animatedLogo} alt="" className='animatedLoader' />
  }

  return (
    <>
      <h1>Quiz APP</h1>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={questionsArray.length} />
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
                    className={`option-btn ${clickedOpt === i + 1 ? "checked" : null}`}
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
