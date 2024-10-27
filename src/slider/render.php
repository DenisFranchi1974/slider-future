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
            <!-- Custom content rendering starts here -->
            <?php $filter = esc_attr($slide['filter'] ?? "none"); ?>
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
                        <!-- Elemento  Menu -->
                        <?php if ($element['type'] === 'menu'): ?>
                        <?php 
                            // Imposta le classi per il menu a seconda delle modalità
                            $menuMode = $element['menuMode'];
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

                        <div style="z-index:<?php echo esc_attr($element['zIndexMenu'])?>" class="menu-component menu-mode-<?php echo esc_attr($menuMode); ?> <?php echo esc_attr($desktopClassMenu); ?> <?php echo esc_attr($tabletClassMenu); ?> <?php echo esc_attr($mobileClassMenu); ?>">
                            <?php if ($menuMode === 'toggle' || $menuMode === 'responsive'): ?>
                                <div class="hamburger-icon <?php echo esc_attr($element['direction']); ?> <?php echo esc_attr($element['sizeToggle']); ?>" data-breakpoint="<?php echo esc_attr($element['breakpoint']); ?>" style="<?php echo $stylesToggle; ?>">
                                    <div class="icon-1"></div>
                                    <div class="icon-2"></div>
                                    <div class="icon-3"></div>
                                    <div class="clear"></div>
                                </div>
                                <nav class="nav-toggle-slide <?php echo esc_attr($element['direction'] . ' ' . $element['directionMenu'] . ' ' . $element['widthMenu']); ?>">
                                    <ul style="<?php echo esc_attr($stylesUlMenu); ?>">
                                    <?php foreach ($element['menuItems'] as $idx => $item) : ?>
                                        <li class="<?php echo !empty($item['subMenu']) ? 'has-submenu' : ''; ?> <?php echo $element['submenuMode'] === 'hover' ? 'submenu-hover' : ''; ?>" style="position: relative;">
                                            <a 
                                                style="<?php echo esc_attr($stylesAMenu); ?>" 
                                                href="<?php echo esc_url($item['link']); ?>" 
                                                target="<?php echo esc_attr($item['openInNewTab']) ? '_blank' : '_self'; ?>" 
                                                rel="<?php echo esc_attr($item['openInNewTab']) ? 'noopener noreferrer' : ''; ?>"
                                            >
                                                <?php echo esc_html($item['text']); ?>
                                            </a>
                                            <?php if (!empty($item['subMenu'])) : ?>
                                                <button 
                                                    class="submenu-toggle" 
                                                    data-index="<?php echo $idx; ?>" 
                                                    style="background: none; border: none; cursor: pointer; position: absolute; top: 0; right: 0;"
                                                >
                                                    ▼
                                                </button>
                                                <ul class="sub-menu" data-index="<?php echo $idx; ?>" style="display: none; position: absolute; top: 100%; left: 0;">
                                                    <?php foreach ($item['subMenu'] as $subIdx => $subItem) : ?>
                                                        <li>
                                                            <a 
                                                                style="<?php echo esc_attr($stylesAMenu); ?>" 
                                                                href="<?php echo esc_url($subItem['link']); ?>" 
                                                                target="<?php echo esc_attr($subItem['openInNewTab']) ? '_blank' : '_self'; ?>" 
                                                                rel="<?php echo esc_attr($subItem['openInNewTab']) ? 'noopener noreferrer' : ''; ?>"
                                                            >
                                                                <?php echo esc_html($subItem['text']); ?>
                                                            </a>
                                                        </li>
                                                    <?php endforeach; ?>
                                                </ul>
                                            <?php endif; ?>
                                        </li>
                                    <?php endforeach; ?>
                                    </ul>
                                </nav>
                            <?php endif; ?>

                            <?php if ($menuMode === 'normal' || $menuMode === 'responsive'): ?>
                                <nav class="slider-nav-menu normal-menu" data-breakpoint="<?php echo esc_attr($element['breakpoint']); ?>">
                                    <ul style="<?php echo esc_attr($stylesUlMenu); ?>">
                                        <?php foreach ($element['menuItems'] as $idx => $item) : ?>
                                            <li class="<?php echo !empty($item['subMenu']) ? 'has-submenu' : ''; ?> <?php echo $element['submenuMode'] === 'hover' ? 'submenu-hover' : ''; ?>" style="position: relative;">
                                                <a 
                                                    style="<?php echo esc_attr($stylesAMenu); ?>" 
                                                    href="<?php echo esc_url($item['link']); ?>" 
                                                    target="<?php echo esc_attr($item['openInNewTab']) ? '_blank' : '_self'; ?>" 
                                                    rel="<?php echo esc_attr($item['openInNewTab']) ? 'noopener noreferrer' : ''; ?>"
                                                >
                                                    <?php echo esc_html($item['text']); ?>
                                                </a>
                                                <?php if (!empty($item['subMenu'])) : ?>
                                                    <button 
                                                        class="submenu-toggle" 
                                                        data-index="<?php echo $idx; ?>" 
                                                        style="background: none; border: none; cursor: pointer; position: absolute; top: 0; right: 0;"
                                                    >
                                                        ▼
                                                    </button>
                                                    <ul class="sub-menu" data-index="<?php echo $idx; ?>" style="display: none; position: absolute; top: 100%; left: 0;">
                                                        <?php foreach ($item['subMenu'] as $subIdx => $subItem) : ?>
                                                            <li>
                                                                <a 
                                                                    style="<?php echo esc_attr($stylesAMenu); ?>" 
                                                                    href="<?php echo esc_url($subItem['link']); ?>" 
                                                                    target="<?php echo esc_attr($subItem['openInNewTab']) ? '_blank' : '_self'; ?>" 
                                                                    rel="<?php echo esc_attr($subItem['openInNewTab']) ? 'noopener noreferrer' : ''; ?>"
                                                                >
                                                                    <?php echo esc_html($subItem['text']); ?>
                                                                </a>
                                                            </li>
                                                        <?php endforeach; ?>
                                                    </ul>
                                                <?php endif; ?>
                                            </li>
                                        <?php endforeach; ?>
                                    </ul>
                                </nav>
                            <?php endif; ?>
                        </div>
                       <?php endif; ?>
                        <!-- Fine Elemento Menu -->

                        <!-- Elemento Testo -->
                        <?php if ($element['type'] === 'title' && !empty($element['text'])): 
                           $fontStyle = esc_attr($element['fontStyle']['fontStyle'] ?? 'normal');
                           $fontWeight = esc_attr($element['fontStyle']['fontWeight'] ?? 'normal');
                           $textDecoration = esc_attr($element['fontStyle']['textDecoration'] ?? 'none');
                           $marginTop = esc_attr($element['marginTitle']['top'] ?? '0px');
                           $marginRight = esc_attr($element['marginTitle']['right'] ?? '0px');
                           $marginBottom = esc_attr($element['marginTitle']['bottom'] ?? '0px');
                           $marginLeft = esc_attr($element['marginTitle']['left'] ?? '0px');
                           // Combina i margini
                           $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                           $paddingTop = esc_attr($element['paddingTitle']['top'] ?? '0px');
                           $paddingRight = esc_attr($element['paddingTitle']['right'] ?? '0px');
                           $paddingBottom = esc_attr($element['paddingTitle']['bottom'] ?? '0px');
                           $paddingLeft = esc_attr($element['paddingTitle']['left'] ?? '0px');
                           // Combina i padding
                           $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
                           $fontSize = esc_attr($element['fontSize']);
                           $fontSizeTablet = esc_attr($element['fontSizeTablet'] ?? 16);
                           $fontSizeMobile = esc_attr($element['fontSizeMobile'] ?? 16);
                           $color = esc_attr($element['textColor'] );
                           $textAlign = esc_attr($element['textAlign'] ?? 'center');
                           $letterSpacing = esc_attr($element['letterSpacing'] ?? 0);
                           $backgroundBorderSize = esc_attr($element['backgroundBorderSize'] ?? 0);
                           $borderStyle = esc_attr($element['borderStyle'] ?? 'none');
                           $backgroundBorderColor = esc_attr($element['backgroundBorderColor'] ?? '#000');
                           $fontFamily = esc_attr($element['fontFamily'] ?? 'Arial, sans-serif');
                           $lineHeight = esc_attr($element['lineHeight'] ?? 1.5);
                           $textWriteMode = esc_attr($element['textWriteMode'] ?? 'horizontal-tb');
                           $textOrientation = esc_attr($element['textOrientation'] ?? 'mixed');
                           $rotate = esc_attr($element['rotate'] ?? 0);
                           $backgroundBorderRadius = esc_attr($element['backgroundBorderRadius'] ?? 0);
                           $zIndexTitle = esc_attr($element['zIndexTitle'] ?? 1);
                            // Calcola se il font deve essere in grassetto
                            $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === "bold" ? "bold" : (isset($element['fontWeight']) ? esc_attr($element['fontWeight']) : "normal");
                            $stylesTitle = 'font-size: ' . $fontSize . 'px; '
                            . '--font-size-tablet: ' . $fontSizeTablet . 'px; '
                            . '--font-size-mobile: ' . $fontSizeMobile . 'px; '
                            . 'color: ' . $color . '; '
                            . 'text-align: ' . $textAlign . '; '
                            . 'letter-spacing: ' . $letterSpacing . 'px; '
                            . 'font-style: ' . $fontStyle . '; '
                            . 'font-weight: ' . $isBold . '; '
                            . 'text-decoration: ' . $textDecoration . '; '
                            . 'line-height: ' . $lineHeight . '; '
                            . 'font-family: ' . $fontFamily . '; '
                            . 'margin: ' . $margin . ';'
                            . 'padding: ' . $padding . ';'
                            . 'border-width: ' . $backgroundBorderSize . 'px ' . ';'
                            . 'border-style: ' . $borderStyle . ';'
                            . 'border-color: ' . $backgroundBorderColor. ';'
                            . 'writing-mode: ' . $textWriteMode . ';'
                            . 'text-orientation: ' . $textOrientation . ';'
                            . 'transform: rotate(' . $rotate . 'deg);'
                            . 'z-index: ' . $zIndexTitle . ';'
                            . 'border-radius: ' . $backgroundBorderRadius . 'px;';
                            if (!empty($element['enableTextShadow'])) {
                                // Usa fallback per i valori dell'ombra del testo
                                $textShadowX = esc_attr($element['textShadowX'] ?? 0);
                                $textShadowY = esc_attr($element['textShadowY'] ?? 0);
                                $textShadowBlur = esc_attr($element['textShadowBlur'] ?? 0);
                                $colorTextShadow = esc_attr($element['colorTextShadow'] ?? '#000000');
                            
                                // Crea lo stile dell'ombra del testo solo se l'ombra è abilitata
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
                                // Usa fallback per i valori del text stroke
                                $strokeWidth = esc_attr($element['stroke'] ?? 0);
                                $strokeColor = esc_attr($element['colorStroke'] ?? '#000000');
                            
                                // Crea lo stile del text stroke solo se il text stroke è abilitato
                                $stylesTitle .= '-webkit-text-stroke-width: ' . $strokeWidth . 'px;'
                                             . '-webkit-text-stroke-color: ' . $strokeColor . ';';
                            }
                            // Recupera il tag HTML
                            $tag = esc_attr($element['elementTitle'] ?? 'h3');
                            // Imposta i valori di default utilizzando l'operatore di coalescenza null
                            $enableDesktopTitle = $element['enableDesktopTitle'] ?? true; // Default a true
                            $enableTabletTitle = $element['enableTabletTitle'] ?? true; // Default a true
                            $enableMobileTitle = $element['enableMobileTitle'] ?? true; // Default a true
                            // Assegnazione delle classi basata sui valori
                            $desktopClass = $enableDesktopTitle ? 'desktop-title-visible' : 'desktop-title-hidden';
                            $tabletClass = $enableTabletTitle ? 'tablet-title-visible' : 'tablet-title-hidden';
                            $mobileClass = $enableMobileTitle ? 'mobile-title-visible' : 'mobile-title-hidden';
                            
                        if ($slide['developerMode']) : ?>         
                        <div class="content-content-slide-absolute"
                            style="transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                                position: absolute;
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
                            $target = esc_attr($element['linkTarget'] ?? '_self'); // Default
                            $rel = esc_attr($element['linkRel'] ?? 'follow'); // Default

                            // Verifica il tipo di link e prepara i tag <a> e attributi
                            if ($element['textLink'] === 'link' && !empty($element['linkUrl'])) {
                                // Se è un link, prepara i tag <a> con target e rel
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
                                data-duration="<?php echo esc_attr($element['duration'] ?? ''); ?>"
                                data-delay-in="<?php echo esc_attr($element['delayIn'] ?? ''); ?>"
                                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? ''); ?>"
                                data-easing-in="<?php echo esc_attr($element['easing'] ?? ''); ?>"
                                data-direction-in="<?php echo esc_attr($element['direction'] ?? ''); ?>"
                                data-loop-in="<?php echo esc_attr($element['loop'] ?? ''); ?>"
                                data-opacity-in-from="<?php echo esc_attr($element['opacityInFrom'] ?? ''); ?>"
                                data-opacity-in-to="<?php echo esc_attr($element['opacityInTo'] ?? ''); ?>"
                                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? ''); ?>"
                                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? ''); ?>"
                                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? ''); ?>"
                                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? ''); ?>"
                                data-stagger="<?php echo esc_attr($element['stagger'] ?? ''); ?>"
                                data-effect-split="<?php echo esc_attr($element['textSplitEffect'] ?? ''); ?>"
                                data-direction-block="<?php echo esc_attr($element['directionBlock'] ?? ''); ?>"
                                data-color-block="<?php echo esc_attr($element['colorBlockEffectIn'] ?? ''); ?>"
                                data-rotate-in-from="<?php echo esc_attr($element['rotateInFrom'] ?? ''); ?>"
                                data-rotate-in-to="<?php echo esc_attr($element['rotateInTo'] ?? ''); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($element['rotateInXFrom'] ?? ''); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($element['rotateInXTo'] ?? ''); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($element['rotateInYFrom'] ?? ''); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($element['rotateInYTo'] ?? ''); ?>"
                                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? ''); ?>"
                                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? ''); ?>"
                                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? ''); ?>"
                                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? ''); ?>"
                                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? ''); ?>"
                                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? ''); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? ''); ?>"
                                data-text-color="<?php echo esc_attr($element['textColor'] ?? ''); ?>"
                            <?php endif; 
                                if ($element['effectHover'] !== 'none') : ?>
                                data-text-color-hover="<?php echo esc_attr($element['textColorHover'] ?? ''); ?>"
                                data-effect-hover="<?php echo esc_attr($element['effectHover'] ?? ''); ?>"
                                data-scale-hover="<?php echo esc_attr($element['scaleHover'] ?? ''); ?>"
                                data-opacity-hover="<?php echo esc_attr($element['opacityHover'] ?? ''); ?>"
                                data-filter-hover="<?php echo esc_attr($element['filterHover'] ?? ''); ?>"
                                data-rotate-hover="<?php echo esc_attr($element['rotateHover'] ?? ''); ?>"
                                data-rotate-x-hover="<?php echo esc_attr($element['rotateXHover'] ?? ''); ?>"
                                data-rotate-y-hover="<?php echo esc_attr($element['rotateYHover'] ?? ''); ?>"
                                data-skew-x-hover="<?php echo esc_attr($element['skewXHover'] ?? ''); ?>"
                                data-skew-y-hover="<?php echo esc_attr($element['skewYHover'] ?? ''); ?>"
                                data-start-x-hover="<?php echo esc_attr($element['startXHover'] ?? ''); ?>"
                                data-start-y-hover="<?php echo esc_attr($element['startYHover'] ?? ''); ?>"
                                data-scale-custom-effect-hover="<?php echo esc_attr($element['scaleTypeHover'] ?? ''); ?>"
                                data-duration-hover="<?php echo esc_attr($element['durationHover'] ?? ''); ?>"
                                data-easing-hover="<?php echo esc_attr($element['easingHover'] ?? ''); ?>"
                            <?php endif; ?>
                            >
                            <?php
                           echo $link_start; ?>
                                <?php  echo esc_attr($element['text']) ?>
                                <?php echo $link_end; ?>
                            </<?php echo esc_attr($tag); ?>>
                        </div>
                            <!--
                        
                            <div  data-effect-in=""
                                data-duration=""
                                data-easing-in=""
                                data-direction-in=""
                                data-loop-in=""
                                data-height-from="10px"
                                data-height-to="25px"
                                 data-opacity-in-from="1"
                                data-opacity-in-to="1"

                                data-easing-hover="" class="dynamic-bar" style="width:100%;height: 0px;background-color:black;"></div>
                                        -->
                     <!--
                        <div class="container">
                            
  
 <svg width="200px" height="200px" viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M506.9 782.1H129.2c-10.8 0-19.5-8-19.5-17.8V259.8c0-9.8 8.8-17.8 19.5-17.8h378.4l-0.7 540.1z" fill="none" stroke="#68A240" stroke-width="2" />
    <path d="M501.8 787.5H129.2c-13.7 0-24.9-10.4-24.9-23.2V259.8c0-12.8 11.2-23.2 24.9-23.2h372.6v10.8H129.2c-7.8 0-14.2 5.6-14.2 12.5v504.5c0 6.9 6.4 12.5 14.2 12.5h372.6v10.6z" fill="none"stroke="#68A240" stroke-width="2"/>
    <path d="M150.5 298.7h303V782h-303z" fill="none" />
    <path d="M458.8 787.5H145.1V293.4h313.8v494.1z m-303-10.8h292.3V304.1H155.8v472.6z" fill="none" stroke="#68A240" stroke-width="2"/>
    <path d="M506.1 782.1h388.7c10.8 0 19.5-8 19.5-17.8V259.8c0-9.8-8.8-17.8-19.5-17.8H506.1v540.1z" fill="none" stroke="#68A240" stroke-width="2"/>
    <path d="M894.8 787.5H500.7v-551h394.1c13.7 0 24.9 10.4 24.9 23.2v504.5c0.1 12.8-11.1 23.3-24.9 23.3z m-383.3-10.8h383.3c7.8 0 14.2-5.6 14.2-12.5V259.8c0-6.9-6.4-12.5-14.2-12.5H511.5v529.4z" fill="none" stroke="#68A240" stroke-width="2" />
    <path d="M109.6 347.1h136.5c31.4 0 60.5 15.1 76.5 39.8l93.8 144.3c4.1 6.2 6.2 13.4 6.2 20.6v230.3H128.4c-10.4 0-18.8-7.7-18.8-17.2V347.1z" fill="none" stroke="#68A240" stroke-width="2">
    <path d="M428.1 787.5H128.4c-13.3 0-24.2-10.1-24.2-22.5V341.7h141.9c33.1 0 64.1 16.2 81.1 42.2L421 528.2c4.6 7.1 7.1 15.3 7.1 23.6v235.7zM115 352.5V765c0 6.5 6 11.8 13.4 11.8h288.9v-225c0-6.2-1.8-12.3-5.3-17.7l-93.8-144.3c-15-23-42.6-37.3-72-37.3H115z" fill="#333336" />
    <path d="M109.6 606h313.1v10.8H109.6z" fill="#333336" />
    <path d="M368.3 736.9H266.4c-6.6 0-12-5.4-12-12v-52.1c0-6.6 5.4-12 12-12h101.9c6.6 0 12 5.4 12 12v52.1c0 6.6-5.4 12-12 12z" fill="none" stroke="#68A240" stroke-width="2"/>
    <path d="M368.5 742.3H266.1c-9.4 0-17.1-7.7-17.1-17.1v-52.6c0-9.4 7.7-17.1 17.1-17.1h102.4c9.4 0 17.1 7.7 17.1 17.1v52.6c0.1 9.4-7.6 17.1-17.1 17.1z m-102.4-76.1c-3.5 0-6.4 2.9-6.4 6.4v52.6c0 3.5 2.9 6.4 6.4 6.4h102.4c3.5 0 6.4-2.9 6.4-6.4v-52.6c0-3.5-2.9-6.4-6.4-6.4H266.1z" fill="#333336" />
    <path d="M560.7 316.4h310.7v403.5H560.7z" fill="#D5D9CF" />
    <path d="M876.8 725.2H555.4V311h321.4v414.2z m-310.7-10.7H866V321.8H566.1v392.7z" fill="#333336" />
    <path d="M792.4 353.1H645.5c-8.4 0-15.3-6.8-15.3-15.3v-37.9h177.4v37.9c0.1 8.5-6.8 15.3-15.2 15.3z" fill="#D8A128" />
    <path d="M792.7 358.5H645.2c-11.2 0-20.3-9.1-20.3-20.3v-43.7H813v43.7c0 11.2-9.1 20.3-20.3 20.3z m-157.1-53.2v32.9c0 5.3 4.3 9.6 9.6 9.6h147.6c5.3 0 9.6-4.3 9.6-9.6v-32.9H635.6z" fill="#333336" /><path d="M811.7 441H621.8c-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4h189.8c3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.3 5.4z" fill="#333336" /><path d="M811.7 509.7H621.8c-3 0-5.4-2.4-5.4-5.4 0-3 2.4-5.4 5.4-5.4h189.8c3 0 5.4 2.4 5.4 5.4 0 3-2.4 5.4-5.3 5.4z" fill="#333336" /><path d="M811.7 578.4H621.8c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4h189.8c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.3 5.4z" fill="#333336" /><path d="M811.7 647.1H621.8c-3 0-5.4-2.4-5.4-5.4s2.4-5.4 5.4-5.4h189.8c3 0 5.4 2.4 5.4 5.4s-2.4 5.4-5.3 5.4z" fill="#333336" />
