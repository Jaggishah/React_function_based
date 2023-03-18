import React, {useState} from 'react'

export default function About() {
    const [myStyle,setmystle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })
    const [btntext1 ,newbtnText] = useState('Dark Mode')
    const toogleChange =()=>{
        let newstyle ={
            color : 'black',
            backgroundColor : 'black'
        }
        if (myStyle.backgroundColor === 'white'){
            setmystle(newstyle)
            newbtnText('Light Mode')
        }
        else if(myStyle.backgroundColor === 'black'){
            setmystle({
                color : 'black',
                backgroundColor : 'white'
            })
            newbtnText('Dark Mode')
        }
        }
        
  return (
    <>
<div className='container text-center my-3'style={myStyle}>
<div className="card my-5" >
  <ul className="list-group list-group-flush ">
    <li className="list-group-item">An item</li>
    <li className="list-group-item">A second item</li>
    <li className="list-group-item">A third item</li>
  </ul>
 
</div>
<button className='btn btn-primary my-3' onClick={toogleChange}> {btntext1}</button>
</div>
    
    </>
    
  )
}
