import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import useLocation from "./useLocation";

const App = () => {
  //useLocation returns an array (thus need to destructure)
  const [lat, errorMessage] = useLocation();
  // what content to be rendered to the screen-----------------
  let content;
  if (errorMessage) {
    content = <div>Error: {errorMessage}</div>;
  } else if (lat) {
    content = <SeasonDisplay lat={lat} />;
  } else {
    content = <Spinner message="Please accept location request" />;
  }
  //return the jsx to be rendered (show it to the browser)
  return <div className="border red">{content}</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
