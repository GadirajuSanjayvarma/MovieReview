import React, { useEffect} from "react";
import "../App.css";
import Header from "./Header";
import HtmlBanner from "./HtmlBanner";
import Movies from "./Movies";
import { connect } from "react-redux";
import fetchHomeResults from "../redux/Actioncreators";

const mapStateToProps = (state) => {
  return {
    movies: state.homeresults,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchHomeResults: () => dispatch(fetchHomeResults()),
});

function Home(props) {
  const array = [
    "Trending Movies",
    "Trending shows",
    "Trending Action Movies",
    "Trending Animation shows",
    "Golden movies",
  ];

  useEffect(() => {
    props.fetchHomeResults();
  }, []);
  //console.log(props.movies);
  return (
    <div className="container1">
      
      <div className="header1">
        <Header navigation={props.navigation} />
      </div>
      <div className="banner1">
        <HtmlBanner />
      </div>

      <div className="body">
        <Movies heading={array[0]} data={props.movies} />
        <Movies heading={array[1]} data={props.movies} />
        <Movies heading={array[2]} data={props.movies} />
        <Movies heading={array[3]} data={props.movies} />
        <Movies heading={array[4]} data={props.movies} />
      </div>
    </div>
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
