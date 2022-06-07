import React from "react";

export default function Alert(props) {
    // const [Alertt, setAlertt] = useState(null);
    // function showAlert(){
    //     setAlertt(props.msg);
    // }
    // // setAlertt(props.Alertt);
    // setAlertt("heyyy");
    // function capitalize(text){
    //   let lowerText=text.toLowerCase();
    //   return text.charAt(0).toUpperCase()+lowerText.slice(1);
    // }
    return (
    props.Alertt && <div className={`alert alert-${props.Alertt.type}`} role="alert"  >
      {props.Alertt.message}
    </div>
  );
}
