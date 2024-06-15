import React from 'react';
import CardPerfils from './components/CardPerfils/CardPerfils';

function App() {
  const [perfils, setPerfils] = React.useState(0);
  return (
    <CardPerfils>
      <figure>
        <img src="" alt="" srcset="" />
        <span className="decorationImage"></span>
      </figure>
      <div>
        <p></p>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <button>Suprise Me</button>
    </CardPerfils>
  );
}

export default App;
