import React from 'react';
import { createRoot } from 'react-dom/client';
import { __ } from '@wordpress/i18n';
import "./admin/admin.scss";
import TabNavigation from './admin/TabNavigation';

const SliderSettings = () => {
    return (
        <div className="wrap wrap-admin-slider">
            <TabNavigation />
        </div>
    );
};

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('slider-settings-container');
    if (container) {
        const root = createRoot(container);
        root.render(<SliderSettings />);
    }
});

export default SliderSettings;