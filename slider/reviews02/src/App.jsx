import React from 'react';
import 'animate.css';

import CardPerfils from './components/CardPerfils/CardPerfils';
import Card from './components/Card/Card';
import Slider from './hooks/Slider.jsx';
import MovePerfils from './components/MovePerfils/MovePerfils';
import { profiles } from './utils/utils.js';
import { moveRight, moveLeft } from './utils/cardMovement.js';
import './App.css';

function App() {
  const [perfils, setPerfils] = React.useState(0);
  const backwardFunction = () => {
    if (perfils === 0) {
      setPerfils(profiles.length - 1);
    } else {
      setPerfils(perfils - 1);
    }

    moveLeft();
  };
  const fowardFunction = () => {
    if (perfils === profiles.length - 1) {
      setPerfils(0);
    } else {
      setPerfils(perfils + 1);
    }

    moveRight();
  };

  return (
    <CardPerfils>
      {Slider(fowardFunction)}
      <Card
        name={profiles[perfils].name}
        job={profiles[perfils].job}
        description={profiles[perfils].description}
        img={profiles[perfils].image}
      />
      <MovePerfils
        backwardFunction={backwardFunction}
        fowardFunction={fowardFunction}
      />
    </CardPerfils>
  );
}

export default App;
