<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

$slider_unique_class = 'slider-' . uniqid();

$directionSlider = $attributes['directionSlider'] ?? null;
$languageSlider = $attributes['languageSlider'] ?? null;
$effect = $attributes['effect'] ?? null;
$perViewSlider = $attributes['perViewSlider'] ?? null;
$perViewSliderTablet = $attributes['perViewSliderTablet'] ?? null;
$perViewSliderMobile = $attributes['perViewSliderMobile'] ?? null;
$spaceBetween = $attributes['spaceBetween'] ?? null;
$spaceBetweenTablet = $attributes['spaceBetweenTablet'] ?? null;
$spaceBetweenMobile = $attributes['spaceBetweenMobile'] ?? null;
$slidesPerGroupDesktop = $attributes['slidesPerGroupDesktop'] ?? null;
$slidesPerGroupTablet = $attributes['slidesPerGroupTablet'] ?? null;
$slidesPerGroupMobile = $attributes['slidesPerGroupMobile'] ?? null;
$slidesPerRow = $attributes['slidesPerRow'] ?? null;
$centeredSlides = $attributes['centeredSlides'] ?? null;
$initialSlide = $attributes['initialSlide'] ?? null;
$autoHeight = $attributes['autoHeight'] ?? null;
$slideHeight = $attributes['slideHeight'] ?? null;
$slideHeightTablet = $attributes['slideHeightTablet'] ?? null;
$slideHeightMobile = $attributes['slideHeightMobile'] ?? null;
$grabCursor = $attributes['grabCursor'] ?? null;
$loopMode = $attributes['loopMode'] ?? mull;
$speed = $attributes['speed'] ?? null;
$crossFade = $attributes['crossFade'] ?? null;
$shadow = $attributes['shadow'] ?? null;
$slideShadow = $attributes['slideShadow'] ?? null;;
$shadowOffset = $attributes['shadowOffset'] ?? null;
$shadowScale = $attributes['shadowScale'] ?? null;
$depth = $attributes['depth'] ?? null;
$rotate = $attributes['rotate'] ?? null;
$stretch = $attributes['stretch'] ?? null;
$modifier = $attributes['modifier'] ?? null;
$rotateCards = $attributes['rotateCards'] ?? null;
$translateX = $attributes['translateX'] ?? null;
$translateY = $attributes['translateY'] ?? null;
$translateZ = $attributes['translateZ'] ?? null;
$rotateX = $attributes['rotateX'] ?? null;
$rotateY = $attributes['rotateY'] ?? null;
$rotateZ = $attributes['rotateZ'] ?? null;
$scale = $attributes['scale'] ?? null;
$opacity = $attributes['opacity'] ?? null;
$nextTranslateX = $attributes['nextTranslateX'] ?? null;
$nextTranslateY = $attributes['nextTranslateY'] ?? null;
$nextTranslateZ = $attributes['nextTranslateZ'] ?? null;
$nextRotateX = $attributes['nextRotateX'] ?? null;
$nextRotateY = $attributes['nextRotateY'] ?? null;
$nextRotateZ = $attributes['nextRotateZ'] ?? null;
$nextScale = $attributes['nextScale'] ?? null;
$nextOpacity = $attributes['nextOpacity'] ?? null;
$navigation = $attributes['navigation'] ?? null;
if ($navigation === true) {
    $navigationIcons = $attributes['navigationIcons'] ?? null;
    $navigationPosition = $attributes['navigationPosition'] ?? null;
    $navColor = $attributes['navColor'] ?? null;
    $navColorHover = $attributes['navColorHover'] ?? null;
    $navBackgroundColor = $attributes['navBackgroundColor'] ?? null;
    $navBackgroundColorHover = $attributes['navBackgroundColorHover'] ?? null;
    $navBorderColor = $attributes['navBorderColor'] ?? null;
    $navBorderColorHover = $attributes['navBorderColorHover'] ?? null;
    $sizeNav = $attributes['sizeNav'] ?? null;
    $paddingNav = $attributes['paddingNav'] ?? null;
    $paddingNavLeft = $attributes['paddingNavLeft'] ?? null;
    $sizeBorderNav = $attributes['sizeBorderNav'] ?? null;
    $radiusBorderNav = $attributes['radiusBorderNav'] ?? null;
    $offSetTopNav = $attributes['offSetTopNav'] ?? null;
    $offSetSidesNav = $attributes['offSetSidesNav'] ?? null;
    $hideNavigation = $attributes['hideNavigation'] ?? null;
    $navigationTablet = $attributes['navigationTablet'] ?? null;
    $navigationMobile = $attributes['navigationMobile'] ?? null;
    $navGap = $attributes['navigationGap'] ?? null;
} else {
    $navigationIcons = null;
    $navColor = null;
    $navColorHover = null;
    $navBackgroundColor = null;
    $navBackgroundColorHover = null;
    $navBorderColor = null;
    $navBorderColorHover = null;
    $sizeNav = null;
    $paddingNav = null;
    $paddingNavLeft = null;
    $sizeBorderNav = null;
    $radiusBorderNav = null;
    $offSetTopNav = null;
    $offSetSidesNav = null;
    $hideNavigation = null;
    $navigationTablet = null;
    $navigationMobile = null;
    $navigationPosition = null;
    $navGap = null;
};
$paginationEnable = $attributes['paginationEnable'] ?? null;
if ($paginationEnable === true) {
    $bulletInactivityColor = $attributes['bulletInactivityColor'] ?? null;
    $bulletColor = $attributes['bulletColor'] ?? null;
    $positionPagination = $attributes['positionPagination'] ?? null;
    $opacityPagination = $attributes['opacityPagination'] ?? null;
    $opacityInactivePagination = $attributes['opacityInactivePagination'] ?? null;
    $widthPagination = $attributes['widthPagination'] ?? null;
    $heightPagination = $attributes['heightPagination'] ?? null;
    $widthPaginationActive = $attributes['widthPaginationActive'] ?? null;
    $heightPaginationActive = $attributes['heightPaginationActive'] ?? null;
    $radiusPagination = $attributes['radiusPagination'] ?? null;
    $gapPagination = $attributes['gapPagination'] ?? null;
    $fontSizePagination = $attributes['fontSizePagination'] ?? null;
    $heightBarPagination = $attributes['heightBarPagination'] ?? null;
    $typePagination = $attributes['typePagination'] ?? null;
    $clickPagination = $attributes['clickPagination'] ?? null;
    $hidePagination = $attributes['hidePagination'] ?? null;
    $dynamicPagination = $attributes['dynamicPagination'] ?? null;
    $dynamicMainPagination = $attributes['dynamicMainPagination'] ?? null;
} else {
    $bulletInactivityColor = null;
    $bulletColor = null;
    $positionPagination = null;
    $opacityPagination = null;
    $opacityInactivePagination = null;
    $widthPagination = null;
    $heightPagination = null;
    $widthPaginationActive = null;
    $heightPaginationActive = null;
    $radiusPagination = null;
    $gapPagination = null;
    $fontSizePagination = null;
    $heightBarPagination = null;
    $typePagination = null;
    $clickPagination = null;
    $hidePagination = null;
    $dynamicPagination = null;
    $dynamicMainPagination = null;
};
$progressbarOpposite = $attributes['progressbarOpposite'] ?? null;
$autoplay = $attributes['autoplay'] ?? null;
$autoplaySpeed = $attributes['autoplaySpeed'] ?? null;
$disableOnInteraction = $attributes['disableOnInteraction'] ?? null;
$pauseOnMouseEnter = $attributes['pauseOnMouseEnter'] ?? null;
$reverseDirection = $attributes['reverseDirection'] ?? null;
$stopOnLastSlide = $attributes['stopOnLastSlide'] ?? null;
$scrollbar = $attributes['scrollbar'] ?? null;
if ($scrollbar === true) {
    $scrollBarColor = $attributes['scrollBarColor'] ?? null;
    $thumbColor = $attributes['thumbColor'] ?? null;
    $positionScrollbar = $attributes['positionScrollbar'] ?? null;
    $heightScrollbar = $attributes['heightScrollbar'] ?? null;
    $radiusScrollbar = $attributes['radiusScrollbar'] ?? null;
    $hideScrollbar = $attributes['hideScrollbar'] ?? null;
    $dragScrollbar = $attributes['dragScrollbar'] ?? null;
    $releaseScrollbar = $attributes['releaseScrollbar'] ?? null;
} else {
    $scrollBarColor = null;
    $thumbColor = null;
    $positionScrollbar = null;
    $heightScrollbar = null;
    $radiusScrollbar = null;
    $hideScrollbar = null;
    $dragScrollbar = null;
    $releaseScrollbar = null;
};
$autoplayProgress = $attributes['autoplayProgress'] ?? null;
$autoplayProgressColor = $attributes['autoplayProgressColor'] ?? null;
$autoplayProgressPosition = $attributes['autoplayProgressPosition'] ?? null;
$freeMode = $attributes['freeMode'] ?? null;
$stickyFreeMode = $attributes['stickyFreeMode'] ?? null;
$momentumFreeMode = $attributes['momentumFreeMode'] ?? null;
$momentumBounceFreeMode = $attributes['momentumBounceFreeMode'] ?? null;
$momentumBounceRatioFreeMode = $attributes['momentumBounceRatioFreeMode'] ?? null;
$momentumRatioFreeMode = $attributes['momentumRatioFreeMode'] ?? null;
$momentumVelocityRatioFreeMode = $attributes['momentumVelocityRatioFreeMode'] ?? null;
$keyboard = $attributes['keyboard'] ?? null;
$viewPortKeyboard = $attributes['viewPortKeyboard'] ?? null;
$upKeyboard = $attributes['upKeyboard'] ?? null;
$mousewheel = $attributes['mousewheel'] ?? null;
$forceToAxis = $attributes['forceToAxis'] ?? null;
$invert = $attributes['invert'] ?? null;
$releaseOnEdges = $attributes['releaseOnEdges'] ?? null;
$sensitivity = $attributes['sensitivity'] ?? null;
$contentType = $attributes['contentType'] ?? null;
$overflow = $attributes['overflow'] ?? null;
$filter = $attributes['filter'] ?? null;
if ($filter !== 'none') {
    $colorOneEffect = $attributes['colorOneEffect'] ?? null;
    $colorTwoEffect = $attributes['colorTwoEffect'] ?? null;
    $colorThreeEffect = $attributes['colorThreeEffect'] ?? null;
} else {
    $colorOneEffect = null;
    $colorTwoEffect = null;
    $colorThreeEffect = null;
}
$mouseEffect = $attributes['mouseEffect'] ?? 'none';
if ($mouseEffect !== 'none') {
    $colorEffectStart = $attributes['colorEffectStart'] ?? null;
    $colorEffectEnd = $attributes['colorEffectEnd'] ?? null;
    $colorEffectMiddle = $attributes['colorEffectMiddle'] ?? null;
    $firstColorLiquid = $attributes['firstColorLiquid'] ?? null;
    $rangeVapore = $attributes['rangeVapore'] ?? null;
    $secondColorLiquid = $attributes['secondColorLiquid'] ?? null;
    $thirdColorLiquid = $attributes['thirdColorLiquid'] ?? null;
    $transitionParalaxMouse = $attributes['transitionParalaxMouse'] ?? null;
};
$sliderMarginTop = $attributes['sliderMarginTop'] ?? null;
$sliderMarginBottom = $attributes['sliderMarginBottom'] ?? null;
$backgroundColor = $attributes['backgroundColor'] ?? null;
$backgroundImage = $attributes['backgroundImage'] ?? null;
$fitImage = $attributes['fitImage'] ?? 'cover';
$focalPoint = $attributes['focalPoint'] ?? ['x' => 0.5, 'y' => 0.5];
$backgroundHorizontalPadding = $attributes['backgroundHorizontalPadding'] ?? null;
$backgroundVerticalPadding = $attributes['backgroundVerticalPadding'] ?? null;
$backgroundHorizontalPaddingTablet = $attributes['backgroundHorizontalPaddingTablet'] ?? null;
$backgroundVerticalPaddingTablet = $attributes['backgroundVerticalPaddingTablet'] ?? null;
$backgroundHorizontalPaddingMobile = $attributes['backgroundHorizontalPaddingMobile'] ?? null;
$backgroundVerticalPaddingMobile = $attributes['backgroundVerticalPaddingMobile'] ?? null;
$includeCategories = $attributes['includeCategories'] ?? null;
$excludeCategories = $attributes['excludeCategories'] ?? null;
$order = $attributes['order'] ?? null;
$postsToShow = $attributes['postsToShow'] ?? null;
$slides = !empty($attributes['slides']) ? $attributes['slides'] : [];
$scrollbarTop = $positionScrollbar === 'top' ? '4px' : 'auto';
$scrollbarBottom = $positionScrollbar === 'bottom' ? '4px' : 'auto';
$positionPost = $attributes['positionPost'] ?? 'top';
$layoutPost = $attributes['layoutPost'] ?? 'vertical-layout';
$backgroundHorizontalPaddingPost = $attributes['backgroundHorizontalPaddingPost'] ?? 0;
$backgroundVerticalPaddingPost = $attributes['backgroundVerticalPaddingPost'] ?? 0;
$gapItemsPost = $attributes['gapItemsPost'] ?? 0;
$layoutWrapPost = $attributes['layoutWrapPost'] ?? 'wrap';
$contentWidthPost = $attributes['contentWidthPost'] ?? 1200;
$enableContentWidthPost = $attributes['enableContentWidthPost'] ?? false;
$contentWidthSlidePost = $attributes['contentWidthSlidePost'] ?? 1200;
$enableContentWidthSlidePost = $attributes['enableContentWidthSlidePost'] ?? false;
$justifyContentSlidePost = $attributes['justifyContentSlidePost'] ?? 'left';
$divider = $attributes['divider'] ?? 'none';
$heightDivider = $attributes['heightDivider'] ?? 150;
$widthDivider = $attributes['widthDivider'] ?? 100;
$colorDivider = $attributes['colorDivider'] ?? '#000';
$flipDivider = $attributes['flipDivider'] ?? false;
$invertDivider = $attributes['invertDivider'] ?? false;
$imageBgPost = $attributes['imageBgPost'] ?? false;
$positionDivider = $attributes['positionDivider'] ?? 'divider-top';
$imageBgPostSize = $attributes['imageBgPostSize'] ?? 'cover';
$imageBgPostRepeat = $attributes['imageBgPostRepeat'] ?? 'no-repeat';
$imageBgPostPositionX = $attributes['imageBgPostPositionX'] ?? 0;
$imageBgPostPositionY = $attributes['imageBgPostPositionY'] ?? 0;
$backgroundBorderRadius = $attributes['backgroundBorderRadius'] ?? 0;
$backgroundColorContentPost = $attributes['backgroundColorContentPost'] ?? null;
$contentPostPadding = $attributes['contentPostPadding'] ?? 0;
$contentPostBorderRadius = $attributes['contentPostBorderRadius'] ?? '';
$contentPostBorderStyle = $attributes['contentPostBorderStyle'] ?? '';
$contentPostBorderSize = $attributes['contentPostBorderSize'] ?? '';
$contentPostBorderColor = $attributes['contentPostBorderColor'] ?? '';
$backgroundBorderSize = $attributes['backgroundBorderSize'] ?? '';
$backgroundBorderColor = $attributes['backgroundBorderColor'] ?? '';
$backgroundBorderStyle = $attributes['backgroundBorderStyle'] ?? '';

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
    'slideHeightTablet' => $slideHeightTablet,
    'slideHeightMobile' => $slideHeightMobile,
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

    'paginationEnable' => $paginationEnable,

    'scrollbar' => $scrollbar,

    'progressbarOpposite' => $progressbarOpposite,
    'autoplay' => $autoplay,
    'autoplaySpeed' => $autoplaySpeed,
    'disableOnInteraction' => $disableOnInteraction,
    'pauseOnMouseEnter' => $pauseOnMouseEnter,
    'reverseDirection' => $reverseDirection,
    'stopOnLastSlide' => $stopOnLastSlide,
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
    'contentType' => $contentType,
    'overflow' => $overflow,
    'filter' => $filter,

    'sliderMarginTop' => $sliderMarginTop,
    'sliderMarginBottom' => $sliderMarginBottom,
    'backgroundColor' => $backgroundColor,
    'backgroundImage' => $backgroundImage,
    'fitImage' => $fitImage,
    'focalPoint' => $focalPoint,
    'backgroundHorizontalPadding' => $backgroundHorizontalPadding,
    'backgroundVerticalPadding' => $backgroundVerticalPadding,
    'backgroundHorizontalPaddingTablet' => $backgroundHorizontalPaddingTablet,
    'backgroundVerticalPaddingTablet' => $backgroundVerticalPaddingTablet,
    'backgroundHorizontalPaddingMobile' => $backgroundHorizontalPaddingMobile,
    'backgroundVerticalPaddingMobile' => $backgroundVerticalPaddingMobile,
    'includeCategories' => $includeCategories,
    'excludeCategories' => $excludeCategories,
    'order' => $order,
    'postsToShow' => $postsToShow,
    'positionPost' => $positionPost,
    'layoutPost' => $layoutPost,
    'backgroundHorizontalPaddingPost' => $backgroundHorizontalPaddingPost,
    'backgroundVerticalPaddingPost' => $backgroundVerticalPaddingPost,
    'gapItemsPost' => $gapItemsPost,
    'layoutWrapPost' => $layoutWrapPost,
    'contentWidthPost' => $contentWidthPost,
    'enableContentWidthPost' => $enableContentWidthPost,
    'divider' => $divider,
    'heightDivider' => $heightDivider,
    'widthDivider' => $widthDivider,
    'colorDivider' => $colorDivider,
    'flipDivider' => $flipDivider,
    'invertDivider' => $invertDivider,
    'positionDivider' => $positionDivider,
    'imageBgPost' => $imageBgPost,
    'imageBgPostSize' => $imageBgPostSize,
    'imageBgPostRepeat' => $imageBgPostRepeat,
    'imageBgPostPositionX' => $imageBgPostPositionX,
    'imageBgPostPositionY' => $imageBgPostPositionY,
    'backgroundBorderRadius' => $backgroundBorderRadius,
    'backgroundColorContentPost' => $backgroundColorContentPost,
    'contentPostPadding' => $contentPostPadding,
    'contentPostBorderRadius' => $contentPostBorderRadius,
    'contentPostBorderStyle' => $contentPostBorderStyle,
    'contentPostBorderSize' => $contentPostBorderSize,
    'contentPostBorderColor' => $contentPostBorderColor,
    'contentWidthSlidePost' => $contentWidthSlidePost,
    'enableContentWidthSlidePost' => $enableContentWidthSlidePost,
    'justifyContentSlidePost' => $justifyContentSlidePost,
    'backgroundBorderSize' => $backgroundBorderSize,
    'backgroundBorderColor' => $backgroundBorderColor,
    'backgroundBorderStyle' => $backgroundBorderStyle,

);

