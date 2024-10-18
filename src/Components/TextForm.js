import React, {useState} from "react";



export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase !!", "Success:");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" +  text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase !!", "Success:");
    }
    const handleClearClick = ()=>{
        let newText = ('');
        setText(newText)
        props.showAlert("The text has been cleared !!", "Success:");
    }
    const handleCopyClick = ()=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("The text has been copied !!", "Success:");
    }

    const handleExtraSpace = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space has been removed !!", "Success:");
    }
    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Converted to Voice Recognition !!", "Success:");
    }
    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
        <h1 className="mb-3">{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e':'white', color: props.mode==='dark' ? 'white':'#042743'}} rows="8"> </textarea>
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-4" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-4" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-4" onClick={handleClearClick}>Clear Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-4" onClick={handleCopyClick}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-2 my-4" onClick={handleExtraSpace}>Remove Extra Space</button>
        <button disabled = {text.length===0} type="submit" className="btn btn-success mx-2 my-2"onClick={speak} >Speak</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark' ? '#13466e':'white', color: props.mode==='dark' ? 'white':'#042743'}} rows="8"> </textarea>
        
    </div>
    </>
  );
}
