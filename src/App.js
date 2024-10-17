// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App(){
  const [mode, setMode] = useState('light');//check whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark mode has been enabled !!" , "Success:");
      document.title = "Text_Converter | Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode has been enabled !!" , "Success:");
      document.title = "Text_Converter | Light Mode";
    }
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<><Navbar title="TextConverter" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode} /></>} />
        <Route path="/about" element={<><Navbar title="TextConverter" aboutText="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} /><About /></>} />
      </>
    )
  );
  // return(
  //     <>
  //  <Navbar title="TextConverter" aboutText="About" mode={mode} toggleMode={toggleMode}/>
  //  <Alert alert={alert}/>
  //  <div className="container my-3">
  //   <TextForm showAlert={showAlert} heading="Enter the text here to analyze below" mode={mode} />
  //  </div>
  //  {/* <About/> */}
  //     </>
  // );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
