import React from 'react';
import CardPerfils from './components/CardPerfils/CardPerfils';
import Card from './components/Card/Card';
import './App.css';
import { profiles, numberRandom } from './utils/utils.js';

console.table(profiles);

function App() {
  const [perfils, setPerfils] = React.useState(0);
  const backwardFunction = () => {
    if (perfils === 0) {
      setPerfils(profiles.length - 1);
    } else {
      setPerfils(perfils - 1);
    }
  };
  const fowardFunction = () => {
    if (perfils === profiles.length - 1) {
      setPerfils(0);
    } else {
      setPerfils(perfils + 1);
    }
  };
  const supriseMe = () => {
    setPerfils(numberRandom(profiles.length));
  };
  return (
    <CardPerfils>
      <Card
        name={profiles[perfils].name}
        job={profiles[perfils].job}
        description={profiles[perfils].description}
        img={profiles[perfils].image}
        backwardFunction={backwardFunction}
        fowardFunction={fowardFunction}
        supriseMe={supriseMe}
      />
    </CardPerfils>
  );
}

export default App;
