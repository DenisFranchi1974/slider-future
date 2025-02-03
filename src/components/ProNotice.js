import React from 'react';
import { __ } from "@wordpress/i18n";
import LockIcon from '@mui/icons-material/Lock';

const ProNotice = ({
  radiusOneProNotice = '8',
  radiusTwoProNotice = '8'
}) => (
    <p
    className="notice components-base-control__pro"
    style={{ 
      margin: 0, 
      borderRadius: '0px 0px ' + radiusOneProNotice +'px ' + radiusTwoProNotice + 'px' 
    }}
  >
     <LockIcon
      className="tooltip-icon-pro"
      style={{
        width: '16px',
        height: '16px',
        marginBottom: '-2px',
        marginRight: '6px',
        fill: 'var(--pro-color)',
        zIndex: '999',
        filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.5))'
      }}
    />
    
           {__("Available in the ", "slider-future")}{" "}
           <a
             style={{ color: 'var(--primary-color)', fontSize: '13px', fontWeight: 'bold' }}
             href="https://sliderfuture.franchiwebdesign.com/"
             target="_blank"
             rel="noopener noreferrer"
           >
             {__("Pro version", "slider-future")}
           </a>
         
  </p>
);

export default ProNotice;