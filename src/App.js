import React, {useState} from "react";
//import Styles
import "./styles/app.scss";
// Adding Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
// import Util
import data from "./utils";


function App() {
  //State
  const [song, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(song[0])
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong={currentSong} />
      <Library song={song}/>
    </div>
  );
}

export default App;
