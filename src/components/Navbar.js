import PropTypes from "prop-types";
import React from 'react';
import  {Link} from "react-router-dom";
import ".././cssOfComponents/Navbar.css"
function Navbar(props){
  // const [Mode, setMode] = useState(props.Mode);
  // const [Style, setStyle] = useState({
  //   color:"black"
  // });
  
    // const toggleMode=()=>{
    //   if(Mode==="light"){
    //     setMode("dark");
    //     setStyle({color:"white"});
    //     document.body.style.backgroundColor="black";
    //   }
    //   else{
    //     setMode("light");
    //     setStyle({color:"black"});
    //     document.body.style.backgroundColor="white";
    //   }
    // }
    // function change(){
    //   if(Mode==="dark"){
    //     setStyle({color : "black"});
    //   }
    //   else{
    //     setStyle({color : "white"});
    //   }
    // }
    
    return(
        <>
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode} ${props.Bluish}`} >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="circle1" onClick={props.changeToBlue} ></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
      <div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.ToggleMode}/>
  <label class="form-check-label" for="flexSwitchCheckDefault" style={props.Style}  >Enable dark mode</label>
</div>
      
    </div>
  </div>
</nav>
    </>
    
    );
    
  }
  
  Navbar.propTypes={title : PropTypes.string };
  Navbar.defaultProps = {title : "vidhi"};


export default Navbar;
