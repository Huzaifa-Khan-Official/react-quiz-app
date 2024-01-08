// import { useEffect, useState } from 'react';
// import './App.css';
// import animatedLogo from "./animatedlogo.gif";
// import Options from './Components/Options/Options';

// function App() {
//   let [questionList, setQuestionList] = useState([]);
//   let [currIndex, setCurrIndex] = useState(0);
//   const [shuffledArray, setShuffledArray] = useState([]);

//   useEffect(() => {
//     getDataFromAPI()
//   }, [])

//   function getDataFromAPI() {
//     fetch('https://the-trivia-api.com/v2/questions')
//       .then(res => res.json())
//       .then(res => {
//         setQuestionList(res);
//       })
//   }

//   if (!questionList.length) {
//     return <img src={animatedLogo} alt="" className='animatedLoader' />
//   }

//   const restart = () => {
//     setCurrIndex(0)
//   }

//   let optionsArr = questionList[currIndex].incorrectAnswers;
//   let correctAns = questionList[currIndex].correctAnswer;
//   optionsArr.push(correctAns);

//   // const nextQuestion = () => {

//   // }

//   return (
//     <div className="App">
//       <h4>{questionList[currIndex].question.text}</h4>
//       <Options optionsArr={optionsArr} correctAns={correctAns}/>
//       <button onClick={() => setCurrIndex(currIndex => currIndex + 1)} style={{ display: currIndex == 9 ? "none" : "block" }}>
//         Next
//       </button>

//       <button style={{ display: currIndex == 9 ? "block" : "none" }} onClick={restart}>Restart</button>
//     </div>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import './App.css';
import animatedLogo from "./animatedlogo.gif";

function App() {
  let [currQuestion, setCurrQuestion] = useState(0);
  let [questionsArray, setQuestionsArray] = useState([]);
  let [clickedOpt, setClickedOpt] = useState(0);

  function getDataFromAPI() {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        setQuestionsArray(res);
      })
  }

  useEffect(() => {
    getDataFromAPI()
  }, []);

  if (!questionsArray.length) {
    return <img src={animatedLogo} alt="" className='animatedLoader' />
  }

  let optionsArr = questionsArray[currQuestion].incorrectAnswers;
  let correctAns = questionsArray[currQuestion].correctAnswer;
  optionsArr.push(correctAns);

  const nextQuestion = () => {
    if (currQuestion < questionsArray.length - 1) {
      setCurrQuestion(currQuestion + 1);
    }
  }


  return (
    <>
      <h1>Quiz APP</h1>
      <div className="container">
        <div className="questionDiv">
          <h3>{currQuestion + 1}.{questionsArray[currQuestion].question.text}</h3>
        </div>
        <div className="optionsDiv">
          {optionsArr.map((option, i) => {
            return (
              <button
                key={i}
                className={`option-btn ${clickedOpt == i + 1 ? "checked" : null
                  }`}
                onClick={() => setClickedOpt(i + 1)}
              >
                {option}
              </button>
            )
          })}
        </div>

        <button id="next-button" onClick={nextQuestion}>
          Next
        </button>
      </div>
    </>
  );
}

export default App;