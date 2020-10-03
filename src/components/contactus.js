import React from "react";
import Header from "./Header";
import "../styles/contact.css";
import contact from "../data/contact";

function Renderresults() {
  return contact["Search"].map((show, index) => {
    return (
      <div key={index} className="contact-render">
        <a href={show.link}><img  src={show.Poster} alt="loading" /></a>
      </div>
    );
  });
}

function Contactus() {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <Header />
      </div>
      <div className="contact-body">
        {<Renderresults />}
        </div>
    </div>
  );
}

export default Contactus;
