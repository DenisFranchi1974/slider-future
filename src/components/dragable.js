import React, { useEffect, useRef, useState } from 'react';
import Draggable from 'react-draggable';
import Ruler from './ruler';

const DraggableTest = ({ x, y, onDrag, onClick, children, activeDevice}) => {
  const draggableRef = useRef(null);
  const [popup, setPopup] = useState({ visible: false, x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [containerHeight, setContainerHeight] = useState(600); // Altezza iniziale della slider

  useEffect(() => {
    if (draggableRef.current) {
      const element = draggableRef.current;
      element.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, [x, y, activeDevice]);

  const handleDrag = (e, data) => {
    onDrag(e, data);
    setPopup({ visible: true, x: data.x, y: data.y });
    setIsDragging(true);
  };

  const handleStop = () => {
    setPopup({ ...popup, visible: false });
    setIsDragging(false);
  };

  return (
    <>
      <div className="editor-container" style={{ position: 'relative', width: '100%', height: `${containerHeight}px` }}>
        <Ruler
          height={20}   // Altezza del righello orizzontale
          unit={100}    // Unità di misura (ad esempio, pixel)
          direction="horizontal"  // Imposta il righello come orizzontale
        />

        <Ruler
          width={20}    // Larghezza del righello verticale
          height={containerHeight}  // Altezza dinamica del righello verticale
          unit={100}    // Unità di misura
          direction="vertical"  // Imposta il righello come verticale
        />
      </div>
      <Draggable
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
            zIndex: 500,
          }}
          data-desktop-x={x}
          data-desktop-y={y}
          data-tablet-x={x * (768 / 1920)}
          data-tablet-y={y * (768 / 1920)}
          data-mobile-x={x * (375 / 1920)}
          data-mobile-y={y * (375 / 1920)}
          onClick={onClick} // Gestisce il click per selezionare l'elemento
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