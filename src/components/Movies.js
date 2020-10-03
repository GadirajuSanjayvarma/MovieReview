import React from "react";
import "../styles/Moviesstyles.css";
import SkeletonLoading from "./SkeletonLoading";

function Movies(props) {
  let render_movies;
  // console.log(props.data);
  if (props.data.isLoading === false) {
    render_movies = props.data.results.map((show, index) => {
      return (
        <div key={index} className="movie_render">
          <img src={show.Poster} alt="loading" />
          <p>{show.Title}</p>
        </div>
      );
    });
  } else {
    const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    const load = array.map((ele, index) => {
      return (
        <div key={index} className="movie_render">
          <SkeletonLoading />
        </div>
      );
    });
    render_movies = load;
  }

  return (
    <div>
      <div>
        <h3 style={{ color: "white" }}>{props.heading}</h3>
      </div>
      <div className="container_movies">{render_movies}</div>
    </div>
  );
}

export default Movies;
