import SongGroup from "./components/SongGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let songs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5", "Song 6"];

  const handleSelectedSong = (song: string) => {
    console.log(song);
  };

  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <>
      <h1>Musicastor</h1>
      <SongGroup songs={songs} onSelectedSong={handleSelectedSong} />
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>This is a warning!</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisible(true)}>
        Don't Click Me
      </Button>
    </>
  );
}

export default App;
