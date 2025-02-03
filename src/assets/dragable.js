import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';

const DraggableTest = ({ x, y, onDrag, children, activeDevice, style  }) => {
  const draggableRef = useRef(null);
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const [linePosition, setLinePosition] = useState({ x: null, y: null });
  const [temporaryZIndex, setTemporaryZIndex] = useState(null); 


  useEffect(() => {
    if (draggableRef.current) {
      const element = draggableRef.current;
      element.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [x, y, activeDevice]);

  const handleDragStart = () => {
    setTemporaryZIndex(1000); 
  };

  const handleDrag = (e, data) => {
    onDrag(e, data);
    setPopup({ visible: true, x: data.x, y: data.y });
    setIsDragging(true);
    setLinePosition({ x: data.x, y: data.y });
  };

  const handleStop = () => {
    setPopup({ ...popup, visible: false });
    setIsDragging(false);
    setLinePosition({ x: null, y: null });
    setTemporaryZIndex(null); 
  };

  return (
    <>
  
        {linePosition.x !== null && linePosition.y !== null && (
          <>
            <div
              className="line-horizontal"
              style={{
                position: 'absolute',
                top: `${linePosition.y}px`,
                left: 0,
                width: '100%',
                height: '1px',
                backgroundColor: 'var(--ruler-color)',
                zIndex: 1000,
              }}
            />
            <div
              className="line-vertical"
              style={{
                position: 'absolute',
                left: `${linePosition.x}px`,
                top: 0,
                width: '1px',
                height: '100%',
                backgroundColor: 'var(--ruler-color)',
                zIndex: 1000,
              }}
            />
          </>
        )}
      
      <Draggable
        onStart={handleDragStart} 
        position={{ x, y }}
        onDrag={handleDrag}
        onStop={handleStop}
        innerRef={draggableRef}
      >
        <div
          className="draggable"
          style={{
            position: 'absolute',
            cursor: 'move',
            border: isDragging ? '2px dashed #2e323c' : 'none',
            ...style 
          }}
          data-desktop-x={x}
          data-desktop-y={y}
          data-tablet-x={x * (768 / 1920)}
          data-tablet-y={y * (768 / 1920)}
          data-mobile-x={x * (375 / 1920)}
          data-mobile-y={y * (375 / 1920)}
        >
          {children}
        </div>
      </Draggable>
   
      {popup.visible && (
        <div
          className="popup"
          style={{
            position: 'absolute',
            transform: `translate(${popup.x - 5}px, ${popup.y - 40}px)`,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: 'white',
            padding: '5px',
            borderRadius: '3px',
            zIndex: 1000,
            minWidth: '80px',
            fontSize: '9px',
            textAlign: 'left',
            textTransform: 'capitalize',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div>
              <div>{`X ${popup.x} `}</div>
              <div>{`Y ${popup.y} `}</div>
            </div>
            <div>{activeDevice}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default DraggableTest;
