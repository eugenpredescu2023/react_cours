import { useState } from "react"
import { ChangeShow } from "./ChangeShow";
// export const AboutState = () => {
//     const [countState, setCountState] = useState(0);
//     let count = 0;

//     const add = () => {
//         count++;
//         console.log(count);
//     };

//     const addState = () => {
//         setCountState(countState+1);
//     };

//     return (
//         <>
//             <div>
//                 {count}
//                 <br />
//                 <button onClick={add}>Add</button>
//             </div>
//             <div>
//                 {countState}
//                 <br />
//                 <button onClick={() => setCountState(countState + 1)}>
//                     Add with state
//                 </button>
//             </div>
//         </>        
//     );




export const AboutState = () => {
 const [showText, setShowText] = useState(false);
 

 return (
    <>
    <ChangeShow setShow={setShowText}/>
    {showText ? <div style={{color: 'green'}}>Show</div> : <div style={{color: 'red'}} >Hide</div>}
    <h1 style={{color: showText ? "green" : "red"}}> {showText ? "green" : "red"} </h1>                   
    </>
 );
};
