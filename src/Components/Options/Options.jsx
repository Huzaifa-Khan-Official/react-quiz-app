import React from 'react'
import "./Options.css"

export default function Options({ optionsArr, correctAns }) {
    optionsArr.sort(() => Math.random() - 0.5);
    const selectedOption = (selectedOption) => {
        if (correctAns == selectedOption) {
            console.log("sahi kya hai");
        }
        console.log(selectedOption);
    }
    return (
        <div className='OptionsDiv'>
            {optionsArr.map((value, index) => <button key={index} onClick={() => selectedOption(value)}>{value}</button>)}
        </div>
    )
}
