<?php

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
$rotateCards = $attributes['rotateCards']?? null;
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
    $secondColorLiquid = $attributes['secondColorLiquid'] ?? null;
    $thirdColorLiquid = $attributes['thirdColorLiquid'] ?? null;
    $transitionParalaxMouse = $attributes['transitionParalaxMouse'] ?? null;
};
$sliderMarginTop = $attributes['sliderMarginTop'] ?? null;
$sliderMarginBottom = $attributes['sliderMarginBottom'] ?? null;
$backgroundColor = $attributes['backgroundColor'] ?? null;
$backgroundHorizontalPadding = $attributes['backgroundHorizontalPadding'] ?? null;
$backgroundVerticalPadding = $attributes['backgroundVerticalPadding'] ?? null;
$includeCategories = $attributes['includeCategories'] ?? null;
$excludeCategories = $attributes['excludeCategories'] ?? null;
$order = $attributes['order'] ?? null;
$postsToShow = $attributes['postsToShow'] ?? null;
$slides = !empty($attributes['slides']) ? $attributes['slides'] : [];
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
    ...($navigation === true ? [
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
    ] : []),
    'paginationEnable' => $paginationEnable,
    ... ($paginationEnable === true ? [
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
    ] : []),
    'scrollbar' => $scrollbar,
    ...($scrollbar === true ? [
    'hideScrollbar' => $hideScrollbar,
    'dragScrollbar' => $dragScrollbar,
    'releaseScrollbar' => $releaseScrollbar,
    'scrollBarColor' => $scrollBarColor,
    'thumbColor' => $thumbColor,
    'positionScrollbar' => $positionScrollbar,
    'heightScrollbar' => $heightScrollbar,
    'radiusScrollbar' => $radiusScrollbar,
    ] : []),
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
    ...($filter !== 'none' ? [
        'colorOneEffect' => $colorOneEffect,
        'colorTwoEffect' => $colorTwoEffect,
        'colorThreeEffect' => $colorThreeEffect,
    ] : []),
    ...($mouseEffect !== 'none' ? [
        'colorEffectStart' => $colorEffectStart,
        'colorEffectEnd' => $colorEffectEnd,
        'colorEffectMiddle' => $colorEffectMiddle,
        'firstColorLiquid' => $firstColorLiquid,
        'secondColorLiquid' => $secondColorLiquid,
        'thirdColorLiquid' => $thirdColorLiquid,
        'transitionParalaxMouse' => $transitionParalaxMouse,
    ] : []),
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

