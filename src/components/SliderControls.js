// SliderControls.js
import {
	PanelBody,
	SelectControl,
	Icon,
	Tooltip,
	Notice,
	RangeControl,
	Button,
	ButtonGroup,
	ToggleControl
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { memo, useEffect, useState, useRef } from '@wordpress/element';
import { help } from '@wordpress/icons';

const SliderControls = ({ attributes, setAttributes }) => {
	const {
		languageSlider,
		directionSlider,
		effect,
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
		grabCursor
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

	return (
		<>
			<PanelBody
				className="cocoblocks-panel"
				title={__('Slider', 'cocoblocks')}
			>
				<div className="content-section-panel">
					<div className="custom-select" style={{ borderRadius: '8px' }}>
						<SelectControl
							label={
								<>
									<Icon
										icon="admin-site-alt3"
										style={{
											marginRight: '5px',
											width: '16px',
											height: '16px',
											fontSize: '16px',
										}}
									/>
									{__('Language direction', 'cocoblocks')}
								</>
							}
							value={languageSlider}
							onChange={(val) => setAttributes({ languageSlider: val })}
							options={[
								{ label: __('LTR', 'slide'), value: 'ltr' },
								{ label: __('RTL', 'cocoblocks'), value: 'rtl' },
							]}
						/>
					</div>
				</div>
			</PanelBody>
			<PanelBody
				className="cocoblocks-panel"
				title={__('Parameters', 'cocoblocks')}
				initialOpen={true}
			>
				<div className="content-section-panel">
					<div className="custom-select">
						<SelectControl
							label={
								<>
									<Icon
										icon="move"
										style={{
											marginRight: '5px',
											width: '16px',
											height: '16px',
											fontSize: '16px',
										}}
									/>
									{__('Slide direction', 'cocoblocks')}
								</>
							}
							value={directionSlider}
							onChange={(val) => setAttributes({ directionSlider: val })}
							options={[
								{ label: __('Horizontal', 'slide'), value: 'horizontal' },
								{ label: __('Vertical', 'cocoblocks'), value: 'vertical' },
							]}
						/>
					</div>
					{directionSlider === 'vertical' && (
						<p className="notice components-base-control__help">
							{__(
								'You have to adjust a maximum height of the Slider!',
								'cocoblocks'
							)}
						</p>
					)}
				</div>
				<div className="content-section-panel">
					<div
						className="custom-select"
						style={{
							borderTopLeftRadius: '8px',
							borderTopRightRadius: '8px',
							...(perViewSlider == '1' && {
								borderBottomLeftRadius: '8px',
								borderBottomRightRadius: '8px',
							}),
						}}
					>
						<SelectControl
							label={
								<>
									<Icon
										icon="desktop"
										style={{
											marginRight: '5px',
											width: '16px',
											height: '16px',
											fontSize: '16px',
										}}
									/>
									{__('Slide per view', 'cocoblocks')}
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
							<Icon icon={help} className="tooltip-icon" />
						</Tooltip>
					</div>
					{perViewSlider == 'auto' && (
						<p className="notice components-base-control__help" style={{borderRadius:0}}>
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
									<Icon
										icon="image-flip-horizontal"
										style={{
											marginRight: '5px',
											width: '16px',
											height: '16px',
											fontSize: '16px',
										}}
									/>
									{__('Space Between Slides', 'cocoblocks')}
								</>
							}
							value={spaceBetween}
							onChange={(val) => setAttributes({ spaceBetween: val })}
							min={0}
							max={100}
						/>
					</div>
					<div className="custom-select">
						<SelectControl
							label={
								<>
									<Icon
										icon="desktop"
										style={{
											marginRight: '5px',
											width: '16px',
											height: '16px',
											fontSize: '16px',
										}}
									/>
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
							<Icon icon={help} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div
						className="custom-select"
						style={{
							borderBottomLeftRadius: '8px',
							borderBottomRightRadius: '8px',
						}}
					>
						<SelectControl
							label={
								<>
									<Icon
										icon="screenoptions"
										style={{
											marginRight: '5px',
											width: '16px',
											height: '16px',
											fontSize: '16px',
										}}
									/>
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
							<Icon icon={help} className="tooltip-icon" />
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
				<div className='content-section-panel'>
					<div className='custom-select' style={{borderTopLeftRadius:'8px',borderTopRightRadius:'8px',...(perViewSliderTablet == '1' && {borderBottomLeftRadius: '8px',borderBottomRightRadius: '8px'})}}>
					<SelectControl
						label={ <><Icon icon="tablet" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Slide per view', 'cocoblocks')}</>}
						value={perViewSliderTablet}
						onChange={(val) => { setAttributes({perViewSliderTablet: val})}}
						options={ optionsPerView }
					/>
					<Tooltip 
						placement="top"
						style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
						text={__('Number of slides per view in Tablet (768px). Slides visible at the same time on slider\'s container.', 'cocoblocks')}
					>
						<Icon icon={help} className="tooltip-icon" />
					</Tooltip>
					</div>
					{perViewSliderTablet == 'auto' &&
						<p className='notice components-base-control__help'>{__('The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.','cocoblocks')}</p>
					}
					<div className='custom-select'>
						<RangeControl
							label={ <><Icon icon="image-flip-horizontal" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Space Between Slides', 'cocoblocks')}</>}
							value={spaceBetweenTablet}
							onChange={(val) => setAttributes({spaceBetweenTablet: val})}
							min={0}
							max={100}
						/>
					</div>
					<div className='custom-select'>
						<SelectControl
							label={ <><Icon icon="tablet" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Slides per group', 'cocoblocks')}</>}
							value={ slidesPerGroupTablet }
							onChange={ ( val ) => setAttributes({ slidesPerGroupTablet: val }) }
							options={ optionsPerGroup }
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('The number of slides that should be grouped together for navigation.(Tablet)', 'cocoblocks')}
						>
							<Icon icon={help} className="tooltip-icon" />
						</Tooltip>
					</div>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select' style={{borderTopLeftRadius:'8px',borderTopRightRadius:'8px',...(perViewSliderMobile == '1' && {borderBottomLeftRadius: '8px',borderBottomRightRadius: '8px'})}}>
						<SelectControl
							label={ <><Icon icon="smartphone" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Slides per view', 'cocoblocks')}</>}
							value={perViewSliderMobile}
							onChange={(val) => { setAttributes({perViewSliderMobile: val})}}
							options={ optionsPerView }
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Number of slides per view in Mobile (640px). Slides visible at the same time on slider\'s container.', 'cocoblocks')}
						>
							<Icon icon={help} className="tooltip-icon" />
						</Tooltip>
					</div>
					{perViewSliderMobile == 'auto' &&
						<p className='notice components-base-control__help'>{__('The width of the slides is dynamic and adapts to the content. This is useful when slides have variable widths or when you want slides to dynamically adapt to available space.','cocoblocks')}</p>
					}
					<div className='custom-select'>
					<RangeControl
						label={ <><Icon icon="image-flip-horizontal" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Space Between Slides', 'cocoblocks')}</>}
						value={spaceBetweenMobile}
						onChange={(val) => setAttributes({spaceBetweenMobile: val})}
						min={0}
						max={100}
					/>
					</div>
					<div className='custom-select'>
					<SelectControl
						label={ <><Icon icon="smartphone" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Slides per group', 'cocoblocks')}</>}
						value={ slidesPerGroupMobile }
						onChange={ ( val ) => setAttributes({ slidesPerGroupMobile: val }) }
						options={ optionsPerGroup }
					/>
					<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('The number of slides that should be grouped together for navigation.(Mobile)', 'cocoblocks')}
						>
							<Icon icon={help} className="tooltip-icon" />
					</Tooltip>
					</div>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select svg-select'>
						<ToggleControl
							label={<><svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g clip-path="url(#clip0_1298_12)"><mask id="path-1-inside-1_1298_12"><path d="M1.21289 9.13964V17.5684C0.421875 17.5068 0 17.041 0 16.1885V10.5195C0 9.66699 0.421875 9.20117 1.21289 9.13964Z"></path><path d="M4.31836 7.66308V19.0977C3.4834 18.9746 3 18.5527 3 17.6123V9.15722C3 8.208 3.4834 7.78613 4.31836 7.66308Z"></path><path d="M26.7871 17.6211V9.19238C27.5781 9.25391 28 9.71973 28 10.5723V16.2412C28 17.0938 27.5781 17.5596 26.7871 17.6211Z"></path><path d="M23.6816 19.0977V7.66309C24.5166 7.78613 25 8.20801 25 9.14844V17.6035C25 18.5527 24.5166 18.9746 23.6816 19.0977Z"></path><path d="M19.1309 21.8115H8.8916C6.99316 21.8115 6 20.8271 6 18.9463V8.86523C6 6.98438 6.99316 6 8.8916 6H18.9111C20.8096 6 21.8027 6.98438 21.8027 8.86523V18.9463C21.8027 20.8271 20.8184 21.8115 19.1309 21.8115Z"></path></mask><path d="M1.21289 17.5684L1.0578 19.5623L3.21289 19.73V17.5684H1.21289ZM1.21289 9.13964H3.21289V6.97805L1.0578 7.14567L1.21289 9.13964ZM0 16.1885H-2H0ZM4.31836 19.0977L4.02677 21.0763L6.31836 21.414V19.0977H4.31836ZM4.31836 7.66308H6.31836V5.34674L4.02677 5.68445L4.31836 7.66308ZM3 17.6123H1H3ZM26.7871 9.19238L26.9422 7.19841L24.7871 7.03079V9.19238H26.7871ZM26.7871 17.6211H24.7871V19.7827L26.9422 19.6151L26.7871 17.6211ZM23.6816 7.66309L23.9732 5.68446L21.6816 5.34675V7.66309H23.6816ZM23.6816 19.0977H21.6816V21.414L23.9732 21.0763L23.6816 19.0977ZM3.21289 17.5684V9.13964H-0.787109V17.5684H3.21289ZM1.0578 7.14567C0.301257 7.20451 -0.547778 7.48477 -1.18736 8.20688C-1.81496 8.91547 -2 9.77867 -2 10.5195H2C2 10.4078 2.0259 10.6119 1.80699 10.859C1.5761 11.1197 1.33351 11.1363 1.36798 11.1336L1.0578 7.14567ZM-2 10.5195V16.1885H2V10.5195H-2ZM-2 16.1885C-2 16.9293 -1.81496 17.7925 -1.18736 18.5011C-0.547778 19.2232 0.301256 19.5035 1.0578 19.5623L1.36798 15.5744C1.33351 15.5717 1.5761 15.5883 1.80699 15.849C2.0259 16.0961 2 16.3002 2 16.1885H-2ZM6.31836 19.0977V7.66308H2.31836V19.0977H6.31836ZM4.02677 5.68445C3.36601 5.78183 2.53901 6.03909 1.88908 6.73023C1.21393 7.4482 1 8.34322 1 9.15722H5C5 9.08583 5.0095 9.10245 4.98579 9.17352C4.959 9.25384 4.90239 9.3648 4.80306 9.47044C4.60357 9.68258 4.43575 9.66738 4.60995 9.64171L4.02677 5.68445ZM1 9.15722V17.6123H5V9.15722H1ZM1 17.6123C1 18.4267 1.2165 19.3197 1.89223 20.0349C2.54133 20.722 3.36609 20.9789 4.02677 21.0763L4.60995 17.119C4.43567 17.0933 4.60125 17.0778 4.79991 17.2881C4.89919 17.3932 4.95674 17.5044 4.98444 17.5869C5.00906 17.6601 5 17.6797 5 17.6123H1ZM24.7871 9.19238V17.6211H28.7871V9.19238H24.7871ZM26.9422 19.6151C27.6987 19.5562 28.5478 19.276 29.1874 18.5539C29.815 17.8453 30 16.9821 30 16.2412H26C26 16.3529 25.9741 16.1489 26.193 15.9017C26.4239 15.641 26.6665 15.6244 26.632 15.6271L26.9422 19.6151ZM30 16.2412V10.5723H26V16.2412H30ZM30 10.5723C30 9.83141 29.815 8.96821 29.1874 8.25962C28.5478 7.53751 27.6987 7.25725 26.9422 7.19841L26.632 11.1864C26.6665 11.189 26.4239 11.1724 26.193 10.9118C25.9741 10.6646 26 10.4606 26 10.5723H30ZM21.6816 7.66309V19.0977H25.6816V7.66309H21.6816ZM23.9732 21.0763C24.634 20.9789 25.461 20.7217 26.1109 20.0305C26.7861 19.3125 27 18.4175 27 17.6035H23C23 17.6749 22.9905 17.6583 23.0142 17.5872C23.041 17.5069 23.0976 17.3959 23.1969 17.2903C23.3964 17.0782 23.5642 17.0934 23.3901 17.119L23.9732 21.0763ZM27 17.6035V9.14844H23V17.6035H27ZM27 9.14844C27 8.33406 26.7835 7.44109 26.1078 6.7258C25.4587 6.0387 24.6339 5.78182 23.9732 5.68446L23.3901 9.64172C23.5643 9.6674 23.3988 9.68298 23.2001 9.47269C23.1008 9.36759 23.0433 9.2563 23.0156 9.17386C22.9909 9.10059 23 9.081 23 9.14844H27ZM8.8916 23.8115H19.1309V19.8115H8.8916V23.8115ZM4 18.9463C4 20.2228 4.34111 21.5288 5.32612 22.5049C6.30803 23.4779 7.61575 23.8115 8.8916 23.8115V19.8115C8.58493 19.8115 8.39055 19.7712 8.27914 19.7336C8.17592 19.6987 8.14546 19.6674 8.14166 19.6636C8.1382 19.6602 8.10909 19.6328 8.07601 19.5367C8.03999 19.432 8 19.2453 8 18.9463H4ZM4 8.86523V18.9463H8V8.86523H4ZM8.8916 4C7.61575 4 6.30803 4.33364 5.32612 5.30667C4.34111 6.28276 4 7.5887 4 8.86523H8C8 8.56627 8.03999 8.37949 8.07601 8.27482C8.10909 8.17868 8.1382 8.15135 8.14166 8.14792C8.14546 8.14416 8.17592 8.11282 8.27914 8.07795C8.39055 8.0403 8.58493 8 8.8916 8V4ZM18.9111 4H8.8916V8H18.9111V4ZM23.8027 8.86523C23.8027 7.5887 23.4616 6.28276 22.4766 5.30667C21.4947 4.33364 20.187 4 18.9111 4V8C19.2178 8 19.4122 8.0403 19.5236 8.07795C19.6268 8.11282 19.6573 8.14416 19.6611 8.14792C19.6645 8.15135 19.6936 8.17868 19.7267 8.27482C19.7627 8.37949 19.8027 8.56627 19.8027 8.86523H23.8027ZM23.8027 18.9463V8.86523H19.8027V18.9463H23.8027ZM19.1309 23.8115C20.3632 23.8115 21.6177 23.4429 22.5498 22.4616C23.4674 21.4954 23.8027 20.2183 23.8027 18.9463H19.8027C19.8027 19.246 19.7631 19.441 19.7248 19.5563C19.6884 19.6656 19.6544 19.7017 19.6494 19.7069C19.646 19.7106 19.6296 19.7292 19.5676 19.7521C19.4983 19.7777 19.3613 19.8115 19.1309 19.8115V23.8115Z" mask="url(#path-1-inside-1_1298_12)"></path></g><defs><clipPath id="clip0_1298_12"><rect width="28" height="28" fill="white"></rect></clipPath></defs></svg>{__('Centered slides', 'cocoblocks')}</>}
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
							<Icon icon={help} className="tooltip-icon" style={{top:'12px'}} />
						</Tooltip>
					</div>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
					<SelectControl
						label={ <><Icon icon="ellipsis" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Initial slide', 'cocoblocks')}</>}
						value={ initialSlide }
						onChange={ ( val ) => setAttributes({initialSlide: val }) }
						options={ optionsInitialSlide }
					/>
					<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Index number of initial slide.(Starts from 0)', 'cocoblocks')}
						>
							<Icon icon={help} className="tooltip-icon" />
					</Tooltip>
					</div>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select svg-select'>
						<ToggleControl
							label={<><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 56 56"><path d="M 28 51.0742 C 28.5859 51.0742 29.1250 50.8633 29.5703 50.3945 L 42.9766 36.7305 C 43.3750 36.3320 43.6094 35.7227 43.6094 35.2071 C 43.6094 33.9649 42.7656 33.1445 41.5469 33.1445 C 40.9375 33.1445 40.4922 33.3555 40.1172 33.7071 L 33.6484 40.3398 L 29.8750 44.7227 L 30.1094 39.2851 L 30.1094 16.7149 L 29.8750 11.2773 L 33.6484 15.6602 L 40.1172 22.2930 C 40.4922 22.6445 40.9375 22.8555 41.5469 22.8555 C 42.7656 22.8555 43.6094 22.0352 43.6094 20.7930 C 43.6094 20.2773 43.3750 19.6680 42.9766 19.2695 L 29.5703 5.6055 C 29.1250 5.1367 28.5859 4.9258 28 4.9258 C 27.4375 4.9258 26.8984 5.1367 26.4297 5.6055 L 13.0469 19.2695 C 12.6484 19.6680 12.3906 20.2773 12.3906 20.7930 C 12.3906 22.0352 13.2578 22.8555 14.4531 22.8555 C 15.0625 22.8555 15.5312 22.6445 15.9063 22.2930 L 22.3516 15.6602 L 26.1484 11.2773 L 25.9141 16.7149 L 25.9141 39.2851 L 26.1484 44.7227 L 22.3516 40.3398 L 15.9063 33.7071 C 15.5312 33.3555 15.0625 33.1445 14.4531 33.1445 C 13.2578 33.1445 12.3906 33.9649 12.3906 35.2071 C 12.3906 35.7227 12.6484 36.3320 13.0469 36.7305 L 26.4297 50.3945 C 26.8984 50.8633 27.4375 51.0742 28 51.0742 Z"></path></svg>{__('Auto height', 'cocoblocks')}</>}
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
							<Icon icon={help} className="tooltip-icon" style={{top:'12px'}} />
						</Tooltip>
					</div>
					{!autoHeight && (
						<>
						<div className='custom-select svg-select'>
						<RangeControl
								label={<><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-80v-80h640v80H160Zm320-120L320-360l56-56 64 62v-252l-64 62-56-56 160-160 160 160-56 56-64-62v252l64-62 56 56-160 160ZM160-800v-80h640v80H160Z"/></svg>{__('Custom Height', 'cocoblocks')}</>}
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
				<div className='content-section-panel'>
					<div className='custom-select svg-select'>
						<ToggleControl
							label={ <><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 9.1211 36.2500 C 9.1211 47.8047 15.5195 52.9844 24.4492 52.9844 C 30.1211 52.9844 34.3398 51.1094 37.7148 47.5703 C 42.4023 42.6016 43.9492 35.0782 44.8398 32.125 C 45.5430 29.8047 46.8789 26.8282 46.8789 25.2578 C 46.8789 24.2500 45.5430 23.3594 44.6523 23.3594 C 42.6367 23.3594 41.8867 24.2734 40.6914 26.8047 C 39.3789 29.5938 37.7852 34.7969 36.5195 34.7969 C 35.7930 34.7969 35.5352 33.5078 35.5352 31.0469 L 35.5352 8.4297 C 35.5352 7.1875 34.7852 6.0625 33.1914 6.0625 C 31.6211 6.0625 30.8476 7.1875 30.8476 8.4297 L 30.8476 26.9453 C 30.0976 26.7344 29.2305 26.5703 28.2930 26.4297 L 28.2930 5.3594 C 28.2930 4.1172 27.5195 3.0156 25.9492 3.0156 C 24.3789 3.0156 23.6055 4.1172 23.6055 5.3594 L 23.6055 26.2656 C 22.7383 26.3125 21.8945 26.4063 21.0508 26.5469 L 21.0508 7.1641 C 21.0508 5.9219 20.2539 4.7969 18.7070 4.7969 C 17.1601 4.7969 16.3633 5.9219 16.3633 7.1641 L 16.3633 27.8594 C 15.4492 28.2344 14.5820 28.6797 13.8086 29.1719 L 13.8086 14.4531 C 13.8086 13.2109 13.0820 12.0860 11.5117 12.0860 C 9.8945 12.0860 9.1211 13.2109 9.1211 14.4531 Z"></path></svg>{__('Grab Cursor', 'cocoblocks')}</>}
							checked={ grabCursor }
							onChange={ ( value ) =>
								setAttributes( { grabCursor: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Activates a hand cursor that allows users to click and drag to navigate through slides, providing a more intuitive and interactive experience. It is intentionally disabled in the editor!', 'cocoblocks')}
						>
							<Icon icon={help} className="tooltip-icon" style={{top:'12px'}}/>
						</Tooltip>
					</div>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<SelectControl
							label={ <><Icon icon="update" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Loop Mode', 'cocoblocks')}</>}
							value={loopMode}
							onChange={(val) => { setAttributes({loopMode: val})}}
							options={ [
								{
									label: __( 'Disable', 'cocoblocks'),
									value: 'disable',
								},
								{
									label: __( 'Enable', 'cocoblocks'),
									value: 'enable',
								},
								{
									label: __( 'Rewind', 'cocoblocks'),
									value: 'rewind',
								}
							] }
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables continuous loop mode', 'cocoblocks')}
						>
							<Icon icon={help} className="tooltip-icon" />
						</Tooltip>
					</div>
					{showLoopNotice && (
					<Notice
						status="warning"
						isDismissible={false}
					>
						{__('Loop mode is not compatible with grid.fill = "row".  ', 'cocoblocks')}
					</Notice>
					)}
				</div>
				<div className="content-section-panel">
					<div className="custom-select svg-select">
						<SelectControl
							label={
								<>
									<svg
										fill="currentcolor"
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 56 56"
									>
										<path d="M 21.8712 15.5664 C 22.1524 15.5664 22.2930 15.4024 22.3399 15.1445 C 23.1368 11.3945 23.0899 11.2539 27.0040 10.4570 C 27.2852 10.4102 27.4493 10.2461 27.4493 9.9883 C 27.4493 9.7070 27.2852 9.5429 27.0040 9.4961 C 23.0899 8.6992 23.1368 8.5586 22.3399 4.8320 C 22.2930 4.5742 22.1524 4.3867 21.8712 4.3867 C 21.5899 4.3867 21.4493 4.5742 21.3790 4.8320 C 20.6055 8.5586 20.6524 8.6992 16.7149 9.4961 C 16.4571 9.5429 16.2696 9.7070 16.2696 9.9883 C 16.2696 10.2461 16.4571 10.4102 16.7149 10.4570 C 20.6524 11.2539 20.6055 11.3945 21.3790 15.1445 C 21.4493 15.4024 21.5899 15.5664 21.8712 15.5664 Z M 41.2306 23.8398 C 41.5587 23.8398 41.7462 23.6289 41.7930 23.3242 C 42.6134 18.8711 42.6368 18.5898 47.3475 17.7695 C 47.6523 17.7227 47.8866 17.5117 47.8866 17.1836 C 47.8866 16.8555 47.6523 16.6680 47.3475 16.5976 C 42.6368 15.8008 42.6134 15.5195 41.7930 11.0664 C 41.7462 10.7617 41.5587 10.5273 41.2306 10.5273 C 40.9024 10.5273 40.6915 10.7617 40.6446 11.0664 C 39.8477 15.5195 39.8243 15.8008 35.1134 16.5976 C 34.7852 16.6680 34.5743 16.8555 34.5743 17.1836 C 34.5743 17.5117 34.7852 17.7227 35.1134 17.7695 C 39.8243 18.5898 39.8477 18.8711 40.6446 23.3242 C 40.6915 23.6289 40.9024 23.8398 41.2306 23.8398 Z M 9.0274 30.5664 C 9.3555 30.5664 9.5430 30.3320 9.5899 30.0273 C 10.4102 25.5742 10.4337 25.2929 15.1446 24.4961 C 15.4493 24.4258 15.6837 24.2383 15.6837 23.9102 C 15.6837 23.5820 15.4493 23.3711 15.1446 23.3242 C 10.4337 22.5039 10.4102 22.2227 9.5899 17.7695 C 9.5430 17.4649 9.3555 17.2539 9.0274 17.2539 C 8.6993 17.2539 8.4884 17.4649 8.4415 17.7695 C 7.6212 22.2227 7.6212 22.5039 2.9102 23.3242 C 2.5821 23.3711 2.3712 23.5820 2.3712 23.9102 C 2.3712 24.2383 2.5821 24.4258 2.9102 24.4961 C 7.6212 25.2929 7.6212 25.5742 8.4415 30.0273 C 8.4884 30.3320 8.6993 30.5664 9.0274 30.5664 Z M 49.0352 50.6055 C 50.0432 51.6133 51.7304 51.6133 52.6448 50.6055 C 53.6288 49.5742 53.6288 47.9805 52.6448 46.9961 L 30.3790 24.6367 C 29.3946 23.6524 27.7071 23.6524 26.7696 24.6367 C 25.7852 25.6680 25.8087 27.2851 26.7696 28.2695 Z M 35.4181 34.5039 L 28.5508 27.6133 C 28.1290 27.1914 28.0118 26.7461 28.4102 26.3242 C 28.8087 25.9492 29.2540 26.0429 29.6993 26.4883 L 36.5899 33.3789 Z M 20.1602 50.9805 C 20.5821 50.9805 20.8868 50.6758 20.9337 50.2305 C 21.7071 43.9727 22.0118 43.8086 28.3634 42.7773 C 28.8790 42.6836 29.1837 42.4492 29.1837 41.9805 C 29.1837 41.5352 28.8790 41.2539 28.4571 41.1836 C 22.0587 39.9649 21.7071 39.9883 20.9337 33.7305 C 20.8868 33.2851 20.5821 32.9805 20.1602 32.9805 C 19.7149 32.9805 19.4102 33.2851 19.3634 33.7070 C 18.5430 40.0586 18.3087 40.2695 11.8399 41.1836 C 11.4181 41.2305 11.1134 41.5352 11.1134 41.9805 C 11.1134 42.4258 11.4181 42.6836 11.8399 42.7773 C 18.3087 44.0195 18.5196 44.0195 19.3634 50.2773 C 19.4102 50.6758 19.7149 50.9805 20.1602 50.9805 Z"></path>
									</svg>
									{__('Effect', 'cocoblocks')}
								</>
							}
							value={effect}
							onChange={(val) => setAttributes({ effect: val })}
							options={[
								{ label: __('Slide', 'cocoblocks'), value: 'slide' },
								{ label: __('Fade', 'cocoblocks'), value: 'fade' },
								{ label: __('Cube', 'cocoblocks'), value: 'cube' },
								{ label: __('Flip', 'cocoblocks'), value: 'flip' },
								{ label: __('Coverflow', 'cocoblocks'), value: 'coverflow' },
								{ label: __('Cards', 'cocoblocks'), value: 'cards' },
								{ label: __('Creative', 'cocoblocks'), value: 'creative' },
							]}
						/>
					</div>
				</div>
			</PanelBody>
		</>
	);
};

export default SliderControls;
