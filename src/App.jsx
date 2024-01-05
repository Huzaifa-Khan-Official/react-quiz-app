import { useEffect, useState } from 'react';
import './App.css';

function App() {

  useEffect(() => {
    getDataFromAPI()
  }, [])

  const getDataFromAPI = () => {
    fetch('https://the-trivia-api.com/v2/questions')
    .then(res => res.json())
    .then(res => console.log(res))
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
