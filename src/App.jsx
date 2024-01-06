import { useEffect, useState } from 'react';
import './App.css';
import animatedLogo from "./animatedlogo.gif";

function App() {
  let [questionList, setQuestionList] = useState([]);
  let [currIndex, setCurrIndex] = useState(0);
  // const [flag, setFlag] = useState(false);

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
    return <img src={animatedLogo} alt="" className='animatedLoader' />
  }
  
  const restart = () => {
    setCurrIndex(0)
  }

  return (
    <div className="App">
      <h4>{questionList[currIndex].question.text}</h4>
      <button onClick={() => setCurrIndex(currIndex => currIndex + 1)} style={{display: currIndex ==9 ? "none" : "block"}}>
        Next
      </button>

      <button style={{display: currIndex == 9 ? "block" : "none"}} onClick={restart}>Restart</button>
    </div>
  );
}

export default App;