import React, { useState } from 'react';
function Textarea(props) {
    const [text, setText] = useState('');
    const Change=(event) =>{
        // console.log("changed");
        setText(event.target.value);
    };
    const ClickUpper=() =>{
        // console.log(text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("changed to uppercase","success")
    };
    const ClickLower=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("changed to lowercase","success")
    }
    const ClickClear=()=>{
        setText("");
        props.showAlert("text cleared","success")
    }
    // setText('alsdkjf');
    return (
        <>
            <div className="mb-3 container">
                <h1 className="mb-3" style={{color: props.Mode==="light"?"black":"white"}}>Input text </h1>
                <textarea  placeholder='Enter something' className="form-control mb-3" value={text} onChange={Change} id="exampleFormControlTextarea1" rows="7"></textarea>
                <button className="btn btn-primary mx-2" onClick={ClickUpper}>click to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={ClickLower}>click to Lowercase</button>
                <button className="btn btn-danger mx-2" onClick={ClickClear}>clear</button>
            </div>
            <div className="container" style={{color: props.Mode==="light"?"black":"white"}}>
                <p>total words : {text.split(" ").length} total characters : {text.length}</p>
                <h1>Summary</h1>
                <p>{text===""?"Enter something in above textbox for summary":text}</p>
            </div>
        </>
    );
}
export default Textarea;