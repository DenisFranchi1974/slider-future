<?php
// Genera una classe unica per identificare il blocco
$slider_unique_class = 'slider-' . uniqid();

$directionSlider = isset($attributes['directionSlider']) ? $attributes['directionSlider'] : null;
$languageSlider = isset($attributes['languageSlider']) ? $attributes['languageSlider'] : null;
$effect = isset($attributes['effect']) ? $attributes['effect'] : null;
$perViewSlider = isset($attributes['perViewSlider']) ? $attributes['perViewSlider'] : null;
$perViewSliderTablet = isset($attributes['perViewSliderTablet']) ? $attributes['perViewSliderTablet'] : null;
$perViewSliderMobile = isset($attributes['perViewSliderMobile']) ? $attributes['perViewSliderMobile'] : null;
$spaceBetween = isset($attributes['spaceBetween']) ? $attributes['spaceBetween'] : null;
$spaceBetweenTablet = isset($attributes['spaceBetweenTablet']) ? $attributes['spaceBetweenTablet'] : null;
$spaceBetweenMobile = isset($attributes['spaceBetweenMobile']) ? $attributes['spaceBetweenMobile'] : null;
$slidesPerGroupDesktop = isset($attributes['slidesPerGroupDesktop']) ? $attributes['slidesPerGroupDesktop'] : null;
$slidesPerGroupTablet = isset($attributes['slidesPerGroupTablet']) ? $attributes['slidesPerGroupTablet'] : null;
$slidesPerGroupMobile = isset($attributes['slidesPerGroupMobile']) ? $attributes['slidesPerGroupMobile'] : null;
$slidesPerRow = isset($attributes['slidesPerRow']) ? $attributes['slidesPerRow'] : null;
$centeredSlides = isset($attributes['centeredSlides']) ? $attributes['centeredSlides'] : null;
$initialSlide = isset($attributes['initialSlide']) ? $attributes['initialSlide'] : null;
$autoHeight = isset($attributes['autoHeight']) ? $attributes['autoHeight'] : null;
$slideHeight = isset($attributes['slideHeight']) ? $attributes['slideHeight'] : null;
$grabCursor = isset($attributes['grabCursor']) ? $attributes['grabCursor'] : null;
$loopMode = isset($attributes['loopMode']) ? $attributes['loopMode'] : null;
$speed = isset($attributes['speed']) ? $attributes['speed'] : null;
$crossFade = isset($attributes['crossFade']) ? $attributes['crossFade'] : null;
$shadow = isset($attributes['shadow']) ? $attributes['shadow'] : null;
$slideShadow = isset($attributes['slideShadow']) ? $attributes['slideShadow'] : null;
$shadowOffset = isset($attributes['shadowOffset']) ? $attributes['shadowOffset'] : null;
$shadowScale = isset($attributes['shadowScale']) ? $attributes['shadowScale'] : null;
$depth = isset($attributes['depth']) ? $attributes['depth'] : null;
$rotate = isset($attributes['rotate']) ? $attributes['rotate'] : null;
$stretch = isset($attributes['stretch']) ? $attributes['stretch'] : null;
$modifier = isset($attributes['modifier']) ? $attributes['modifier'] : null;
$rotateCards = isset($attributes['rotateCards']) ? (bool) $attributes['rotateCards'] : null;
$translateX = isset($attributes['translateX']) ? $attributes['translateX'] : null;
$translateY = isset($attributes['translateY']) ? $attributes['translateY'] : null;
$translateZ = isset($attributes['translateZ']) ? $attributes['translateZ'] : null;
$rotateX = isset($attributes['rotateX']) ? $attributes['rotateX'] : null;
$rotateY = isset($attributes['rotateY']) ? $attributes['rotateY'] : null;
$rotateZ = isset($attributes['rotateZ']) ? $attributes['rotateZ'] : null;
$scale = isset($attributes['scale']) ? $attributes['scale'] : null;
$opacity = isset($attributes['opacity']) ? $attributes['opacity'] : null;
$nextTranslateX = isset($attributes['nextTranslateX']) ? $attributes['nextTranslateX'] : null;
$nextTranslateY = isset($attributes['nextTranslateY']) ? $attributes['nextTranslateY'] : null;
$nextTranslateZ = isset($attributes['nextTranslateZ']) ? $attributes['nextTranslateZ'] : null;
$nextRotateX = isset($attributes['nextRotateX']) ? $attributes['nextRotateX'] : null;
$nextRotateY = isset($attributes['nextRotateY']) ? $attributes['nextRotateY'] : null;
$nextRotateZ = isset($attributes['nextRotateZ']) ? $attributes['nextRotateZ'] : null;
$nextScale = isset($attributes['nextScale']) ? $attributes['nextScale'] : null;
$nextOpacity = isset($attributes['nextOpacity']) ? $attributes['nextOpacity'] : null;
$navigation = isset($attributes['navigation']) ? $attributes['navigation'] : null;
$navigationIcons = isset($attributes['navigationIcons']) ? $attributes['navigationIcons'] : null;
$navColor = isset($attributes['navColor']) ? $attributes['navColor'] : null;
$navColorHover = isset($attributes['navColorHover']) ? $attributes['navColorHover'] : null;
$navBackgroundColor = isset($attributes['navBackgroundColor']) ? $attributes['navBackgroundColor'] : null;
$navBackgroundColorHover = isset($attributes['navBackgroundColorHover']) ? $attributes['navBackgroundColorHover'] : null;
$navBorderColor = isset($attributes['navBorderColor']) ? $attributes['navBorderColor'] : null;
$navBorderColorHover = isset($attributes['navBorderColorHover']) ? $attributes['navBorderColorHover'] : null;
$sizeNav = isset($attributes['sizeNav']) ? $attributes['sizeNav'] : null;
$paddingNav = isset($attributes['paddingNav']) ? $attributes['paddingNav'] : null;
$paddingNavLeft = isset($attributes['paddingNavLeft']) ? $attributes['paddingNavLeft'] : null;
$sizeBorderNav = isset($attributes['sizeBorderNav']) ? $attributes['sizeBorderNav'] : null;
$radiusBorderNav = isset($attributes['radiusBorderNav']) ? $attributes['radiusBorderNav'] : null;
$offSetTopNav = isset($attributes['offSetTopNav']) ? $attributes['offSetTopNav'] : null;    
$offSetSidesNav = isset($attributes['offSetSidesNav']) ? $attributes['offSetSidesNav'] : null;
$hideNavigation = isset($attributes['hideNavigation']) ? $attributes['hideNavigation'] : null;
$navigationTablet = isset($attributes['navigationTablet']) ? $attributes['navigationTablet'] : null;
$navigationMobile = isset($attributes['navigationMobile']) ? $attributes['navigationMobile'] : null;
$paginationEnable = isset($attributes['paginationEnable']) ? $attributes['paginationEnable'] : null;
$bulletInactivityColor = isset($attributes['bulletInactivityColor']) ? $attributes['bulletInactivityColor'] : null;
$bulletColor = isset($attributes['bulletColor']) ? $attributes['bulletColor'] : null;
$positionPagination = isset($attributes['positionPagination']) ? $attributes['positionPagination'] : null;
$opacityPagination = isset($attributes['opacityPagination']) ? $attributes['opacityPagination'] : null;
$opacityInactivePagination = isset($attributes['opacityInactivePagination']) ? $attributes['opacityInactivePagination'] : null;
$widthPagination = isset($attributes['widthPagination']) ? $attributes['widthPagination'] : null;
$heightPagination = isset($attributes['heightPagination']) ? $attributes['heightPagination'] : null;
$widthPaginationActive = isset($attributes['widthPaginationActive']) ? $attributes['widthPaginationActive'] : null;
$heightPaginationActive = isset($attributes['heightPaginationActive']) ? $attributes['heightPaginationActive'] : null;
$radiusPagination = isset($attributes['radiusPagination']) ? $attributes['radiusPagination'] : null;
$gapPagination = isset($attributes['gapPagination']) ? $attributes['gapPagination'] : null;
$fontSizePagination = isset($attributes['fontSizePagination']) ? $attributes['fontSizePagination'] : null;
$heightBarPagination = isset($attributes['heightBarPagination']) ? $attributes['heightBarPagination'] : null;
$scrollBarColor = isset($attributes['scrollBarColor']) ? $attributes['scrollBarColor'] : null;
$thumbColor = isset($attributes['thumbColor']) ? $attributes['thumbColor'] : null;
$positionScrollbar = isset($attributes['positionScrollbar']) ? $attributes['positionScrollbar'] : null;
$heightScrollbar = isset($attributes['heightScrollbar']) ? $attributes['heightScrollbar'] : null;
$radiusScrollbar = isset($attributes['radiusScrollbar']) ? $attributes['radiusScrollbar'] : null;
$typePagination = isset($attributes['typePagination']) ? $attributes['typePagination'] : null;
$clickPagination = isset($attributes['clickPagination']) ? $attributes['clickPagination'] : null;
$hidePagination = isset($attributes['hidePagination']) ? $attributes['hidePagination'] : null;
$dynamicPagination = isset($attributes['dynamicPagination']) ? $attributes['dynamicPagination'] : null;
$dynamicMainPagination = isset($attributes['dynamicMainPagination']) ? $attributes['dynamicMainPagination'] : null;
$progressbarOpposite = isset($attributes['progressbarOpposite']) ? $attributes['progressbarOpposite'] : null;
$autoplay = isset($attributes['autoplay']) ? $attributes['autoplay'] : null;
$autoplaySpeed = isset($attributes['autoplaySpeed']) ? $attributes['autoplaySpeed'] : null;
$disableOnInteraction = isset($attributes['disableOnInteraction']) ? $attributes['disableOnInteraction'] : null;
$pauseOnMouseEnter = isset($attributes['pauseOnMouseEnter']) ? $attributes['pauseOnMouseEnter'] : null;
$reverseDirection = isset($attributes['reverseDirection']) ? $attributes['reverseDirection'] : null;
$stopOnLastSlide = isset($attributes['stopOnLastSlide']) ? $attributes['stopOnLastSlide'] : null;
$scrollbar = isset($attributes['scrollbar']) ? $attributes['scrollbar'] : null;
$hideScrollbar= isset($attributes['hideScrollbar']) ? $attributes['hideScrollbar'] : null;
$dragScrollbar = isset($attributes['dragScrollbar']) ? $attributes['dragScrollbar'] : null;
$releaseScrollbar = isset($attributes['releaseScrollbar']) ? $attributes['releaseScrollbar'] : null;
$autoplayProgress = isset($attributes['autoplayProgress']) ? $attributes['autoplayProgress'] : null;
$autoplayProgressColor = isset($attributes['autoplayProgressColor']) ? $attributes['autoplayProgressColor'] : null;
$autoplayProgressPosition = isset($attributes['autoplayProgressPosition']) ? $attributes['autoplayProgressPosition'] : null;
$freeMode = isset($attributes['freeMode']) ? $attributes['freeMode'] : null;
$stickyFreeMode = isset($attributes['stickyFreeMode']) ? $attributes['stickyFreeMode'] : null;
$momentumFreeMode = isset($attributes['momentumFreeMode']) ? $attributes['momentumFreeMode'] : null;
$momentumBounceFreeMode = isset($attributes['momentumBounceFreeMode']) ? $attributes['momentumBounceFreeMode'] : null;
$momentumBounceRatioFreeMode = isset($attributes['momentumBounceRatioFreeMode']) ? $attributes['momentumBounceRatioFreeMode'] : null;
$momentumRatioFreeMode = isset($attributes['momentumRatioFreeMode']) ? $attributes['momentumRatioFreeMode'] : null;
$momentumVelocityRatioFreeMode = isset($attributes['momentumVelocityRatioFreeMode']) ? $attributes['momentumVelocityRatioFreeMode'] : null;
$keyboard = isset($attributes['keyboard']) ? $attributes['keyboard'] : null;
$viewPortKeyboard = isset($attributes['viewPortKeyboard']) ? $attributes['viewPortKeyboard'] : null;
$upKeyboard = isset($attributes['upKeyboard']) ? $attributes['upKeyboard'] : null;
$mousewheel = isset($attributes['mousewheel']) ? $attributes['mousewheel'] : null;
$forceToAxis = isset($attributes['forceToAxis']) ? $attributes['forceToAxis'] : null;
$invert = isset($attributes['invert']) ? $attributes['invert'] : null;
$releaseOnEdges = isset($attributes['releaseOnEdges']) ? $attributes['releaseOnEdges'] : null;
$sensitivity = isset($attributes['sensitivity']) ? $attributes['sensitivity'] : null;
$parallax = isset($attributes['parallax']) ? $attributes['parallax'] : null;

