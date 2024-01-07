import React, { useState } from 'react'
import "./Options.css"

export default function Options({ optionsArr, correctAns }) {
    let [checkInput, setCheckInput] = useState(false);
    optionsArr.sort(() => Math.random() - 0.5);
    const selectedOption = (selectedOption) => {
        if (correctAns == selectedOption) {
            console.log("sahi kya hai");
        }
        console.log(selectedOption);
    }
    return (
        <div className='OptionsDiv'>
            {/* {optionsArr.map((value, index) => <button key={index} onClick={() => selectedOption(value)}>{value}</button>)} */}
            {optionsArr.map((value, index) =>
                <div className="optDiv" key={index}>
                    <input type="radio" name="option" />
                    <label value={index}>{value}</label>
                </div>
            )}
            {/* <div className="optDiv">
                <input checked={checkInput} type="radio" name='option'/>
                <label onClick={() => setCheckInput(!checkInput)}>Ok</label>
            </div> */}
        </div>
    )
}
