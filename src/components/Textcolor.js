import React, { useState, useEffect } from 'react';

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Textcolor = () => {
  const [textColor, setTextColor] = useState(getRandomColor);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextColor(getRandomColor);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="displing">
      <h1 className="before" style={{ color: textColor }}>
        Waiting for search
      </h1>
    </div>
  );
};

export default Textcolor;
