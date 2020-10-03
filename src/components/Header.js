import React, { useState } from "react";
import "./styles.css";
import { useHistory } from "react-router-dom";

function Header() {
  const [width, setWidth] = useState(null);
  const history = useHistory();
  return (
    
    <div className="header">
      <button
        className="elements button"
        onClick={() => {
          setWidth("250px");
        }}
      >
        <i className="fa fa-bars icon"></i>
      </button>
      <p className="elements logo">MovieReview<br /><span className="typing_animation">Redefining ways to know movies</span></p>
      <div className="elements">
        <button
          className="elements search-input"
          onClick={() => {
            history.push("/search");
          }}
        >
          {" "}
          <i className=" elements fa fa-search fa-lg"></i>
        </button>
      </div>

      <div id="mySidenav" className="sidenav" style={{ width: width }}>
        <button
          href="/"
          className="closebtn button"
          onClick={() => {
            setWidth("0%");
          }}
        >
          &times;
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            history.push("/search");
          }}
        >
          Search
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            history.push("/contact");
          }}
        >
          Contactus
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            history.push("/aboutus");
          }}
        >
          Aboutus
        </button>
        <button
          className="sidenav-button"
          onClick={() => {
            history.push("/authorization");
          }}
        >
          Login/signup
        </button>
      </div>
    </div>
    
  );
}

export default Header;
