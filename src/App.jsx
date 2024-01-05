import { useEffect, useState } from 'react';
import './App.css';
import animatedLogo from "./animatedlogo.gif";

function App() {
  let [questionList, setQuestionList] = useState([]);
  let [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    getDataFromAPI()
  }, [])

  function getDataFromAPI() {
    fetch('https://the-trivia-api.com/v2/questions')
      .then(res => res.json())
      .then(res => {
        setQuestionList(res);
      })
  }

  if (!questionList.length) {
    return <img src={animatedLogo} alt="" className='animatedLoader'/>
  }


  return (
    <div className="App">
      <h4>{questionList[0].question.text}</h4>
      <button onClick={setCurrIndex(oldValue => oldValue + 1)}>Next</button>
    </div>
  );
}

export default App;