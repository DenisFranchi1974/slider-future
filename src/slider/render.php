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
);

$swiper_attr_encoded = esc_attr(wp_json_encode($swiper_attr));

$wrapper_attributes = get_block_wrapper_attributes(
    array(
        'class' => 'swiper ' . $slider_unique_class . ' slider-builder swiper-container ' . $filter ,
        'style' => '--color-one-effect: ' . esc_attr($colorOneEffect) . '; --color-two-effect: ' . esc_attr($colorTwoEffect) . '; --color-three-effect: ' . esc_attr($colorThreeEffect) . ';',
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
    function splitTextIntoLettersTitleDiv($content = '', $animation = '', $textDiv = []) {

        $speedEffect = isset($textDiv['speedEffect']) ? $textDiv['speedEffect'] : 200; // Valore predefinito: 100ms
        $pauseEffect = isset($textDiv['pauseEffect']) ? $textDiv['pauseEffect'] : 2000; // Valore predefinito: 2000ms
        $durationEffect = isset($textDiv['durationEffect']) ? $textDiv['durationEffect'] : 2; // Valore predefinito: Parametro passato
        $delayEffect = isset($textDiv['delayEffect']) ? $textDiv['delayEffect'] : 0; // Valore predefinito: Parametro passato
        $animationCount = isset($textDiv['animationCount']) ? $textDiv['animationCount'] : 1; // Valore predefinito: 1
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
            "--width-cursor-title-block" => isset($textDiv['widthCursor']) ? $textDiv['widthCursor'] . "px" : "2px",
            "--color-cursor-title-block" => isset($textDiv['cursorColor']) ? $textDiv['cursorColor'] : "#000000",
            "--animation-cursor-title-block" => isset($textDiv['animationCursor']) ? $textDiv['animationCursor'] . "s" : "0.75s",
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

<div <?php echo wp_kses_data($wrapper_attributes) . ' data-swiper="' . $swiper_attr_encoded . '"'; ?> dir="<?php echo esc_attr($languageSlider); ?>">
    <div class="swiper-wrapper">
    <?php if ($attributes['contentType'] === 'post-based' && !empty($attributes['posts']) && is_array($attributes['posts'])) : ?>
        <?php foreach ($attributes['posts'] as $post) : ?>
            <div class="swiper-slide">
                <?php if (!empty($post['image'])) : ?>
                    <img src="<?php echo esc_url($post['image']); ?>" alt="<?php echo esc_attr($post['title']); ?>" />
                <?php endif; ?>
                <?php if (!empty($post['title'])) : ?>
                    <h3><?php echo esc_html($post['title']); ?></h3>
                <?php endif; ?>
                <?php if (!empty($post['excerpt'])) : ?>
                    <p><?php echo esc_html($post['excerpt']); ?></p>
                <?php endif; ?>
                <?php if (!empty($post['link'])) : ?>
                    <a href="<?php echo esc_url($post['link']); ?>"><?php echo __('Read More', 'cocoblocks'); ?></a>
                <?php endif; ?>
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

                <?php $maxWidth = $slide['enableContentWidth'] ? $slide['contentWidth'] . 'px' : 'false';?>
                <div data-effect="particle" class="content-slide-slider <?php echo esc_attr($layout_class); ?> <?php echo esc_attr($slide['position']); ?> <?php echo esc_attr($overflow); ?>"
                        style="<?php 
                            // Gestisci l'altezza
                            echo $autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; ';
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
                            echo 'border-style: ' . esc_attr($slide['borderStyleSlide']) . '; ';
                            echo 'border-width: ' . esc_attr($slide['backgroundBorderSize']) . 'px; ';
                            echo 'border-color: ' . esc_attr($slide['backgroundBorderColor']) . '; ';
                            echo 'flex-direction: ' . esc_attr($slide['layout'] === 'horizontal' ? 'row' : 'column') . ';';
                            echo 'margin: 0 auto;';
                            echo 'max-width: ' . esc_attr($maxWidth) . ';';
                            echo 'flex-wrap: ' . esc_attr($slide['layoutWrap']) . ';';
                        ?>"
                >
               
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
                            . 'opacity: ' . esc_attr($element['opacity']) . ';';
                         

                            // Recupera il tag HTML
                            $tag = isset($element['elementTitle']) ? esc_attr($element['elementTitle']) : 'h3';
                        ?>
                        <?php
                            // Aggiungi classi in base alla visibilità per desktop, tablet e mobile
                            $desktopClass = $element['enableDesktopTitle'] ? 'desktop-title-visible' : 'desktop-title-hidden';
                            $tabletClass = $element['enableTabletTitle'] ? 'tablet-title-visible' : 'tablet-title-hidden';
                            $mobileClass = $element['enableMobileTitle'] ? 'mobile-title-visible' : 'mobile-title-hidden';
                        ?>
                                       

                       <div
                            style="
                                
                                --rotate-hover: <?php echo esc_attr($element['rotateHover']); ?>deg;
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
                                transform: translate(<?php echo esc_attr($element['desktop']['x']); ?>px, <?php echo esc_attr($element['desktop']['y']); ?>px);
                              position: absolute;
                                width: <?php echo esc_attr($element['widthTitle']) === 'custom' ? esc_attr($element['widthCustomTitle']) . '%' : esc_attr($element['widthTitle']); ?>;
                            "
                            class="content-title-slide <?php echo esc_attr($element['decoration']); ?> <?php echo esc_attr($desktopClass); ?> <?php echo esc_attr($tabletClass); ?> <?php echo esc_attr($mobileClass); ?> <?php echo esc_attr($element['animation']); ?>"
                            data-speed-effect="<?php echo esc_attr($element['speedEffect']); ?>"
                            data-animation="<?php echo esc_attr($element['animation']); ?>"
                            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
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

                        <?php endif; ?>
                        <?php
                         if (!function_exists('getStylesTitleBlock')) {
                            function getStylesTitleBlock($textDiv) {
                                $isBold = isset($textDiv['fontStyle']['fontWeight']) && $textDiv['fontStyle']['fontWeight'] === "bold";
                                $styles = [
                                    'font-size' => !empty($textDiv['fontSize']) ? $textDiv['fontSize'] . 'px' : '16px',
                                    '--font-size-block-tablet' => !empty($textDiv['fontSizeTablet']) ? $textDiv['fontSizeTablet'] . 'px' : '14px',
                                    '--font-size-block-mobile' => !empty($textDiv['fontSizeMobile']) ? $textDiv['fontSizeMobile'] . 'px' : '12px',
                                    'color' => !empty($textDiv['textColor']) ? $textDiv['textColor'] : '#000000',
                                    'text-align' => !empty($textDiv['textAlign']) ? $textDiv['textAlign'] : 'left',
                                    'letter-spacing' => isset($textDiv['letterSpacingTitleBlock']) ? $textDiv['letterSpacingTitleBlock'] . "px" : "0px",
                                    'font-style' => isset($textDiv['fontStyle']['fontStyle']) ? $textDiv['fontStyle']['fontStyle'] : "normal",
                                    'font-weight' => $isBold ? "bold" : (isset($textDiv['fontWeightTitleBlock']) ? $textDiv['fontWeightTitleBlock'] : "normal"),
                                    'text-decoration' => isset($textDiv['fontStyle']['textDecoration']) ? $textDiv['fontStyle']['textDecoration'] : "none",
                                    'line-height' => !empty($textDiv['lineHeight']) ? $textDiv['lineHeight'] : '1.5',
                                    'font-family' => !empty($textDiv['fontFamilyTitleBlock']) ? $textDiv['fontFamilyTitleBlock'] : 'inherit', // Inherit se non specificato
                                    'margin' => !empty($textDiv['marginTitle']) ? $textDiv['marginTitle']['top'] . ' ' . $textDiv['marginTitle']['right'] . ' ' . $textDiv['marginTitle']['bottom'] . ' ' . $textDiv['marginTitle']['left'] : '0',
                                    'padding' => !empty($textDiv['paddingTitleBlock']) ? $textDiv['paddingTitleBlock']['top'] . ' ' . $textDiv['paddingTitleBlock']['right'] . ' ' . $textDiv['paddingTitleBlock']['bottom'] . ' ' . $textDiv['paddingTitleBlock']['left'] : '0',
                                    'border-style' => !empty($textDiv['borderStyle']) ? $textDiv['borderStyle'] : 'none',
                                    'border-width' => !empty($textDiv['backgroundBorderSize']) ? $textDiv['backgroundBorderSize'] . 'px' : '0',
                                    'border-color' => !empty($textDiv['backgroundBorderColor']) ? $textDiv['backgroundBorderColor'] : 'transparent',
                                    'border-radius' => !empty($textDiv['backgroundBorderRadius']) ? $textDiv['backgroundBorderRadius'] . 'px' : '0',
                                    'box-shadow' => isset($textDiv['boxShadowX']) && isset($textDiv['boxShadowY']) && isset($textDiv['boxShadowBlur']) && isset($textDiv['boxShadowSpread']) && isset($textDiv['colorShadow']) 
                                        ? "{$textDiv['boxShadowX']}px {$textDiv['boxShadowY']}px {$textDiv['boxShadowBlur']}px {$textDiv['boxShadowSpread']}px {$textDiv['colorShadow']}" 
                                        : "0 0 0 0 #000000",
                                    'writing-mode' => isset($textDiv['textWriteMode']) ? $textDiv['textWriteMode'] : "initial",
                                    'text-orientation' => isset($textDiv['textOrientation']) ? $textDiv['textOrientation'] : "initial",
                                    '--delay-effect-title-block' => isset($textDiv['delayEffect']) ? $textDiv['delayEffect'] . "s" : "0s",
                                    '--duration-effect-odd-title-block' => isset($textDiv['durationEffectOdd']) ? $textDiv['durationEffectOdd'] . "s" : "0s",
                                    '--duration-effect-even-title-block' => isset($textDiv['durationEffectEven']) ? $textDiv['durationEffectEven'] . "s" : "0s",
                                    '--color-gradient-one-title-div' => isset($textDiv['gradinetColorOne']) ? $textDiv['gradinetColorOne'] : "",
                                    '--color-gradient-two-title-div' => isset($textDiv['gradinetColorTwo']) ? $textDiv['gradinetColorTwo'] : "",
                                    '--color-gradient-three-title-div' => isset($textDiv['gradinetColorThree']) ? $textDiv['gradinetColorThree'] : "",
                                    '--color-gradient-four-title-div' => isset($textDiv['gradinetColorFour']) ? $textDiv['gradinetColorFour'] : "",
                                    '--border-style-hover-title-div' => isset($textDiv['borderStyleHover']) ? $textDiv['borderStyleHover'] : "none",
                                    '--transition-hover-title-div' => isset($textDiv['durationEffectHover']) ? $textDiv['durationEffectHover'] . 's' : "0.3s",
                                    '--translate-hover-title-div' => isset($textDiv['translateEffectHover']) ? $textDiv['translateEffectHover'] . 'px' : "-10px",
                                    '--color-effect-hover-title-div' => isset($textDiv['effectHoverColorHover']) ? $textDiv['effectHoverColorHover'] : "#000000",
                                    '--border-color-hover-title-div' => isset($textDiv['backgroundBorderColorHover']) ? $textDiv['backgroundBorderColorHover'] : "#000000",
                                    '--border-width-hover-title-div' => isset($textDiv['backgroundBorderSizeHover']) ? $textDiv['backgroundBorderSizeHover'] . 'px' : "0px",
                                    '--opacity-hover-title-div' => isset($textDiv['opacityHover']) ? $textDiv['opacityHover'] : 1,
                                    '--color-hover-title-div' => isset($textDiv['textColorHover']) ? $textDiv['textColorHover'] : "",
                                    'opacity' => isset($textDiv['opacity']) ? esc_attr($textDiv['opacity']) : 1, 
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
                                    --box-shadow-x-div:<?php echo esc_attr($element['boxShadowX']) ?> px;
                                    --box-shadow-y-div: <?php echo esc_attr($element['boxShadowY']) ?> px;
                                    --box-shadow-blur-div: <?php echo esc_attr($element['boxShadowBlur']) ?> px;
                                    --box-shadow-color-div: <?php echo esc_attr($element['colorShadow']) ?>;
                                    --box-shadow-spread-div: <?php echo esc_attr($element['boxShadowSpread']) ?> px;
                                    opacity: <?php echo esc_attr($element['opacityDiv']) ?>;
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
                                    --transition-hover-div: <?php echo esc_attr($element['durationEffectHoverDiv']) ?>s;
                                "
                            >
                                <?php if (!empty($element['innerTextDivs']) && is_array($element['innerTextDivs'])): ?>
                                    <?php foreach ($element['innerTextDivs'] as $textIndex => $textDiv): ?>
                                        <?php $TagBlock = !empty($textDiv['elementTitle']) ? $textDiv['elementTitle'] : 'h3'; ?>
                                        <?php
                                            // Aggiungi classi in base alla visibilità per desktop, tablet e mobile
                                            $desktopClassTitleDiv = $textDiv['enableDesktopTitle'] ? 'desktop-title-div-visible' : 'desktop-title-div-hidden';
                                            $tabletClassTitleDiv = $textDiv['enableTabletTitle'] ? 'tablet-title-div-visible' : 'tablet-title-div-hidden';
                                            $mobileClassTitleDiv = $textDiv['enableMobileTitle'] ? 'mobile-title-div-visible' : 'mobile-title-div-hidden';
                                        ?>
                                        <div
                                            style="transform: rotate(<?php echo esc_attr($textDiv['rotate']); ?>deg); 
                                            --color-decoration-title-div: <?php echo esc_attr($textDiv['underlineColor']); ?>;
                                            --padding-decoration-title-div: <?php echo esc_attr($textDiv['underlinePadding']); ?>px;
                                            --width-decoration-title-div: <?php echo esc_attr($textDiv['underlineWidth']); ?>%;
                                            --vertical-decoration-title-div: <?php echo esc_attr($textDiv['underlineVertical']); ?>px;
                                            --horizontal-decoration-title-div: <?php echo esc_attr($textDiv['underlineHorizontal']); ?>px;
                                            --height-decoration-title-div: <?php echo esc_attr($textDiv['underlineHeight']); ?>px;
                                            --animation-decoration-title-div: <?php echo esc_attr($textDiv['underlineAnimation']); ?>;
                                            --animation-decoration-from-title-div: <?php echo esc_attr($textDiv['underlineAnimationFrom']); ?>%;
                                            --animation-decoration-to-title-div: <?php echo esc_attr($textDiv['underlineAnimationTo']); ?>%;
                                            --animation-decoration-from-size-title-div: <?php echo esc_attr($textDiv['underlineFromSizeNew']); ?>%;
                                            --animation-decoration-to-size-title-div: <?php echo esc_attr($textDiv['underlineToSizeNew']); ?>%;
                                            --animation-decoration-transition-title-div: <?php echo esc_attr($textDiv['underlineAnimationTransition']); ?>s;
                                            --rotate-hover-title-div: <?php echo esc_attr($textDiv['rotateHover']); ?>deg;
                                            --duration-effect-title-block: <?php echo esc_attr($textDiv['durationEffect']); ?>s; 
                                            --delay-effect-title-block: <?php echo esc_attr($textDiv['delayEffect']) ; ?>s; 
                                            --interation-title-block: <?php echo esc_attr($textDiv['iteration']); ?>;
                                            "
                                            class="content-title-div letter <?php echo esc_attr($textDiv['decoration']); ?> <?php echo esc_attr($textDiv['animation']); ?>  <?php echo esc_attr($desktopClassTitleDiv); ?> <?php echo esc_attr($tabletClassTitleDiv); ?> <?php echo esc_attr($mobileClassTitleDiv); ?>"
                                             data-animation-title-div="<?php echo esc_attr($textDiv['animation']); ?>"
                                        >
                                            <<?php echo esc_attr($TagBlock); ?>
                                                class="title-slide-div <?php echo esc_attr($textDiv['animationHover']); ?>"
                                            <?php
                                                $link_start = '';
                                                $link_end = '';
                                                $target = '_self'; // Default
                                                $rel = 'follow'; // Default
                                                // Verifica il tipo di link e prepara i tag <a> e attributi
                                                    if ($textDiv['textLink'] === 'link' && !empty($textDiv['linkUrl'])) {
                                                        // Se è un link, prepara i tag <a> con target e rel
                                                        if (!empty($textDiv['linkTarget'])) {
                                                            $target = esc_attr($textDiv['linkTarget']);
                                                        }
                                                        if ($textDiv['linkRel'] === 'nofollow') {
                                                            $rel = 'nofollow';
                                                        }
                                                        $link_start = '<a href="' . esc_url($textDiv['linkUrl']) . '" target="' . $target . '" rel="' . $rel . '">';
                                                        $link_end = '</a>';
                                                    } elseif ($textDiv['textLink'] === 'scroll-below') {
                                                        // Logica per lo scroll in basso
                                                        $link_start = '<a href="#" onclick="window.scrollBy({ top: window.innerHeight, behavior: \'smooth\' }); return false;">';
                                                        $link_end = '</a>';
                                                    } elseif ($textDiv['textLink'] === 'scroll-to-id' && !empty($textDiv['scrollToId'])) {
                                                        // Logica per scrollare ad un ID specifico
                                                        $link_start = '<a href="#" onclick="document.getElementById(\'' . esc_attr($textDiv['scrollToId']) . '\').scrollIntoView({ behavior: \'smooth\' }); return false;">';
                                                        $link_end = '</a>';
                                                    }
                                                ?>
                                                style="<?php echo esc_attr(getStylesTitleBlock($textDiv)); ?>"
                                                data-swiper-parallax-x="<?php echo esc_attr($textDiv['parallaxTitle']); ?>"
                                                data-swiper-parallax-y="<?php echo esc_attr($textDiv['parallaxTitleY']); ?>"
                                                data-swiper-parallax-scale="<?php echo esc_attr($textDiv['parallaxTitleScale']); ?>"
                                                data-swiper-parallax-duration="<?php echo esc_attr($textDiv['parallaxTitleDuration']); ?>"
                                                data-swiper-parallax-opacity="<?php echo esc_attr($textDiv['parallaxTitleOpacity']); ?>"
                                                <?php if ($textDiv['textLink'] === 'link') : ?>
                                                    href="<?php echo esc_url($textDiv['linkUrl']); ?>"
                                                <?php elseif ($textDiv['textLink'] === 'scroll-below' || $textDiv['textLink'] === 'scroll-to-id') : ?>
                                                    onclick="
                                                        <?php if ($textDiv['textLink'] === 'scroll-below') : ?>
                                                            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                                                        <?php elseif ($textDiv['textLink'] === 'scroll-to-id') : ?>
                                                            var targetElement = document.getElementById('<?php echo esc_js($textDiv['scrollToId']); ?>');
                                                            if (targetElement) {
                                                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        <?php endif; ?>
                                                        return false;
                                                    "
                                                <?php endif; ?>
                                            >
                                            <?php echo $link_start; ?>
                                                <?php echo splitTextIntoLettersTitleDiv($textDiv['content'], $textDiv['animation'],$textDiv); ?>
                                            <?php echo $link_end; ?>
                                            </<?php echo esc_attr($TagBlock); ?>>
                                        </div>
                                    <?php endforeach; ?>
                                <?php endif; ?>
 
                                <?php if (!empty($element['innerImageDivs']) && is_array($element['innerImageDivs'])): ?>
                                    <?php foreach ($element['innerImageDivs'] as $imageIndex => $imageDiv): 

                                        $style = "max-width: 100%; min-width: 0; 
                                        max-height: 100%; min-height: 0;
                                        border-style: " . esc_attr($imageDiv['borderStyleImage']) . ";
                                        border-width: " . esc_attr($imageDiv['backgroundBorderSizeImage']) . "px;
                                        border-color: " . esc_attr($imageDiv['backgroundBorderColorImage']) . ";
                                        border-radius: " . esc_attr($imageDiv['backgroundBorderRadiusImage']) . "px;
                                        padding: " . esc_attr($imageDiv['paddingImage']) . "px;
                                        box-shadow: " . esc_attr($imageDiv['boxShadowXImage']) . "px " . esc_attr($imageDiv['boxShadowYImage']) . "px " . esc_attr($imageDiv['boxShadowBlurImage']) . "px " . esc_attr($imageDiv['boxShadowSpreadImage']) . "px " . esc_attr($imageDiv['colorShadowImage']) . ";
                                        background-color: " . esc_attr($imageDiv['backgroundColorImage']) . ";
                                        margin: " . esc_attr($imageDiv['marginImage']['top']) . ' ' . esc_attr($imageDiv['marginImage']['right']) . ' ' . esc_attr($imageDiv['marginImage']['bottom']) . ' ' . esc_attr($imageDiv['marginImage']['left']) . ";
                                        --spike-width-inner:" . esc_attr($imageDiv['spikeLeftWidth']) . "%;
                                        --spike-width-right-inner: " . esc_attr($imageDiv['spikeRightWidth']) . "%;
                                        --duration-effect-image-inner: " . esc_attr($imageDiv['durationEffectImage']) . "s;
                                        --duration-effect-moving-image-inner: " . esc_attr($imageDiv['durationEffectImageMoving']) . "s;
                                        --color-hover-image-inner: " . esc_attr($imageDiv['imageColorHover']) . ";
                                        --border-color-hover-image-inner: " . esc_attr($imageDiv['backgroundBorderColorHoverImage']) . ";
                                        --opacity-hover-image-inner: " . esc_attr($imageDiv['opacityHoverImage']) . ";
                                        --border-style-hover-image-inner: " . esc_attr($imageDiv['borderStyleHoverImage']) . ";
                                        --border-width-hover-image-inner: " . esc_attr($imageDiv['backgroundBorderSizeImageHover']) . "px;
                                        --transition-hover-image-inner: " . esc_attr($imageDiv['durationEffectHoverImage']) . "s;
                                        --translate-hover-image-inner: " . esc_attr($imageDiv['translateEffectHoverImage']) . "px;
                                        --color-effect-hover-image-inner: " . esc_attr($imageDiv['effectHoverColorHoverImage']) . ";
                                        --interation-image-inner: " . esc_attr($imageDiv['interationImage']) . ";
                                        ";

                                        if ($imageDiv['widthImage'] === 'relative') {
                                            $style .= "width: " . esc_attr($imageDiv['customWidthImage']) . "%;";
                                        } elseif ($imageDiv['widthImage'] === 'fixed') {
                                            $style .= "width: " . esc_attr($imageDiv['customWidthImagePx']) . "px;";
                                        }

                                        if ($imageDiv['heightImage'] === 'relative') {
                                            $style .= "height: " . esc_attr($imageDiv['customHeightImage']) . "%;";
                                        } elseif ($imageDiv['heightImage'] === 'fixed') {
                                            $style .= "height: " . esc_attr($imageDiv['customHeightImagePx']) . "px;";
                                        }

                                        if ($imageDiv['widthImage'] !== 'auto' || $imageDiv['heightImage'] !== 'auto') {
                                            $style .= "object-fit: " . esc_attr($imageDiv['fit']) . ";";
                                        }

                                        $desktopClassImage = $imageDiv['enableDesktopImage'] ? 'desktop-image-visible-inner' : 'desktop-image-hidden-inner';
                                        $tabletClassImage = $imageDiv['enableTabletImage'] ? 'tablet-image-visible-inner' : 'tablet-image-hidden-inner';
                                        $mobileClassImage = $imageDiv['enableMobileImage'] ? 'mobile-image-visible-inner' : 'mobile-image-hidden-inner';
                                        $link_url = '';
                                        $onclick = '';
                                        $linkTargetImage = '_self'; // Default
                                        $rel_div = 'follow'; // Default
                                        
                                        if ($imageDiv['imageLink'] !== 'none') {
                                            // Prepara l'attributo onclick se textLinkDiv è diverso da 'none'
                                            if ($imageDiv['imageLink'] === 'link' && !empty($imageDiv['linkUrlImage'])) {
                                                $link_url = esc_url($imageDiv['linkUrlImage']);
                                                if (!empty($imageDiv['linkTargetImage'])) {
                                                    $linkTargetImage = esc_attr($imageDiv['linkTargetImage']);
                                                }
                                                if ($imageDiv['linkRelImage'] === 'nofollow') {
                                                    $rel_div = 'nofollow';
                                                }
                                                $onclick = "window.open('{$link_url}', '{$linkTargetImage}', 'rel={$rel_div}');";
                                            } elseif ($imageDiv['imageLink'] === 'scroll-below') {
                                                $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                            } elseif ($imageDiv['imageLink'] === 'scroll-to-id' && !empty($imageDiv['scrollToIdImage'])) {
                                                $scroll_id = esc_attr($imageDiv['scrollToIdImage']);
                                                $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                            }
                                        }
                                    ?>
                                    <div 
                                    <?php if ($imageDiv['imageLink'] !== 'none') : ?>
                                                                onclick="<?php echo $onclick; ?>"
                                                            <?php endif; ?> 
                                        style="transform: rotate(<?php echo esc_attr($imageDiv['rotateImage']); ?>deg); opacity: <?php echo esc_attr($imageDiv['opacityImage']); ?>; --duration-effect-moving-image-inner:<?php echo esc_attr($imageDiv['durationEffectImageMoving'])?>s; --translate-effect-moving-image-inner:<?php echo esc_attr($imageDiv['translateEffectImageMoving']) ?>px; --duration-effect-moving-image-hover-inner:<?php echo esc_attr($imageDiv['durationEffectImageMovingHover'])?>s; --translate-effect-moving-image-hover-inner:<?php echo esc_attr($imageDiv['translateEffectImageMovingHover'])?>px; --rotate-hover-image-inner: <?php echo esc_attr($imageDiv['rotateHoverImage'])?>deg; --transition-hover-image-inner: <?php echo esc_attr($imageDiv['durationEffectHoverImage'])?>s; width:<?php echo esc_attr($imageDiv['widthImageContent'])?>; <?php if ($imageDiv['imageLink'] !== 'none') : ?>
                                                                    cursor: pointer;
                                                                <?php endif; ?>"
                                        class="content-img-inner <?php echo esc_attr($imageDiv['animationImageMoving'])?> <?php echo esc_attr($imageDiv['animationImageMovingHover'])?> <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>"
                                    >
                                        <img
                                            src="<?php echo esc_url($imageDiv['imageUrl']); ?>"
                                            alt="<?php echo esc_attr($imageDiv['alt']); ?>"
                                            style="<?php echo $style ?>"
                                            class="img-inner image-with-mask <?php echo esc_attr($imageDiv['blobMask']); ?> <?php echo esc_attr($imageDiv['spikeMask'])?> <?php echo esc_attr($imageDiv['spikeMaskRight'])?> <?php echo esc_attr($imageDiv['animationImage'])?> <?php echo esc_attr($imageDiv['imageFilter'])?> <?php echo esc_attr($imageDiv['animationHoverImage'])?>"
                                            data-swiper-parallax-x="<?php echo esc_attr($imageDiv['parallaxImage']); ?>"
                                            data-swiper-parallax-y="<?php echo esc_attr($imageDiv['parallaxImageY']); ?>"
                                            data-swiper-parallax-scale="<?php echo esc_attr($imageDiv['parallaxImageScale']); ?>"
                                            data-swiper-parallax-duration="<?php echo esc_attr($imageDiv['parallaxImageDuration']); ?>"
                                            data-swiper-parallax-opacity="<?php echo esc_attr($imageDiv['parallaxImageOpacity']); ?>"
                                            data-animation-image-inner="<?php echo esc_attr($imageDiv['animationImage']); ?>"
                                        />
                                    </div>
                                <?php endforeach; ?>
                            <?php endif; ?>
                        </<?php echo esc_attr($TagDiv); ?>>
                        <?php endif; ?>

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
                       
                       <div 
                           <?php if ($element['imageLink'] !== 'none') : ?>
                                    onclick="<?php echo $onclick; ?>"
                                <?php endif; ?> 
                                style="transform:rotate(<?php echo esc_attr($element['rotateImage'])?>deg);opacity:<?php echo esc_attr($element['opacityImage'])?>; --duration-effect-moving-image:<?php echo esc_attr($element['durationEffectImageMoving'])?>s;--translate-effect-moving-image:<?php echo esc_attr( $element['translateEffectImageMoving'] ) ?>px;
                                        transform: translate(<?php echo esc_attr($element['desktop']['x']); ?>px, <?php echo esc_attr($element['desktop']['y']); ?>px);
                                        --duration-effect-moving-image-hover:<?php echo esc_attr( $element['durationEffectImageMovingHover'] )?>s;
                                --translate-effect-moving-image-hover:<?php echo esc_attr( $element['translateEffectImageMovingHover'] )?>px;
                                --rotate-hover-image: <?php echo esc_attr( $element['rotateHoverImage'] )?>deg;
                                --transition-hover-image: <?php echo esc_attr( $element['durationEffectHoverImage'] )?>s;
                                 <?php if ($element['imageLink'] !== 'none') : ?>
                                        cursor: pointer;
                                    <?php endif; ?>
                                width:<?php echo esc_attr( $element['widthImageContent'] )?>;" 
                                class="content-img-first <?php echo esc_attr( $element['animationImageMoving'])?> <?php echo esc_attr( $element['animationImageMovingHover'])?> <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>"
                               data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>" 
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
