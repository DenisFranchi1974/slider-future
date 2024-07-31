import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, MediaUpload, MediaUploadCheck  } from '@wordpress/block-editor';
import { SelectControl, Button, PanelBody, Icon, TabPanel, DropdownMenu, TextareaControl, ColorPicker, __experimentalAlignmentMatrixControl as AlignmentMatrixControl, RangeControl} from '@wordpress/components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCards, EffectCube } from 'swiper/modules';
import { useEffect, useState } from '@wordpress/element';
import './editor.scss';
import '../components/editor.scss'
import ColorOptionsPanel from '../components/colorPanel';
import {trash,replace } from '@wordpress/icons';

export default function Edit({ attributes, setAttributes }) {
	const { 
		directionSlider,
		effect,
		slides,
		languageSlider,
	} = attributes;

	// General Tab
    const onSelect = (tabName) => {
	};
	
	const blockProps = useBlockProps();

	// Background Slide
	const [backgroundType, setBackgroundType] = useState('');
	
	// Add Slide
	const addSlide = () => {
		const newSlide = { 
			id: slides.length + 1, 
			title: [
				{ text: '', fontSize: 16 } // Imposta il fontSize di default a 16
			],
			divs: [
			]
		};
		const updatedSlides = [...slides, newSlide];
		setAttributes({ slides: updatedSlides });
	};
	// Remove Slide
	const removeSlide = (id) => {
		const updatedSlides = slides.filter(slide => slide.id !== id);
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
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? { 
					...slide, 
					divs: [
						...(slide.divs || []), 
						{ content: '', backgroundColor: '', imageUrl: '', innerDivs: [] }
					] 
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	
    // Update Content
	const updateSlideDiv = (slideId, index, newContent) => {
		const updatedSlides = slides.map(slide => 
		slide.id === slideId
					? {
						...slide,
						divs: slide.divs.map((div, i) =>
							i === index ? { ...div, content: newContent } : div
						)
					}
					: slide
			);
		setAttributes({ slides: updatedSlides });
	};
	// Background color Content
	const updateDivBackgroundColor = (slideId, index, newColor) => {
		const updatedSlides = slides.map(slide => 
				slide.id === slideId
				? {
					...slide,
					divs: slide.divs.map((div, i) =>
						i === index ? { ...div,  backgroundColor: newColor } : div
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Image Content
	const updateDivImage = (slideId, divIndex, imageUrl) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					divs: slide.divs.map((div, index) =>
						index === divIndex ? { ...div, imageUrl } : div
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Remove Content
	const removeSlideDiv = (slideId, index) => {
		const updatedSlides = slides.map(slide => 
			slide.id === slideId
					? { ...slide, divs: slide.divs.filter((_, i) => i !== index) }
					: slide
			);
		setAttributes({ slides: updatedSlides });
	};

	// Add Inner Content
	const addInnerDiv = (slideId, divIndex) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					divs: slide.divs.map((div, index) =>
						index === divIndex
							? {
								...div,
								innerDivs: [
									...(div.innerDivs || []), 
									{ content: '', backgroundColor: '', imageUrl: '' }
								]
							}
							: div
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Update Innder Div
	const updateInnerDivContent = (slideId, divIndex, innerIndex, newContent) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					divs: slide.divs.map((div, index) =>
						index === divIndex
							? {
								...div,
								innerDivs: div.innerDivs.map((innerDiv, i) =>
									i === innerIndex ? { ...innerDiv, content: newContent } : innerDiv
								)
							}
							: div
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Background 
	const updateInnerDivBackgroundColor = (slideId, divIndex, innerIndex, newColor) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					divs: slide.divs.map((div, index) =>
						index === divIndex
							? {
								...div,
								innerDivs: div.innerDivs.map((innerDiv, i) =>
									i === innerIndex ? { ...innerDiv, backgroundColor: newColor } : innerDiv
								)
							}
							: div
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Image Inner Content
	const updateInnerDivImage = (slideId, divIndex, innerIndex, imageUrl) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					divs: slide.divs.map((div, index) =>
						index === divIndex
							? {
								...div,
								innerDivs: div.innerDivs.map((innerDiv, i) =>
									i === innerIndex ? { ...innerDiv, imageUrl } : innerDiv
								)
							}
							: div
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Remove Inner Content
	const removeInnerDiv = (slideId, divIndex, innerIndex) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					divs: slide.divs.map((div, index) =>
						index === divIndex
							? {
								...div,
								innerDivs: div.innerDivs.filter((_, i) => i !== innerIndex)
							}
							: div
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	
	
	
	

	// Add Text
	const addSlideTitle = (slideId) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? { 
					...slide, 
					titles: [
						...(slide.titles || []), 
						{ text: '', fontSize: 16 } 
					] 
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	
	// Update Text
	const updateSlideTitle = (slideId, index, newTitle) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					titles: slide.titles.map((title, i) =>
						i === index ? { ...title, text: newTitle } : title
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Size	
	const updateFontSize = (slideId, index, newSize) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					titles: slide.titles.map((title, i) =>
						i === index ? { ...title, fontSize: newSize } : title
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Position
	const updatePosition = (slideId, index, newPosition) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					titles: slide.titles.map((title, i) =>
						i === index ? { ...title, position: newPosition } : title
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Remove Text
	const removeSlideTitle = (slideId, index) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? { ...slide, titles: slide.titles.filter((_, i) => i !== index) }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};

	// Add Image
	const addSlideImage = (slideId) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? { ...slide, images: [...(slide.images || []), { url: '', alt: '' }] }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Update Image
	const updateSlideImage = (slideId, index, newUrl, newAlt) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? {
					...slide,
					images: slide.images.map((image, i) =>
						i === index ? { ...image, url: newUrl, alt: newAlt } : image
					)
				}
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Remove Image
	const removeSlideImage = (slideId, index) => {
		const updatedSlides = slides.map(slide =>
			slide.id === slideId
				? { ...slide, images: slide.images.filter((_, i) => i !== index) }
				: slide
		);
		setAttributes({ slides: updatedSlides });
	};
	

	// Image
	const updateSlideBackgroundImage = (id, newImage) => {
		const updatedSlides = slides.map(slide =>
			slide.id === id ? { ...slide, backgroundImage: newImage } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Remove image
	const removeSlideBackgroundImage = (id) => {
		const updatedSlides = slides.map(slide =>
			slide.id === id ? { ...slide, backgroundImage: null } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Background
	const updateSlideBackgroundColor = (id, color) => {
		const updatedSlides = slides.map(slide =>
			slide.id === id ? { ...slide, backgroundColor: color } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Video
	const updateSlideBackgroundVideo = (id, videoUrl) => {
		const updatedSlides = slides.map(slide =>
			slide.id === id ? { ...slide, backgroundVideo: videoUrl } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	// Remove video
	const removeSlideBackgroundVideo = (id) => {
		const updatedSlides = slides.map(slide =>
			slide.id === id ? { ...slide, backgroundVideo: null } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	const updateSlideBackgroundType = (id, type) => {
		const updatedSlides = slides.map(slide =>
			slide.id === id ? { ...slide, backgroundType: type } : slide
		);
		setAttributes({ slides: updatedSlides });
	};
	
	const key = `${effect}-${languageSlider}`;
	// Nessun movimento della slider 
	const isGutenbergEditor = typeof wp !== 'undefined' && wp.data && wp.data.select('core/editor');

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
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                const popovers = document.querySelectorAll('.components-dropdown-menu__popover .components-popover__content');
                popovers.forEach(popover => {
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
            subtree: true
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
							title: __('Content', 'wp-kube')
						}
					]}
				>
					{
					(tab) => (
					<>
					{/*TAB 1*/}
					<div className={'tab-1 ' + tab.name}>
					<PanelBody 
						className='cocoblocks-panel' 
						title= {__('Slider','cocoblocks')}
					>
						<div className='content-section-panel'>
							<div className='custom-select' style={{borderRadius:'8px'}}>
								<SelectControl
									label={ <><Icon icon="admin-site-alt3" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Language direction', 'cocoblocks')}</>}
									value={languageSlider}
									onChange={(val) => { setAttributes({languageSlider: val})}}
									options={ [
										{
											label: __( 'LTR', 'slide'),
											value: 'ltr',
										},
										{
											label: __( 'RTL', 'cocoblocks'),
											value: 'rtl',
										}
									] }
								/>
							</div>
						</div>
					</PanelBody>
					<PanelBody 
						className='cocoblocks-panel' 
						title= {__('Parameters','cocoblocks')}
						initialOpen= {true}
					>
						<div className='content-section-panel'>
							<div className='custom-select'>
								<SelectControl
									label={ <><Icon icon="move" style={{marginRight:'5px',width:'16px',height:'16px',fontSize:'16px'}}/>{__('Slide direction', 'cocoblocks')}</>}
									value={directionSlider}
									onChange={(val) => { setAttributes({directionSlider: val})}}
									options={ [
										{
											label: __( 'Horizontal', 'slide'),
											value: 'horizontal',
										},
										{
											label: __( 'Vertical', 'cocoblocks'),
											value: 'vertical',
										}
									] }
								/>
							</div>
							{directionSlider == 'vertical' &&
							<p className='notice components-base-control__help'>{__('You have to adjust a maximum height of the Slider!','cocoblocks')}</p>
							}
						</div>
						<div className='content-section-panel'>
							<div className='custom-select svg-select'>
								<SelectControl
									label={ <><svg fill="currentcolor" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 56 56"><path d="M 21.8712 15.5664 C 22.1524 15.5664 22.2930 15.4024 22.3399 15.1445 C 23.1368 11.3945 23.0899 11.2539 27.0040 10.4570 C 27.2852 10.4102 27.4493 10.2461 27.4493 9.9883 C 27.4493 9.7070 27.2852 9.5429 27.0040 9.4961 C 23.0899 8.6992 23.1368 8.5586 22.3399 4.8320 C 22.2930 4.5742 22.1524 4.3867 21.8712 4.3867 C 21.5899 4.3867 21.4493 4.5742 21.3790 4.8320 C 20.6055 8.5586 20.6524 8.6992 16.7149 9.4961 C 16.4571 9.5429 16.2696 9.7070 16.2696 9.9883 C 16.2696 10.2461 16.4571 10.4102 16.7149 10.4570 C 20.6524 11.2539 20.6055 11.3945 21.3790 15.1445 C 21.4493 15.4024 21.5899 15.5664 21.8712 15.5664 Z M 41.2306 23.8398 C 41.5587 23.8398 41.7462 23.6289 41.7930 23.3242 C 42.6134 18.8711 42.6368 18.5898 47.3475 17.7695 C 47.6523 17.7227 47.8866 17.5117 47.8866 17.1836 C 47.8866 16.8555 47.6523 16.6680 47.3475 16.5976 C 42.6368 15.8008 42.6134 15.5195 41.7930 11.0664 C 41.7462 10.7617 41.5587 10.5273 41.2306 10.5273 C 40.9024 10.5273 40.6915 10.7617 40.6446 11.0664 C 39.8477 15.5195 39.8243 15.8008 35.1134 16.5976 C 34.7852 16.6680 34.5743 16.8555 34.5743 17.1836 C 34.5743 17.5117 34.7852 17.7227 35.1134 17.7695 C 39.8243 18.5898 39.8477 18.8711 40.6446 23.3242 C 40.6915 23.6289 40.9024 23.8398 41.2306 23.8398 Z M 9.0274 30.5664 C 9.3555 30.5664 9.5430 30.3320 9.5899 30.0273 C 10.4102 25.5742 10.4337 25.2929 15.1446 24.4961 C 15.4493 24.4258 15.6837 24.2383 15.6837 23.9102 C 15.6837 23.5820 15.4493 23.3711 15.1446 23.3242 C 10.4337 22.5039 10.4102 22.2227 9.5899 17.7695 C 9.5430 17.4649 9.3555 17.2539 9.0274 17.2539 C 8.6993 17.2539 8.4884 17.4649 8.4415 17.7695 C 7.6212 22.2227 7.6212 22.5039 2.9102 23.3242 C 2.5821 23.3711 2.3712 23.5820 2.3712 23.9102 C 2.3712 24.2383 2.5821 24.4258 2.9102 24.4961 C 7.6212 25.2929 7.6212 25.5742 8.4415 30.0273 C 8.4884 30.3320 8.6993 30.5664 9.0274 30.5664 Z M 49.0352 50.6055 C 50.0432 51.6133 51.7304 51.6133 52.6448 50.6055 C 53.6288 49.5742 53.6288 47.9805 52.6448 46.9961 L 30.3790 24.6367 C 29.3946 23.6524 27.7071 23.6524 26.7696 24.6367 C 25.7852 25.6680 25.8087 27.2851 26.7696 28.2695 Z M 35.4181 34.5039 L 28.5508 27.6133 C 28.1290 27.1914 28.0118 26.7461 28.4102 26.3242 C 28.8087 25.9492 29.2540 26.0429 29.6993 26.4883 L 36.5899 33.3789 Z M 20.1602 50.9805 C 20.5821 50.9805 20.8868 50.6758 20.9337 50.2305 C 21.7071 43.9727 22.0118 43.8086 28.3634 42.7773 C 28.8790 42.6836 29.1837 42.4492 29.1837 41.9805 C 29.1837 41.5352 28.8790 41.2539 28.4571 41.1836 C 22.0587 39.9649 21.7071 39.9883 20.9337 33.7305 C 20.8868 33.2851 20.5821 32.9805 20.1602 32.9805 C 19.7149 32.9805 19.4102 33.2851 19.3634 33.7070 C 18.5430 40.0586 18.3087 40.2695 11.8399 41.1836 C 11.4181 41.2305 11.1134 41.5352 11.1134 41.9805 C 11.1134 42.4258 11.4181 42.6836 11.8399 42.7773 C 18.3087 44.0195 18.5196 44.0195 19.3634 50.2773 C 19.4102 50.6758 19.7149 50.9805 20.1602 50.9805 Z"></path></svg>{__('Effect', 'cocoblocks')}</>}
									value={effect}
									onChange={(val) => { setAttributes({effect: val})}}
									options={ [
										{
											label: __( 'Slide', 'cocoblocks'),
											value: 'slide',
										},
										{
											label: __( 'Fade', 'cocoblocks'),
											value: 'fade',
										},
										{
											label: __( 'Cube', 'cocoblocks'),
											value: 'cube',
										},
										{
											label: __( 'Flip', 'cocoblocks'),
											value: 'flip',
										},
										{
											label: __( 'Coverflow', 'cocoblocks'),
											value: 'coverflow',
										},
										{
											label: __( 'Cards', 'cocoblocks'),
											value: 'cards',
										},
										{
											label: __( 'Creative', 'cocoblocks'),
											value: 'creative',
										}
									] }
								/>
							</div>
						</div>
					</PanelBody>
					</div>
					{/*TAB 2*/}
					<div className={'tab-2 ' + tab.name}>
					    {slides.map((slide, index) => (
							<PanelBody
								key={index}
								className='cocoblocks-panel panel-slide'
								title={<>{renderCircle(slide.id)} {__('Slide', 'cocoblocks')} {index + 1}
								<div
									onClick={(event) => {
										event.stopPropagation();
									}}
								>
								<DropdownMenu
									icon="ellipsis"
									label={__('Slide Options', 'slider')}
									className='menu-slide-content'
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
								/></div></>}
								onToggle={() => handlePanelSelect(slide.id)}
								initialOpen={false}
							>
								<div className='content-section-panel'>
									<h2 className='title-tab'>{__('Background','slider')}</h2>
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
												title: <span>{__('Color', 'your-text-domain')}</span>,
											},
											{
												name: 'image',
												title: <span>{__('Image', 'your-text-domain')}</span>,
											},
											{
												name: 'video',
												title: <span>{__('Video', 'your-text-domain')}</span>,
											},
										]}
									>
										{(tab) => (
											<>
												{tab.name === 'color' && (
													<div className='custom-select color'>
														<ColorOptionsPanel
															colorNormal={slide.backgroundColor}
															setColorNormal={(color) => updateSlideBackgroundColor(slide.id, color)}
														/>
													</div>
												)}
												{tab.name === 'image' && (
													<div className='content-img-upload'>
														<MediaUploadCheck>
															<MediaUpload
																onSelect={(media) => updateSlideBackgroundImage(slide.id, media.url)}
																allowedTypes={['image']}
																render={({ open }) => (
																	<>
																		{!slide.backgroundImage && (
																			<Button onClick={open}>
																				{__('Select Background Image', 'cocoblocks')}
																			</Button>
																		)}
																		{slide.backgroundImage && (
																			<>
																			<div style={{ position: 'relative',padding: '0px 10px' }}>
																				<img src={slide.backgroundImage} alt={__('Background Image', 'cocoblocks')} style={{ width: '100%',borderRadius:'8px' }} />
																			</div>
																				<Button
																					onClick={open}
																					style={{ marginLeft: '2px' }}
																					icon={replace}
																					label={__('Change Background Image', 'cocoblocks')}
																				>
																				</Button>
																		</>
																		)}
																	</>
																)}
															/>
														</MediaUploadCheck>
														{slide.backgroundImage && (
															<Button onClick={() => updateSlideBackgroundImage(slide.id, null)} isDestructive icon={ trash } label={__('Delete Image','wp-kube')} ></Button>
														)}
													</div>
												)}

												{tab.name === 'video' && (
													<div className='content-img-upload'>
													<MediaUploadCheck>
														<MediaUpload
															onSelect={(media) => updateSlideBackgroundVideo(slide.id, media.url)}
															allowedTypes={['video']}
															render={({ open }) => (
																<>
																{!slide.backgroundVideo && (
																	<Button onClick={open}>
																		{__('Select Background Video', 'cocoblocks')}
																	</Button>

																)}
																{slide.backgroundVideo && (
																<>
																<div style={{ position: 'relative',padding: '0px 10px' }}>
																    <video src={slide.backgroundVideo} autoPlay muted loop style={{ width: '100%', borderRadius:'8px'}} />
																</div>
																<Button
																	onClick={open}
																	style={{ marginLeft: '2px' }}
																	icon={replace}
																	label={__('Change Background Video', 'cocoblocks')}
																>
																</Button>
																</>
																)}
																</>
															)}
														/>
													</MediaUploadCheck>
													{slide.backgroundVideo && (
														<Button onClick={() => updateSlideBackgroundVideo(slide.id, null)} isDestructive icon={ trash } label={__('Delete Video','wp-kube')} ></Button>
													)}
													</div>
												)}
											</>
										)}
									</TabPanel>
								
									
									{slide.titles && slide.titles.map((title, index) => (
										<div key={index} style={{ marginBottom: '10px', alignItems: 'center' }}>
											<TextareaControl
												label={__('Slide Title', 'cocoblocks')}
												value={title.text}  // Assicurati di usare title.text
												onChange={(newTitle) => updateSlideTitle(slide.id, index, newTitle)}
												placeholder={__('Slide Title', 'cocoblocks')}
											/>
											<RangeControl
												label={__('Font Size', 'cocoblocks')}
												value={title.fontSize || 16} 
												onChange={(newSize) => updateFontSize(slide.id, index, newSize)}
												min={4}
												max={128}
												step={1}
											/>
											<AlignmentMatrixControl
												value={ title.position}
												onChange={(newPosition) => updatePosition(slide.id, index, newPosition)}
											/>
			
											{/* Pulsante per rimuovere il titolo */}
											<Button
												isDestructive
												onClick={() => removeSlideTitle(slide.id, index)}
												style={{ marginLeft: '10px' }}
											>
												{__('Remove Title', 'cocoblocks')}
											</Button>
											{/* Mostra il bottone solo se l'ultimo titolo è vuoto */}
											{(index === slide.titles.length - 1) && (
												<Button
													isPrimary
													onClick={() => addSlideTitle(slide.id)}
													style={{ marginLeft: '10px' }}
												>
													{__('Add Title', 'cocoblocks')}
												</Button>
											)}
										</div>
									))}
									{/* Mostra il bottone "Add Title" se non ci sono titoli */}
									{(!slide.titles || slide.titles.length === 0) && (
										<Button
											isPrimary
											onClick={() => addSlideTitle(slide.id)}
										>
											{__('Add Title', 'cocoblocks')}
										</Button>
									)}

{slide.divs && slide.divs.map((div, index) => (
	<div key={index} style={{ marginBottom: '10px', alignItems: 'center' }}>
		<TextareaControl
			label={__('Div Content', 'cocoblocks')}
			value={div.content}
			onChange={(newContent) => updateSlideDiv(slide.id, index, newContent)}
			placeholder={__('Div Content', 'cocoblocks')}
		/>
		<ColorPicker
			label={__('Background Color', 'cocoblocks')}
			color={div.backgroundColor}
			onChangeComplete={(newColor) => updateDivBackgroundColor(slide.id, index, newColor.hex)}
		/>
		<MediaUpload
			onSelect={(media) => updateDivImage(slide.id, index, media.url)}
			type="image"
			value={div.imageUrl}
			render={({ open }) => (
				<Button onClick={open}>
					{!div.imageUrl ? __('Upload Image', 'cocoblocks') : <img src={div.imageUrl} alt="" style={{ width: '100px' }} />}
				</Button>
			)}
		/>
		<Button
			isDestructive
			onClick={() => removeSlideDiv(slide.id, index)}
			style={{ marginLeft: '10px' }}
		>
			{__('Remove Div', 'cocoblocks')}
		</Button>
		<Button
			isPrimary
			onClick={() => addInnerDiv(slide.id, index)}
			style={{ marginLeft: '10px' }}
		>
			{__('Add Inner Div', 'cocoblocks')}
		</Button>
		{(index === slide.divs.length - 1) && (
			<Button
				isPrimary
				onClick={() => addSlideDiv(slide.id)}
				style={{ marginLeft: '10px' }}
			>
				{__('Add Div', 'cocoblocks')}
			</Button>
		)}
		{div.innerDivs && div.innerDivs.map((innerDiv, innerIndex) => (
			<div key={innerIndex} style={{ marginLeft: '20px', marginBottom: '10px', alignItems: 'center' }}>
				<TextareaControl
					label={__('Inner Div Content', 'cocoblocks')}
					value={innerDiv.content}
					onChange={(newContent) => updateInnerDivContent(slide.id, index, innerIndex, newContent)}
					placeholder={__('Inner Div Content', 'cocoblocks')}
				/>
				<ColorPicker
					label={__('Inner Div Background Color', 'cocoblocks')}
					color={innerDiv.backgroundColor}
					onChangeComplete={(newColor) => updateInnerDivBackgroundColor(slide.id, index, innerIndex, newColor.hex)}
				/>
				<MediaUpload
					onSelect={(media) => updateInnerDivImage(slide.id, index, innerIndex, media.url)}
					type="image"
					value={innerDiv.imageUrl}
					render={({ open }) => (
						<Button onClick={open}>
							{!innerDiv.imageUrl ? __('Upload Image', 'cocoblocks') : <img src={innerDiv.imageUrl} alt="" style={{ width: '100px' }} />}
						</Button>
					)}
				/>
				<Button
					isDestructive
					onClick={() => removeInnerDiv(slide.id, index, innerIndex)}
					style={{ marginLeft: '10px' }}
				>
					{__('Remove Inner Div', 'cocoblocks')}
				</Button>
			</div>
		))}
	</div>
))}
{(!slide.divs || slide.divs.length === 0) && (
	<Button
		isPrimary
		onClick={() => addSlideDiv(slide.id)}
	>
		{__('Add Div', 'cocoblocks')}
	</Button>
)}





{slide.images && slide.images.map((image, index) => (
    <div key={index} style={{ marginBottom: '10px',  alignItems: 'center' }}>
        <MediaUpload
            onSelect={(media) => updateSlideImage(slide.id, index, media.url, media.alt)}
            allowedTypes={['image']}
            render={({ open }) => (
                <Button onClick={open}>
                    {image.url ? <img src={image.url} alt={image.alt} style={{ maxWidth: '100px' }} /> : __('Upload Image', 'cocoblocks')}
                </Button>
            )}
        />
        <TextareaControl
            label={__('Alt Text', 'cocoblocks')}
            value={image.alt}
            onChange={(newAlt) => updateSlideImage(slide.id, index, image.url, newAlt)}
            placeholder={__('Alt Text', 'cocoblocks')}
        />
        <Button
            isDestructive
            onClick={() => removeSlideImage(slide.id, index)}
            style={{ marginLeft: '10px' }}
        >
            {__('Remove Image', 'cocoblocks')}
        </Button>
    </div>
))}
{(!slide.images || slide.images.length === 0) && (
    <Button
        isPrimary
        onClick={() => addSlideImage(slide.id)}
    >
        {__('Add Image', 'cocoblocks')}
    </Button>
)}


								</div>
							</PanelBody>
                        ))}

						<div id="controls" className='button-add-slide'>
							<div className='content-button-slide'>
								<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>
								<button onClick={addSlide}>{__('Add Slide', 'slider')}</button>
							</div>
						</div>
					</div>
					</>
					)
					}
				</TabPanel>
			</InspectorControls>

			<div {...blockProps}>
				<Swiper 
				    key={key}
				    navigation={true} 
					modules={[Navigation, EffectCards, EffectCube]} 
					className="mySwiper"
					dir={languageSlider}
					direction={directionSlider}
					effect={effect}
					simulateTouch= {!isGutenbergEditor}
					cubeEffect={{
						shadow: true,
						slideShadows: true,
						shadowOffset: 20,
						shadowScale: 0.94,
					}}
				>
{slides.map(slide => (
	<SwiperSlide key={slide.id}>
		<div
			className="slide-preview"
			style={{
				backgroundImage: slide.backgroundType === 'image' && slide.backgroundImage ? `url(${slide.backgroundImage})` : 'none',
				backgroundColor: slide.backgroundType === 'color' ? slide.backgroundColor : 'transparent',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '300px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
				width: '100%',
				position: 'relative'
			}}
		>
			{slide.backgroundType === 'video' && slide.backgroundVideo && (
				<video src={slide.backgroundVideo} autoPlay muted loop style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0, objectFit: 'cover' }} />
			)}
			<div style={{ position: 'relative', zIndex: 1 }}>
				{slide.titles && slide.titles.length > 0
					? slide.titles.map((title, index) => (
						<div key={index} className={title.position}>
							{title.text ? <h3 style={{ fontSize: `${title.fontSize}px` }}>{title.text}</h3> : <p>No title</p>}
						</div>
					))
					: <p>No title</p>
				}
			</div>
			{slide.divs && slide.divs.length > 0
				? slide.divs.map((div, index) => (
					<div key={index} style={{ backgroundColor: div.backgroundColor || 'transparent', padding: '10px' }}>
						{div.content ? <div>{div.content}</div> : null}
						{div.imageUrl && <img src={div.imageUrl} alt="" style={{ maxWidth: '100%' }} />}
						{div.innerDivs && div.innerDivs.length > 0
							? div.innerDivs.map((innerDiv, innerIndex) => (
								<div key={innerIndex} style={{ backgroundColor: innerDiv.backgroundColor || 'transparent', padding: '5px', marginLeft: '20px' }}>
									{innerDiv.content ? <div>{innerDiv.content}</div> : null}
									{innerDiv.imageUrl && <img src={innerDiv.imageUrl} alt="" style={{ maxWidth: '100%' }} />}
								</div>
							))
							: null
						}
					</div>
				))
				: null
			}
		</div>
	</SwiperSlide>
))}


				</Swiper>
			</div>

		</>
	);
}
