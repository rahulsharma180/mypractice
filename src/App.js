import Navbar from './component/Navbar';
import './App.css';
// import About from './component/About';
import TextForm from './component/TextForm';
import React, { useState } from 'react'

 
function App() {

  const [mode, setMode] = useState('light');

   const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      
    }
  
   }


  return (
    <> 
      <Navbar title="New Navbars" aboutText ="About text" mode={mode} toggleMode={toggleMode}/>  
       
      <div className="container my-3">
        <TextForm heading="My Heading" mode={mode}/>
        
     
     </div>
     {/* <About/> */}
    </>
  );
}

export default App;
