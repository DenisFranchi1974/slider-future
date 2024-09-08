import React, { useState, useEffect } from 'react';

const Ruler = ({ width, height, unit, direction }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const horizontalMarks = Array.from({ length: Math.ceil(windowWidth / unit) }, (_, i) => i * unit);
  const verticalMarks = Array.from({ length: Math.ceil(windowHeight / unit) }, (_, i) => i * unit);

  return (
    <div className="ruler-container" style={{ position: 'relative' }}>
      {direction === 'horizontal' && (
        <div className="ruler-horizontal" style={{ width: `${width}px`, height: `${height}px`, position: 'absolute', top: 0, left: 0, display: 'flex' }}>
          {horizontalMarks.map((mark, index) => (
            <span key={index} style={{ position: 'absolute', left: `${mark}px` }}>{mark}</span>
          ))}
        </div>
      )}
      {direction === 'vertical' && (
        <div className="ruler-vertical" style={{ width: `${width}px`, height: `${height}px`, position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column' }}>
          {verticalMarks.map((mark, index) => (
            <span key={index} style={{ position: 'absolute', top: `${mark}px` }}>{mark}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ruler;