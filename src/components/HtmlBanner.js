import React ,{useState}from 'react';
import './styles.css';

var slideIndex=1;


  function HtmlBanner()
{


  const[ClassN,setClassN]=useState(["block","none","none"]);
  
  function showSlides() {
    var i;
    var array1=[]
    for (i = 0; i < ClassN.length; i++) {
      array1[i]="none";
      
    }
    
    setClassN(array1);
    slideIndex++;
    if (slideIndex > ClassN.length) {slideIndex = 1}
    array1[slideIndex-1]= "block";
    setClassN(array1);
    //setTimeout(showSlides,0); // Change image every 2 seconds
  }
  
 
  return(
    <div >
    <div className="slideshow-container">
     <div className="fade1" style={{display:ClassN[0]}}>
     <button  onClick={showSlides} style={{backgroundColor:"black",marginLeft:"95%",marginTop:"25vh",color:"white"}}>{`>`}</button>
     <p>Money Heist</p>
     
     </div>
    <div  className="fade2"  style={{display:ClassN[1]}}>
    <button  onClick={showSlides} style={{backgroundColor:"black",marginLeft:"95%",marginTop:"25vh",color:"white"}}>{`>`}</button>
    <p>Tenet</p>
    </div>
    <div className="fade3"   style={{display:ClassN[2]}}>
    <button  onClick={showSlides} style={{backgroundColor:"black",marginLeft:"95%",marginTop:"25vh",color:"white"}}>{`>`}</button>
    <p>Joker</p>
    </div>
    
    </div>
    </div>


);



}


export default HtmlBanner;
