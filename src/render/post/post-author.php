<?php
function render_post_author($post, $attributes)
{
    $authorPostAlign = $attributes['authorPostAlign'] ?? '';
    $authorPostColor = $attributes['authorPostColor'] ?? '';
    $authorPostPadding = $attributes['authorPostPadding'] ?? '';
    $authorPostMargin = $attributes['authorPostMargin'] ?? '';
    $authorPostBorderRadius = $attributes['authorPostBorderRadius'] ?? '';
    $authorPostBorderStyle = $attributes['authorPostBorderStyle'] ?? '';
    $authorPostBorderSize = $attributes['authorPostBorderSize'] ?? '';
    $authorPostBorderColor = $attributes['authorPostBorderColor'] ?? '';
    $authorPostRotate = $attributes['authorPostRotate'] ?? '';
    $authorPostOpacity = $attributes['authorPostOpacity'] ?? '';
    $authorPostBoxShadow = $attributes['authorPostBoxShadow'] ?? '';
    $authorPostBoxShadowHOffset = $attributes['authorPostBoxShadowHOffset'] ?? '';
    $authorPostBoxShadowVOffset = $attributes['authorPostBoxShadowVOffset'] ?? '';
    $authorPostBoxShadowBlur = $attributes['authorPostBoxShadowBlur'] ?? '';
    $authorPostBoxShadowSpread = $attributes['authorPostBoxShadowSpread'] ?? '';
    $authorPostBoxShadowColor = $attributes['authorPostBoxShadowColor'] ?? '';
    $authorPostEffect = $attributes['authorPostEffect'] ?? '';
    $authorPostOpacityFrom = $attributes['authorPostOpacityFrom'] ?? '';
    $authorPostOpacityTo = $attributes['authorPostOpacityTo'] ?? '';
    $authorPostBlurFrom = $attributes['authorPostBlurFrom'] ?? '';
    $authorPostBlurTo = $attributes['authorPostBlurTo'] ?? '';
    $authorPostTranslateXFrom = $attributes['authorPostTranslateXFrom'] ?? '';
    $authorPostTranslateXTo = $attributes['authorPostTranslateXTo'] ?? '';
    $authorPostTranslateYFrom = $attributes['authorPostTranslateYFrom'] ?? '';
    $authorPostTranslateYTo = $attributes['authorPostTranslateYTo'] ?? '';
    $authorPostScaleType = $attributes['authorPostScaleType'] ?? '';
    $authorPostScaleFrom = $attributes['authorPostScaleFrom'] ?? '';
    $authorPostScaleTo = $attributes['authorPostScaleTo'] ?? '';
    $authorPostRotateFrom = $attributes['authorPostRotateFrom'] ?? '';
    $authorPostRotateTo = $attributes['authorPostRotateTo'] ?? '';
    $authorPostRotateXFrom = $attributes['authorPostRotateXFrom'] ?? '';
    $authorPostRotateXTo = $attributes['authorPostRotateXTo'] ?? '';
    $authorPostRotateYFrom = $attributes['authorPostRotateYFrom'] ?? '';
    $authorPostRotateYTo = $attributes['authorPostRotateYTo'] ?? '';
    $authorPostSkewXFrom = $attributes['authorPostSkewXFrom'] ?? '';
    $authorPostSkewXTo = $attributes['authorPostSkewXTo'] ?? '';
    $authorPostSkewYFrom = $attributes['authorPostSkewYFrom'] ?? '';
    $authorPostSkewYTo = $attributes['authorPostSkewYTo'] ?? '';
    $authorPostDuration = $attributes['authorPostDuration'] ?? '';
    $authorPostDelay = $attributes['authorPostDelay'] ?? '';
    $authorPostEndDelay = $attributes['authorPostEndDelay'] ?? '';
    $authorPostEasing = $attributes['authorPostEasing'] ?? '';
    $authorPostDirection = $attributes['authorPostDirection'] ?? '';
    $authorPostLoop = $attributes['authorPostLoop'] ?? '';
    $authorPostEffectHover = $attributes['authorPostEffectHover'] ?? '';
    $authorPostOpacityHover = $attributes['authorPostOpacityHover'] ?? '';
    $authorPostBlurHover = $attributes['authorPostBlurHover'] ?? '';
    $authorPostTranslateXHover = $attributes['authorPostTranslateXHover'] ?? '';
    $authorPostTranslateYHover = $attributes['authorPostTranslateYHover'] ?? '';
    $authorPostScaleTypeHover = $attributes['authorPostScaleTypeHover'] ?? '';
    $authorPostScaleHover = $attributes['authorPostScaleHover'] ?? '';
    $authorPostRotateHover = $attributes['authorPostRotateHover'] ?? '';
    $authorPostRotateXHover = $attributes['authorPostRotateXHover'] ?? '';
    $authorPostRotateYHover = $attributes['authorPostRotateYHover'] ?? '';
    $authorPostSkewXHover = $attributes['authorPostSkewXHover'] ?? '';
    $authorPostSkewYHover = $attributes['authorPostSkewYHover'] ?? '';
    $authorPostDurationHover = $attributes['authorPostDurationHover'] ?? '';
    $authorPostEasingHover = $attributes['authorPostEasingHover'] ?? '';
    $authorPostDesktop = $attributes['authorPostDesktop'] ?? '';
    $authorPostTablet = $attributes['authorPostTablet'] ?? '';
    $authorPostMobile = $attributes['authorPostMobile'] ?? '';
    $authorPostFontSizeMobile = $attributes['authorPostFontSizeMobile'] ?? '';
    $authorPostFontSizeTablet = $attributes['authorPostFontSizeTablet'] ?? '';
    $authorPostFontSize = $attributes['authorPostFontSize'] ?? '';
    $authorPostFontStyle = $attributes['authorPostFontStyle'] ?? '';
    $authorPostFontFamily = $attributes['authorPostFontFamily'] ?? '';
    $authorPostFontWeight = $attributes['authorPostFontWeight'] ?? '';
    $authorPostLineHeight = $attributes['authorPostLineHeight'] ?? '';
    $authorPostLetterSpacing = $attributes['authorPostLetterSpacing'] ?? '';
    $authorPostColorIn = $attributes['authorPostColorIn'] ?? '';
    $authorPostEffectSplit = $attributes['authorPostEffectSplit'] ?? '';
    $authorPostStagger = $attributes['authorPostStagger'] ?? '';
    $authorPostDirectionBlock = $attributes['authorPostDirectionBlock'] ?? '';
    $authorPostBlockColor = $attributes['authorPostBlockColor'] ?? '';

    $isBold = isset($authorPostFontStyle['fontWeight']) && $authorPostFontStyle['fontWeight'] === 'bold';
    $fontStyle = isset($authorPostFontStyle['fontStyle']) ? esc_attr($authorPostFontStyle['fontStyle']) : 'normal'; // Valore di default
    $fontWeight = $isBold ? 'bold' : (isset($authorPostFontWeight) ? esc_attr($authorPostFontWeight) : 'normal'); // Valore di default
    $textDecoration = isset($authorPostFontStyle['textDecoration']) ? esc_attr($authorPostFontStyle['textDecoration']) : 'none'; // Valore di default

    $style = "
    letter-spacing: " . esc_attr($authorPostLetterSpacing) . "px;
    line-height: " . esc_attr($authorPostLineHeight) . ";
    font-family: " . esc_attr($authorPostFontFamily) . ";
    font-style: " . $fontStyle . ";
    font-weight: " . $fontWeight . ";
    text-decoration: " . $textDecoration . ";
    font-size: clamp(" . esc_attr($authorPostFontSizeMobile) . "px," . esc_attr($authorPostFontSizeTablet) . "vw, " . esc_attr($authorPostFontSize) . "px); 
    padding-top: " . esc_attr($authorPostPadding['top']) . ";
    padding-bottom: " . esc_attr($authorPostPadding['bottom']) . ";
    padding-left: " . esc_attr($authorPostPadding['left']) . ";
    padding-right: " . esc_attr($authorPostPadding['right']) . ";
    margin-top: " . esc_attr($authorPostMargin['top']) . ";
    margin-bottom: " . esc_attr($authorPostMargin['bottom']) . ";
    margin-left: " . esc_attr($authorPostMargin['left']) . ";
    margin-right: " . esc_attr($authorPostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($authorPostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($authorPostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($authorPostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($authorPostBorderRadius['left']) . ";
    border-style: " . esc_attr($authorPostBorderStyle) . ";
    border-width: " . esc_attr($authorPostBorderSize['top']) . " " . esc_attr($authorPostBorderSize['right']) . " " . esc_attr($authorPostBorderSize['bottom']) . " " . esc_attr($authorPostBorderSize['left']) . ";
    border-color: " . esc_attr($authorPostBorderColor) . ";
    transform: rotate(" . esc_attr($authorPostRotate) . "deg);
    opacity: " . esc_attr($authorPostOpacity) . ";
    " . ($authorPostBoxShadow ? "box-shadow: " . esc_attr($authorPostBoxShadowHOffset . 'px') . " " . esc_attr($authorPostBoxShadowVOffset . 'px') . " " . esc_attr($authorPostBoxShadowBlur . 'px') . " " . esc_attr($authorPostBoxShadowSpread . 'px') . " " . esc_attr($authorPostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($authorPostColor) . ";
    color: " . esc_attr($authorPostColorIn) . ";
    max-width: max-content;
";
    $desktopClassAuthor = $authorPostDesktop ? 'desktop-post-author-visible' : 'desktop-post-author-hidden';
    $tabletClassAuthor = $authorPostMobile ? 'tablet-post-author-visible' : 'tablet-post-author-hidden';
    $mobileClassAuthor = $authorPostTablet ? 'mobile-post-author-visible' : 'mobile-post-author-hidden';
?>
    <div class="content-author-post" style="justify-content:<?php echo esc_attr($authorPostAlign); ?>;display:flex;">
        <p class="author-post <?php echo esc_attr($desktopClassAuthor); ?> <?php echo esc_attr($tabletClassAuthor); ?> <?php echo esc_attr($mobileClassAuthor); ?>"
            data-font-family="<?php echo esc_attr($authorPostFontFamily); ?>"
            style="<?php echo esc_attr($style); ?>"
            <?php if ($authorPostEffect !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($authorPostEffect); ?>"
            data-duration="<?php echo esc_attr($authorPostDuration); ?>"
            data-delay-in="<?php echo esc_attr($authorPostDelay); ?>"
            data-delay-in-end="<?php echo esc_attr($authorPostEndDelay); ?>"
            data-easing-in="<?php echo esc_attr($authorPostEasing); ?>"
            data-direction-in="<?php echo esc_attr($authorPostDirection); ?>"
            data-loop-in="<?php echo esc_attr($authorPostLoop); ?>"
            data-opacity-in-from="<?php echo esc_attr($authorPostOpacityFrom); ?>"
            data-opacity-in-to="<?php echo esc_attr($authorPostOpacityTo); ?>"
            data-filter-in-from="<?php echo esc_attr($authorPostBlurFrom); ?>"
            data-filter-in-to="<?php echo esc_attr($authorPostBlurTo); ?>"
            data-start-x-from="<?php echo esc_attr($authorPostTranslateXFrom); ?>"
            data-start-x-to="<?php echo esc_attr($authorPostTranslateXTo); ?>"
            data-start-y-from="<?php echo esc_attr($authorPostTranslateYFrom); ?>"
            data-start-y-to="<?php echo esc_attr($authorPostTranslateYTo); ?>"
            data-rotate-in-from="<?php echo esc_attr($authorPostRotateFrom); ?>"
            data-rotate-in-to="<?php echo esc_attr($authorPostRotateTo); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($authorPostRotateXFrom); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($authorPostRotateXTo); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($authorPostRotateYFrom); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($authorPostRotateYTo); ?>"
            data-scale-in-from="<?php echo esc_attr($authorPostScaleFrom); ?>"
            data-scale-in-to="<?php echo esc_attr($authorPostScaleTo); ?>"
            data-skew-x-from="<?php echo esc_attr($authorPostSkewXFrom); ?>"
            data-skew-x-to="<?php echo esc_attr($authorPostSkewXTo); ?>"
            data-skew-y-from="<?php echo esc_attr($authorPostSkewYFrom); ?>"
            data-skew-y-to="<?php echo esc_attr($authorPostSkewYTo); ?>"
            data-scale-custom-effect-in="<?php echo esc_attr($authorPostScaleType); ?>"
            data-stagger="<?php echo esc_attr($authorPostStagger); ?>"
            data-effect-split="<?php echo esc_attr($authorPostEffectSplit); ?>"
            data-direction-block="<?php echo esc_attr($authorPostDirectionBlock); ?>"
            data-color-block="<?php echo esc_attr($authorPostBlockColor); ?>"
            <?php endif;
            if ($authorPostEffectHover !== 'none') : ?>
            data-effect-hover="<?php echo esc_attr($authorPostEffectHover); ?>"
            data-scale-hover="<?php echo esc_attr($authorPostScaleHover); ?>"
            data-opacity-hover="<?php echo esc_attr($authorPostOpacityHover); ?>"
            data-filter-hover="<?php echo esc_attr($authorPostBlurHover); ?>"
            data-rotate-hover="<?php echo esc_attr($authorPostRotateHover); ?>"
            data-rotate-x-hover="<?php echo esc_attr($authorPostRotateXHover); ?>"
            data-rotate-y-hover="<?php echo esc_attr($authorPostRotateYHover); ?>"
            data-skew-x-hover="<?php echo esc_attr($authorPostSkewXHover); ?>"
            data-skew-y-hover="<?php echo esc_attr($authorPostSkewYHover); ?>"
            data-start-x-hover="<?php echo esc_attr($authorPostTranslateXHover); ?>"
            data-start-y-hover="<?php echo esc_attr($authorPostTranslateYHover); ?>"
            data-scale-custom-effect-hover="<?php echo esc_attr($authorPostScaleTypeHover); ?>"
            data-duration-hover="<?php echo esc_attr($authorPostDurationHover); ?>"
            data-easing-hover="<?php echo esc_attr($authorPostEasingHover); ?>"
            <?php endif; ?>>
            <?php echo esc_html($post['author']); ?>
        </p>
    </div>

<?php

} ?>