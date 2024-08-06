import { Button, ColorPicker, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
const { useState } = wp.element;

const ColorOptionsPanel = ({ colorNormal, setColorNormal, buttonTitle, buttonIcon}) => {
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

    const toggleColorPalette = () => {
        setColorPaletteOpen(!colorPaletteOpen);
    };

    return (
        <div className="color-options-panel">
            <Button
                onClick={toggleColorPalette}
                className="color-options-button"
                style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    width: '100%',
                    marginLeft: '-16px',
                }}
            >
                <div>
                    {buttonIcon && (
                        <span className="button-icon" style={{ marginRight: '4px' }}>
                            <Icon icon={buttonIcon} />
                        </span>
                    )}
                    <span>{buttonTitle || __('Set Color', 'cocoblocks')}</span>
                </div>
                <div 
                    className="color-indicator" 
                    style={{ 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '24%', 
                        backgroundColor: colorNormal, 
                        border: '1px solid var(--light-color)', 
                        marginRight: '-6px'
                    }}
                />
                <span className="dashicons dashicons-arrow-down-alt2" style={{ position: 'absolute', right: '6px', top: '12px', fontSize: '12px' }}></span>
            </Button>
            {colorPaletteOpen && (
                <>
                    <ColorPicker
                        color={colorNormal}
                        onChangeComplete={(color) => setColorNormal(color.hex)}
                        enableAlpha
                    />
                </>
            )}
          
        </div>
    );
};

export default ColorOptionsPanel;
