
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/about';
import alert from './components/alert';
import{
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from 'react-router-dom';
function App() {
  const [mode,setMode]=useState('light');//whether the adrk mode is enabled or mode
  const ToggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      showAlert("Dark Mode is Enabled","Success")
    }
    else{
      setMode('light');
      showAlert("Light Mode is Enabled","success");
    }
  }
  //alert
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
  return (
    <>
    
    
    <Navbar title="textutilis" abouttext="ABOUT" mode={mode} togglemode={ToggleMode}/>
    <alert alert={alert}/>
          <div className="container" my-4>
            <TextForm heading="Enter text to analyse" showAlert={showAlert} mode={mode}/>
          </div>
  
  
    
    
    
      


      
    </>
  );
}

export default App;
