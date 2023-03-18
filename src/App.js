// import logo from './logo.svg';
import './App.css';
import About from './components/About';
// import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import { useState } from 'react';
import { BrowserRouter,  Routes,
  Route,
} from "react-router-dom";
function App() {
  // const [alert, setAlert] = useState(null);
  // const showalert =(message,type)=>{
  //     setAlert({
  //       msg:message,
  //       type:type
  //     })
  // }
  return (
    
      <BrowserRouter>
      <Navbar title = "TextUtils" abouttext= "About"/>
      {/* <Alert /> */}

      <div className="container my-3">
      <Routes>
          <Route path='/about' element={<About/>}/>
            
          
          <Route path='/' element={<TextForm heading="Enter The Text To Analyse"/>}/>
          
          

      </Routes>
        
       

      </div>
      </BrowserRouter>
      
    
  );
}

export default App;
