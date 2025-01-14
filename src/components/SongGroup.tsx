import { useState } from "react";

interface Props {
  songs: string[];
  heading: string;
  onSelectedSong: (song: string) => void;
}

function SongGroup({ songs, heading, onSelectedSong }: Props) {
  const [selectedSong, setSelectedSong] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {songs.length === 0 && <p>No songs in library</p>}
      <ul className="list-group">
        {songs.map((song, index) => (
          <li
            className={
              selectedSong === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedSong(index);
              onSelectedSong(song);
            }}
          >
            {song}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SongGroup;
