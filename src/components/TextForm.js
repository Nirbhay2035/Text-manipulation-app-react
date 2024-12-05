import React, { useState } from "react";
import './media.css'

// Importing the TextForm component
export default function TextForm(props) {
    const handleUpClick = (e) => {
        if (text.length == 0) {
            alert("Please enter a text")
        }
        // console.log("uppercase was clicked " + text);
        else{let newText = text.toUpperCase();
        setText(newText);
        }
    }
    const handleOnChange = (event) => {
        // console.log("onChange ");
        setText(event.target.value);

    }
    const handleLowClick = (e) => {
        if (text.length == 0) {
            alert("Please enter a text")
        }
        else { 
            let newText = text.toLowerCase();
        setText(newText);}
    }
    const [text, setText] = useState('');
    const clearText = () => {
        if (text.length == 0) {
            alert("Please enter a text")
        }
        else{
        let newText = ('');
        setText(newText);
        }
    }
    const copyText = () => {
        if (text.length == 0) {
            alert("Please enter a text")
        }
        else if (text.length > 0) {
            navigator.clipboard.writeText(text);
            alert("Text copied successfully")
        }
    }
    const removeExtraSpace = () => {
        if (text.length == 0) {
            alert("Please enter a text")
        }
        else{
        let newText = text.replace(/\s+/g, " ");
        setText(newText);
        }    
    }
    let theStyle = {
        color: "red",
        fontWeight: "bold"
    }
 
    return (
        <>
            <div className="container " >
                <h1 className='my-3 mx-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="10"></textarea>
                </div>
                <div className="media">
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase </button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase </button>
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear All</button>
                <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>
                <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
                </div>

            </div>
            <div className="container my-3">
                <h2 className="my-4 mx-3">Your text summary</h2>
                <p className="my-4 mx-3"><b style={theStyle}>{text.split(" ").filter(Boolean).length}</b> word & <b style={theStyle}>{text.length} </b>Characters </p>
                <p className="my-4 mx-3">Reading time for above words: <b style={theStyle} >{0.008 * text.split(" ").filter(Boolean).length}</b> minutes</p>
                {/* <h2>Preview</h2>
            <p>{text}</p> */}

            </div>
        </>
    );
}
