import React from "react";
//import Styles
import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
// import Util
import data from "./utils";


function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
