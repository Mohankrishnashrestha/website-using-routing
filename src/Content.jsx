/* eslint-disable react/prop-types */
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Terms from "./component/Terms";
import Map from "./component/Map";
import "./content.css";
import Gallery from "./component/Gallery";
import Service from "./component/Service";
function Content({ content }) {
  switch (content) {
    case "Home":
      return <Home />;
    case "About":
      return <About />;
    case "Contact":
      return <Contact />;
    case "Gallery":
      return <Gallery />;
    case "Services":
      return <Service />;
    case "Terms":
      return <Terms />;
    case "Map":
      return <Map />;
  }
}

export default Content;