</svg>
                                       
  
  <div id="lottie" style="width: 200px; height: 200px;"></div>
</div>
                                        
 -->

                        <?php if ($slide['developerMode']) : ?>    
                        </div>
                        <?php endif; ?>

                        <?php endif; ?>
                        <!-- Fine Elemento Testo -->

                        <!-- Elemento immagine -->
                        <?php if ($element['type'] === 'image' && !empty($element['url'])): 
                            $marginTop = esc_attr($element['marginImage']['top'] ?? '0px');
                            $marginRight = esc_attr($element['marginImage']['right'] ?? '0px');
                            $marginBottom = esc_attr($element['marginImage']['bottom'] ?? '0px');
                            $marginLeft = esc_attr($element['marginImage']['left']?? '0px');
                            $style = ""; // Inizializza la variabile $style
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
                            $paddingImage = esc_attr($element['paddingImage'] ?? 0);
                            $backgroundColorImage = esc_attr($element['backgroundColorImage'] ?? '#fff');
                            $spikeLeftWidth = esc_attr($element['spikeLeftWidth'] ?? 0);
                            $spikeRightWidth = esc_attr($element['spikeRightWidth'] ?? 0);
                            $imageColorHover = esc_attr($element['imageColorHover'] ?? '#fff');
                            $margin = "$marginTop $marginRight $marginBottom $marginLeft";
                            $style .= "
                                    border-style: " . esc_attr($element['borderStyleImage']) . ";
                                    border-width: " . $backgroundBorderSizeImage . "px;
                                    border-color: " . $backgroundBorderColorImage . ";
                                    border-radius: " . $backgroundBorderRadiusImage . "px;
                                    padding: " . $paddingImage . "px;
                                    background-color: " . $backgroundColorImage .";
                                    --spike-width:" . $spikeLeftWidth . "%;
                                    --spike-width-right: " . $spikeRightWidth . "%;
                                    --color-hover-image: " . $imageColorHover . ";
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
                            style=" transform: translate(<?php echo esc_attr($element['desktop']['x']); ?>px, <?php echo esc_attr($element['desktop']['y']); ?>px); position: absolute; text-align:<?php echo $imageAlign;?>;"
                       >
                       <?php endif; ?> 
                       <div 
                           <?php 
                                $imageAlign = esc_attr($element['imageAlign'] ?? 'center');
                                $opacityImage = esc_attr($element['opacityImage'] ?? 1);
                                $rotateImage = esc_attr($element['rotateImage'] ?? 0);
                           
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
                                data-duration="<?php echo esc_attr($element['duration'] ?? ''); ?>"
                                data-delay-in="<?php echo esc_attr($element['delayIn'] ?? ''); ?>"
                                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? ''); ?>"
                                data-easing-in="<?php echo esc_attr($element['easing'] ?? ''); ?>"
                                data-direction-in="<?php echo esc_attr($element['direction'] ?? ''); ?>"
                                data-loop-in="<?php echo esc_attr($element['loop'] ?? ''); ?>"
                                data-opacity-in-from="<?php echo esc_attr($element['opacityInFrom'] ?? ''); ?>"
                                data-opacity-in-to="<?php echo esc_attr($element['opacityInTo'] ?? ''); ?>"
                                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? ''); ?>"
                                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? ''); ?>"
                                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? ''); ?>"
                                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? ''); ?>"
                                data-stagger="<?php echo esc_attr($element['stagger'] ?? ''); ?>"
                                data-effect-split="<?php echo esc_attr($element['textSplitEffect'] ?? ''); ?>"
                                data-direction-block="<?php echo esc_attr($element['directionBlock'] ?? ''); ?>"
                                data-color-block="<?php echo esc_attr($element['colorBlockEffectIn'] ?? ''); ?>"
                                data-rotate-in-from="<?php echo esc_attr($element['rotateInFrom'] ?? ''); ?>"
                                data-rotate-in-to="<?php echo esc_attr($element['rotateInTo'] ?? ''); ?>"
                                data-rotate-x-in-from="<?php echo esc_attr($element['rotateInXFrom'] ?? ''); ?>"
                                data-rotate-x-in-to="<?php echo esc_attr($element['rotateInXTo'] ?? ''); ?>"
                                data-rotate-y-in-from="<?php echo esc_attr($element['rotateInYFrom'] ?? ''); ?>"
                                data-rotate-y-in-to="<?php echo esc_attr($element['rotateInYTo'] ?? ''); ?>"
                                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? ''); ?>"
                                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? ''); ?>"
                                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? ''); ?>"
                                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? ''); ?>"
                                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? ''); ?>"
                                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? ''); ?>"
                                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? ''); ?>"
                                data-image-color="<?php echo esc_attr($element['backgroundColorImage'] ?? ''); ?>"
                            <?php endif; 
                              if ($element['effectHover'] !== 'none') : ?>
                                data-image-color-hover="<?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>"
                                data-effect-hover="<?php echo esc_attr($element['effectHover'] ?? ''); ?>"
                                data-scale-hover="<?php echo esc_attr($element['scaleHover'] ?? ''); ?>"
                                data-opacity-hover="<?php echo esc_attr($element['opacityHover'] ?? ''); ?>"
                                data-filter-hover="<?php echo esc_attr($element['filterHover'] ?? ''); ?>"
                                data-rotate-hover="<?php echo esc_attr($element['rotateHover'] ?? ''); ?>"
                                data-rotate-x-hover="<?php echo esc_attr($element['rotateXHover'] ?? ''); ?>"
                                data-rotate-y-hover="<?php echo esc_attr($element['rotateYHover'] ?? ''); ?>"
                                data-skew-x-hover="<?php echo esc_attr($element['skewXHover'] ?? ''); ?>"
                                data-skew-y-hover="<?php echo esc_attr($element['skewYHover'] ?? ''); ?>"
                                data-start-x-hover="<?php echo esc_attr($element['startXHover'] ?? ''); ?>"
                                data-start-y-hover="<?php echo esc_attr($element['startYHover'] ?? ''); ?>"
                                data-scale-custom-effect-hover="<?php echo esc_attr($element['scaleTypeHover'] ?? ''); ?>"
                                data-duration-hover="<?php echo esc_attr($element['durationHover'] ?? ''); ?>"
                                data-easing-hover="<?php echo esc_attr($element['easingHover'] ?? ''); ?>"
                            <?php endif; ?>
                                />
                        </div>
                        <?php if ($slide['developerMode']) : ?>  
                        </div>
                        <?php endif; ?>
                            <?php endif; ?>

                            <!-- Fine Elemento immagine -->







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
                                         z-index:<?php echo esc_attr( $element['zIndexDiv'] )?>;
                                         width: <?php echo esc_attr($element['contentWidthDiv']) === 'custom' ? esc_attr($element['customContentWidthDiv']) . '%' : esc_attr($element['contentWidthDiv']); ?>;
                                "
                                data-delay-hide="<?php echo esc_attr($element['delayHide']) ? 'true' : 'false'; ?>"
                                data-delay-seconds="<?php echo esc_attr($element['delaySeconds']); ?>"
                                >
                             <<?php echo esc_attr($TagDiv); ?>
                                <?php if ($element['textLinkDiv'] !== 'none') : ?>
                                    onclick="<?php echo $onclick; ?>"
                                <?php endif; ?> 
                                class="div-slide <?php echo esc_attr($element['positionDiv'] . ' ' . $element['layoutDiv'] . '-layout ' . $element['animationDiv']  . ' ' . $element['animationHoverDiv'] . ' ' . $desktopClassDiv . ' ' . $tabletClassDiv . ' ' . $mobileClassDiv ); ?>"  data-animation-div="<?php echo esc_attr($element['animationDiv']); ?>"
                                style="
                                    background-color: <?php echo esc_attr($element['backgroundColor'] ?? 'transparent'); ?>;
                                    flex-direction: <?php echo $element['layoutDiv'] === 'horizontal' ? 'row' : 'column'; ?>;
                                    flex-wrap: <?php echo $element['layoutWrap']?>;
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
                           // Wrapper
                           elseif  ($innerElement['type'] === 'wrapper'): 
                            $stylesWrapper ="
                                display: flex;
                                flexDirection: row;
                                gap:12px; 
                                color: #FFFFFF;                        
                            "
                           ?>

                            <div class="wrapper-inner" style="<?php echo esc_attr( $stylesWrapper )?>">
                                <p>Home</p>
                                <p>Services</p>
                                <p>About</p>
                                <p>Contact</p>
                                <p>Blog</p>
                                <p>Project</p>
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
                                            class="content-button-slide-inner scroll-btn-inner <?php echo esc_attr($innerElement['animationButton']);?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>" 
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
                                    z-index: " . (isset($element['zIndexButton']) ? esc_attr($element['zIndexButton']) : '1') . ";
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
                                    z-index: " . (isset($element['zIndexButton']) ? esc_attr($element['zIndexButton']) : '1') . ";
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
                                    z-index: " . (isset($element['zIndexButton']) ? esc_attr($element['zIndexButton']) : '1') . ";
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
                                    z-index: " . esc_attr($element['zIndexIcon']) . ";
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
                                    >
                                    </i>
                                </div>
                                <?php if ($slide['developerMode']) : ?>  
                                </div>
                                <?php endif; ?>
                            <?php endif;
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
