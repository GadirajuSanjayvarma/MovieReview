import React, { useEffect, useState } from "react";
import "../App.css";
import Header from "./Header";
import HtmlBanner from "./HtmlBanner";
import Movies from "./Movies";
function Home(props) {
  const array = [
    "Trending shows",
    "Hollywood movies",
    "bollywood movies",
    "Tollywood movies",
  ];
  const [Movie,setMovie]=useState({"Search":""});

  useEffect(()=>{
    
  fetch('http://www.omdbapi.com/?s=dark&apikey=ad9ee299&plot=short&page=1') 
 .then((movies)=>movies.json())
 .then((result)=>setMovie(result)) 

  },[]);
  
  return (
    <div className="container1">
      <div className="header1">
        <Header navigation={props.navigation}/>
      </div>
      <div className="banner1">
        <HtmlBanner />
      </div>
      <div className="body">
        <Movies heading={array[0]} data={Movie["Search"]} />
        <Movies heading={array[1]} data={Movie["Search"]} />
        <Movies heading={array[2]} data={Movie["Search"]} />
        <Movies heading={array[3]} data={Movie["Search"]} />
      </div>
    </div>
  );
}

export default Home;
