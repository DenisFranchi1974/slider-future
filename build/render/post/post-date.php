<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

function slider_future_render_post_date($post, $attributes)
{
    $datePostAlign = $attributes['datePostAlign'] ?? '';
    $datePostColor = $attributes['datePostColor'] ?? '';
    $datePostPadding = $attributes['datePostPadding'] ?? '';
    $datePostMargin = $attributes['datePostMargin'] ?? '';
    $datePostBorderRadius = $attributes['datePostBorderRadius'] ?? '';
    $datePostBorderStyle = $attributes['datePostBorderStyle'] ?? '';
    $datePostBorderSize = $attributes['datePostBorderSize'] ?? '';
    $datePostBorderColor = $attributes['datePostBorderColor'] ?? '';
    $datePostRotate = $attributes['datePostRotate'] ?? '';
    $datePostOpacity = $attributes['datePostOpacity'] ?? '';
    $datePostBoxShadow = $attributes['datePostBoxShadow'] ?? '';
    $datePostBoxShadowHOffset = $attributes['datePostBoxShadowHOffset'] ?? '';
    $datePostBoxShadowVOffset = $attributes['datePostBoxShadowVOffset'] ?? '';
    $datePostBoxShadowBlur = $attributes['datePostBoxShadowBlur'] ?? '';
    $datePostBoxShadowSpread = $attributes['datePostBoxShadowSpread'] ?? '';
    $datePostBoxShadowColor = $attributes['datePostBoxShadowColor'] ?? '';
    $datePostEffect = $attributes['datePostEffect'] ?? '';
    $datePostOpacityFrom = $attributes['datePostOpacityFrom'] ?? '';
    $datePostOpacityTo = $attributes['datePostOpacityTo'] ?? '';
    $datePostBlurFrom = $attributes['datePostBlurFrom'] ?? '';
    $datePostBlurTo = $attributes['datePostBlurTo'] ?? '';
    $datePostTranslateXFrom = $attributes['datePostTranslateXFrom'] ?? '';
    $datePostTranslateXTo = $attributes['datePostTranslateXTo'] ?? '';
    $datePostTranslateYFrom = $attributes['datePostTranslateYFrom'] ?? '';
    $datePostTranslateYTo = $attributes['datePostTranslateYTo'] ?? '';
    $datePostScaleType = $attributes['datePostScaleType'] ?? '';
    $datePostScaleFrom = $attributes['datePostScaleFrom'] ?? '';
    $datePostScaleTo = $attributes['datePostScaleTo'] ?? '';
    $datePostRotateFrom = $attributes['datePostRotateFrom'] ?? '';
    $datePostRotateTo = $attributes['datePostRotateTo'] ?? '';
    $datePostRotateXFrom = $attributes['datePostRotateXFrom'] ?? '';
    $datePostRotateXTo = $attributes['datePostRotateXTo'] ?? '';
    $datePostRotateYFrom = $attributes['datePostRotateYFrom'] ?? '';
    $datePostRotateYTo = $attributes['datePostRotateYTo'] ?? '';
    $datePostSkewXFrom = $attributes['datePostSkewXFrom'] ?? '';
    $datePostSkewXTo = $attributes['datePostSkewXTo'] ?? '';
    $datePostSkewYFrom = $attributes['datePostSkewYFrom'] ?? '';
    $datePostSkewYTo = $attributes['datePostSkewYTo'] ?? '';
    $datePostDuration = $attributes['datePostDuration'] ?? '';
    $datePostDelay = $attributes['datePostDelay'] ?? '';
    $datePostEndDelay = $attributes['datePostEndDelay'] ?? '';
    $datePostEasing = $attributes['datePostEasing'] ?? '';
    $datePostDirection = $attributes['datePostDirection'] ?? '';
    $datePostLoop = $attributes['datePostLoop'] ?? '';
    $datePostEffectHover = $attributes['datePostEffectHover'] ?? '';
    $datePostOpacityHover = $attributes['datePostOpacityHover'] ?? '';
    $datePostBlurHover = $attributes['datePostBlurHover'] ?? '';
    $datePostTranslateXHover = $attributes['datePostTranslateXHover'] ?? '';
    $datePostTranslateYHover = $attributes['datePostTranslateYHover'] ?? '';
    $datePostScaleTypeHover = $attributes['datePostScaleTypeHover'] ?? '';
    $datePostScaleHover = $attributes['datePostScaleHover'] ?? '';
    $datePostRotateHover = $attributes['datePostRotateHover'] ?? '';
    $datePostRotateXHover = $attributes['datePostRotateXHover'] ?? '';
    $datePostRotateYHover = $attributes['datePostRotateYHover'] ?? '';
    $datePostSkewXHover = $attributes['datePostSkewXHover'] ?? '';
    $datePostSkewYHover = $attributes['datePostSkewYHover'] ?? '';
    $datePostDurationHover = $attributes['datePostDurationHover'] ?? '';
    $datePostEasingHover = $attributes['datePostEasingHover'] ?? '';
    $datePostDesktop = $attributes['datePostDesktop'] ?? '';
    $datePostTablet = $attributes['datePostTablet'] ?? '';
    $datePostMobile = $attributes['datePostMobile'] ?? '';
    $datePostFontSizeMobile = $attributes['datePostFontSizeMobile'] ?? '';
    $datePostFontSizeTablet = $attributes['datePostFontSizeTablet'] ?? '';
    $datePostFontSize = $attributes['datePostFontSize'] ?? '';
    $datePostFontStyle = $attributes['datePostFontStyle'] ?? '';
    $datePostFontFamily = $attributes['datePostFontFamily'] ?? '';
    $datePostFontWeight = $attributes['datePostFontWeight'] ?? '';
    $datePostLineHeight = $attributes['datePostLineHeight'] ?? '';
    $datePostLetterSpacing = $attributes['datePostLetterSpacing'] ?? '';
    $datePostColorIn = $attributes['datePostColorIn'] ?? '';
    $datePostEffectSplit = $attributes['datePostEffectSplit'] ?? '';
    $datePostStagger = $attributes['datePostStagger'] ?? '';
    $datePostDirectionBlock = $attributes['datePostDirectionBlock'] ?? '';
    $datePostBlockColor = $attributes['datePostBlockColor'] ?? '';

    $isBold = isset($datePostFontStyle['fontWeight']) && $datePostFontStyle['fontWeight'] === 'bold';
    $fontStyle = isset($datePostFontStyle['fontStyle']) ? esc_attr($datePostFontStyle['fontStyle']) : 'normal'; // Valore di default
    $fontWeight = $isBold ? 'bold' : (isset($datePostFontWeight) ? esc_attr($datePostFontWeight) : 'normal'); // Valore di default
    $textDecoration = isset($datePostFontStyle['textDecoration']) ? esc_attr($datePostFontStyle['textDecoration']) : 'none'; // Valore di default

    $style = "
    letter-spacing: " . esc_attr($datePostLetterSpacing) . "px;
    line-height: " . esc_attr($datePostLineHeight) . ";
    font-family: " . esc_attr($datePostFontFamily) . ";
    font-style: " . $fontStyle . ";
    font-weight: " . $fontWeight . ";
    text-decoration: " . $textDecoration . ";
    font-size: clamp(" . esc_attr($datePostFontSizeMobile) . "px," . esc_attr($datePostFontSizeTablet) . "vw, " . esc_attr($datePostFontSize) . "px); 
    padding-top: " . esc_attr($datePostPadding['top']) . ";
    padding-bottom: " . esc_attr($datePostPadding['bottom']) . ";
    padding-left: " . esc_attr($datePostPadding['left']) . ";
    padding-right: " . esc_attr($datePostPadding['right']) . ";
    margin-top: " . esc_attr($datePostMargin['top']) . ";
    margin-bottom: " . esc_attr($datePostMargin['bottom']) . ";
    margin-left: " . esc_attr($datePostMargin['left']) . ";
    margin-right: " . esc_attr($datePostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($datePostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($datePostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($datePostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($datePostBorderRadius['left']) . ";
    border-style: " . esc_attr($datePostBorderStyle) . ";
    border-width: " . esc_attr($datePostBorderSize['top']) . " " . esc_attr($datePostBorderSize['right']) . " " . esc_attr($datePostBorderSize['bottom']) . " " . esc_attr($datePostBorderSize['left']) . ";
    border-color: " . esc_attr($datePostBorderColor) . ";
    transform: rotate(" . esc_attr($datePostRotate) . "deg);
    opacity: " . esc_attr($datePostOpacity) . ";
    " . ($datePostBoxShadow ? "box-shadow: " . esc_attr($datePostBoxShadowHOffset . 'px') . " " . esc_attr($datePostBoxShadowVOffset . 'px') . " " . esc_attr($datePostBoxShadowBlur . 'px') . " " . esc_attr($datePostBoxShadowSpread . 'px') . " " . esc_attr($datePostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($datePostColor) . ";
    color: " . esc_attr($datePostColorIn) . ";
    max-width: max-content;
";
    $desktopClassDate = $datePostDesktop ? 'desktop-post-date-visible' : 'desktop-post-date-hidden';
    $tabletClassDate = $datePostMobile ? 'tablet-post-date-visible' : 'tablet-post-date-hidden';
    $mobileClassDate = $datePostTablet ? 'mobile-post-date-visible' : 'mobile-post-date-hidden';
?>
    <div class="content-date-post" style="justify-content:<?php echo esc_attr($datePostAlign); ?>;display:flex;">
        <p class="date-post <?php echo esc_attr($desktopClassDate); ?> <?php echo esc_attr($tabletClassDate); ?> <?php echo esc_attr($mobileClassDate); ?>"
            data-font-family="<?php echo esc_attr($datePostFontFamily); ?>"
            style="<?php echo esc_attr($style); ?>"
            <?php if ($datePostEffect !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($datePostEffect); ?>"
            data-duration="<?php echo esc_attr($datePostDuration); ?>"
            data-delay-in="<?php echo esc_attr($datePostDelay); ?>"
            data-delay-in-end="<?php echo esc_attr($datePostEndDelay); ?>"
            data-easing-in="<?php echo esc_attr($datePostEasing); ?>"
            data-direction-in="<?php echo esc_attr($datePostDirection); ?>"
            data-loop-in="<?php echo esc_attr($datePostLoop); ?>"
            data-opacity-in-from="<?php echo esc_attr($datePostOpacityFrom); ?>"
            data-opacity-in-to="<?php echo esc_attr($datePostOpacityTo); ?>"
            data-filter-in-from="<?php echo esc_attr($datePostBlurFrom); ?>"
            data-filter-in-to="<?php echo esc_attr($datePostBlurTo); ?>"
            data-start-x-from="<?php echo esc_attr($datePostTranslateXFrom); ?>"
            data-start-x-to="<?php echo esc_attr($datePostTranslateXTo); ?>"
            data-start-y-from="<?php echo esc_attr($datePostTranslateYFrom); ?>"
            data-start-y-to="<?php echo esc_attr($datePostTranslateYTo); ?>"
            data-rotate-in-from="<?php echo esc_attr($datePostRotateFrom); ?>"
            data-rotate-in-to="<?php echo esc_attr($datePostRotateTo); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($datePostRotateXFrom); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($datePostRotateXTo); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($datePostRotateYFrom); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($datePostRotateYTo); ?>"
            data-scale-in-from="<?php echo esc_attr($datePostScaleFrom); ?>"
            data-scale-in-to="<?php echo esc_attr($datePostScaleTo); ?>"
            data-skew-x-from="<?php echo esc_attr($datePostSkewXFrom); ?>"
            data-skew-x-to="<?php echo esc_attr($datePostSkewXTo); ?>"
            data-skew-y-from="<?php echo esc_attr($datePostSkewYFrom); ?>"
            data-skew-y-to="<?php echo esc_attr($datePostSkewYTo); ?>"
            data-scale-custom-effect-in="<?php echo esc_attr($datePostScaleType); ?>"
            data-stagger="<?php echo esc_attr($datePostStagger); ?>"
            data-effect-split="<?php echo esc_attr($datePostEffectSplit); ?>"
            data-direction-block="<?php echo esc_attr($datePostDirectionBlock); ?>"
            data-color-block="<?php echo esc_attr($datePostBlockColor); ?>"
            <?php endif;
            if ($datePostEffectHover !== 'none') : ?>
            data-effect-hover="<?php echo esc_attr($datePostEffectHover); ?>"
            data-scale-hover="<?php echo esc_attr($datePostScaleHover); ?>"
            data-opacity-hover="<?php echo esc_attr($datePostOpacityHover); ?>"
            data-filter-hover="<?php echo esc_attr($datePostBlurHover); ?>"
            data-rotate-hover="<?php echo esc_attr($datePostRotateHover); ?>"
            data-rotate-x-hover="<?php echo esc_attr($datePostRotateXHover); ?>"
            data-rotate-y-hover="<?php echo esc_attr($datePostRotateYHover); ?>"
            data-skew-x-hover="<?php echo esc_attr($datePostSkewXHover); ?>"
            data-skew-y-hover="<?php echo esc_attr($datePostSkewYHover); ?>"
            data-start-x-hover="<?php echo esc_attr($datePostTranslateXHover); ?>"
            data-start-y-hover="<?php echo esc_attr($datePostTranslateYHover); ?>"
            data-scale-custom-effect-hover="<?php echo esc_attr($datePostScaleTypeHover); ?>"
            data-duration-hover="<?php echo esc_attr($datePostDurationHover); ?>"
            data-easing-hover="<?php echo esc_attr($datePostEasingHover); ?>"
            <?php endif; ?>>
            <?php echo esc_html($post['date']); ?>
        </p>
    </div>

<?php

} ?>