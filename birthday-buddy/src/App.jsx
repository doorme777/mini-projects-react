import React from "react";
import Guests from "./components/Guests/Guests";
import SlideOfGuests from "./components/SlideOfGuests/SlideOfGuests";
import GuestsArray from "./utils/utils";
import "./App.css";

console.log(GuestsArray);

function App() {
  const [guests, setGuests] = React.useState(GuestsArray);
  return (
    <>
      <Guests>
        <h1>{guests.length} Birthdays Today</h1>
        <ul>
          {Boolean(guests) &&
            guests.map((guests) => (
              <SlideOfGuests key={guests.id} {...guests} />
            ))}
        </ul>
        <button onClick={() => setGuests([])}>Clear all guests</button>
      </Guests>
    </>
  );
}

export default App;
