import { useState } from "react";

export default function ButtonClick(){
    const [text, setText] = useState("Click Me");
    const changeText = () =>{
        setText("Button Clicked");
    }
    return(
        <div>
            <h2>Welcome to FSD Lecture</h2>
            <button onClick={changeText}>{text}</button>
        </div>
    );
}