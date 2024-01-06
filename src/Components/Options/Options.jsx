import React from 'react'
import "./Options.css"

export default function Options({ optionsArr }) {
    console.log(optionsArr.sort(() => Math.random() - 0.5));
    return (
        <div className='OptionsDiv'>
            {optionsArr.map((value, index) => <button key={index}>{value}</button>)}
        </div>
    )
}