$stylesSlider = 
          'margin-top: ' . esc_attr($sliderMarginTop) . 'px; ' .
          'margin-bottom: ' . esc_attr($sliderMarginBottom) . 'px; ' .
          'background-color: ' . esc_attr($backgroundColor) . '; ' .
          ($autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; ');
if ($filter !== 'none') {
    $colorOneEffect = $attributes['colorOneEffect'] ?? '';
    $colorTwoEffect = $attributes['colorTwoEffect'] ?? '';
    $colorThreeEffect = $attributes['colorThreeEffect'] ?? '';

    $stylesSlider .= '--color-one-effect: ' . esc_attr($colorOneEffect) . '; ' .
                     '--color-two-effect: ' . esc_attr($colorTwoEffect) . '; ' .
                     '--color-three-effect: ' . esc_attr($colorThreeEffect) . '; ';
}

$wrapper_attributes = get_block_wrapper_attributes(
    array(
        'class' => 'swiper ' . $slider_unique_class . ' slider-builder swiper-container ' . $filter ,
        'style' => $stylesSlider,
    )
);
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
            
            <?php $filter = esc_attr($slide['filter'] ?? "none"); // Custom content rendering starts here ?>
            <div class="swiper-slide <?php echo $filter; ?>"
                style="<?php 
                    // Inizializzazione delle variabili di stile
                    $background_style = '';
                    if (!empty($slide['backgroundType'])) {
                        if ($slide['backgroundType'] === 'image' && !empty($slide['backgroundImage'])) {
                            $background_style .= 'background-image: url(' . esc_url($slide['backgroundImage']) . '); ';
                            $background_style .= 'background-size: ' . esc_attr($background_size ?? 'cover') . '; ';
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
                    echo trim($background_style); 
                ?>"
            >
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
                    data-color-first-liquid="<?php echo esc_attr($firstColorLiquid)?>"
                    data-color-second-liquid="<?php echo esc_attr($secondColorLiquid)?>"
                    data-color-third-liquid="<?php echo esc_attr($thirdColorLiquid)?>"
                    data-transition-paralax-mouse="<?php echo esc_attr($transitionParalaxMouse)?>s"
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
                    <?php endif; ?>
                    data-effect="<?php echo esc_attr($mouseEffect)?>" 
                    class="content-slide-slider <?php 
                    
                    if (!$developerMode) {
                        echo ' ' . esc_attr($slide['position']) . ' ' . esc_attr($overflow) . ' ' . esc_attr($slide['layout']) . '-layout';
                    }
                ?>"  style="<?php 
                    echo $autoHeight ? 'height: auto; ' : 'height: ' . esc_attr($slideHeight) . 'px; ';
                    echo 'width: 100%; ';
                    echo 'position: relative; ';
                    echo 'visibility: visible; ';
                    echo 'border-radius: ' . $backgroundBorderRadius . 'px; ';
                    echo 'border-style: ' . $borderStyleSlide . '; ';
                    echo 'border-width: ' . $backgroundBorderSize. 'px; ';
                    echo 'border-color: ' . $backgroundBorderColor . '; ';
                    echo 'margin: 0 auto; ';
                    if (!$developerMode) {
                        echo 'display:'. esc_attr($slide['layoutDisplay']) .  '; ';
                        echo 'flex-direction: ' . esc_attr($slide['layout'] === 'horizontal' ? 'row' : 'column') . '; ';
                        echo 'text-align: center; ';
                        echo 'gap: ' . $gapItems. 'px; ';
                        echo 'padding-top: ' . $backgroundVerticalPadding . 'px; ';
                        echo 'padding-bottom: ' . $backgroundVerticalPadding . 'px; ';
                        echo 'padding-left: ' . $backgroundHorizontalPadding . 'px; ';
                        echo 'padding-right: ' . $backgroundHorizontalPadding. 'px; ';
                        echo 'max-width: ' . esc_attr($maxWidth) . '; ';
                        echo 'flex-wrap: ' . $layoutWrap . '; ';
                    }
                ?>">
                <?php if ($developerMode): ?>
                    <div class="content-inner-for-slide">
                    <?php else: ?>
                    <div class="content-inner-for-slide <?php echo esc_attr($slide['position'])?> <?php echo esc_attr($slide['layout'])?>-layout" style="width:100%;display:<?php echo esc_attr($slide['layoutDisplay'])?>;align-items:<?php echo esc_attr($slide['layoutAlignItems'])?>;flex-wrap:<?php echo $layoutWrap;?>;--justify-content-responsive-slide:<?php echo esc_attr($slide['layoutAlignResponsive'])?>;gap:<?php echo $gapItems;?>px;">
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
                    <div class="top-title wow fadeInUp" onmousemove="color_hover(event)"></div>
                <?php endif; ?>
                <?php if (!empty($slide['backgroundType']) && $slide['backgroundType'] === 'video' && !empty($slide['backgroundVideo'])) : ?>
                    <video src="<?php echo esc_url($slide['backgroundVideo']); ?>" autoplay muted loop style="width: 100%; object-position: <?php echo esc_attr( $background_position )?>; height: 100%; position: absolute; top: 0; left: 0; object-fit: cover; z-index: 0;"></video>
                <?php endif; ?>
                <?php if (!empty($slide['elements']) && is_array($slide['elements'])): ?>
                    <?php foreach ($slide['elements'] as $element): ?>

                        <?php if ($element['type'] === 'title' && !empty($element['text'])): // Text element
                           $fontStyle = esc_attr($element['fontStyle']['fontStyle'] ?? 'normal');
                           $fontWeight = esc_attr($element['fontStyle']['fontWeight'] ?? 'normal');
                           $textDecoration = esc_attr($element['fontStyle']['textDecoration'] ?? 'none');
                           $marginTop = esc_attr($element['marginTitle']['top'] ?? '0px');
                           $marginRight = esc_attr($element['marginTitle']['right'] ?? '0px');
                           $marginBottom = esc_attr($element['marginTitle']['bottom'] ?? '0px');
                           $marginLeft = esc_attr($element['marginTitle']['left'] ?? '0px');
                           $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                           $paddingTop = esc_attr($element['paddingTitle']['top'] ?? '0px');
                           $paddingRight = esc_attr($element['paddingTitle']['right'] ?? '0px');
                           $paddingBottom = esc_attr($element['paddingTitle']['bottom'] ?? '0px');
                           $paddingLeft = esc_attr($element['paddingTitle']['left'] ?? '0px');
                           $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
                           $borderSizeTop = esc_attr($element['backgroundBorderSize']['top'] ?? '0px');
                           $borderSizeRight = esc_attr($element['backgroundBorderSize']['right'] ?? '0px');
                           $borderSizeBottom = esc_attr($element['backgroundBorderSize']['bottom'] ?? '0px');
                           $borderSizeLeft = esc_attr($element['backgroundBorderSize']['left'] ?? '0px');
                           $borderSize = "$borderSizeTop $borderSizeRight $borderSizeBottom $borderSizeLeft";
                           $fontSize = esc_attr($element['fontSize']);
                           $fontSizeTablet = esc_attr($element['fontSizeTablet']);
                           $fontSizeMobile = esc_attr($element['fontSizeMobile']);
                           $color = esc_attr($element['textColor'] );
                           $backgroundColor = esc_attr($element['backgroundColor'] ?? '');
                           $textAlign = esc_attr($element['textAlign'] ?? 'center');
                           $letterSpacing = esc_attr($element['letterSpacing'] ?? 0);
                           $borderStyle = esc_attr($element['borderStyle'] ?? 'none');
                           $backgroundBorderColor = esc_attr($element['backgroundBorderColor'] ?? '#000');
                           $fontFamily = esc_attr($element['fontFamily'] ?? 'Arial, sans-serif');
                           $lineHeight = esc_attr($element['lineHeight'] ?? 1.5);
                           $textWriteMode = esc_attr($element['textWriteMode'] ?? 'horizontal-tb');
                           $textOrientation = esc_attr($element['textOrientation'] ?? 'mixed');
                           $rotate = esc_attr($element['rotate'] ?? 0);
                           $borderRadiusTop = esc_attr($element['backgroundBorderRadius']['top'] ?? '0px');
                           $borderRadiusRight = esc_attr($element['backgroundBorderRadius']['right'] ?? '0px');
                           $borderRadiusBottom = esc_attr($element['backgroundBorderRadius']['bottom'] ?? '0px');
                           $borderRadiusLeft = esc_attr($element['backgroundBorderRadius']['left'] ?? '0px');
                           $borderRadius = "$borderRadiusTop $borderRadiusRight $borderRadiusBottom $borderRadiusLeft";
                           $zIndexTitle = esc_attr($element['zIndexTitle'] ?? 1);
                            $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === "bold" ? "bold" : (isset($element['fontWeight']) ? esc_attr($element['fontWeight']) : "normal");
                            $stylesTitle = 'font-size: clamp(' . $fontSizeMobile . 'px,' . $fontSizeTablet . 'vw, ' . $fontSize . 'px); '
                            . 'color: ' . $color . '; '
                            . 'background-color: ' . $backgroundColor . '; '
                            . 'text-align: ' . $textAlign . '; '
                            . 'letter-spacing: ' . $letterSpacing . 'px; '
                            . 'font-style: ' . $fontStyle . '; '
                            . 'font-weight: ' . $isBold . '; '
                            . 'text-decoration: ' . $textDecoration . '; '
                            . 'line-height: ' . $lineHeight . '; '
                            . 'font-family: ' . $fontFamily . '; '
                            . 'margin: ' . $margin . ';'
                            . 'padding: ' . $padding . ';'
                            . 'border-width: ' . $borderSize  . ';'
                            . 'border-style: ' . $borderStyle . ';'
                            . 'border-color: ' . $backgroundBorderColor. ';'
                            . 'writing-mode: ' . $textWriteMode . ';'
                            . 'text-orientation: ' . $textOrientation . ';'
                            . 'transform: rotate(' . $rotate . 'deg);'
                            . 'z-index: ' . $zIndexTitle . ';'
                            . 'border-radius: ' . $borderRadius . ';';
                            if (!empty($element['enableTextShadow'])) {
                                $textShadowX = esc_attr($element['textShadowX'] ?? 0);
                                $textShadowY = esc_attr($element['textShadowY'] ?? 0);
                                $textShadowBlur = esc_attr($element['textShadowBlur'] ?? 0);
                                $colorTextShadow = esc_attr($element['colorTextShadow'] ?? '#000000');
                                $stylesTitle .= 'text-shadow: ' . $textShadowX . 'px ' 
                                                . $textShadowY . 'px ' 
                                                . $textShadowBlur . 'px ' 
                                                . $colorTextShadow . ';';
                            }                            
                            if (!empty($element['enableBoxShadow'])) {
                                $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
                                $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
                                $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
                                $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
                                $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
                                $stylesTitle .= 'box-shadow: ' . $boxShadowX . 'px ' 
                                                . $boxShadowY . 'px ' 
                                                . $boxShadowBlur . 'px ' 
                                                . $boxShadowSpread . 'px ' 
                                                . $colorBoxShadow . ';';
                            }
                            if (!empty($element['enableStroke'])) {
                                $strokeWidth = esc_attr($element['stroke'] ?? 0);
                                $strokeColor = esc_attr($element['colorStroke'] ?? '#000000');
                                $stylesTitle .= '-webkit-text-stroke-width: ' . $strokeWidth . 'px;'
                                             . '-webkit-text-stroke-color: ' . $strokeColor . ';';
                            }
                            $tag = esc_attr($element['elementTitle'] ?? 'h3');
                            $enableDesktop = $element['enableDesktop'] ?? true; 
                            $enableTablet = $element['enableTablet'] ?? true; 
                            $enableMobile = $element['enableMobile'] ?? true; 
                            $desktopClass = $enableDesktop ? 'desktop-title-visible' : 'desktop-title-hidden';
                            $tabletClass = $enableTablet ? 'tablet-title-visible' : 'tablet-title-hidden';
                            $mobileClass = $enableMobile ? 'mobile-title-visible' : 'mobile-title-hidden';
                        if ($slide['developerMode']) : ?>         
                        <div class="content-content-slide-absolute"
                            style="
                                position: absolute;"
                            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                        >
                        <?php endif; ?>
                        <?php 
                            $widthTitle = $element['widthTitle'] ?? '100%'; 
                            $widthCustomTitle = $element['widthCustomTitle'] ?? '100'; 
                            $blendMode = $element['blendMode'] ?? 'normal';
                            ?>
                        <div
                            style="width: <?php echo esc_attr($widthTitle) === 'custom' ? esc_attr($widthCustomTitle) . '%' : esc_attr($widthTitle); ?>; mix-blend-mode: <?php echo esc_attr($blendMode); ?>;"
                            class="content-title-slide <?php echo esc_attr($desktopClass); ?> <?php echo esc_attr($tabletClass); ?> <?php echo esc_attr($mobileClass); ?>"
                        >
                        <<?php
                            echo esc_attr($tag);
                            ?>
                            class="title-slide"
                            <?php
                            $link_start = '';
                            $link_end = '';
                            $target = esc_attr($element['linkTarget'] ?? '_self'); 
                            $rel = esc_attr($element['linkRel'] ?? 'follow');
                            if ($element['textLink'] === 'link' && !empty($element['linkUrl'])) {
                                $link_start = '<a href="' . esc_url($element['linkUrl']) . '" target="' . $target . '" rel="' . $rel . '">';
                                $link_end = '</a>';
                            } elseif ($element['textLink'] === 'scroll-below') {
                                $link_start = '<a href="#" onclick="window.scrollBy({ top: window.innerHeight, behavior: \'smooth\' }); return false;">';
                                $link_end = '</a>';
                            } elseif ($element['textLink'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
                                $link_start = '<a href="#" onclick="document.getElementById(\'' . esc_attr($element['scrollToId']) . '\').scrollIntoView({ behavior: \'smooth\' }); return false;">';
                                $link_end = '</a>';
                            }
                            ?>
                            style="<?php echo esc_attr($stylesTitle); ?>"
                            data-font-family="<?php echo esc_attr($fontFamily); ?>"
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
                            <?php if ($element['effectIn'] !== 'none') : ?>
                                data-effect-in="<?php echo esc_attr($element['effectIn'] ?? ''); ?>"
                                data-duration="<?php echo esc_attr($element['duration'] ?? 800); ?>"
                                data-delay-in="<?php echo esc_attr($element['delay'] ?? 0); ?>"
                                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? 0); ?>"
                                data-easing-in="<?php echo esc_attr($element['easing'] ?? 'linear'); ?>"
                                data-direction-in="<?php echo esc_attr($element['direction'] ?? 'normal'); ?>"
                                data-loop-in="<?php echo esc_attr($element['loop'] ?? '1'); ?>"
                                data-opacity-in-from="<?php echo esc_attr($element['opacityFrom'] ?? 0); ?>"
                                data-opacity-in-to="<?php echo esc_attr($element['opacityTo'] ?? 1); ?>"
                                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? 100); ?>"
                                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? 0); ?>"
                                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? 0); ?>"
                                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? 0); ?>"
                                data-stagger="<?php echo esc_attr($element['stagger'] ?? 80); ?>"
                                data-effect-split="<?php echo esc_attr($element['textSplitEffect'] ?? ''); ?>"
                                data-direction-block="<?php echo esc_attr($element['directionBlock'] ?? 'right'); ?>"
                                data-color-block="<?php echo esc_attr($element['colorBlockEffect'] ?? '#000'); ?>"
                                data-rotate-in-from="<?php echo esc_attr($element['rotateFrom'] ?? 0); ?>"
                                data-rotate-in-to="<?php echo esc_attr($element['rotateTo'] ?? 0); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($element['rotateXFrom'] ?? 0); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($element['rotateXTo'] ?? 0); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($element['rotateYFrom'] ?? 0); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($element['rotateYTo'] ?? 0); ?>"
                                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? 0 ); ?>"
                                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? 1 ); ?>"
                                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? 0); ?>"
                                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? 1); ?>"
                                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? 0); ?>"
                                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? 1); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? 'scale'); ?>"
                                data-text-color="<?php echo esc_attr($element['textColor'] ?? ''); ?>"
                            <?php endif; 
                                if ($element['effectHover'] !== 'none') : ?>
                                data-text-color-hover="<?php echo esc_attr($element['textColorHover'] ?? ''); ?>"
                                data-effect-hover="<?php echo esc_attr($element['effectHover'] ?? ''); ?>"
                                data-scale-hover="<?php echo esc_attr($element['scaleHover'] ?? 1); ?>"
                                data-opacity-hover="<?php echo esc_attr($element['opacityHover'] ?? 1); ?>"
                                data-filter-hover="<?php echo esc_attr($element['filterHover'] ?? 0); ?>"
                                data-rotate-hover="<?php echo esc_attr($element['rotateHover'] ?? 0); ?>"
                                data-rotate-x-hover="<?php echo esc_attr($element['rotateXHover'] ?? 0); ?>"
                                data-rotate-y-hover="<?php echo esc_attr($element['rotateYHover'] ?? 0); ?>"
                                data-skew-x-hover="<?php echo esc_attr($element['skewXHover'] ?? 0); ?>"
                                data-skew-y-hover="<?php echo esc_attr($element['skewYHover'] ?? 0); ?>"
                                data-start-x-hover="<?php echo esc_attr($element['startXHover'] ?? 100); ?>"
                                data-start-y-hover="<?php echo esc_attr($element['startYHover'] ?? 0); ?>"
                                data-scale-custom-effect-hover="<?php echo esc_attr($element['scaleTypeHover'] ?? 'scale'); ?>"
                                data-duration-hover="<?php echo esc_attr($element['durationHover'] ?? 800); ?>"
                                data-easing-hover="<?php echo esc_attr($element['easingHover'] ?? 'linear'); ?>"
                            <?php endif; ?>
                            >
                            <?php
                           echo $link_start; ?>
                                <?php  echo esc_attr($element['text']) ?>
                                <?php echo $link_end; ?>
                            </<?php echo esc_attr($tag); ?>>
                        </div>
                    
                        <?php if ($slide['developerMode']) : ?>    
                        </div>
                        <?php endif; ?>
                        <?php endif; ?>

                        <?php if ($element['type'] === 'image' && !empty($element['url'])): // Image Element
                            $marginTop = esc_attr($element['marginImage']['top'] ?? '0px');
                            $marginRight = esc_attr($element['marginImage']['right'] ?? '0px');
                            $marginBottom = esc_attr($element['marginImage']['bottom'] ?? '0px');
                            $marginLeft = esc_attr($element['marginImage']['left']?? '0px');
                            $paddingTop = esc_attr($element['paddingImage']['top'] ?? '0px');
                            $paddingRight = esc_attr($element['paddingImage']['right'] ?? '0px');
                            $paddingBottom = esc_attr($element['paddingImage']['bottom'] ?? '0px');
                            $paddingLeft = esc_attr($element['paddingImage']['left']?? '0px');
                            $style = ""; 
                             if (!empty($element['enableBoxShadowImage'])) {
                                $boxShadowXImage = esc_attr($element['boxShadowXImage'] ?? 0);
                                $boxShadowYImage = esc_attr($element['boxShadowYImage'] ?? 0);
                                $boxShadowBlurImage = esc_attr($element['boxShadowBlurImage'] ?? 0);
                                $boxShadowSpreadImage = esc_attr($element['boxShadowSpreadImage'] ?? 0);
                                $colorShadowImage = esc_attr($element['colorShadowImage'] ?? '#000000');
                                $style .= 'box-shadow: ' . $boxShadowXImage . 'px ' 
                                                . $boxShadowYImage . 'px ' 
                                                . $boxShadowBlurImage . 'px ' 
                                                . $boxShadowSpreadImage . 'px ' 
                                                . $colorShadowImage . ';';
                            }
                            $backgroundBorderSizeImage = esc_attr($element['backgroundBorderSizeImage'] ?? 0);
                            $backgroundBorderColorImage = esc_attr($element['backgroundBorderColorImage'] ?? '#000');
                            $backgroundBorderRadiusImage = esc_attr($element['backgroundBorderRadiusImage'] ?? 0);
                            $backgroundColorImage = esc_attr($element['backgroundColorImage'] ?? '');
                            $spikeLeftWidth = esc_attr($element['spikeLeftWidth'] ?? 0);
                            $spikeRightWidth = esc_attr($element['spikeRightWidth'] ?? 0);
                            $imageColorHover = esc_attr($element['imageColorHover'] ?? '');
                            $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                            $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
                            $style .= "
                                    border-style: " . esc_attr($element['borderStyleImage']) . ";
                                    border-width: " . $backgroundBorderSizeImage . "px;
                                    border-color: " . $backgroundBorderColorImage . ";
                                    border-radius: " . $backgroundBorderRadiusImage . "px;
                                    padding: " . $padding . ";
                                    background-color: " . $backgroundColorImage .";
                                    --spike-width:" . $spikeLeftWidth . "%;
                                    --spike-width-right: " . $spikeRightWidth . "%;
                                    --color-hover-image: " . $imageColorHover . ";
                                    margin: " . $margin . ";
                                    "; 
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
                            if ($element['widthImage'] !== 'auto' || $element['heightImage'] !== 'auto') {
                                $style .= " object-fit: " . esc_attr($element['fit']) . ";"; 
                            }
                            $desktopClassImage = $element['enableDesktopImage'] ? 'desktop-image-visible' : 'desktop-image-hidden';
                            $tabletClassImage = $element['enableTabletImage'] ? 'tablet-image-visible' : 'tablet-image-hidden';
                            $mobileClassImage = $element['enableMobileImage'] ? 'mobile-image-visible' : 'mobile-image-hidden';
                            $link_url = '';
                            $onclick = '';
                            $linkTargetImage = '_self'; 
                            $rel_div = 'follow'; 
                            if ($element['imageLink'] !== 'none') {
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
                            $imageAlign = esc_attr($element['imageAlign'] ?? 'center');
                            $opacityImage = esc_attr($element['opacityImage'] ?? 1);
                            $rotateImage = esc_attr($element['rotateImage'] ?? 0);
                        ?>
                     <?php if ($slide['developerMode']) : ?>  
                       <div class="content-content-image-first-absolute"
                            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>" 
                            style="position: absolute; text-align:<?php echo $imageAlign;?>;"
                       >
                       <?php endif; ?> 
                       <div 
                           <?php 
                           if ($element['imageLink'] !== 'none') : ?>
                                    onclick="<?php echo $onclick; ?>"
                                <?php endif; 
                                  $zIndexImage = esc_attr($element['zIndexImage'] ?? 1);
                                ?> 
                                style="transform:rotate(<?php echo $rotateImage; ?>deg);
                                opacity:<?php echo $opacityImage; ?>; 
                                z-index:<?php echo $zIndexImage; ?>;
                
                                 <?php if ($element['imageLink'] !== 'none') : ?>
                                        cursor: pointer;
                                    <?php endif; ?>
                                width:<?php echo esc_attr( $element['widthImageContent'] )?>;
                                text-align:<?php echo $imageAlign;?>;
                                " 
                                class="content-img-first  <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>"
                                >
                            <img src="<?php echo esc_url($element['url']); ?>" alt="<?php echo esc_attr($element['alt']); ?>" class="image-first-slide image-with-mask <?php echo esc_attr( $element['blobMask'])?> <?php echo esc_attr( $element['spikeMask'])?> <?php echo esc_attr( $element['spikeMaskRight'])?>  <?php echo esc_attr( $element['imageFilter'])?>" 
                                 style="<?php echo $style; ?>" 
                                 <?php if ($element['effectIn'] !== 'none') : ?>
                                data-effect-in="<?php echo esc_attr($element['effectIn'] ?? ''); ?>"
                                data-duration="<?php echo esc_attr($element['duration'] ?? 800); ?>"
                                data-delay-in="<?php echo esc_attr($element['delay'] ?? 0); ?>"
                                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? 0); ?>"
                                data-easing-in="<?php echo esc_attr($element['easing'] ?? 'linear'); ?>"
                                data-direction-in="<?php echo esc_attr($element['direction'] ?? 'normal'); ?>"
                                data-loop-in="<?php echo esc_attr($element['loop'] ?? '1'); ?>"
                                data-opacity-in-from="<?php echo esc_attr($element['opacityFrom'] ?? 0); ?>"
                                data-opacity-in-to="<?php echo esc_attr($element['opacityTo'] ?? 1); ?>"
                                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? 100); ?>"
                                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? 0); ?>"
                                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? 0); ?>"
                                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? 0); ?>"
                                data-rotate-in-from="<?php echo esc_attr($element['rotateFrom'] ?? 0); ?>"
                                data-rotate-in-to="<?php echo esc_attr($element['rotateTo'] ?? 0); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($element['rotateXFrom'] ?? 0); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($element['rotateXTo'] ?? 0); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($element['rotateYFrom'] ?? 0); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($element['rotateYTo'] ?? 0); ?>"
                                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? 0); ?>"
                                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? 1 ); ?>"
                                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? 0); ?>"
                                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? 0); ?>"
                                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? 0); ?>"
                                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? 0); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? 'scale'); ?>"
                                data-image-color="<?php echo esc_attr($element['backgroundColorImage'] ?? ''); ?>"
                            <?php endif; 
                              if ($element['effectHover'] !== 'none') : ?>
                                data-image-color-hover="<?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>"
                                data-effect-hover="<?php echo esc_attr($element['effectHover'] ?? ''); ?>"
                                data-scale-hover="<?php echo esc_attr($element['scaleHover'] ?? 1); ?>"
                                data-opacity-hover="<?php echo esc_attr($element['opacityHover'] ?? 1); ?>"
                                data-filter-hover="<?php echo esc_attr($element['filterHover'] ?? 0); ?>"
                                data-rotate-hover="<?php echo esc_attr($element['rotateHover'] ?? 0); ?>"
                                data-rotate-x-hover="<?php echo esc_attr($element['rotateXHover'] ?? 0); ?>"
                                data-rotate-y-hover="<?php echo esc_attr($element['rotateYHover'] ?? 0); ?>"
                                data-skew-x-hover="<?php echo esc_attr($element['skewXHover'] ?? 0); ?>"
                                data-skew-y-hover="<?php echo esc_attr($element['skewYHover'] ?? 0); ?>"
                                data-start-x-hover="<?php echo esc_attr($element['startXHover'] ?? 100); ?>"
                                data-start-y-hover="<?php echo esc_attr($element['startYHover'] ?? 0); ?>"
                                data-scale-custom-effect-hover="<?php echo esc_attr($element['scaleTypeHover'] ?? 'scale'); ?>"
                                data-duration-hover="<?php echo esc_attr($element['durationHover'] ?? 800); ?>"
                                data-easing-hover="<?php echo esc_attr($element['easingHover'] ?? 'linear'); ?>"
                            <?php endif; ?>
                                />
                        </div>
                        <?php if ($slide['developerMode']) : ?>  
                        </div>
                        <?php endif; ?>
                            <?php endif; ?>

                        <?php // Button Element
                            if ($element['type'] === 'button'): 
                                $desktopClassButton = $element['enableDesktopButton'] ? 'desktop-button-visible' : 'desktop-button-hidden';
                                $tabletClassButton = $element['enableTabletButton'] ? 'tablet-button-visible' : 'tablet-button-hidden';
                                $mobileClassButton = $element['enableMobileButton'] ? 'mobile-button-visible' : 'mobile-button-hidden';
                                if ($element['buttonLink'] !== 'none') {
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
                                $defaultButtonBackgroundColor = '#ffffff';
                                $defaultWidthButton = '35';
                                $defaultHeightButton = '55';
                                $defaultButtonColorHover = '#000000';
                                $buttonStyle = '';
                                if (isset($element['buttonColor'])) {
                                    $buttonStyle .= "--color-button: " . esc_attr($element['buttonColor']) . "; ";
                                } else {
                                    $buttonStyle .= "--color-button: " . esc_attr($defaultButtonColor) . "; ";
                                }
                                if (isset($element['backgroundBorderColorButton'])) {
                                    $buttonStyle .= "--border-color-button: " . esc_attr($element['backgroundBorderColorButton']) . "; ";
                                } else {
                                    $buttonStyle .= "--border-color-button: " . esc_attr($defaultBackgroundBorderColorButton) . "; ";
                                }
                                if (isset($element['borderStyleButton'])) {
                                    $buttonStyle .= "--border-style-button: " . esc_attr($element['borderStyleButton']) . "; ";
                                } else {
                                    $buttonStyle .= "--border-style-button: " . esc_attr($defaultBorderStyleButton) . "; ";
                                }
                                if (isset($element['backgroundBorderRadiusButton'])) {
                                    $buttonStyle .= "--border-radius-button: " . esc_attr($element['backgroundBorderRadiusButton']) . "px; ";
                                } else {
                                    $buttonStyle .= "--border-radius-button: " . esc_attr($defaultBackgroundBorderRadiusButton) . "px; ";
                                }
                                if (isset($element['buttonBackgroundColor'])) {
                                    $buttonStyle .= "--background-color-button: " . esc_attr($element['buttonBackgroundColor']) . "; ";
                                } else {
                                    $buttonStyle .= "--background-color-button: " . esc_attr($defaultButtonBackgroundColor) . "; ";
                                }
                                if (isset($element['widthCustomButton'])) {
                                    $buttonStyle .= "--buttonWidth: " . esc_attr($element['widthCustomButton']) . "px; ";
                                } else {
                                    $buttonStyle .= "--buttonWidth: " . esc_attr($defaultWidthButton) . "px; ";
                                }
                                if (isset($element['heightCustomButton'])) {
                                    $buttonStyle .= "--buttonHeight: " . esc_attr($element['heightCustomButton']) . "px; ";
                                } else {
                                    $buttonStyle .= "--buttonHeight: " . esc_attr($defaultHeightButton) . "px; ";
                                }
                                if (isset($element['buttonColorHover'])) {
                                    $buttonStyle .= "--color-button-hover: " . esc_attr($element['buttonColorHover']) . "; ";
                                } else {
                                    $buttonStyle .= "--color-button-hover: " . esc_attr($defaultButtonColorHover) . "; ";
                                }
                                if (isset($element['rotateButton'])) {
                                    $buttonStyle .= "transform: rotate(" . esc_attr($element['rotateButton']) . "deg); ";
                                } else {
                                    $buttonStyle .= "transform: rotate(0deg); ";
                                }
                                $buttonStyle .= "margin: ";
                                $buttonStyle .= isset($element['marginButton']['top']) ? esc_attr($element['marginButton']['top']) : '0';
                                $buttonStyle .= " " . (isset($element['marginButton']['right']) ? esc_attr($element['marginButton']['right']) : '0') . " ";
                                $buttonStyle .= (isset($element['marginButton']['bottom']) ? esc_attr($element['marginButton']['bottom']) : '0') . " ";
                                $buttonStyle .= (isset($element['marginButton']['left']) ? esc_attr($element['marginButton']['left']) : '0') . "; ";
                                if (isset($element['durationEffectButton'])) {
                                    $buttonStyle .= "--duration-effect-button: " . esc_attr($element['durationEffectButton']) . "s; ";
                                } else {
                                    $buttonStyle .= "--duration-effect-button: 0s; ";
                                }
                                if (isset($element['delayEffectButton'])) {
                                    $buttonStyle .= "--delay-effect-button: " . esc_attr($element['delayEffectButton']) . "s; ";
                                } else {
                                    $buttonStyle .= "--delay-effect-button: 0s; ";
                                }
                                if (isset($element['interationButton'])) {
                                    $buttonStyle .= "--interation-button: " . esc_attr($element['interationButton']) . "; ";
                                } else {
                                    $buttonStyle .= "--interation-button: forwards; ";
                                }
                                if (isset($element['backgroundBorderColorHover'])) {
                                    $buttonStyle .= "--border-color-button-hover: " . esc_attr($element['backgroundBorderColorHover']) . "; ";
                                } else {
                                    $buttonStyle .= "--border-color-button-hover: #000000; ";
                                }
                                if (isset($element['borderStyleHover'])) {
                                    $buttonStyle .= "--border-style-button-hover: " . esc_attr($element['borderStyleHover']) . "; ";
                                } else {
                                    $buttonStyle .= "--border-style-button-hover: none; ";
                                }
                                if (isset($element['buttonBackgroundColorHover'])) {
                                    $buttonStyle .= "--background-color-button-hover: " . esc_attr($element['buttonBackgroundColorHover']) . "; ";
                                } else {
                                    $buttonStyle .= "--background-color-button-hover: '#FFFFFF'; ";
                                }
                                $buttonStyle .= "--border-width-button-hover-top: " . (isset($element['backgroundBorderSizeHover']['top']) ? esc_attr($element['backgroundBorderSizeHover']['top']) : '0') . "; ";
                                $buttonStyle .= "--border-width-button-hover-right: " . (isset($element['backgroundBorderSizeHover']['right']) ? esc_attr($element['backgroundBorderSizeHover']['right']) : '0') . "; ";
                                $buttonStyle .= "--border-width-button-hover-bottom: " . (isset($element['backgroundBorderSizeHover']['bottom']) ? esc_attr($element['backgroundBorderSizeHover']['bottom']) : '0') . "; ";
                                $buttonStyle .= "--border-width-button-hover-left: " . (isset($element['backgroundBorderSizeHover']['left']) ? esc_attr($element['backgroundBorderSizeHover']['left']) : '0') . "; ";
                                if (isset($element['rotateHover'])) {
                                    $buttonStyle .= "--rotate-button-hover: " . esc_attr($element['rotateHover']) . "deg; ";
                                } else {
                                    $buttonStyle .= "--rotate-button-hover: 0deg; ";
                                }
                                $buttonStyle .= "z-index: " . (isset($element['zIndexButton']) ? esc_attr($element['zIndexButton']) : '1') . "; ";
                                if (isset($element['delayTransition'])) {
                                    $buttonStyle .= "--delay-hide-seconds-button: " . esc_attr($element['delayTransition']) . "s; ";
                                } else {
                                    $buttonStyle .= "--delay-hide-seconds-button: 0s; ";
                                }
                                if ($element['buttonLink'] !== 'none') {
                                    $buttonStyle .= "cursor: pointer; ";
                                }
                                $mouseStyles = "";
                                if (isset($element['opacityButton'])) {
                                    $mouseStyles .= "opacity: " . esc_attr($element['opacityButton']) . "; ";
                                }
                                if (isset($element['opacityHover'])) {
                                    $mouseStyles .= "--opacity-button-hover: " . esc_attr($element['opacityHover']) . "; ";
                                }
                                if (isset($element['durationEffectHover'])) {
                                    $mouseStyles .= "transition: " . esc_attr($element['durationEffectHover']) . "s; ";
                                }
                                if (!empty($element['enableBoxShadow'])) {
                                    $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
                                    $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
                                    $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
                                    $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
                                    $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
                                    $mouseStyles.= 'box-shadow: ' . $boxShadowX . 'px ' 
                                                    . $boxShadowY . 'px ' 
                                                    . $boxShadowBlur . 'px ' 
                                                    . $boxShadowSpread . 'px ' 
                                                    . $colorBoxShadow . ';';
                                }
                                $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === 'bold';
                                $fontSizeButton = esc_attr($element['fontSizeButton']);
                                $fontSizeButtonTablet = esc_attr($element['fontSizeButtonTablet']);
                                $fontSizeButtonMobile = esc_attr($element['fontSizeButtonMobile']);
                                $buttonStyle3 = "";
                                if (isset($element['buttonColor'])) {
                                    $buttonStyle3 .= "color: " . esc_attr($element['buttonColor']) . "; ";
                                }
                                if (isset($element['backgroundBorderColorButton'])) {
                                    $buttonStyle3 .= "border-color: " . esc_attr($element['backgroundBorderColorButton']) . "; ";
                                }
                                if (isset($element['borderStyleButton'])) {
                                    $buttonStyle3 .= "border-style: " . esc_attr($element['borderStyleButton']) . "; ";
                                }
                                if (isset($element['backgroundBorderSizeButton']['top'])) {
                                    $buttonStyle3 .= "border-width: " . esc_attr($element['backgroundBorderSizeButton']['top']) . " ";
                                }
                                if (isset($element['backgroundBorderSizeButton']['right'])) {
                                    $buttonStyle3 .= esc_attr($element['backgroundBorderSizeButton']['right']) . " ";
                                }
                                if (isset($element['backgroundBorderSizeButton']['bottom'])) {
                                    $buttonStyle3 .= esc_attr($element['backgroundBorderSizeButton']['bottom']) . " ";
                                }
                                if (isset($element['backgroundBorderSizeButton']['left'])) {
                                    $buttonStyle3 .= esc_attr($element['backgroundBorderSizeButton']['left']) . "; ";
                                }
                                if (isset($element['buttonBackgroundColor'])) {
                                    $buttonStyle3 .= "background-color: " . esc_attr($element['buttonBackgroundColor']) . "; ";
                                }
                                $buttonStyle3 .= "font-size: clamp(" . $fontSizeButtonMobile . 'px,' . $fontSizeButtonTablet . 'vw,' . $fontSizeButton . "px); ";
                                if (isset($element['fontWeightButton'])) {
                                    $buttonStyle3 .= "font-weight: " . esc_attr($element['fontWeightButton']) . "; ";
                                }
                                if (isset($element['fontStyle']['fontStyle'])) {
                                    $buttonStyle3 .= "font-style: " . esc_attr($element['fontStyle']['fontStyle']) . "; ";
                                }
                                if (isset($element['fontStyle']['textDecoration'])) {
                                    $buttonStyle3 .= "text-decoration: " . esc_attr($element['fontStyle']['textDecoration']) . "; ";
                                }
                                if (isset($element['lineHeightButton'])) {
                                    $buttonStyle3 .= "line-height: " . esc_attr($element['lineHeightButton']) . "; ";
                                }
                                if (isset($element['fontFamilyButton'])) {
                                    $buttonStyle3 .= "font-family: " . esc_attr($element['fontFamilyButton']) . "; ";
                                }
                                if (isset($element['letterSpacingButton'])) {
                                    $buttonStyle3 .= "letter-spacing: " . esc_attr($element['letterSpacingButton']) . "px; ";
                                }
                                if (isset($element['widthCustomButton'])) {
                                    $buttonStyle3 .= "--buttonWidth: " . esc_attr($element['widthCustomButton']) . "px; ";
                                }
                                if (isset($element['heightCustomButton'])) {
                                    $buttonStyle3 .= "--buttonHeight: " . esc_attr($element['heightCustomButton']) . "px; ";
                                }
                                if (isset($element['borderRadiusButton']['top'])) {
                                    $buttonStyle3 .= "border-top-left-radius: " . esc_attr($element['borderRadiusButton']['top']) . "; ";
                                }
                                if (isset($element['borderRadiusButton']['right'])) {
                                    $buttonStyle3 .= "border-top-right-radius: " . esc_attr($element['borderRadiusButton']['right']) . "; ";
                                }
                                if (isset($element['borderRadiusButton']['bottom'])) {
                                    $buttonStyle3 .= "border-bottom-right-radius: " . esc_attr($element['borderRadiusButton']['bottom']) . "; ";
                                }
                                if (isset($element['borderRadiusButton']['left'])) {
                                    $buttonStyle3 .= "border-bottom-left-radius: " . esc_attr($element['borderRadiusButton']['left']) . "; ";
                                }
                                if (isset($element['paddingButton']['top'])) {
                                    $buttonStyle3 .= "padding-top: " . esc_attr($element['paddingButton']['top']) . "; ";
                                }
                                if (isset($element['paddingButton']['right'])) {
                                    $buttonStyle3 .= "padding-right: " . esc_attr($element['paddingButton']['right']) . "; ";
                                }
                                if (isset($element['paddingButton']['bottom'])) {
                                    $buttonStyle3 .= "padding-bottom: " . esc_attr($element['paddingButton']['bottom']) . "; ";
                                }
                                if (isset($element['paddingButton']['left'])) {
                                    $buttonStyle3 .= "padding-left: " . esc_attr($element['paddingButton']['left']) . "; ";
                                }
                                if (isset($element['colorHover'])) {
                                    $buttonStyle3 .= "--color-hover-icon: " . esc_attr($element['colorHover']) . "; ";
                                }
                                if (isset($element['buttonColorHover'])) {
                                    $buttonStyle3 .= "--color-button-hover: " . esc_attr($element['buttonColorHover']) . "; ";
                                } else {
                                    $buttonStyle3 .= "--color-button-hover: " . esc_attr($defaultButtonColorHover) . "; ";
                                }
                                if (isset($element['borderStyleHover'])) {
                                    $buttonStyle3 .= "--border-style-button-hover: " . esc_attr($element['borderStyleHover']) . "; ";
                                } else {
                                    $buttonStyle3 .= "--border-style-button-hover: solid; ";
                                }
                                if (isset($element['backgroundBorderColorHover'])) {
                                    $buttonStyle3 .= "--border-color-button-hover: " . esc_attr($element['backgroundBorderColorHover']) . "; ";
                                } else {
                                    $buttonStyle3 .= "--border-color-button-hover: #000000; ";
                                }
                                if (isset($element['buttonBackgroundColorHover'])) {
                                    $buttonStyle3 .= "--background-color-button-hover: " . esc_attr($element['buttonBackgroundColorHover']) . "; ";
                                } else {
                                    $buttonStyle3 .= "--background-color-button-hover: '#FFFFFF'; ";
                                }
                                $buttonStyle3 .= "--border-width-button-hover-top: " . (isset($element['backgroundBorderSizeHover']['top']) ? esc_attr($element['backgroundBorderSizeHover']['top']) : '0') . "; ";
                                $buttonStyle3 .= "--border-width-button-hover-right: " . (isset($element['backgroundBorderSizeHover']['right']) ? esc_attr($element['backgroundBorderSizeHover']['right']) : '0') . "; ";
                                $buttonStyle3 .= "--border-width-button-hover-bottom: " . (isset($element['backgroundBorderSizeHover']['bottom']) ? esc_attr($element['backgroundBorderSizeHover']['bottom']) : '0') . "; ";
                                $buttonStyle3 .= "--border-width-button-hover-left: " . (isset($element['backgroundBorderSizeHover']['left']) ? esc_attr($element['backgroundBorderSizeHover']['left']) : '0') . "; ";
                                $buttonStyle3 .= "display: flex;"; 
                                if (isset($element['buttonAlign'])) {
                                    $buttonStyle3 .= "justify-content: " . esc_attr($element['buttonAlign']) . "; ";
                                } else {
                                    $buttonStyle3 .= "justify-content: 'center'; ";
                                }
                                if (isset($element['icoAligItemButton'])) {
                                    $buttonStyle3 .= "align-items: " . esc_attr($element['icoAligItemButton']) . "; ";
                                } else {
                                    $buttonStyle3 .= "align-items: 'center'; ";
                                }
                                if (isset($element['gapIcon'])) {
                                    $buttonStyle3 .= "gap: " . esc_attr($element['gapIcon']) . "px; ";
                                } else {
                                    $buttonStyle3 .= "gap: 5 'px'; ";
                                }
                                if (!empty($element['enableBoxShadow'])) {
                                    $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
                                    $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
                                    $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
                                    $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
                                    $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
                                    $buttonStyle3.= 'box-shadow: ' . $boxShadowX . 'px ' 
                                                    . $boxShadowY . 'px ' 
                                                    . $boxShadowBlur . 'px ' 
                                                    . $boxShadowSpread . 'px ' 
                                                    . $colorBoxShadow . ';';
                                }
                                $buttonContentStyle3 = "
                                    width: " . (isset($element['widthButton']) && $element['widthButton'] === 'custom' 
                                                ? esc_attr($element['widthCustomButton']) . '%' 
                                                : esc_attr($element['widthButton'])) . ";
                                    transform: rotate(" . (isset($element['rotateButton']) ? esc_attr($element['rotateButton']) : '0') . "deg);
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
                                                        position: absolute;"
                                                    data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                                    data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                                    data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                                    data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                                    data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                                    data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                                            > 
                                            <?php endif; ?>
                                        <span 
                                            <?php if ($element['buttonLink'] !== 'none') : ?>
                                                onclick="<?php echo $onclick; ?>"
                                            <?php endif; ?> 
                                            class="content-button-slide scroll-btn  <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
                                            style="<?php echo esc_attr($buttonStyle); ?>"
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
                                                    position: absolute;"
                                                data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                                data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                                data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                                data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                                data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                                data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                                        >
                                        <?php endif; ?>
                                        <span 
                                            <?php if ($element['buttonLink'] !== 'none') : ?>
                                                onclick="<?php echo $onclick; ?>"
                                            <?php endif; ?> 
                                            class="content-button-slide scroll-btn  <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
                                            style="<?php echo esc_attr($buttonStyle); ?>"
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
                                                    position: absolute;"
                                                data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                                                data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                                                data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                                                data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                                                data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                                                data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
                                        >
                                        <?php endif; ?>                           
                                        <div class="button-slider <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                                            style="<?php echo esc_attr($buttonContentStyle3); ?>"
                                            data-font-family="<?php echo esc_attr($element['fontFamilyButton']); ?>" 
                                            <?php if ($element['effectIn'] !== 'none') : ?>
                                data-effect-in="<?php echo esc_attr($element['effectIn'] ?? ''); ?>"
                                data-duration="<?php echo esc_attr($element['duration'] ?? 800); ?>"
                                data-delay-in="<?php echo esc_attr($element['delay'] ?? 0); ?>"
                                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? 0); ?>"
                                data-easing-in="<?php echo esc_attr($element['easing'] ?? 'linear'); ?>"
                                data-direction-in="<?php echo esc_attr($element['direction'] ?? 'normal'); ?>"
                                data-loop-in="<?php echo esc_attr($element['loop'] ?? '1'); ?>"
                                data-opacity-in-from="<?php echo esc_attr($element['opacityFrom'] ?? 0); ?>"
                                data-opacity-in-to="<?php echo esc_attr($element['opacityTo'] ?? 1); ?>"
                                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? 100); ?>"
                                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? 0); ?>"
                                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? 0); ?>"
                                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? 0); ?>"
                                data-rotate-in-from="<?php echo esc_attr($element['rotateFrom'] ?? 0); ?>"
                                data-rotate-in-to="<?php echo esc_attr($element['rotateTo'] ?? 0); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($element['rotateXFrom'] ?? 0); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($element['rotateXTo'] ?? 0); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($element['rotateYFrom'] ?? 0); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($element['rotateYTo'] ?? 0); ?>"
                                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? 0); ?>"
                                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? 1 ); ?>"
                                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? 0); ?>"
                                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? 0); ?>"
                                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? 0); ?>"
                                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? 0); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? 'scale'); ?>"
                                data-image-color="<?php echo esc_attr($element['backgroundColorImage'] ?? ''); ?>"
                            <?php endif; 
                              if ($element['effectHover'] !== 'none') : ?>
                                data-image-color-hover="<?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>"
                                data-effect-hover="<?php echo esc_attr($element['effectHover'] ?? ''); ?>"
                                data-scale-hover="<?php echo esc_attr($element['scaleHover'] ?? 1); ?>"
                                data-opacity-hover="<?php echo esc_attr($element['opacityHover'] ?? 1); ?>"
                                data-filter-hover="<?php echo esc_attr($element['filterHover'] ?? 0); ?>"
                                data-rotate-hover="<?php echo esc_attr($element['rotateHover'] ?? 0); ?>"
                                data-rotate-x-hover="<?php echo esc_attr($element['rotateXHover'] ?? 0); ?>"
                                data-rotate-y-hover="<?php echo esc_attr($element['rotateYHover'] ?? 0); ?>"
                                data-skew-x-hover="<?php echo esc_attr($element['skewXHover'] ?? 0); ?>"
                                data-skew-y-hover="<?php echo esc_attr($element['skewYHover'] ?? 0); ?>"
                                data-start-x-hover="<?php echo esc_attr($element['startXHover'] ?? 100); ?>"
                                data-start-y-hover="<?php echo esc_attr($element['startYHover'] ?? 0); ?>"
                                data-scale-custom-effect-hover="<?php echo esc_attr($element['scaleTypeHover'] ?? 'scale'); ?>"
                                data-duration-hover="<?php echo esc_attr($element['durationHover'] ?? 800); ?>"
                                data-easing-hover="<?php echo esc_attr($element['easingHover'] ?? 'linear'); ?>"
                            <?php endif; ?> 
                                        >
                                        <a class="content-button-slide <?php echo esc_attr($element['iconShowHover'] ?? 'icon-show-always');?> <?php echo esc_attr($element['iconHideShowHover'] ?? 'icon-hide-opacity');?>" href="<?php echo $link_url; ?>" 
                                        style="<?php echo esc_attr($buttonStyle3); ?>"
                                        target="<?php echo $linkTargetButton; ?>"
                                        rel="<?php echo $rel_div; ?>"
                                        <?php if ($element['buttonLink'] === 'scroll-below' || ($element['buttonLink'] === 'scroll-to-id' && !empty($element['scrollToIdButton']))) : ?>
                                            onclick="event.preventDefault(); <?php echo $element['buttonLink'] === 'scroll-below' ? "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });" : "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });"; ?>"
                                        <?php endif; 
                                        $stylesIcon = '';
                                        if (!empty($element['rotateIcon'])) {
                                            $stylesIcon .= "transform: rotate(" . esc_attr($element['rotateIcon']) . "deg); ";
                                        }
                                        if (!empty($element['rotateIconHover'])) {
                                            $stylesIcon .= "--rotate-icon-button-hover: " . esc_attr($element['rotateIconHover']) . "deg; ";
                                        }
                                        $stylesIcon .= "display: flex; ";
                                        if (!empty($element['iconAnimationDuration'])) {
                                            $stylesIcon .= "--fa-animation-duration: " . esc_attr($element['iconAnimationDuration']) . "s; ";
                                        }
                                        if (!empty($element['durationEffectHoverIcon'])) {
                                            $stylesIcon .= "--transition-hover-icon-button: " . esc_attr($element['durationEffectHoverIcon']) . "s; ";
                                        }
                                        if (!empty($element['translateEffectHoverIcon'])) {
                                            $stylesIcon .= "--translate-hover-icon-button: " . esc_attr($element['translateEffectHoverIcon']) . "px; ";
                                        }
                                        if (!empty($element['iconColorHover'])) {
                                            $stylesIcon .= "--color-icon-button-hover: " . esc_attr($element['iconColorHover']) . "; ";
                                        }
                                        ?>
                                        >
                                            <?php if (!empty($element['icon']) && $element['icoPositionButton'] === 'before') : ?>
                                                <div class="content-icon-button  <?php echo esc_attr( $element['iconAnimation'] ?? 'none' )?> <?php echo esc_attr( $element['animationHoverIcon'] ?? 'none' )?>" 
                                                    style="<?php echo esc_attr($stylesIcon); ?>" 
                                                    data-icon-size="<?php echo esc_attr( $element['sizeIcon'] );?>" 
                                                    data-icon-color="<?php echo esc_attr( $element['iconColor'] );?>" 
                                                    data-icon="<?php echo esc_attr($element['icon']); ?>">
                                               </div>
                                            <?php endif; ?>
                                            <?php echo esc_html($element['button']); ?>
                                            <?php if (!empty($element['icon']) && $element['icoPositionButton'] === 'after') : ?>
                                                <div class="content-icon-button <?php echo esc_attr( $element['iconAnimation'] ?? 'none' )?> <?php echo esc_attr( $element['animationHoverIcon'] ?? 'none')?>" 
                                                        style="<?php echo esc_attr($stylesIcon); ?>" 
                                                        data-icon-size="<?php echo esc_attr( $element['sizeIcon'] );?>" 
                                                        data-icon-color="<?php echo esc_attr( $element['iconColor'] );?>" 
                                                        data-icon="<?php echo esc_attr($element['icon']); ?>">
                                               </div>
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
                            endif;?>
                           
                            <?php if ($element['type'] === 'icon'): //  Icon Element
                               $desktopClassIcon = $element['enableDesktop'] ? 'desktop-icon-visible' : 'desktop-icon-hidden';
                               $tabletClassIcon = $element['enableTablet'] ? 'tablet-icon-visible' : 'tablet-icon-hidden';
                               $mobileClassIcon = $element['enableMobile'] ? 'mobile-icon-visible' : 'mobile-icon-hidden';
                               if ($element['link'] !== 'none') {
                                if ($element['link'] === 'link' && !empty($element['linkUrl'])) {
                                    $link_url = esc_url($element['linkUrl']);
                                    if (!empty($element['linkTarget'])) {
                                        $linkTarget = esc_attr($element['linkTarget']);
                                    }
                                    if ($element['linkRel'] === 'nofollow') {
                                        $rel_div = 'nofollow';
                                    }
                                    $onclick = "window.open('{$link_url}', '{$linkTarget}', 'rel={$rel_div}');";
                                } elseif ($element['link'] === 'scroll-below') {
                                    $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                } elseif ($element['link'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
                                    $scroll_id = esc_attr($element['scrollToId']);
                                    $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                }
                            }
                            $inline_style = '';
                            if (isset($element['backgroundColorIcon'])) {
                                $inline_style .= "background-color: " . esc_attr($element['backgroundColorIcon']) . "; ";
                            }
                            if (isset($element['colorHover'])) {
                                $inline_style .= "--color-hover-icon: " . esc_attr($element['colorHover']) . "; ";
                            }
                            if (isset($element['margin'])) {
                                $inline_style .= "margin: "
                                    . esc_attr($element['margin']['top'] ?? 0) . " "
                                    . esc_attr($element['margin']['right'] ?? 0) . " "
                                    . esc_attr($element['margin']['bottom'] ?? 0) . " "
                                    . esc_attr($element['margin']['left'] ?? 0) . "; ";
                            }
                            if (isset($element['padding'])) {
                                $inline_style .= "padding: "
                                    . esc_attr($element['padding']['top'] ?? 0) . " "
                                    . esc_attr($element['padding']['right'] ?? 0) . " "
                                    . esc_attr($element['padding']['bottom'] ?? 0) . " "
                                    . esc_attr($element['padding']['left'] ?? 0) . "; ";
                            }
                            if (isset($element['backgroundBorderSize'])) {
                                $inline_style .= "border-width: "
                                    . esc_attr($element['backgroundBorderSize']['top'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderSize']['right'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderSize']['bottom'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderSize']['left'] ?? 0) . "; ";
                            }
                            if (isset($element['backgroundBorderColor'])) {
                                $inline_style .= "border-color: " . esc_attr($element['backgroundBorderColor']) . "; ";
                            }
                            if (isset($element['backgroundBorderRadius'])) {
                                $inline_style .= "border-radius: "
                                    . esc_attr($element['backgroundBorderRadius']['top'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderRadius']['right'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderRadius']['bottom'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderRadius']['left'] ?? 0) . "; ";
                            }
                            if (isset($element['backgroundBorderColorHover'])) {
                                $inline_style .= "--border-color-hover-icon: " . esc_attr($element['backgroundBorderColorHover']) . "; ";
                            }
                            if (isset($element['opacityHover'])) {
                                $inline_style .= "--opacity-hover-icon: " . esc_attr($element['opacityHover']) . "; ";
                            }
                            if (isset($element['borderStyle'])) {
                                $inline_style .= "border-style: " . esc_attr($element['borderStyle']) . "; ";
                            }
                            if (isset($element['borderStyleHover'])) {
                                $inline_style .= "--border-style-hover-icon: " . esc_attr($element['borderStyleHover']) . "; ";
                            }
                            if (isset($element['backgroundBorderSizeHover'])) {
                                $inline_style .= "--border-width-hover-icon: "
                                    . esc_attr($element['backgroundBorderSizeHover']['top'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderSizeHover']['right'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderSizeHover']['bottom'] ?? 0) . " "
                                    . esc_attr($element['backgroundBorderSizeHover']['left'] ?? 0) . "; ";
                            }
                            if (isset($element['translateEffectHover'])) {
                                $inline_style .= "--translate-hover-icon: " . esc_attr($element['translateEffectHover']) . "px; ";
                            }
                            $inline_style .= "position: relative; display: flex; ";
                            if (isset($element['opacity'])) {
                                $inline_style .= "opacity: " . esc_attr($element['opacity']) . "; ";
                            }
                            if (isset($element['rotate'])) {
                                $inline_style .= "transform: rotate(" . esc_attr($element['rotate']) . "deg); ";
                            }
                            if (isset($element['rotateHover'])) {
                                $inline_style .= "--rotate-hover-icon: " . esc_attr($element['rotateHover']) . "deg; ";
                            }
                            if (isset($element['iconAnimationDuration'])) {
                                $inline_style .= "--fa-animation-duration: " . esc_attr($element['iconAnimationDuration']) . "s; ";
                            }
                            if (isset($element['durationEffectHover'])) {
                                $inline_style .= "--transition-hover-icon: " . esc_attr($element['durationEffectHover']) . "s; ";
                            }
                            if (isset($element['zIndexIcon'])) {
                                $inline_style .= "z-index: " . esc_attr($element['zIndexIcon']) . "; ";
                            }
                            if (isset($element['textLink']) && $element['textLink'] !== 'none') {
                                $inline_style .= "cursor: pointer; ";
                            }
                            if (isset($element['enableBoxShadow'])) {
                                $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
                                $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
                                $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
                                $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
                                $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
                                $inline_style .= 'box-shadow: ' . $boxShadowX . 'px ' 
                                                . $boxShadowY . 'px ' 
                                                . $boxShadowBlur . 'px ' 
                                                . $boxShadowSpread . 'px ' 
                                                . $colorBoxShadow . ';';
                            }
                            $stylesDiv = '';
                            if (isset($element['width'])) {
                                $stylesDiv .= "width: " . ($element['width'] === 'custom' ? esc_attr($element['widthCustom']) . "%" : esc_attr($element['width'])) . "; ";
                            }
                            if (isset($element['align'])) {
                                $stylesDiv .= "text-align: " . esc_attr($element['align']) . "; ";
                            }                            
                                    $classNamesDiv = "content-icon ";
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
                                >
                                <?php endif; ?> 
                                <div <?php if ($element['link'] !== 'none') : ?> 
                                    onclick="<?php echo $onclick; ?>" <?php endif; ?>  
                                    style="<?php echo $stylesDiv; ?>" 
                                    class="<?php echo $classNamesDiv; ?> <?php echo esc_attr($desktopClassIcon); ?> <?php echo esc_attr($tabletClassIcon); ?> <?php echo esc_attr($mobileClassIcon); ?>" 
                                    <?php if ($element['effectIn'] !== 'none') : ?>
                                data-effect-in="<?php echo esc_attr($element['effectIn'] ?? ''); ?>"
                                data-duration="<?php echo esc_attr($element['duration'] ?? 800); ?>"
                                data-delay-in="<?php echo esc_attr($element['delay'] ?? 0); ?>"
                                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? 0); ?>"
                                data-easing-in="<?php echo esc_attr($element['easing'] ?? 'linear'); ?>"
                                data-direction-in="<?php echo esc_attr($element['direction'] ?? 'normal'); ?>"
                                data-loop-in="<?php echo esc_attr($element['loop'] ?? '1'); ?>"
                                data-opacity-in-from="<?php echo esc_attr($element['opacityFrom'] ?? 0); ?>"
                                data-opacity-in-to="<?php echo esc_attr($element['opacityTo'] ?? 1); ?>"
                                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? 100); ?>"
                                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? 0); ?>"
                                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? 0); ?>"
                                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? 0); ?>"
                                data-rotate-in-from="<?php echo esc_attr($element['rotateFrom'] ?? 0); ?>"
                                data-rotate-in-to="<?php echo esc_attr($element['rotateTo'] ?? 0); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($element['rotateXFrom'] ?? 0); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($element['rotateXTo'] ?? 0); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($element['rotateYFrom'] ?? 0); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($element['rotateYTo'] ?? 0); ?>"
                                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? 0); ?>"
                                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? 1 ); ?>"
                                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? 0); ?>"
                                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? 0); ?>"
                                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? 0); ?>"
                                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? 0); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? 'scale'); ?>"
                                <?php endif; ?>
                                >
                                    <div class="element-icon-primary <?php echo $classNamesIcon; ?>" 
                                        style="<?php echo $inline_style; ?>" 
                                        data-icon-primary="<?php echo esc_attr($element['icon']); ?>" 
                                        data-icon-size-primary-min="<?php echo esc_attr($element['fontSizeMobile']); ?>"
                                        data-icon-size-primary-preferred="<?php echo esc_attr($element['fontSizeTablet']); ?>"
                                        data-icon-size-primary-max="<?php echo esc_attr($element['fontSize']); ?>"
                                        data-icon-color-primary="<?php echo esc_attr( $element['color'] );?>" 
                                     >
                                    </div>
                                </div>
                                <?php if ($slide['developerMode']) : ?>  
                                </div>
                                <?php endif; ?>
                            <?php endif;?>

                            <?php if ($element['type'] === 'div'): ?>
                            <?php
                             $link_url = '';
                             $onclick = '';
                             $target_div = '_self'; // Default
                             $rel_div = 'follow'; // Default
                             if ($element['textLink'] !== 'none') {
                                 // Prepara l'attributo onclick se textLink è diverso da 'none'
                                 if ($element['textLink'] === 'link' && !empty($element['linkUrl'])) {
                                     $link_url = esc_url($element['linkUrl']);
                                     if (!empty($element['linkTarget'])) {
                                         $target_div = esc_attr($element['linkTarget']);
                                     }
                                     if ($element['linkRel'] === 'nofollow') {
                                         $rel_div = 'nofollow';
                                     }
                                     $onclick = "window.open('{$link_url}', '{$target_div}', 'rel={$rel_div}');";
                                 } elseif ($element['textLink'] === 'scroll-below') {
                                     $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
                                 } elseif ($element['textLink'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
                                     $scroll_id = esc_attr($element['scrollToId']);
                                     $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
                                 }
                             }
                             // Aggiungi classi in base alla visibilità per desktop, tablet e mobile
                             $desktopClassDiv = $element['enableDesktop'] ? 'desktop-div-visible' : 'desktop-div-hidden';
                             $tabletClassDiv = $element['enableTablet'] ? 'tablet-div-visible' : 'tablet-div-hidden';
                             $mobileClassDiv = $element['enableMobile'] ? 'mobile-div-visible' : 'mobile-div-hidden';
                             // Element Div
                             $TagDiv = !empty($element['elementDiv']) ? $element['elementDiv'] : 'div';
                            ?>
                            <?php if ($slide['developerMode']) : ?>    
                             <div 
                                class="content-inner-div-absolute" 
                                style="position:absolute;"
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
                                style="opacity: <?php echo esc_attr($element['opacityDiv'] ?? 1) ?>;  
                                         z-index:<?php echo esc_attr( $element['zIndexDiv'] ?? 1)?>;
                                         width: <?php echo esc_attr($element['contentWidthDiv']) === 'custom' ? esc_attr($element['customContentWidthDiv']) . '%' : esc_attr($element['contentWidthDiv']); ?>;
                                "
                                >
                             <<?php echo esc_attr($TagDiv); ?>
                                <?php if ($element['textLink'] !== 'none') : ?>
                                    onclick="<?php echo $onclick; ?>"
                                <?php endif; ?> 
                                class="div-slide <?php echo esc_attr($element['positionDiv'] . ' ' . $element['layoutDiv'] . '-layout ' . $desktopClassDiv . ' ' . $tabletClassDiv . ' ' . $mobileClassDiv ); ?>" 
                                style="
                                    background-color: <?php echo esc_attr($element['backgroundColor'] ?? 'transparent'); ?>;
                                    flex-direction: <?php echo $element['layoutDiv'] === 'horizontal' ? 'row' : 'column'; ?>;
                                    flex-wrap: <?php echo $element['layoutWrap']?>;
                                    text-align: center;
                                    position: relative;
                                    <?php if ($element['textLink'] !== 'none') : ?>
                                        cursor: pointer;
                                    <?php endif; ?>
                                    visibility: visible;
                                    gap: <?php echo esc_attr($element['gapItemsDiv']); ?>px;
                                    border-radius: <?php echo esc_attr($element['backgroundBorderRadiusDiv']['top'] ?? 0) . ' ' . esc_attr($element['backgroundBorderRadiusDiv']['right']?? 0) . ' ' . esc_attr($element['backgroundBorderRadiusDiv']['bottom'] ?? 0) . ' ' . esc_attr($element['backgroundBorderRadiusDiv']['left'] ?? 0)?>;
                                    padding-top: <?php echo esc_attr($element['backgroundVerticalPaddingDiv']); ?>px;
                                    padding-bottom: <?php echo esc_attr($element['backgroundVerticalPaddingDiv']); ?>px;
                                    padding-left: <?php echo esc_attr($element['backgroundHorizontalPaddingDiv']); ?>px;
                                    padding-right: <?php echo esc_attr($element['backgroundHorizontalPaddingDiv']); ?>px;
                                    border-style: <?php echo esc_attr( $element['borderStyleDiv'] ); ?>;
                                    border-width: <?php echo esc_attr($element['backgroundBorderSizeDiv']['top'] ?? 0) . ' ' . esc_attr($element['backgroundBorderSizeDiv']['right']?? 0) . ' ' . esc_attr($element['backgroundBorderSizeDiv']['bottom'] ?? 0) . ' ' . esc_attr($element['backgroundBorderSizeDiv']['left'] ?? 0)?>;
                                    border-color: <?php echo esc_attr( $element['backgroundBorderColorDiv'] ?? ''); ?>;
                                    height: <?php echo esc_attr($element['contentHeightDiv']) === 'custom' ? esc_attr($element['customContentHeightDiv']) . '%' : esc_attr($element['contentHeightDiv']); ?>;
                                    margin: <?php echo esc_attr($element['marginDiv']['top'] ?? 0) . ' ' . esc_attr($element['marginDiv']['right']?? 0) . ' ' . esc_attr($element['marginDiv']['bottom'] ?? 0) . ' ' . esc_attr($element['marginDiv']['left'] ?? 0)?>;

                                   <?php if (!empty($element['enableBoxShadow'])) {
                                        $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
                                        $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
                                        $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
                                        $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
                                        $colorShadow = esc_attr($element['colorShadow'] ?? '#000000');
                                        $style .= 'box-shadow: ' . $boxShadowX . 'px ' 
                                                        . $boxShadowY . 'px ' 
                                                        . $boxShadowBlur . 'px ' 
                                                        . $boxShadowSpread . 'px ' 
                                                        . $colorShadow . ';';
                                    };?>
                                    transform: rotate(<?php echo esc_attr($element['rotateDiv'] ?? 0) ?>deg);
                                "
                                <?php if ($element['effectIn'] !== 'none') : ?>
                                data-effect-in="<?php echo esc_attr($element['effectIn'] ?? ''); ?>"
                                data-duration="<?php echo esc_attr($element['duration'] ?? 800); ?>"
                                data-delay-in="<?php echo esc_attr($element['delay'] ?? 0); ?>"
                                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? 0); ?>"
                                data-easing-in="<?php echo esc_attr($element['easing'] ?? 'linear'); ?>"
                                data-direction-in="<?php echo esc_attr($element['direction'] ?? 'normal'); ?>"
                                data-loop-in="<?php echo esc_attr($element['loop'] ?? '1'); ?>"
                                data-opacity-in-from="<?php echo esc_attr($element['opacityFrom'] ?? 0); ?>"
                                data-opacity-in-to="<?php echo esc_attr($element['opacityTo'] ?? 1); ?>"
                                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? 100); ?>"
                                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? 0); ?>"
                                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? 0); ?>"
                                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? 0); ?>"
                                data-rotate-in-from="<?php echo esc_attr($element['rotateFrom'] ?? 0); ?>"
                                data-rotate-in-to="<?php echo esc_attr($element['rotateTo'] ?? 0); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($element['rotateXFrom'] ?? 0); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($element['rotateXTo'] ?? 0); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($element['rotateYFrom'] ?? 0); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($element['rotateYTo'] ?? 0); ?>"
                                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? 0); ?>"
                                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? 1 ); ?>"
                                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? 0); ?>"
                                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? 0); ?>"
                                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? 0); ?>"
                                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? 0); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? 'scale'); ?>"
                                data-image-color="<?php echo esc_attr($element['backgroundColorImage'] ?? ''); ?>"
                            <?php endif; 
                              if ($element['effectHover'] !== 'none') : ?>
                                data-image-color-hover="<?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>"
                                data-effect-hover="<?php echo esc_attr($element['effectHover'] ?? ''); ?>"
                                data-scale-hover="<?php echo esc_attr($element['scaleHover'] ?? 1); ?>"
                                data-opacity-hover="<?php echo esc_attr($element['opacityHover'] ?? 1); ?>"
                                data-filter-hover="<?php echo esc_attr($element['filterHover'] ?? 0); ?>"
                                data-rotate-hover="<?php echo esc_attr($element['rotateHover'] ?? 0); ?>"
                                data-rotate-x-hover="<?php echo esc_attr($element['rotateXHover'] ?? 0); ?>"
                                data-rotate-y-hover="<?php echo esc_attr($element['rotateYHover'] ?? 0); ?>"
                                data-skew-x-hover="<?php echo esc_attr($element['skewXHover'] ?? 0); ?>"
                                data-skew-y-hover="<?php echo esc_attr($element['skewYHover'] ?? 0); ?>"
                                data-start-x-hover="<?php echo esc_attr($element['startXHover'] ?? 100); ?>"
                                data-start-y-hover="<?php echo esc_attr($element['startYHover'] ?? 0); ?>"
                                data-scale-custom-effect-hover="<?php echo esc_attr($element['scaleTypeHover'] ?? 'scale'); ?>"
                                data-duration-hover="<?php echo esc_attr($element['durationHover'] ?? 800); ?>"
                                data-easing-hover="<?php echo esc_attr($element['easingHover'] ?? 'linear'); ?>"
                            <?php endif; ?>

                            >


                                <?php if (!empty($element['innerElements']) && is_array($element['innerElements'])): ?>
                                    <?php foreach ($element['innerElements'] as $innerIndex => $innerElement): ?>

                                    <?php if ($innerElement['type'] === 'text'): // Inner Text Element
                                      $fontStyle = esc_attr($innerElement['fontStyle']['fontStyle'] ?? 'normal');
                                      $fontWeight = esc_attr($innerElement['fontStyle']['fontWeight'] ?? 'normal');
                                      $textDecoration = esc_attr($innerElement['fontStyle']['textDecoration'] ?? 'none');
                                      $marginTop = esc_attr($innerElement['marginTitle']['top'] ?? '0px');
                                      $marginRight = esc_attr($innerElement['marginTitle']['right'] ?? '0px');
                                      $marginBottom = esc_attr($innerElement['marginTitle']['bottom'] ?? '0px');
                                      $marginLeft = esc_attr($innerElement['marginTitle']['left'] ?? '0px');
                                      $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                                      $paddingTop = esc_attr($innerElement['paddingTitleBlock']['top'] ?? '0px');
                                      $paddingRight = esc_attr($innerElement['paddingTitleBlock']['right'] ?? '0px');
                                      $paddingBottom = esc_attr($innerElement['paddingTitleBlock']['bottom'] ?? '0px');
                                      $paddingLeft = esc_attr($innerElement['paddingTitleBlock']['left'] ?? '0px');
                                      $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
                                      $borderSizeTop = esc_attr($innerElement['backgroundBorderSize']['top'] ?? '0px');
                                      $borderSizeRight = esc_attr($innerElement['backgroundBorderSize']['right'] ?? '0px');
                                      $borderSizeBottom = esc_attr($innerElement['backgroundBorderSize']['bottom'] ?? '0px');
                                      $borderSizeLeft = esc_attr($innerElement['backgroundBorderSize']['left'] ?? '0px');
                                      $borderSize = "$borderSizeTop $borderSizeRight $borderSizeBottom $borderSizeLeft";
                                      $fontSize = esc_attr($innerElement['fontSize']);
                                      $fontSizeTablet = esc_attr($innerElement['fontSizeTablet']);
                                      $fontSizeMobile = esc_attr($innerElement['fontSizeMobile']);
                                      $color = esc_attr($innerElement['textColor'] );
                                      $backgroundColor = esc_attr($innerElement['backgroundColor'] ?? '');
                                      $textAlign = esc_attr($innerElement['textAlign'] ?? 'center');
                                      $letterSpacing = esc_attr($innerElement['letterSpacing'] ?? 0);
                                      $borderStyle = esc_attr($innerElement['borderStyle'] ?? 'none');
                                      $backgroundBorderColor = esc_attr($innerElement['backgroundBorderColor'] ?? '#000');
                                      $fontFamily = esc_attr($innerElement['fontFamily'] ?? 'Arial, sans-serif');
                                      $lineHeight = esc_attr($innerElement['lineHeight'] ?? 1.5);
                                      $textWriteMode = esc_attr($innerElement['textWriteMode'] ?? 'horizontal-tb');
                                      $textOrientation = esc_attr($innerElement['textOrientation'] ?? 'mixed');
                                      $rotate = esc_attr($innerElement['rotate'] ?? 0);
                                      $borderRadiusTop = esc_attr($element['backgroundBorderRadius']['top'] ?? '0px');
                                      $borderRadiusRight = esc_attr($element['backgroundBorderRadius']['right'] ?? '0px');
                                      $borderRadiusBottom = esc_attr($element['backgroundBorderRadius']['bottom'] ?? '0px');
                                      $borderRadiusLeft = esc_attr($element['backgroundBorderRadius']['left'] ?? '0px');
                                      $borderRadius = "$borderRadiusTop $borderRadiusRight $borderRadiusBottom $borderRadiusLeft";
                                      $zIndexTitle = esc_attr($innerElement['zIndexTitle'] ?? 1);
                                       $isBold = isset($innerElement['fontStyle']['fontWeight']) && $innerElement['fontStyle']['fontWeight'] === "bold" ? "bold" : (isset($innerElement['fontWeight']) ? esc_attr($innerElement['fontWeight']) : "normal");
                                       $stylesTitleInner = 'font-size: clamp(' . $fontSizeMobile . 'px,' . $fontSizeTablet . 'vw, ' . $fontSize . 'px); '
                                       . 'color: ' . $color . '; '
                                       . 'background-color: ' . $backgroundColor . '; '
                                       . 'text-align: ' . $textAlign . '; '
                                       . 'letter-spacing: ' . $letterSpacing . 'px; '
                                       . 'font-style: ' . $fontStyle . '; '
                                       . 'font-weight: ' . $isBold . '; '
                                       . 'text-decoration: ' . $textDecoration . '; '
                                       . 'line-height: ' . $lineHeight . '; '
                                       . 'font-family: ' . $fontFamily . '; '
                                       . 'margin: ' . $margin . ';'
                                       . 'padding: ' . $padding . ';'
                                       . 'border-width: ' . $borderSize  . ';'
                                       . 'border-style: ' . $borderStyle . ';'
                                       . 'border-color: ' . $backgroundBorderColor. ';'
                                       . 'writing-mode: ' . $textWriteMode . ';'
                                       . 'text-orientation: ' . $textOrientation . ';'
                                       . 'transform: rotate(' . $rotate . 'deg);'
                                       . 'z-index: ' . $zIndexTitle . ';'
                                       . 'border-radius: ' . $borderRadius . ';';
                                       if (!empty($innerElement['enableTextShadow'])) {
                                           $textShadowX = esc_attr($innerElement['textShadowX'] ?? 0);
                                           $textShadowY = esc_attr($innerElement['textShadowY'] ?? 0);
                                           $textShadowBlur = esc_attr($innerElement['textShadowBlur'] ?? 0);
                                           $colorTextShadow = esc_attr($innerElement['colorTextShadow'] ?? '#000000');
                                           $stylesTitleInner .= 'text-shadow: ' . $textShadowX . 'px ' 
                                                           . $textShadowY . 'px ' 
                                                           . $textShadowBlur . 'px ' 
                                                           . $colorTextShadow . ';';
                                       }                            
                                       if (!empty($innerElement['enableBoxShadow'])) {
                                           $boxShadowX = esc_attr($innerElement['boxShadowX'] ?? 0);
                                           $boxShadowY = esc_attr($innerElement['boxShadowY'] ?? 0);
                                           $boxShadowBlur = esc_attr($innerElement['boxShadowBlur'] ?? 0);
                                           $boxShadowSpread = esc_attr($innerElement['boxShadowSpread'] ?? 0);
                                           $colorBoxShadow = esc_attr($innerElement['colorBoxShadow'] ?? '#000000');
                                           $stylesTitleInner .= 'box-shadow: ' . $boxShadowX . 'px ' 
                                                           . $boxShadowY . 'px ' 
                                                           . $boxShadowBlur . 'px ' 
                                                           . $boxShadowSpread . 'px ' 
                                                           . $colorBoxShadow . ';';
                                       }
                                       if (!empty($innerElement['enableStroke'])) {
                                           $strokeWidth = esc_attr($innerElement['stroke'] ?? 0);
                                           $strokeColor = esc_attr($innerElement['colorStroke'] ?? '#000000');
                                           $stylesTitleInner .= '-webkit-text-stroke-width: ' . $strokeWidth . 'px;'
                                                        . '-webkit-text-stroke-color: ' . $strokeColor . ';';
                                       }
                                       $tag = esc_attr($innerElement['elementTitle'] ?? 'h3');
                                       $enableDesktop = $innerElement['enableDesktop'] ?? true; 
                                       $enableTablet = $innerElement['enableTablet'] ?? true; 
                                       $enableMobile = $innerElement['enableMobile'] ?? true; 
                                       $desktopClass = $enableDesktop ? 'desktop-title-visible' : 'desktop-title-hidden';
                                       $tabletClass = $enableTablet ? 'tablet-title-visible' : 'tablet-title-hidden';
                                       $mobileClass = $enableMobile ? 'mobile-title-visible' : 'mobile-title-hidden';
                                       ?>         
                                        <?php $TagBlock = !empty($innerElement['elementTitle']) ? $innerElement['elementTitle'] : 'h3'; ?>
                                        <?php
                                            // Aggiungi classi in base alla visibilità per desktop, tablet e mobile
                                            $desktopClassTitleDiv = $innerElement['enableDesktop'] ? 'desktop-title-div-visible' : 'desktop-title-div-hidden';
                                            $tabletClassTitleDiv = $innerElement['enableTablet'] ? 'tablet-title-div-visible' : 'tablet-title-div-hidden';
                                            $mobileClassTitleDiv = $innerElement['enableMobile'] ? 'mobile-title-div-visible' : 'mobile-title-div-hidden';
                                            $widthTitle = $innerElement['widthTitle'] ?? '100%'; 
                                            $widthCustomTitle = $innerElement['widthCustomTitle'] ?? '100'; 
                                            $blendMode = $innerElement['blendMode'] ?? 'normal';
                                        ?>
                                        <div
                                            style="width: <?php echo esc_attr($widthTitle) === 'custom' ? esc_attr($widthCustomTitle) . '%' : esc_attr($widthTitle); ?>; mix-blend-mode: <?php echo esc_attr($blendMode); ?>;"
                                            class="content-title-div <?php echo esc_attr($desktopClassTitleDiv); ?> <?php echo esc_attr($tabletClassTitleDiv); ?> <?php echo esc_attr($mobileClassTitleDiv); ?>"
                                        >
                                            <<?php echo esc_attr($TagBlock); ?>
                                                class="title-slide-div"
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
                                                style="<?php echo esc_attr($stylesTitleInner); ?>"
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
                                                <?php if ($innerElement['effectIn'] !== 'none') : ?>
                                                data-effect-in="<?php echo esc_attr($innerElement['effectIn'] ?? 'none'); ?>"
                                                data-duration="<?php echo esc_attr($innerElement['duration'] ?? 800); ?>"
                                                data-delay-in="<?php echo esc_attr($innerElement['delay'] ?? 0); ?>"
                                                data-delay-in-end="<?php echo esc_attr($innerElement['endDelay'] ?? 0); ?>"
                                                data-easing-in="<?php echo esc_attr($innerElement['easing'] ?? 'linear'); ?>"
                                                data-direction-in="<?php echo esc_attr($innerElement['direction'] ?? 'normal'); ?>"
                                                data-loop-in="<?php echo esc_attr($innerElement['loop'] ?? '1'); ?>"
                                                data-opacity-in-from="<?php echo esc_attr($innerElement['opacityFrom'] ?? 0); ?>"
                                                data-opacity-in-to="<?php echo esc_attr($innerElement['opacityTo'] ?? 1); ?>"
                                                data-start-x-from="<?php echo esc_attr($innerElement['startXFrom'] ?? 100); ?>"
                                                data-start-x-to="<?php echo esc_attr($innerElement['startXTo'] ?? 0); ?>"
                                                data-start-y-from="<?php echo esc_attr($innerElement['startYFrom'] ?? 0); ?>"
                                                data-start-y-to="<?php echo esc_attr($innerElement['startYTo'] ?? 0); ?>"
                                                data-stagger="<?php echo esc_attr($innerElement['stagger'] ?? 80); ?>"
                                                data-effect-split="<?php echo esc_attr($innerElement['textSplitEffect'] ?? ''); ?>"
                                                data-direction-block="<?php echo esc_attr($innerElement['directionBlock'] ?? 'right'); ?>"
                                                data-color-block="<?php echo esc_attr($innerElement['colorBlockEffect'] ?? '#000'); ?>"
                                                data-rotate-in-from="<?php echo esc_attr($innerElement['rotateFrom'] ?? 0); ?>"
                                                data-rotate-in-to="<?php echo esc_attr($innerElement['rotateTo'] ?? 0); ?>"
                                                data-rotate-x-in-from="<?php echo esc_attr($innerElement['rotateXFrom'] ?? 0); ?>"
                                                data-rotate-x-in-to="<?php echo esc_attr($innerElement['rotateXTo'] ?? 0); ?>"
                                                data-rotate-y-in-from="<?php echo esc_attr($innerElement['rotateYFrom'] ?? 0); ?>"
                                                data-rotate-y-in-to="<?php echo esc_attr($innerElement['rotateYTo'] ?? 0); ?>"
                                                data-scale-in-from="<?php echo esc_attr($innerElement['scaleFrom'] ?? 0 ); ?>"
                                                data-scale-in-to="<?php echo esc_attr($innerElement['scaleTo'] ?? 1 ); ?>"
                                                data-skew-x-from="<?php echo esc_attr($innerElement['skewXFrom'] ?? 0); ?>"
                                                data-skew-x-to="<?php echo esc_attr($innerElement['skewXTo'] ?? 1); ?>"
                                                data-skew-y-from="<?php echo esc_attr($innerElement['skewYFrom'] ?? 0); ?>"
                                                data-skew-y-to="<?php echo esc_attr($innerElement['skewYTo'] ?? 1); ?>"
                                                data-scale-custom-effect-in="<?php echo esc_attr($innerElement['scaleType'] ?? 'scale'); ?>"
                                                data-text-color="<?php echo esc_attr($innerElement['textColor'] ?? ''); ?>"
                                            <?php endif; 
                                                if ($innerElement['effectHover'] !== 'none') : ?>
                                                data-text-color-hover="<?php echo esc_attr($innerElement['textColorHover'] ?? ''); ?>"
                                                data-effect-hover="<?php echo esc_attr($innerElement['effectHover'] ?? ''); ?>"
                                                data-scale-hover="<?php echo esc_attr($innerElement['scaleHover'] ?? 1); ?>"
                                                data-opacity-hover="<?php echo esc_attr($innerElement['opacityHover'] ?? 1); ?>"
                                                data-filter-hover="<?php echo esc_attr($innerElement['filterHover'] ?? 0); ?>"
                                                data-rotate-hover="<?php echo esc_attr($innerElement['rotateHover'] ?? 0); ?>"
                                                data-rotate-x-hover="<?php echo esc_attr($innerElement['rotateXHover'] ?? 0); ?>"
                                                data-rotate-y-hover="<?php echo esc_attr($innerElement['rotateYHover'] ?? 0); ?>"
                                                data-skew-x-hover="<?php echo esc_attr($innerElement['skewXHover'] ?? 0); ?>"
                                                data-skew-y-hover="<?php echo esc_attr($innerElement['skewYHover'] ?? 0); ?>"
                                                data-start-x-hover="<?php echo esc_attr($innerElement['startXHover'] ?? 100); ?>"
                                                data-start-y-hover="<?php echo esc_attr($innerElement['startYHover'] ?? 0); ?>"
                                                data-scale-custom-effect-hover="<?php echo esc_attr($innerElement['scaleTypeHover'] ?? 'scale'); ?>"
                                                data-duration-hover="<?php echo esc_attr($innerElement['durationHover'] ?? 800); ?>"
                                                data-easing-hover="<?php echo esc_attr($innerElement['easingHover'] ?? 'linear'); ?>"
                                            <?php endif; ?>
                                            >
                                            <?php echo $link_start; ?>
                                                <?php echo $innerElement['content']; ?>
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
                                    // Prepara l'attributo onclick se textLink è diverso da 'none'
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
                                z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '0') . ";
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
                                    z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '0') . ";
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
                                    z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '0') . ";
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
                                            class="content-button-slide-inner scroll-btn-inner <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
                                            style="<?php echo esc_attr($buttonStyle); ?>"
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
                                        
                                    <div class="material-icon" data-icon="<?php echo esc_attr($innerElement['icon']); ?>">
                                            <!-- Icona verrà renderizzata da JavaScript -->
                                        </div>
                                                                    
                                
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

                               $desktopClassIconInner = $innerElement['enableDesktop'] ? 'desktop-icon-inner-visible' : 'desktop-icon-inner-hidden';
                               $tabletClassIconInner = $innerElement['enableTablet'] ? 'tablet-icon-inner-visible' : 'tablet-icon-inner-hidden';
                               $mobileClassIconInner = $innerElement['enableMobile'] ? 'mobile-icon-inner-visible' : 'mobile-icon-inner-hidden';
                               if ($innerElement['textLink'] !== 'none') {
                                // Prepara l'attributo onclick se textLink è diverso da 'none'
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
                                    z-index: " . esc_attr($innerElement['zIndexIcon']) . ";
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
                                    >
                                    </i>
                                </div>
                                <?php if ($slide['developerMode']) : ?>  
                                </div>
                                <?php endif; ?>

                                        <?php elseif ($innerElement['type'] === 'image'): ?>
 
                                        <?php
                                        $marginTop = esc_attr($innerElement['marginImage']['top'] ?? '0px');
                                        $marginRight = esc_attr($innerElement['marginImage']['right'] ?? '0px');
                                        $marginBottom = esc_attr($innerElement['marginImage']['bottom'] ?? '0px');
                                        $marginLeft = esc_attr($innerElement['marginImage']['left']?? '0px');
                                        $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                                        $paddingTop = esc_attr($innerElement['paddingImage']['top'] ?? '0px');
                                        $paddingRight = esc_attr($innerElement['paddingImage']['right'] ?? '0px');
                                        $paddingBottom = esc_attr($innerElement['paddingImage']['bottom'] ?? '0px');
                                        $paddingLeft = esc_attr($innerElement['paddingImage']['left']?? '0px');
                                        $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
                                        $borderRadiusTop = esc_attr($innerElement['backgroundBorderRadiusImage']['top'] ?? '0px');
                                        $borderRadiusRight = esc_attr($innerElement['backgroundBorderRadiusImage']['right'] ?? '0px');
                                        $borderRadiusBottom = esc_attr($innerElement['backgroundBorderRadiusImage']['bottom'] ?? '0px');
                                        $borderRadiusLeft = esc_attr($innerElement['backgroundBorderRadiusImage']['left']?? '0px');
                                        $borderRadius = "$borderRadiusTop $borderRadiusRight $borderRadiusBottom $borderRadiusLeft";
                                        $borderSizeTop = esc_attr($innerElement['backgroundBorderSizeImage']['top'] ?? '0px');
                                        $borderSizeRight = esc_attr($innerElement['backgroundBorderSizeImage']['right'] ?? '0px');
                                        $borderSizeBottom = esc_attr($innerElement['backgroundBorderSizeImage']['bottom'] ?? '0px');
                                        $borderSizeLeft = esc_attr($innerElement['backgroundBorderSizeImage']['left']?? '0px');
                                        $borderSize = "$borderSizeTop $borderSizeRight $borderSizeBottom $borderSizeLeft";
                                        $style = "max-width: 100%; min-width: 0; 
                                        max-height: 100%; min-height: 0;
                                        border-style: " . esc_attr($innerElement['borderStyleImage']) . ";
                                        border-width: " . $borderSize . ";
                                        border-color: " . esc_attr($innerElement['backgroundBorderColorImage']) . ";
                                        border-radius:  " . $borderRadius . ";
                                        padding: " . $padding . ";
                                        background-color: " . esc_attr($innerElement['backgroundColorImage']) . ";
                                        margin: " . $margin . ";
                                        --spike-width-inner:" . esc_attr($innerElement['spikeLeftWidth']) . "%;
                                        --spike-width-right-inner: " . esc_attr($innerElement['spikeRightWidth']) . "%;
                                        z-index: " . esc_attr( $innerElement['zIndexImage'] ). ";
                                        ";
                                        if (!empty($innerElement['enableBoxShadowImage'])) {
                                            $boxShadowXImage = esc_attr($innerElement['boxShadowXImage'] ?? 0);
                                            $boxShadowYImage = esc_attr($innerElement['boxShadowYImage'] ?? 0);
                                            $boxShadowBlurImage = esc_attr($innerElement['boxShadowBlurImage'] ?? 0);
                                            $boxShadowSpreadImage = esc_attr($innerElement['boxShadowSpreadImage'] ?? 0);
                                            $colorShadowImage = esc_attr($innerElement['colorShadowImage'] ?? '#000000');
                                            
                                            $style .= " box-shadow: {$boxShadowXImage}px {$boxShadowYImage}px {$boxShadowBlurImage}px {$boxShadowSpreadImage}px {$colorShadowImage};";
                                        }
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
                                            // Prepara l'attributo onclick se textLink è diverso da 'none'
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
                                        style="transform: rotate(<?php echo esc_attr($innerElement['rotateImage']); ?>deg); 
                                               opacity: <?php echo esc_attr($innerElement['opacityImage'])?>;
                                               width:<?php echo esc_attr($innerElement['widthImageContent'])?>;
                                           position:<?php echo esc_attr($innerElement['positionInnerImage'])?>;
                                            text-align:<?php echo esc_attr($innerElement['imageAlign'])?>;
                                           top: <?php echo esc_attr($innerElement['verticalPositionInnerImage'])?>px;
                                           left: <?php echo esc_attr($innerElement['horizontalPositionInnerImage'])?>px;
                                            <?php if ($innerElement['imageLink'] !== 'none') : ?>
                                            cursor: pointer;
                                            <?php endif; ?>"
                                        class="content-img-inner <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>"
                                    >
                                        <img
                                            src="<?php echo esc_url($innerElement['imageUrl']); ?>"
                                            alt="<?php echo esc_attr($innerElement['alt']); ?>"
                                            style="<?php echo $style ?>"
                                            class="img-inner image-with-mask <?php echo esc_attr($innerElement['blobMask']); ?> <?php echo esc_attr($innerElement['spikeMask'])?> <?php echo esc_attr($innerElement['spikeMaskRight'])?> <?php echo esc_attr($innerElement['imageFilter'])?>"
                                            <?php if ($innerElement['effectIn'] !== 'none') : ?>
                                data-effect-in="<?php echo esc_attr($innerElement['effectIn'] ?? ''); ?>"
                                data-duration="<?php echo esc_attr($innerElement['duration'] ?? 800); ?>"
                                data-delay-in="<?php echo esc_attr($innerElement['delay'] ?? 0); ?>"
                                data-delay-in-end="<?php echo esc_attr($innerElement['endDelay'] ?? 0); ?>"
                                data-easing-in="<?php echo esc_attr($innerElement['easing'] ?? 'linear'); ?>"
                                data-direction-in="<?php echo esc_attr($innerElement['direction'] ?? 'normal'); ?>"
                                data-loop-in="<?php echo esc_attr($innerElement['loop'] ?? '1'); ?>"
                                data-opacity-in-from="<?php echo esc_attr($innerElement['opacityFrom'] ?? 0); ?>"
                                data-opacity-in-to="<?php echo esc_attr($innerElement['opacityTo'] ?? 1); ?>"
                                data-start-x-from="<?php echo esc_attr($innerElement['startXFrom'] ?? 100); ?>"
                                data-start-x-to="<?php echo esc_attr($innerElement['startXTo'] ?? 0); ?>"
                                data-start-y-from="<?php echo esc_attr($innerElement['startYFrom'] ?? 0); ?>"
                                data-start-y-to="<?php echo esc_attr($innerElement['startYTo'] ?? 0); ?>"
                                data-rotate-in-from="<?php echo esc_attr($innerElement['rotateFrom'] ?? 0); ?>"
                                data-rotate-in-to="<?php echo esc_attr($innerElement['rotateTo'] ?? 0); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($innerElement['rotateXFrom'] ?? 0); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($innerElement['rotateXTo'] ?? 0); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($innerElement['rotateYFrom'] ?? 0); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($innerElement['rotateYTo'] ?? 0); ?>"
                                data-scale-in-from="<?php echo esc_attr($innerElement['scaleFrom'] ?? 0); ?>"
                                data-scale-in-to="<?php echo esc_attr($innerElement['scaleTo'] ?? 1 ); ?>"
                                data-skew-x-from="<?php echo esc_attr($innerElement['skewXFrom'] ?? 0); ?>"
                                data-skew-x-to="<?php echo esc_attr($innerElement['skewXTo'] ?? 0); ?>"
                                data-skew-y-from="<?php echo esc_attr($innerElement['skewYFrom'] ?? 0); ?>"
                                data-skew-y-to="<?php echo esc_attr($innerElement['skewYTo'] ?? 0); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($innerElement['scaleType'] ?? 'scale'); ?>"
                                data-image-color="<?php echo esc_attr($innerElement['backgroundColorImage'] ?? ''); ?>"
                            <?php endif; 
                              if ($innerElement['effectHover'] !== 'none') : ?>
                                data-image-color-hover="<?php echo esc_attr($innerElement['backgroundColorImageHover'] ?? ''); ?>"
                                data-effect-hover="<?php echo esc_attr($innerElement['effectHover'] ?? ''); ?>"
                                data-scale-hover="<?php echo esc_attr($innerElement['scaleHover'] ?? 1); ?>"
                                data-opacity-hover="<?php echo esc_attr($innerElement['opacityHover'] ?? 1); ?>"
                                data-filter-hover="<?php echo esc_attr($innerElement['filterHover'] ?? 0); ?>"
                                data-rotate-hover="<?php echo esc_attr($innerElement['rotateHover'] ?? 0); ?>"
                                data-rotate-x-hover="<?php echo esc_attr($innerElement['rotateXHover'] ?? 0); ?>"
                                data-rotate-y-hover="<?php echo esc_attr($innerElement['rotateYHover'] ?? 0); ?>"
                                data-skew-x-hover="<?php echo esc_attr($innerElement['skewXHover'] ?? 0); ?>"
                                data-skew-y-hover="<?php echo esc_attr($innerElement['skewYHover'] ?? 0); ?>"
                                data-start-x-hover="<?php echo esc_attr($innerElement['startXHover'] ?? 100); ?>"
                                data-start-y-hover="<?php echo esc_attr($innerElement['startYHover'] ?? 0); ?>"
                                data-scale-custom-effect-hover="<?php echo esc_attr($innerElement['scaleTypeHover'] ?? 'scale'); ?>"
                                data-duration-hover="<?php echo esc_attr($innerElement['durationHover'] ?? 800); ?>"
                                data-easing-hover="<?php echo esc_attr($innerElement['easingHover'] ?? 'linear'); ?>"
                            <?php endif; ?>
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




 

                    <?php endforeach; ?>
                <?php endif; ?>
                        </div>
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
            <?php if ($navigation): ?>
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
            <?php endif; ?>
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
