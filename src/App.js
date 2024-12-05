import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
// import About from "./components/About";


// import {
//   BrowserRouter as Router,
//   Routes as Routes,
//   Route,

// } from "react-router-dom";



function App() {
  // const [text, setText] = useState("");
  // const [textLength, setTextLength] = useState(0);
  // const [wordCount, setWordCount] = useState(0);
  // const [sentenceCount, setSentenceCount] = useState(0);
  // const [charCount, setCharCount] = useState(0);
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.querySelectorAll('#mybox, #accordion').forEach(function(element) {
        element.style.backgroundColor = 'white';
      });

    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.querySelectorAll('#mybox, #accordion').forEach(function(element) {
        element.style.backgroundColor = 'grey';
      });


    }
  };


  return (
    <>
      {/* <Router> */}
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <div className="container mb-3" >
          <TextForm heading="Enter the text to analyze below"/>
          {/* /users = --> component 1
          /users/login = --> component 2 
          if exact is not used then in the both cases react will render the user component*/}
          {/* <Routes> */}
            {/* <Route exact path="/about" element ={<About />} ></Route> */}
            {/* <Route exact path="/" element = {<TextForm heading="Enter the text to  analyze below" />}> */}
            {/* </Route> */}
          {/* </Routes > */}
          {/* <About/> */}
        </div>

      {/* </Router> */}
    </>
  );

}


export default App;


