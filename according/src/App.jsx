import { useState } from "react";
import Container from "./components/Container/Container";
import Accordin from "./components/Accordin/Accordin";
import { AccoridingData } from "./utils/utils";
import "./App.scss";

function App() {
  const [data, setData] = useState(AccoridingData);
  return (
    <>
      <Container>
        <h1>Questions</h1>

        {data.map((item, index) => {
          return <Accordin key={index} title={item.title} text={item.text} />;
        })}
      </Container>
    </>
  );
}

export default App;
