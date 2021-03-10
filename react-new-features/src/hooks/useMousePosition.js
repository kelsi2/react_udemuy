import { useState, useEffect } from 'react';

const useMousePosition = () => {
  // x and y are updated together, this is the only time it's ok to store state as an object instead of separate useState calls
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
}

export default useMousePosition;