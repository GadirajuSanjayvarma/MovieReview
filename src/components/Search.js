import React ,{useState}from "react";
import '../styles/searchstyles.css';

function Search() {
  const [results,setResults]=useState(null);
  function search_results(event)
  {
      if(event.target.value.length>3){
        fetch(`http://www.omdbapi.com/?s=${event.target.value}&apikey=ad9ee299&plot=short&page=1`) 
        .then((movies)=>movies.json())
        .then((result)=>setResults(result)) 
        .catch((err)=>{console.log(err)})
   
      }
      else
      {
        setResults(null);

      } 
    
  }
  function Renderresults()
  {
    if(results==null)
    {
      return(
      <p>plz search for something</p>
      );
    }
    else
    {
      if(results["Response"]!== "False"){
        return results["Search"].map((show,index)=>{
          return(
      
              <div key={index} className="elements">
                <img className="movieImage" src={show.Poster} alt="loading"/>
                </div>
      
          );
      
        });

      }
      else
      {
        return(
          <p>Movie not exists</p>
          );

      }
      
      


    }

  }


  return (
    <div className="search-container">
     <div className="input-element">
     <input className="input-tag" type="text" placeholder="Mad max fury road" onChange={(event)=>{search_results(event)}}/>
     <i className="fa fa-search fa-lg " ></i>
     </div>
     <div className="search-results"> 
      {<Renderresults/>}      
      </div>
    </div>
  );
}

export default Search;
