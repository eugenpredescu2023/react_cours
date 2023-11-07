import { useState } from "react";
import { Button } from './pages/Buton';

export const ShowHide = () => {
    const [seeText, setSeeText] = useState(true);

    const color1 = {
        color: "bleu",
        backgroundColor: "pink",
    };

    const color2 = {
        color: "red",
        backgroundColor: "green",
    };

    return (
    <>
    <Button setShow={setSeeText}/>
    <div style={seeText ? color1 : color2}>I can change my color</div>
    </>
    )
}