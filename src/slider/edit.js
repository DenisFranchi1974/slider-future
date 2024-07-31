import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	SelectControl,
	Button,
	ButtonGroup,
	PanelBody,
	Icon,
	TabPanel,
	DropdownMenu,
	TextareaControl,
	ColorPicker,
	__experimentalAlignmentMatrixControl as AlignmentMatrixControl,
	RangeControl,
	FocalPointPicker,
	Tooltip,
} from '@wordpress/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards, EffectCube, Grid } from 'swiper/modules';
import { useEffect, useState } from '@wordpress/element';
import './editor.scss';
import '../components/editor.scss';
import ColorOptionsPanel from '../components/colorPanel';
import { trash, replace, addTemplate } from '@wordpress/icons';

import AlignmentControl from '../components/aligncontrol';
import SliderControls from '../components/SliderControls';
import ColorOptionsPanelGradient from '../components/colorPanelGradient';


export default function Edit({ attributes, setAttributes }) {
	const { 
		directionSlider, 
		effect, 
		slides, 
		languageSlider, 
		device,
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
		centeredSlides,
        loopMode,
		initialSlide,
		autoHeight,
		slideHeight,
		grabCursor,
	} = attributes;

	// Move Element Up
	const moveElementUp = (slideId, index) => {
		const updatedSlides = slides.map((slide) => {
			if (slide.id === slideId && index > 0) {
				const elements = [...slide.elements];
				const temp = elements[index - 1];
				elements[index - 1] = elements[index];
				elements[index] = temp;
				return { ...slide, elements };
			}
			return slide;
		});
		setAttributes({ slides: updatedSlides });
	};
	// Move Elemet Down
	const moveElementDown = (slideId, index) => {
		const updatedSlides = slides.map((slide) => {
			if (slide.id === slideId && index < slide.elements.length - 1) {
				const elements = [...slide.elements];
				const temp = elements[index + 1];
				elements[index + 1] = elements[index];
				elements[index] = temp;
				return { ...slide, elements };
			}
			return slide;
		});
		setAttributes({ slides: updatedSlides });
	};

	// General Tab
	const onSelect = (tabName) => {};

	const blockProps = useBlockProps();

	// Background Slide
	const [backgroundType, setBackgroundType] = useState('');

	// Add Slide
	const addSlide = () => {
		const newSlide = {
			id: slides.length + 1,
			elements: [], // Inizializza elements come un array vuoto
			layout: 'vertical',
			gapItems: 5,
		};
		const updatedSlides = [...slides, newSlide];
		setAttributes({ slides: updatedSlides });
	};

	// Update Fit Image
	const updateSlideFit = (slideId, newFit) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId ? { ...slide, fit: newFit } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Update Position image
	const handleFocalPointChange = (slideId, newFocalPoint) => {
		setAttributes({
			slides: slides.map(slide =>
				slide.id === slideId
					? { ...slide, focalPoint: newFocalPoint }
					: slide
			),
		});
	};

	// Update Layout
	const updateSlideLayout = (slideId, newLayout) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId ? { ...slide, layout: newLayout } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Update Position
	const updateSlidePosition = (slideId, newPosition) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId ? { ...slide, position: newPosition } : slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Update Gap Items
	const updateSlideGapItems = (slideId, newGapItems) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId ? { ...slide, gapItems: newGapItems } : slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Update Border Color
	const updateSlideBackgroundBorderColor = (id, color) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundBorderColor: color } : slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Remove Slide
	const removeSlide = (id) => {
		const updatedSlides = slides.filter((slide) => slide.id !== id);
		setAttributes({ slides: updatedSlides });
	};

	// Clone Slide
	const cloneSlide = (slideToClone) => {
		const newSlide = { ...slideToClone, id: slides.length + 1 };
		const updatedSlides = [...slides, newSlide];
		setAttributes({ slides: updatedSlides });
	};

	// Add Content
	const addSlideDiv = (slideId) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: [
							...slide.elements,
							{
								type: 'div',
								content: '',
								backgroundColor: '',
								imageUrl: '',
								innerDivs: [],
							},
						],
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Update Content
	const updateSlideDiv = (slideId, index, newContent) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements
							? slide.elements.map((element, i) =>
									element.type === 'div' && i === index
										? { ...element, content: newContent }
										: element
							  )
							: [], // Se elements non è definito, inizializzalo come array vuoto
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Background color Content
	const updateDivBackgroundColor = (slideId, index, newColor) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements
							? slide.elements.map((element, i) =>
									element.type === 'div' && i === index
										? { ...element, backgroundColor: newColor }
										: element
							  )
							: [], // Se elements non è definito, inizializzalo come array vuoto
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Image Content
	const updateDivImage = (slideId, index, imageUrl) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements
							? slide.elements.map((element, i) =>
									element.type === 'div' && i === index
										? { ...element, imageUrl }
										: element
							  )
							: [], // Se elements non è definito, inizializzalo come array vuoto
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Remove image content
	const removeDivImage = (slideId, divIndex) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
					...slide,
					elements: slide.elements.map((element, index) =>
						element.type === 'div' && index === divIndex
							? {
									...element,
									imageUrl: null // Rimuove solo l'immagine
								}
							: element
					),
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};


	// Remove image inner content
	const removeInnerDivImage = (slideId, divIndex, innerIndex) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
					...slide,
					elements: slide.elements.map((element, index) =>
						element.type === 'div' && index === divIndex
							? {
									...element,
									innerDivs: element.innerDivs.map((innerDiv, innerIdx) =>
										innerIdx === innerIndex
											? {
													...innerDiv,
													imageUrl: null // Rimuove solo l'immagine dall'innerDiv
												}
											: innerDiv
									),
								}
							: element
					),
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	
	
	// Remove Content
	const removeSlideDiv = (slideId, index) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.filter(
							(element, i) => element.type !== 'div' || i !== index
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Add Inner Content
	const addInnerDiv = (slideId, divIndex) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, index) =>
							element.type === 'div' && index === divIndex
								? {
										...element,
										innerDivs: [
											...(element.innerDivs || []),
											{ content: '', backgroundColor: '', imageUrl: '' },
										],
								  }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Update Innder Div
	const updateInnerDivContent = (slideId, divIndex, innerIndex, newContent) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, index) =>
							element.type === 'div' && index === divIndex
								? {
										...element,
										innerDivs: element.innerDivs.map((innerDiv, i) =>
											i === innerIndex
												? { ...innerDiv, content: newContent }
												: innerDiv
										),
								  }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Background
	const updateInnerDivBackgroundColor = (
		slideId,
		divIndex,
		innerIndex,
		newColor
	) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, index) =>
							element.type === 'div' && index === divIndex
								? {
										...element,
										innerDivs: element.innerDivs.map((innerDiv, i) =>
											i === innerIndex
												? { ...innerDiv, backgroundColor: newColor }
												: innerDiv
										),
								  }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Image Inner Content
	const updateInnerDivImage = (slideId, divIndex, innerIndex, imageUrl) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, index) =>
							element.type === 'div' && index === divIndex
								? {
										...element,
										innerDivs: element.innerDivs.map((innerDiv, i) =>
											i === innerIndex ? { ...innerDiv, imageUrl } : innerDiv
										),
								  }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Remove Inner Content
	const removeInnerDiv = (slideId, divIndex, innerIndex) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, index) =>
							element.type === 'div' && index === divIndex
								? {
										...element,
										innerDivs: element.innerDivs.filter(
											(_, i) => i !== innerIndex
										),
								  }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Add Text
	const addSlideTitle = (slideId) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: [
							...(slide.elements || []),
							{
								type: 'title',
								text: '',
								fontSize: 16,
								fontSizeTablet: 16,
								fontSizeMobile: 16,
								position: '',
							},
						],
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Update Text
	const updateSlideTitle = (slideId, index, newTitle) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, i) =>
							element.type === 'title' && i === index
								? { ...element, text: newTitle }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Size
	const updateFontSize = (slideId, index, newSize) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, i) =>
							element.type === 'title' && i === index
								? { ...element, fontSize: newSize }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Size Tablet
	const updateFontSizeTablet = (slideId, index, newSizeTablet) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, i) =>
							element.type === 'title' && i === index
								? { ...element, fontSizeTablet: newSizeTablet }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Size Mobile
	const updateFontSizeMobile = (slideId, index, newSizeMobile) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, i) =>
							element.type === 'title' && i === index
								? { ...element, fontSizeMobile: newSizeMobile }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Remove Text
	const removeSlideTitle = (slideId, index) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.filter(
							(element, i) => !(element.type === 'title' && i === index)
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Add Image
	const addSlideImage = (slideId) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: [
							...(slide.elements || []),
							{ type: 'image', url: '', alt: '' },
						],
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Update Image
	const updateSlideImage = (slideId, index, newUrl, newAlt) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.map((element, i) =>
							element.type === 'image' && i === index
								? { ...element, url: newUrl, alt: newAlt }
								: element
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Remove Image
	const removeSlideImage = (slideId, index) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === slideId
				? {
						...slide,
						elements: slide.elements.filter(
							(element, i) => !(element.type === 'image' && i === index)
						),
				  }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Image
	const updateSlideBackgroundImage = (id, newImage) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundImage: newImage } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	
	// Remove image
	const removeSlideBackgroundImage = (id) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundImage: null } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Funzione per aggiornare il colore di sfondo
	const updateSlideBackgroundColor = (id, color) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundColor: color, backgroundType: 'color' } : slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Funzione per aggiornare il gradiente di sfondo
	const updateSlideBackgroundGradient = (id, gradient) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundGradient: gradient, backgroundType: 'gradient' } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	

	// Video
	const updateSlideBackgroundVideo = (id, videoUrl) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundVideo: videoUrl } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Remove video
	const removeSlideBackgroundVideo = (id) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundVideo: null } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	const updateSlideBackgroundType = (id, type) => {
		const updatedSlides = slides.map((slide) =>
			slide.id === id ? { ...slide, backgroundType: type } : slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Update Effect
	const key = `${effect}-${languageSlider}-${perViewSlider}-${spaceBetween}-${slidesPerGroupDesktop}-${slidesPerRow}-${perViewSliderTablet}-${spaceBetweenTablet}-${slidesPerGroupTablet}-${perViewSliderMobile}-${spaceBetweenMobile}-${slidesPerGroupMobile}-${loopMode}-${centeredSlides}-${initialSlide}-${autoHeight}-${slideHeight}-${grabCursor}`;
	// Nessun movimento della slider
	const isGutenbergEditor =
		typeof wp !== 'undefined' && wp.data && wp.data.select('core/editor');

	// Panel Slide
	const [selectedPanel, setSelectedPanel] = useState(null);
	const [primaryColor, setPrimaryColor] = useState('');

	useEffect(() => {
		// Recupera il valore della variabile CSS --primary-color
		const root = document.querySelector(':root');
		const color = getComputedStyle(root).getPropertyValue('--primary-color');
		setPrimaryColor(color.trim());
	}, []);

	const handlePanelSelect = (panelId) => {
		setSelectedPanel((prevPanel) => (prevPanel === panelId ? null : panelId));
	};

	const renderCircle = (panelId) => {
		const isSelected = selectedPanel === panelId;
		const circleStyle = {
			display: 'inline-block',
			width: '10px',
			height: '10px',
			borderRadius: '50%',
			border: `2px solid ${primaryColor}`,
			backgroundColor: isSelected ? primaryColor : 'transparent',
			marginRight: '8px',
		};

		return <span style={circleStyle}></span>;
	};

	useEffect(() => {
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				const popovers = document.querySelectorAll(
					'.components-dropdown-menu__popover .components-popover__content'
				);
				popovers.forEach((popover) => {
					// Aggiungi la tua classe personalizzata
					if (!popover.classList.contains('slide-popover-class')) {
						popover.classList.add('slide-popover-class');
					}
				});
			});
		});

		// Osserva il body per aggiungere la classe personalizzata ai nuovi popover
		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		// Cleanup
		return () => {
			observer.disconnect();
		};
	}, []);



	return (
		<>
			<InspectorControls>
				<TabPanel
					className="tab-general"
					activeClass="active-tab"
					initialTabName="tab1"
					onSelect={onSelect}
					tabs={[
						{
							name: 'tab1',
							title: __('Parameters', 'wp-kube'),
						},
						{
							name: 'tab2',
							title: __('Content', 'wp-kube'),
						},
					]}
				>
					{(tab) => (
						<>
							{/*TAB 1*/}
							<div className={'tab-1 ' + tab.name}>
							    <SliderControls attributes={attributes} setAttributes={setAttributes} />
							</div>
							{/*TAB 2*/}
							<div className={'tab-2 ' + tab.name}>
								{slides.map((slide, index) => (
									<PanelBody
										key={index}
										className="cocoblocks-panel panel-slide"
										title={
											<>
												{renderCircle(slide.id)} {__('Slide', 'cocoblocks')}{' '}
												{index + 1}
												<div
													onClick={(event) => {
														event.stopPropagation();
													}}
												>
													<DropdownMenu
														icon="ellipsis"
														label={__('Slide Options', 'slider')}
														className="menu-slide-content"
														controls={[
															{
																icon: 'trash',
																title: __('Delete', 'slider'),
																onClick: () => removeSlide(slide.id),
															},
															{
																icon: 'admin-page',
																title: __('Clone', 'slider'),
																onClick: () => cloneSlide(slide),
															},
														]}
													/>
												</div>
											</>
										}
										onToggle={() => handlePanelSelect(slide.id)}
										initialOpen={false}
									>
										<div
											className="content-section-panel"
											style={{ paddingTop: '0' }}
										>
											<div className="custom-select">
												<div className="title-tab-background">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														height="18px"
														viewBox="0 -960 960 960"
														width="18px"
														fill="#5f6368"
													>
														<path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z" />
													</svg>
													<h2
														className="title-tab"
														style={{ marginBottom: '12px' }}
													>
														{__('Background', 'slider')}
													</h2>
												</div>
												<TabPanel
													className="background-selector"
													activeClass="active-tab"
													initialTabName={slide.backgroundType}
													onSelect={(tabName) => {
														setBackgroundType(tabName);
														updateSlideBackgroundType(slide.id, tabName);
													}}
													tabs={[
														{
															name: 'color',
															title: (
																<span>{__('Color', 'your-text-domain')}</span>
															),
														},
														{
															name: 'gradient',
															title: (
																<span>{__('Gradient', 'your-text-domain')}</span>
															),
														},
														{
															name: 'image',
															title: (
																<span>{__('Image', 'your-text-domain')}</span>
															),
														},
														{
															name: 'video',
															title: (
																<span>{__('Video', 'your-text-domain')}</span>
															),
														},
													]}
												>
													{(tab) => (
														<>
															{tab.name === 'color' && (
																<div className="custom-select color">
																	<ColorOptionsPanel
																			colorNormal={slide.backgroundColor}
																			setColorNormal={(color) =>
																				updateSlideBackgroundColor(slide.id, color)
																			}
																			buttonIcon="admin-customizer"
																		/>
																</div>
															)}
															{tab.name === 'gradient' && (
																<div className="custom-select color">
																	<ColorOptionsPanelGradient
																			gradient={slide.backgroundGradient}
																			setGradient={(gradient) =>
																				updateSlideBackgroundGradient(slide.id, gradient)
																			}
																			buttonIcon="admin-customizer"
																		/>
																</div>
															)}
															
															{tab.name === 'image' && (
																<div className="content-img-upload">
																	<MediaUploadCheck>
																		<MediaUpload
																			onSelect={(media) =>
																				updateSlideBackgroundImage(
																					slide.id,
																					media.url,
																				)
																			}
																			allowedTypes={['image']}
																			render={({ open }) => (
																				<>
																					{!slide.backgroundImage && (
																						<Button
																							onClick={open}
																							style={{
																								width: '100%',
																								display: 'flex',
																								alignItems: 'center',
																								justifyContent: 'space-between',
																							}}
																						>
																							<div>
																								<span
																									class="dashicons dashicons-format-image"
																									style={{
																										fontSize: '16px',
																										width: '16px',
																										height: '16px',
																										marginLeft: '-2px',
																										marginRight: '5px',
																									}}
																								></span>
																								{__(
																									'Select Background Image',
																									'cocoblocks'
																								)}
																							</div>
																							<span
																								class="dashicons dashicons-arrow-down-alt2"
																								style={{
																									position: 'relative',
																									right: '2px',
																									top: '6px',
																									fontSize: '12px',
																								}}
																							></span>
																						</Button>
																					)}
																					{slide.backgroundImage && (
																						<>
																							<div
																								style={{
																									position: 'relative',
																									padding: '0px 10px',
																									marginTop: '12px',
																								}}
																							>
																								
																								<FocalPointPicker
																								    className='focal-point-picker'
																									value={slide.focalPoint || { x: 0.5, y: 0.5 }}
																									onChange={(newFocalPoint) => handleFocalPointChange(slide.id, newFocalPoint)}
																									url={slide.backgroundImage}
																								/>
																							
																							</div>
																							<div className="custom-select">
																								<SelectControl
																									label={__('Image fit', 'cocoblocks')}
																									value={slide.fit}
																									options={[
																										{ label: __('Cover', 'slider'),value: 'cover',},
																										{ label: __('auto', 'slider'), value: 'auto' },
																									]}
																									onChange={(newFit) =>
																										updateSlideFit(slide.id, newFit)
																									}
																								/>
																							</div>
																							<Button
																								onClick={open}
																								style={{
																									marginLeft: '2px',
																									position: 'relative',
																									top: '-2px',
																								}}
																								className="button-replace"
																								icon={replace}
																								label={__(
																									'Change Background Image',
																									'cocoblocks'
																								)}
																							></Button>
																						</>
																					)}
																				</>
																			)}
																		/>
																	</MediaUploadCheck>
																	{slide.backgroundImage && (
																		<Button
																			onClick={() =>
																				updateSlideBackgroundImage(
																					slide.id,
																					null
																				)
																			}
																			isDestructive
																			icon={trash}
																			label={__('Delete Image', 'wp-kube')}
																		></Button>
																	)}
																</div>
															)}

															{tab.name === 'video' && (
																<div className="content-img-upload">
																	<MediaUploadCheck>
																		<MediaUpload
																			onSelect={(media) =>
																				updateSlideBackgroundVideo(
																					slide.id,
																					media.url
																				)
																			}
																			allowedTypes={['video']}
																			render={({ open }) => (
																				<>
																					{!slide.backgroundVideo && (
																						<Button
																							onClick={open}
																							style={{
																								width: '100%',
																								display: 'flex',
																								alignItems: 'center',
																								justifyContent: 'space-between',
																							}}
																						>
																							<div>
																								<span
																									class="dashicons dashicons-format-video"
																									style={{
																										fontSize: '16px',
																										width: '16px',
																										height: '16px',
																										marginLeft: '-2px',
																										marginRight: '5px',
																									}}
																								></span>
																								{__(
																									'Select Background Video',
																									'cocoblocks'
																								)}
																							</div>
																							<span
																								class="dashicons dashicons-arrow-down-alt2"
																								style={{
																									position: 'relative',
																									right: '2px',
																									top: '6px',
																									fontSize: '12px',
																								}}
																							></span>
																						</Button>
																					)}
																					{slide.backgroundVideo && (
																						<>
																							<div
																								style={{
																									position: 'relative',
																									padding: '0px 10px',
																									marginTop: '12px',
																								}}
																							>
																								<FocalPointPicker
																								    className='focal-point-picker'
																									value={slide.focalPoint || { x: 0.5, y: 0.5 }}
																									onChange={(newFocalPoint) => handleFocalPointChange(slide.id, newFocalPoint)}
																									url={slide.backgroundVideo}
																								/>
																							</div>
																							<Button
																								onClick={open}
																								style={{ marginLeft: '2px' }}
																								icon={replace}
																								label={__(
																									'Change Background Video',
																									'cocoblocks'
																								)}
																							></Button>
																						</>
																					)}
																				</>
																			)}
																		/>
																	</MediaUploadCheck>
																	{slide.backgroundVideo && (
																		<Button
																			onClick={() =>
																				updateSlideBackgroundVideo(
																					slide.id,
																					null
																				)
																			}
																			isDestructive
																			icon={trash}
																			label={__('Delete Video', 'wp-kube')}
																		></Button>
																	)}
																</div>
															)}
														</>
													)}
												</TabPanel>
											</div>
											<div className="custom-select">
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
															{__('Content direction', 'cocoblocks')}
														</>
													}
													value={slide.layout}
													options={[
														{
															label: __('Column', 'slider'),
															value: 'vertical',
														},
														{ label: __('Row', 'slider'), value: 'horizontal' },
													]}
													onChange={(newLayout) =>
														updateSlideLayout(slide.id, newLayout)
													}
												/>
											</div>
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
															{__('Gap between items', 'cocoblocks')}
														</>
													}
													value={slide.gapItems}
													onChange={(newGapItems) =>
														updateSlideGapItems(slide.id, newGapItems)
													}
													min={0}
													max={256}
													step={1}
												/>
											</div>
											<div className="custom-select">
												<AlignmentControl
													value={slide.position}
													onChange={(newPosition) =>
														updateSlidePosition(slide.id, newPosition)
													}
												/>
											</div>
											<div className="custom-select color">
												<ColorOptionsPanel
													colorNormal={slide.backgroundBorderColor}
													setColorNormal={(color) =>
														updateSlideBackgroundBorderColor(slide.id, color)
													}
													buttonTitle={__('Border Color', 'cocoblocks')}
													buttonIcon="button"
												/>
											</div>
											{/* Elements */}
											{slide.elements &&
												slide.elements.map((element, elementIndex) => (
													<div
														key={elementIndex}
														style={{
															marginBottom: '10px',
															alignItems: 'center',
														}}
													>
														<div
															className="button-move"
															style={{
																marginTop: '6px',
																marginBottom: '10px',
															}}
														>
															<Tooltip text={__('Move before', 'cocoblocks')}>
																<Button
																	onClick={() =>
																		moveElementUp(slide.id, elementIndex)
																	}
																	size="small"
																	disabled={elementIndex === 0}
																	label={__('Move before', 'cocoblocks')}
																>
																	↑
																</Button>
															</Tooltip>
															<Tooltip text={__('Move after', 'cocoblocks')}>
																<Button
																	onClick={() =>
																		moveElementDown(slide.id, elementIndex)
																	}
																	size="small"
																	disabled={
																		elementIndex === slide.elements.length - 1
																	}
																	label={__('Move after', 'cocoblocks')}
																>
																	↓
																</Button>
															</Tooltip>
														</div>
														{element.type === 'title' && (
															<>
																<div className="divider-controls"></div>
																<div
																	className="custom-select"
																	style={{ paddingTop: '6px' }}
																>
																	<Button
																		isDestructive
																		onClick={() =>
																			removeSlideTitle(slide.id, elementIndex)
																		}
																		className="button-remove-element"
																		style={{
																			position: 'absolute',
																			right: '70px',
																			top: '2px',
																		}}
																		label={__('Remove Text', 'cocoblocks')}
																		icon={trash}
																	></Button>
																	<TextareaControl
																		label={
																			<>
																				<span
																					class="dashicons dashicons-media-text"
																					style={{ marginRight: '5px' }}
																				></span>
																				{__('Text', 'cocoblocks')}
																			</>
																		}
																		value={element.text}
																		onChange={(newTitle) =>
																			updateSlideTitle(
																				slide.id,
																				elementIndex,
																				newTitle
																			)
																		}
																		placeholder={__(
																			'Add text content...',
																			'cocoblocks'
																		)}
																	/>
																	<ButtonGroup className="device-switcher">
																		<Button
																			size="small"
																			isPressed={device === 'desktop'}
																			onClick={() =>
																				setAttributes({
																					device: 'desktop',
																				})
																			}
																		>
																			<span className="dashicons dashicons-desktop"></span>
																		</Button>
																		<Button
																			size="small"
																			isPressed={device === 'tablet'}
																			onClick={() =>
																				setAttributes({
																					device: 'tablet',
																				})
																			}
																		>
																			<span className="dashicons dashicons-tablet"></span>
																		</Button>
																		<Button
																			size="small"
																			isPressed={device === 'mobile'}
																			onClick={() =>
																				setAttributes({
																					device: 'mobile',
																				})
																			}
																		>
																			<span className="dashicons dashicons-smartphone"></span>
																		</Button>
																	</ButtonGroup>
																	{device === 'desktop' && (
																		<RangeControl
																			label={__('Font Size', 'cocoblocks')}
																			beforeIcon="desktop"
																			value={element.fontSize || 16}
																			onChange={(newSize) =>
																				updateFontSize(
																					slide.id,
																					elementIndex,
																					newSize
																				)
																			}
																			min={4}
																			max={128}
																			step={1}
																		/>
																	)}
																	{device === 'tablet' && (
																		<RangeControl
																			label={__('Font Size', 'cocoblocks')}
																			beforeIcon="tablet"
																			value={element.fontSizeTablet || 16}
																			onChange={(newSizeTablet) =>
																				updateFontSizeTablet(
																					slide.id,
																					elementIndex,
																					newSizeTablet
																				)
																			}
																			min={4}
																			max={128}
																			step={1}
																		/>
																	)}
																	{device === 'mobile' && (
																		<RangeControl
																			label={__('Font Size', 'cocoblocks')}
																			beforeIcon="smartphone"
																			value={element.fontSizeMobile || 16}
																			onChange={(newSizeMobile) =>
																				updateFontSizeMobile(
																					slide.id,
																					elementIndex,
																					newSizeMobile
																				)
																			}
																			min={4}
																			max={128}
																			step={1}
																		/>
																	)}
																</div>
															</>
														)}
														{element.type === 'div' && (
															<>
																<div className="divider-controls"></div>
																<div className="custom-select">
																	<div className='label-image-element'>
																		<div className='content-label-image'>
																            <span
																				className="dashicons dashicons-format-image"
																				style={{
																					fontSize: '16px',
																					width: '16px',
																					marginRight: '10px',
																					color: 'var(--light-color)',
																				}}
																			></span><h2>{__('Block','slider')}</h2>
																		</div>
																		<Button
																			onClick={() =>
																				removeSlideDiv(slide.id, elementIndex)
																			}
																			isDestructive
																			icon={trash}
																			label={__('Remove block', 'cocoblocks')}
																			className="button-remove-element"
																		/>
																	</div>
																	<TextareaControl
																		label={__('Text', 'cocoblocks')}
																		value={element.content}
																		onChange={(newContent) =>
																			updateSlideDiv(
																				slide.id,
																				elementIndex,
																				newContent
																			)
																		}
																		placeholder={__(
																			'Add text block...',
																			'cocoblocks'
																		)}
																	/>
																	<div className="custom-select color">
																		<ColorOptionsPanel
																			colorNormal={element.backgroundColor}
																			setColorNormal={(newColor) =>
																				updateDivBackgroundColor(slide.id, elementIndex,
																					newColor)
																			}
																			buttonTitle={__('Background Color', 'cocoblocks')}
																			buttonIcon="admin-customizer"
																		/>
																	</div>
																	<div className="content-img-upload">
																		<MediaUploadCheck>
																			<MediaUpload
																				onSelect={(media) => updateDivImage(slide.id, elementIndex, media.url, media.alt)}
																				allowedTypes={['image']}
																				render={({ open }) => (
																					<>
																						{!slide.elements[elementIndex].imageUrl ? (
																							<Button
																								onClick={open}
																								style={{
																									width: '100%',
																									display: 'flex',
																									alignItems: 'center',
																									justifyContent: 'space-between',
																								}}
																							>
																								<div>
																									<span
																										className="dashicons dashicons-format-image"
																										style={{
																											fontSize: '16px',
																											width: '16px',
																											height: '16px',
																											marginLeft: '-2px',
																											marginRight: '5px',
																										}}
																									></span>
																									{__('Add Image', 'cocoblocks')}
																								</div>
																								<span
																									className="dashicons dashicons-arrow-down-alt2"
																									style={{
																										position: 'relative',
																										right: '2px',
																										top: '6px',
																										fontSize: '12px',
																									}}
																								></span>
																							</Button>
																						) : (
																							<>
																								<div
																									style={{
																										position: 'relative',
																										padding: '0px 10px',
																										marginTop: '12px',
																									}}
																								>
																									<img
																										src={slide.elements[elementIndex].imageUrl}
																										alt={slide.elements[elementIndex].alt || __('Uploaded Image', 'cocoblocks')}
																										style={{
																											width: '100%',
																											borderRadius: '8px',
																										}}
																									/>
																								</div>
																								<Button
																									onClick={open}
																									style={{ marginLeft: '2px' }}
																									icon={replace}
																									label={__('Change Image', 'cocoblocks')}
																								></Button>
																							</>
																						)}
																					</>
																				)}
																			/>
																		</MediaUploadCheck>
																		{slide.elements[elementIndex].imageUrl && (
																			<Button
																				onClick={() => removeDivImage(slide.id, elementIndex)}
																				isDestructive
																				icon={trash}
																				label={__('Remove Image', 'cocoblocks')}
																				style={{ marginTop: '10px' }}
																			></Button>
																		)}
																	</div>
																	<div className="button-add-element" style={{paddingBottom:'12px'}}>
																		<Button
																			onClick={() =>
																				addInnerDiv(slide.id, elementIndex)
																			}
																			label={__('Add inner block', 'slide')}
																		>
																			<Icon icon={addTemplate} />
																		</Button>
																	</div>
																	
																	{element.innerDivs &&
																		element.innerDivs.map(
																			(innerDiv, innerIndex) => (
																				<div key={innerIndex}>
																					<div className="divider-controls" style={{height:'2px'}}></div>
                                                                                    <div className='label-image-element'>
																						<div className='content-label-image'>
																							<span
																								className="dashicons dashicons-format-image"
																								style={{
																									fontSize: '16px',
																									width: '16px',
																									marginRight: '10px',
																									color: 'var(--light-color)',
																								}}
																							></span><h2>{__('Inner block','slider')}</h2>
																						</div>
																						<Button
																							onClick={() =>
																								removeInnerDiv(
																									slide.id,
																									elementIndex,
																									innerIndex
																								)
																							}
																							isDestructive
																							icon={trash}
																							label={__('Remove inner block', 'cocoblocks')}
																							className="button-remove-element"
																						/>
																					</div>
																					<TextareaControl
																						label={__(
																							'Text',
																							'cocoblocks'
																						)}
																						value={innerDiv.content}
																						onChange={(newContent) =>
																							updateInnerDivContent(
																								slide.id,
																								elementIndex,
																								innerIndex,
																								newContent
																							)
																						}
																						placeholder={__(
																							'Add inner block content...',
																							'cocoblocks'
																						)}
																					/>
																					<div className="custom-select color">
																						<ColorOptionsPanel
																							colorNormal={innerDiv.backgroundColor}
																							setColorNormal={(newColor) =>
																								updateInnerDivBackgroundColor(slide.id, elementIndex,innerIndex,
																									newColor)
																							}
																							buttonTitle={__('Background Color', 'cocoblocks')}
																							buttonIcon="admin-customizer"
																						/>
																					</div>
																					<div className="content-img-upload">
																						<MediaUploadCheck>
																							<MediaUpload
																								onSelect={(media) =>
																									updateInnerDivImage(
																										slide.id,
																										elementIndex,
																										innerIndex,
																										media.url,
																										media.alt
																									)
																								}
																								allowedTypes={['image']}
																								render={({ open }) => (
																									<>
																										{!innerDiv.imageUrl ? (
																											<Button
																												onClick={open}
																												style={{
																													width: '100%',
																													display: 'flex',
																													alignItems: 'center',
																													justifyContent: 'space-between',
																												}}
																											>
																												<div>
																													<span
																														className="dashicons dashicons-format-image"
																														style={{
																															fontSize: '16px',
																															width: '16px',
																															height: '16px',
																															marginLeft: '-2px',
																															marginRight: '5px',
																														}}
																													></span>
																													{__('Add Image', 'cocoblocks')}
																												</div>
																												<span
																													className="dashicons dashicons-arrow-down-alt2"
																													style={{
																														position: 'relative',
																														right: '2px',
																														top: '6px',
																														fontSize: '12px',
																													}}
																												></span>
																											</Button>
																										) : (
																											<>
																												<div
																													style={{
																														position: 'relative',
																														padding: '0px 10px',
																														marginTop: '12px',
																													}}
																												>
																													<img
																														src={innerDiv.imageUrl}
																														alt={innerDiv.alt || __('Uploaded Image', 'cocoblocks')}
																														style={{
																															width: '100%',
																															borderRadius: '8px',
																														}}
																													/>
																												</div>
																												<Button
																													onClick={open}
																													style={{ marginLeft: '2px' }}
																													icon={replace}
																													label={__('Change Image', 'cocoblocks')}
																												></Button>
																											</>
																										)}
																									</>
																								)}
																							/>
																						</MediaUploadCheck>
																						{innerDiv.imageUrl && (
																							<Button
																								onClick={() => removeInnerDivImage(slide.id, elementIndex, innerIndex)}
																								isDestructive
																								icon={trash}
																								label={__('Remove Image', 'cocoblocks')}
																								style={{ marginTop: '10px' }}
																							></Button>
																						)}
																					</div>
																				</div>
																			)
																		)}
																</div>
															</>
														)}
														{element.type === 'image' && (
															<>
																<div className="divider-controls"></div>
																<div className="custom-select">
																<div className="content-img-upload">
																	<div className='label-image-element'>
																		<div className='content-label-image'>
																            <span
																				className="dashicons dashicons-format-image"
																				style={{
																					fontSize: '16px',
																					width: '16px',
																					marginRight: '10px',
																					color: 'var(--light-color)',
																				}}
																			></span><h2>{__('Image','slider')}</h2>
																		</div>
																		<Button
																			onClick={() =>
																				removeSlideImage(
																					slide.id,
																					elementIndex
																				)
																			}
																			isDestructive
																			icon={trash}
																			label={__('Remove Image', 'cocoblocks')}
																			className="button-remove-element"
																		/>
																	</div>
																	<MediaUploadCheck>
																		<MediaUpload
																			onSelect={(media) =>
																				updateSlideImage(
																					slide.id,
																					elementIndex,
																					media.url,
																					media.alt
																				)
																			}
																			allowedTypes={['image']}
																			render={({ open }) => (
																				<>
																					{!element.url ? (
																						<Button
																							onClick={open}
																							style={{
																								width: '100%',
																								display: 'flex',
																								alignItems: 'center',
																								justifyContent: 'space-between',
																							}}
																						>
																							<div>
																								
																								{__(
																									'Upload Image',
																									'cocoblocks'
																								)}
																							</div>
																							<span
																								className="dashicons dashicons-arrow-down-alt2"
																								style={{
																									position: 'relative',
																									right: '2px',
																									top: '6px',
																									fontSize: '12px',
																								}}
																							></span>
																						</Button>
																					) : (
																						<>
																							<div
																								style={{
																									position: 'relative',
																									padding: '0px 10px',
																									marginTop: '12px',
																								}}
																							>
																								<img
																									src={element.url}
																									alt={
																										element.alt ||
																										__(
																											'Uploaded Image',
																											'cocoblocks'
																										)
																									}
																									style={{
																										width: '100%',
																										borderRadius: '8px',
																									}}
																								/>
																							</div>
																							<Button
																								onClick={open}
																								style={{
																									marginLeft: '2px',
																									position: 'relative',
																									top: '-2px',
																								}}
																								className="button-replace"
																								icon={replace}
																								label={__(
																									'Change Image',
																									'cocoblocks'
																								)}
																							/>
																						</>
																					)}
																				</>
																			)}
																		/>
																	</MediaUploadCheck>

																	{element.url && (
																		<>
																			<TextareaControl
																				label={__('Alt Text', 'cocoblocks')}
																				value={element.alt || ''}
																				onChange={(newAlt) =>
																					updateSlideImage(
																						slide.id,
																						elementIndex,
																						element.url,
																						newAlt
																					)
																				}
																				placeholder={__(
																					'Add alt text...',
																					'cocoblocks'
																				)}
																			/>
																		</>
																	)}
																</div>
																</div>
															</>
														)}
													</div>
												))}
											<div className="divider-controls"></div>
											<div className="button-add-element">
												<Button
													onClick={() => addSlideTitle(slide.id)}
													label={__('Add text', 'slide')}
												>
													<svg
														fill="currentcolor"
														xmlns="http://www.w3.org/2000/svg"
														width="20px"
														height="20px"
														viewBox="0 0 56 56"
													>
														<path d="M 16.2929 29.6406 C 22.7617 29.6406 28.1992 24.2266 28.1992 17.7109 C 28.1992 11.1953 22.8320 5.8047 16.2929 5.8047 C 9.7773 5.8047 4.3867 11.1953 4.3867 17.7109 C 4.3867 24.2734 9.7773 29.6406 16.2929 29.6406 Z M 33.8008 13.3750 L 49.8085 13.3750 C 50.8165 13.3750 51.6133 12.6015 51.6133 11.5937 C 51.6133 10.6094 50.8165 9.8359 49.8085 9.8359 L 33.8008 9.8359 C 32.7929 9.8359 32.0195 10.6094 32.0195 11.5937 C 32.0195 12.6015 32.7929 13.3750 33.8008 13.3750 Z M 16.3164 25.4453 C 15.4960 25.4453 14.7695 24.8828 14.7695 24.0156 L 14.7695 19.1406 L 10.2929 19.1406 C 9.4960 19.1406 8.8398 18.4844 8.8398 17.7109 C 8.8398 16.9375 9.4960 16.2812 10.2929 16.2812 L 14.7695 16.2812 L 14.7695 11.4297 C 14.7695 10.5390 15.4960 10.0000 16.3164 10.0000 C 17.1367 10.0000 17.8398 10.5390 17.8398 11.4297 L 17.8398 16.2812 L 22.3164 16.2812 C 23.1132 16.2812 23.7695 16.9375 23.7695 17.7109 C 23.7695 18.4844 23.1132 19.1406 22.3164 19.1406 L 17.8398 19.1406 L 17.8398 24.0156 C 17.8398 24.8828 17.1367 25.4453 16.3164 25.4453 Z M 33.8008 25.6563 L 49.8085 25.6563 C 50.8165 25.6563 51.6133 24.8828 51.6133 23.8750 C 51.6133 22.8906 50.8165 22.1172 49.8085 22.1172 L 33.8008 22.1172 C 32.7929 22.1172 32.0195 22.8906 32.0195 23.8750 C 32.0195 24.8828 32.7929 25.6563 33.8008 25.6563 Z M 6.1679 37.9375 L 49.8085 37.9375 C 50.8165 37.9375 51.6133 37.1406 51.6133 36.1563 C 51.6133 35.1719 50.8165 34.3984 49.8085 34.3984 L 6.1679 34.3984 C 5.1601 34.3984 4.3867 35.1719 4.3867 36.1563 C 4.3867 37.1406 5.1601 37.9375 6.1679 37.9375 Z M 6.1679 50.1953 L 49.8085 50.1953 C 50.8165 50.1953 51.6133 49.4219 51.6133 48.4375 C 51.6133 47.4531 50.8165 46.6562 49.8085 46.6562 L 6.1679 46.6562 C 5.1601 46.6562 4.3867 47.4531 4.3867 48.4375 C 4.3867 49.4219 5.1601 50.1953 6.1679 50.1953 Z"></path>
													</svg>
												</Button>
												<Button
													onClick={() => addSlideImage(slide.id)}
													label={__('Add image', 'slide')}
												>
													<span class="dashicons dashicons-format-image"></span>
												</Button>
												<Button
													onClick={() => addSlideDiv(slide.id)}
													label={__('Add block', 'slide')}
												>
													<Icon icon={addTemplate} />
												</Button>
											</div>
										</div>
									</PanelBody>
								))}

								<div id="controls" className="button-add-slide">
									<div className="content-button-slide">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											height="24px"
											viewBox="0 -960 960 960"
											width="24px"
											fill="#5f6368"
										>
											<path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
										</svg>
										<button onClick={addSlide}>
											{__('Add Slide', 'slider')}
										</button>
									</div>
								</div>
							</div>
						</>
					)}
				</TabPanel>
			</InspectorControls>

			<div {...blockProps}>
				<Swiper
					key={key}
					navigation={true}
					modules={[Navigation, EffectCards, EffectCube, Grid]}
					className="mySwiper"
					dir={languageSlider}
					direction={directionSlider}
					effect={effect}
					simulateTouch={!isGutenbergEditor}
					centeredSlides={centeredSlides}
					initialSlide={initialSlide}
					autoHeight={autoHeight}
					grabCursor={grabCursor}
					loop={loopMode === 'enable'}
					rewind={loopMode === 'rewind'}
					grid={{
						rows: slidesPerRow,
						fill: 'row',
					}}
					cubeEffect={{
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}}
					breakpoints={{
						640: {
						  slidesPerView: perViewSliderMobile,
						  spaceBetween: spaceBetweenMobile,
						  slidesPerGroup: slidesPerGroupMobile
						},
						768: {
						  slidesPerView: perViewSliderTablet,
						  spaceBetween: spaceBetweenTablet,
						  slidesPerGroup: slidesPerGroupTablet
						},
						1024: {
						  slidesPerView:perViewSlider,
						  spaceBetween: spaceBetween,
						  slidesPerGroup: slidesPerGroupDesktop
						},
					}}

				>
					{slides.map((slide) => (
						<SwiperSlide key={slide.id}>
							<div
								className={'swiper-slide ' + slide.position}
								style={{
									backgroundImage:
										slide.backgroundType === 'image' && slide.backgroundImage
											? `url(${slide.backgroundImage})`
											: 'none',
									background:
										slide.backgroundType === 'color'
											? slide.backgroundColor
											: slide.backgroundType === 'gradient'
											? slide.backgroundGradient
											: 'transparent',
									backgroundSize: slide.fit ? slide.fit : 'cover',
									backgroundPosition: slide.focalPoint
									? `${slide.focalPoint.x * 100}% ${slide.focalPoint.y * 100}%`
									: 'center',
									height: autoHeight ? 'auto' : `${slideHeight}px`,
									display: 'flex',
									flexDirection:
										slide.layout === 'horizontal' ? 'row' : 'column',
									textAlign: 'center',
									width: '100%',
									position: 'relative',
									visibility: 'visible',
									gap: slide.gapItems + 'px',
									border: slide.backgroundBorderColor
										? `3px solid ${slide.backgroundBorderColor}`
										: 'none',
								}}
							>
								{slide.backgroundType === 'video' && slide.backgroundVideo && (
									<video
										src={slide.backgroundVideo}
										autoPlay
										muted
										loop
										style={{
											width: '100%',
											height: '100%',
											position: 'absolute',
											objectPosition: slide.focalPoint
											? `${slide.focalPoint.x * 100}% ${slide.focalPoint.y * 100}%`
											: 'center',
											top: 0,
											left: 0,
											zIndex: 0,
											objectFit: 'cover',
										}}
									/>
								)}
								{slide.elements.map((element, index) => {
									// Styles Title
									const stylesTitle = {
										fontSize: element.fontSize + 'px',
										'--font-size-tablet': element.fontSizeTablet + 'px',
										'--font-size-mobile': element.fontSizeMobile + 'px',
									};
									switch (element.type) {
										case 'title':
											return (
												<div key={index}>
													{element.text ? (
														<h3 className="title-slide" style={stylesTitle}>
															{element.text}
														</h3>
													) : (
														<p>No title</p>
													)}
												</div>
											);
										case 'div':
											return (
												<div
													key={index}
													style={{
														backgroundColor:
															element.backgroundColor || 'transparent',
													}}
												>
													{element.content ? (
														<div style={{ maxWidth: '100%' }}>
															{element.content}
														</div>
													) : null}
													{element.imageUrl && (
														<img src={element.imageUrl} alt="" />
													)}
													{element.innerDivs && element.innerDivs.length > 0
														? element.innerDivs.map((innerDiv, innerIndex) => (
																<div
																	key={innerIndex}
																	style={{
																		backgroundColor:
																			innerDiv.backgroundColor || 'transparent',
																		maxWidth: '100%',
																	}}
																>
																	{innerDiv.content ? (
																		<div>{innerDiv.content}</div>
																	) : null}
																	{innerDiv.imageUrl && (
																		<img src={innerDiv.imageUrl} alt="" />
																	)}
																</div>
														  ))
														: null}
												</div>
											);
										case 'image':
											return (
												<div
													key={index}
													style={{
														maxWidth: '100%',
													}}
												>
													<img src={element.url} alt={element.alt} />
												</div>
											);
										default:
											return null;
									}
								})}
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	);
}
