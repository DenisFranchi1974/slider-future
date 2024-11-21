import React from 'react';
import { Tooltip  } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
const DeviceSelector = ({ selectedDevice, onDeviceChange }) => {
  return (
    <div className="button-button-group-responsive">
        <div className="button-group-button-title">
        <ControlCameraIcon style={{fill:'var(--light-color)'}}/>
        <h2>{__('Position','slider')}</h2>
        </div>
        <div className="button-group-button">
    <Tooltip placement="top" text={__('Desktop','slider')}>
    <button onClick={() => onDeviceChange("desktop")} className={selectedDevice === 'desktop' ? 'active' : ''}>
    <PersonalVideoIcon />
    </button>
    </Tooltip>
    <Tooltip placement="top" text={__('Tablet','slider')}>
    <button onClick={() => onDeviceChange("tablet")} className={selectedDevice === 'tablet' ? 'active' : ''}>
    <TabletMacIcon />
    </button>
    </Tooltip>
    <Tooltip placement="top" text={__('Mobile','slider')}>
    <button onClick={() => onDeviceChange("mobile")} className={selectedDevice === 'mobile' ? 'active' : ''}>
    <SmartphoneIcon />
    </button>
    </Tooltip>
    </div>
  </div>
  );
};

export default DeviceSelector;
