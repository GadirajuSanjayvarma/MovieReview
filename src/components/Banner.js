import React, { useEffect, useState } from 'react';
import './styles.css';
 

function Banner()
{
   const [backGround,setBackGround]=useState('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spider-man-far-from-home-1589312830.jpg');
  
    return(
       
        <div id="carouselExampleSlidesOnly" className="carousel slide silder" data-ride="carousel" >
        <div className="carousel-inner"  style={{backgroundImage: `url(${backGround})`}}>
          <div className="carousel-item active" >
               
            </div>
          <div className="carousel-item" >
          <button onClick={()=>{setBackGround('https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg')
             }}>click here</button>
             
           
            </div>
          <div className="carousel-item" >
          <p>hi</p>
            </div>
        </div>
      </div>

    );
}

export default Banner;