import React, { lazy, Suspense } from 'react';
import { Tooltip  } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
const PersonalVideoIcon = lazy(() => import('@mui/icons-material/PersonalVideo'));
const TabletMacIcon = lazy(() => import('@mui/icons-material/TabletMac'));
const SmartphoneIcon = lazy(() => import('@mui/icons-material/Smartphone'));
const ControlCameraIcon = lazy(() => import('@mui/icons-material/ControlCamera'));
const DeviceSelector = ({ selectedDevice, onDeviceChange }) => {
  return (
    <div className="button-button-group-responsive">
        <div className="button-group-button-title">
        <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}>
          <ControlCameraIcon style={{ fill: 'var(--light-color)' }} />
        </Suspense>
        <h2>{__('Position','slider-future')}</h2>
        </div>
        <div className="button-group-button">
    <Tooltip placement="top" text={__('Desktop','slider-future')}>
    <button onClick={() => onDeviceChange("desktop")} className={selectedDevice === 'desktop' ? 'active' : ''}>
    <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}>
              <PersonalVideoIcon />
            </Suspense>
    </button>
    </Tooltip>
    <Tooltip placement="top" text={__('Tablet','slider-future')}>
    <button onClick={() => onDeviceChange("tablet")} className={selectedDevice === 'tablet' ? 'active' : ''}>
    <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}>
              <TabletMacIcon />
            </Suspense>
    </button>
    </Tooltip>
    <Tooltip placement="top" text={__('Mobile','slider-future')}>
    <button onClick={() => onDeviceChange("mobile")} className={selectedDevice === 'mobile' ? 'active' : ''}>
    <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}>
              <SmartphoneIcon />
            </Suspense>
    </button>
    </Tooltip>
    </div>
  </div>
  );
};

export default DeviceSelector;
