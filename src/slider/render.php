<?php
// Genera una classe unica per identificare il blocco
$slider_unique_class = 'slider-' . uniqid();

$directionSlider = !empty($attributes['directionSlider']) ? $attributes['directionSlider'] : 'horizontal';
$languageSlider = !empty($attributes['languageSlider']) ? $attributes['languageSlider'] : 'horizontal';
$effect = !empty($attributes['effect']) ? $attributes['effect'] : 'slide';
$perViewSlider = !empty($attributes['perViewSlider']) ? $attributes['perViewSlider'] : 1;
$perViewSliderTablet = !empty($attributes['perViewSliderTablet']) ? $attributes['perViewSliderTablet'] : 1;
$perViewSliderMobile = !empty($attributes['perViewSliderMobile']) ? $attributes['perViewSliderMobile'] : 1;
$spaceBetween = !empty($attributes['spaceBetween']) ? $attributes['spaceBetween'] : 0;
$spaceBetweenTablet = !empty($attributes['spaceBetweenTablet']) ? $attributes['spaceBetweenTablet'] : 0;
$spaceBetweenMobile = !empty($attributes['spaceBetweenMobile']) ? $attributes['spaceBetweenMobile'] : 0;
$slidesPerGroupDesktop = !empty($attributes['slidesPerGroupDesktop']) ? $attributes['slidesPerGroupDesktop'] : 1;
$slidesPerGroupTablet = !empty($attributes['slidesPerGroupTablet']) ? $attributes['slidesPerGroupTablet'] : 1;
$slidesPerGroupMobile = !empty($attributes['slidesPerGroupMobile']) ? $attributes['slidesPerGroupMobile'] : 1;
$slidesPerRow = !empty($attributes['slidesPerRow']) ? $attributes['slidesPerRow'] : 1;
$centeredSlides = !empty($attributes['centeredSlides']) ? $attributes['centeredSlides'] : false;
$initialSlide = !empty($attributes['initialSlide']) ? $attributes['initialSlide'] : 0;
$autoHeight = !empty($attributes['autoHeight']) ? $attributes['autoHeight'] : false;
$slideHeight = !empty($attributes['slideHeight']) ? $attributes['slideHeight'] : 300;
$grabCursor = !empty($attributes['grabCursor']) ? $attributes['grabCursor'] : false;
$loopMode = !empty($attributes['loopMode']) ? $attributes['loopMode'] : 'disable';


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