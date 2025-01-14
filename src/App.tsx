import SongGroup from "./components/SongGroup";

function App() {
  let songs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5", "Song 6"];

  const handleSelectedSong = (song: string) => {
    console.log(song);
  };

  return (
    <SongGroup
      songs={songs}
      heading="Library"
      onSelectedSong={handleSelectedSong}
    />
  );
}

export default App;
