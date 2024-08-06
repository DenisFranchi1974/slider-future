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
	ToggleControl,
	Modal
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { memo, useEffect, useState, useRef } from '@wordpress/element';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { EffectCreative, Autoplay} from 'swiper/modules';
import { info } from '@wordpress/icons';
import ColorOptionsPanel from './colorPanel';
import AlignmentControlTwo from './aligncontrol-two';

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
		grabCursor,
		speed,
		crossFade,
		shadow,
		slideShadows,
		shadowOffset,
		shadowScale,
		depth,
		rotate,
		stretch,
		translateX,
        translateY,
        translateZ,
        rotateX,
        rotateY,
        rotateZ,
        scale,
        opacity,
        nextTranslateX,
        nextTranslateY,
        nextTranslateZ,
        nextRotateX,
        nextRotateY,
        nextRotateZ,
        nextScale,
        nextOpacity,
		modifier,
		rotateCards,
		hideNavigation,
		navigation, 
		navigationIcons, 
		autoplay,
		autoplaySpeed,
		navColor,
		navBackgroundColor,
		navBorderColor,
		navColorHover,
		navBackgroundColorHover,
		navBorderColorHover,
		sizeNav,
		sizeBorderNav,
		radiusBorderNav,
		paddingNav,
		paddingNavLeft,
		offSetTopNav,
		offSetSidesNav,
		navigationTablet,
		navigationMobile,
		bulletColor,
		bulletInactivityColor,
		positionPagination,
		hidePagination,
		typePagination,
		clickPagination,
		dynamicPagination,
		dynamicMainPagination,
		paginationEnable,
		opacityPagination,
		opacityInactivePagination,
		widthPagination,
		heightPagination,
		widthPaginationActive,
		heightPaginationActive,
		radiusPagination,
		gapPagination,
		fontSizePagination,
		heightBarPagination,
		progressbarOpposite,
		disableOnInteraction,
		pauseOnMouseEnter,
		reverseDirection,
		stopOnLastSlide,
		scrollbar,
		scrollBarColor,
		thumbColor,
		positionScrollbar,
		dragScrollbar,
		hideScrollbar,
		releaseScrollbar,
		heightScrollbar,
		radiusScrollbar,
		freeMode,
		stickyFreeMode,
		momentumFreeMode,
		momentumBounceFreeMode,
		momentumBounceRatioFreeMode,
		momentumRatioFreeMode,
		momentumVelocityRatioFreeMode,
		keyboard,
		viewPortKeyboard,
		upKeyboard,
		mousewheel,
		forceToAxis,
		invert,
		releaseOnEdges,
		sensitivity,
		autoplayProgress,
		autoplayProgressColor,
		autoplayProgressPosition,
		parallax
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

	// Creative Effect
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const applyPreset1 = () => {
		setAttributes({
			translateX: 0,
			translateY: 0,
			translateZ: -400,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1,
			opacity: 1,
			nextTranslateX: 100,
			nextTranslateY: 0,
			nextTranslateZ: 0,
			nextRotateX: 0,
			nextRotateY: 0,
			nextRotateZ: 0,
			nextScale: 1,
			nextOpacity: 1,
		});
	};

	const applyPreset2 = () => {
		setAttributes({
			translateX: -120,
			translateY: 0,
			translateZ: -500,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1,
			opacity: 1,
			nextTranslateX: 120,
			nextTranslateY: 0,
			nextTranslateZ: -500,
			nextRotateX: 0,
			nextRotateY: 0,
			nextRotateZ: 0,
			nextScale: 1,
			nextOpacity: 1,
		});
	};

	const applyPreset3 = () => {
		setAttributes({
			translateX: -20,
			translateY: 0,
			translateZ: -1,
			rotateX: 0,
			rotateY: 0,
			rotateZ: 0,
			scale: 1,
			opacity: 1,
			nextTranslateX: 100,
			nextTranslateY: 0,
			nextTranslateZ: 0,
			nextRotateX: 0,
			nextRotateY: 0,
			nextRotateZ: 0,
			nextScale: 1,
			nextOpacity: 1,
		});
	};

	const applyPreset4 = () => {
		setAttributes({
			translateX: 0,
			translateY: 0,
			translateZ: -800,
			rotateX: 180,
			rotateY: 0,
			rotateZ: 0,
			scale: 1,
			opacity: 1,
			nextTranslateX: 0,
			nextTranslateY: 0,
			nextTranslateZ: -800,
			nextRotateX: -180,
			nextRotateY: 0,
			nextRotateZ: 0,
			nextScale: 1,
			nextOpacity: 1,
		});
	};

	const applyPreset5 = () => {
		setAttributes({
			translateX: -120,
			translateY: 0,
			translateZ: -800,
			rotateX: 0,
			rotateY: 0,
			rotateZ: -90,
			scale: 1,
			opacity: 1,
			nextTranslateX: 120,
			nextTranslateY: 0,
			nextTranslateZ: -800,
			nextRotateX: 0,
			nextRotateY: 0,
			nextRotateZ: 90,
			nextScale: 1,
			nextOpacity: 1,
		});
	};

	const applyPreset6 = () => {
		setAttributes({
			translateX: -70,
			translateY: 0,
			translateZ: -400,
			rotateX: 0,
			rotateY: -100,
			rotateZ: 0,
			scale: 1,
			opacity: 1,
			nextTranslateX: 70,
			nextTranslateY: 0,
			nextTranslateZ: -400,
			nextRotateX: 0,
			nextRotateY: 100,
			nextRotateZ: 0,
			nextScale: 1,
			nextOpacity: 1,
		});
	};

	// Navigation Default 
	const defaultAttributes = {
		sizeNav:32,
		sizeBorderNav:1,
		radiusBorderNav:100,
		navigationIcons:'default',
		navColor:'#FFFFFF',
		navBackgroundColor:'#ffffff00',
		navBorderColor:'#FFFFFF',
		navColorHover:'#333333',
		navBackgroundColorHover:'#FFFFFF',
		navBorderColorHover:'#FFFFFF',
		paddingNav: 8,
		paddingNavLeft: 8,
		offSetTopNav:50,
		offSetSidesNav:10,
		navigationTablet:true,
		navigationMobile:false,
		hideNavigation:false,
	};

	const resetAllAttributes = () => {
		setAttributes({
			sizeNav: defaultAttributes.sizeNav,
			sizeBorderNav: defaultAttributes.sizeBorderNav,
			radiusBorderNav: defaultAttributes.radiusBorderNav,
			navigationIcons:defaultAttributes.navigationIcons,
			navColor:defaultAttributes.navColor,
			navBackgroundColor:defaultAttributes.navBackgroundColor,
			navBorderColor:defaultAttributes.navBorderColor,
			navColorHover:defaultAttributes.navColorHover,
			navBackgroundColorHover:defaultAttributes.navBackgroundColorHover,
			navBorderColorHover:defaultAttributes.navBorderColorHover,
			paddingNav: defaultAttributes.paddingNav,
			paddingNavLeft: defaultAttributes.paddingNavLeft,
			offSetTopNav:defaultAttributes.offSetTopNav,
			offSetSidesNav:defaultAttributes.offSetSidesNav,
			navigationTablet:defaultAttributes.navigationTablet,
			navigationMobile:defaultAttributes.navigationMobile,
			hideNavigation:defaultAttributes.hideNavigation,
		});
	};

	// Pagination Default
	const defaultAttributesPagination = {
		bulletColor: "#FFFFFF",
		bulletInactivityColor: "#cccccc",
		positionPagination: "bottom",
		hidePagination: false,
		typePagination: "bullets",
		clickPagination: false,
		dynamicPagination: false,
		dynamicMainPagination: 1,
		opacityPagination: 1,
		opacityInactivePagination: 0.2,
		widthPagination: 8,
		heightPagination: 8,
		widthPaginationActive: 8,
		heightPaginationActive: 8,
		radiusPagination: 0,
		gapPagination: 3,
		fontSizePagination: 16,
		heightBarPagination: 4,
		progressbarOpposite: false,
	};

	const resetPaginationAttributes = () => {
		setAttributes({
			bulletColor: defaultAttributesPagination.bulletColor,
			bulletInactivityColor: defaultAttributesPagination.bulletInactivityColor,
			positionPagination: defaultAttributesPagination.positionPagination,
			hidePagination: defaultAttributesPagination.hidePagination,
			typePagination: defaultAttributesPagination.typePagination,
			clickPagination: defaultAttributesPagination.clickPagination,
			dynamicPagination: defaultAttributesPagination.dynamicPagination,
			dynamicMainPagination: defaultAttributesPagination.dynamicMainPagination,
			opacityPagination: defaultAttributesPagination.opacityPagination,
			opacityInactivePagination: defaultAttributesPagination.opacityInactivePagination,
			widthPagination: defaultAttributesPagination.widthPagination,
			heightPagination: defaultAttributesPagination.heightPagination,
			widthPaginationActive: defaultAttributesPagination.widthPaginationActive,
			heightPaginationActive: defaultAttributesPagination.heightPaginationActive,
			radiusPagination: defaultAttributesPagination.radiusPagination,
			gapPagination: defaultAttributesPagination.gapPagination,
			fontSizePagination: defaultAttributesPagination.fontSizePagination,
			heightBarPagination: defaultAttributesPagination.heightBarPagination,
			progressbarOpposite: defaultAttributesPagination.progressbarOpposite,
		});
	};

	const key = `${translateX}-${translateY}-${translateZ}-${rotateX}-${rotateY}-${rotateZ}-${scale}-${opacity}-${nextTranslateX}-${nextTranslateY}-${nextTranslateZ}-${nextRotateX}-${nextRotateY}-${nextRotateZ}-${nextScale}-${nextOpacity}`;

	return (
		<>
			<PanelBody
				className="cocoblocks-panel"
				title={__('Methods', 'cocoblocks')}
			>
				<div className="content-section-panel">
					<div className="custom-select">
						<SelectControl
							label={
								<>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"/></svg>
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
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80 310-250l57-57 73 73v-166h80v165l72-73 58 58L480-80ZM250-310 80-480l169-169 57 57-72 72h166v80H235l73 72-58 58Zm460 0-57-57 73-73H560v-80h165l-73-72 58-58 170 170-170 170ZM440-560v-166l-73 73-57-57 170-170 170 170-57 57-73-73v166h-80Z"/></svg>
									{__('Slider direction', 'cocoblocks')}
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
						className="custom-select select-control-label-right"
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
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>
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
									<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-120v-80h80v-80H160q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280H560v80h80v80H320ZM160-360h640v-400H160v400Zm0 0v-400 400Z"/></svg>
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
				<div className='content-section-panel'>
					<div className='custom-select select-control-label-right' style={{borderTopLeftRadius:'8px',borderTopRightRadius:'8px',...(perViewSliderTablet == '1' && {borderBottomLeftRadius: '8px',borderBottomRightRadius: '8px'})}}>
					<SelectControl
						label={ <>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z"/></svg>
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
							        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm40-560h-40v480h40v-480Zm80 480h480v-480H240v480Zm560-480v480h40v-480h-40Zm0 0h40-40Zm-640 0h-40 40Z"/></svg>
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
				<div className='content-section-panel'>
					<div className='custom-select select-control-label-right' style={{borderTopLeftRadius:'8px',borderTopRightRadius:'8px',...(perViewSliderMobile == '1' && {borderBottomLeftRadius: '8px',borderBottomRightRadius: '8px'})}}>
						<SelectControl
							label={ <>
							    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg>
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
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-120v40h400v-40H280Zm0-80h400v-480H280v480Zm0-560h400v-40H280v40Zm0 0v-40 40Zm0 640v40-40Z"/></svg>
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
				<div className='content-section-panel'>
					<div className='custom-select'>
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
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
							label={ <>
							    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M473-80q-24 0-46-9t-39-26L184-320l30-31q16-16 37.5-21.5t42.5.5l66 19v-327q0-17 11.5-28.5T400-720q17 0 28.5 11.5T440-680v433l-97-27 102 102q5 5 12.5 8.5T473-160h167q33 0 56.5-23.5T720-240v-160q0-17 11.5-28.5T760-440q17 0 28.5 11.5T800-400v160q0 66-47 113T640-80H473Zm7-280v-160q0-17 11.5-28.5T520-560q17 0 28.5 11.5T560-520v160h-80Zm120 0v-120q0-17 11.5-28.5T640-520q17 0 28.5 11.5T680-480v120h-80Zm-20 80Zm300-400H680v-60h116q-66-58-147-89t-169-31q-88 0-169 31t-147 89h116v60H80v-200h60v81q72-59 159-90t181-31q94 0 181 31t159 90v-81h60v200Z"/></svg>
								{__('Grab Cursor', 'cocoblocks')}
								</>}
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
							<Icon icon={info} className="tooltip-icon" style={{top:'12px'}}/>
						</Tooltip>
					</div>
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<SelectControl
							label={ <>
							    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-80 120-240l160-160 56 58-62 62h406v-160h80v240H274l62 62-56 58Zm-80-440v-240h486l-62-62 56-58 160 160-160 160-56-58 62-62H280v160h-80Z"/></svg>
								{__('Loop Mode', 'cocoblocks')}
								</>}
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
							<Icon icon={info} className="tooltip-icon" />
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
			</PanelBody>
			<PanelBody 
				title={ __( 'Effects', 'cocobocks' ) }
				className='cocoblocks-panel'
				initialOpen={true}
			>
				<div className="content-section-panel">
					<div className="custom-select">
						<SelectControl
							label={
								<>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 2L13.09 8.26L19.5 8.54L14.25 12.14L16.36 18.48L12 14.8L7.64 18.48L9.75 12.14L4.5 8.54L10.91 8.26L12 2Z" fill="currentColor"/>
									<path d="M2 5L2.5 7.5L4 8L2.5 8.5L2 11L1.5 8.5L0 8L1.5 7.5L2 5Z" fill="currentColor"/>
									<path d="M6 9L6.5 11.5L8 12L6.5 12.5L6 15L5.5 12.5L4 12L5.5 11.5L6 9Z" fill="currentColor"/>
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
					{effect == 'cube' &&
					<>
					    <p className='notice components-base-control__help' style={{marginTop:'0',borderRadius:'0'}}>{__('Warning: Make sure you have set "Space Between" to 0 for this effect to work properly!','cocoblocks')}</p>
						<div className='custom-select'>
							<ToggleControl
								label={__('Shadow', 'cocoblocks')}
								checked={ shadow}
								onChange={ ( value ) =>
									setAttributes( { shadow: value } )
								}
							/>
							<Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('An overall shadow that appears behind the cube is added. This shadow gives an overall depth to the cube animation, making it more three-dimensional. The shadow is static relative to the cube and does not change with each slide.', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						<div className='custom-select'>
							<ToggleControl
								label={__('Slideshadow', 'cocoblocks')}
								checked={ slideShadows}
								onChange={ ( value ) =>
									setAttributes( { slideShadows: value } )
								}
							/>
							<Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('Every single slide will have a shadow cast on it. These shadows change dynamically as the slides rotate, giving a more detailed and realistic depth effect to transitions between slides. The shadows of the slides make the movement and rotation of the individual faces of the cube visible.', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						
						{(shadow || slideShadows) && (
						<>
						
						<div className='custom-select'>
							<RangeControl
								label={__('Shadow offset (px)', 'cocoblocks')}
								value={shadowOffset}
								onChange={(val) => setAttributes({shadowOffset: val})}
								min={0}
								max={100}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Shadow scale (ratio)', 'cocoblocks')}
								value={shadowScale}
								onChange={(val) => setAttributes({shadowScale: val})}
								min={0}
								max={2}
								step={.1}
							/>
						</div>
						
						</>
						)}
					</>
                    }
					{effect == 'coverflow' &&
					<>
					<div className='custom-select'>
						<ToggleControl
							label={__('Slideshadow', 'cocoblocks')}
							checked={ slideShadows}
							onChange={ ( value ) =>
								setAttributes( { slideShadows: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables slides shadows.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Depth', 'cocoblocks')}
							value={depth}
							onChange={(val) => setAttributes({depth: val})}
							min={0}
							max={1000}
							step={1}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Depth offset in px(slides translate in Z axis)', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'8px'}} />
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Rotate', 'cocoblocks')}
							value={rotate}
							onChange={(val) => setAttributes({rotate: val})}
							min={0}
							max={360}
							step={1}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Slide rotate in degrees', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'8px'}}/>
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Stretch', 'cocoblocks')}
							value={stretch}
							onChange={(val) => setAttributes({stretch: val})}
							min={-100}
							max={100}
							step={1}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Stretch space between slides (in px)', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'8px'}}/>
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Effect multiplier', 'cocoblocks')}
							value={modifier}
							onChange={(val) => setAttributes({modifier: val})}
							min={0}
							max={3}
							step={.1}
						/>
					</div>
					</>
                    }
					{effect == 'cards' &&
					<>
					<div className='custom-select'>
						<ToggleControl
							label={__('Slideshadow', 'cocoblocks')}
							checked={ slideShadows}
							onChange={ ( value ) =>
								setAttributes( { slideShadows: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables slides shadows.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
						<ToggleControl
							label={__('Rotate', 'cocoblocks')}
							checked={ rotateCards}
							onChange={ ( value ) =>
								setAttributes( { rotateCards: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables cards rotation', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					</>
                    }
					{effect == 'creative' &&
					<Button
					    onClick={openModal}
						className='button-creative'
					>
						{__('Creative effect configuration', 'cocoblocks')}
						<svg height="16px" viewBox="0 -960 960 960" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
					</Button>
                    }
					{effect == 'fade' &&
					<div className='custom-select'>
						<ToggleControl
						    label={ __('Crossfade', 'cocoblocks')}
							checked={ crossFade}
							onChange={ ( value ) =>
								setAttributes( { crossFade: value } )
							}
						/>
						{crossFade== true &&
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('The current slide fades out while the new slide appears simultaneously.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
                        }
						{crossFade== false &&
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('The current slide completely disappears before the new slide starts to appear.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
                        }
					</div>
                    }
					<div className='custom-select'>
						<RangeControl
							label={ <>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"/></svg>
								{__('Transition duration', 'cocoblocks')}
								</>}
							value={speed}
							onChange={(val) => setAttributes({speed: val})}
							min={0}
							max={10000}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Duration of transition between slides (in ms).', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{left:'66%',top:'4px'}}/>
						</Tooltip>
					</div>
				</div>
			</PanelBody>
			<PanelBody 
					title={ __( 'MODULES', 'cocobocks' ) }
					className='cocoblocks-panel'
					initialOpen={true}
				>
					<div className='content-section-panel'>
						<div className='custom-select'>
							<ToggleControl
								label={ <>
								    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M400-200 120-480l280-280v560Zm-60-145v-270L205-480l135 135Zm220 145v-560l280 280-280 280Z"/></svg>
									{__('Navigation', 'cocoblocks')}
									</>}
								checked={ navigation }
								onChange={ ( value ) =>
									setAttributes( { navigation: value } )
								}
							/>
							<Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('Will display arrows so user can navigate forward/backward. If you disable and re-enable it, if the Slider does not work it will allow you to change the navigation type with the control below!', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" style={{top:'12px'}}/>
							</Tooltip>
						</div>
						{navigation === true &&
						<>
						<div className='custom-select'>
							<SelectControl
								label={__('Type', 'cocoblocks')}
								value={navigationIcons}
								onChange={(val) => { setAttributes({navigationIcons: val})}}
								options={ [
									{
										label: __( 'Default', 'cocoblocks'),
										value: 'default',
									},
									{
										label: __( 'One', 'cocoblocks'),
										value: 'one',
									},
									{
										label: __( 'Two', 'cocoblocks'),
										value: 'two',
									},
									{
										label: __( 'Three', 'cocoblocks'),
										value: 'three',
									},
									{
										label: __( 'Four', 'cocoblocks'),
										value: 'four',
									},
									{
										label: __( 'Five', 'cocoblocks'),
										value: 'five',
									},
									{
										label: __( 'Text', 'cocoblocks'),
										value: 'text',
									},
								] }
							/>
						</div>
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Color','cocoblocks')}
								colorNormal={navColor}
								setColorNormal={(color) => setAttributes({ navColor: color })}
							/>
						</div>
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Color Hover','cocoblocks')}
								colorNormal={navColorHover}
								setColorNormal={(color) => setAttributes({ navColorHover: color })}
							/>
						</div>
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Background Color','cocoblocks')}
								colorNormal={navBackgroundColor}
								setColorNormal={(color) => setAttributes({ navBackgroundColor: color })}
							/>
						</div>
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Background Color Hover','cocoblocks')}
								colorNormal={ navBackgroundColorHover}
								setColorNormal={(color) => setAttributes({ navBackgroundColorHover: color })}
							/>
						</div>
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Border Color','cocoblocks')}
								colorNormal={ navBorderColor}
								setColorNormal={(color) => setAttributes({ navBorderColor: color })}
							/>
						</div>
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Border Color Hover','cocoblocks')}
								colorNormal={ navBorderColorHover}
								setColorNormal={(color) => setAttributes({ navBorderColorHover: color })}
							/>
						</div>
						<div className='custom-select'>
						    <RangeControl
								label={__('Size (px)', 'cocobocks')}
								value={sizeNav}
								onChange={value => setAttributes({ sizeNav: value })}
								min={1}
								max={60}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Padding Top/Bottom (px)', 'cocobocks')}
								value={paddingNav}
								onChange={value => setAttributes({ paddingNav: value })}
								min={0}
								max={50}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Padding Left/Right (px)', 'cocobocks')}
								value={paddingNavLeft}
								onChange={value => setAttributes({ paddingNavLeft: value })}
								min={0}
								max={50}
								step={1}
							/>
						</div>
						<div className='custom-select'>
						    <RangeControl
								label={__('Border Size (px)', 'cocobocks')}
								value={sizeBorderNav}
								onChange={value => setAttributes({ sizeBorderNav: value })}
								min={0}
								max={10}
								step={1}
							/>
						</div>
						<div className='custom-select'>
						    <RangeControl
								label={__('Border Radius (%)', 'cocobocks')}
								value={radiusBorderNav}
								onChange={value => setAttributes({ radiusBorderNav: value })}
								min={0}
								max={100}
								step={1}
							/>
						</div>
						<div className='custom-select'>
						<RangeControl
								label={__('Top Offset (%)', 'cocobocks')}
								value={offSetTopNav}
								onChange={value => setAttributes({ offSetTopNav: value })}
								min={1}
								max={95}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Sides Offset (px)', 'cocobocks')}
								value={offSetSidesNav}
								onChange={value => setAttributes({ offSetSidesNav: value })}
								min={-20}
								max={100}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<ToggleControl
								label={ __( 'Hide on click', 'cocoblocks' ) }
								checked={ hideNavigation }
								onChange={ ( value ) =>
									setAttributes( { hideNavigation: value } )
								}
							/>
						    <Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('Toggle navigation buttons visibility after click on Slider\'s container.It is intentionally disabled in the editor!', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						<div className='custom-select'>
							<ToggleControl
							    label={ <><Icon icon="tablet" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Enable in Tablet', 'cocoblocks')}</>}
								checked={ navigationTablet }
								onChange={ ( value ) =>
									setAttributes( { navigationTablet: value } )
								}
							/>
						</div>
						<div className='custom-select'>
							<ToggleControl
							    label={ <><Icon icon="smartphone" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Enable in Mobile', 'cocoblocks')}</>}
								checked={ navigationMobile }
								onChange={ ( value ) =>
									setAttributes( { navigationMobile: value } )
								}
							/>
						</div>
						<Button onClick={resetAllAttributes} className='button-reset'>
						    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg>
						    {__('Reset Navigation', 'cocoblocks')}
					    </Button>
						</>
						}
					</div>
					<div className='content-section-panel'>
					    <div className='custom-select'>
					    <ToggleControl
						    label={ <>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/></svg>
								{__('Pagination', 'cocoblocks')}
								</>}
							checked={ paginationEnable}
							onChange={ ( value ) =>
								setAttributes( { paginationEnable: value } )
							}
						/>
						</div>
						{paginationEnable == true &&
						<>
					    <div className='custom-select'>
							<SelectControl
								label={__('Type', 'cocoblocks')}
								value={typePagination}
								onChange={(val) => { setAttributes({typePagination: val})}}
								options={ [
									
									{
										label: __( 'Bullets', 'cocoblocks'),
										value: 'bullets',
									},
									{
										label: __( 'Fraction', 'cocoblocks'),
										value: 'fraction',
									},
									{
										label: __( 'Progressbar', 'cocoblocks'),
										value: 'progressbar',
									},
								] }
							/>
						</div>
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Color','cocoblocks')}
								colorNormal={bulletColor}
								setColorNormal={(color) => setAttributes({ bulletColor: color })}
							/>
						</div>
						{(typePagination == 'bullets' || typePagination == 'progressbar') &&
						<div className='custom-select color'>
							<ColorOptionsPanel
								buttonTitle={__('Color Inactivity','cocoblocks')}
								colorNormal={bulletInactivityColor}
								setColorNormal={(color) => setAttributes({ bulletInactivityColor: color })}
							/>
						</div>
                        }
						{typePagination !== 'progressbar' &&
						<div className='custom-select'>
							<SelectControl
								label= {__('Position', 'cocoblocks')}
								value={positionPagination}
								onChange={(val) => { setAttributes({positionPagination: val})}}
								options={ [
									{
										label: __( 'Top', 'cocoblocks'),
										value: 'top',
									},
									{
										label: __( 'Bottom', 'cocoblocks'),
										value: 'bottom',
									},
								] }
							/>
						</div>
                        }
						<div className='custom-select'>
							<ToggleControl
								label={ __( 'Hide on click', 'cocoblocks' ) }
								checked={ hidePagination}
								onChange={ ( value ) =>
									setAttributes( { hidePagination: value } )
								}
							/>
						    <Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('Toggle (hide/show) pagination container visibility after click on Slider\'s container.It is intentionally disabled in the editor!', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						{typePagination == 'fraction' &&
						<div className='custom-select'>
							<RangeControl
								label={__('Font size', 'cocobocks')}
								value={fontSizePagination}
								onChange={value => setAttributes({ fontSizePagination: value })}
								min={1}
								max={50}
								step={1}
							/>
						</div>
                        }
						{typePagination == 'progressbar' &&
						<>
						<div className='custom-select'>
							<RangeControl
								label={__('Height', 'cocobocks')}
								value={heightBarPagination}
								onChange={value => setAttributes({ heightBarPagination: value })}
								min={1}
								max={50}
								step={1}
							/>
						</div>
						<div className='custom-select'>
						    <ToggleControl
								label={ __( 'Progressbar opposite', 'cocoblocks' ) }
								checked={ progressbarOpposite}
								onChange={ ( value ) =>
									setAttributes( { progressbarOpposite: value } )
								}
							/>
						    <Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('Makes pagination progressbar opposite to Swiper\'s direction parameter, means vertical progressbar for horizontal Swiper direction and horizontal progressbar for vertical Swiper direction', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						</>
                        }
						{typePagination == 'bullets' &&
						<>
						<div className='custom-select'>
							<ToggleControl
								label={ __( 'Clickable', 'cocoblocks' ) }
								checked={ clickPagination}
								onChange={ ( value ) =>
									setAttributes( { clickPagination: value } )
								}
							/>
						    <Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('If enable then clicking on pagination button will cause transition to appropriate slide. Only for "bullets" pagination type', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						<div className='custom-select'>
							<ToggleControl
								label={ __( 'Dynamic bullets', 'cocoblocks' ) }
								checked={ dynamicPagination}
								onChange={ ( value ) =>
									setAttributes( { dynamicPagination: value } )
								}
							/>
						    <Tooltip 
								placement="top"
								style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
								text={__('Good to enable if you use bullets pagination whit a lot of slides. So it will keep only few bullets visible at the same time', 'cocoblocks')}
							>
								<Icon icon={info} className="tooltip-icon" />
							</Tooltip>
						</div>
						{dynamicPagination == true &&
						<div className='custom-select'>
							<RangeControl
								label={__('Dynamic main bullets', 'cocobocks')}
								value={dynamicMainPagination}
								onChange={value => setAttributes({ dynamicMainPagination: value })}
								min={1}
								max={10}
								step={1}
							/>
						</div>
                        }
                        <div className='custom-select'>
							<RangeControl
								label={__('Active Opacity', 'cocobocks')}
								value={opacityPagination}
								onChange={value => setAttributes({ opacityPagination: value })}
								min={.1}
								max={1}
								step={.1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Inactive Opacity', 'cocobocks')}
								value={opacityInactivePagination}
								onChange={value => setAttributes({ opacityInactivePagination: value })}
								min={.1}
								max={1}
								step={.1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Width', 'cocobocks')}
								value={widthPagination}
								onChange={value => setAttributes({ widthPagination: value })}
								min={1}
								max={50}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Height', 'cocobocks')}
								value={heightPagination}
								onChange={value => setAttributes({ heightPagination: value })}
								min={1}
								max={50}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Active Width', 'cocobocks')}
								value={widthPaginationActive}
								onChange={value => setAttributes({ widthPaginationActive: value })}
								min={1}
								max={50}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Active Height', 'cocobocks')}
								value={heightPaginationActive}
								onChange={value => setAttributes({ heightPaginationActive: value })}
								min={1}
								max={50}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Border Radius', 'cocobocks')}
								value={radiusPagination}
								onChange={value => setAttributes({ radiusPagination: value })}
								min={0}
								max={100}
								step={1}
							/>
						</div>
						<div className='custom-select'>
							<RangeControl
								label={__('Gap', 'cocobocks')}
								value={gapPagination}
								onChange={value => setAttributes({ gapPagination: value })}
								min={1}
								max={20}
								step={1}
							/>
						</div>
						</>
                        } 
						<Button onClick={resetPaginationAttributes} className='button-reset'>
						    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-122q-121-15-200.5-105.5T160-440q0-66 26-126.5T260-672l57 57q-38 34-57.5 79T240-440q0 88 56 155.5T440-202v80Zm80 0v-80q87-16 143.5-83T720-440q0-100-70-170t-170-70h-3l44 44-56 56-140-140 140-140 56 56-44 44h3q134 0 227 93t93 227q0 121-79.5 211.5T520-122Z"/></svg>
						    {__('Reset Pagination', 'cocoblocks')}
					    </Button>
			          </>
                      }
					</div>
					<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
						    label={ <>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M380-300v-360l280 180-280 180ZM480-40q-108 0-202.5-49.5T120-228v108H40v-240h240v80h-98q51 75 129.5 117.5T480-120q115 0 208.5-66T820-361l78 18q-45 136-160 219.5T480-40ZM42-520q7-67 32-128.5T143-762l57 57q-32 41-52 87.5T123-520H42Zm214-241-57-57q53-44 114-69.5T440-918v80q-51 5-97 25t-87 52Zm449 0q-41-32-87.5-52T520-838v-80q67 6 128.5 31T762-818l-57 57Zm133 241q-5-51-25-97.5T761-705l57-57q44 52 69 113.5T918-520h-80Z"/></svg>
								{__('Autoplay', 'cocoblocks')}
								</>}
							checked={ autoplay }
							onChange={ ( value ) =>
								setAttributes( { autoplay: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Will automatically advance the slides. Note: this is intentionally disabled in the editor, but will affect the front end.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'12px',left:'67%'}}/>
						</Tooltip>
					</div>
					{autoplay === true &&
					<>
			        <div className='custom-select range-mark'>
						<RangeControl
							label={__('Delay', 'cocobocks')}
							value={autoplaySpeed}
							onChange={value => setAttributes({ autoplaySpeed: value })}
							min={0}
							max={10000}
							step={10}
							marks={[
								{
									label: '0s',
									value: 0
								},
								{
									label: '2.5s',
									value: 2500
								},
								{
									label: '5s',
									value: 5000
								},
								{
									label: '7.5s',
									value: 7500
								},
								{
									label: '10s',
									value: 10000
								}
							]}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Sets the delay time in milliseconds between each slide transition.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'4px',left:'67%'}}/>
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Disable on interaction', 'cocoblocks')}
							checked={ disableOnInteraction }
							onChange={ ( value ) =>
								setAttributes( { disableOnInteraction: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Disabled and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'9px',left:'65%'}}/>
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Pause on pointer enter', 'cocoblocks')}
							checked={ pauseOnMouseEnter }
							onChange={ ( value ) =>
								setAttributes( { pauseOnMouseEnter: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('When enabled autoplay will be paused on mouse enter over Swiper container. If "Disabled on interaction" is also enabled, it will stop autoplay instead of pause', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'11px',left:'65%'}} />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Reverse direction', 'cocoblocks')}
							checked={ reverseDirection }
							onChange={ ( value ) =>
								setAttributes( { reverseDirection : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables autoplay in reverse direction', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Stop on last slide', 'cocoblocks')}
							checked={ stopOnLastSlide}
							onChange={ ( value ) =>
								setAttributes( { stopOnLastSlide : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('When enabled autoplay will be stopped when it reaches last slide (has no effect in loop mode)', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Autoplay progress', 'cocoblocks')}
							checked={ autoplayProgress}
							onChange={ ( value ) =>
								setAttributes( { autoplayProgress : value } )
							}
						/>
					</div>
					{autoplayProgress == true  &&
					<>
					<div className='custom-select color'>
						<ColorOptionsPanel
							buttonTitle={__('Color','cocoblocks')}
							colorNormal={autoplayProgressColor}
							setColorNormal={(color) => setAttributes({ autoplayProgressColor: color })}
						/>
					</div>
					<div className="custom-select">
                        <AlignmentControlTwo
                          value={autoplayProgressPosition}
						  onChange={ ( newPosition ) =>
							setAttributes( { autoplayProgressPosition : newPosition } )
						}
                        />
                    </div>
					</>
                   }
					</>
                    }
					</div>
					<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
						    label={ <>
							    <svg width="57" height="26" viewBox="0 0 57 26" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M43.0735759,0 C45.4678234,0 47.6419651,0.52506869 49.5960012,1.57520607 C51.5500372,2.62534345 53.1058794,4.09782356 54.2635276,5.99264641 C55.4211759,7.88746926 56,10.0810497 56,12.5733877 C56,15.0848653 55.4211759,17.2880156 54.2635276,19.1828384 C53.1058794,21.0776613 51.5500372,22.5501414 49.5960012,23.6002788 C47.7640924,24.5847826 45.7387313,25.1078002 43.519918,25.1693317 L43.0735759,25.1754848 L12.9546849,25.1754848 C10.5589422,25.1754848 8.38016507,24.6504161 6.41835353,23.6002788 C4.456542,22.5501414 2.89636352,21.0776613 1.73781811,19.1828384 C0.579272705,17.2880156 0,15.0848653 0,12.5733877 C0,10.0810497 0.579272705,7.88746926 1.73781811,5.99264641 C2.89636352,4.09782356 4.456542,2.62534345 6.41835353,1.57520607 C8.25755185,0.590702276 10.2874426,0.0676846358 12.5080257,0.00615314871 L12.9546849,0 L43.0735759,0 Z M43.0735759,4.52128776 L12.9546849,4.52128776 C11.4477385,4.52128776 10.0548822,4.85795077 8.77611606,5.53127678 C7.49734988,6.2046028 6.46852028,7.14715456 5.68962727,8.35893205 C4.91073426,9.57070954 4.52128776,10.9755281 4.52128776,12.5733877 C4.52128776,14.1730416 4.91073426,15.5787574 5.68962727,16.7905349 C6.46852028,18.0023123 7.49734988,18.9492004 8.77611606,19.6311991 C9.94831838,20.2563645 11.2163881,20.5949958 12.5803252,20.6470929 L12.9546849,20.6541971 L43.0735759,20.6541971 C44.5634761,20.6541971 45.9473607,20.3131977 47.2252297,19.6311991 C48.5030987,18.9492004 49.5314797,18.0023123 50.3103727,16.7905349 C51.0892657,15.5787574 51.4787122,14.1730416 51.4787122,12.5733877 C51.4787122,10.9755281 51.0892657,9.57070954 50.3103727,8.35893205 C49.5314797,7.14715456 48.5030987,6.2046028 47.2252297,5.53127678 C46.0538498,4.91406127 44.7933873,4.5797362 43.4438423,4.52830157 L43.0735759,4.52128776 Z M30.8525391,5.87597656 C34.4423899,5.87597656 37.3525391,8.78612569 37.3525391,12.3759766 C37.3525391,15.9658274 34.4423899,18.8759766 30.8525391,18.8759766 L12.8525391,18.8759766 C9.26268819,18.8759766 6.35253906,15.9658274 6.35253906,12.3759766 C6.35253906,8.78612569 9.26268819,5.87597656 12.8525391,5.87597656 L30.8525391,5.87597656 Z" transform="translate(.647 .124)"></path></svg>{__('Scrollbar', 'cocoblocks')}</>}
							checked={ scrollbar }
							onChange={ ( value ) =>
								setAttributes( { scrollbar: value } )
							}
						/>
					</div>
					{scrollbar == true  &&
					<>
					<div className='custom-select color'>
						<ColorOptionsPanel
							buttonTitle={__('Track color','cocoblocks')}
							colorNormal={scrollBarColor}
							setColorNormal={(color) => setAttributes({ scrollBarColor: color })}
						/>
					</div>
					
					<div className='custom-select color'>
						<ColorOptionsPanel
							buttonTitle={__('Thumb color','cocoblocks')}
							colorNormal={thumbColor}
							setColorNormal={(color) => setAttributes({ thumbColor: color })}
						/>
					</div>
					<div className='custom-select'>
						<SelectControl
							label= {__('Position', 'cocoblocks')}
							value={positionScrollbar}
							onChange={(val) => { setAttributes({positionScrollbar: val})}}
							options={ [
								{
									label: __( 'Top', 'cocoblocks'),
									value: 'top',
								},
								{
									label: __( 'Bottom', 'cocoblocks'),
									value: 'bottom',
								},
							] }
						/>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Draggable', 'cocoblocks')}
							checked={ dragScrollbar}
							onChange={ ( value ) =>
								setAttributes( { dragScrollbar : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Makes scrollbar draggable that allowyou to control slider position', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Hide after interaction', 'cocoblocks')}
							checked={ hideScrollbar}
							onChange={ ( value ) =>
								setAttributes( { hideScrollbar : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Hide scrollbar automatically after user interaction', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Snap on release', 'cocoblocks')}
							checked={ releaseScrollbar}
							onChange={ ( value ) =>
								setAttributes( {releaseScrollbar : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Snap slider position to slides when you release scrollbar', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Height', 'cocobocks')}
							value={heightScrollbar}
							onChange={value => setAttributes({ heightScrollbar: value })}
							min={1}
							max={50}
							step={1}
						/>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Border Radius', 'cocobocks')}
							value={radiusScrollbar}
							onChange={value => setAttributes({ radiusScrollbar: value })}
							min={0}
							max={25}
							step={1}
						/>
					</div>
					</>
					}
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
					</>
					}
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
						    label={ <>
							    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M160-200q-33 0-56.5-23.5T80-280v-400q0-33 23.5-56.5T160-760h640q33 0 56.5 23.5T880-680v400q0 33-23.5 56.5T800-200H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-560h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-280v-400 400Z"/></svg>
								{__('Keyboard control', 'cocoblocks')}
								</>}
							checked={ keyboard }
							onChange={ ( value ) =>
								setAttributes( { keyboard: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enable keyboard control. Doesn\'t work in the editor!', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{top:'12px'}}/>
						</Tooltip>
					</div>
					{keyboard == true  &&
					<>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Only in viewport', 'cocoblocks')}
							checked={ viewPortKeyboard}
							onChange={ ( value ) =>
								setAttributes( { viewPortKeyboard : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('When enabled it will control sliders that are currently in viewport', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Page Up/Down keys', 'cocoblocks')}
							checked={ upKeyboard}
							onChange={ ( value ) =>
								setAttributes( { upKeyboard : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('When enabled it will enabled keyword navigation by Page Up and Page Down keys', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					</>
                    }
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
						    label={ <>
							   <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80q-116 0-198-82t-82-198v-240q0-116 82-198t198-82q116 0 198 82t82 198v240q0 116-82 198T480-80Zm40-520h160q0-72-45.5-127T520-796v196Zm-240 0h160v-196q-69 14-114.5 69T280-600Zm200 440q83 0 141.5-58.5T680-360v-160H280v160q0 83 58.5 141.5T480-160Zm0-360Zm40-80Zm-80 0Zm40 80Z"/></svg>
								{__('Mousewheel control', 'cocoblocks')}
								</>}
							checked={ mousewheel}
							onChange={ ( value ) =>
								setAttributes( { mousewheel: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enable or disable mouse wheel control for swiping.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{left:'65%',top:'13px'}}/>
						</Tooltip>
					</div>
					{mousewheel == true  &&
					<>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Force to axis', 'cocoblocks')}
							checked={ forceToAxis}
							onChange={ ( value ) =>
								setAttributes( { forceToAxis : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Set to true to force mousewheel swipes to axis. So in horizontal mode mousewheel will work only with horizontal mousewheel scrolling, and only with vertical scrolling in vertical mode.', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Invert scrolling', 'cocoblocks')}
							checked={ invert}
							onChange={ ( value ) =>
								setAttributes( { invert : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Set to true to invert sliding direction', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
					<ToggleControl
						    label={__('Release on edges', 'cocoblocks')}
							checked={ releaseOnEdges}
							onChange={ ( value ) =>
								setAttributes( { releaseOnEdges : value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Set to true and swiper will release mousewheel event and allow page scrolling when swiper is on edge positions (in the beginning or in the end)', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" />
						</Tooltip>
					</div>
					<div className='custom-select'>
						<RangeControl
							label={__('Sensitivity', 'cocobocks')}
							value={sensitivity}
							onChange={value => setAttributes({ sensitivity: value })}
							min={.1}
							max={3}
							step={.1}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Multiplier of mousewheel data, allows to tweak mouse wheel sensitivity', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon"  style={{left:'75%',top:'2px'}} />
						</Tooltip>
					</div>
					</>
                   }
				</div>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
						    label={ <>
							<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m680-320-56-56 63-64H440v-80h247l-63-64 56-56 160 160-160 160ZM200-200h80v-560h-80v560Zm-80 80v-720h240v720H120Zm320 0v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80v80h-80Zm0-640v-80h80v80h-80ZM200-200h80-80Z"/></svg>
							{__('Parallax', 'cocoblocks')}</>}
							checked={ parallax}
							onChange={ ( value ) =>
								setAttributes( { parallax: value } )
							}
						/>
						<Tooltip 
							placement="top"
							style={{ padding: '10px',maxWidth:'300px',borderRadius:'4px' }}
							text={__('Enables parallax transition effects', 'cocoblocks')}
						>
							<Icon icon={info} className="tooltip-icon" style={{left:'65%',top:'13px'}}/>
						</Tooltip>
					</div>
					{parallax == true && (
						<p className="notice components-base-control__help" style={{borderRadius:0,marginTop:0}}>
							{__(
								'By enabling this effect you will have additional controls available for the various elements of the Slides to adjust the Parallax effect!',
								'cocoblocks'
							)}
						</p>
					)}
				</div>
			</PanelBody>
			 {/* Modal Creative Effect */}
			 {isOpen && (
				<Modal
					title={__('Creative effect configuration', 'cocoblocks')}
					onRequestClose={closeModal}
					className='cocoblocks-modal'
				>
				<div className="modal-content">
					<div className="row">
					<div className="column left">
						<div className="preview-slider">
							{/* Anteprima Slider */}
							<p>{__('PREVIEW', 'cocoblocks')}</p>
							<Swiper
							    key={key}
								autoplay={{
									delay: 1200,
								}}
								speed= {'1000'}
								loop={true}
								effect={'creative'}
								creativeEffect={{
								prev: {
									shadow: true,
									translate: [
										translateX+'%',
										translateY+'%',
										translateZ+'px'
									  ],
									  rotate: [rotateX, rotateY, rotateZ],
									  scale: scale, 
									  opacity: opacity,
								},
								next: {
									shadow: true,
									translate: [
										nextTranslateX+'%',
										nextTranslateY+'%',
										nextTranslateZ+'px'
									  ],
									  rotate: [nextRotateX, nextRotateY, nextRotateZ],
									  scale: nextScale, 
									  opacity: nextOpacity,
								},
								}}
								modules={[EffectCreative, Autoplay]}
							>
								<SwiperSlide>{__('Slide 1','cocoblocks')}</SwiperSlide>
								<SwiperSlide>{__('Slide 2','cocoblocks')}</SwiperSlide>
								<SwiperSlide>{__('Slide 3','cocoblocks')}</SwiperSlide>
							</Swiper>
						</div>
					</div>
					<div className="column right">
						{/* Preset Buttons */}
						<p>{__('PRESETS', 'cocoblocks')}</p>
						<div className='content-preset'>
							<Button variant="primary" onClick={applyPreset1}>{__('Preset 1', 'cocoblocks')}</Button>
							<Button variant="primary" onClick={applyPreset2}>{__('Preset 2', 'cocoblocks')}</Button>
							<Button variant="primary" onClick={applyPreset3}>{__('Preset 3', 'cocoblocks')}</Button>
							<Button variant="primary" onClick={applyPreset4}>{__('Preset 4', 'cocoblocks')}</Button>
							<Button variant="primary" onClick={applyPreset5}>{__('Preset 5', 'cocoblocks')}</Button>
							<Button variant="primary" onClick={applyPreset6}>{__('Preset 6', 'cocoblocks')}</Button>
						</div>
					</div>
					</div>
					<div className="row">
					<div className="column left">
						{/* Previous Slide Controls */}
						<p>{__('PREVIOUS SLIDE', 'cocoblocks')}</p>
						<div className='content-select-modal'>
							<div className='custom-select select-modal'>
								<RangeControl
									label={ <><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 4.9140 28.0000 C 4.9140 28.5860 5.1484 29.1250 5.6171 29.5703 L 19.2811 42.9766 C 19.6796 43.3750 20.2889 43.6094 20.7811 43.6094 C 22.0233 43.6094 22.8671 42.7656 22.8671 41.5469 C 22.8671 40.9375 22.6562 40.4922 22.2811 40.1172 L 15.6718 33.6484 L 11.2889 29.8750 L 16.7264 30.1094 L 39.2968 30.1094 L 44.7343 29.8750 L 40.3515 33.6484 L 33.7186 40.1172 C 33.3436 40.4922 33.1562 40.9375 33.1562 41.5469 C 33.1562 42.7656 33.9764 43.6094 35.2186 43.6094 C 35.7343 43.6094 36.3436 43.3750 36.7421 42.9766 L 50.4064 29.5703 C 50.8748 29.1250 51.0860 28.5860 51.0860 28.0000 C 51.0860 27.4375 50.8748 26.8984 50.4064 26.4297 L 36.7421 13.0469 C 36.3436 12.6484 35.7343 12.3906 35.2186 12.3906 C 33.9764 12.3906 33.1562 13.2578 33.1562 14.4766 C 33.1562 15.0625 33.3436 15.5313 33.7186 15.9062 L 40.3515 22.3516 L 44.7343 26.1484 L 39.2968 25.9141 L 16.7264 25.9141 L 11.2889 26.1484 L 15.6718 22.3516 L 22.3046 15.9062 C 22.6562 15.5313 22.8671 15.0625 22.8671 14.4766 C 22.8671 13.2578 22.0233 12.3906 20.7811 12.3906 C 20.2889 12.3906 19.6796 12.6484 19.2811 13.0469 L 5.6171 26.4297 C 5.1484 26.8984 4.9140 27.4375 4.9140 28.0000 Z"></path></svg>{__('Translate X (%)', 'cocoblocks')}</>}
									value={translateX}
									onChange={(val) => setAttributes({ translateX: val })}
									min={-200}
									max={200}
									step={1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
								    label={<><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 28 51.0742 C 28.5859 51.0742 29.1250 50.8633 29.5703 50.3945 L 42.9766 36.7305 C 43.3750 36.3320 43.6094 35.7227 43.6094 35.2071 C 43.6094 33.9649 42.7656 33.1445 41.5469 33.1445 C 40.9375 33.1445 40.4922 33.3555 40.1172 33.7071 L 33.6484 40.3398 L 29.8750 44.7227 L 30.1094 39.2851 L 30.1094 16.7149 L 29.8750 11.2773 L 33.6484 15.6602 L 40.1172 22.2930 C 40.4922 22.6445 40.9375 22.8555 41.5469 22.8555 C 42.7656 22.8555 43.6094 22.0352 43.6094 20.7930 C 43.6094 20.2773 43.3750 19.6680 42.9766 19.2695 L 29.5703 5.6055 C 29.1250 5.1367 28.5859 4.9258 28 4.9258 C 27.4375 4.9258 26.8984 5.1367 26.4297 5.6055 L 13.0469 19.2695 C 12.6484 19.6680 12.3906 20.2773 12.3906 20.7930 C 12.3906 22.0352 13.2578 22.8555 14.4531 22.8555 C 15.0625 22.8555 15.5312 22.6445 15.9063 22.2930 L 22.3516 15.6602 L 26.1484 11.2773 L 25.9141 16.7149 L 25.9141 39.2851 L 26.1484 44.7227 L 22.3516 40.3398 L 15.9063 33.7071 C 15.5312 33.3555 15.0625 33.1445 14.4531 33.1445 C 13.2578 33.1445 12.3906 33.9649 12.3906 35.2071 C 12.3906 35.7227 12.6484 36.3320 13.0469 36.7305 L 26.4297 50.3945 C 26.8984 50.8633 27.4375 51.0742 28 51.0742 Z"></path></svg>{__('Translate Y (%)', 'cocoblocks')}</>}
									value={translateY}
									onChange={(val) => setAttributes({ translateY: val })}
									min={-200}
									max={200}
									step={1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
								    label={<><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 7.8436 24.6016 C 9.0624 24.6016 9.9764 23.6641 9.9764 22.4219 L 9.9764 20.4531 L 9.4843 12.2734 L 15.6718 18.7656 L 22.8671 26.0312 C 23.2655 26.4531 23.7811 26.6406 24.3671 26.6406 C 25.6796 26.6406 26.6874 25.7734 26.6874 24.4609 C 26.6874 23.8281 26.4530 23.2656 26.0311 22.8437 L 18.8124 15.6250 L 12.2968 9.4609 L 20.4999 9.9297 L 22.4686 9.9297 C 23.7108 9.9297 24.6718 9.0625 24.6718 7.7968 C 24.6718 6.5312 23.7108 5.6406 22.4686 5.6406 L 9.4374 5.6406 C 7.0468 5.6406 5.6640 7.0234 5.6640 9.4141 L 5.6640 22.4219 C 5.6640 23.6406 6.5780 24.6016 7.8436 24.6016 Z M 33.5311 50.3594 L 46.5624 50.3594 C 48.9532 50.3594 50.3360 48.9766 50.3360 46.5859 L 50.3360 33.5781 C 50.3360 32.3594 49.4216 31.3984 48.1564 31.3984 C 46.9374 31.3984 46.0468 32.3359 46.0468 33.5781 L 46.0468 35.5469 L 46.5155 43.7266 L 40.3280 37.2344 L 33.1327 29.9688 C 32.7343 29.5469 32.2186 29.3594 31.6327 29.3594 C 30.3202 29.3594 29.3358 30.2266 29.3358 31.5390 C 29.3358 32.1719 29.5468 32.7344 29.9686 33.1563 L 37.2108 40.3750 L 43.7030 46.5391 L 35.4999 46.0703 L 33.5311 46.0703 C 32.2889 46.0703 31.3515 46.9375 31.3280 48.2031 C 31.3280 49.4687 32.2889 50.3594 33.5311 50.3594 Z"></path></svg>{__('Translate Z (px)', 'cocoblocks')}</>}
									value={translateZ}
									onChange={(val) => setAttributes({ translateZ: val })}
									min={-1000}
									max={1000}
									step={1}
								/>
							</div>
						</div>
						<div className='content-select-modal'>
						    <div className='custom-select select-modal'>
								<RangeControl
								    label={<><svg className='svg-rotate' fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path></svg>{__('Rotate X (deg)', 'cocoblocks')}</>}
									value={rotateX}
									onChange={(val) => setAttributes({ rotateX: val })}
									min={-180}
									max={180}
									step={1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
								    label={<><svg className='svg-rotate-two' fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path></svg>{__('Rotate Y (deg)', 'cocoblocks')}</>}
									value={rotateY}
									onChange={(val) => setAttributes({ rotateY: val })}
									min={-180}
									max={180}
									step={1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
								    label={<><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path></svg>{__('Rotate Z (deg)', 'cocoblocks')}</>}
									value={rotateZ}
									onChange={(val) => setAttributes({ rotateZ: val })}
									min={-180}
									max={180}
									step={1}
								/>
							</div>
						</div>
						<div className='content-select-modal'>
						    <div className='custom-select select-modal'>
								<RangeControl
									label={__('Scale', 'cocoblocks')}
									value={scale}
									onChange={(val) => setAttributes({ scale: val })}
									min={0}
									max={2}
									step={0.1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
									label={__('Opacity', 'cocoblocks')}
									value={opacity}
									onChange={(val) => setAttributes({ opacity: val })}
									min={0}
									max={1}
									step={0.1}
								/>
							</div>
						</div>
					</div>
					<div className="column right">
						{/* Next Slide Controls */}
						<p>{__('NEXT SLIDE', 'cocoblocks')}</p>
						<div className='content-select-modal'>
							<div className='custom-select select-modal'>
								<RangeControl
									label={ <><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 4.9140 28.0000 C 4.9140 28.5860 5.1484 29.1250 5.6171 29.5703 L 19.2811 42.9766 C 19.6796 43.3750 20.2889 43.6094 20.7811 43.6094 C 22.0233 43.6094 22.8671 42.7656 22.8671 41.5469 C 22.8671 40.9375 22.6562 40.4922 22.2811 40.1172 L 15.6718 33.6484 L 11.2889 29.8750 L 16.7264 30.1094 L 39.2968 30.1094 L 44.7343 29.8750 L 40.3515 33.6484 L 33.7186 40.1172 C 33.3436 40.4922 33.1562 40.9375 33.1562 41.5469 C 33.1562 42.7656 33.9764 43.6094 35.2186 43.6094 C 35.7343 43.6094 36.3436 43.3750 36.7421 42.9766 L 50.4064 29.5703 C 50.8748 29.1250 51.0860 28.5860 51.0860 28.0000 C 51.0860 27.4375 50.8748 26.8984 50.4064 26.4297 L 36.7421 13.0469 C 36.3436 12.6484 35.7343 12.3906 35.2186 12.3906 C 33.9764 12.3906 33.1562 13.2578 33.1562 14.4766 C 33.1562 15.0625 33.3436 15.5313 33.7186 15.9062 L 40.3515 22.3516 L 44.7343 26.1484 L 39.2968 25.9141 L 16.7264 25.9141 L 11.2889 26.1484 L 15.6718 22.3516 L 22.3046 15.9062 C 22.6562 15.5313 22.8671 15.0625 22.8671 14.4766 C 22.8671 13.2578 22.0233 12.3906 20.7811 12.3906 C 20.2889 12.3906 19.6796 12.6484 19.2811 13.0469 L 5.6171 26.4297 C 5.1484 26.8984 4.9140 27.4375 4.9140 28.0000 Z"></path></svg>{__('Translate X (%)', 'cocoblocks')}</>}
									value={nextTranslateX}
									onChange={(val) => setAttributes({ nextTranslateX: val })}
									min={-200}
									max={200}
									step={1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
									label={<><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 28 51.0742 C 28.5859 51.0742 29.1250 50.8633 29.5703 50.3945 L 42.9766 36.7305 C 43.3750 36.3320 43.6094 35.7227 43.6094 35.2071 C 43.6094 33.9649 42.7656 33.1445 41.5469 33.1445 C 40.9375 33.1445 40.4922 33.3555 40.1172 33.7071 L 33.6484 40.3398 L 29.8750 44.7227 L 30.1094 39.2851 L 30.1094 16.7149 L 29.8750 11.2773 L 33.6484 15.6602 L 40.1172 22.2930 C 40.4922 22.6445 40.9375 22.8555 41.5469 22.8555 C 42.7656 22.8555 43.6094 22.0352 43.6094 20.7930 C 43.6094 20.2773 43.3750 19.6680 42.9766 19.2695 L 29.5703 5.6055 C 29.1250 5.1367 28.5859 4.9258 28 4.9258 C 27.4375 4.9258 26.8984 5.1367 26.4297 5.6055 L 13.0469 19.2695 C 12.6484 19.6680 12.3906 20.2773 12.3906 20.7930 C 12.3906 22.0352 13.2578 22.8555 14.4531 22.8555 C 15.0625 22.8555 15.5312 22.6445 15.9063 22.2930 L 22.3516 15.6602 L 26.1484 11.2773 L 25.9141 16.7149 L 25.9141 39.2851 L 26.1484 44.7227 L 22.3516 40.3398 L 15.9063 33.7071 C 15.5312 33.3555 15.0625 33.1445 14.4531 33.1445 C 13.2578 33.1445 12.3906 33.9649 12.3906 35.2071 C 12.3906 35.7227 12.6484 36.3320 13.0469 36.7305 L 26.4297 50.3945 C 26.8984 50.8633 27.4375 51.0742 28 51.0742 Z"></path></svg>{__('Translate Y (%)', 'cocoblocks')}</>}
									value={nextTranslateY}
									onChange={(val) => setAttributes({ nextTranslateY: val })}
									min={-200}
									max={200}
									step={1}
								/>
						    </div>
							<div className='custom-select select-modal'>
								<RangeControl
									label={<><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 7.8436 24.6016 C 9.0624 24.6016 9.9764 23.6641 9.9764 22.4219 L 9.9764 20.4531 L 9.4843 12.2734 L 15.6718 18.7656 L 22.8671 26.0312 C 23.2655 26.4531 23.7811 26.6406 24.3671 26.6406 C 25.6796 26.6406 26.6874 25.7734 26.6874 24.4609 C 26.6874 23.8281 26.4530 23.2656 26.0311 22.8437 L 18.8124 15.6250 L 12.2968 9.4609 L 20.4999 9.9297 L 22.4686 9.9297 C 23.7108 9.9297 24.6718 9.0625 24.6718 7.7968 C 24.6718 6.5312 23.7108 5.6406 22.4686 5.6406 L 9.4374 5.6406 C 7.0468 5.6406 5.6640 7.0234 5.6640 9.4141 L 5.6640 22.4219 C 5.6640 23.6406 6.5780 24.6016 7.8436 24.6016 Z M 33.5311 50.3594 L 46.5624 50.3594 C 48.9532 50.3594 50.3360 48.9766 50.3360 46.5859 L 50.3360 33.5781 C 50.3360 32.3594 49.4216 31.3984 48.1564 31.3984 C 46.9374 31.3984 46.0468 32.3359 46.0468 33.5781 L 46.0468 35.5469 L 46.5155 43.7266 L 40.3280 37.2344 L 33.1327 29.9688 C 32.7343 29.5469 32.2186 29.3594 31.6327 29.3594 C 30.3202 29.3594 29.3358 30.2266 29.3358 31.5390 C 29.3358 32.1719 29.5468 32.7344 29.9686 33.1563 L 37.2108 40.3750 L 43.7030 46.5391 L 35.4999 46.0703 L 33.5311 46.0703 C 32.2889 46.0703 31.3515 46.9375 31.3280 48.2031 C 31.3280 49.4687 32.2889 50.3594 33.5311 50.3594 Z"></path></svg>{__('Translate Z (px)', 'cocoblocks')}</>}
									value={nextTranslateZ}
									onChange={(val) => setAttributes({ nextTranslateZ: val })}
									min={-1000}
									max={1000}
									step={1}
								/>
							</div>
						</div>
						<div className='content-select-modal'>
						    <div className='custom-select select-modal'>
								<RangeControl
									label={<><svg className='svg-rotate' fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path></svg>{__('Rotate X (deg)', 'cocoblocks')}</>}
									value={nextRotateX}
									onChange={(val) => setAttributes({ nextRotateX: val })}
									min={-180}
									max={180}
									step={1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
									label={<><svg className='svg-rotate-two' fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path></svg>{__('Rotate Y (deg)', 'cocoblocks')}</>}
									value={nextRotateY}
									onChange={(val) => setAttributes({ nextRotateY: val })}
									min={-180}
									max={180}
									step={1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
									label={<><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 53.9490 26.3032 L 50.8619 26.3032 C 49.6223 14.8328 39.7520 5.7061 27.9886 5.7061 C 21.1380 5.7061 14.9183 8.8159 10.6817 13.7061 C 9.8253 14.6751 9.9605 15.8694 10.8394 16.5004 C 11.7408 17.1314 12.7999 16.9286 13.5436 16.0948 C 17.0365 12.0836 22.2196 9.5371 27.9886 9.5371 C 37.8140 9.5371 45.8138 16.8159 46.9856 26.3032 L 43.6280 26.3032 C 42.0280 26.3032 41.5999 27.3849 42.4787 28.6243 L 47.5039 35.8130 C 48.2252 36.8497 49.3070 36.8722 50.0506 35.8130 L 55.0982 28.6468 C 56 27.3849 55.5717 26.3032 53.9490 26.3032 Z M 2.0507 31.1032 L 5.1380 31.1032 C 6.3774 42.5736 16.2479 51.6778 27.9886 51.6778 C 34.8844 51.6778 41.1041 48.5454 45.3407 43.6778 C 46.1521 42.7088 46.0395 41.4919 45.1829 40.8609 C 44.2816 40.2299 43.2224 40.4553 42.4787 41.2891 C 39.0083 45.3229 33.8252 47.8468 27.9886 47.8468 C 18.1859 47.8468 10.1859 40.5905 9.0140 31.1032 L 12.3718 31.1032 C 13.9718 31.1032 14.3999 29.9990 13.5211 28.7821 L 8.4732 21.5933 C 7.7521 20.5567 6.6929 20.5342 5.9493 21.5933 L .9014 28.7595 C 0 29.9990 .4282 31.1032 2.0507 31.1032 Z"></path></svg>{__('Rotate Z (deg)', 'cocoblocks')}</>}
									value={nextRotateZ}
									onChange={(val) => setAttributes({ nextRotateZ: val })}
									min={-180}
									max={180}
									step={1}
								/>
							</div>
						</div>
						<div className='content-select-modal'>
						    <div className='custom-select select-modal'>
								<RangeControl
									label={__('Scale', 'cocoblocks')}
									value={nextScale}
									onChange={(val) => setAttributes({ nextScale: val })}
									min={0}
									max={2}
									step={0.1}
								/>
							</div>
							<div className='custom-select select-modal'>
								<RangeControl
									label={__('Opacity', 'cocoblocks')}
									value={nextOpacity}
									onChange={(val) => setAttributes({ nextOpacity: val })}
									min={0}
									max={1}
									step={0.1}
								/>
							</div>
						</div>
					</div>
					</div>
				</div>
				<div className='border-bottmo-modal'></div>
				<Button 
				    className='button-save-modal'
				    onClick={closeModal}
				>
					{__('Save', 'cocoblocks')}
				</Button>
				
				</Modal>
			)}

		</>
	);
};

export default SliderControls;