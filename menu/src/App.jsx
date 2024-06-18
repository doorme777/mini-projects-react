import { useState } from 'react';
import Layout from './components/Layout/Layout';
import Nav from './components/Nav/Nav';
import ContainerCards from './components/ContainerCards/ContainerCards';
import Cards from './components/Cards/Cards';
import { data, sections } from './utils/utils';
import './App.css';

function App() {
  const [food, setfood] = useState(data);
  const [section, setsection] = useState(sections);

  const handleSection = (nameSection) => {
    console.log(nameSection);
    if (nameSection === 'all') {
      setfood(data);
      return;
    }
    const newFood = data.filter((item) => item.section === nameSection);
    setfood(newFood);
  };

  return (
    <Layout>
      <header>
        <h1>Our menu</h1>
        <div className="border-bottom"></div>
      </header>
      <Nav section={section} handleSection={handleSection} />
      <ContainerCards>
        {food && food.map((item, index) => <Cards key={index} {...item} />)}
      </ContainerCards>
    </Layout>
  );
}

export default App;
