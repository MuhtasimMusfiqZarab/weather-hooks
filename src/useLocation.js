//all of the hooks logics are put inside of here
import { useState, useEffect } from "react";

export default () => {
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

  //the convention in hooks is to return values inside of an array (for destructuring purpose)
  return [lat, errorMessage];
};
