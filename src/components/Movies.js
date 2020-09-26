import React from 'react';
import '../styles/Moviesstyles.css';

function Movies(props)
{
  console.log(props.data); 
  var render_movies;
  if(props.data){
     render_movies=props.data.map((show,index)=>{
      return(
  
          <div key={index} className="movie_render">
            <img src={show.Poster} alt="loading"/>
            <p>{show.Title}</p>
            </div>
  
      );
  
    });
  } 
  else{

    render_movies="<p>loading</p>";

  }
  



    return(
        <div>

        <div>
    <h3 style={{color:"white"}}>{props.heading}</h3>
        </div>
        <div className="container_movies">
           {render_movies}
         </div>
        </div>
    );


}


export default Movies;