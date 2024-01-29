import React,{useState} from 'react'

export default function TextForm(props) {
    const handleOnClick=()=>{
        
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        setText(event.target.value)
    }
    const HandleOnClick=()=>{
        let lowText=text.toLowerCase();
        setText(lowText);
    }
    const cleartext=()=>{
        let clear=text.replace(text,"");
        setText(clear);
    }
    const TextReverse=()=>{
        //let reverse=text[];
        
        let arraysplit=text.split("");
        let reversestring=arraysplit.reverse();
        let reverse=reversestring.join("");
        setText(reverse);
    }
    const textmulti=()=>{
        let clicks=0;
        clicks=clicks+1
        setText(text*clicks)
    }
    const[text,setText]=useState("Enter text here");
  return (
    <>
    

            <div class="container">
                <h1>{props.heading}</h1>
           
            <textarea className="form-control" value={text} id="mybox" rows="8" onChange={handleOnChange}></textarea>
            <button type="button" class="btn btn-primary my-4 mx-2" onClick={handleOnClick}>Convert to Upperacase</button> 
            <button type="button" class="btn btn-primary my-4 mx-2" onClick={HandleOnClick}>Convert to Lower Case</button> 
            <button type="button" class="btn btn-primary my-4 mx-2" onClick={cleartext}>Clear Text</button> 
            <button type="button" class="btn btn-primary my-4 mx-2" onClick={TextReverse}>Reverse Text</button> 
            <button type="button" class="btn btn-primary my-4 mx-2" onClick={textmulti}>text multiply</button> 
            
            
            </div>
            <div className="container my=3">
                <h2>Your Text Summary</h2>
                <p>{(text.split(" ").length)-1} Words and {text.length} Characters</p>
                <p>{0.008*text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
                


            </div>
            
            
    
    </>
  )
}
