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


// Recupera le slide dai tuoi attributi (adatta questo in base alla struttura dei tuoi attributi)
$slides = !empty($attributes['slides']) ? $attributes['slides'] : [];

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
);

$swiper_attr_encoded = esc_attr(wp_json_encode($swiper_attr));

$wrapper_attributes = get_block_wrapper_attributes(
    array(
        'class' => 'swiper ' . $slider_unique_class,
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
                    echo 'flex-direction: ' . esc_attr($slide['layout'] === 'horizontal' ? 'row' : 'column') . ';';
                ?>">
                <?php if (!empty($slide['backgroundType']) && $slide['backgroundType'] === 'video' && !empty($slide['backgroundVideo'])) : ?>
                    <video src="<?php echo esc_url($slide['backgroundVideo']); ?>" autoplay muted loop style="width: 100%; object-position: <?php echo esc_attr( $background_position )?>; height: 100%; position: absolute; top: 0; left: 0; object-fit: cover; z-index: 0;"></video>
                <?php endif; ?>

                <?php if (!empty($slide['elements']) && is_array($slide['elements'])): ?>
                    <?php foreach ($slide['elements'] as $element): ?>
                        <?php if ($element['type'] === 'title' && !empty($element['text'])): 
                            $stylesTitle = 'font-size: ' . esc_attr($element['fontSize']) . 'px; --font-size-tablet: ' . esc_attr($element['fontSizeTablet']) . 'px; --font-size-mobile: ' . esc_attr($element['fontSizeMobile']) . 'px;';
                        ?>
                            <h3 style="<?php echo esc_attr($stylesTitle); ?>" class="title-slide">
                                <?php echo esc_html($element['text']); ?>
                            </h3>
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

                        <?php if ($element['type'] === 'image' && !empty($element['url'])): ?>
                            <div style="max-width: 100%;">
                                <img src="<?php echo esc_url($element['url']); ?>" alt="<?php echo esc_attr($element['alt']); ?>" />
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                <?php endif; ?>
                
            </div>
        <?php endforeach; ?>
    </div>
    
    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-scrollbar"></div>
</div>