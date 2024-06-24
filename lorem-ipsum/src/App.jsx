import { useState } from "react";
import Layout from "./components/Layout/Layout.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Lorem from "./components/Lorem/Lorem.jsx";
import { TEXTS } from "./utils/utils.js";
import "./App.css";

function App() {
  const [texts, setTexts] = useState([]);
  const createLoremUpsum = (e) => {
    if (e > 8) return 0;

    console.log(e);
    e ||= 1;
    const newLorem = TEXTS.slice(0, e);
    setTexts(newLorem);
  };
  // CON UN FOR PUEDE SER PERO AUN
  return (
    <Layout>
      <Counter createLoremUpsum={createLoremUpsum} />
      <Lorem texts={texts} />
    </Layout>
  );
}

export default App;
