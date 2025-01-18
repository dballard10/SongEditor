import { useState } from "react";
import styled from "styled-components";
import { IoMusicalNotesSharp } from "react-icons/io5";

interface ListItemProps {
  active: boolean;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background-color: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  songs: string[];
  onSelectedSong: (song: string) => void;
}

function SongGroup({ songs, onSelectedSong }: Props) {
  const [selectedSong, setSelectedSong] = useState(0);

  return (
    <>
      <h1>
        Musicastor <IoMusicalNotesSharp />
      </h1>
      {songs.length === 0 && <p>No songs in library</p>}
      <List>
        {songs.map((song, index) => (
          <ListItem
            active={index === selectedSong}
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
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default SongGroup;
