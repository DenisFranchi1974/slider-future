<?php

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
$contentType = isset($attributes['contentType']) ? $attributes['contentType'] : null;
$overflow = isset($attributes['overflow']) ? $attributes['overflow'] : null;
$filter = isset($attributes['filter']) ? $attributes['filter'] : null;
$colorOneEffect = isset($attributes['colorOneEffect']) ? $attributes['colorOneEffect'] : null;
$colorTwoEffect = isset($attributes['colorTwoEffect']) ? $attributes['colorTwoEffect'] : null;
$colorThreeEffect = isset($attributes['colorThreeEffect']) ? $attributes['colorThreeEffect'] : null;
$mouseEffect = isset($attributes['mouseEffect']) ? $attributes['mouseEffect'] : null;
$colorEffectStart = isset($attributes['colorEffectStart']) ? $attributes['colorEffectStart'] : null;
$colorEffectEnd = isset($attributes['colorEffectEnd']) ? $attributes['colorEffectEnd'] : null;
$colorEffectMiddle = isset($attributes['colorEffectMiddle']) ? $attributes['colorEffectMiddle'] : null;
$firstColorLiquid = isset($attributes['firstColorLiquid']) ? $attributes['firstColorLiquid'] : null;
$secondColorLiquid = isset($attributes['secondColorLiquid']) ? $attributes['secondColorLiquid'] : null;
$thirdColorLiquid = isset($attributes['thirdColorLiquid']) ? $attributes['thirdColorLiquid'] : null;
$transitionParalaxMouse = isset($attributes['transitionParalaxMouse']) ? $attributes['transitionParalaxMouse'] : null;
$sliderMarginTop = isset($attributes['sliderMarginTop']) ? $attributes['sliderMarginTop'] : null;
$sliderMarginBottom = isset($attributes['sliderMarginBottom']) ? $attributes['sliderMarginBottom'] : null;
$backgroundColor = isset($attributes['backgroundColor']) ? $attributes['backgroundColor'] : null;
$backgroundHorizontalPadding = isset($attributes['backgroundHorizontalPadding']) ? $attributes['backgroundHorizontalPadding'] : null;
$backgroundVerticalPadding = isset($attributes['backgroundVerticalPadding']) ? $attributes['backgroundVerticalPadding'] : null;
$includeCategories = isset($attributes['includeCategories']) ? $attributes['includeCategories'] : null;
$excludeCategories = isset($attributes['excludeCategories']) ? $attributes['excludeCategories'] : null;
$order = isset($attributes['order']) ? $attributes['order'] : null;
$postsToShow = isset($attributes['postsToShow']) ? $attributes['postsToShow'] : null;

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
    'contentType' => $contentType,
    'overflow' => $overflow,
    'filter' => $filter,
    'colorOneEffect' => $colorOneEffect,
    'colorTwoEffect' => $colorTwoEffect,
    'colorThreeEffect' => $colorThreeEffect,
    'mouseEffect' => $mouseEffect,
    'colorEffectStart' => $colorEffectStart,
    'colorEffectEnd' => $colorEffectEnd,
    'colorEffectMiddle' => $colorEffectMiddle,
    'firstColorLiquid' => $firstColorLiquid,
    'secondColorLiquid' => $secondColorLiquid,
    'thirdColorLiquid' => $thirdColorLiquid,
    'transitionParalaxMouse' => $transitionParalaxMouse,
    'sliderMarginTop' => $sliderMarginTop,
    'sliderMarginBottom' => $sliderMarginBottom,
    'backgroundColor' => $backgroundColor,
    'backgroundHorizontalPadding' => $backgroundHorizontalPadding,
    'backgroundVerticalPadding' => $backgroundVerticalPadding,
    'includeCategories' => $includeCategories,
    'excludeCategories' => $excludeCategories,
    'order' => $order,
    'postsToShow' => $postsToShow,
);

$swiper_attr_encoded = esc_attr(wp_json_encode($swiper_attr));

$stylesSlider = '--color-one-effect: ' . esc_attr($colorOneEffect) . '; ' .
          '--color-two-effect: ' . esc_attr($colorTwoEffect) . '; ' .
          '--color-three-effect: ' . esc_attr($colorThreeEffect) . '; ' .
          'margin-top: ' . esc_attr($sliderMarginTop) . 'px; ' .
          'margin-bottom: ' . esc_attr($sliderMarginBottom) . 'px; ' .
          'background-color: ' . esc_attr($backgroundColor) . '; ' .
          ($autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; ');

$wrapper_attributes = get_block_wrapper_attributes(
    array(
        'class' => 'swiper ' . $slider_unique_class . ' slider-builder swiper-container ' . $filter ,
        'style' => $stylesSlider,
    )
);

if (!function_exists('splitTextIntoLetters')) {
    function splitTextIntoLetters($text = '', $animation = '', $element = []) {

        $speedEffect = isset($element['speedEffect']) ? $element['speedEffect'] : 200; // Valore predefinito: 100ms
        $pauseEffect = isset($element['pauseEffect']) ? $element['pauseEffect'] : 2000; // Valore predefinito: 2000ms
        $durationEffect = isset($element['durationEffect']) ? $element['durationEffect'] : 2; // Valore predefinito: Parametro passato
        $delayEffect = isset($element['delayEffect']) ? $element['delayEffect'] : 0; // Valore predefinito: Parametro passato
        $animationCount = isset($element['animationCount']) ? $element['animationCount'] : 1; // Valore predefinito: 1
        // Se l'animazione è "bounce", esegui lo split del testo in lettere
        if ($animation === 'bounce') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter ' . esc_attr($animation) . '">' . esc_html($letter) . '</span>';
            }
            return $result;
        }
        // Se l'animazione è "explode"
        if ($animation === 'explode') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $x = rand(-100, 100); // Posizione X casuale
                $y = rand(-100, 100); // Posizione Y casuale
                $rotation = rand(0, 360); // Rotazione casuale
                $result .= '<span class="explode" data-explosion-delay="' . esc_attr($delayEffect) . '" data-explosion-duration="' . esc_attr($durationEffect) . '" style="--x:' . $x . 'px; --y:' . $y . 'px; --rotation:' . $rotation . 'deg;animation-delay:' . esc_attr($delayEffect) . 's;animation-iteration-count:' . esc_attr($animationCount) .'; animation-duration:'  . esc_attr($durationEffect) .'s;">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "implode"
        if ($animation === 'implode') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $x = rand(-100, 100); // Posizione X casuale
                $y = rand(-100, 100); // Posizione Y casuale
                $rotation = rand(0, 360); // Rotazione casuale
                $result .= '<span class="implode" style="--x:' . $x . 'px; --y:' . $y . 'px; --rotation:' . $rotation . 'deg;animation-iteration-count:' . esc_attr($animationCount) .'; animation-delay:' . esc_attr($delayEffect) . 's; animation-duration:' . esc_attr($durationEffect) . 's;">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        $stylesSpan = [
            "--width-cursor" => isset($element['widthCursor']) ? $element['widthCursor'] . "px" : "2px",
            "--color-cursor" => isset($element['cursorColor']) ? $element['cursorColor'] : "#000000",
            "--animation-cursor" => isset($element['animationCursor']) ? $element['animationCursor'] . "s" : "0.75s",
        ];
        
        $styleAttribute = '';
        foreach ($stylesSpan as $property => $value) {
            $styleAttribute .= $property . ':' . $value . '; ';
        }
        
        if ($animation === 'typing-effect') {
            return '<span class="typewriter" data-text="' . esc_attr($text) . '" data-speed-effect="' . esc_attr($speedEffect) . '"  data-pause-effect="' . esc_attr($pauseEffect) . '"></span>
                    <span class="typewriter-cursor" style="' . esc_attr($styleAttribute) . '"></span>';
        }
        
        // Se l'animazione è "letters-fly-in-from-left"
        if ($animation === 'letters-fly-in-from-left') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-left" style="--letter-index: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letters-fly-in-from-right"
        if ($animation === 'letters-fly-in-from-right') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-right" style="--letter-index: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letters-fly-in-from-top"
        if ($animation === 'letters-fly-in-from-top') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-top" style="--letter-index: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letters-fly-in-from-bottom"
        if ($animation === 'letters-fly-in-from-bottom') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-bottom" style="--letter-index: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letter-flip-from-top"
        if ($animation === 'letter-flip-from-top') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter-flip-from-top" style="--letter-index: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letter-flip-from-bottom"
        if ($animation === 'letter-flip-from-bottom') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter-flip-from-bottom" style="--letter-index: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letter-flip-cycle"
        if ($animation === 'letter-flip-cycle') {
            $letters = str_split($text);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter-flip-cycle" style="--letter-index: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione non è tra quelle gestite, restituisci il testo intero senza avvolgerlo in uno span
        return $text;
    }
}

