import React, { useState, useEffect } from 'react';

const Ruler = ({ width, height, unit, direction, attributes }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const {
    opacityRuler
  } = attributes;
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
        <div className="ruler-horizontal" style={{ width: '100%', height: '10px', position: 'absolute', left: 0, opacity:opacityRuler }}>
          {horizontalMarks.map((mark, index) => (
            <div key={index} style={{ position: 'absolute', left: `${mark}px`, height: '100%' }}>
              <span style={{ display: 'block', position: 'absolute', bottom: '0px', height: '10px', width: '2px', backgroundColor: 'black' }}></span>
              <span style={{ display: 'block', position: 'absolute', top: '-1px',left: '3px', fontSize: '9px' }}>{mark}</span>
              {Array.from({ length: 4 }, (_, i) => (
                <span key={i} style={{ position: 'absolute', top: '0', left: `${(i + 1) * (unit / 5)}px`, height: '5px', width: '1px', backgroundColor: 'gray' }}></span>
              ))}
            </div>
          ))}
        </div>
      )}
      {direction === 'vertical' && (
        <div className="ruler-vertical" style={{ width: '10px', height: `${height}px`, position: 'absolute', top: '-1px',opacity:'.4',background:'red' }}>
          {verticalMarks.map((mark, index) => (
            <div key={index} style={{ position: 'absolute', top: `${mark}px`, width: '100%' }}>
              <span style={{ display: 'block', position: 'absolute', right: '0px', width: '10px', height: '2px', backgroundColor: 'black' }}></span>
              <span style={{ display: 'block', position: 'absolute', writingMode:'vertical-rl', textOrientation:'upright',letterSpacing:'-2px',top:'2px', fontSize: '9px' }}>{mark}</span>
              {Array.from({ length: 4 }, (_, i) => (
                <span key={i} style={{ position: 'absolute', left: '0', top: `${(i + 1) * (unit / 5)}px`, width: '5px', height: '1px', backgroundColor: 'gray' }}></span>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Ruler;