// Recupera le slide dai tuoi attributi (adatta questo in base alla struttura dei tuoi attributi)
$slides = !empty($attributes['slides']) ? $attributes['slides'] : [];

  // Determina la posizione della scrollbar
  $scrollbarTop = $positionScrollbar === 'top' ? '4px' : 'auto';
  $scrollbarBottom = $positionScrollbar === 'bottom' ? '4px' : 'auto';

$swiper_attr = array(
    'directionSlider' => $directionSlider,
    'languageSlider' => $languageSlider,
    'effect' => $effect,
    'perViewSlider' => $perViewSlider,
    'perViewSliderTablet' => $perViewSliderTablet,
    'perViewSliderMobile' => $perViewSliderMobile,
    'spaceBetween' => $spaceBetween,
    'spaceBetweenTablet' => $spaceBetweenTablet,
    'spaceBetweenMobile' => $spaceBetweenMobile,
    'slidesPerGroupDesktop' => $slidesPerGroupDesktop,
    'slidesPerGroupTablet' => $slidesPerGroupTablet,
    'slidesPerGroupMobile' => $slidesPerGroupMobile,
    'slidesPerRow' => $slidesPerRow,
    'centeredSlides' => $centeredSlides,
    'initialSlide' => $initialSlide,
    'autoHeight' => $autoHeight,
    'slideHeight' => $slideHeight,
    'grabCursor' => $grabCursor,
    'loopMode' => $loopMode,
    'speed' => $speed,
    'crossFade' => $crossFade,
    'shadow' => $shadow,
    'slideShadow' => $slideShadow,
    'shadowOffset' => $shadowOffset,
    'shadowScale' => $shadowScale,
    'depth' => $depth,
    'rotate' => $rotate,
    'stretch' => $stretch,
    'modifier' => $modifier,
    'rotateCards' => $rotateCards,
    'translateX' => $translateX,
    'translateY' => $translateY,
    'translateZ' => $translateZ,
    'rotateX' => $rotateX,
    'rotateY' => $rotateY,
    'rotateZ' => $rotateZ,
    'scale' => $scale,
    'opacity' => $opacity,
    'nextTranslateX' => $nextTranslateX,
    'nextTranslateY' => $nextTranslateY,
    'nextTranslateZ' => $nextTranslateZ,
    'nextRotateX' => $nextRotateX,
    'nextRotateY' => $nextRotateY,
    'nextRotateZ' => $nextRotateZ,
    'nextScale' => $nextScale,
    'nextOpacity' => $nextOpacity,
    'navigation' => $navigation,
    'navigationIcons' => $navigationIcons,
    'navColor' => $navColor,
    'navColorHover' => $navColorHover,
    'navBackgroundColor' => $navBackgroundColor,
    'navBackgroundColorHover' => $navBackgroundColorHover,
    'navBorderColor' => $navBorderColor,
    'navBorderColorHover' => $navBorderColorHover,
    'sizeNav' => $sizeNav,
    'paddingNav' => $paddingNav,
    'paddingNavLeft' => $paddingNavLeft,
    'sizeBorderNav' => $sizeBorderNav,
    'radiusBorderNav' => $radiusBorderNav,
    'offSetTopNav' => $offSetTopNav,
    'offSetSidesNav' => $offSetSidesNav,
    'hideNavigation' => $hideNavigation,
    'navigationTablet' => $navigationTablet,
    'navigationMobile' => $navigationMobile,
    'paginationEnable' => $paginationEnable,
    'bulletInactivityColor' => $bulletInactivityColor,
    'bulletColor' => $bulletColor,
    'positionPagination' => $positionPagination,
    'opacityPagination' => $opacityPagination,
    'opacityInactivePagination' => $opacityInactivePagination,
    'widthPagination' => $widthPagination,
    'heightPagination' => $heightPagination,
    'widthPaginationActive' => $widthPaginationActive,
    'heightPaginationActive' => $heightPaginationActive,
    'radiusPagination' => $radiusPagination,
    'gapPagination' => $gapPagination,
    'fontSizePagination' => $fontSizePagination,
    'heightBarPagination' => $heightBarPagination,
    'scrollBarColor' => $scrollBarColor,
    'thumbColor' => $thumbColor,
    'positionScrollbar' => $positionScrollbar,
    'heightScrollbar' => $heightScrollbar,
    'radiusScrollbar' => $radiusScrollbar,
    'typePagination' => $typePagination,
    'clickPagination' => $clickPagination,
    'hidePagination' => $hidePagination,
    'dynamicPagination' => $dynamicPagination,
    'dynamicMainPagination' => $dynamicMainPagination,
    'progressbarOpposite' => $progressbarOpposite,
    'autoplay' => $autoplay,
    'autoplaySpeed' => $autoplaySpeed,
    'disableOnInteraction' => $disableOnInteraction,
    'pauseOnMouseEnter' => $pauseOnMouseEnter,
    'reverseDirection' => $reverseDirection,
    'stopOnLastSlide' => $stopOnLastSlide,
    'scrollbar' => $scrollbar,
    'hideScrollbar' => $hideScrollbar,
    'dragScrollbar' => $dragScrollbar,
    'releaseScrollbar' => $releaseScrollbar,
    'autoplayProgress' => $autoplayProgress,
    'autoplayProgressColor' => $autoplayProgressColor,
    'autoplayProgressPosition' => $autoplayProgressPosition,
    'freeMode' => $freeMode,
    'stickyFreeMode' => $stickyFreeMode,
    'momentumFreeMode' => $momentumFreeMode,
    'momentumBounceFreeMode' => $momentumBounceFreeMode,
    'momentumBounceRatioFreeMode' => $momentumBounceRatioFreeMode,
    'momentumRatioFreeMode' => $momentumRatioFreeMode,
    'momentumVelocityRatioFreeMode' => $momentumVelocityRatioFreeMode,
    'keyboard' => $keyboard,
    'viewPortKeyboard' => $viewPortKeyboard,
    'upKeyboard' => $upKeyboard,
    'mousewheel' => $mousewheel,
    'forceToAxis' => $forceToAxis,
    'invert' => $invert,
    'releaseOnEdges' => $releaseOnEdges,
    'sensitivity' => $sensitivity,
    'parallax' => $parallax,
);