if ($navigation === true) {
    $swiper_attr = array_merge($swiper_attr, [
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
    ]);
}

if ($paginationEnable === true) {
    $swiper_attr = array_merge($swiper_attr, [
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
        'typePagination' => $typePagination,
        'clickPagination' => $clickPagination,
        'hidePagination' => $hidePagination,
        'dynamicPagination' => $dynamicPagination,
        'dynamicMainPagination' => $dynamicMainPagination,
    ]);
}

if ($scrollbar  === true) {
    $swiper_attr = array_merge($swiper_attr, [
        'hideScrollbar' => $hideScrollbar,
        'dragScrollbar' => $dragScrollbar,
        'releaseScrollbar' => $releaseScrollbar,
        'scrollBarColor' => $scrollBarColor,
        'thumbColor' => $thumbColor,
        'positionScrollbar' => $positionScrollbar,
        'heightScrollbar' => $heightScrollbar,
        'radiusScrollbar' => $radiusScrollbar,
    ]);
}
if ($filter !== 'none') {
    $swiper_attr = array_merge($swiper_attr, [
        'colorOneEffect' => $colorOneEffect,
        'colorTwoEffect' => $colorTwoEffect,
        'colorThreeEffect' => $colorThreeEffect,
    ]);
}
if ($mouseEffect !== 'none') {
    $swiper_attr = array_merge($swiper_attr, [
        'colorEffectStart' => $colorEffectStart,
        'colorEffectEnd' => $colorEffectEnd,
        'colorEffectMiddle' => $colorEffectMiddle,
        'firstColorLiquid' => $firstColorLiquid,
        'rangeVapore' => $rangeVapore,
        'secondColorLiquid' => $secondColorLiquid,
        'thirdColorLiquid' => $thirdColorLiquid,
        'transitionParalaxMouse' => $transitionParalaxMouse,
    ]);
}

