import React, {  useState } from "react";
import "./styles.css";
import {useHistory} from 'react-router-dom';

function Header() {
  const [width,setWidth]=useState(null);
  const history=useHistory();
  return (
    <div className="header">
     <button className="elements button" onClick={()=>{
       setWidth("250px");

     }}><i className="fa fa-bars icon" ></i></button>
     <p className="elements logo">MovieReview</p>
     <div className="elements" >
    
     <button  className="elements search-input" onClick={()=>{history.push('/search')}}> <i className=" elements fa fa-search fa-lg" ></i></button>
     </div>
        
    <div id="mySidenav" className="sidenav" style={{width:width}}>
      <button href="/" className="closebtn button" onClick={()=>{setWidth("0%")}}>&times;</button>
      <a href="/">About</a>
      <a href="/">Services</a>
      <a href="/">Clients</a>
      <a href="/">Contact</a>
      <a href='/' >Login/Signup</a>
    </div>



      </div>
  );
}

export default Header;
