import { useState } from "react";
export default function InputComponent() {
    const [inputText, setText] = useState("hello");

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <>
            <input value={inputText} onChange={handleChange} />

            <p>You typed: {inputText}</p>

            <button onClick={() => setText("hello")}>Reset</button>
        </>
    );
}

/* 
This component renders three things:

-   An input text field 

-   Any text that has been entered into the field 

-   A Reset button to set the field back to its default state 

As the user starts typing within the text field, the current text that was typed is also displayed.
*/
