import { useState } from "react";

interface Props {
  songs: string[];
  onSelectedSong: (song: string) => void;
}

function SongGroup({ songs, onSelectedSong }: Props) {
  const [selectedSong, setSelectedSong] = useState(-1);

  return (
    <>
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
