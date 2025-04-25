<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

function slider_future_render_post_link($post, $attributes)
{
    $linkPostAlign = $attributes['linkPostAlign'] ?? '';
    $linkPostColor = $attributes['linkPostColor'] ?? '';
    $linkPostPadding = $attributes['linkPostPadding'] ?? '';
    $linkPostMargin = $attributes['linkPostMargin'] ?? '';
    $linkPostBorderRadius = $attributes['linkPostBorderRadius'] ?? '';
    $linkPostBorderStyle = $attributes['linkPostBorderStyle'] ?? '';
    $linkPostBorderSize = $attributes['linkPostBorderSize'] ?? '';
    $linkPostBorderColor = $attributes['linkPostBorderColor'] ?? '';
    $linkPostRotate = $attributes['linkPostRotate'] ?? '';
    $linkPostOpacity = $attributes['linkPostOpacity'] ?? '';
    $linkPostBoxShadow = $attributes['linkPostBoxShadow'] ?? '';
    $linkPostBoxShadowHOffset = $attributes['linkPostBoxShadowHOffset'] ?? '';
    $linkPostBoxShadowVOffset = $attributes['linkPostBoxShadowVOffset'] ?? '';
    $linkPostBoxShadowBlur = $attributes['linkPostBoxShadowBlur'] ?? '';
    $linkPostBoxShadowSpread = $attributes['linkPostBoxShadowSpread'] ?? '';
    $linkPostBoxShadowColor = $attributes['linkPostBoxShadowColor'] ?? '';
    $linkPostEffect = $attributes['linkPostEffect'] ?? '';
    $linkPostOpacityFrom = $attributes['linkPostOpacityFrom'] ?? '';
    $linkPostOpacityTo = $attributes['linkPostOpacityTo'] ?? '';
    $linkPostBlurFrom = $attributes['linkPostBlurFrom'] ?? '';
    $linkPostBlurTo = $attributes['linkPostBlurTo'] ?? '';
    $linkPostTranslateXFrom = $attributes['linkPostTranslateXFrom'] ?? '';
    $linkPostTranslateXTo = $attributes['linkPostTranslateXTo'] ?? '';
    $linkPostTranslateYFrom = $attributes['linkPostTranslateYFrom'] ?? '';
    $linkPostTranslateYTo = $attributes['linkPostTranslateYTo'] ?? '';
    $linkPostScaleType = $attributes['linkPostScaleType'] ?? '';
    $linkPostScaleFrom = $attributes['linkPostScaleFrom'] ?? '';
    $linkPostScaleTo = $attributes['linkPostScaleTo'] ?? '';
    $linkPostRotateFrom = $attributes['linkPostRotateFrom'] ?? '';
    $linkPostRotateTo = $attributes['linkPostRotateTo'] ?? '';
    $linkPostRotateXFrom = $attributes['linkPostRotateXFrom'] ?? '';
    $linkPostRotateXTo = $attributes['linkPostRotateXTo'] ?? '';
    $linkPostRotateYFrom = $attributes['linkPostRotateYFrom'] ?? '';
    $linkPostRotateYTo = $attributes['linkPostRotateYTo'] ?? '';
    $linkPostSkewXFrom = $attributes['linkPostSkewXFrom'] ?? '';
    $linkPostSkewXTo = $attributes['linkPostSkewXTo'] ?? '';
    $linkPostSkewYFrom = $attributes['linkPostSkewYFrom'] ?? '';
    $linkPostSkewYTo = $attributes['linkPostSkewYTo'] ?? '';
    $linkPostDuration = $attributes['linkPostDuration'] ?? '';
    $linkPostDelay = $attributes['linkPostDelay'] ?? '';
    $linkPostEndDelay = $attributes['linkPostEndDelay'] ?? '';
    $linkPostEasing = $attributes['linkPostEasing'] ?? '';
    $linkPostDirection = $attributes['linkPostDirection'] ?? '';
    $linkPostLoop = $attributes['linkPostLoop'] ?? '';
    $linkPostEffectHover = $attributes['linkPostEffectHover'] ?? '';
    $linkPostOpacityHover = $attributes['linkPostOpacityHover'] ?? '';
    $linkPostBlurHover = $attributes['linkPostBlurHover'] ?? '';
    $linkPostTranslateXHover = $attributes['linkPostTranslateXHover'] ?? '';
    $linkPostTranslateYHover = $attributes['linkPostTranslateYHover'] ?? '';
    $linkPostScaleTypeHover = $attributes['linkPostScaleTypeHover'] ?? '';
    $linkPostScaleHover = $attributes['linkPostScaleHover'] ?? '';
    $linkPostRotateHover = $attributes['linkPostRotateHover'] ?? '';
    $linkPostRotateXHover = $attributes['linkPostRotateXHover'] ?? '';
    $linkPostRotateYHover = $attributes['linkPostRotateYHover'] ?? '';
    $linkPostSkewXHover = $attributes['linkPostSkewXHover'] ?? '';
    $linkPostSkewYHover = $attributes['linkPostSkewYHover'] ?? '';
    $linkPostDurationHover = $attributes['linkPostDurationHover'] ?? '';
    $linkPostEasingHover = $attributes['linkPostEasingHover'] ?? '';
    $linkPostDesktop = $attributes['linkPostDesktop'] ?? '';
    $linkPostTablet = $attributes['linkPostTablet'] ?? '';
    $linkPostMobile = $attributes['linkPostMobile'] ?? '';
    $linkPostFontSizeMobile = $attributes['linkPostFontSizeMobile'] ?? '';
    $linkPostFontSizeTablet = $attributes['linkPostFontSizeTablet'] ?? '';
    $linkPostFontSize = $attributes['linkPostFontSize'] ?? '';
    $linkPostFontStyle = $attributes['linkPostFontStyle'] ?? '';
    $linkPostFontFamily = $attributes['linkPostFontFamily'] ?? '';
    $linkPostFontWeight = $attributes['linkPostFontWeight'] ?? '';
    $linkPostLineHeight = $attributes['linkPostLineHeight'] ?? '';
    $linkPostLetterSpacing = $attributes['linkPostLetterSpacing'] ?? '';
    $linkPostColorIn = $attributes['linkPostColorIn'] ?? '';
    $linkPostEffectSplit = $attributes['linkPostEffectSplit'] ?? '';
    $linkPostStagger = $attributes['linkPostStagger'] ?? '';
    $linkPostDirectionBlock = $attributes['linkPostDirectionBlock'] ?? '';
    $linkPostBlockColor = $attributes['linkPostBlockColor'] ?? '';
    $linkPostContent = $attributes['linkPostContent'] ?? '';

    $isBold = isset($linkPostFontStyle['fontWeight']) && $linkPostFontStyle['fontWeight'] === 'bold';
    $fontStyle = isset($linkPostFontStyle['fontStyle']) ? esc_attr($linkPostFontStyle['fontStyle']) : 'normal'; // Valore di default
    $fontWeight = $isBold ? 'bold' : (isset($linkPostFontWeight) ? esc_attr($linkPostFontWeight) : 'normal'); // Valore di default
    $textDecoration = isset($linkPostFontStyle['textDecoration']) ? esc_attr($linkPostFontStyle['textDecoration']) : 'none'; // Valore di default

    $style = "
    letter-spacing: " . esc_attr($linkPostLetterSpacing) . "px;
    line-height: " . esc_attr($linkPostLineHeight) . ";
    font-family: " . esc_attr($linkPostFontFamily) . ";
    font-style: " . $fontStyle . ";
    font-weight: " . $fontWeight . ";
    text-decoration: " . $textDecoration . ";
    font-size: clamp(" . esc_attr($linkPostFontSizeMobile) . "px," . esc_attr($linkPostFontSizeTablet) . "vw, " . esc_attr($linkPostFontSize) . "px); 
    padding-top: " . esc_attr($linkPostPadding['top']) . ";
    padding-bottom: " . esc_attr($linkPostPadding['bottom']) . ";
    padding-left: " . esc_attr($linkPostPadding['left']) . ";
    padding-right: " . esc_attr($linkPostPadding['right']) . ";
    margin-top: " . esc_attr($linkPostMargin['top']) . ";
    margin-bottom: " . esc_attr($linkPostMargin['bottom']) . ";
    margin-left: " . esc_attr($linkPostMargin['left']) . ";
    margin-right: " . esc_attr($linkPostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($linkPostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($linkPostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($linkPostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($linkPostBorderRadius['left']) . ";
    border-style: " . esc_attr($linkPostBorderStyle) . ";
    border-width: " . esc_attr($linkPostBorderSize['top']) . " " . esc_attr($linkPostBorderSize['right']) . " " . esc_attr($linkPostBorderSize['bottom']) . " " . esc_attr($linkPostBorderSize['left']) . ";
    border-color: " . esc_attr($linkPostBorderColor) . ";
    transform: rotate(" . esc_attr($linkPostRotate) . "deg);
    opacity: " . esc_attr($linkPostOpacity) . ";
    " . ($linkPostBoxShadow ? "box-shadow: " . esc_attr($linkPostBoxShadowHOffset . 'px') . " " . esc_attr($linkPostBoxShadowVOffset . 'px') . " " . esc_attr($linkPostBoxShadowBlur . 'px') . " " . esc_attr($linkPostBoxShadowSpread . 'px') . " " . esc_attr($linkPostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($linkPostColor) . ";
    color: " . esc_attr($linkPostColorIn) . ";
    max-width: max-content;
";
    $desktopClassLink = $linkPostDesktop ? 'desktop-post-link-visible' : 'desktop-post-link-hidden';
    $tabletClassLink = $linkPostMobile ? 'tablet-post-link-visible' : 'tablet-post-link-hidden';
    $mobileClassLink = $linkPostTablet ? 'mobile-post-link-visible' : 'mobile-post-link-hidden';
?>
    <div class="content-link-post" style="justify-content:<?php echo esc_attr($linkPostAlign); ?>;display:flex;cursor: pointer;">
        <a href="<?php echo esc_url($post['link']); ?>" class="link-post <?php echo esc_attr($desktopClassLink); ?> <?php echo esc_attr($tabletClassLink); ?> <?php echo esc_attr($mobileClassLink); ?>"
            data-font-family="<?php echo esc_attr($linkPostFontFamily); ?>"
            style="<?php echo esc_attr($style); ?>"
            <?php if ($linkPostEffect !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($linkPostEffect); ?>"
            data-duration="<?php echo esc_attr($linkPostDuration); ?>"
            data-delay-in="<?php echo esc_attr($linkPostDelay); ?>"
            data-delay-in-end="<?php echo esc_attr($linkPostEndDelay); ?>"
            data-easing-in="<?php echo esc_attr($linkPostEasing); ?>"
            data-direction-in="<?php echo esc_attr($linkPostDirection); ?>"
            data-loop-in="<?php echo esc_attr($linkPostLoop); ?>"
            data-opacity-in-from="<?php echo esc_attr($linkPostOpacityFrom); ?>"
            data-opacity-in-to="<?php echo esc_attr($linkPostOpacityTo); ?>"
            data-filter-in-from="<?php echo esc_attr($linkPostBlurFrom); ?>"
            data-filter-in-to="<?php echo esc_attr($linkPostBlurTo); ?>"
            data-start-x-from="<?php echo esc_attr($linkPostTranslateXFrom); ?>"
            data-start-x-to="<?php echo esc_attr($linkPostTranslateXTo); ?>"
            data-start-y-from="<?php echo esc_attr($linkPostTranslateYFrom); ?>"
            data-start-y-to="<?php echo esc_attr($linkPostTranslateYTo); ?>"
            data-rotate-in-from="<?php echo esc_attr($linkPostRotateFrom); ?>"
            data-rotate-in-to="<?php echo esc_attr($linkPostRotateTo); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($linkPostRotateXFrom); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($linkPostRotateXTo); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($linkPostRotateYFrom); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($linkPostRotateYTo); ?>"
            data-scale-in-from="<?php echo esc_attr($linkPostScaleFrom); ?>"
            data-scale-in-to="<?php echo esc_attr($linkPostScaleTo); ?>"
            data-skew-x-from="<?php echo esc_attr($linkPostSkewXFrom); ?>"
            data-skew-x-to="<?php echo esc_attr($linkPostSkewXTo); ?>"
            data-skew-y-from="<?php echo esc_attr($linkPostSkewYFrom); ?>"
            data-skew-y-to="<?php echo esc_attr($linkPostSkewYTo); ?>"
            data-scale-custom-effect-in="<?php echo esc_attr($linkPostScaleType); ?>"
            data-stagger="<?php echo esc_attr($linkPostStagger); ?>"
            data-effect-split="<?php echo esc_attr($linkPostEffectSplit); ?>"
            data-direction-block="<?php echo esc_attr($linkPostDirectionBlock); ?>"
            data-color-block="<?php echo esc_attr($linkPostBlockColor); ?>"
            <?php endif;
            if ($linkPostEffectHover !== 'none') : ?>
            data-effect-hover="<?php echo esc_attr($linkPostEffectHover); ?>"
            data-scale-hover="<?php echo esc_attr($linkPostScaleHover); ?>"
            data-opacity-hover="<?php echo esc_attr($linkPostOpacityHover); ?>"
            data-filter-hover="<?php echo esc_attr($linkPostBlurHover); ?>"
            data-rotate-hover="<?php echo esc_attr($linkPostRotateHover); ?>"
            data-rotate-x-hover="<?php echo esc_attr($linkPostRotateXHover); ?>"
            data-rotate-y-hover="<?php echo esc_attr($linkPostRotateYHover); ?>"
            data-skew-x-hover="<?php echo esc_attr($linkPostSkewXHover); ?>"
            data-skew-y-hover="<?php echo esc_attr($linkPostSkewYHover); ?>"
            data-start-x-hover="<?php echo esc_attr($linkPostTranslateXHover); ?>"
            data-start-y-hover="<?php echo esc_attr($linkPostTranslateYHover); ?>"
            data-scale-custom-effect-hover="<?php echo esc_attr($linkPostScaleTypeHover); ?>"
            data-duration-hover="<?php echo esc_attr($linkPostDurationHover); ?>"
            data-easing-hover="<?php echo esc_attr($linkPostEasingHover); ?>"
            <?php endif; ?>>
            <?php echo esc_html($linkPostContent); ?>
        </a>
    </div>

<?php

} ?>