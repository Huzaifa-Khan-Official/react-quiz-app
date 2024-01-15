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
  let [second, setSecond] = useState(59);
  let [minute, setMinute] = useState(0);

  function getDataFromAPI() {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        setQuestionsArray(res);
        setMinute(res.length - 1);
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

  const timer = () => {
    let milliSec = 100;
    let id = setInterval(() => {
      milliSec--;
      if (milliSec === -1) {
        milliSec = 100;
        setSecond((prevSecond) => {
          let newSecond = prevSecond - 1;
          if (newSecond === -1) {
            setMinute((prevMinute) => {
              let newMinute = prevMinute - 1;
              if (newMinute <= 0 && newSecond <= 0) {
                setShowResult(true);
                clearInterval(id);
                return 0; 
              }
              setSecond(59);
              return newMinute;
            });
          }
          return newSecond;
        });
      }
    }, 1);
  };

  useEffect(() => {
    getDataFromAPI();
    timer()
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
            <div className="timerDiv">
              <div className="secondDiv">
                <p>
                  {minute} : {second}
                </p>
              </div>
            </div>
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
