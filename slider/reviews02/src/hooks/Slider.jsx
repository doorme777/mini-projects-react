import { useEffect } from 'react';

function Slider(forwardFunction) {
  useEffect(() => {
    const interval = setInterval(() => {
      forwardFunction();
    }, 4.2 * 1000);

    return () => clearInterval(interval);
  }, [forwardFunction]);
}

export default Slider;
