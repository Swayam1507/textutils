import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Textarea from "./components/textarea.js";
import React,{useState} from 'react'
import About from "./components/About.js";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
let title = "SWAYAM";
function App() {
  const [Mode, setMode] = useState("light");
  const [Style, setStyle] = useState({
    color:"black"
  });
  const toggleMode=()=>{
    if(Mode==="light"){
      setMode("dark");
      setStyle({color:"white"});
      document.body.style.backgroundColor="black";
      showAlert("dark mode enabled","success");
    }
    else{
      setMode("light");
      setStyle({color:"black"});
      document.body.style.backgroundColor="white";
      showAlert("light mode enabled","success");
    }
  }
  const [Alertt, setAlertt] = useState(null);
  function showAlert(msg,type){
    // function capitalize(msg){
      let lowerText=msg.toLowerCase();
      msg= msg.charAt(0).toUpperCase()+lowerText.slice(1);
    // }
      setAlertt({
        message:msg,
        type:type
      });
      setTimeout(() => {
        setAlertt(null);
      }, 5000);
  }
  // const [Blue, setBlue] = useState(
  //   null
  // )
  // const [Color, setColor] = useState("white");
  // function Bluish(){
  //   // document.getElementsByTagName("nav").backgroundColor="blue";
  //   console.log("adfl;kj");
  //   setBlue({
  //     color:"white",
  //     backgroundColor:"blue"
  //   })
  // }
  const [Bluish, setBluish] = useState("");
  function changeToBlue(){
    console.log(" lkjsdflj; ")
    setBluish("Blue");
  }

  return (
      <>
    <Router>

      <Navbar title={title} Mode={Mode} ToggleMode={toggleMode} Style={Style} Bluish={Bluish} changeToBlue={changeToBlue} />
      <Alert Alertt={Alertt}  />
      {/* <div className="container my-3"> */}
        
      <Routes>
      <Route  path="/about" element={ <About /> }/>
        {/* <About /> */}
      {/*  </Route> */}
      <Route  path="/" element={<Textarea Mode={Mode} showAlert={showAlert} />}/>
        {/* <Textarea Mode={Mode} showAlert={showAlert} /> */}
      {/* </Route> */}
      {/* <Route element={<h1>error! not found!</h1>} /> */}
      </Routes>
      {/* </div> */}
      {/* <About /> */}
      </Router>
     </>
  );
}

export default App;
