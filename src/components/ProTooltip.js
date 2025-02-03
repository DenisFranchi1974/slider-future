import React from 'react';
import { Tooltip } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import LockIcon from '@mui/icons-material/Lock';

const ProTooltip = ({
    tooltipProTop = '16px',  
    tooltipProRight = '26px',   
}) => (
  <Tooltip
    placement="top"
    style={{
      padding: "10px",
      maxWidth: "300px",
      borderRadius: "4px",
    }}
    text={
      <span>
        {__("Available in the ", "slider-future")}{" "}
        <a
          style={{ color: 'var(--primary-color)', fontSize: '13px', fontWeight: 'bold' }}
          href="https://sliderfuture.franchiwebdesign.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {__("Pro version", "slider-future")}
        </a>
      </span>
    }
  >
    <LockIcon
      className="tooltip-icon-pro"
      style={{
        top: tooltipProTop,
        width: '16px',
        height: '16px',
        right: tooltipProRight,
        position: 'absolute',
        fill: 'var(--pro-color)',
        zIndex: '999',
        filter: 'drop-shadow(0 4px 8px rgba(255, 215, 0, 0.5))'
      }}
    />
  </Tooltip>
);

export default ProTooltip;