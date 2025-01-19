// import SongGroup from "./components/SongGroup";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import Like from "./components/Like";
// import NavBar from "./components/NavBar";
// import Items from "./components/Items";
//import { useState } from "react";
import Form from "./components/Form";
import "./App.css";

function App() {
  //   let songs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5", "Song 6"];

  //   // [false, true]

  //   const [alertVisible, setAlertVisible] = useState(false);

  //   const [cartItems, setCartItems] = useState(["Item 1", "Item 2", "Item 3"]);

  //   const handleSelectedSong = (song: string) => {
  //     console.log(song);
  //   };

  //   return (
  //     <>
  //       <SongGroup songs={songs} onSelectedSong={handleSelectedSong} />
  //       {alertVisible && (
  //         <Alert onClose={() => setAlertVisible(false)}>This is a warning!</Alert>
  //       )}
  //       <Button color="primary" onClick={() => setAlertVisible(true)}>
  //         Don't Click Me
  //       </Button>
  //       <Like onClick={() => console.log("Liked")} />
  //       <NavBar itemsCount={cartItems.length} />
  //       <Items items={cartItems} onClear={() => setCartItems([])} />
  //     </>
  //   );
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
