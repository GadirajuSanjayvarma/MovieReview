import React from 'react';
import '../styles/Moviesstyles.css';

function Movies(props)
{
  //console.log(props.data);  
  const render_movies=props.data.map((show)=>{
    return(

        <div className="movie_render">
          <img src={show.image_url} alt="loading"/>
          <p>{show.name}</p>
          </div>

    );

  });



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