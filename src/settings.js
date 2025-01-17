import React from 'react';
import { createRoot } from 'react-dom/client';
import { __ } from '@wordpress/i18n';
import "./admin/admin.scss";
import TabNavigation from './admin/TabNavigation';

const SliderSettings = () => {
    return (
        <div className="wrap wrap-admin-slider">
            <div className='logo-dashboard'><span class="dashicons dashicons-images-alt2"></span><h1>{__('SliderFuture', 'slider-future')}</h1></div>
            <TabNavigation />
        </div>
    );
};

// Renderizza l'app quando il DOM è pronto
window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('slider-settings-container');
    if (container) {
        const root = createRoot(container);
        root.render(<SliderSettings />);
    }
});

export default SliderSettings;