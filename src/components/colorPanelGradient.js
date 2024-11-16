import { Button, GradientPicker, Icon } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';
const { useState } = wp.element;

const ColorOptionsPanelGradient = ({ buttonTitle, buttonIcon, gradient, setGradient }) => {
    const [colorPaletteOpen, setColorPaletteOpen] = useState(false);

    const toggleColorPalette = () => {
        setColorPaletteOpen(!colorPaletteOpen);
    };

    return (
        <div className="color-options-panel color-gradient">
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
                <div style={{display:'flex',alignItems: 'center',gap: '5px'}}>
                    {buttonIcon && (
                        <span className="button-icon">
                            <Icon icon={buttonIcon} />
                        </span>
                    )}
                    <span>{buttonTitle || __('Set Gradient Color', 'cocoblocks')}</span>
                </div>
                <div 
                    className="color-indicator" 
                    style={{ 
                        width: '20px', 
                        height: '20px', 
                        borderRadius: '24%', 
                        background: gradient, 
                        border: '1px solid var(--light-color)', 
                        marginRight: '-6px'
                    }}
                />
                <span className="dashicons dashicons-arrow-down-alt2" style={{ position: 'absolute', right: '6px', top: '12px', fontSize: '12px' }}></span>
            </Button>
            {colorPaletteOpen && (
                <>
                    <GradientPicker
                        value={gradient}
                        onChange={(gradient) => setGradient(gradient)}
                        aria-hidden={false}
                        className='gradient-picker'
                    />
                </>
            )}
        </div>
    );
};

export default ColorOptionsPanelGradient;
