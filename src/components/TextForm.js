import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log('Uppercase was Clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }
    const [text , setText ] = useState('')
    const handleUpText =(event)=>{
        setText(event.target.value)
    }
    const handlelowClick =()=>{
        let lowtext = text.toLowerCase();
        setText(lowtext);
    }
  return (
    <>
        <div className='container'>
        
            
        <div className="form-group mb-3">
            <label htmlFor="mybox">{props.heading} </label>
            <textarea className="form-control" value={text} onChange={handleUpText} d="mybox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}> Convert To Uppercase</button>
        <button className='btn btn-primary' onClick={handlelowClick}> Convert To Lowercase</button>
         </div>
        <div className='container my-3'>
            <h2>your Text Summary</h2>
            <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length) } words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} may took to read this..</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    
    </>
  )
    
}
