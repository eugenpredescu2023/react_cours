import { useState } from "react";

const User = (props) => {
    const [culoare, setCuloare] = useState(true);
    const blue = {
        backgroundColor: "DodgerBlue",
    };
    const pink = {
        backgroundColor: "pink",
    };


    return (
        <div style={culoare ? blue : pink}>
            <h2>{props.name} are {props.km} km </h2>
            <button onClick={() => setCuloare((prev) => !prev)}>Change color</button>
        </div> 
    )
};

export default User;