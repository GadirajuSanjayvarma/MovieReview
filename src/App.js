import React from "react";
import "./App.css";
import Header from "./components/Header";
import HtmlBanner from "./components/HtmlBanner";
import Movies from "./components/Movies";
function App() {
  const array = [
    "Trending shows",
    "Hollywood movies",
    "bollywood movies",
    "Tollywood movies",
  ];
  const trending_shows = [
    {
      image_url: "https://media.timeout.com/images/105306095/750/562/image.jpg",
      name: "The Crown",
    },
    {
      image_url: "https://media.timeout.com/images/105306130/750/562/image.jpg",
      name: "Orange is the New Black",
    },
    {
      image_url:
        "https://cdn.vox-cdn.com/thumbor/hcgSPWdy3jw-o4VMrASblDzFafc=/0x0:1200x675/620x413/filters:focal(504x242:696x434):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63930036/cq5dam.web.1200.675.0.jpeg",
      name: " Silicon Valley",
    },
    {
      image_url: "https://media.timeout.com/images/105636636/750/562/image.jpg",
      name: "Stranger Things",
    },
    {
      image_url: "https://media.timeout.com/images/105306095/750/562/image.jpg",
      name: "The Crown",
    },
    {
      image_url: "https://media.timeout.com/images/105306130/750/562/image.jpg",
      name: "Orange is the New Black",
    },
    {
      image_url:
        "https://cdn.vox-cdn.com/thumbor/hcgSPWdy3jw-o4VMrASblDzFafc=/0x0:1200x675/620x413/filters:focal(504x242:696x434):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/63930036/cq5dam.web.1200.675.0.jpeg",
      name: " Silicon Valley",
    },
    {
      image_url: "https://media.timeout.com/images/105636636/750/562/image.jpg",
      name: "Stranger Things",
    },
  ];
  return (
    <div className="container1">
      <div className="header1">
        <Header />
      </div>
      <div className="banner1">
        <HtmlBanner />
      </div>
      <div className="body">
        <Movies heading={array[0]} data={trending_shows} />
        <Movies heading={array[1]} data={trending_shows} />
        <Movies heading={array[2]} data={trending_shows} />
        <Movies heading={array[3]} data={trending_shows} />
      </div>
    </div>
  );
}

export default App;