$swiper_attr_encoded = esc_attr(wp_json_encode($swiper_attr));

$stylesSlider =
    'margin-top: ' . esc_attr($sliderMarginTop) . 'px; ' .
    'margin-bottom: ' . esc_attr($sliderMarginBottom) . 'px; ' .
    'border-radius: ' . esc_attr($backgroundBorderRadius) . 'px; ' .
    'border-width: ' . esc_attr($backgroundBorderSize) . 'px; ' .
    'border-color: ' . esc_attr($backgroundBorderColor) . '; ' .
    'border-style: ' . esc_attr($backgroundBorderStyle) . '; ' .
    'padding: ' . esc_attr($backgroundVerticalPadding) . 'px ' . esc_attr($backgroundHorizontalPadding) . 'px; ' .
    '--padding-tablet:' . esc_attr($backgroundVerticalPaddingTablet) . 'px ' . esc_attr($backgroundHorizontalPaddingTablet) . 'px; ' .
    '--padding-mobile:' . esc_attr($backgroundVerticalPaddingMobile) . 'px ' . esc_attr($backgroundHorizontalPaddingMobile) . 'px; ' .
    ($autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; --slide-height-tablet: ' . esc_attr($slideHeightTablet) . 'px; --slide-height-mobile: ' . esc_attr($slideHeightMobile) . 'px; ');
if ($filter !== 'none') {
    $colorOneEffect = $attributes['colorOneEffect'] ?? '';
    $colorTwoEffect = $attributes['colorTwoEffect'] ?? '';
    $colorThreeEffect = $attributes['colorThreeEffect'] ?? '';

    $stylesSlider .= '--color-one-effect: ' . esc_attr($colorOneEffect) . '; ' .
        '--color-two-effect: ' . esc_attr($colorTwoEffect) . '; ' .
        '--color-three-effect: ' . esc_attr($colorThreeEffect) . '; ';
}
if ($backgroundImage) {
    $stylesSlider .= 'background-image: url(' . esc_url($backgroundImage) . '); ';
    $stylesSlider .= 'background-position: ' . esc_attr($focalPoint['x'] * 100) . '% ' . esc_attr($focalPoint['y'] * 100) . '%; ';
    $stylesSlider .= 'background-size: ' . esc_attr($fitImage)  . '; ';
} elseif ($backgroundColor) {
    $stylesSlider .= 'background-color: ' . esc_attr($backgroundColor) . '; ';
}

$wrapper_attributes = get_block_wrapper_attributes(
    array(
        'class' => 'swiper ' . $slider_unique_class . ' slider-future swiper-container ' . $filter,
        'style' => $stylesSlider,
    )
);
?>
<div <?php echo wp_kses_data($wrapper_attributes) . ' data-swiper="' . esc_attr($swiper_attr_encoded) . '"'; ?> dir="<?php echo esc_attr($languageSlider); ?>">
    <div class="swiper-wrapper">
        <?php
        // Recupera i post inclusi ed esclusi
        $include_categories = !empty($attributes['includeCategories']) ? $attributes['includeCategories'] : [];
        $exclude_categories = !empty($attributes['excludeCategories']) ? $attributes['excludeCategories'] : [];
        $order = !empty($attributes['order']) ? $attributes['order'] : 'ASC';
        $postsToShow = !empty($attributes['postsToShow']) ? $attributes['postsToShow'] : 5;
        $exclude_post_id = get_the_ID(); // Ottieni l'ID del post corrente
        $specific_posts = !empty($attributes['specificPosts']) ? $attributes['specificPosts'] : [];
        $latest_posts = !empty($attributes['latestPosts']) ? $attributes['latestPosts'] : false;
        // Recupera i post filtrati
        $posts = slider_future_get_content('post', $include_categories, $exclude_categories, $order, $postsToShow, $exclude_post_id, $specific_posts, $latest_posts);
        if ($attributes['contentType'] === 'post-based' && !empty($posts) && is_array($posts)) : ?>
            <?php foreach ($posts as $post) : ?>
                <div class="swiper-slide">
                    <?php
                    $divider = isset($attributes['divider']) ? $attributes['divider'] : 'none';
                    $style = '';
                    if ($attributes['invertDivider'] === true && $attributes['divider'] !== 'divider-tilt' && $attributes['positionDivider'] === 'divider-top') {
                        $style .= 'transform: rotate(180deg);';
                    }
                    if ($attributes['positionDivider'] === 'divider-top') {
                        $style .= 'top: 0px;';
                    } elseif ($attributes['positionDivider'] === 'divider-bottom') {
                        $style .= 'bottom: 0px;';
                        if ($attributes['invertDivider'] === false) {
                            $style .= 'transform: rotate(180deg);';
                        }
                    }
                    ?>
                    <?php if ($attributes['divider'] !== "none"): ?>
                        <div class="divider-container" style="<?php echo esc_attr($style); ?>">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                                class="custom-divider <?php echo esc_attr($attributes['divider']); ?>"
                                style="width: calc(<?php echo esc_attr($attributes['widthDivider']); ?>% + 1.3px); height: <?php echo esc_attr($attributes['heightDivider']); ?>px;--color-divider:<?php echo esc_attr($attributes['colorDivider']); ?>;<?php if ($attributes['flipDivider'] === true): ?>transform: rotateY(180deg);<?php endif; ?>">
                                <?php if ($attributes['divider'] === "divider-wawes"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                                    : "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-curve"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                                                    : "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-curve-asymmetrical"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
                                                    : "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-triangle"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                                                    : "M1200 0L0 0 598.97 114.72 1200 0z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-triangle-asymmetrical"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                                                    : "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-tilt"): ?>
                                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-arrow"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                                                    : "M649.97 0L550.03 0 599.91 54.12 649.97 0z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-split"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"
                                                    : "M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($attributes['divider'] === "divider-book"): ?>
                                    <path d="<?php echo $attributes['invertDivider']
                                                    ? "M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
                                                    : "M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>
                            </svg>
                        </div>
                    <?php endif; ?>
                    <div class="content-content-slide-post" style="padding:<?php echo esc_attr($attributes['backgroundVerticalPaddingPost']); ?>px <?php echo esc_attr($attributes['backgroundHorizontalPaddingPost']); ?>px;
                                                                   <?php if ($attributes['imageBgPost'] === true): ?> 
                                                                   background-image:url(<?php echo esc_url($post['image']); ?>);
                                                                   background-size:<?php echo esc_attr($attributes['imageBgPostSize']); ?> ;
                                                                    background-repeat:<?php echo esc_attr($attributes['imageBgPostRepeat']); ?> ;
                                                                    background-position:<?php echo esc_attr($attributes['imageBgPostPositionX']); ?>px <?php echo esc_attr($attributes['imageBgPostPositionY']); ?>px;
                                                                   <?php endif; ?>"
                        <?php if ($mouseEffect !== 'none') : ?>
                        colorEffectStart="<?php echo esc_attr($colorEffectStart); ?>"
                        colorEffectMiddle="<?php echo esc_attr($colorEffectMiddle); ?>"
                        colorEffectEnd="<?php echo esc_attr($colorEffectEnd); ?>"
                        data-color-first-liquid="<?php echo esc_attr($firstColorLiquid) ?>"
                        data-range-vapore="<?php echo esc_attr($rangeVapore) ?>"
                        data-color-second-liquid="<?php echo esc_attr($secondColorLiquid) ?>"
                        data-color-third-liquid="<?php echo esc_attr($thirdColorLiquid) ?>"
                        data-transition-paralax-mouse="<?php echo esc_attr($transitionParalaxMouse) ?>s"
                        data-img-selected="<?php echo esc_attr($attributes['imgSelected'] ? 'true' : 'false'); ?>"
                        data-h1-selected="<?php echo esc_attr($attributes['h1Selected'] ? 'true' : 'false'); ?>"
                        data-h2-selected="<?php echo esc_attr($attributes['h2Selected'] ? 'true' : 'false'); ?>"
                        data-h3-selected="<?php echo esc_attr($attributes['h3Selected'] ? 'true' : 'false'); ?>"
                        data-h4-selected="<?php echo esc_attr($attributes['h4Selected'] ? 'true' : 'false'); ?>"
                        data-h5-selected="<?php echo esc_attr($attributes['h5Selected'] ? 'true' : 'false'); ?>"
                        data-h6-selected="<?php echo esc_attr($attributes['h6Selected'] ? 'true' : 'false'); ?>"
                        data-button-selected="<?php echo esc_attr($attributes['buttonSelected'] ? 'true' : 'false'); ?>"
                        data-span-selected="<?php echo esc_attr($attributes['spanSelected'] ? 'true' : 'false'); ?>"
                        data-p-selected="<?php echo esc_attr($attributes['pSelected'] ? 'true' : 'false'); ?>"
                        <?php endif; ?>
                        data-effect="<?php echo esc_attr($mouseEffect) ?>">
                        <?php $maxWidthPost = $attributes['enableContentWidthPost'] ? $attributes['contentWidthPost'] . 'px' : false; ?>
                        <?php $maxWidthSlidePost = $attributes['enableContentWidthSlidePost'] ? $attributes['contentWidthSlidePost'] . 'px' : false; ?>

                        <div class="max-content-post" style="max-width:<?php echo esc_attr($maxWidthSlidePost); ?>;justify-content:<?php echo esc_attr($attributes['justifyContentSlidePost']); ?>;">
                            <div class="content-slide-post <?php echo esc_attr($attributes['layoutPost']); ?> <?php echo esc_attr($attributes['positionPost']); ?>"
                                style="gap:<?php echo esc_attr($attributes['gapItemsPost']); ?>px;flex-wrap:<?php echo esc_attr($attributes['layoutWrapPost']); ?>;max-width:<?php echo esc_attr($maxWidthPost); ?>;background-color:<?php echo esc_attr($attributes['backgroundColorContentPost']); ?>;
                            padding-top:<?php echo esc_attr($contentPostPadding['top']); ?>;padding-right:<?php echo esc_attr($contentPostPadding['right']); ?>;padding-bottom:<?php echo esc_attr($contentPostPadding['bottom']); ?>;padding-left:<?php echo esc_attr($contentPostPadding['left']); ?>;
                            border-top-left-radius:<?php echo esc_attr($contentPostBorderRadius['top']); ?>;border-top-right-radius:<?php echo esc_attr($contentPostBorderRadius['right']); ?>;border-bottom-right-radius:<?php echo esc_attr($contentPostBorderRadius['bottom']); ?>;border-bottom-left-radius:<?php echo esc_attr($contentPostBorderRadius['left']); ?>;
                            border-style:<?php echo esc_attr($contentPostBorderStyle); ?>;border-color:<?php echo esc_attr($contentPostBorderColor); ?>;
                            border-width:<?php echo esc_attr($contentPostBorderSize['top']); ?> <?php echo esc_attr($contentPostBorderSize['right']); ?> <?php echo esc_attr($contentPostBorderSize['bottom']); ?> <?php echo esc_attr($contentPostBorderSize['left']); ?> ;">
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
                                <?php endif;
                                include_once __DIR__ . '/render/post/post-image.php';
                                include_once __DIR__ . '/render/post/post-title.php';
                                include_once __DIR__ . '/render/post/post-excerpt.php';
                                include_once __DIR__ . '/render/post/post-link.php';
                                include_once __DIR__ . '/render/post/post-author.php';
                                include_once __DIR__ . '/render/post/post-date.php';
                                include_once __DIR__ . '/render/post/post-categories.php';
                                include_once __DIR__ . '/render/post/post-tags.php';
                                ?>
                                <?php if (!empty($attributes['postElementsOrder'])) : ?>
                                    <?php foreach ($attributes['postElementsOrder'] as $element) : ?>
                                        <?php if (!empty($attributes['visibleElements'][$element])) : ?>
                                            <?php if ($element === 'image' && !empty($post['image'])) :
                                                slider_future_render_post_image($post, $attributes);
                                            elseif ($element === 'title' && !empty($post['title'])) :
                                                slider_future_render_post_title($post, $attributes);
                                            elseif ($element === 'excerpt' && !empty($post['excerpt'])) :
                                                slider_future_render_post_excerpt($post, $attributes);
                                            elseif ($element === 'link' && !empty($post['link'])) :
                                                slider_future_render_post_link($post, $attributes);
                                            elseif ($element === 'author' && !empty($post['author'])) :
                                                slider_future_render_post_author($post, $attributes);
                                            elseif ($element === 'date' && !empty($post['date'])) :
                                                slider_future_render_post_date($post, $attributes);
                                            elseif ($element === 'categories' && !empty($post['categories'])) :
                                                slider_future_render_post_categories($post, $attributes);
                                            elseif ($element === 'tags' && !empty($post['tags'])) :
                                                slider_future_render_post_tags($post, $attributes);
                                            endif; ?>
                                        <?php endif; ?>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                            </div>
                        </div>

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
                        <a href="<?php echo esc_url($product['link']); ?>"><?php echo esc_html__('View Product', 'slider-future'); ?></a>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>

        <?php elseif ($attributes['contentType'] === 'custom' && !empty($attributes['slides']) && is_array($attributes['slides'])) : ?>
            <?php foreach ($slides as $slide) :
                $layout_class = !empty($slide['layout']) && $slide['layout'] === 'horizontal' ? 'horizontal-layout' : 'vertical-layout';
                $background_size = !empty($slide['fit']) ? esc_attr($slide['fit']) : 'cover';
                $background_repeat = !empty($slide['repeat']) ? esc_attr($slide['repeat']) : 'no-repeat';
                $focal_point = !empty($slide['focalPoint']) ? $slide['focalPoint'] : array('x' => 0.5, 'y' => 0.5);
                $background_position = sprintf('%s%% %s%%', esc_attr($focal_point['x'] * 100), esc_attr($focal_point['y'] * 100));
            ?>
                <?php $filter = esc_attr($slide['filter'] ?? "none");
                // Link 
                $link_url = '';
                $onclick = '';
                $target_div = '_self';
                $rel_div = 'follow';
                if ($slide['link'] !== 'none') {
                    if ($slide['link'] === 'link' && !empty($slide['url'])) {
                        $link_url = esc_url($slide['url']);
                        if (!empty($slide['target'])) {
                            $target_div = esc_attr($slide['target']);
                        }
                        if ($slide['rel'] === 'nofollow') {
                            $rel_div = 'nofollow';
                        }
                        $onclick = "window.open('{$link_url}', '{$target_div}', 'rel={$rel_div}');";
                    } elseif ($slide['link'] === 'scroll-below') {
                        $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                    } elseif ($slide['link'] === 'scroll-to-id' && !empty($slide['scrollId'])) {
                        $scroll_id = esc_attr($slide['scrollId']);
                        $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                    }
                }

                ?>
                <div class="swiper-slide <?php echo esc_attr($filter); ?>"
                    <?php if ($slide['link'] !== 'none') : ?>
                    onclick="<?php echo esc_js($onclick); ?>"
                    <?php endif; ?>
                    style="<?php
                            $background_style = '';
                            if (!empty($slide['backgroundType'])) {
                                if ($slide['backgroundType'] === 'image' && !empty($slide['backgroundImage'])) {
                                    $background_style .= 'background-image: url(' . esc_url($slide['backgroundImage']) . '); ';
                                    $background_style .= 'background-size: ' . esc_attr($background_size ?? 'cover') . '; ';
                                    $background_style .= 'background-repeat: ' . esc_attr($background_repeat ?? 'no-repeat') . '; ';
                                    $background_style .= 'background-position: ' . esc_attr($background_position ?? 'center') . '; ';
                                } elseif ($slide['backgroundType'] === 'color' && !empty($slide['backgroundColor'])) {
                                    $background_style .= 'background-color: ' . esc_attr($slide['backgroundColor']) . '; ';
                                } elseif ($slide['backgroundType'] === 'gradient' && !empty($slide['backgroundGradient'])) {
                                    $background_style .= 'background-image: ' . esc_attr($slide['backgroundGradient']) . '; ';
                                }
                            }
                            // Effetto radiale
                            if (!empty($slide['enableRadialEffect']) && $slide['enableRadialEffect']) {
                                $background_style .= 'background-image: radial-gradient(circle, ' . esc_attr($slide['effectRadialColorOne'] ?? '#000') . ' 0.6px, ' . esc_attr($slide['effectRadialColorTwo'] ?? '#000') . ' 0); ';
                                $background_style .= 'background-size: ' . esc_attr($slide['rangeEffectRadial'] ?? 1) . 'px ' . esc_attr($slide['rangeEffectRadial'] ?? 1) . 'px; ';
                            }
                            // Aggiunta degli effetti di colore
                            $background_style .= '--color-one-effect-slide:' . esc_attr($slide['colorOneEffect'] ?? '#fff') . '; ';
                            $background_style .= '--color-two-effect-slide:' . esc_attr($slide['colorTwoEffect'] ?? '#fff') . '; ';
                            $background_style .= '--color-three-effect-slide:' . esc_attr($slide['colorThreeEffect'] ?? '#fff') . '; ';
                            $background_style .= ($slide['link'] !== 'none' ? 'cursor: pointer; ' : '');
                            echo esc_attr(trim($background_style));
                            ?>">
                    <?php
                    $divider = isset($slide['divider']) ? $slide['divider'] : 'none';
                    $style = '';
                    if ($slide['invertDivider'] === true && $slide['divider'] !== 'divider-tilt' && $slide['positionDivider'] === 'divider-top') {
                        $style .= 'transform: rotate(180deg);';
                    }
                    if ($slide['positionDivider'] === 'divider-top') {
                        $style .= 'top: 0px;';
                    } elseif ($slide['positionDivider'] === 'divider-bottom') {
                        $style .= 'bottom: 0px;';
                        if ($slide['invertDivider'] === false) {
                            $style .= 'transform: rotate(180deg);';
                        }
                    }
                    ?>
                    <?php if ($slide['divider'] !== "none"): ?>
                        <div class="divider-container" style="<?php echo esc_attr($style); ?>">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 1200 120"
                                preserveAspectRatio="none"
                                class="custom-divider <?php echo esc_attr($slide['divider']); ?>"
                                style="width: calc(<?php echo esc_attr($slide['widthDivider']); ?>% + 1.3px); height: <?php echo esc_attr($slide['heightDivider']); ?>px;--color-divider:<?php echo esc_attr($slide['colorDivider']); ?>;<?php if ($slide['flipDivider'] === true): ?>transform: rotateY(180deg);<?php endif; ?>">
                                <?php if ($slide['divider'] === "divider-wawes"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                                                    : "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-curve"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
                                                    : "M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-curve-asymmetrical"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M741,116.23C291,117.43,0,27.57,0,6V120H1200V6C1200,27.93,1186.4,119.83,741,116.23Z"
                                                    : "M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-triangle"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
                                                    : "M1200 0L0 0 598.97 114.72 1200 0z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-triangle-asymmetrical"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
                                                    : "M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-tilt"): ?>
                                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-arrow"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                                                    : "M649.97 0L550.03 0 599.91 54.12 649.97 0z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-split"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M600,16.8c0-8.11-8.88-13.2-19.92-13.2H0V120H1200V3.6H619.92C608.88,3.6,600,8.66,600,16.8Z"
                                                    : "M0,0V3.6H580.08c11,0,19.92,5.09,19.92,13.2,0-8.14,8.88-13.2,19.92-13.2H1200V0Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>

                                <?php if ($slide['divider'] === "divider-book"): ?>
                                    <path d="<?php echo $slide['invertDivider']
                                                    ? "M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z"
                                                    : "M1200,0H0V120H281.94C572.9,116.24,602.45,3.86,602.45,3.86h0S632,116.24,923,120h277Z"; ?>"
                                        class="shape-fill"></path>
                                <?php endif; ?>
                            </svg>
                        </div>
                    <?php endif; ?>
                    <?php
                    $enableContentWidth = esc_attr($slide['enableContentWidth'] ?? false);
                    $contentWidth = esc_attr($slide['contentWidth'] ?? 900);
                    $maxWidth = $enableContentWidth ? $contentWidth . 'px' : false;
                    $developerMode = $slide['developerMode'];
                    $backgroundVerticalPadding = esc_attr($slide['backgroundVerticalPadding'] ?? '0px');
                    $backgroundHorizontalPadding = esc_attr($slide['backgroundHorizontalPadding'] ?? '0px');
                    $backgroundBorderRadius = esc_attr($slide['backgroundBorderRadius'] ?? '0px');
                    $borderStyleSlide = esc_attr($slide['borderStyleSlide'] ?? 'none');
                    $backgroundBorderSize = esc_attr($slide['backgroundBorderSize'] ?? '0px');
                    $backgroundBorderColor = esc_attr($slide['backgroundBorderColor'] ?? '#000');
                    $gapItems = esc_attr($slide['gapItems'] ?? '0');
                    $layoutWrap = esc_attr($slide['layoutWrap'] ?? 'wrap');
                    ?>
                    <div
                        <?php if ($mouseEffect !== 'none') : ?>
                        colorEffectStart="<?php echo esc_attr($colorEffectStart); ?>"
                        colorEffectMiddle="<?php echo esc_attr($colorEffectMiddle); ?>"
                        colorEffectEnd="<?php echo esc_attr($colorEffectEnd); ?>"
                        data-color-first-liquid="<?php echo esc_attr($firstColorLiquid) ?>"
                        data-range-vapore="<?php echo esc_attr($rangeVapore) ?>"
                        data-color-second-liquid="<?php echo esc_attr($secondColorLiquid) ?>"
                        data-color-third-liquid="<?php echo esc_attr($thirdColorLiquid) ?>"
                        data-transition-paralax-mouse="<?php echo esc_attr($transitionParalaxMouse) ?>s"
                        data-img-selected="<?php echo esc_attr($attributes['imgSelected'] ? 'true' : 'false'); ?>"
                        data-h1-selected="<?php echo esc_attr($attributes['h1Selected'] ? 'true' : 'false'); ?>"
                        data-h2-selected="<?php echo esc_attr($attributes['h2Selected'] ? 'true' : 'false'); ?>"
                        data-h3-selected="<?php echo esc_attr($attributes['h3Selected'] ? 'true' : 'false'); ?>"
                        data-h4-selected="<?php echo esc_attr($attributes['h4Selected'] ? 'true' : 'false'); ?>"
                        data-h5-selected="<?php echo esc_attr($attributes['h5Selected'] ? 'true' : 'false'); ?>"
                        data-h6-selected="<?php echo esc_attr($attributes['h6Selected'] ? 'true' : 'false'); ?>"
                        data-button-selected="<?php echo esc_attr($attributes['buttonSelected'] ? 'true' : 'false'); ?>"
                        data-span-selected="<?php echo esc_attr($attributes['spanSelected'] ? 'true' : 'false'); ?>"
                        data-p-selected="<?php echo esc_attr($attributes['pSelected'] ? 'true' : 'false'); ?>"
                        <?php endif; ?>
                        data-effect="<?php echo esc_attr($mouseEffect) ?>"
                        class="content-slide-slider <?php

                                                    if (!$developerMode) {
                                                        echo ' ' . esc_attr($slide['position']) . ' ' . esc_attr($overflow) . ' ' . esc_attr($slide['layout']) . '-layout';
                                                    }
                                                    ?>" style="<?php
                                                                echo $autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; --slide-height-tablet: ' . esc_attr($slideHeightTablet) . 'px; --slide-height-mobile: ' . esc_attr($slideHeightMobile) . 'px; ';
                                                                echo 'width: 100%; ';
                                                                echo 'position: relative; ';
                                                                echo 'visibility: visible; ';
                                                                echo 'border-radius: ' . esc_attr($backgroundBorderRadius) . 'px; ';
                                                                echo 'border-style: ' . esc_attr($borderStyleSlide) . '; ';
                                                                echo 'border-width: ' . esc_attr($backgroundBorderSize) . 'px; ';
                                                                echo 'border-color: ' . esc_attr($backgroundBorderColor) . '; ';
                                                                echo 'margin: 0 auto; ';
                                                                if (!$developerMode) {
                                                                    echo 'display:' . esc_attr($slide['layoutDisplay']) .  '; ';
                                                                    echo 'flex-direction: ' . esc_attr($slide['layout'] === 'horizontal' ? 'row' : 'column') . '; ';
                                                                    echo 'text-align: center; ';
                                                                    echo 'gap: ' . esc_attr($gapItems) . 'px; ';
                                                                    echo 'padding-top: ' . esc_attr($backgroundVerticalPadding) . 'px; ';
                                                                    echo 'padding-bottom: ' . esc_attr($backgroundVerticalPadding) . 'px; ';
                                                                    echo 'padding-left: ' . esc_attr($backgroundHorizontalPadding) . 'px; ';
                                                                    echo 'padding-right: ' . esc_attr($backgroundHorizontalPadding) . 'px; ';
                                                                    echo 'max-width: ' . esc_attr($maxWidth) . '; ';
                                                                    echo 'flex-wrap: ' . esc_attr($layoutWrap) . '; ';
                                                                }
                                                                ?>">
                        <?php if ($developerMode): ?>
                            <div class="content-inner-for-slide">
                            <?php else: ?>
                                <?php
                                $inline_style = 'width:100%;
                                    display:' . esc_attr($slide['layoutDisplay']) . ';
                                    align-items:' . esc_attr($slide['layoutAlignItems']) . ';
                                    flex-wrap:' . $layoutWrap . ';
                                    height: 100%;
                                    gap:' . $gapItems . 'px;';
                                if ($slide['layoutDisplay'] === 'flex') {
                                    $inline_style .= 'flex-direction: ' . esc_attr($slide['layout']) . ';';
                                    $inline_style .= 'flex-wrap: ' . esc_attr($slide['layoutWrap'] ?? "wrap") . ';';
                                    if ($slide['layout'] === 'row') {
                                        $inline_style .= 'justify-content: ' . esc_attr($slide['layoutJustify'] ?? 'center') . ';';
                                        $inline_style .= 'align-items: ' . esc_attr($slide['layoutVerticalAlignRow'] ?? 'center') . ';';
                                    }

                                    if ($slide['layout'] === 'column') {
                                        $inline_style .= 'justify-content: ' . esc_attr($slide['layoutVerticalAlignColumn'] ?? 'center') . ';';
                                        $inline_style .= 'align-items: ' . esc_attr($slide['layoutJustifyColumn'] ?? 'center') . ';';
                                    }
                                }
                                if ($slide['layoutDisplay'] === 'grid') {
                                    if ($slide['itemGridPosition'] === 'auto') {
                                        $inline_style .= 'grid-template-columns: repeat(auto-fill, minmax(min(' . esc_attr($slide['itemGridWidth'] ?? 150) . 'px, 100%), 1fr));';
                                    }
                                    if ($slide['itemGridPosition'] === 'manual') {
                                        $inline_style .= 'grid-template-columns: repeat(' . esc_attr($slide['itemGridColumn'] ?? 5) . ', minmax(0, 1fr));';
                                    }
                                }
                                ?>
                                <div class="content-inner-for-slide" style="<?php echo esc_attr($inline_style); ?>">
                                <?php endif; ?>
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
                                <?php endif; ?>
                                <?php if (!empty($slide['backgroundType']) && $slide['backgroundType'] === 'video' && !empty($slide['backgroundVideo'])) : ?>
                                    <video src="<?php echo esc_url($slide['backgroundVideo']); ?>" autoplay muted loop style="width: 100%; object-position: <?php echo esc_attr($background_position) ?>; height: 100%; position: absolute; top: 0; left: 0; object-fit: cover; z-index: 0;"></video>
                                <?php endif; ?>
                                <?php if (!empty($slide['elements']) && is_array($slide['elements'])): ?>
                                    <?php foreach ($slide['elements'] as $element): ?>
                                        <?php
                                        include_once __DIR__ . '/render/element/text.php';
                                        include_once __DIR__ . '/render/element/image.php';
                                        include_once __DIR__ . '/render/element/button.php';
                                        include_once __DIR__ . '/render/element/icon.php';
                                        include_once __DIR__ . '/render/element/group.php';
                                        if ($element['type'] === 'title') {
                                            slider_future_render_text($element, $slide);
                                        }
                                        if ($element['type'] === 'image' && !empty($element['url'])) {
                                            slider_future_render_image($element, $slide);
                                        }
                                        if ($element['type'] === 'button') {
                                            slider_future_render_button($element, $slide);
                                        }
                                        if ($element['type'] === 'icon') {
                                            slider_future_render_icon($element, $slide);
                                        }
                                        if ($element['type'] === 'div') {
                                            slider_future_render_group($element, $slide);
                                        }
                                        ?>
                                    <?php endforeach; ?>
                                <?php endif; ?>
                                </div>
                            </div>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>

                </div>

                <div class="swiper-pagination"></div>
                <?php if ($navigation) :
                    include_once __DIR__ . '/render/navigation/nav.php';
                    slider_future_render_nav($navigationIcons, $navigationTablet, $navigationMobile, $sizeNav, $navColor, $navigationPosition, $navGap, $offSetTopNav, $offSetSidesNav);
                endif; ?>
                <div class="swiper-scrollbar"></div>
                <?php if ($autoplayProgress) : ?>
                    <div class="autoplay-progress <?php echo esc_attr($autoplayProgressPosition) ?>">
                        <svg viewBox="0 0 48 48" class="progress-circle">
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span class="progress-content"><?php echo esc_html__('0s', 'slider-future') ?></span>
                    </div>
                <?php endif; ?>
                <style>
                    .<?php echo esc_attr($slider_unique_class); ?> {
                        <?php if ($navigation): ?>--background-color-nav: <?php echo esc_attr($navBackgroundColor); ?>;
                        --border-color-nav: <?php echo esc_attr($navBorderColor); ?>;
                        --color-nav-hover: <?php echo esc_attr($navColorHover); ?> !important;
                        --background-color-nav-hover: <?php echo esc_attr($navBackgroundColorHover); ?> !important;
                        --border-color-nav-hover: <?php echo esc_attr($navBorderColorHover); ?> !important;
                        --size-nav: <?php echo esc_attr($sizeNav); ?>px;
                        --border-size-nav: <?php echo esc_attr($sizeBorderNav); ?>px;
                        --border-radius-nav: <?php echo esc_attr($radiusBorderNav); ?>%;
                        --padding-nav: <?php echo esc_attr($paddingNav); ?>px;
                        --padding-nav-left: <?php echo esc_attr($paddingNavLeft); ?>px;
                        --offset-sides-nav: <?php echo esc_attr($offSetSidesNav); ?>px;
                        <?php endif; ?>--swiper-pagination-bullet-inactive-color: <?php echo esc_attr($bulletInactivityColor); ?>;
                        --swiper-pagination-progressbar-bg-color: <?php echo esc_attr($bulletInactivityColor); ?>;
                        --swiper-pagination-color: <?php echo esc_attr($bulletColor); ?>;
                        --swiper-pagination-fraction-color: <?php echo esc_attr($bulletColor); ?>;
                        --swiper-pagination-bottom: <?php echo esc_attr($positionPagination === 'bottom' ? '8px' : 'auto'); ?>;
                        --swiper-pagination-top: <?php echo esc_attr($positionPagination === 'top' ? '8px' : 'auto'); ?>;
                        --swiper-pagination-bullet-opacity: <?php echo esc_attr($opacityPagination); ?>;
                        --swiper-pagination-bullet-inactive-opacity: <?php echo esc_attr($opacityInactivePagination); ?>;
                        --swiper-pagination-bullet-width: <?php echo esc_attr($widthPagination); ?>px;
                        --swiper-pagination-bullet-height: <?php echo esc_attr($heightPagination); ?>px;
                        --swiper-pagination-bullet-width-active: <?php echo esc_attr($widthPaginationActive); ?>px;
                        --swiper-pagination-bullet-height-active: <?php echo esc_attr($heightPaginationActive); ?>px;
                        --swiper-radius-bullet: <?php echo esc_attr($radiusPagination); ?>%;
                        --swiper-pagination-bullet-horizontal-gap: <?php echo esc_attr($gapPagination); ?>px;
                        --swiper-font-size-fraction: <?php echo esc_attr($fontSizePagination); ?>px;
                        --swiper-pagination-progressbar-size: <?php echo esc_attr($heightBarPagination); ?>px;
                        --swiper-scrollbar-bg-color: <?php echo esc_attr($scrollBarColor); ?>;
                        --swiper-scrollbar-drag-bg-color: <?php echo esc_attr($thumbColor); ?>;
                        --swiper-scrollbar-top: <?php echo esc_attr($scrollbarTop); ?>;
                        --swiper-scrollbar-bottom: <?php echo esc_attr($scrollbarBottom); ?>;
                        --swiper-scrollbar-size: <?php echo esc_attr($heightScrollbar); ?>px;
                        --swiper-scrollbar-border-radius: <?php echo esc_attr($radiusScrollbar); ?>px;
                        --swiper-autoplay-progress-color: <?php echo esc_attr($autoplayProgressColor); ?>;
                </style>
                <div class="filter-slider"></div>
    </div>