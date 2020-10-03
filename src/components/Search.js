import React from "react";
import Header from "./Header";
import "../styles/searchstyles.css";
import { connect } from "react-redux";
import { fetchsearchResults } from "../redux/Actioncreators";
import SkeletonLoading from "./SkeletonLoading";

const mapStateToProps = (state) => {
  return {
    search: state.searchresults,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchsearchResults: (input_search) =>
    dispatch(fetchsearchResults(input_search)),
});

const Renderresults = (search) => {
  //console.log(search.search);
  const array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const load = array.map((ele, index) => {
    return (
      <div key={index} className="elements">
        <SkeletonLoading />
      </div>
    );
  });
  if (search.search.isLoading === false && search.search.results.length === 0) {
    return (
      <div>
        <p>Type something</p>
      </div>
    );
  }

  if (search.search.isLoading === true) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {load}
      </div>
    );
  } else {
    if (search.search.results !== null) {
      if (search.search.results["Response"] !== "False") {
        return search.search.results["Search"].map((show, index) => {
          return (
            <div key={index} className="elements">
              <img className="movieImage" src={show.Poster} alt="loading" />
            </div>
          );
        });
      } else {
        return (
          <div>
            <p>Type something</p>
          </div>
        );
      }
    } else {
      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {load}
        </div>
      );
    }
  }
};

function Search(props) {
  return (
    <div className="search-container">
      <div className="search-header">
        <Header />
      </div>
      <div className="input-element">
        <input
          className="input-tag"
          type="text"
          placeholder="Mad max fury road"
          onChange={(event) => {
            props.fetchsearchResults(event.target.value);
          }}
        />
        <i className="fa fa-search fa-lg "></i>
      </div>
      <div className="search-results">
        <Renderresults search={props.search} />
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
