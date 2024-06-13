import { createContext, useState } from 'react';
import listOfTours from '../utils/utils.js';

const TourContext = createContext();

const TourProvider = ({ children }) => {
  const [tour, setTour] = useState(listOfTours);
  return (
    <TourContext.Provider value={{ tour, setTour }}>
      {children}
    </TourContext.Provider>
  );
};

export default { TourContext, TourProvider };
