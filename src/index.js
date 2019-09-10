import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  //need to initialize two pieces of state
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  //always takes an => func (instead of componentDidMount([]array indicates it runs only once )
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErrorMessage(err.message)
    );
  }, []);

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
