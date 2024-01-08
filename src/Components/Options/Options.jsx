// import React, { useState } from 'react'
// import "./Options.css"

// export default function Options({ optionsArr, correctAns }) {
//     // let [checkInput, setCheckInput] = useState(false);
//     let [selOptIndex, setselOptIndex] = useState("");
//     optionsArr.sort(() => Math.random() - 0.5);
//     const selectedOption = (selectedOption) => {
//         if (correctAns == selectedOption) {
//             console.log("sahi kya hai");
//         }
//         console.log(selectedOption);
//     }

//     const checkedLabel = (index) => {
//         setselOptIndex(index);
//         console.log(selOptIndex);
//     }
//     return (
//         <div className='OptionsDiv'>
//             {/* {optionsArr.map((value, index) => <button key={index} onClick={() => selectedOption(value)}>{value}</button>)} */}
//             {optionsArr.map((value, index) =>
//                 <div className="optDiv" key={index}>
//                     <input type="radio" name="option" value={value}/>
//                     <label value={index} onClick={() => checkedLabel(index)}>{value}</label>
//                 </div>
//             )}
//             {/* <div className="optDiv">
//                 <input checked={checkInput} type="radio" name='option'/>
//                 <label onClick={() => setCheckInput(!checkInput)}>Ok</label>
//             </div> */}
//         </div>
//     )
// }
