import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import './style.scss';
import Edit from './edit';
import metadata from './block.json';
import { createElement } from '@wordpress/element';

const customIcon = createElement('span', {
    className: 'dashicons dashicons-images-alt2',
    style: { color: '#7a079a', width: '24px',height:'24px', fontSize:'24px' } 
});

registerBlockType(metadata.name, {
    icon: customIcon, 
    edit: Edit,
    save: () => <InnerBlocks.Content />
});
