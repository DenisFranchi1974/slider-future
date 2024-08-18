import {
	SelectControl,
	Icon,
	Tooltip,
	Notice,
	RangeControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useEffect, useState} from '@wordpress/element';
import { info } from '@wordpress/icons';
import SectionSliderSelector from './sectionSliderSelector';

const SliderControls = ({ attributes, setAttributes }) => {
	const {
		perViewSlider,
		spaceBetween,
		slidesPerGroupDesktop,
		slidesPerRow,
		perViewSliderTablet,
		spaceBetweenTablet,
		slidesPerGroupTablet,
		perViewSliderMobile,
		spaceBetweenMobile,
		slidesPerGroupMobile,
		loopMode,
		centeredSlides,
		initialSlide,
		autoHeight,
		slideHeight,
		freeMode,
		stickyFreeMode,
		momentumFreeMode,
		momentumBounceFreeMode,
		momentumBounceRatioFreeMode,
		momentumRatioFreeMode,
		momentumVelocityRatioFreeMode,
	} = attributes;


	const [showLoopNotice, setShowLoopNotice] = useState(false);
	const [showGridNotice, setShowGridNotice] = useState(false);

	useEffect(() => {
		if (loopMode === 'enable' && slidesPerRow > 1) {
			setShowLoopNotice(true);
			setShowGridNotice(true);
		} else {
			setShowLoopNotice(false);
			setShowGridNotice(false);
		}
	}, [loopMode, slidesPerRow]);

	const optionsPerView = [
		{
			label: __('1', 'slide'),
			value: '1',
		},
		{
			label: __('2', 'cocoblocks'),
			value: '2',
		},
		{
			label: __('3', 'cocoblocks'),
			value: '3',
		},
		{
			label: __('4', 'cocoblocks'),
			value: '4',
		},
		{
			label: __('5', 'cocoblocks'),
			value: '5',
		},
		{
			label: __('6', 'cocoblocks'),
			value: '6',
		},
		{
			label: __('7', 'cocoblocks'),
			value: '7',
		},
		{
			label: __('8', 'cocoblocks'),
			value: '8',
		},
		{
			label: __('9', 'cocoblocks'),
			value: '9',
		},
		{
			label: __('10', 'cocoblocks'),
			value: '10',
		},
		{
			label: __('Auto', 'cocoblocks'),
			value: 'auto',
		},
	];

	const optionsPerGroup = [
		{
			label: __('1', 'slide'),
			value: '1',
		},
		{
			label: __('2', 'cocoblocks'),
			value: '2',
		},
		{
			label: __('3', 'cocoblocks'),
			value: '3',
		},
		{
			label: __('4', 'cocoblocks'),
			value: '4',
		},
		{
			label: __('5', 'cocoblocks'),
			value: '5',
		},
		{
			label: __('6', 'cocoblocks'),
			value: '6',
		},
		{
			label: __('7', 'cocoblocks'),
			value: '7',
		},
		{
			label: __('8', 'cocoblocks'),
			value: '8',
		},
		{
			label: __('9', 'cocoblocks'),
			value: '9',
		},
		{
			label: __('10', 'cocoblocks'),
			value: '10',
		},
	];

	// Initial slide options
	const optionsInitialSlide = [
		{
			label: __('0', 'slide'),
			value: '0',
		},
		{
			label: __('1', 'slide'),
			value: '1',
		},
		{
			label: __('2', 'cocoblocks'),
			value: '2',
		},
		{
			label: __('3', 'cocoblocks'),
			value: '3',
		},
		{
			label: __('4', 'cocoblocks'),
			value: '4',
		},
		{
			label: __('5', 'cocoblocks'),
			value: '5',
		},
		{
			label: __('6', 'cocoblocks'),
			value: '6',
		},
		{
			label: __('7', 'cocoblocks'),
			value: '7',
		},
		{
			label: __('8', 'cocoblocks'),
			value: '8',
		},
		{
			label: __('9', 'cocoblocks'),
			value: '9',
		}
	];





	useEffect(() => {
		// Resetta la notifica e i post all'inizio quando cambia il contentType
		setAttributes({ notice: null, posts: [] });
	
		if (attributes.contentType !== 'custom') {
			const apiUrl = attributes.contentType === 'woocommerce-based'
				? `${window.wpApiSettings.root}cocoblocks/v1/get-products/`
				: `${window.wpApiSettings.root}cocoblocks/v1/get-posts/`;
			
			console.log('Fetching from API:', apiUrl);
		
			fetch(apiUrl)
				.then(response => response.json())
				.then(data => {
					if (Array.isArray(data) && data.length > 0) {
						setAttributes({ posts: data, notice: null });
					} else {
						// Mostra un avviso se non ci sono contenuti
						const message = attributes.contentType === 'woocommerce-based'
							? 'Devi avere installato il plugin WooCommerce e avere creato dei prodotti per utilizzare questa funzione.'
							: 'Nessun contenuto trovato.';
						
						setAttributes({ posts: [], notice: message });
					}
				})
				.catch(error => {
					console.error('Errore nel recuperare i dati:', error);
					const message = attributes.contentType === 'woocommerce-based'
						? 'Errore nel recuperare i prodotti. Assicurati che WooCommerce sia installato e attivo.'
						: 'Errore nel recuperare i post.';
					
					setAttributes({ posts: [], notice: message });
				});
		}
	}, [attributes.contentType]);
	

	// Section slider
    const [activeSection, setActiveSectionSlider] = useState('layout');

	return (
		<>
		    <div className='content-subdescription-section-slider'><h2>{__('General Options')}</h2></div>
            <SectionSliderSelector onSectionChange={setActiveSectionSlider} />
			{activeSection === 'layout' && (
				<>
				<div className='content-title-custom-panel'>
				<h2 className='title-custom-panel'>
					{__('Layout Area', 'cocoblocks')}
				</h2>
				</div>
				<div className='cocoblocks-panel content-section-custom-panel'>
					<div className='svg-devices'>
					    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>
						<h3>{__('Desktop', 'cocoblocks')}</h3>
					</div>
					<div className="content-section-panel">
						<div
							className="custom-select select-control-label-right"
							style={{
								borderTopLeftRadius: '8px',
								borderTopRightRadius: '8px',
							}}
						>
							<SelectControl
								label={
									<>
									    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320Zm-80 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-560H160v480h640v-480Zm-640 0v480-480Z"/></svg>
										{__('Slides per view', 'cocoblocks')}
									</>
								}
								value={perViewSlider}
								onChange={(val) => {
									setAttributes({ perViewSlider: val });
								}}
								options={optionsPerView}
							/>
							<Tooltip
								placement="top"
								style={{
									padding: '10px',
									maxWidth: '300px',
									borderRadius: '4px',
								}}
								text={__(
									"Number of slides per view in Desktop (1024px). Slides visible at the same time on slider's container.",
									'cocoblocks'
								)}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						{perViewSlider == 'auto' && (
							<p className="notice components-base-control__help" style={{borderRadius:0, margin: '0'}}>
								{__(
									'The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.',
									'cocoblocks'
								)}
							</p>
						)}
						<div className="custom-select">
							<RangeControl
								label={
									<>
										<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z"/></svg>
										{__('Space Between Slides', 'cocoblocks')}
									</>
								}
								value={spaceBetween}
								onChange={(val) => setAttributes({ spaceBetween: val })}
								min={0}
								max={100}
							/>
						</div>
						<div className="custom-select select-control-label-right">
							<SelectControl
								label={
									<>
										<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-480 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/></svg>
										{__('Slides per group', 'cocoblocks')}
									</>
								}
								value={slidesPerGroupDesktop}
								onChange={(val) =>
									setAttributes({ slidesPerGroupDesktop: val })
								}
								options={optionsPerGroup}
							/>
							<Tooltip
								placement="top"
								style={{
									padding: '10px',
									maxWidth: '300px',
									borderRadius: '4px',
								}}
								text={__(
									'The number of slides that should be grouped together for navigation.(Desktop)',
									'cocoblocks'
								)}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						<div
							className="custom-select select-control-label-right"
							style={{
								borderBottomLeftRadius: '8px',
								borderBottomRightRadius: '8px',
							}}
						>
							<SelectControl
								label={
									<>
										<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M760-200v-120H200v120h560Zm0-200v-160H200v160h560Zm0-240v-120H200v120h560ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
										{__('Slides rows', 'cocoblocks')}
									</>
								}
								value={slidesPerRow}
								onChange={(val) => setAttributes({ slidesPerRow: val })}
								options={optionsPerGroup}
							/>
							<Tooltip
								placement="top"
								style={{
									padding: '10px',
									maxWidth: '300px',
									borderRadius: '4px',
								}}
								text={__(
									'Number of slider rows, for multirow layout.',
									'cocoblocks'
								)}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						{slidesPerRow !== '1' && (
							<p
								className="notice components-base-control__help"
							>
								{__(
									'Please note that this choice influences how the slider is displayed in responsive mode. Specifically, it may impact the functionality of "per view" controls on responsive devices. Due to the nature of the row layout, some responsive "per view" settings may not have the expected effect. It\'s recommended to test your slider across different screen sizes to ensure the desired display and functionality.',
									'cocoblocks'
								)}
							</p>
						)}
						{showGridNotice && (
							<Notice status="warning" isDismissible={false} className='notice-warning-margin-top'>
								{__(
									'Grid mode with more than 1 row is not compatible with loop mode.Please disable loop mode or set Slides per Row to 1.',
									'cocoblocks'
								)}
							</Notice>
						)}
				    </div>
					<div className='svg-devices'>
					<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z"/></svg>
						<h3>{__('Tablet', 'cocoblocks')}</h3>
					</div>
					<div className='content-section-panel'>
					<div className='custom-select select-control-label-right' style={{borderTopLeftRadius:'8px',borderTopRightRadius:'8px'}}>
					<SelectControl
						label={ <>
								 <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320Zm-80 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-560H160v480h640v-480Zm-640 0v480-480Z"/></svg>
								{__('Slide per view', 'cocoblocks')}
							  </>}
						value={perViewSliderTablet}
						onChange={(val) => { setAttributes({perViewSliderTablet: val})}}
						options={ optionsPerView }
					/>
					<Tooltip 
						placement="top"
						style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
						text={__('Number of slides per view in Tablet (768px). Slides visible at the same time on slider\'s container.', 'cocoblocks')}
					>
						<Icon icon={info} className="tooltip-icon" />
					</Tooltip>
					</div>
					{perViewSliderTablet == 'auto' &&
						<p className='notice components-base-control__help'>{__('The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.','cocoblocks')}</p>
					}
					<div className='custom-select'>
						<RangeControl
							label={ <>
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z"/></svg>
									{__('Space Between Slides', 'cocoblocks')}
									</>}
							value={spaceBetweenTablet}
							onChange={(val) => setAttributes({spaceBetweenTablet: val})}
							min={0}
							max={100}
						/>
					</div>
					<div className='custom-select select-control-label-right'>
						<SelectControl
							label={ <>
							        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-480 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/></svg>
									{__('Slides per group', 'cocoblocks')}
									</>}
							value={ slidesPerGroupTablet }
							onChange={ ( val ) => setAttributes({ slidesPerGroupTablet: val }) }
							options={ optionsPerGroup }
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('The number of slides that should be grouped together for navigation.(Tablet)', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
				</div>
				<div className='svg-devices'>
				<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg>
						<h3>{__('Mobile', 'cocoblocks')}</h3>
					</div>
				<div className='content-section-panel'>
					<div className='custom-select select-control-label-right' style={{borderTopLeftRadius:'8px',borderTopRightRadius:'8px'}}>
						<SelectControl
							label={ <>
							     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M520-320h200v-320H520v320Zm-280 0h200v-320H240v320Zm-80 160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm640-560H160v480h640v-480Zm-640 0v480-480Z"/></svg>
								{__('Slides per view', 'cocoblocks')}
								</>}
							value={perViewSliderMobile}
							onChange={(val) => { setAttributes({perViewSliderMobile: val})}}
							options={ optionsPerView }
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Number of slides per view in Mobile (640px). Slides visible at the same time on slider\'s container.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					{perViewSliderMobile == 'auto' &&
						<p className='notice components-base-control__help'>{__('The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.','cocoblocks')}</p>
					}
					<div className='custom-select'>
					<RangeControl
						label={ <>
						    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M800-80v-200H680v-400h120v-200h80v800h-80ZM80-80v-800h80v200h120v400H160v200H80Z"/></svg>
							{__('Space Between Slides', 'cocoblocks')}
							</>}
						value={spaceBetweenMobile}
						onChange={(val) => setAttributes({spaceBetweenMobile: val})}
						min={0}
						max={100}
					/>
					</div>
					<div className='custom-select select-control-label-right'>
					<SelectControl
						label={ <>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-240h160v-480H160v480Zm240 0h160v-480H400v480Zm240 0h160v-480H640v480Zm-480 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Z"/></svg>
								{__('Slides per group', 'cocoblocks')}
							</>}
						value={ slidesPerGroupMobile }
						onChange={ ( val ) => setAttributes({ slidesPerGroupMobile: val }) }
						options={ optionsPerGroup }
					/>
					<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('The number of slides that should be grouped together for navigation.(Mobile)', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
					</Tooltip>
					</div>
				</div>
				<div className='content-title-custom-panel intermedy'>
					<h2 className='title-custom-panel'>
						{__('Layout Size', 'cocoblocks')}
					</h2>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
							label={<>
							    <svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 56 56"><path d="M 28 51.0742 C 28.5859 51.0742 29.1250 50.8633 29.5703 50.3945 L 42.9766 36.7305 C 43.3750 36.3320 43.6094 35.7227 43.6094 35.2071 C 43.6094 33.9649 42.7656 33.1445 41.5469 33.1445 C 40.9375 33.1445 40.4922 33.3555 40.1172 33.7071 L 33.6484 40.3398 L 29.8750 44.7227 L 30.1094 39.2851 L 30.1094 16.7149 L 29.8750 11.2773 L 33.6484 15.6602 L 40.1172 22.2930 C 40.4922 22.6445 40.9375 22.8555 41.5469 22.8555 C 42.7656 22.8555 43.6094 22.0352 43.6094 20.7930 C 43.6094 20.2773 43.3750 19.6680 42.9766 19.2695 L 29.5703 5.6055 C 29.1250 5.1367 28.5859 4.9258 28 4.9258 C 27.4375 4.9258 26.8984 5.1367 26.4297 5.6055 L 13.0469 19.2695 C 12.6484 19.6680 12.3906 20.2773 12.3906 20.7930 C 12.3906 22.0352 13.2578 22.8555 14.4531 22.8555 C 15.0625 22.8555 15.5312 22.6445 15.9063 22.2930 L 22.3516 15.6602 L 26.1484 11.2773 L 25.9141 16.7149 L 25.9141 39.2851 L 26.1484 44.7227 L 22.3516 40.3398 L 15.9063 33.7071 C 15.5312 33.3555 15.0625 33.1445 14.4531 33.1445 C 13.2578 33.1445 12.3906 33.9649 12.3906 35.2071 C 12.3906 35.7227 12.6484 36.3320 13.0469 36.7305 L 26.4297 50.3945 C 26.8984 50.8633 27.4375 51.0742 28 51.0742 Z"></path></svg>
								{__('Auto height', 'cocoblocks')}
								</>}
							checked={ autoHeight}
							onChange={ ( value ) =>
								setAttributes( { autoHeight: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enable and slider wrapper will adapt its height to the height of the currently active slide', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'12px'}} />
						</Tooltip>
					</div>
					{!autoHeight && (
						<>
						<div className='custom-select'>
						<RangeControl
								label={<>
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-80v-80h640v80H160Zm320-120L320-360l56-56 64 62v-252l-64 62-56-56 160-160 160 160-56 56-64-62v252l64-62 56 56-160 160ZM160-800v-80h640v80H160Z"/></svg>
									{__('Custom Height', 'cocoblocks')}
									</>}
							value={slideHeight}
							onChange={(val) => setAttributes({slideHeight: val})}
							min={10}
							max={1200}
							step={1}
						/>
						</div>
						</>
					)}
				</div>
				<div className='content-title-custom-panel intermedy'>
					<h2 className='title-custom-panel'>
						{__('Advanced Settings', 'cocoblocks')}
					</h2>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
							label={<>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-80v-800h80v800h-80Zm160-200v-400h120v400H600Zm-360 0v-400h120v400H240Z"/></svg>
								{__('Centered slides', 'cocoblocks')}</>}
							checked={ centeredSlides}
							onChange={ ( value ) =>
								setAttributes( { centeredSlides: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('If enabled, then active slide will be centered, not always on the left side.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'12px'}} />
						</Tooltip>
					</div>
				</div>

				</div>
			</>
			)}

            {activeSection === 'general' && (
			<>
				<div className='content-title-custom-panel'>
				<h2 className='title-custom-panel'>
					{__('General', 'cocoblocks')}
				</h2>
				</div>
				<div className='cocoblocks-panel content-section-custom-panel'>
					<div className='content-section-panel'>
						<div className='custom-select select-control-label-right'>
						<SelectControl
							label={ <>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
								{__('Initial slide', 'cocoblocks')}
								</>}
							value={ initialSlide }
							onChange={ ( val ) => setAttributes({initialSlide: val }) }
							options={ optionsInitialSlide }
						/>
						<Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('Index number of initial slide.(Starts from 0)', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
						</div>
					</div>
				
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
						    label={ <>
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-240v-480h80v480h-80ZM440-80v-800h80v800h-80ZM120-400v-160h80v160h-80Zm480 160v-480h80v480h-80Zm160-160v-160h80v160h-80Z"/></svg>
									{__('Free mode', 'cocoblocks')}
								</>}
							checked={ freeMode }
							onChange={ ( value ) =>
								setAttributes( { freeMode: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Doesn\'t work in the editor!', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'12px'}}/>
						</Tooltip>
					</div>
					{freeMode == true  &&
					<>
					<div className='content-section-panel'>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Sticky', 'cocoblocks')}
							checked={ stickyFreeMode}
							onChange={ ( value ) =>
								setAttributes( { stickyFreeMode : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables Snap to slides positions in free mode', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Momentum', 'cocoblocks')}
							checked={ momentumFreeMode}
							onChange={ ( value ) =>
								setAttributes( { momentumFreeMode : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('If enabled, then slide will keep moving for a while you release it after', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Momentum bounce', 'cocoblocks')}
							checked={ momentumBounceFreeMode}
							onChange={ ( value ) =>
								setAttributes( { momentumBounceFreeMode : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables momentum bounce in free mode', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Momentum bounce ratio', 'cocobocks')}
							value={momentumBounceRatioFreeMode}
							onChange={value => setAttributes({ momentumBounceRatioFreeMode: value })}
							min={.1}
							max={3}
							step={.1}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Higher value produces larger momentum bounce effect', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon"  style={{left:'75%',top:'2px'}} />
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Momentum ratio', 'cocobocks')}
							value={momentumRatioFreeMode}
							onChange={value => setAttributes({ momentumRatioFreeMode: value })}
							min={.1}
							max={3}
							step={.1}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Higher value produces larger momentum distance after you release sldier', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{left:'75%',top:'2px'}}/>
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Momentum velocity ratio', 'cocobocks')}
							value={momentumVelocityRatioFreeMode}
							onChange={value => setAttributes({ momentumVelocityRatioFreeMode: value })}
							min={.1}
							max={3}
							step={.1}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Higher value produces larger momentum velocity after you release sldier', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{left:'75%',top:'2px'}}/>
						</Tooltip>
					</div>
					</div>
					</>
					}
				</div>

				</div>
			</>
            )}

            {activeSection === 'content' && (
			<>
				<div className='content-title-custom-panel'>
				<h2 className='title-custom-panel'>
					{__('Content', 'cocoblocks')}
				</h2>
				</div>
				<div className='cocoblocks-panel content-section-custom-panel'>
				   <div className='content-section-panel'>
						<div className='custom-select select-control-label-right'>
							<SelectControl
								label={<>
								     <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
									 {__("Content Type", "cocoblocks")}
									</>}
								value={attributes.contentType}
								onChange={(value) => setAttributes({ contentType: value })}
								options={[
									{ label: __("Custom", "cocoblocks"), value: "custom" },
									{ label: __("Post Based", "cocoblocks"), value: "post-based" },
									{ label: __("WooComemrce", "cocoblocks"), value: "woocommerce-based" },

								]}
							/>
							{attributes.notice && (
								<div className="notice notice-warning">
									<p>{attributes.notice}</p>
								</div>
							)}
							{attributes.contentType === "custom" && (	
								<p className="notice components-base-control__help" style={{borderRadius:0, marginTop: '18px'}}>{__('No further source settings needed. Content is created manually.','cocoblocks')}</p>
							)}
						</div>
					</div>
				</div>
			</>
            )}

		</>
	);
};

export default SliderControls;