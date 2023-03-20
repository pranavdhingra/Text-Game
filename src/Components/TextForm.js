import React,{useState} from 'react';

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success")
    }

    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase!','success')
    }

    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text);
        let newText = ("");
        setText(newText);
        props.showAlert("Cleared the screen!","success")
    }

    const handleExtraSpace = () =>{
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert("Removed extra spaces!","success")
    }

    const handleCopy = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Text coiped!","success")
    }

    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }

    const[text,setText] = useState("");

  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
  <h1>{props.heading}</h1>
<div className="mb-3">
<textarea className="form-control"value={text} onChange={handleOnChange} 
style={{backgroundColor: props.mode ==='dark'?'#13466e':'white',color:props.mode ==='dark'?'white':'#042743'}}
id="exampleFormControlTextarea1" rows="8"></textarea>
</div>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
  <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read.</p>
        <h2>Preview</h2>
        {text?text:"Nothing to preview!"}
    </div>
    </>
  )
}