if (!function_exists('splitTextIntoLettersTitleDiv')) {
    function splitTextIntoLettersTitleDiv($content = '', $animation = '', $innerElement = []) {

        $speedEffect = isset($innerElement['speedEffect']) ? $innerElement['speedEffect'] : 200; // Valore predefinito: 100ms
        $pauseEffect = isset($innerElement['pauseEffect']) ? $innerElement['pauseEffect'] : 2000; // Valore predefinito: 2000ms
        $durationEffect = isset($innerElement['durationEffect']) ? $innerElement['durationEffect'] : 2; // Valore predefinito: Parametro passato
        $delayEffect = isset($innerElement['delayEffect']) ? $innerElement['delayEffect'] : 0; // Valore predefinito: Parametro passato
        $animationCount = isset($innerElement['animationCount']) ? $innerElement['animationCount'] : 1; // Valore predefinito: 1
        // Se l'animazione è "bounce", esegui lo split del testo in lettere
        if ($animation === 'bounce-title-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter ' . esc_attr($animation) . '">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "explode"
        if ($animation === 'explode-title-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $x = rand(-100, 100); // Posizione X casuale
                $y = rand(-100, 100); // Posizione Y casuale
                $rotation = rand(0, 360); // Rotazione casuale
                $result .= '<span class="explode-title-div" data-explosion-delay="' . esc_attr($delayEffect) . '" data-explosion-duration="' . esc_attr($durationEffect) . '" style="--x-title-div:' . $x . 'px; --y-title-div:' . $y . 'px; --rotation-title-div:' . $rotation . 'deg;animation-delay:' . esc_attr($delayEffect) . 's;animation-iteration-count:' . esc_attr($animationCount) .'; animation-duration:'  . esc_attr($durationEffect) .'s;">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "implode"
        if ($animation === 'implode-title-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $x = rand(-100, 100); // Posizione X casuale
                $y = rand(-100, 100); // Posizione Y casuale
                $rotation = rand(0, 360); // Rotazione casuale
                $result .= '<span class="implode-title-div" style="--x-title-div:' . $x . 'px; --y-title-div:' . $y . 'px; --rotation-title-div:' . $rotation . 'deg;animation-iteration-count:' . esc_attr($animationCount) .'; animation-delay:' . esc_attr($delayEffect) . 's; animation-duration:' . esc_attr($durationEffect) . 's;">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        $stylesSpan = [
            "--width-cursor-title-block" => isset($innerElement['widthCursor']) ? $innerElement['widthCursor'] . "px" : "2px",
            "--color-cursor-title-block" => isset($innerElement['cursorColor']) ? $innerElement['cursorColor'] : "#000000",
            "--animation-cursor-title-block" => isset($innerElement['animationCursor']) ? $innerElement['animationCursor'] . "s" : "0.75s",
        ];
        
        $styleAttribute = '';
        foreach ($stylesSpan as $property => $value) {
            $styleAttribute .= $property . ':' . $value . '; ';
        }
        
        if ($animation === 'typing-effect') {
            return '<span class="typewriter-title-div" data-text-title-div="' . esc_attr($content) . '" data-speed-effect-title-div="' . esc_attr($speedEffect) . '"  data-pause-effect-title-div="' . esc_attr($pauseEffect) . '"></span>
                    <span class="typewriter-cursor-title-div" style="' . esc_attr($styleAttribute) . '"></span>';
        }
        

        // Se l'animazione è "letters-fly-in-from-left"
        if ($animation === 'letters-fly-in-from-left-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-left-div" style="--letter-index-div: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letters-fly-in-from-right"
        if ($animation === 'letters-fly-in-from-right-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-right-div" style="--letter-index-div: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letters-fly-in-from-top"
        if ($animation === 'letters-fly-in-from-top-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-top-div" style="--letter-index-div: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letters-fly-in-from-bottom"
        if ($animation === 'letters-fly-in-from-bottom-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letters-fly-in-from-bottom-div" style="--letter-index-div: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letter-flip-from-top"
        if ($animation === 'letter-flip-from-top-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter-flip-from-top-div" style="--letter-index-div: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letter-flip-from-bottom"
        if ($animation === 'letter-flip-from-bottom-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter-flip-from-bottom-div" style="--letter-index-div: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione è "letter-flip-cycle"
        if ($animation === 'letter-flip-cycle-div') {
            $letters = str_split($content);
            $result = '';
            foreach ($letters as $index => $letter) {
                $result .= '<span class="letter-flip-cycle-div" style="--letter-index-div: ' . ($index + 1) . ';">' . esc_html($letter) . '</span>';
            }
            return $result;
        }

        // Se l'animazione non è tra quelle gestite, restituisci il testo intero senza avvolgerlo in uno span
        return $content;
    }
}



?>         

<div <?php echo wp_kses_data($wrapper_attributes) . ' data-swiper="' . $swiper_attr_encoded . '"'; ?> dir="<?php echo esc_attr($languageSlider); ?>" >
    <div class="swiper-wrapper">


    <?php 

// Recupera i post inclusi ed esclusi
$include_categories = !empty($attributes['includeCategories']) ? $attributes['includeCategories'] : [];
$exclude_categories = !empty($attributes['excludeCategories']) ? $attributes['excludeCategories'] : [];

// Recupera i post filtrati
$posts = cocoblocks_get_content('post', $include_categories, $exclude_categories,$order,$postsToShow);



if  ($attributes['contentType'] === 'post-based' && !empty($posts) && is_array($posts)) : ?>
    <?php foreach ($posts as $post) : ?>
        <div class="swiper-slide">
            <div class="content-slide-post">
                <?php if (!empty($attributes['postElementsOrder'])) : ?>
                    <?php foreach ($attributes['postElementsOrder'] as $element) : ?>
                        <?php if ($element === 'image' && !empty($post['image'])) : ?>
                            <img src="<?php echo esc_url($post['image']); ?>" alt="<?php echo esc_attr($post['title']); ?>" />
                        <?php elseif ($element === 'title' && !empty($post['title'])) : ?>
                            <h3><?php echo esc_html($post['title']); ?></h3>
                        <?php elseif ($element === 'excerpt' && !empty($post['excerpt'])) : ?>
                            <p><?php echo esc_html($post['excerpt']); ?></p>
                        <?php elseif ($element === 'link' && !empty($post['link'])) : ?>
                            <a href="<?php echo esc_url($post['link']); ?>"><?php echo __('Read More', 'cocoblocks'); ?></a>
                        <?php elseif ($element === 'author' && !empty($post['author'])) : ?>
                            <p><?php echo esc_html($post['author']); ?></p>
                        <?php elseif ($element === 'date' && !empty($post['date'])) : ?>
                            <p><?php echo esc_html($post['date']); ?></p>
                        <?php elseif ($element === 'categories' && !empty($post['categories'])) : ?>
                            <p>
                                <?php foreach ($post['categories'] as $category) : ?>
                                    <span class="category"><?php echo esc_html($category); ?></span>
                                <?php endforeach; ?>
                            </p>
                        <?php elseif ($element === 'tags' && !empty($post['tags'])) : ?>
                            <p>
                                <?php foreach ($post['tags'] as $tag) : ?>
                                    <span class="tag"><?php echo esc_html($tag); ?></span>
                                <?php endforeach; ?>
                            </p>
                        <?php endif; ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </div>
        </div>
    <?php endforeach; ?>









    <?php elseif ($attributes['contentType'] === 'woocommerce-based' && !empty($attributes['posts']) && is_array($attributes['posts'])) : ?>
        <?php foreach ($attributes['posts'] as $product) : ?>
            <div class="swiper-slide">
                <?php if (!empty($product['image'])) : ?>
                    <img src="<?php echo esc_url($product['image']); ?>" alt="<?php echo esc_attr($product['title']); ?>" />
                <?php endif; ?>
                <?php if (!empty($product['title'])) : ?>
                    <h3><?php echo esc_html($product['title']); ?></h3>
                <?php endif; ?>
                <?php if (!empty($product['excerpt'])) : ?>
                    <p><?php echo esc_html($product['excerpt']); ?></p>
                <?php endif; ?>
                <?php if (!empty($product['link'])) : ?>
                    <a href="<?php echo esc_url($product['link']); ?>"><?php echo __('View Product', 'cocoblocks'); ?></a>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>

        <?php elseif ($attributes['contentType'] === 'custom' && !empty($attributes['slides']) && is_array($attributes['slides'])) : ?>
            <?php foreach ($slides as $slide) : 
                $layout_class = !empty($slide['layout']) && $slide['layout'] === 'horizontal' ? 'horizontal-layout' : 'vertical-layout';
                $background_size = !empty($slide['fit']) ? esc_attr($slide['fit']) : 'cover';
                $focal_point = !empty($slide['focalPoint']) ? $slide['focalPoint'] : array('x' => 0.5, 'y' => 0.5);
                $background_position = sprintf('%s%% %s%%', esc_attr($focal_point['x'] * 100), esc_attr($focal_point['y'] * 100));
            ?>
            <!-- Custom content rendering starts here -->
            <div class="swiper-slide"
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
                ?>">

                <?php 
                $maxWidth = $slide['enableContentWidth'] ? $slide['contentWidth'] . 'px' : 'false';
                $developerMode = $slide['developerMode']; 
                ?>
                <div colorEffectStart="<?php echo esc_attr($colorEffectStart); ?>" 
                    colorEffectMiddle="<?php echo esc_attr($colorEffectMiddle); ?>" 
                    colorEffectEnd="<?php echo esc_attr($colorEffectEnd); ?>" 
                    data-effect="<?php echo esc_attr($mouseEffect)?>" 
                    data-color-first-liquid="<?php echo esc_attr($firstColorLiquid)?>"
                    data-color-second-liquid="<?php echo esc_attr($secondColorLiquid)?>"
                    data-color-third-liquid="<?php echo esc_attr($thirdColorLiquid)?>"
                    data-img-selected="<?php echo esc_attr( $attributes['imgSelected'] ? 'true' : 'false' ); ?>"
                    data-h1-selected="<?php echo esc_attr( $attributes['h1Selected'] ? 'true' : 'false' ); ?>"
                    data-h2-selected="<?php echo esc_attr( $attributes['h2Selected'] ? 'true' : 'false' ); ?>"
                    data-h3-selected="<?php echo esc_attr( $attributes['h3Selected'] ? 'true' : 'false' ); ?>"
                    data-h4-selected="<?php echo esc_attr( $attributes['h4Selected'] ? 'true' : 'false' ); ?>"
                    data-h5-selected="<?php echo esc_attr( $attributes['h5Selected'] ? 'true' : 'false' ); ?>"
                    data-h6-selected="<?php echo esc_attr( $attributes['h6Selected'] ? 'true' : 'false' ); ?>"
                    data-button-selected="<?php echo esc_attr( $attributes['buttonSelected'] ? 'true' : 'false' ); ?>"
                    data-span-selected="<?php echo esc_attr( $attributes['spanSelected'] ? 'true' : 'false' ); ?>"
                    data-p-selected="<?php echo esc_attr( $attributes['pSelected'] ? 'true' : 'false' ); ?>"
                    data-transition-paralax-mouse="<?php echo esc_attr($transitionParalaxMouse)?>s"
                    class="content-slide-slider <?php 
                    echo esc_attr($layout_class); 
                    if (!$developerMode) {
                        echo ' ' . esc_attr($slide['position']) . ' ' . esc_attr($overflow) . ' ' . esc_attr($slide['layout']) . '-layout';
                    }
                ?>"  style="<?php 
                  // Gestisci l'altezza
                  echo $autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; ';
                    echo 'width: 100%; ';
                    echo 'position: relative; ';
                    echo 'visibility: visible; ';
                    echo 'border-radius: ' . esc_attr($slide['backgroundBorderRadius']) . 'px; ';
                    echo 'border-style: ' . esc_attr($slide['borderStyleSlide']) . '; ';
                    echo 'border-width: ' . esc_attr($slide['backgroundBorderSize']) . 'px; ';
                    echo 'border-color: ' . esc_attr($slide['backgroundBorderColor']) . '; ';
                    echo 'margin: 0 auto; ';
                    if (!$developerMode) {
                        echo 'display: flex; ';
                        echo 'flex-direction: ' . esc_attr($slide['layout'] === 'horizontal' ? 'row' : 'column') . '; ';
                        echo 'text-align: center; ';
                        echo 'gap: ' . esc_attr($slide['gapItems']) . 'px; ';
                        echo 'padding-top: ' . esc_attr($slide['backgroundVerticalPadding']) . 'px; ';
                        echo 'padding-bottom: ' . esc_attr($slide['backgroundVerticalPadding']) . 'px; ';
                        echo 'padding-left: ' . esc_attr($slide['backgroundHorizontalPadding']) . 'px; ';
                        echo 'padding-right: ' . esc_attr($slide['backgroundHorizontalPadding']) . 'px; ';
                        echo 'max-width: ' . esc_attr($maxWidth) . '; ';
                        echo 'flex-wrap: ' . esc_attr($slide['layoutWrap']) . '; ';
                    }
                ?>">
               <?php if ($mouseEffect === 'liquid') : ?>
                    <script>
                    window.ga = window.ga || function() {
                        (ga.q = ga.q || []).push(arguments)
                    };
                    ga.l = +new Date;
                    ga('create', 'UA-105392568-1', 'auto');
                    ga('send', 'pageview');
                    </script>
                    <canvas class="banner_canvas" id="canvas_banner"></canvas>
                    <div class="top-title wow fadeInUp" onmousemove="color_hover(event)"></div>
                <?php endif; ?>
               
                <?php if (!empty($slide['backgroundType']) && $slide['backgroundType'] === 'video' && !empty($slide['backgroundVideo'])) : ?>
                    <video src="<?php echo esc_url($slide['backgroundVideo']); ?>" autoplay muted loop style="width: 100%; object-position: <?php echo esc_attr( $background_position )?>; height: 100%; position: absolute; top: 0; left: 0; object-fit: cover; z-index: 0;"></video>
                <?php endif; ?>
                           
                    <?php if (!empty($slide['elements']) && is_array($slide['elements'])): ?>
                    <?php foreach ($slide['elements'] as $element): ?>

                        <?php if ($element['type'] === 'menu'): ?>

                            <?php 
                              $desktopClassMenu = $element['enableDesktopTitle'] ? 'desktop-menu-visible' : 'desktop-menu-hidden';
                              $tabletClassMenu = $element['enableTabletTitle'] ? 'tablet-menu-visible' : 'tablet-menu-hidden';
                              $mobileClassMenu = $element['enableMobileTitle'] ? 'mobile-menu-visible' : 'mobile-menu-hidden';
                            // Verifica se il fontWeight è "bold"
                            $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === 'bold';
                            // Styles for the toggle
                            $stylesToggle = "
                                margin: " . esc_attr($element['marginTitle']['top']) . " " . esc_attr($element['marginTitle']['right']) . " " . esc_attr($element['marginTitle']['bottom']) . " " . esc_attr($element['marginTitle']['left']) . ";
                                box-shadow: " . esc_attr($element['boxShadowX']) . "px " . esc_attr($element['boxShadowY']) . "px " . esc_attr($element['boxShadowBlur']) . "px " . esc_attr($element['boxShadowSpread']) . "px " . esc_attr($element['colorShadow']) . ";
                                background-color: " . esc_attr($element['backgroundColorToggle']) . ";
                                --color-icon-menu: " . esc_attr($element['toggleColor']) . ";
                                border-radius: " . esc_attr($element['radiusToggle']) . "px;
                                --scale-icon-menu: " . esc_attr($element['scaleToggle']) . ";
                            ";

                            // Styles for the menu
                            $stylesUlMenu = "
                                justify-content: " . esc_attr($element['textAlign']) . ";
                                align-items: " . esc_attr($element['textAlignItems']) . ";
                                background-color: " . esc_attr($element['backgroundColor']) . ";
                                gap: " . esc_attr($element['gapMenu']) . "px;
                                height: " . esc_attr($element['heightMenu']) . ";
                                padding: " . esc_attr($element['paddingTitle']['top']) . " " . esc_attr($element['paddingTitle']['right']) . " " . esc_attr($element['paddingTitle']['bottom']) . " " . esc_attr($element['paddingTitle']['left']) . ";
                            ";

                            // Styles for the links inside the menu
                            $stylesAMenu = "
                                font-size: " . esc_attr($element['fontSize']) . "px;
                                color: " . esc_attr($element['textColor']) . ";
                                --color-hover-menu: " . esc_attr($element['textColorHover']) . ";
                                letter-spacing: " . esc_attr($element['letterSpacing']) . "px;
                                font-style: " . (!empty($element['fontStyle']['fontStyle']) ? esc_attr($element['fontStyle']['fontStyle']) : 'normal') . ";
                                font-weight: " . ($isBold ? 'bold' : (!empty($element['fontWeight']) ? esc_attr($element['fontWeight']) : 'normal')) . ";
                                text-decoration: " . (!empty($element['fontStyle']['textDecoration']) ? esc_attr($element['fontStyle']['textDecoration']) : 'none') . ";
                                line-height: " . esc_attr($element['lineHeight']) . ";
                                font-family: " . esc_attr($element['fontFamily']) . ";
                            ";
                            ?>

                            <div class="hamburger-icon <?php echo esc_attr($element['direction']); ?> <?php echo esc_attr($element['sizeToggle']); ?> <?php echo esc_attr($desktopClassMenu); ?> <?php echo esc_attr($tabletClassMenu); ?> <?php echo esc_attr($mobileClassMenu); ?>" style="<?php echo $stylesToggle; ?>">
                                <div class="icon-1"></div>
                                <div class="icon-2"></div>
                                <div class="icon-3"></div>
                                <div class="clear"></div>
                            </div>
                            <nav class="nav <?php echo esc_attr($element['direction'] . ' ' . $element['directionMenu'] . ' ' . $element['widthMenu']); ?>">
                                <ul style="<?php echo $stylesUlMenu; ?>">
                                    <?php foreach ($element['menuItems'] as $item) : ?>
                                        <li>
                                        <a 
                                            style="<?php echo esc_attr($stylesAMenu); ?>" 
                                            href="<?php echo esc_url($item['link']); ?>" 
                                            target="<?php echo esc_attr($item['openInNewTab']) ? '_blank' : '_self'; ?>" 
                                            rel="<?php echo esc_attr($item['openInNewTab']) ? 'noopener noreferrer' : ''; ?>"
                                        >
                                                <?php echo esc_html($item['text']); ?>
                                            </a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </nav>

                            <?php endif; ?>

                      
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
                            $paddingTop = isset($element['paddingTitle']['top']) ? esc_attr($element['paddingTitle']['top']) : '0px';
                            $paddingRight = isset($element['paddingTitle']['right']) ? esc_attr($element['paddingTitle']['right']) : '0px';
                            $paddingBottom = isset($element['paddingTitle']['bottom']) ? esc_attr($element['paddingTitle']['bottom']) : '0px';
                            $paddingLeft = isset($element['paddingTitle']['left']) ? esc_attr($element['paddingTitle']['left']) : '0px';
                            // Combina i padding
                            $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
                            // Calcola se il font deve essere in grassetto
                            $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === "bold" ? "bold" : (isset($element['fontWeight']) ? esc_attr($element['fontWeight']) : "normal");
                            $stylesTitle = 'font-size: ' . esc_attr($element['fontSize']) . 'px; '
                            . '--font-size-tablet: ' . esc_attr($element['fontSizeTablet']) . 'px; '
                            . '--font-size-mobile: ' . esc_attr($element['fontSizeMobile']) . 'px; '
                            . 'color: ' . esc_attr($element['textColor']) . '; '
                            . 'text-align: ' . esc_attr($element['textAlign']) . '; '
                            . 'letter-spacing: ' . esc_attr($element['letterSpacing']) . 'px; '
                            . 'font-style: ' . $fontStyle . '; '
                            . 'font-weight: ' . $isBold . '; '
                            . 'text-decoration: ' . $textDecoration . '; '
                            . 'line-height: ' . esc_attr($element['lineHeight']) . '; '
                            . 'font-family: ' . esc_attr($element['fontFamily']) . '; '
                            . '--duration-effect-odd: ' . esc_attr($element['durationEffectOdd']) . 's;'
                            . '--duration-effect-even: ' . esc_attr($element['durationEffectEven']) . 's;'
                            . '--delay-effect :' . esc_attr($element['delayEffect']) . 's;'
                            . '--color-gradient-one:' . esc_attr($element['gradinetColorOne']) . ';'
                            . '--color-gradient-two:' . esc_attr($element['gradinetColorTwo']) . ';'
                            . '--color-gradient-three:' . esc_attr($element['gradinetColorThree']) . ';'
                            . '--color-gradient-four:' . esc_attr($element['gradinetColorFour']) . ';'
                            . 'margin: ' . $margin . ';'
                            . 'padding: ' . $padding . ';'
                            . 'border-width: ' . esc_attr($element['backgroundBorderSize']) . 'px ' . ';'
                            . 'border-style: ' . esc_attr($element['borderStyle']) . ';'
                            . 'border-color: ' . esc_attr($element['backgroundBorderColor']) . ';'
                            . '--border-color-hover: ' . esc_attr($element['backgroundBorderColorHover']) . ';'
                            . '--opacity-hover: ' . esc_attr($element['opacityHover']) . ';'
                            . '--color-hover: ' . esc_attr($element['textColorHover']) . ';'
                            . '--border-style-hover: ' . esc_attr($element['borderStyleHover']) . ';'
                            . '--border-width-hover: ' . esc_attr($element['backgroundBorderSizeHover']) . 'px;'
                            . '--transition-hover: ' . esc_attr($element['durationEffectHover']) . 's;'
                            . '--translate-hover: ' . esc_attr($element['translateEffectHover']) . 'px;'
                            . '--color-effect-hover: ' . esc_attr($element['effectHoverColorHover']) . ';'
                            . '--box-shadow-x: ' . esc_attr($element['boxShadowX']) . 'px;'
                            . '--box-shadow-y: ' . esc_attr($element['boxShadowY']) . 'px;'
                            . '--box-shadow-blur: ' . esc_attr($element['boxShadowBlur']) . 'px;'
                            . '--box-shadow-spread: ' . esc_attr($element['boxShadowSpread']) . 'px;'
                            . '--box-shadow-color: ' . esc_attr($element['colorShadow']) . ';'
                            . 'writing-mode: ' . esc_attr($element['textWriteMode']) . ';'
                            . 'text-orientation: ' . esc_attr($element['textOrientation']) . ';'
                            . 'border-radius: ' . esc_attr($element['backgroundBorderRadius']) . 'px;'
                            . 'opacity: ' . esc_attr($element['opacity']) . ';'
                            . 'transform: rotate(' . esc_attr($element['rotate']) . 'deg);'
                            . '--rotate-hover:' . esc_attr($element['rotateHover']) . 'deg;';
                         

                            // Recupera il tag HTML
                            $tag = isset($element['elementTitle']) ? esc_attr($element['elementTitle']) : 'h3';
                        ?>
                        <?php
                            // Aggiungi classi in base alla visibilità per desktop, tablet e mobile
                            $desktopClass = $element['enableDesktopTitle'] ? 'desktop-title-visible' : 'desktop-title-hidden';
                            $tabletClass = $element['enableTabletTitle'] ? 'tablet-title-visible' : 'tablet-title-hidden';
                            $mobileClass = $element['enableMobileTitle'] ? 'mobile-title-visible' : 'mobile-title-hidden';
                            
                        ?>
                        <?php if ($slide['developerMode']) : ?>         
                       <div class="content-content-slide-absolute"
                            style="
                                transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                                position: absolute;
                                z-index:<?php echo esc_attr( $element['zIndexTitle'] )?>
                            "
                            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                       >
                       <?php endif; ?>
                       <div
                            style="
                                --color-decoration: <?php echo esc_attr($element['underlineColor']); ?>;
                                --padding-decoration: <?php echo esc_attr($element['underlinePadding']); ?>px;
                                --width-decoration: <?php echo esc_attr($element['underlineWidth']); ?>%;
                                --vertical-decoration: <?php echo esc_attr($element['underlineVertical']); ?>px;
                                --horizontal-decoration: <?php echo esc_attr($element['underlineHorizontal']); ?>px;
                                --height-decoration: <?php echo esc_attr($element['underlineHeight']); ?>px;
                                --animation-decoration: <?php echo esc_attr($element['underlineAnimation']); ?>;
                                --animation-decoration-from: <?php echo esc_attr($element['underlineAnimationFrom']); ?>%;
                                --animation-decoration-to: <?php echo esc_attr($element['underlineAnimationTo']); ?>%;
                                --animation-decoration-from-size: <?php echo esc_attr($element['underlineFromSizeNew']); ?>%;
                                --animation-decoration-to-size: <?php echo esc_attr($element['underlineToSizeNew']); ?>%;
                                --animation-decoration-transition: <?php echo esc_attr($element['underlineAnimationTransition']); ?>s;
                                --duration-effect: <?php echo esc_attr($element['durationEffect']); ?>s;
                                --delay-effect: <?php echo esc_attr($element['delayEffect']);?>s;
                                --interation: <?php echo esc_attr($element['interation']);?>;
                                --delay-hide-seconds-title: <?php echo esc_attr($element['delayTransition']);?>s;
                                width: <?php echo esc_attr($element['widthTitle']) === 'custom' ? esc_attr($element['widthCustomTitle']) . '%' : esc_attr($element['widthTitle']); ?>;
                            "
                            class="content-title-slide letter <?php echo esc_attr($element['decoration']); ?> <?php echo esc_attr($desktopClass); ?> <?php echo esc_attr($tabletClass); ?> <?php echo esc_attr($mobileClass); ?> <?php echo esc_attr($element['animation']); ?>"
                            data-speed-effect="<?php echo esc_attr($element['speedEffect']); ?>"
                            data-animation="<?php echo esc_attr($element['animation']); ?>"
                            data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                            data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                           
                        >
                            <<?php echo esc_attr($tag); ?>
                                class="title-slide <?php echo esc_attr($element['animationHover']); ?>"
                                <?php
                                $link_start = '';
                                $link_end = '';
                                $target = '_self'; // Default
                                $rel = 'follow'; // Default

                               // Verifica il tipo di link e prepara i tag <a> e attributi
                                    if ($element['textLink'] === 'link' && !empty($element['linkUrl'])) {
                                        // Se è un link, prepara i tag <a> con target e rel
                                        if (!empty($element['linkTarget'])) {
                                            $target = esc_attr($element['linkTarget']);
                                        }
                                        if ($element['linkRel'] === 'nofollow') {
                                            $rel = 'nofollow';
                                        }
                                        $link_start = '<a href="' . esc_url($element['linkUrl']) . '" target="' . $target . '" rel="' . $rel . '">';
                                        $link_end = '</a>';
                                    } elseif ($element['textLink'] === 'scroll-below') {
                                        // Logica per lo scroll in basso
                                        $link_start = '<a href="#" onclick="window.scrollBy({ top: window.innerHeight, behavior: \'smooth\' }); return false;">';
                                        $link_end = '</a>';
                                    } elseif ($element['textLink'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
                                        // Logica per scrollare ad un ID specifico
                                        $link_start = '<a href="#" onclick="document.getElementById(\'' . esc_attr($element['scrollToId']) . '\').scrollIntoView({ behavior: \'smooth\' }); return false;">';
                                        $link_end = '</a>';
                                    }
                                ?>
                                style="<?php echo esc_attr($stylesTitle); ?>"
                                data-swiper-parallax-x="<?php echo esc_attr($element['parallaxTitle']); ?>"
                                data-swiper-parallax-y="<?php echo esc_attr($element['parallaxTitleY']); ?>"
                                data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxTitleScale']); ?>"
                                data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxTitleDuration']); ?>"
                                data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxTitleOpacity']); ?>"
                                data-font-family="<?php echo esc_attr($element['fontFamily']); ?>" 
                             
                                <?php if ($element['textLink'] === 'link') : ?>
                                    href="<?php echo esc_url($element['linkUrl']); ?>"
                                <?php elseif ($element['textLink'] === 'scroll-below' || $element['textLink'] === 'scroll-to-id') : ?>
                                    onclick="
                                        <?php if ($element['textLink'] === 'scroll-below') : ?>
                                            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                                        <?php elseif ($element['textLink'] === 'scroll-to-id') : ?>
                                            var targetElement = document.getElementById('<?php echo esc_js($element['scrollToId']); ?>');
                                            if (targetElement) {
                                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                            }
                                        <?php endif; ?>
                                        return false;
                                    "
                                <?php endif; ?>
                            >
                            <?php echo $link_start; ?>
                                <?php
                                // Genera il testo con lettere animate solo se c'è un'animazione
                                echo splitTextIntoLetters($element['text'], $element['animation'], $element);
                                ?>
                                <?php echo $link_end; ?>
                            </<?php echo esc_attr($tag); ?>>
                        </div>

                        <?php if ($slide['developerMode']) : ?>    
                        </div>
                        <?php endif; ?>

                        <?php endif; ?>
                        <?php
                         if (!function_exists('getStylesTitleBlock')) {
                            function getStylesTitleBlock($innerElement) {
                                $isBold = isset($innerElement['fontStyle']['fontWeight']) && $innerElement['fontStyle']['fontWeight'] === "bold";
                                $styles = [
                                    'font-size' => !empty($innerElement['fontSize']) ? $innerElement['fontSize'] . 'px' : '16px',
                                    '--font-size-block-tablet' => !empty($innerElement['fontSizeTablet']) ? $innerElement['fontSizeTablet'] . 'px' : '14px',
                                    '--font-size-block-mobile' => !empty($innerElement['fontSizeMobile']) ? $innerElement['fontSizeMobile'] . 'px' : '12px',
                                    'color' => !empty($innerElement['textColor']) ? $innerElement['textColor'] : '#000000',
                                    'text-align' => !empty($innerElement['textAlign']) ? $innerElement['textAlign'] : 'left',
                                    'letter-spacing' => isset($innerElement['letterSpacingTitleBlock']) ? $innerElement['letterSpacingTitleBlock'] . "px" : "0px",
                                    'font-style' => isset($innerElement['fontStyle']['fontStyle']) ? $innerElement['fontStyle']['fontStyle'] : "normal",
                                    'font-weight' => $isBold ? "bold" : (isset($innerElement['fontWeightTitleBlock']) ? $innerElement['fontWeightTitleBlock'] : "normal"),
                                    'text-decoration' => isset($innerElement['fontStyle']['textDecoration']) ? $innerElement['fontStyle']['textDecoration'] : "none",
                                    'line-height' => !empty($innerElement['lineHeight']) ? $innerElement['lineHeight'] : '1.5',
                                    'font-family' => !empty($innerElement['fontFamilyTitleBlock']) ? $innerElement['fontFamilyTitleBlock'] : 'inherit', // Inherit se non specificato
                                    'margin' => !empty($innerElement['marginTitle']) ? $innerElement['marginTitle']['top'] . ' ' . $innerElement['marginTitle']['right'] . ' ' . $innerElement['marginTitle']['bottom'] . ' ' . $innerElement['marginTitle']['left'] : '0',
                                    'padding' => !empty($innerElement['paddingTitleBlock']) ? $innerElement['paddingTitleBlock']['top'] . ' ' . $innerElement['paddingTitleBlock']['right'] . ' ' . $innerElement['paddingTitleBlock']['bottom'] . ' ' . $innerElement['paddingTitleBlock']['left'] : '0',
                                    'border-style' => !empty($innerElement['borderStyle']) ? $innerElement['borderStyle'] : 'none',
                                    'border-width' => !empty($innerElement['backgroundBorderSize']) ? $innerElement['backgroundBorderSize'] . 'px' : '0',
                                    'border-color' => !empty($innerElement['backgroundBorderColor']) ? $innerElement['backgroundBorderColor'] : 'transparent',
                                    'border-radius' => !empty($innerElement['backgroundBorderRadius']) ? $innerElement['backgroundBorderRadius'] . 'px' : '0',
                                    'box-shadow' => isset($innerElement['boxShadowX']) && isset($innerElement['boxShadowY']) && isset($innerElement['boxShadowBlur']) && isset($innerElement['boxShadowSpread']) && isset($innerElement['colorShadow']) 
                                        ? "{$innerElement['boxShadowX']}px {$innerElement['boxShadowY']}px {$innerElement['boxShadowBlur']}px {$innerElement['boxShadowSpread']}px {$innerElement['colorShadow']}" 
                                        : "0 0 0 0 #000000",
                                    'writing-mode' => isset($innerElement['textWriteMode']) ? $innerElement['textWriteMode'] : "initial",
                                    'text-orientation' => isset($innerElement['textOrientation']) ? $innerElement['textOrientation'] : "initial",
                                    '--delay-effect-title-block' => isset($innerElement['delayEffect']) ? $innerElement['delayEffect'] . "s" : "0s",
                                    '--duration-effect-odd-title-block' => isset($innerElement['durationEffectOdd']) ? $innerElement['durationEffectOdd'] . "s" : "0s",
                                    '--duration-effect-even-title-block' => isset($innerElement['durationEffectEven']) ? $innerElement['durationEffectEven'] . "s" : "0s",
                                    '--color-gradient-one-title-div' => isset($innerElement['gradinetColorOne']) ? $innerElement['gradinetColorOne'] : "",
                                    '--color-gradient-two-title-div' => isset($innerElement['gradinetColorTwo']) ? $innerElement['gradinetColorTwo'] : "",
                                    '--color-gradient-three-title-div' => isset($innerElement['gradinetColorThree']) ? $innerElement['gradinetColorThree'] : "",
                                    '--color-gradient-four-title-div' => isset($innerElement['gradinetColorFour']) ? $innerElement['gradinetColorFour'] : "",
                                    '--border-style-hover-title-div' => isset($innerElement['borderStyleHover']) ? $innerElement['borderStyleHover'] : "none",
                                    '--transition-hover-title-div' => isset($innerElement['durationEffectHover']) ? $innerElement['durationEffectHover'] . 's' : "0.3s",
                                    '--translate-hover-title-div' => isset($innerElement['translateEffectHover']) ? $innerElement['translateEffectHover'] . 'px' : "-10px",
                                    '--color-effect-hover-title-div' => isset($innerElement['effectHoverColorHover']) ? $innerElement['effectHoverColorHover'] : "#000000",
                                    '--border-color-hover-title-div' => isset($innerElement['backgroundBorderColorHover']) ? $innerElement['backgroundBorderColorHover'] : "#000000",
                                    '--border-width-hover-title-div' => isset($innerElement['backgroundBorderSizeHover']) ? $innerElement['backgroundBorderSizeHover'] . 'px' : "0px",
                                    '--opacity-hover-title-div' => isset($innerElement['opacityHover']) ? $innerElement['opacityHover'] : 1,
                                    '--color-hover-title-div' => isset($innerElement['textColorHover']) ? $innerElement['textColorHover'] : "",
                                    'opacity' => isset($innerElement['opacity']) ? esc_attr($innerElement['opacity']) : 1, 
                                ];

                                $styleString = '';
                                foreach ($styles as $key => $value) {
                                    $styleString .= $key . ': ' . esc_attr($value) . '; ';
                                }
                                return $styleString;
                            }
                            }
                            ?>
                            <?php if ($element['type'] === 'div'): ?>
                            <?php
                             $link_url = '';
                             $onclick = '';
                             $target_div = '_self'; // Default
                             $rel_div = 'follow'; // Default
                             if ($element['textLinkDiv'] !== 'none') {
                                 // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                 if ($element['textLinkDiv'] === 'link' && !empty($element['linkUrlDiv'])) {
                                     $link_url = esc_url($element['linkUrlDiv']);
                                     if (!empty($element['linkTargetDiv'])) {
                                         $target_div = esc_attr($element['linkTargetDiv']);
                                     }
                                     if ($element['linkRelDiv'] === 'nofollow') {
                                         $rel_div = 'nofollow';
                                     }
                                     $onclick = "window.open('{$link_url}', '{$target_div}', 'rel={$rel_div}');";
                                 } elseif ($element['textLinkDiv'] === 'scroll-below') {
                                     $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                 } elseif ($element['textLinkDiv'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
                                     $scroll_id = esc_attr($element['scrollToId']);
                                     $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                 }
                             }
                             // Aggiungi classi in base alla visibilità per desktop, tablet e mobile
                             $desktopClassDiv = $element['enableDesktopDiv'] ? 'desktop-div-visible' : 'desktop-div-hidden';
                             $tabletClassDiv = $element['enableTabletDiv'] ? 'tablet-div-visible' : 'tablet-div-hidden';
                             $mobileClassDiv = $element['enableMobileDiv'] ? 'mobile-div-visible' : 'mobile-div-hidden';
                             // Element Div
                             $TagDiv = !empty($element['elementDiv']) ? $element['elementDiv'] : 'div';
                            ?>
                            <?php if ($slide['developerMode']) : ?>    
                             <div 
                                class="content-inner-div-absolute" 
                                style="transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                                       position: absolute;
                                        z-index:<?php echo esc_attr( $element['zIndexDiv'] )?>
                                       "
                                data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                             >
                             <?php endif; ?> 
                             <div 
                                class="content-inner-div" 
                                style="opacity: <?php echo esc_attr($element['opacityDiv']) ?>;  
                                       --transition-hover-div: <?php echo esc_attr($element['durationEffectHoverDiv']) ?>s;
                                        --delay-hide-seconds-div: <?php echo esc_attr($element['delayTransition']);?>s;
                                "
                                data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                >
                             <<?php echo esc_attr($TagDiv); ?>
                                <?php if ($element['textLinkDiv'] !== 'none') : ?>
                                    onclick="<?php echo $onclick; ?>"
                                <?php endif; ?> 
                                data-swiper-parallax-x="<?php echo esc_attr($element['parallaxDiv']); ?>"
                                data-swiper-parallax-y="<?php echo esc_attr($element['parallaxDivY']); ?>"
                                data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxDivScale']); ?>"
                                data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxDivDuration']); ?>"
                                data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxDivOpacity']); ?>"
                                class="div-slide <?php echo esc_attr($element['positionDiv'] . ' ' . $element['layoutDiv'] . '-layout ' . $element['animationDiv']  . ' ' . $element['animationHoverDiv'] . ' ' . $desktopClassDiv . ' ' . $tabletClassDiv . ' ' . $mobileClassDiv ); ?>"  data-animation-div="<?php echo esc_attr($element['animationDiv']); ?>"
                                style="
                                    background-color: <?php echo esc_attr($element['backgroundColor'] ?? 'transparent'); ?>;
                                    flex-direction: <?php echo $element['layoutDiv'] === 'horizontal' ? 'row' : 'column'; ?>;
                                    text-align: center;
                                    position: relative;
                                    <?php if ($element['textLinkDiv'] !== 'none') : ?>
                                        cursor: pointer;
                                    <?php endif; ?>
                                    visibility: visible;
                                    gap: <?php echo esc_attr($element['gapItemsDiv']); ?>px;
                                    border-radius: <?php echo esc_attr($element['backgroundBorderRadiusDiv']); ?>px;
                                    padding-top: <?php echo esc_attr($element['backgroundVerticalPaddingDiv']); ?>px;
                                    padding-bottom: <?php echo esc_attr($element['backgroundVerticalPaddingDiv']); ?>px;
                                    padding-left: <?php echo esc_attr($element['backgroundHorizontalPaddingDiv']); ?>px;
                                    padding-right: <?php echo esc_attr($element['backgroundHorizontalPaddingDiv']); ?>px;
                                    border-style: <?php echo esc_attr( $element['borderStyleDiv'] ); ?>;
                                    border-width: <?php echo esc_attr( $element['backgroundBorderSizeDiv'] ); ?>px;
                                    border-color: <?php echo esc_attr( $element['backgroundBorderColorDiv'] ); ?>;
                                    width: <?php echo esc_attr($element['contentWidthDiv']) === 'custom' ? esc_attr($element['customContentWidthDiv']) . '%' : esc_attr($element['contentWidthDiv']); ?>;
                                    height: <?php echo esc_attr($element['contentHeightDiv']) === 'custom' ? esc_attr($element['customContentHeightDiv']) . '%' : esc_attr($element['contentHeightDiv']); ?>;
                                    margin: <?php echo esc_attr($element['marginDiv']['top']) . ' ' . esc_attr($element['marginDiv']['right']) . ' ' . esc_attr($element['marginDiv']['bottom']) . ' ' . esc_attr($element['marginDiv']['left'])?>;
                                    box-shadow: <?php echo esc_attr($element['boxShadowX']) ?>px <?php echo esc_attr($element['boxShadowY']) ?>px <?php echo esc_attr($element['boxShadowBlur']) ?>px <?php echo esc_attr($element['boxShadowSpread']) ?>px <?php echo esc_attr($element['colorShadow']) ?>;
                                    rotate: <?php echo esc_attr($element['rotateDiv']) ?>deg;
                                    transform: rotate(<?php echo esc_attr($element['rotateDiv']) ?>deg);
                                    --duration-effect-div: <?php echo esc_attr($element['durationEffectDiv']) ?>s;
                                    --interation-div: <?php echo esc_attr($element['interationDiv']) ?>;
                                    --color-hover-div:  <?php echo esc_attr($element['divColorHover']) ?>;
                                    --border-color-hover-div: <?php echo esc_attr($element['backgroundBorderColorHoverDiv']) ?>;
                                    --border-width-hover-div: <?php echo esc_attr($element['backgroundBorderSizeDivHover']) ?>px;
                                    --opacity-hover-div: <?php echo esc_attr($element['opacityHoverDiv']) ?>;
                                    --border-style-hover-div: <?php echo esc_attr($element['borderStyleHoverDiv']) ?>;
                                    --transition-hover-div: <?php echo esc_attr($element['durationEffectHoverDiv']) ?>s;    
                                    --translate-hover-div: <?php echo esc_attr($element['translateEffectHoverDiv']) ?>px;
                                    --color-effect-hover-div: <?php echo esc_attr($element['effectHoverColorHoverDiv']) ?>;
                                    --rotate-hover-div: <?php echo esc_attr($element['rotateHoverDiv']) ?>deg;
                                    --delay-effect-div: <?php echo esc_attr($element['delayEffectDiv']) ?>s; 
                                "
                            >


                                <?php if (!empty($element['innerElements']) && is_array($element['innerElements'])): ?>
                                    <?php foreach ($element['innerElements'] as $innerIndex => $innerElement): ?>

                                    <?php if ($innerElement['type'] === 'text'): ?>
                                        <?php $TagBlock = !empty($innerElement['elementTitle']) ? $innerElement['elementTitle'] : 'h3'; ?>
                                        <?php
                                            // Aggiungi classi in base alla visibilità per desktop, tablet e mobile
                                            $desktopClassTitleDiv = $innerElement['enableDesktopTitle'] ? 'desktop-title-div-visible' : 'desktop-title-div-hidden';
                                            $tabletClassTitleDiv = $innerElement['enableTabletTitle'] ? 'tablet-title-div-visible' : 'tablet-title-div-hidden';
                                            $mobileClassTitleDiv = $innerElement['enableMobileTitle'] ? 'mobile-title-div-visible' : 'mobile-title-div-hidden';
                                        ?>
                                        <div
                                            style="transform: rotate(<?php echo esc_attr($innerElement['rotate']); ?>deg); 
                                            --color-decoration-title-div: <?php echo esc_attr($innerElement['underlineColor']); ?>;
                                            --padding-decoration-title-div: <?php echo esc_attr($innerElement['underlinePadding']); ?>px;
                                            --width-decoration-title-div: <?php echo esc_attr($innerElement['underlineWidth']); ?>%;
                                            --vertical-decoration-title-div: <?php echo esc_attr($innerElement['underlineVertical']); ?>px;
                                            --horizontal-decoration-title-div: <?php echo esc_attr($innerElement['underlineHorizontal']); ?>px;
                                            --height-decoration-title-div: <?php echo esc_attr($innerElement['underlineHeight']); ?>px;
                                            --animation-decoration-title-div: <?php echo esc_attr($innerElement['underlineAnimation']); ?>;
                                            --animation-decoration-from-title-div: <?php echo esc_attr($innerElement['underlineAnimationFrom']); ?>%;
                                            --animation-decoration-to-title-div: <?php echo esc_attr($innerElement['underlineAnimationTo']); ?>%;
                                            --animation-decoration-from-size-title-div: <?php echo esc_attr($innerElement['underlineFromSizeNew']); ?>%;
                                            --animation-decoration-to-size-title-div: <?php echo esc_attr($innerElement['underlineToSizeNew']); ?>%;
                                            --animation-decoration-transition-title-div: <?php echo esc_attr($innerElement['underlineAnimationTransition']); ?>s;
                                            --rotate-hover-title-div: <?php echo esc_attr($innerElement['rotateHover']); ?>deg;
                                            --duration-effect-title-block: <?php echo esc_attr($innerElement['durationEffect']); ?>s; 
                                            --delay-effect-title-block: <?php echo esc_attr($innerElement['delayEffect']) ; ?>s; 
                                            --transition-hover-title-div: <?php echo esc_attr($innerElement['durationEffectHover']) ?>s;
                                            --interation-title-block: <?php echo esc_attr($innerElement['iteration']); ?>;
                                            --delay-hide-seconds-title-block: <?php echo esc_attr($innerElement['delayTransition']);?>s;
                                             z-index:<?php echo esc_attr( $innerElement['zIndexTitle'] )?>;
                                             position:<?php echo esc_attr($innerElement['positionInnerText']) ?> ;
                                           top: <?php echo esc_attr($innerElement['verticalPositionInnerText'])?>px;
                                           left: <?php echo esc_attr($innerElement['horizontalPositionInnerText']) ?>px;
                                            "
                                            class="content-title-div letter <?php echo esc_attr($innerElement['decoration']); ?> <?php echo esc_attr($innerElement['animation']); ?>  <?php echo esc_attr($desktopClassTitleDiv); ?> <?php echo esc_attr($tabletClassTitleDiv); ?> <?php echo esc_attr($mobileClassTitleDiv); ?>"
                                            data-animation-title-div="<?php echo esc_attr($innerElement['animation']); ?>"
                                            data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                            data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                        >
                                            <<?php echo esc_attr($TagBlock); ?>
                                                class="title-slide-div <?php echo esc_attr($innerElement['animationHover']); ?>"
                                            <?php
                                                $link_start = '';
                                                $link_end = '';
                                                $target = '_self'; // Default
                                                $rel = 'follow'; // Default
                                                // Verifica il tipo di link e prepara i tag <a> e attributi
                                                    if ($innerElement['textLink'] === 'link' && !empty($innerElement['linkUrl'])) {
                                                        // Se è un link, prepara i tag <a> con target e rel
                                                        if (!empty($innerElement['linkTarget'])) {
                                                            $target = esc_attr($innerElement['linkTarget']);
                                                        }
                                                        if ($innerElement['linkRel'] === 'nofollow') {
                                                            $rel = 'nofollow';
                                                        }
                                                        $link_start = '<a style="text-decoration:none;color:inherit;" href="' . esc_url($innerElement['linkUrl']) . '" target="' . $target . '" rel="' . $rel . '">';
                                                        $link_end = '</a>';
                                                    } elseif ($innerElement['textLink'] === 'scroll-below') {
                                                        // Logica per lo scroll in basso
                                                        $link_start = '<a style="text-decoration:none;color:inherit;" href="#" onclick="window.scrollBy({ top: window.innerHeight, behavior: \'smooth\' }); return false;">';
                                                        $link_end = '</a>';
                                                    } elseif ($innerElement['textLink'] === 'scroll-to-id' && !empty($innerElement['scrollToId'])) {
                                                        // Logica per scrollare ad un ID specifico
                                                        $link_start = '<a style="text-decoration:none;color:inherit;" href="#" onclick="document.getElementById(\'' . esc_attr($innerElement['scrollToId']) . '\').scrollIntoView({ behavior: \'smooth\' }); return false;">';
                                                        $link_end = '</a>';
                                                    }
                                                ?>
                                                style="<?php echo esc_attr(getStylesTitleBlock($innerElement)); ?>"
                                                data-swiper-parallax-x="<?php echo esc_attr($innerElement['parallaxTitle']); ?>"
                                                data-swiper-parallax-y="<?php echo esc_attr($innerElement['parallaxTitleY']); ?>"
                                                data-swiper-parallax-scale="<?php echo esc_attr($innerElement['parallaxTitleScale']); ?>"
                                                data-swiper-parallax-duration="<?php echo esc_attr($innerElement['parallaxTitleDuration']); ?>"
                                                data-swiper-parallax-opacity="<?php echo esc_attr($innerElement['parallaxTitleOpacity']); ?>"
                                                data-font-family="<?php echo esc_attr($innerElement['fontFamilyTitleBlock']); ?>" 
                                                <?php if ($innerElement['textLink'] === 'link') : ?>
                                                    href="<?php echo esc_url($innerElement['linkUrl']); ?>"
                                                <?php elseif ($innerElement['textLink'] === 'scroll-below' || $innerElement['textLink'] === 'scroll-to-id') : ?>
                                                    onclick="
                                                        <?php if ($innerElement['textLink'] === 'scroll-below') : ?>
                                                            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                                                        <?php elseif ($innerElement['textLink'] === 'scroll-to-id') : ?>
                                                            var targetElement = document.getElementById('<?php echo esc_js($innerElement['scrollToId']); ?>');
                                                            if (targetElement) {
                                                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        <?php endif; ?>
                                                        return false;
                                                    "
                                                <?php endif; ?>
                                            >
                                            <?php echo $link_start; ?>
                                                <?php echo splitTextIntoLettersTitleDiv($innerElement['content'], $innerElement['animation'],$innerElement); ?>
                                            <?php echo $link_end; ?>
                                            </<?php echo esc_attr($TagBlock); ?>>
                                        </div>



                        <?php
                           // Button
                           elseif  ($innerElement['type'] === 'button'): 

                                $desktopClassButton = $innerElement['enableDesktopButton'] ? 'desktop-button-visible-inner' : 'desktop-button-hidden-inner';
                                $tabletClassButton = $innerElement['enableTabletButton'] ? 'tablet-button-visible-inner' : 'tablet-button-hidden-inner';
                                $mobileClassButton = $innerElement['enableMobileButton'] ? 'mobile-button-visible-inner' : 'mobile-button-hidden-inner';
                                if ($innerElement['buttonLink'] !== 'none') {
                                    // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                    if ($innerElement['buttonLink'] === 'link' && !empty($innerElement['linkUrlButton'])) {
                                        $link_url = esc_url($innerElement['linkUrlButton']);
                                        if (!empty($innerElement['linkTargetButton'])) {
                                            $linkTargetButton = esc_attr($innerElement['linkTargetButton']);
                                        }
                                        if ($innerElement['linkRelButton'] === 'nofollow') {
                                            $rel_div = 'nofollow';
                                        }
                                        $onclick = "window.open('{$link_url}', '{$linkTargetButton}', 'rel={$rel_div}');";
                                    } elseif ($innerElement['buttonLink'] === 'scroll-below') {
                                        $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                    } elseif ($innerElement['buttonLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdButton'])) {
                                        $scroll_id = esc_attr($innerElement['scrollToIdButton']);
                                        $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                    }
                                }


                                $defaultButtonColor = '#000000';
                                $defaultBackgroundBorderColorButton = '#cccccc';
                                $defaultBorderStyleButton = 'solid';
                                $defaultBackgroundBorderRadiusButton = '4';
                                $defaultBackgroundBorderSizeButton = '1';
                                $defaultButtonBackgroundColor = '#ffffff';
                                $defaultWidthButton = '35';
                                $defaultHeightButton = '55';
                                $defaultButtonColorHover = '#000000';

                                $buttonStyle = "
                                --color-button-inner: " . (isset($innerElement['buttonColor']) ? esc_attr($innerElement['buttonColor']) : $defaultButtonColor) . ";
                                --border-color-button-inner: " . (isset($innerElement['backgroundBorderColorButton']) ? esc_attr($innerElement['backgroundBorderColorButton']) : $defaultBackgroundBorderColorButton) . ";
                                --border-style-button-inner: " . (isset($innerElement['borderStyleButton']) ? esc_attr($innerElement['borderStyleButton']) : $defaultBorderStyleButton) . ";
                                --border-radius-button-inner: " . (isset($innerElement['backgroundBorderRadiusButton']) ? esc_attr($innerElement['backgroundBorderRadiusButton']) : $defaultBackgroundBorderRadiusButton) . "px;
                                --border-width-button-inner: " . (isset($innerElement['backgroundBorderSizeButton']) ? esc_attr($innerElement['backgroundBorderSizeButton']) : $defaultBackgroundBorderSizeButton) . "px;
                                --background-color-button-inner: " . (isset($innerElement['buttonBackgroundColor']) ? esc_attr($innerElement['buttonBackgroundColor']) : $defaultButtonBackgroundColor) . ";
                                --buttonWidth-inner: " . (isset($innerElement['widthCustomButton']) ? esc_attr($innerElement['widthCustomButton']) :$defaultWidthButton) . "px;
                                --buttonHeight-inner: " . (isset($innerElement['heightCustomButton']) ? esc_attr($innerElement['heightCustomButton']) :$defaultHeightButton) . "px;
                                --color-button-hover-inner: " . (isset($innerElement['buttonColorHover']) ? esc_attr($innerElement['buttonColorHover']) : $defaultButtonColorHover) . ";
                                transform: rotate(" . (isset($innerElement['rotateButton']) ? esc_attr($innerElement['rotateButton']) : '0') . "deg);
                                margin: " . (isset($innerElement['marginButton']['top']) ? esc_attr($innerElement['marginButton']['top']) : '0') . " " . 
                                        (isset($innerElement['marginButton']['right']) ? esc_attr($innerElement['marginButton']['right']) : '0') . " " . 
                                        (isset($innerElement['marginButton']['bottom']) ? esc_attr($innerElement['marginButton']['bottom']) : '0') . " " . 
                                        (isset($innerElement['marginButton']['left']) ? esc_attr($innerElement['marginButton']['left']) : '0') . ";
                                --box-shadow-x-button-inner: " . (isset($innerElement['boxShadowX']) ? esc_attr($innerElement['boxShadowX']) : '0') . "px;
                                --box-shadow-y-button-inner: " . (isset($innerElement['boxShadowY']) ? esc_attr($innerElement['boxShadowY']) : '0') . "px;
                                --box-shadow-blur-button-inner: " . (isset($innerElement['boxShadowBlur']) ? esc_attr($innerElement['boxShadowBlur']) : '0') . "px;
                                --box-shadow-color-button-inner: " . (isset($innerElement['colorShadow']) ? esc_attr($innerElement['colorShadow']) : '#000000') . ";
                                --box-shadow-spread-button-inner: " . (isset($innerElement['boxShadowSpread']) ? esc_attr($innerElement['boxShadowSpread']) : '0') . "px;
                                --duration-effect-button-inner: " . (isset($innerElement['durationEffectButton']) ? esc_attr($innerElement['durationEffectButton']) : '0') . "s;
                                --delay-effect-button-inner: " . (isset($innerElement['delayEffectButton']) ? esc_attr($innerElement['delayEffectButton']) : '0') . "s;
                                --interation-button-inner: " . (isset($innerElement['interationButton']) ? esc_attr($innerElement['interationButton']) : 'forwards') . ";
                                --border-color-button-hover-inner: " . (isset($innerElement['backgroundBorderColorHover']) ? esc_attr($innerElement['backgroundBorderColorHover']) : '#000000') . ";
                                --border-style-button-hover-inner: " . (isset($innerElement['borderStyleHover']) ? esc_attr($innerElement['borderStyleHover']) : 'none') . ";
                                --border-width-button-hover-inner: " . (isset($innerElement['backgroundBorderSizeHover']) ? esc_attr($innerElement['backgroundBorderSizeHover']) : '0') . "px;
                                --rotate-button-hover-inner: " . (isset($innerElement['rotateHover']) ? esc_attr($innerElement['rotateHover']) : '0') . "deg;
                                --delay-hide-seconds-button-inner: " . (isset($innerElement['delayTransition'])? esc_attr($innerElement['delayTransition']) : '0') . "s;
                                 " . ($innerElement['buttonLink'] !== 'none' ? 'cursor: pointer;' : '') . "
                                ";
                                $mouseStyles = "
                                opacity: " . (isset($innerElement['opacityButton']) ? esc_attr($innerElement['opacityButton']) : '1') . ";
                                --opacity-button-hover-inner: " . (isset($innerElement['opacityHover']) ? esc_attr($innerElement['opacityHover']) : '1') . ";
                                transition: " . (isset($innerElement['durationEffectHover']) ? esc_attr($innerElement['durationEffectHover']) : '0') . "s;
                                ";

                                $isBold = isset($innerElement['fontStyle']['fontWeight']) && $innerElement['fontStyle']['fontWeight'] === 'bold';

                                $buttonStyle3 = "
                                    color: " . (isset($innerElement['buttonColor']) ? esc_attr($innerElement['buttonColor']) : '#000000') . ";
                                    border-color: " . (isset($innerElement['backgroundBorderColorButton']) ? esc_attr($innerElement['backgroundBorderColorButton']) : '#000000') . ";
                                    border-style: " . (isset($innerElement['borderStyleButton']) ? esc_attr($innerElement['borderStyleButton']) : 'none') . ";
                                    border-width: " . (isset($innerElement['backgroundBorderSizeButton']) ? esc_attr($innerElement['backgroundBorderSizeButton']) : '0') . "px;
                                    background-color: " . (isset($innerElement['buttonBackgroundColor']) ? esc_attr($innerElement['buttonBackgroundColor']) : '#ffffff') . ";
                                    font-size: " . (isset($innerElement['fontSizeButton']) ? esc_attr($innerElement['fontSizeButton']) : '16') . "px;
                                    --font-size-button-tablet-inner: " . (isset($innerElement['fontSizeButtonTablet']) ? esc_attr($innerElement['fontSizeButtonTablet']) : '16') . "px;
                                    --font-size-button-mobile-inner: " . (isset($innerElement['fontSizeButtonMobile']) ? esc_attr($innerElement['fontSizeButtonMobile']) : '16') . "px;
                                    font-weight: " . (isset($innerElement['fontWeightButton']) ? esc_attr($innerElement['fontWeightButton']) : 'normal') . ";
                                    font-style: " . (isset($innerElement['fontStyle']['fontStyle']) ? esc_attr($innerElement['fontStyle']['fontStyle']) : 'normal') . ";
                                    text-decoration: " . (isset($innerElement['fontStyle']['textDecoration']) ? esc_attr($innerElement['fontStyle']['textDecoration']) : 'none') . ";
                                    line-height: " . (isset($innerElement['lineHeightButton']) ? esc_attr($innerElement['lineHeightButton']) : 'normal') . ";
                                    font-family: " . (isset($innerElement['fontFamilyButton']) ? esc_attr($innerElement['fontFamilyButton']) : 'inherit') . ";
                                    letter-spacing: " . (isset($innerElement['letterSpacingButton']) ? esc_attr($innerElement['letterSpacingButton']) : '0') . "px;
                                    --buttonWidth-inner: " . (isset($innerElement['widthCustomButton']) ? esc_attr($innerElement['widthCustomButton']) : 'auto') . "px;
                                    --buttonHeight-inner: " . (isset($innerElement['heightCustomButton']) ? esc_attr($innerElement['heightCustomButton']) : 'auto') . "px;
                                    border-top-left-radius: " . (isset($innerElement['borderRadiusButton']['top']) ? esc_attr($innerElement['borderRadiusButton']['top']) : '0') . ";
                                    border-top-right-radius: " . (isset($innerElement['borderRadiusButton']['right']) ? esc_attr($innerElement['borderRadiusButton']['right']) : '0') . ";
                                    border-bottom-right-radius: " . (isset($innerElement['borderRadiusButton']['bottom']) ? esc_attr($innerElement['borderRadiusButton']['bottom']) : '0') . ";
                                    border-bottom-left-radius: " . (isset($innerElement['borderRadiusButton']['left']) ? esc_attr($innerElement['borderRadiusButton']['left']) : '0') . ";
                                    padding: " . (isset($innerElement['paddingButton']['top']) ? esc_attr($innerElement['paddingButton']['top']) : '0') . " " . 
                                            (isset($innerElement['paddingButton']['right']) ? esc_attr($innerElement['paddingButton']['right']) : '0') . " " . 
                                            (isset($innerElement['paddingButton']['bottom']) ? esc_attr($innerElement['paddingButton']['bottom']) : '0') . " " . 
                                            (isset($innerElement['paddingButton']['left']) ? esc_attr($innerElement['paddingButton']['left']) : '0') . ";
                                    --border-color-button-hover-inner: " . (isset($innerElement['backgroundBorderColorHover']) ? esc_attr($innerElement['backgroundBorderColorHover']) : '#000000') . ";
                                    --border-style-button-hover-inner: " . (isset($innerElement['borderStyleHover']) ? esc_attr($innerElement['borderStyleHover']) : 'none') . ";
                                    --border-width-button-hover-inner: " . (isset($innerElement['backgroundBorderSizeHover']) ? esc_attr($innerElement['backgroundBorderSizeHover']) : '0') . "px;
                                    --background-color-button-hover-inner: " . (isset($innerElement['buttonBackgroundColorHover']) ? esc_attr($innerElement['buttonBackgroundColorHover']) : '#ffffff') . ";
                                    --color-button-hover-inner: " . (isset($innerElement['buttonColorHover']) ? esc_attr($innerElement['buttonColorHover']) : '#000000') . ";
                                    opacity: " . (isset($innerElement['opacityButton']) ? esc_attr($innerElement['opacityButton']) : '1') . ";
                                    box-shadow: " . (isset($innerElement['boxShadowX']) ? esc_attr($innerElement['boxShadowX']) : '0') . "px " . 
                                                (isset($innerElement['boxShadowY']) ? esc_attr($innerElement['boxShadowY']) : '0') . "px " . 
                                                (isset($innerElement['boxShadowBlur']) ? esc_attr($innerElement['boxShadowBlur']) : '0') . "px " . 
                                                (isset($innerElement['boxShadowSpread']) ? esc_attr($innerElement['boxShadowSpread']) : '0') . "px " . 
                                                (isset($innerElement['colorShadow']) ? esc_attr($innerElement['colorShadow']) : '#000000') . ";
                                    --opacity-button-hover-inner: " . (isset($innerElement['opacityHover']) ? esc_attr($innerElement['opacityHover']) : '1') . ";
                                     --delay-hide-seconds-button-inner: " . (isset($innerElement['delayTransition'])? esc_attr($innerElement['delayTransition']) : '0') . "s;
                                     " . (!empty($innerElement['icon']) ? "display: flex; align-items: " . esc_attr($innerElement['icoAligItemButton']) . "; gap: " . esc_attr($innerElement['gapIcon']) . "px;" : "") . "
                                ";
                                
                                $buttonContentStyle3 = "
                                   text-align: " . (isset($innerElement['buttonAlign']) ? esc_attr($innerElement['buttonAlign']) : 'left') . ";
                                    width: " . (isset($innerElement['widthButton']) && $innerElement['widthButton'] === 'custom' 
                                                ? esc_attr($innerElement['widthCustomButton']) . '%' 
                                                : esc_attr($innerElement['widthButton'])) . ";
                                    transform: rotate(" . (isset($innerElement['rotateButton']) ? esc_attr($innerElement['rotateButton']) : '0') . "deg);
                                    --duration-effect-button-inner: " . (isset($innerElement['durationEffectButton']) ? esc_attr($innerElement['durationEffectButton']) : '0') . "s;
                                    --delay-effect-button-inner: " . (isset($innerElement['delayEffectButton']) ? esc_attr($innerElement['delayEffectButton']) : '0') . "s;
                                    --interation-button-inner: " . (isset($innerElement['interationButton']) ? esc_attr($innerElement['interationButton']) : 'forwards') . ";
                                    --rotate-button-hover-inner: " . (isset($innerElement['rotateHover']) ? esc_attr($innerElement['rotateHover']) : '0') . "deg;
                                    transition: transform " . (isset($innerElement['durationEffectHover']) ? esc_attr($innerElement['durationEffectHover']) : '0') . "s ease;
                                    margin: " . (isset($innerElement['marginButton']['top']) ? esc_attr($innerElement['marginButton']['top']) : '0') . " " . 
                                            (isset($innerElement['marginButton']['right']) ? esc_attr($innerElement['marginButton']['right']) : '0') . " " . 
                                            (isset($innerElement['marginButton']['bottom']) ? esc_attr($innerElement['marginButton']['bottom']) : '0') . " " . 
                                            (isset($innerElement['marginButton']['left']) ? esc_attr($innerElement['marginButton']['left']) : '0') . ";
                                ";

                                switch ($innerElement['buttonType']) {
                                    case 'type1':
                                        ?>
                                            <?php if ($slide['developerMode']) : ?>         
                                            <div class="content-button-slide-inner content-button-absolute-inner"
                                                    style="
                                                        transform: translate(<?php echo esc_attr($innerElement['desktop']['x']) ?> px, <?php echo esc_attr($innerElement['desktop']['y']) ?>px);
                                                        position: absolute;
                                                        --delay-hide-seconds-button-inner: <?php echo esc_attr($innerElement['delayTransition'] );?>s;
                                                    "
                                                    data-desktop-x="<?php echo esc_attr($innerElement['desktop']['x']); ?>"
                                                    data-desktop-y="<?php echo esc_attr($innerElement['desktop']['y']); ?>"
                                                    data-tablet-x="<?php echo esc_attr($innerElement['tablet']['x']); ?>"
                                                    data-tablet-y="<?php echo esc_attr($innerElement['tablet']['y']); ?>"
                                                    data-mobile-x="<?php echo esc_attr($innerElement['mobile']['x']); ?>"
                                                    data-mobile-y="<?php echo esc_attr($innerElement['mobile']['y']); ?>"
                                                     data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                                    data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                                    
                                            >
                                            <?php endif; ?>
                                        <span 
                                            <?php if ($innerElement['buttonLink'] !== 'none') : ?>
                                                onclick="<?php echo $onclick; ?>"
                                            <?php endif; ?> 
                                            class="content-button-slide-inner scroll-btn-inner <?php echo esc_attr($innerElement['animationButton']);?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
                                            style="<?php echo esc_attr($buttonStyle); ?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($innerElement['parallaxButton']); ?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($innerElement['parallaxButtonY']); ?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($innerElement['parallaxButtonScale']); ?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($innerElement['parallaxButtonDuration']); ?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($innerElement['parallaxButtonOpacity']); ?>"
                                            data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                            data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                             data-animation-button-inner="<?php echo esc_attr($innerElement['animationButton']); ?>"
                                        >
                                            <span class="mouse" style="<?php echo esc_attr($mouseStyles); ?>">
                                                <span></span>
                                            </span>
                                        </span>
                                        <?php if ($slide['developerMode']) : ?>  
                                            </div>
                                            <?php endif; ?>
                                        <?php
                                        break;
                                    case 'type2':
                                        ?>
                                         <?php if ($slide['developerMode']) : ?>        
                                        <div class="content-button-slide-inner content-button-absolute-inner"
                                                style="
                                                    transform: translate(<?php echo esc_attr($innerElement['desktop']['x']) ?> px, <?php echo esc_attr($innerElement['desktop']['y']) ?>px);
                                                    position: absolute;
                                                    --delay-hide-seconds-button-inner: <?php echo esc_attr($innerElement['delayTransition'] );?>s;
                                                "
                                                data-desktop-x="<?php echo esc_attr($innerElement['desktop']['x']); ?>"
                                                data-desktop-y="<?php echo esc_attr($innerElement['desktop']['y']); ?>"
                                                data-tablet-x="<?php echo esc_attr($innerElement['tablet']['x']); ?>"
                                                data-tablet-y="<?php echo esc_attr($innerElement['tablet']['y']); ?>"
                                                data-mobile-x="<?php echo esc_attr($innerElement['mobile']['x']); ?>"
                                                data-mobile-y="<?php echo esc_attr($innerElement['mobile']['y']); ?>"
                                                data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                                data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                        >
                                        <?php endif; ?>
                                        <span 
                                            <?php if ($innerElement['buttonLink'] !== 'none') : ?>
                                                onclick="<?php echo $onclick; ?>"
                                            <?php endif; ?> 
                                            class="content-button-slide scroll-btn <?php echo esc_attr($innerElement['animationButton']);?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
                                            style="<?php echo esc_attr($buttonStyle); ?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($innerElement['parallaxButton']); ?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($innerElement['parallaxButtonY']); ?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($innerElement['parallaxButtonScale']); ?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($innerElement['parallaxButtonDuration']); ?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($innerElement['parallaxButtonOpacity']); ?>"
                                             data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                            data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                             data-animation-button="<?php echo esc_attr($innerElement['animationButton']); ?>"
                                        >
                                            <span class="mouse-inner" style="<?php echo esc_attr($mouseStyles); ?>">
                                                <span></span>
                                            </span>
                                        </span>
                                        <?php if ($slide['developerMode']) : ?>  
                                            </div>
                                            <?php endif; ?>
                                        <?php
                                        break;
                                    case 'type3':
                                    case 'type4':
                                    case 'type5':
                                    case 'type6':
                                    case 'type7':
                                    case 'type8':
                                
                                        $link_url = '#';
                                        $linkTargetButton = '_self';
                                        $rel_div = '';
                                
                                        if ($innerElement['buttonLink'] !== 'none') {
                                            // Prepara l'attributo href se buttonLink è diverso da 'none'
                                            if ($innerElement['buttonLink'] === 'link' && !empty($innerElement['linkUrlButton'])) {
                                                $link_url = esc_url($innerElement['linkUrlButton']);
                                                if (!empty($innerElement['linkTargetButton'])) {
                                                    $linkTargetButton = esc_attr($innerElement['linkTargetButton']);
                                                }
                                                if ($innerElement['linkRelButton'] === 'nofollow') {
                                                    $rel_div = 'nofollow';
                                                }
                                            } elseif ($innerElement['buttonLink'] === 'scroll-below') {
                                                $link_url = '#scroll-below';
                                            } elseif ($innerElement['buttonLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdButton'])) {
                                                $scroll_id = esc_attr($innerElement['scrollToIdButton']);
                                                $link_url = "#{$scroll_id}";
                                            }
                                        }
                                        ?>
                                         <?php if ($slide['developerMode']) : ?>       
                                               <div class="content-button-slide-inner content-button-absolute-inner"
                                                style="
                                                    transform: translate(<?php echo esc_attr($innerElement['desktop']['x']) ?> px, <?php echo esc_attr($innerElement['desktop']['y']) ?>px);
                                                    position: absolute;
                                                    --delay-hide-seconds-button-inner: <?php echo esc_attr($innerElement['delayTransition'] );?>s;
                                                "
                                                data-desktop-x="<?php echo esc_attr($innerElement['desktop']['x']); ?>"
                                                data-desktop-y="<?php echo esc_attr($innerElement['desktop']['y']); ?>"
                                                data-tablet-x="<?php echo esc_attr($innerElement['tablet']['x']); ?>"
                                                data-tablet-y="<?php echo esc_attr($innerElement['tablet']['y']); ?>"
                                                data-mobile-x="<?php echo esc_attr($innerElement['mobile']['x']); ?>"
                                                data-mobile-y="<?php echo esc_attr($innerElement['mobile']['y']); ?>"
                                                data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                                data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                        >
                                        <?php endif; ?>                           
                                        <div class=" button-slider-inner <?php echo esc_attr($innerElement['animationButton']);?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                                            style="<?php echo esc_attr($buttonContentStyle3); ?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($innerElement['parallaxButton']);?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($innerElement['parallaxButtonY']);?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($innerElement['parallaxButtonScale']);?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($innerElement['parallaxButtonDuration']);?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($innerElement['parallaxButtonOpacity']);?>"
                                            data-font-family="<?php echo esc_attr($innerElement['fontFamilyButton']); ?>" 
                                             data-animation-button-inner="<?php echo esc_attr($innerElement['animationButton']); ?>"
                                          
                                        >
                                        <a class="content-button-slide-inner <?php echo esc_attr($innerElement['iconShowHover']);?> <?php echo esc_attr($innerElement['iconHideShowHover']);?>" href="<?php echo $link_url; ?>" 
                                        style="<?php echo esc_attr($buttonStyle3); ?>"
                                          data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                            data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                            
                                        target="<?php echo $linkTargetButton; ?>"
                                        rel="<?php echo $rel_div; ?>"
                                        <?php if ($innerElement['buttonLink'] === 'scroll-below' || ($innerElement['buttonLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdButton']))) : ?>
                                            onclick="event.preventDefault(); <?php echo $innerElement['buttonLink'] === 'scroll-below' ? "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });" : "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });"; ?>"
                                        <?php endif; ?>
                                        >
                                            <?php if (!empty($innerElement['icon']) && $innerElement['icoPositionButton'] === 'before') : ?>
                                                <div class="content-icon-button-inner" style="transform:rotate(<?php echo esc_attr( $innerElement['rotateIcon'] )?>deg);--rotate-icon-button-hover-inner:<?php echo esc_attr( $innerElement['rotateIconHover'] )?>deg;"><i class="<?php echo esc_attr($innerElement['icon']); ?> <?php echo esc_attr($innerElement['iconAnimation']); ?> <?php echo esc_attr($innerElement['animationHoverIcon']); ?>" style="color:<?php echo esc_attr( $innerElement['iconColor'] )?>;font-size:<?php echo esc_attr( $innerElement['sizeIcon'] )?>px;--fa-animation-duration:<?php echo esc_attr( $innerElement['iconAnimationDuration'] )?>s;--color-icon-button-hover-inner:<?php echo esc_attr( $innerElement['iconColorHover'] )?>;--translate-hover-icon-button-inner:<?php echo esc_attr( $innerElement['translateEffectHoverIcon'] )?>px;--transition-hover-icon-button-inner:<?php echo esc_attr( $innerElement['durationEffectHoverIcon'] )?>s;"></i></div>
                                            <?php endif; ?>
                                            <?php echo esc_html($innerElement['button']); ?>
                                            <?php if (!empty($innerElement['icon']) && $innerElement['icoPositionButton'] === 'after') : ?>
                                                <div class="content-icon-button-inner" style="transform:rotate(<?php echo esc_attr( $innerElement['rotateIcon'] )?>deg);--rotate-icon-button-hover-inner:<?php echo esc_attr( $innerElement['rotateIconHover'] )?>deg;"><i class="<?php echo esc_attr($innerElement['icon']); ?> <?php echo esc_attr($innerElement['iconAnimation']); ?> <?php echo esc_attr($innerElement['animationHoverIcon']); ?>" style="color:<?php echo esc_attr( $innerElement['iconColor'] )?>;font-size:<?php echo esc_attr( $innerElement['sizeIcon'] )?>px;--fa-animation-duration:<?php echo esc_attr( $innerElement['iconAnimationDuration'] )?>s;--color-icon-button-hover-inner:<?php echo esc_attr( $innerElement['iconColorHover'] )?>;--translate-hover-icon-button-inner:<?php echo esc_attr( $innerElement['translateEffectHoverIcon'] )?>px;--transition-hover-icon-button-inner:<?php echo esc_attr( $innerElement['durationEffectHoverIcon'] )?>s;"></i></div>
                                            <?php endif; ?>
                                
                                
                                        </a>
                                        </div>
                                        <?php if ($slide['developerMode']) : ?>  
                                            </div>
                                            <?php endif; ?>
                                        <?php
                                        break;
                                    default:
                                        break;
                                }
                               
                                ?>


                                <?php elseif ($innerElement['type'] === 'icon'): 

                               $desktopClassIconInner = $innerElement['enableDesktopTitle'] ? 'desktop-icon-inner-visible' : 'desktop-icon-inner-hidden';
                               $tabletClassIconInner = $innerElement['enableTabletTitle'] ? 'tablet-icon-inner-visible' : 'tablet-icon-inner-hidden';
                               $mobileClassIconInner = $innerElement['enableMobileTitle'] ? 'mobile-icon-inner-visible' : 'mobile-icon-inner-hidden';
                               if ($innerElement['textLink'] !== 'none') {
                                // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                if ($innerElement['textLink'] === 'link' && !empty($innerElement['linkUrl'])) {
                                    $link_url = esc_url($innerElement['linkUrl']);
                                    if (!empty($innerElement['linkTarget'])) {
                                        $linkTarget = esc_attr($innerElement['linkTarget']);
                                    }
                                    if ($innerElement['linkRel'] === 'nofollow') {
                                        $rel_div = 'nofollow';
                                    }
                                    $onclick = "window.open('{$link_url}', '{$linkTarget}', 'rel={$rel_div}');";
                                } elseif ($innerElement['textLink'] === 'scroll-below') {
                                    $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                } elseif ($innerElement['textLink'] === 'scroll-to-id' && !empty($innerElement['scrollToId'])) {
                                    $scroll_id = esc_attr($innerElement['scrollToId']);
                                    $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                }
                            }
                               // Styles Icon
                                    $stylesIcon = "
                                    font-size: " . esc_attr($innerElement['fontSize']) . "px;
                                    --font-size-tablet-icon-inner: " . esc_attr($innerElement['fontSizeTablet']) . "px;
                                    --font-size-mobile-icon-inner: " . esc_attr($innerElement['fontSizeMobile']) . "px;
                                    color: " . esc_attr($innerElement['textColor']) . ";
                                    background-color: " . esc_attr($innerElement['backgroundColor']) . ";
                                    --color-hover-icon-inner: " . esc_attr($innerElement['textColorHover']) . ";
                                    margin: " . esc_attr($innerElement['marginTitle']['top']) . " " . esc_attr($innerElement['marginTitle']['right']) . " " . esc_attr($innerElement['marginTitle']['bottom']) . " " . esc_attr($innerElement['marginTitle']['left']) . ";
                                    --delay-effect-icon-inner: " . esc_attr($innerElement['delayEffect']) . "s;
                                    padding: " . esc_attr($innerElement['paddingTitle']['top']) . " " . esc_attr($innerElement['paddingTitle']['right']) . " " . esc_attr($innerElement['paddingTitle']['bottom']) . " " . esc_attr($innerElement['paddingTitle']['left']) . ";
                                    border-width: " . esc_attr($innerElement['backgroundBorderSize']) . "px;
                                    border-color: " . esc_attr($innerElement['backgroundBorderColor']) . ";
                                    border-radius: " . esc_attr($innerElement['backgroundBorderRadius']) . "px;
                                    --border-color-hover-icon-inner: " . esc_attr($innerElement['backgroundBorderColorHover']) . ";
                                    --opacity-hover-icon-inner: " . esc_attr($innerElement['opacityHover']) . ";
                                    border-style: " . esc_attr($innerElement['borderStyle']) . ";
                                    --border-style-hover-icon-inner: " . esc_attr($innerElement['borderStyleHover']) . ";
                                    --border-width-hover-icon-inner: " . esc_attr($innerElement['backgroundBorderSizeHover']) . "px;
                                    --translate-hover-icon-inner: " . esc_attr($innerElement['translateEffectHover']) . "px;
                                    --color-effect-hover-icon-inner: " . esc_attr($innerElement['effectHoverColorHover']) . ";
                                    box-shadow: " . esc_attr($innerElement['boxShadowX']) . "px " . esc_attr($innerElement['boxShadowY']) . "px " . esc_attr($innerElement['boxShadowBlur']) . "px " . esc_attr($innerElement['boxShadowSpread']) . "px " . esc_attr($innerElement['colorShadow']) . ";
                                    position: relative;
                                    opacity: " . esc_attr($innerElement['opacity']) . ";
                                    transform: rotate(" . esc_attr($innerElement['rotate']) . "deg);
                                    --rotate-hover-icon-inner: " . esc_attr($innerElement['rotateHover']) . "deg;
                                    --fa-animation-duration: " . esc_attr($innerElement['iconAnimationDuration']) . "s;
                                     " . ($innerElement['textLink'] !== 'none' ? 'cursor: pointer;' : '') . "
                                ";

                                // Styles for the container div
                                $stylesDiv = "
                                    --duration-effect-icon-inner: " . esc_attr($innerElement['durationEffect']) . "s;
                                    --delay-effect-icon-inner: " . esc_attr($innerElement['delayEffect']) . "s;
                                    --transition-hover-icon-inner: " . esc_attr($innerElement['durationEffectHover']) . "s;
                                    width: " . ($innerElement['widthTitle'] === 'custom' ? esc_attr($innerElement['widthCustomTitle']) . "%" : esc_attr($innerElement['widthTitle'])) . ";
                                    --interation-icon-inner: " . esc_attr($innerElement['interation']) . ";
                                    --delay-hide-seconds-icon-inner: " . esc_attr($innerElement['delayTransition']) . "s;
                                    text-align: " . esc_attr($innerElement['textAlign']) . ";
                                ";
                                // Class names for the container div
                                    $classNamesDiv = "content-icon-inner " . esc_attr($innerElement['animation']) ;

                                    // Class names for the icon
                                    $classNamesIcon = "slide-icon-inner " . esc_attr($innerElement['icon']) . " " . esc_attr($innerElement['iconAnimation']) . " " . esc_attr($innerElement['animationHover']);
                                ?>
                                 <?php if ($slide['developerMode']) : ?>  
                                <div class="content-content-icon-inner-absolute <?php echo esc_attr($desktopClassIconInner); ?> <?php echo esc_attr($tabletClassIconInner); ?> <?php echo esc_attr($mobileClassIconInner); ?>"
                                        data-desktop-x="<?php echo esc_attr($innerElement['desktop']['x']); ?>"
                                        data-desktop-y="<?php echo esc_attr($innerElement['desktop']['y']); ?>"
                                        data-tablet-x="<?php echo esc_attr($innerElement['tablet']['x']); ?>"
                                        data-tablet-y="<?php echo esc_attr($innerElement['tablet']['y']); ?>"
                                        data-mobile-x="<?php echo esc_attr($innerElement['mobile']['x']); ?>"
                                        data-mobile-y="<?php echo esc_attr($innerElement['mobile']['y']); ?>" 
                                        style=" transform: translate(<?php echo esc_attr($innerElement['desktop']['x']); ?>px, <?php echo esc_attr($innerElement['desktop']['y']); ?>px); position: absolute; z-index:<?php echo esc_attr( $innerElement['zIndexIcon'] )?>;"
                                >
                                <?php endif; ?> 
                                <div <?php if ($innerElement['textLink'] !== 'none') : ?> onclick="<?php echo $onclick; ?>" <?php endif; ?>  style="<?php echo $stylesDiv; ?>" class="<?php echo $classNamesDiv; ?> <?php echo esc_attr($desktopClassIconInner); ?> <?php echo esc_attr($tabletClassIconInner); ?> <?php echo esc_attr($mobileClassIconInner); ?>" data-animation-icon-inner="<?php echo esc_attr($innerElement['animation']); ?>">
                                    <i 
                                        class="<?php echo $classNamesIcon; ?>" 
                                        style="<?php echo $stylesIcon; ?>"
                                        data-swiper-parallax-x="<?php echo esc_attr($innerElement['parallaxTitle']); ?>"
                                        data-swiper-parallax-y="<?php echo esc_attr($innerElement['parallaxTitleY']); ?>"
                                        data-swiper-parallax-scale="<?php echo esc_attr($innerElement['parallaxTitleScale']); ?>"
                                        data-swiper-parallax-duration="<?php echo esc_attr($innerElement['parallaxTitleDuration']); ?>"
                                        data-swiper-parallax-opacity="<?php echo esc_attr($innerElement['parallaxTitleOpacity']); ?>"
                                    >
                                    </i>
                                </div>
                                <?php if ($slide['developerMode']) : ?>  
                                </div>
                                <?php endif; ?>

                                        <?php elseif ($innerElement['type'] === 'image'): ?>
 
                                        <?php

                                        $style = "max-width: 100%; min-width: 0; 
                                        max-height: 100%; min-height: 0;
                                        border-style: " . esc_attr($innerElement['borderStyleImage']) . ";
                                        border-width: " . esc_attr($innerElement['backgroundBorderSizeImage']) . "px;
                                        border-color: " . esc_attr($innerElement['backgroundBorderColorImage']) . ";
                                        border-radius: " . esc_attr($innerElement['backgroundBorderRadiusImage']) . "px;
                                        padding: " . esc_attr($innerElement['paddingImage']) . "px;
                                        box-shadow: " . esc_attr($innerElement['boxShadowXImage']) . "px " . esc_attr($innerElement['boxShadowYImage']) . "px " . esc_attr($innerElement['boxShadowBlurImage']) . "px " . esc_attr($innerElement['boxShadowSpreadImage']) . "px " . esc_attr($innerElement['colorShadowImage']) . ";
                                        background-color: " . esc_attr($innerElement['backgroundColorImage']) . ";
                                        margin: " . esc_attr($innerElement['marginImage']['top']) . ' ' . esc_attr($innerElement['marginImage']['right']) . ' ' . esc_attr($innerElement['marginImage']['bottom']) . ' ' . esc_attr($innerElement['marginImage']['left']) . ";
                                        --spike-width-inner:" . esc_attr($innerElement['spikeLeftWidth']) . "%;
                                        --spike-width-right-inner: " . esc_attr($innerElement['spikeRightWidth']) . "%;
                                        --duration-effect-image-inner: " . esc_attr($innerElement['durationEffectImage']) . "s;
                                        --duration-effect-moving-image-inner: " . esc_attr($innerElement['durationEffectImageMoving']) . "s;
                                        --color-hover-image-inner: " . esc_attr($innerElement['imageColorHover']) . ";
                                        --border-color-hover-image-inner: " . esc_attr($innerElement['backgroundBorderColorHoverImage']) . ";
                                        --opacity-hover-image-inner: " . esc_attr($innerElement['opacityHoverImage']) . ";
                                        --border-style-hover-image-inner: " . esc_attr($innerElement['borderStyleHoverImage']) . ";
                                        --border-width-hover-image-inner: " . esc_attr($innerElement['backgroundBorderSizeImageHover']) . "px;
                                        --transition-hover-image-inner: " . esc_attr($innerElement['durationEffectHoverImage']) . "s;
                                        --translate-hover-image-inner: " . esc_attr($innerElement['translateEffectHoverImage']) . "px;
                                        --color-effect-hover-image-inner: " . esc_attr($innerElement['effectHoverColorHoverImage']) . ";
                                        --interation-image-inner: " . esc_attr($innerElement['interationImage']) . ";
                                        z-index: " . esc_attr( $innerElement['zIndexImage'] ). ";
                                        --delay-effect-image-inner: " . esc_attr($innerElement['delayEffectImage']) . "s; 
                                        ";

                                        if ($innerElement['widthImage'] === 'relative') {
                                            $style .= "width: " . esc_attr($innerElement['customWidthImage']) . "%;";
                                        } elseif ($innerElement['widthImage'] === 'fixed') {
                                            $style .= "width: " . esc_attr($innerElement['customWidthImagePx']) . "px;";
                                        }

                                        if ($innerElement['heightImage'] === 'relative') {
                                            $style .= "height: " . esc_attr($innerElement['customHeightImage']) . "%;";
                                        } elseif ($innerElement['heightImage'] === 'fixed') {
                                            $style .= "height: " . esc_attr($innerElement['customHeightImagePx']) . "px;";
                                        }

                                        if ($innerElement['widthImage'] !== 'auto' || $innerElement['heightImage'] !== 'auto') {
                                            $style .= "object-fit: " . esc_attr($innerElement['fit']) . ";";
                                        }

                                        $desktopClassImage = $innerElement['enableDesktopImage'] ? 'desktop-image-visible-inner' : 'desktop-image-hidden-inner';
                                        $tabletClassImage = $innerElement['enableTabletImage'] ? 'tablet-image-visible-inner' : 'tablet-image-hidden-inner';
                                        $mobileClassImage = $innerElement['enableMobileImage'] ? 'mobile-image-visible-inner' : 'mobile-image-hidden-inner';
                                        $link_url = '';
                                        $onclick = '';
                                        $linkTargetImage = '_self'; // Default
                                        $rel_div = 'follow'; // Default
                                        
                                        if ($innerElement['imageLink'] !== 'none') {
                                            // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                            if ($innerElement['imageLink'] === 'link' && !empty($innerElement['linkUrlImage'])) {
                                                $link_url = esc_url($innerElement['linkUrlImage']);
                                                if (!empty($innerElement['linkTargetImage'])) {
                                                    $linkTargetImage = esc_attr($innerElement['linkTargetImage']);
                                                }
                                                if ($innerElement['linkRelImage'] === 'nofollow') {
                                                    $rel_div = 'nofollow';
                                                }
                                                $onclick = "window.open('{$link_url}', '{$linkTargetImage}', 'rel={$rel_div}');";
                                            } elseif ($innerElement['imageLink'] === 'scroll-below') {
                                                $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                            } elseif ($innerElement['imageLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdImage'])) {
                                                $scroll_id = esc_attr($innerElement['scrollToIdImage']);
                                                $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                            }
                                        }
                                    ?>
                                    <div 
                                    <?php if ($innerElement['imageLink'] !== 'none') : ?>
                                                                onclick="<?php echo $onclick; ?>"
                                                            <?php endif; ?> 
                                        style="transform: rotate(<?php echo esc_attr($innerElement['rotateImage']); ?>deg); opacity: <?php echo esc_attr($innerElement['opacityImage']); ?>; --duration-effect-moving-image-inner:<?php echo esc_attr($innerElement['durationEffectImageMoving'])?>s; --translate-effect-moving-image-inner:<?php echo esc_attr($innerElement['translateEffectImageMoving']) ?>px;--rotate-hover-image-inner: <?php echo esc_attr($innerElement['rotateHoverImage'])?>deg; --transition-hover-image-inner: <?php echo esc_attr($innerElement['durationEffectHoverImage'])?>s; width:<?php echo esc_attr($innerElement['widthImageContent'])?>;
                                           position:<?php echo esc_attr($innerElement['positionInnerImage']) ?> ;
                                           top: <?php echo esc_attr($innerElement['verticalPositionInnerImage'])?>px;
                                           left: <?php echo esc_attr($innerElement['horizontalPositionInnerImage']) ?>px;
                                            --delay-hide-seconds-image-block: <?php echo esc_attr($innerElement['delayTransition'])?>s;
                                         <?php if ($innerElement['imageLink'] !== 'none') : ?>
                                                                    cursor: pointer;
                                                                <?php endif; ?>"
                                        class="content-img-inner <?php echo esc_attr($innerElement['animationImageMoving'])?> <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>"
                                        data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                                        data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                                    >
                                        <img
                                            src="<?php echo esc_url($innerElement['imageUrl']); ?>"
                                            alt="<?php echo esc_attr($innerElement['alt']); ?>"
                                            style="<?php echo $style ?>"
                                            class="img-inner image-with-mask <?php echo esc_attr($innerElement['blobMask']); ?> <?php echo esc_attr($innerElement['spikeMask'])?> <?php echo esc_attr($innerElement['spikeMaskRight'])?> <?php echo esc_attr($innerElement['animationImage'])?> <?php echo esc_attr($innerElement['imageFilter'])?> <?php echo esc_attr($innerElement['animationHoverImage'])?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($innerElement['parallaxImage']); ?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($innerElement['parallaxImageY']); ?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($innerElement['parallaxImageScale']); ?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($innerElement['parallaxImageDuration']); ?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($innerElement['parallaxImageOpacity']); ?>"
                                            data-animation-image-inner="<?php echo esc_attr($innerElement['animationImage']); ?>"
                                        />
                                    </div>
                                    <?php endif; ?>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </<?php echo esc_attr($TagDiv); ?>>
                        </div>
                        <?php if ($slide['developerMode']) : ?>   
                        </div>
                        <?php endif; ?>
                        <?php endif; ?>


                        <?php
                           // Button
                            if ($element['type'] === 'button'): 

                                $desktopClassButton = $element['enableDesktopButton'] ? 'desktop-button-visible' : 'desktop-button-hidden';
                                $tabletClassButton = $element['enableTabletButton'] ? 'tablet-button-visible' : 'tablet-button-hidden';
                                $mobileClassButton = $element['enableMobileButton'] ? 'mobile-button-visible' : 'mobile-button-hidden';
                                if ($element['buttonLink'] !== 'none') {
                                    // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                    if ($element['buttonLink'] === 'link' && !empty($element['linkUrlButton'])) {
                                        $link_url = esc_url($element['linkUrlButton']);
                                        if (!empty($element['linkTargetButton'])) {
                                            $linkTargetButton = esc_attr($element['linkTargetButton']);
                                        }
                                        if ($element['linkRelButton'] === 'nofollow') {
                                            $rel_div = 'nofollow';
                                        }
                                        $onclick = "window.open('{$link_url}', '{$linkTargetButton}', 'rel={$rel_div}');";
                                    } elseif ($element['buttonLink'] === 'scroll-below') {
                                        $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                    } elseif ($element['buttonLink'] === 'scroll-to-id' && !empty($element['scrollToIdButton'])) {
                                        $scroll_id = esc_attr($element['scrollToIdButton']);
                                        $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                    }
                                }


                                $defaultButtonColor = '#000000';
                                $defaultBackgroundBorderColorButton = '#cccccc';
                                $defaultBorderStyleButton = 'solid';
                                $defaultBackgroundBorderRadiusButton = '4';
                                $defaultBackgroundBorderSizeButton = '1';
                                $defaultButtonBackgroundColor = '#ffffff';
                                $defaultWidthButton = '35';
                                $defaultHeightButton = '55';
                                $defaultButtonColorHover = '#000000';

                                $buttonStyle = "
                                    --color-button: " . (isset($element['buttonColor']) ? esc_attr($element['buttonColor']) : $defaultButtonColor) . ";
                                    --border-color-button: " . (isset($element['backgroundBorderColorButton']) ? esc_attr($element['backgroundBorderColorButton']) : $defaultBackgroundBorderColorButton) . ";
                                    --border-style-button: " . (isset($element['borderStyleButton']) ? esc_attr($element['borderStyleButton']) : $defaultBorderStyleButton) . ";
                                    --border-radius-button: " . (isset($element['backgroundBorderRadiusButton']) ? esc_attr($element['backgroundBorderRadiusButton']) : $defaultBackgroundBorderRadiusButton) . "px;
                                    --border-width-button: " . (isset($element['backgroundBorderSizeButton']) ? esc_attr($element['backgroundBorderSizeButton']) : $defaultBackgroundBorderSizeButton) . "px;
                                    --background-color-button: " . (isset($element['buttonBackgroundColor']) ? esc_attr($element['buttonBackgroundColor']) : $defaultButtonBackgroundColor) . ";
                                    --buttonWidth: " . (isset($element['widthCustomButton']) ? esc_attr($element['widthCustomButton']) :$defaultWidthButton) . "px;
                                    --buttonHeight: " . (isset($element['heightCustomButton']) ? esc_attr($element['heightCustomButton']) :$defaultHeightButton) . "px;
                                    --color-button-hover: " . (isset($element['buttonColorHover']) ? esc_attr($element['buttonColorHover']) : $defaultButtonColorHover) . ";
                                    transform: rotate(" . (isset($element['rotateButton']) ? esc_attr($element['rotateButton']) : '0') . "deg);
                                    margin: " . (isset($element['marginButton']['top']) ? esc_attr($element['marginButton']['top']) : '0') . " " . 
                                            (isset($element['marginButton']['right']) ? esc_attr($element['marginButton']['right']) : '0') . " " . 
                                            (isset($element['marginButton']['bottom']) ? esc_attr($element['marginButton']['bottom']) : '0') . " " . 
                                            (isset($element['marginButton']['left']) ? esc_attr($element['marginButton']['left']) : '0') . ";
                                    --box-shadow-x-button: " . (isset($element['boxShadowX']) ? esc_attr($element['boxShadowX']) : '0') . "px;
                                    --box-shadow-y-button: " . (isset($element['boxShadowY']) ? esc_attr($element['boxShadowY']) : '0') . "px;
                                    --box-shadow-blur-button: " . (isset($element['boxShadowBlur']) ? esc_attr($element['boxShadowBlur']) : '0') . "px;
                                    --box-shadow-color-button: " . (isset($element['colorShadow']) ? esc_attr($element['colorShadow']) : '#000000') . ";
                                    --box-shadow-spread-button: " . (isset($element['boxShadowSpread']) ? esc_attr($element['boxShadowSpread']) : '0') . "px;
                                    --duration-effect-button: " . (isset($element['durationEffectButton']) ? esc_attr($element['durationEffectButton']) : '0') . "s;
                                    --delay-effect-button: " . (isset($element['delayEffectButton']) ? esc_attr($element['delayEffectButton']) : '0') . "s;
                                    --interation-button: " . (isset($element['interationButton']) ? esc_attr($element['interationButton']) : 'forwards') . ";
                                    --border-color-button-hover: " . (isset($element['backgroundBorderColorHover']) ? esc_attr($element['backgroundBorderColorHover']) : '#000000') . ";
                                    --border-style-button-hover: " . (isset($element['borderStyleHover']) ? esc_attr($element['borderStyleHover']) : 'none') . ";
                                    --border-width-button-hover: " . (isset($element['backgroundBorderSizeHover']) ? esc_attr($element['backgroundBorderSizeHover']) : '0') . "px;
                                    --rotate-button-hover: " . (isset($element['rotateHover']) ? esc_attr($element['rotateHover']) : '0') . "deg;
                                    --delay-hide-seconds-button: " . (isset($element['delayTransition'])? esc_attr($element['delayTransition']) : '0') . "s;
                                     " . ($element['buttonLink'] !== 'none' ? 'cursor: pointer;' : '') . "
                                ";
                                $mouseStyles = "
                                    opacity: " . (isset($element['opacityButton']) ? esc_attr($element['opacityButton']) : '1') . ";
                                    --opacity-button-hover: " . (isset($element['opacityHover']) ? esc_attr($element['opacityHover']) : '1') . ";
                                    transition: " . (isset($element['durationEffectHover']) ? esc_attr($element['durationEffectHover']) : '0') . "s;
                                ";

                                $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === 'bold';

                                $buttonStyle3 = "
                                    color: " . (isset($element['buttonColor']) ? esc_attr($element['buttonColor']) : '#000000') . ";
                                    border-color: " . (isset($element['backgroundBorderColorButton']) ? esc_attr($element['backgroundBorderColorButton']) : '#000000') . ";
                                    border-style: " . (isset($element['borderStyleButton']) ? esc_attr($element['borderStyleButton']) : 'none') . ";
                                    border-width: " . (isset($element['backgroundBorderSizeButton']) ? esc_attr($element['backgroundBorderSizeButton']) : '0') . "px;
                                    background-color: " . (isset($element['buttonBackgroundColor']) ? esc_attr($element['buttonBackgroundColor']) : '#ffffff') . ";
                                    font-size: " . (isset($element['fontSizeButton']) ? esc_attr($element['fontSizeButton']) : '16') . "px;
                                    --font-size-button-tablet: " . (isset($element['fontSizeButtonTablet']) ? esc_attr($element['fontSizeButtonTablet']) : '16') . "px;
                                    --font-size-button-mobile: " . (isset($element['fontSizeButtonMobile']) ? esc_attr($element['fontSizeButtonMobile']) : '16') . "px;
                                    font-weight: " . (isset($element['fontWeightButton']) ? esc_attr($element['fontWeightButton']) : 'normal') . ";
                                    font-style: " . (isset($element['fontStyle']['fontStyle']) ? esc_attr($element['fontStyle']['fontStyle']) : 'normal') . ";
                                    text-decoration: " . (isset($element['fontStyle']['textDecoration']) ? esc_attr($element['fontStyle']['textDecoration']) : 'none') . ";
                                    line-height: " . (isset($element['lineHeightButton']) ? esc_attr($element['lineHeightButton']) : 'normal') . ";
                                    font-family: " . (isset($element['fontFamilyButton']) ? esc_attr($element['fontFamilyButton']) : 'inherit') . ";
                                    letter-spacing: " . (isset($element['letterSpacingButton']) ? esc_attr($element['letterSpacingButton']) : '0') . "px;
                                    --buttonWidth: " . (isset($element['widthCustomButton']) ? esc_attr($element['widthCustomButton']) : 'auto') . "px;
                                    --buttonHeight: " . (isset($element['heightCustomButton']) ? esc_attr($element['heightCustomButton']) : 'auto') . "px;
                                    border-top-left-radius: " . (isset($element['borderRadiusButton']['top']) ? esc_attr($element['borderRadiusButton']['top']) : '0') . ";
                                    border-top-right-radius: " . (isset($element['borderRadiusButton']['right']) ? esc_attr($element['borderRadiusButton']['right']) : '0') . ";
                                    border-bottom-right-radius: " . (isset($element['borderRadiusButton']['bottom']) ? esc_attr($element['borderRadiusButton']['bottom']) : '0') . ";
                                    border-bottom-left-radius: " . (isset($element['borderRadiusButton']['left']) ? esc_attr($element['borderRadiusButton']['left']) : '0') . ";
                                    padding: " . (isset($element['paddingButton']['top']) ? esc_attr($element['paddingButton']['top']) : '0') . " " . 
                                            (isset($element['paddingButton']['right']) ? esc_attr($element['paddingButton']['right']) : '0') . " " . 
                                            (isset($element['paddingButton']['bottom']) ? esc_attr($element['paddingButton']['bottom']) : '0') . " " . 
                                            (isset($element['paddingButton']['left']) ? esc_attr($element['paddingButton']['left']) : '0') . ";
                                    --border-color-button-hover: " . (isset($element['backgroundBorderColorHover']) ? esc_attr($element['backgroundBorderColorHover']) : '#000000') . ";
                                    --border-style-button-hover: " . (isset($element['borderStyleHover']) ? esc_attr($element['borderStyleHover']) : 'none') . ";
                                    --border-width-button-hover: " . (isset($element['backgroundBorderSizeHover']) ? esc_attr($element['backgroundBorderSizeHover']) : '0') . "px;
                                    --background-color-button-hover: " . (isset($element['buttonBackgroundColorHover']) ? esc_attr($element['buttonBackgroundColorHover']) : '#ffffff') . ";
                                    --color-button-hover: " . (isset($element['buttonColorHover']) ? esc_attr($element['buttonColorHover']) : '#000000') . ";
                                    opacity: " . (isset($element['opacityButton']) ? esc_attr($element['opacityButton']) : '1') . ";
                                    box-shadow: " . (isset($element['boxShadowX']) ? esc_attr($element['boxShadowX']) : '0') . "px " . 
                                                (isset($element['boxShadowY']) ? esc_attr($element['boxShadowY']) : '0') . "px " . 
                                                (isset($element['boxShadowBlur']) ? esc_attr($element['boxShadowBlur']) : '0') . "px " . 
                                                (isset($element['boxShadowSpread']) ? esc_attr($element['boxShadowSpread']) : '0') . "px " . 
                                                (isset($element['colorShadow']) ? esc_attr($element['colorShadow']) : '#000000') . ";
                                    --opacity-button-hover: " . (isset($element['opacityHover']) ? esc_attr($element['opacityHover']) : '1') . ";
                                     --delay-hide-seconds-button: " . (isset($element['delayTransition'])? esc_attr($element['delayTransition']) : '0') . "s;
                                     " . (!empty($element['icon']) ? "display: flex; align-items: " . esc_attr($element['icoAligItemButton']) . "; gap: " . esc_attr($element['gapIcon']) . "px;" : "") . "
                                ";

                                $buttonContentStyle3 = "
                                   text-align: " . (isset($element['buttonAlign']) ? esc_attr($element['buttonAlign']) : 'left') . ";
                                    width: " . (isset($element['widthButton']) && $element['widthButton'] === 'custom' 
                                                ? esc_attr($element['widthCustomButton']) . '%' 
                                                : esc_attr($element['widthButton'])) . ";
                                    transform: rotate(" . (isset($element['rotateButton']) ? esc_attr($element['rotateButton']) : '0') . "deg);
                                    --duration-effect-button: " . (isset($element['durationEffectButton']) ? esc_attr($element['durationEffectButton']) : '0') . "s;
                                    --delay-effect-button: " . (isset($element['delayEffectButton']) ? esc_attr($element['delayEffectButton']) : '0') . "s;
                                    --interation-button: " . (isset($element['interationButton']) ? esc_attr($element['interationButton']) : 'forwards') . ";
                                    --rotate-button-hover: " . (isset($element['rotateHover']) ? esc_attr($element['rotateHover']) : '0') . "deg;
                                    transition: transform " . (isset($element['durationEffectHover']) ? esc_attr($element['durationEffectHover']) : '0') . "s ease;
                                    margin: " . (isset($element['marginButton']['top']) ? esc_attr($element['marginButton']['top']) : '0') . " " . 
                                            (isset($element['marginButton']['right']) ? esc_attr($element['marginButton']['right']) : '0') . " " . 
                                            (isset($element['marginButton']['bottom']) ? esc_attr($element['marginButton']['bottom']) : '0') . " " . 
                                            (isset($element['marginButton']['left']) ? esc_attr($element['marginButton']['left']) : '0') . ";
                                ";

                                switch ($element['buttonType']) {
                                    case 'type1':
                                        ?>
                                            <?php if ($slide['developerMode']) : ?>         
                                            <div class="content-button-slide content-button-absolute"
                                                    style="
                                                        transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                                                        position: absolute;
                                                        --delay-hide-seconds-button: <?php echo esc_attr($element['delayTransition'] );?>s;
                                                    "
                                                    data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                                    data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                                    data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                                    data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                                    data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                                    data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                                                     data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                                    data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                                    
                                            >
                                            <?php endif; ?>
                                        <span 
                                            <?php if ($element['buttonLink'] !== 'none') : ?>
                                                onclick="<?php echo $onclick; ?>"
                                            <?php endif; ?> 
                                            class="content-button-slide scroll-btn <?php echo esc_attr($element['animationButton']);?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
                                            style="<?php echo esc_attr($buttonStyle); ?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($element['parallaxButton']); ?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($element['parallaxButtonY']); ?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxButtonScale']); ?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxButtonDuration']); ?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxButtonOpacity']); ?>"
                                            data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                            data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                             data-animation-button="<?php echo esc_attr($element['animationButton']); ?>"
                                        >
                                            <span class="mouse" style="<?php echo esc_attr($mouseStyles); ?>">
                                                <span></span>
                                            </span>
                                        </span>
                                        <?php if ($slide['developerMode']) : ?>  
                                            </div>
                                            <?php endif; ?>
                                        <?php
                                        break;
                                    case 'type2':
                                        ?>
                                         <?php if ($slide['developerMode']) : ?>        
                                        <div class="content-button-slide content-button-absolute"
                                                style="
                                                    transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                                                    position: absolute;
                                                    --delay-hide-seconds-button: <?php echo esc_attr($element['delayTransition'] );?>s;
                                                "
                                                data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                                data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                                data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                                data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                                data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                                data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                                                data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                                data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                        >
                                        <?php endif; ?>
                                        <span 
                                            <?php if ($element['buttonLink'] !== 'none') : ?>
                                                onclick="<?php echo $onclick; ?>"
                                            <?php endif; ?> 
                                            class="content-button-slide scroll-btn <?php echo esc_attr($element['animationButton']);?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
                                            style="<?php echo esc_attr($buttonStyle); ?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($element['parallaxButton']); ?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($element['parallaxButtonY']); ?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxButtonScale']); ?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxButtonDuration']); ?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxButtonOpacity']); ?>"
                                             data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                            data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                             data-animation-button="<?php echo esc_attr($element['animationButton']); ?>"
                                        >
                                            <span class="mouse" style="<?php echo esc_attr($mouseStyles); ?>">
                                                <span></span>
                                            </span>
                                        </span>
                                        <?php if ($slide['developerMode']) : ?>  
                                            </div>
                                            <?php endif; ?>
                                        <?php
                                        break;
                                    case 'type3':
                                    case 'type4':
                                    case 'type5':
                                    case 'type6':
                                    case 'type7':
                                    case 'type8':

                                        $link_url = '#';
                                        $linkTargetButton = '_self';
                                        $rel_div = '';

                                        if ($element['buttonLink'] !== 'none') {
                                            // Prepara l'attributo href se buttonLink è diverso da 'none'
                                            if ($element['buttonLink'] === 'link' && !empty($element['linkUrlButton'])) {
                                                $link_url = esc_url($element['linkUrlButton']);
                                                if (!empty($element['linkTargetButton'])) {
                                                    $linkTargetButton = esc_attr($element['linkTargetButton']);
                                                }
                                                if ($element['linkRelButton'] === 'nofollow') {
                                                    $rel_div = 'nofollow';
                                                }
                                            } elseif ($element['buttonLink'] === 'scroll-below') {
                                                $link_url = '#scroll-below';
                                            } elseif ($element['buttonLink'] === 'scroll-to-id' && !empty($element['scrollToIdButton'])) {
                                                $scroll_id = esc_attr($element['scrollToIdButton']);
                                                $link_url = "#{$scroll_id}";
                                            }
                                        }
                                        ?>
                                         <?php if ($slide['developerMode']) : ?>       
                                               <div class="content-button-slide content-button-absolute"
                                                style="
                                                    transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                                                    position: absolute;
                                                    --delay-hide-seconds-button: <?php echo esc_attr($element['delayTransition'] );?>s;
                                                "
                                                data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                                data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                                data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                                data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                                data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                                data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                                                data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                                data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                        >
                                        <?php endif; ?>                           
                                        <div class=" button-slider <?php echo esc_attr($element['animationButton']);?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                                            style="<?php echo esc_attr($buttonContentStyle3); ?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($element['parallaxButton']);?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($element['parallaxButtonY']);?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxButtonScale']);?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxButtonDuration']);?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxButtonOpacity']);?>"
                                            data-font-family="<?php echo esc_attr($element['fontFamilyButton']); ?>" 
                                            data-animation-button="<?php echo esc_attr($element['animationButton']); ?>"
                                          
                                        >
                                        <a class="content-button-slide <?php echo esc_attr($element['iconShowHover']);?> <?php echo esc_attr($element['iconHideShowHover']);?>" href="<?php echo $link_url; ?>" 
                                        style="<?php echo esc_attr($buttonStyle3); ?>"
                                          data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                            data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                            
                                        target="<?php echo $linkTargetButton; ?>"
                                        rel="<?php echo $rel_div; ?>"
                                        <?php if ($element['buttonLink'] === 'scroll-below' || ($element['buttonLink'] === 'scroll-to-id' && !empty($element['scrollToIdButton']))) : ?>
                                            onclick="event.preventDefault(); <?php echo $element['buttonLink'] === 'scroll-below' ? "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });" : "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });"; ?>"
                                        <?php endif; ?>
                                        >
                                            <?php if (!empty($element['icon']) && $element['icoPositionButton'] === 'before') : ?>
                                                <div class="content-icon-button" style="transform:rotate(<?php echo esc_attr( $element['rotateIcon'] )?>deg);--rotate-icon-button-hover:<?php echo esc_attr( $element['rotateIconHover'] )?>deg;"><i class="<?php echo esc_attr($element['icon']); ?> <?php echo esc_attr($element['iconAnimation']); ?> <?php echo esc_attr($element['animationHoverIcon']); ?>" style="color:<?php echo esc_attr( $element['iconColor'] )?>;font-size:<?php echo esc_attr( $element['sizeIcon'] )?>px;--fa-animation-duration:<?php echo esc_attr( $element['iconAnimationDuration'] )?>s;--color-icon-button-hover:<?php echo esc_attr( $element['iconColorHover'] )?>;--translate-hover-icon-button:<?php echo esc_attr( $element['translateEffectHoverIcon'] )?>px;--transition-hover-icon-button:<?php echo esc_attr( $element['durationEffectHoverIcon'] )?>s;"></i></div>
                                            <?php endif; ?>
                                            <?php echo esc_html($element['button']); ?>
                                            <?php if (!empty($element['icon']) && $element['icoPositionButton'] === 'after') : ?>
                                                <div class="content-icon-button" style="transform:rotate(<?php echo esc_attr( $element['rotateIcon'] )?>deg);--rotate-icon-button-hover:<?php echo esc_attr( $element['rotateIconHover'] )?>deg;"><i class="<?php echo esc_attr($element['icon']); ?> <?php echo esc_attr($element['iconAnimation']); ?> <?php echo esc_attr($element['animationHoverIcon']); ?>" style="color:<?php echo esc_attr( $element['iconColor'] )?>;font-size:<?php echo esc_attr( $element['sizeIcon'] )?>px;--fa-animation-duration:<?php echo esc_attr( $element['iconAnimationDuration'] )?>s;--color-icon-button-hover:<?php echo esc_attr( $element['iconColorHover'] )?>;--translate-hover-icon-button:<?php echo esc_attr( $element['translateEffectHoverIcon'] )?>px;--transition-hover-icon-button:<?php echo esc_attr( $element['durationEffectHoverIcon'] )?>s;"></i></div>
                                            <?php endif; ?>


                                        </a>
                                        </div>
                                        <?php if ($slide['developerMode']) : ?>  
                                            </div>
                                            <?php endif; ?>
                                        <?php
                                        break;
                                    default:
                                        break;
                                }
                            endif;
                            ?>


                            <?php if ($element['type'] === 'icon'): 
                               $desktopClassIcon = $element['enableDesktopTitle'] ? 'desktop-icon-visible' : 'desktop-icon-hidden';
                               $tabletClassIcon = $element['enableTabletTitle'] ? 'tablet-icon-visible' : 'tablet-icon-hidden';
                               $mobileClassIcon = $element['enableMobileTitle'] ? 'mobile-icon-visible' : 'mobile-icon-hidden';
                               if ($element['textLink'] !== 'none') {
                                // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                if ($element['textLink'] === 'link' && !empty($element['linkUrl'])) {
                                    $link_url = esc_url($element['linkUrl']);
                                    if (!empty($element['linkTarget'])) {
                                        $linkTarget = esc_attr($element['linkTarget']);
                                    }
                                    if ($element['linkRel'] === 'nofollow') {
                                        $rel_div = 'nofollow';
                                    }
                                    $onclick = "window.open('{$link_url}', '{$linkTarget}', 'rel={$rel_div}');";
                                } elseif ($element['textLink'] === 'scroll-below') {
                                    $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                } elseif ($element['textLink'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
                                    $scroll_id = esc_attr($element['scrollToId']);
                                    $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                }
                            }
                               // Styles Icon
                                    $stylesIcon = "
                                    font-size: " . esc_attr($element['fontSize']) . "px;
                                    --font-size-tablet-icon: " . esc_attr($element['fontSizeTablet']) . "px;
                                    --font-size-mobile-icon: " . esc_attr($element['fontSizeMobile']) . "px;
                                    color: " . esc_attr($element['textColor']) . ";
                                    background-color: " . esc_attr($element['backgroundColor']) . ";
                                    --color-hover-icon: " . esc_attr($element['textColorHover']) . ";
                                    margin: " . esc_attr($element['marginTitle']['top']) . " " . esc_attr($element['marginTitle']['right']) . " " . esc_attr($element['marginTitle']['bottom']) . " " . esc_attr($element['marginTitle']['left']) . ";
                                    --delay-effect-icon: " . esc_attr($element['delayEffect']) . "s;
                                    padding: " . esc_attr($element['paddingTitle']['top']) . " " . esc_attr($element['paddingTitle']['right']) . " " . esc_attr($element['paddingTitle']['bottom']) . " " . esc_attr($element['paddingTitle']['left']) . ";
                                    border-width: " . esc_attr($element['backgroundBorderSize']) . "px;
                                    border-color: " . esc_attr($element['backgroundBorderColor']) . ";
                                    border-radius: " . esc_attr($element['backgroundBorderRadius']) . "px;
                                    --border-color-hover-icon: " . esc_attr($element['backgroundBorderColorHover']) . ";
                                    --opacity-hover-icon: " . esc_attr($element['opacityHover']) . ";
                                    border-style: " . esc_attr($element['borderStyle']) . ";
                                    --border-style-hover-icon: " . esc_attr($element['borderStyleHover']) . ";
                                    --border-width-hover-icon: " . esc_attr($element['backgroundBorderSizeHover']) . "px;
                                    --translate-hover-icon: " . esc_attr($element['translateEffectHover']) . "px;
                                    --color-effect-hover-icon: " . esc_attr($element['effectHoverColorHover']) . ";
                                    box-shadow: " . esc_attr($element['boxShadowX']) . "px " . esc_attr($element['boxShadowY']) . "px " . esc_attr($element['boxShadowBlur']) . "px " . esc_attr($element['boxShadowSpread']) . "px " . esc_attr($element['colorShadow']) . ";
                                    position: relative;
                                    opacity: " . esc_attr($element['opacity']) . ";
                                    transform: rotate(" . esc_attr($element['rotate']) . "deg);
                                    --rotate-hover-icon: " . esc_attr($element['rotateHover']) . "deg;
                                    --fa-animation-duration: " . esc_attr($element['iconAnimationDuration']) . "s;
                                     " . ($element['textLink'] !== 'none' ? 'cursor: pointer;' : '') . "
                                ";

                                // Styles for the container div
                                $stylesDiv = "
                                    --duration-effect-icon: " . esc_attr($element['durationEffect']) . "s;
                                    --delay-effect-icon: " . esc_attr($element['delayEffect']) . "s;
                                    --transition-hover-icon: " . esc_attr($element['durationEffectHover']) . "s;
                                    width: " . ($element['widthTitle'] === 'custom' ? esc_attr($element['widthCustomTitle']) . "%" : esc_attr($element['widthTitle'])) . ";
                                    --interation-icon: " . esc_attr($element['interation']) . ";
                                    --delay-hide-seconds-icon: " . esc_attr($element['delayTransition']) . "s;
                                    text-align: " . esc_attr($element['textAlign']) . ";
                                ";
                                // Class names for the container div
                                    $classNamesDiv = "content-icon " . esc_attr($element['animation']) ;

                                    // Class names for the icon
                                    $classNamesIcon = "slide-icon " . esc_attr($element['icon']) . " " . esc_attr($element['iconAnimation']) . " " . esc_attr($element['animationHover']);
                                ?>
                                 <?php if ($slide['developerMode']) : ?>  
                                <div class="content-content-icon-absolute <?php echo esc_attr($desktopClassIcon); ?> <?php echo esc_attr($tabletClassIcon); ?> <?php echo esc_attr($mobileClassIcon); ?>"
                                        data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                        data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                        data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                        data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                        data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                        data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>" 
                                        style=" transform: translate(<?php echo esc_attr($element['desktop']['x']); ?>px, <?php echo esc_attr($element['desktop']['y']); ?>px); position: absolute; z-index:<?php echo esc_attr( $element['zIndexIcon'] )?>;"
                                >
                                <?php endif; ?> 
                                <div <?php if ($element['textLink'] !== 'none') : ?> onclick="<?php echo $onclick; ?>" <?php endif; ?>  style="<?php echo $stylesDiv; ?>" class="<?php echo $classNamesDiv; ?> <?php echo esc_attr($desktopClassIcon); ?> <?php echo esc_attr($tabletClassIcon); ?> <?php echo esc_attr($mobileClassIcon); ?>" data-animation-icon="<?php echo esc_attr($element['animation']); ?>">
                                    <i 
                                        class="<?php echo $classNamesIcon; ?>" 
                                        style="<?php echo $stylesIcon; ?>"
                                        data-swiper-parallax-x="<?php echo esc_attr($element['parallaxTitle']); ?>"
                                        data-swiper-parallax-y="<?php echo esc_attr($element['parallaxTitleY']); ?>"
                                        data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxTitleScale']); ?>"
                                        data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxTitleDuration']); ?>"
                                        data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxTitleOpacity']); ?>"
                                    >
                                    </i>
                                </div>
                                <?php if ($slide['developerMode']) : ?>  
                                </div>
                                <?php endif; ?>
                            <?php endif;
                            ?>


                        <?php if ($element['type'] === 'image' && !empty($element['url'])): 
                            $marginTop = isset($element['marginImage']['top']) ? esc_attr($element['marginImage']['top']) : '0px';
                            $marginRight = isset($element['marginImage']['right']) ? esc_attr($element['marginImage']['right']) : '0px';
                            $marginBottom = isset($element['marginImage']['bottom']) ? esc_attr($element['marginImage']['bottom']) : '0px';
                            $marginLeft = isset($element['marginImage']['left']) ? esc_attr($element['marginImage']['left']) : '0px';
                            $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                            $style = "
                                      border-style: " . esc_attr($element['borderStyleImage']) . ";
                                      border-width: " . esc_attr($element['backgroundBorderSizeImage']) . "px;
                                      border-color: " . esc_attr($element['backgroundBorderColorImage']) . ";
                                      border-radius: " . esc_attr($element['backgroundBorderRadiusImage']) . "px;
                                      padding: " . esc_attr($element['paddingImage']) . "px;
                                      --box-shadow-x-image: " . esc_attr($element['boxShadowXImage']) . "px;
                                      --box-shadow-y-image: " . esc_attr($element['boxShadowYImage']) . "px;
                                        --box-shadow-blur-image: " . esc_attr($element['boxShadowBlurImage']) . "px;
                                        --box-shadow-spread-image: " . esc_attr($element['boxShadowSpreadImage']) . "px;
                                        --box-shadow-color-image: " . esc_attr($element['colorShadowImage']) . ";
                                        background-color: " . esc_attr($element['backgroundColorImage']) .";
                                        --spike-width:" . esc_attr($element['spikeLeftWidth']) . "%;
                                        --spike-width-right: " . esc_attr($element['spikeRightWidth']) . "%;
                                        --duration-effect-image: " . esc_attr($element['durationEffectImage']) . "s;
                                        --duration-effect-moving-image: " . esc_attr($element['durationEffectImageMoving']) . "s;
                                          --color-hover-image: " . esc_attr($element['imageColorHover']) . ";
                                        --border-color-hover-image: " . esc_attr($element['backgroundBorderColorHoverImage']) . ";
                                        --opacity-hover-image: " . esc_attr($element['opacityHoverImage']) . ";
                                        --border-width-hover-image: " . esc_attr($element['backgroundBorderSizeImageHover']) . "px;
                                        --border-style-hover-image: " . esc_attr($element['borderStyleHoverImage']) . ";
                                        --transition-hover-image: " . esc_attr($element['durationEffectHoverImage']) . "s;
                                        --translate-hover-image: " . esc_attr($element['translateEffectHoverImage']) . "px;
                                        --color-effect-hover-image: " . esc_attr($element['effectHoverColorHoverImage']) . ";
                                       margin: " . $margin . ";
                                        --delay-effect-image: " . esc_attr($element['delayEffectImage']) . "s; 
                                       --interation-image: " . esc_attr($element['interationImage']) . ";
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
                            $desktopClassImage = $element['enableDesktopImage'] ? 'desktop-image-visible' : 'desktop-image-hidden';
                            $tabletClassImage = $element['enableTabletImage'] ? 'tablet-image-visible' : 'tablet-image-hidden';
                            $mobileClassImage = $element['enableMobileImage'] ? 'mobile-image-visible' : 'mobile-image-hidden';
                            $link_url = '';
                            $onclick = '';
                            $linkTargetImage = '_self'; // Default
                            $rel_div = 'follow'; // Default
                            if ($element['imageLink'] !== 'none') {
                                // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                if ($element['imageLink'] === 'link' && !empty($element['linkUrlImage'])) {
                                    $link_url = esc_url($element['linkUrlImage']);
                                    if (!empty($element['linkTargetImage'])) {
                                        $linkTargetImage = esc_attr($element['linkTargetImage']);
                                    }
                                    if ($element['linkRelImage'] === 'nofollow') {
                                        $rel_div = 'nofollow';
                                    }
                                    $onclick = "window.open('{$link_url}', '{$linkTargetImage}', 'rel={$rel_div}');";
                                } elseif ($element['imageLink'] === 'scroll-below') {
                                    $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                } elseif ($element['imageLink'] === 'scroll-to-id' && !empty($element['scrollToIdImage'])) {
                                    $scroll_id = esc_attr($element['scrollToIdImage']);
                                    $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                }
                            }
                        ?>
                     <?php if ($slide['developerMode']) : ?>  
                       <div class="content-content-image-first-absolute"
                       data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>" 
                            style=" transform: translate(<?php echo esc_attr($element['desktop']['x']); ?>px, <?php echo esc_attr($element['desktop']['y']); ?>px); position: absolute; z-index:<?php echo esc_attr( $element['zIndexImage'] )?>;"
                       >
                       <?php endif; ?> 
                       <div 
                           <?php if ($element['imageLink'] !== 'none') : ?>
                                    onclick="<?php echo $onclick; ?>"
                                <?php endif; ?> 
                                style="transform:rotate(<?php echo esc_attr($element['rotateImage'])?>deg);
                                opacity:<?php echo esc_attr($element['opacityImage'])?>; 
                                --duration-effect-moving-image:<?php echo esc_attr($element['durationEffectImageMoving'])?>s;
                                --translate-effect-moving-image:<?php echo esc_attr( $element['translateEffectImageMoving'] ) ?>px;
                                --rotate-hover-image: <?php echo esc_attr( $element['rotateHoverImage'] )?>deg;
                                --transition-hover-image: <?php echo esc_attr( $element['durationEffectHoverImage'] )?>s;
                                 <?php if ($element['imageLink'] !== 'none') : ?>
                                        cursor: pointer;
                                    <?php endif; ?>
                                width:<?php echo esc_attr( $element['widthImageContent'] )?>;
                                 --delay-hide-seconds-image: <?php echo esc_attr($element['delayTransition']);?>s;
                                " 
                                class="content-img-first <?php echo esc_attr( $element['animationImageMoving'])?> <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>"
                                data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                >
                            <img src="<?php echo esc_url($element['url']); ?>" alt="<?php echo esc_attr($element['alt']); ?>" class="image-first-slide image-with-mask <?php echo esc_attr( $element['blobMask'])?> <?php echo esc_attr( $element['spikeMask'])?> <?php echo esc_attr( $element['spikeMaskRight'])?> <?php echo esc_attr( $element['animationImage'])?> <?php echo esc_attr( $element['imageFilter'])?> <?php echo esc_attr( $element['animationHoverImage'])?>" 
                                 style="<?php echo $style; ?>" 
                                 data-swiper-parallax-x="<?php echo esc_attr($element['parallaxImage']); ?>" 
                                 data-swiper-parallax-y="<?php echo esc_attr($element['parallaxImageY']); ?>" 
                                 data-swiper-parallax-scale="<?php echo esc_attr($element['parallaxImageScale']); ?>" 
                                 data-swiper-parallax-duration="<?php echo esc_attr($element['parallaxImageDuration']); ?>" 
                                 data-swiper-parallax-opacity="<?php echo esc_attr($element['parallaxImageOpacity']); ?>"   
                                 data-animation-image="<?php echo esc_attr($element['animationImage']); ?>"/>
                        </div>
                        <?php if ($slide['developerMode']) : ?>  
                        </div>
                        <?php endif; ?>
                            <?php endif; ?>

                    <?php endforeach; ?>
                <?php endif; ?>
                
            </div>
        </div>
        <?php endforeach; ?>
        <?php endif; ?>
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
       <div class="filter-slider"></div>
</div>
