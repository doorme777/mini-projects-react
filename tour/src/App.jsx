import { useState } from 'react';
import Header from '@components/header/header';
import Layout from '@components/Layout/Layout';
import ToursGrid from '@components/ToursGrid/ToursGrid';
import ToursCard from '@components/ToursCard/ToursCard';
import listOfTours from '@utils/utils';
import './App.css';

function App() {
  const [tours, setTours] = useState(listOfTours);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  return (
    <>
      <Layout>
        <Header />
        <ToursGrid>
          {listOfTours.map((tour) => {
            return (
              <ToursCard
                key={tour.id}
                {...tour}
                removeTour={() => removeTour(tour.id)}
              />
            );
          })}
        </ToursGrid>
      </Layout>
    </>
  );
}

export default App;
