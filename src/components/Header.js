import React, {  useState } from "react";
import "./styles.css";

function Header() {
  const [width,setWidth]=useState(null);
 
  return (
    <div className="header">
     <button className="elements button" onClick={()=>{
       setWidth("250px");

     }}><i className="fa fa-bars icon" ></i></button>
     <p className="elements logo">MovieReview</p>
     <p className="elements login-button">Login/Signup</p>

        
    <div id="mySidenav" className="sidenav" style={{width:width}}>
      <button href="/" className="closebtn button" onClick={()=>{setWidth("0%")}}>&times;</button>
      <a href="/">About</a>
      <a href="/">Services</a>
      <a href="/">Clients</a>
      <a href="/">Contact</a>
    </div>



      </div>
  );
}

export default Header;