$swiper_attr_encoded = esc_attr(wp_json_encode($swiper_attr));

$wrapper_attributes = get_block_wrapper_attributes(
    array(
        'class' => 'swiper ' . $slider_unique_class . ' slider-builder swiper-container ',
    )
);

?>

<div <?php echo wp_kses_data($wrapper_attributes) . ' data-swiper="' . $swiper_attr_encoded . '"'; ?> dir="<?php echo esc_attr($languageSlider); ?>">
    <div class="swiper-wrapper">
        <?php foreach ($slides as $slide) : 
            $layout_class = !empty($slide['layout']) && $slide['layout'] === 'horizontal' ? 'horizontal-layout' : 'vertical-layout';
            $background_size = !empty($slide['fit']) ? esc_attr($slide['fit']) : 'cover';
            $focal_point = !empty($slide['focalPoint']) ? $slide['focalPoint'] : array('x' => 0.5, 'y' => 0.5);
            $background_position = sprintf('%s%% %s%%', esc_attr($focal_point['x'] * 100), esc_attr($focal_point['y'] * 100));
        ?>
           <div class="swiper-slide <?php echo esc_attr($layout_class); ?> <?php echo esc_attr($slide['position']); ?>"
                style="<?php 
                    if (!empty($slide['backgroundType'])) {
                        if ($slide['backgroundType'] === 'image' && !empty($slide['backgroundImage'])) {
                            echo 'background-image: url(' . esc_url($slide['backgroundImage']) . '); background-size: ' . esc_attr($background_size) . '; background-position: ' . esc_attr($background_position) . ';';
                        } elseif ($slide['backgroundType'] === 'color' && !empty($slide['backgroundColor'])) {
                            echo 'background-color: ' . esc_attr($slide['backgroundColor']) . ';';
                        } elseif ($slide['backgroundType'] === 'gradient' && !empty($slide['backgroundGradient'])) {
                            echo 'background-image: ' . esc_attr($slide['backgroundGradient']) . ';';
                        }
                    }
                    // Gestisci l'altezza
                    echo $autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; ';
                    // Altri stili
                    echo 'display: flex; ';
                    echo 'text-align: center; ';
                    echo 'width: 100%; ';
                    echo 'position: relative; ';
                    echo 'gap: ' . esc_attr($slide['gapItems']) . 'px; ';
                    echo 'border-radius: ' . esc_attr($slide['backgroundBorderRadius']) . 'px; ';
                    echo 'padding-top: ' . esc_attr($slide['backgroundVerticalPadding']) . 'px; ';
                    echo 'padding-bottom: ' . esc_attr($slide['backgroundVerticalPadding']) . 'px; ';
                    echo 'padding-left: ' . esc_attr($slide['backgroundHorizontalPadding']) . 'px; ';
                    echo 'padding-right: ' . esc_attr($slide['backgroundHorizontalPadding']) . 'px; ';
                    echo 'border: ' . esc_attr($slide['backgroundBorderSize']) . 'px solid ' . esc_attr($slide['backgroundBorderColor']) . '; ';
                    echo 'flex-direction: ' . esc_attr($slide['layout'] === 'horizontal' ? 'row' : 'column') . ';';
                ?>">
                <?php if (!empty($slide['backgroundType']) && $slide['backgroundType'] === 'video' && !empty($slide['backgroundVideo'])) : ?>
                    <video src="<?php echo esc_url($slide['backgroundVideo']); ?>" autoplay muted loop style="width: 100%; object-position: <?php echo esc_attr( $background_position )?>; height: 100%; position: absolute; top: 0; left: 0; object-fit: cover; z-index: 0;"></video>
                <?php endif; ?>

                <?php if (!empty($slide['elements']) && is_array($slide['elements'])): ?>
                    <?php foreach ($slide['elements'] as $element): ?>
                        <?php if ($element['type'] === 'title' && !empty($element['text'])): 
                            $fontStyle = isset($element['fontStyle']['fontStyle']) ? esc_attr($element['fontStyle']['fontStyle']) : 'normal';
                            $fontWeight = isset($element['fontStyle']['fontWeight']) ? esc_attr($element['fontStyle']['fontWeight']) : 'normal';
                            $textDecoration = isset($element['fontStyle']['textDecoration']) ? esc_attr($element['fontStyle']['textDecoration']) : 'none';
                            $marginTop = isset($element['marginTitle']['top']) ? esc_attr($element['marginTitle']['top']) : '0px';
                            $marginRight = isset($element['marginTitle']['right']) ? esc_attr($element['marginTitle']['right']) : '0px';
                            $marginBottom = isset($element['marginTitle']['bottom']) ? esc_attr($element['marginTitle']['bottom']) : '0px';
                            $marginLeft = isset($element['marginTitle']['left']) ? esc_attr($element['marginTitle']['left']) : '0px';
                            // Combina i margini
                            $margin = "$marginTop $marginRight $marginBottom $marginLeft";

                            $stylesTitle = 'font-size: ' . esc_attr($element['fontSize']) . 'px; --font-size-tablet: ' . esc_attr($element['fontSizeTablet']) . 'px; --font-size-mobile: ' . esc_attr($element['fontSizeMobile']) . 'px; text-align: ' . esc_attr($element['textAlign']) . '; color: ' . esc_attr($element['textColor']) . '; font-weight: ' . $fontWeight . '; font-style: ' . $fontStyle . '; text-decoration: ' . $textDecoration . '; line-height: ' . esc_attr($element['lineHeight']) . '; width: 100%; margin: ' . $margin . ';';

                            // Recupera il tag HTML
                            $tag = isset($element['elementTitle']) ? esc_attr($element['elementTitle']) : 'h3';
                        ?>
                            <<?php echo $tag; ?> style="<?php echo esc_attr($stylesTitle); ?>" class="title-slide" data-swiper-parallax-x="<?php echo esc_attr($element['parallaxTitle']); ?>" data-swiper-parallax-y="<?php echo esc_attr($element['parallaxTitleY']); ?>" data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxTitleScale']); ?>" data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxTitleDuration']); ?>" data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxTitleOpacity']); ?>">
                                <?php echo esc_html($element['text']); ?>
                            </<?php echo $tag; ?>>
                        <?php endif; ?>

                        <?php if ($element['type'] === 'div'): ?>
                            <div style="<?php echo !empty($element['backgroundColor']) ? 'background-color: ' . esc_attr($element['backgroundColor']) . '; max-width: 100%;' : ''; ?>">
                                <?php if (!empty($element['imageUrl'])): ?>
                                    <img src="<?php echo esc_url($element['imageUrl']); ?>" alt="" />
                                <?php endif; ?>
                                <?php echo wp_kses_post($element['content']); ?>
                                <?php if (!empty($element['innerDivs']) && is_array($element['innerDivs'])): ?>
                                    <?php foreach ($element['innerDivs'] as $innerDiv): ?>
                                        <div style="<?php echo !empty($innerDiv['backgroundColor']) ? 'background-color: ' . esc_attr($innerDiv['backgroundColor']) . '; max-width: 100%;' : ''; ?>">
                                            <?php if (!empty($innerDiv['imageUrl'])): ?>
                                                <img src="<?php echo esc_url($innerDiv['imageUrl']); ?>" alt="" />
                                            <?php endif; ?>
                                            <?php echo wp_kses_post($innerDiv['content']); ?>
                                        </div>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                        <?php endif; ?>

                        <?php if ($element['type'] === 'image' && !empty($element['url'])): 
                            $marginTop = isset($element['marginImage']['top']) ? esc_attr($element['marginImage']['top']) : '0px';
                            $marginRight = isset($element['marginImage']['right']) ? esc_attr($element['marginImage']['right']) : '0px';
                            $marginBottom = isset($element['marginImage']['bottom']) ? esc_attr($element['marginImage']['bottom']) : '0px';
                            $marginLeft = isset($element['marginImage']['left']) ? esc_attr($element['marginImage']['left']) : '0px';
                            $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                            $style = "max-width: 100%; min-width: 0; 
                                      max-height: 100%; min-height: 0;
                                      border: " . esc_attr($element['backgroundBorderSizeImage']) . "px solid " . esc_attr($element['backgroundBorderColorImage']) . ";
                                      border-radius: " . esc_attr($element['backgroundBorderRadiusImage']) . "px;
                                      padding: " . esc_attr($element['paddingImage']) . "px;
                                      background-color: " . esc_attr($element['backgroundColorImage']) .";
                                      margin: " . $margin . ";
                                    "; // Stile di base per 'auto'

                            if ($element['widthImage'] === 'relative') {
                                $style .= " width: " . esc_attr($element['customWidthImage']) . "%;";
                            } elseif ($element['widthImage'] === 'fixed') {
                                $style .= " width: " . esc_attr($element['customWidthImagePx']) . "px;";
                            }

                            if ($element['heightImage'] === 'relative') {
                                $style .= " height: " . esc_attr($element['customHeightImage']) . "%;";
                            } elseif ($element['heightImage'] === 'fixed') {
                                $style .= " height: " . esc_attr($element['customHeightImagePx']) . "px;";
                            }

                            // Applica object-fit solo se width o height sono relative o fixed
                            if ($element['widthImage'] !== 'auto' || $element['heightImage'] !== 'auto') {
                                $style .= " object-fit: " . esc_attr($element['fit']) . ";"; 
                            }
                        ?>
                            <img src="<?php echo esc_url($element['url']); ?>" alt="<?php echo esc_attr($element['alt']); ?>" class="image-with-mask <?php echo esc_attr( $element['blobMask'])?>" style="<?php echo $style; ?>" data-swiper-parallax-x="<?php echo esc_attr($element['parallaxImage']); ?>" data-swiper-parallax-y="<?php echo esc_attr($element['parallaxImageY']); ?>" data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxImageScale']); ?>" data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxImageDuration']); ?>" data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxImageOpacity']); ?>"/>
                        <?php endif; ?>

                    <?php endforeach; ?>
                <?php endif; ?>
                
            </div>
        <?php endforeach; ?>
    </div>
    <div class="swiper-pagination"></div>
    <?php if ($navigation) : ?>
        <!-- Pulsante Avanti -->
        <div
            class="<?php echo esc_attr('swiper-button-next ' . (!$navigationTablet ? 'nav-tablet' : '') . ' ' . (!$navigationMobile ? 'nav-mobile' : '')); ?>"
        >
            <?php if ($navigationIcons === 'default') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 0 24 24" fill="currentColor">
                    <mask id="a" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" x="0" y="0" maskUnits="userSpaceOnUse">
                        <path fill="<?php echo esc_attr($navColor); ?>" d="M0 0h24v24H0z"/>
                    </mask>
                    <g mask="url(#a)">
                        <path fill="<?php echo esc_attr($navColor); ?>" d="M9.4 17.654 8.346 16.6l4.6-4.6-4.6-4.6L9.4 6.346 15.054 12 9.4 17.654Z"/>
                    </g>
                </svg>
            <?php elseif ($navigationIcons === 'one') : ?>
                <svg width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_7_1879" maskUnits="userSpaceOnUse" x="0" y="0" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>">
                        <rect width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>"/>
                    </mask>
                    <g mask="url(#mask0_7_1879)">
                        <path d="M14.05 17.65L13 16.575L16.825 12.75H4.29999V11.25H16.825L13 7.42501L14.05 6.35001L19.7 12L14.05 17.65Z" fill="<?php echo esc_attr($navColor); ?>"/>
                    </g>
                </svg>
            <?php elseif ($navigationIcons === 'two') : ?>
                <svg width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_315_300" maskUnits="userSpaceOnUse" x="0" y="0" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>">
                        <rect width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>"/>
                    </mask>
                    <g mask="url(#mask0_315_300)">
                        <path d="M17.5 16.1538L16.4308 15.1L18.7808 12.75H3.25003V11.25H18.7808L16.4462 8.89999L17.5154 7.84616L21.6538 12L17.5 16.1538Z" fill="<?php echo esc_attr($navColor); ?>"/>
                    </g>
                </svg>
            <?php elseif ($navigationIcons === 'three') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                    <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/>
                </svg>
            <?php elseif ($navigationIcons === 'four') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                    <path d="M400-280v-400l200 200-200 200Z"/>
                </svg>
            <?php elseif ($navigationIcons === 'five') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>
            <?php elseif ($navigationIcons === 'text') : ?>
                <span style="color: <?php echo esc_attr($navColor); ?>; font-size: <?php echo esc_attr($sizeNav . 'px'); ?>;">
                    <?php echo esc_html(__('Next', 'cocoblocks')); ?>
                </span>
            <?php endif; ?>
        </div>

        <!-- Pulsante Precedente -->
        <div
            class="<?php echo esc_attr('swiper-button-prev ' . (!$navigationTablet ? 'nav-tablet' : '') . ' ' . (!$navigationMobile ? 'nav-mobile' : '')); ?>"
        >
            <?php if ($navigationIcons === 'default') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 0 24 24" fill="currentColor">
                    <mask id="mask0_7_1873" maskUnits="userSpaceOnUse" x="0" y="0" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>">
                        <rect width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>"/>
                    </mask>
                    <g mask="url(#mask0_7_1873)">
                        <path fill="<?php echo esc_attr($navColor); ?>" d="M14 17.6538L8.34619 12L14 6.34616L15.0538 7.39999L10.4538 12L15.0538 16.6L14 17.6538Z"/>
                    </g>
                </svg>
            <?php elseif ($navigationIcons === 'one') : ?>
                <svg width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_7_1868" maskUnits="userSpaceOnUse" x="0" y="0" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>">
                        <rect width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>"/>
                    </mask>
                    <g mask="url(#mask0_7_1868)">
                        <path d="M9.40001 17.65L8.34667 16.6L12.75 12L8.34667 7.40001L9.40001 6.34667L15.054 12L9.40001 17.65Z" fill="<?php echo esc_attr($navColor); ?>"/>
                    </g>
                </svg>
            <?php elseif ($navigationIcons === 'two') : ?>
                <svg width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_315_294" maskUnits="userSpaceOnUse" x="0" y="0" width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>">
                        <rect width="<?php echo esc_attr($sizeNav . 'px'); ?>" height="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>"/>
                    </mask>
                    <g mask="url(#mask0_315_294)">
                        <path d="M9.40001 16.1538L8.34667 15.1L12.75 12.75H3.25001V11.25H12.75L8.34667 7.425L9.40001 6.35001L15.054 12L9.40001 16.1538Z" fill="<?php echo esc_attr($navColor); ?>"/>
                    </g>
                </svg>
            <?php elseif ($navigationIcons === 'three') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                    <path d="M560-480L760-280l-56 56-240-240 240-240 56 56-183 184Zm-264 0L184-280l-56-56 240-240 240 240-56 56-183-184Z"/>
                </svg>
            <?php elseif ($navigationIcons === 'four') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                    <path d="M560-280v-400l-200 200 200 200Z"/>
                </svg>
            <?php elseif ($navigationIcons === 'five') : ?>
                <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                    <path d="M520-280v-400h-80v400h-240v80h240v240h80v-240h240v-80h-240Z"/>
                </svg>
            <?php elseif ($navigationIcons === 'text') : ?>
                <span style="color: <?php echo esc_attr($navColor); ?>; font-size: <?php echo esc_attr($sizeNav . 'px'); ?>;">
                    <?php echo esc_html(__('Prev', 'cocoblocks')); ?>
                </span>
            <?php endif; ?>
        </div>
    <?php endif; ?>
    <div class="swiper-scrollbar"></div>
    <?php if ($autoplayProgress) : ?>
    <div class="autoplay-progress <?php echo esc_attr( $autoplayProgressPosition )?>">
        <svg viewBox="0 0 48 48" class="progress-circle">
            <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span class="progress-content"><?php echo esc_html__('0s','slider-builder')?></span>
    </div>
    <?php endif; ?>
    <style>  
        /* Stili specifici per ciascun slider utilizzando le variabili CSS dinamiche */
        .<?php echo esc_attr($slider_unique_class); ?> {

            --background-color-nav: <?php echo esc_attr($navBackgroundColor); ?>;
            --border-color-nav:<?php echo esc_attr($navBorderColor); ?>;
            --color-nav-hover:<?php echo esc_attr($navColorHover); ?>!important;
	        --background-color-nav-hover:<?php echo esc_attr($navBackgroundColorHover); ?>!important ;
	        --border-color-nav-hover:<?php echo esc_attr($navBorderColorHover); ?>!important;
            --size-nav:<?php echo esc_attr($sizeNav); ?>px;
		    --border-size-nav: <?php echo esc_attr($sizeBorderNav); ?>px;
		    --border-radius-nav: <?php echo esc_attr($radiusBorderNav); ?>%;
            --padding-nav: <?php echo esc_attr($paddingNav); ?>px;
            --padding-nav-left: <?php echo esc_attr($paddingNavLeft); ?>px;
            --offset-top-nav: <?php echo esc_attr($offSetTopNav); ?>%;
		    --offset-sides-nav: <?php echo esc_attr($offSetSidesNav); ?>px;
            --swiper-pagination-bullet-inactive-color: <?php echo esc_attr( $bulletInactivityColor );?>;
            --swiper-pagination-progressbar-bg-color: <?php echo esc_attr( $bulletInactivityColor );?>;
	        --swiper-pagination-color:<?php echo esc_attr(  $bulletColor  );?>;
            --swiper-pagination-fraction-color:<?php echo esc_attr(  $bulletColor  );?>;
            --swiper-pagination-bottom: <?php echo esc_attr($positionPagination === 'bottom' ? '8px' : 'auto'); ?>;
            --swiper-pagination-top:  <?php echo esc_attr($positionPagination === 'top' ? '8px' : 'auto'); ?>;
            --swiper-pagination-bullet-opacity: <?php echo esc_attr($opacityPagination); ?>;
	        --swiper-pagination-bullet-inactive-opacity:  <?php echo esc_attr($opacityInactivePagination); ?>;
            --swiper-pagination-bullet-width:<?php echo esc_attr($widthPagination); ?>px;
	        --swiper-pagination-bullet-height: <?php echo esc_attr($heightPagination); ?>px;
            --swiper-pagination-bullet-width-active: <?php echo esc_attr($widthPaginationActive); ?>px;
	        --swiper-pagination-bullet-height-active:<?php echo esc_attr($heightPaginationActive); ?>px;
            --swiper-radius-bullet: <?php echo esc_attr($radiusPagination); ?>%;
            --swiper-pagination-bullet-horizontal-gap: <?php echo esc_attr($gapPagination); ?>px;
            --swiper-font-size-fraction:<?php echo esc_attr($fontSizePagination); ?>px;
            --swiper-pagination-progressbar-size: <?php echo esc_attr($heightBarPagination); ?>px;
            --swiper-scrollbar-bg-color:<?php echo esc_attr($scrollBarColor); ?>; 
	        --swiper-scrollbar-drag-bg-color:<?php echo esc_attr($thumbColor); ?>;  
            --swiper-scrollbar-top:<?php echo esc_attr($scrollbarTop); ?>;
	        --swiper-scrollbar-bottom: <?php echo esc_attr($scrollbarBottom); ?>;
            --swiper-scrollbar-size: <?php echo esc_attr($heightScrollbar); ?>px;
	        --swiper-scrollbar-border-radius: <?php echo esc_attr($radiusScrollbar); ?>px;
            --swiper-autoplay-progress-color: <?php echo esc_attr($autoplayProgressColor); ?>;
        }
    </style>
</div>