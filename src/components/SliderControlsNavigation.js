import {
	SelectControl,
	Icon,
	Tooltip,
	RangeControl,
	Button,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState} from '@wordpress/element';
import { info } from '@wordpress/icons';
import ColorOptionsPanel from './colorPanel';
import AlignmentControlTwo from './aligncontrol-two';
import SectionSliderSelectorNavigation from './sectionSliderSelectorNavigation';

const SliderControlsNaqvigation = ({ attributes, setAttributes }) => {
	const {
		grabCursor,
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
	} = attributes;

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

	// Section slider
    const [activeSectionNavigation, setActiveSectionSliderNavigation] = useState('progress');

	return (
		<>
		    <div className='content-subdescription-section-slider'><h2>{__('Navigation Options')}</h2></div>
            <SectionSliderSelectorNavigation onSectionChange={setActiveSectionSliderNavigation} />
			{activeSectionNavigation === 'progress' && (
				<>
				<div className='content-title-custom-panel'>
				<h2 className='title-custom-panel'>
					{__('Progress', 'cocoblocks')}
				</h2>
				</div>
				<div className='cocoblocks-panel content-section-custom-panel'>
				<div className='content-section-panel'>
					<div className='custom-select'>
						<ToggleControl
						    label={ <>
							    <svg width="57" height="26" viewBox="0 0 57 26" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><path d="M43.0735759,0 C45.4678234,0 47.6419651,0.52506869 49.5960012,1.57520607 C51.5500372,2.62534345 53.1058794,4.09782356 54.2635276,5.99264641 C55.4211759,7.88746926 56,10.0810497 56,12.5733877 C56,15.0848653 55.4211759,17.2880156 54.2635276,19.1828384 C53.1058794,21.0776613 51.5500372,22.5501414 49.5960012,23.6002788 C47.7640924,24.5847826 45.7387313,25.1078002 43.519918,25.1693317 L43.0735759,25.1754848 L12.9546849,25.1754848 C10.5589422,25.1754848 8.38016507,24.6504161 6.41835353,23.6002788 C4.456542,22.5501414 2.89636352,21.0776613 1.73781811,19.1828384 C0.579272705,17.2880156 0,15.0848653 0,12.5733877 C0,10.0810497 0.579272705,7.88746926 1.73781811,5.99264641 C2.89636352,4.09782356 4.456542,2.62534345 6.41835353,1.57520607 C8.25755185,0.590702276 10.2874426,0.0676846358 12.5080257,0.00615314871 L12.9546849,0 L43.0735759,0 Z M43.0735759,4.52128776 L12.9546849,4.52128776 C11.4477385,4.52128776 10.0548822,4.85795077 8.77611606,5.53127678 C7.49734988,6.2046028 6.46852028,7.14715456 5.68962727,8.35893205 C4.91073426,9.57070954 4.52128776,10.9755281 4.52128776,12.5733877 C4.52128776,14.1730416 4.91073426,15.5787574 5.68962727,16.7905349 C6.46852028,18.0023123 7.49734988,18.9492004 8.77611606,19.6311991 C9.94831838,20.2563645 11.2163881,20.5949958 12.5803252,20.6470929 L12.9546849,20.6541971 L43.0735759,20.6541971 C44.5634761,20.6541971 45.9473607,20.3131977 47.2252297,19.6311991 C48.5030987,18.9492004 49.5314797,18.0023123 50.3103727,16.7905349 C51.0892657,15.5787574 51.4787122,14.1730416 51.4787122,12.5733877 C51.4787122,10.9755281 51.0892657,9.57070954 50.3103727,8.35893205 C49.5314797,7.14715456 48.5030987,6.2046028 47.2252297,5.53127678 C46.0538498,4.91406127 44.7933873,4.5797362 43.4438423,4.52830157 L43.0735759,4.52128776 Z M30.8525391,5.87597656 C34.4423899,5.87597656 37.3525391,8.78612569 37.3525391,12.3759766 C37.3525391,15.9658274 34.4423899,18.8759766 30.8525391,18.8759766 L12.8525391,18.8759766 C9.26268819,18.8759766 6.35253906,15.9658274 6.35253906,12.3759766 C6.35253906,8.78612569 9.26268819,5.87597656 12.8525391,5.87597656 L30.8525391,5.87597656 Z" transform="translate(.647 .124)"></path></svg>
								{__('Scrollbar', 'cocoblocks')}</>}
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
					<div className='custom-select select-control-label-right'>
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


				</div>
			</>
			)}
			{activeSectionNavigation === 'arrow' && (
			<>
				<div className='content-title-custom-panel'>
				<h2 className='title-custom-panel'>
					{__('Arrow', 'cocoblocks')}
				</h2>
				</div>
				<div className='cocoblocks-panel content-section-custom-panel'>
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
						<div className='custom-select select-control-label-right'>
							<SelectControl
								label={__('Type', 'cocoblocks')}
								value={navigationIcons}
								onChange={(val) => { setAttributes({navigationIcons: val})}}
								options={ [
									{
										label: __( 'Classic', 'cocoblocks'),
										value: 'default',
									},
									{
										label: __( 'Sleek', 'cocoblocks'),
										value: 'one',
									},
									{
										label: __( 'Minimal', 'cocoblocks'),
										value: 'two',
									},
									{
										label: __( 'Bold', 'cocoblocks'),
										value: 'three',
									},
									{
										label: __( 'Elegant', 'cocoblocks'),
										value: 'four',
									},
									{
										label: __( 'Toggle', 'cocoblocks'),
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

				</div>
				</>
				)}
				{activeSectionNavigation === 'bullet' && (
			    <>
					<div className='content-title-custom-panel'>
					<h2 className='title-custom-panel'>
						{__('Bullets', 'cocoblocks')}
					</h2>
					</div>
					<div className='cocoblocks-panel content-section-custom-panel'>
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
					    <div className='custom-select select-control-label-right'>
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
						<div className='custom-select select-control-label-right'>
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

					</div>
				</>
				)}
				{activeSectionNavigation === 'keyboard' && (
			    <>
					<div className='content-title-custom-panel'>
					<h2 className='title-custom-panel'>
						{__('Keyboard', 'cocoblocks')}
					</h2>
					</div>
					<div className='cocoblocks-panel content-section-custom-panel'>
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

					</div>
				</>
				)}
				{activeSectionNavigation === 'mouse' && (
			    <>
					<div className='content-title-custom-panel'>
					<h2 className='title-custom-panel'>
						{__('Mouse', 'cocoblocks')}
					</h2>
					</div>
					<div className='cocoblocks-panel content-section-custom-panel'>
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

					</div>
				</>
				)}
				{activeSectionNavigation === 'grap' && (
			    <>
					<div className='content-title-custom-panel'>
					<h2 className='title-custom-panel'>
						{__('Grab', 'cocoblocks')}
					</h2>
					</div>
					<div className='cocoblocks-panel content-section-custom-panel'>
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
					</div>
					</>
				)}

		</>
	);
};

export default SliderControlsNaqvigation;