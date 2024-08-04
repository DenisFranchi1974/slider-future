import { render } from '@wordpress/element';
import { Button, TextControl, ColorPicker, PanelBody } from '@wordpress/components';
import { useState } from '@wordpress/element';
import apiFetch from '@wordpress/api-fetch';

const MyPluginAdminPage = () => {
    const [color, setColor] = useState('#ffffff');
    const [text, setText] = useState('');

    const handleSave = () => {
        apiFetch({
            path: '/my-plugin/v1/options',
            method: 'POST',
            headers: {
                'X-WP-Nonce': myPluginData.nonce
            },
            body: JSON.stringify({
                color,
                text
            })
        }).then(response => {
            alert('Settings saved');
        }).catch(error => {
            console.error('Error:', error);
        });
    };

    return (
        <div>
            <PanelBody title="My Plugin Settings" initialOpen={true}>
                <TextControl
                    label="Custom Text"
                    value={text}
                    onChange={(value) => setText(value)}
                />
                <ColorPicker
                    color={color}
                    onChangeComplete={(value) => setColor(value.hex)}
                    disableAlpha
                />
                <Button isPrimary onClick={handleSave}>Save Settings</Button>
            </PanelBody>
            <div>
                <h3>Useful Links</h3>
                <ul>
                    <li><a href="https://wordpress.org/plugins/">WordPress Plugins</a></li>
                    <li><a href="https://developer.wordpress.org/">WordPress Developer Documentation</a></li>
                </ul>
            </div>
        </div>
    );
};

render(<MyPluginAdminPage />, document.getElementById('my-plugin-admin-app'));
