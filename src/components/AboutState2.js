import { useState } from "react";
import { Button } from "./pages/Buton";


export const AboutState2 = () => {
    const [seeText, setSeeText] = useState();
    
    return (
       <>
       <Button setSee={setSeeText}/>
       {seeText ? <div style={{color: 'green'}}>Show</div> : <div style={{color: 'red'}} >Hide</div>}
       <h1 style={{color: seeText ? "green" : "red"}}> {seeText ? "green" : "red"} </h1>                   
       </>
    );
   };