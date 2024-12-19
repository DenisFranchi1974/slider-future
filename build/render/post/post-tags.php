<?php

function render_post_tags($post, $attributes)
{
    $tagsPostAlign = $attributes['tagsPostAlign'] ?? '';
    $tagsPostColor = $attributes['tagsPostColor'] ?? '';
    $tagsPostPadding = $attributes['tagsPostPadding'] ?? '';
    $tagsPostMargin = $attributes['tagsPostMargin'] ?? '';
    $tagsPostBorderRadius = $attributes['tagsPostBorderRadius'] ?? '';
    $tagsPostBorderStyle = $attributes['tagsPostBorderStyle'] ?? '';
    $tagsPostBorderSize = $attributes['tagsPostBorderSize'] ?? '';
    $tagsPostBorderColor = $attributes['tagsPostBorderColor'] ?? '';
    $tagsPostRotate = $attributes['tagsPostRotate'] ?? '';
    $tagsPostOpacity = $attributes['tagsPostOpacity'] ?? '';
    $tagsPostBoxShadow = $attributes['tagsPostBoxShadow'] ?? '';
    $tagsPostBoxShadowHOffset = $attributes['tagsPostBoxShadowHOffset'] ?? '';
    $tagsPostBoxShadowVOffset = $attributes['tagsPostBoxShadowVOffset'] ?? '';
    $tagsPostBoxShadowBlur = $attributes['tagsPostBoxShadowBlur'] ?? '';
    $tagsPostBoxShadowSpread = $attributes['tagsPostBoxShadowSpread'] ?? '';
    $tagsPostBoxShadowColor = $attributes['tagsPostBoxShadowColor'] ?? '';
    $tagsPostEffect = $attributes['tagsPostEffect'] ?? '';
    $tagsPostOpacityFrom = $attributes['tagsPostOpacityFrom'] ?? '';
    $tagsPostOpacityTo = $attributes['tagsPostOpacityTo'] ?? '';
    $tagsPostBlurFrom = $attributes['tagsPostBlurFrom'] ?? '';
    $tagsPostBlurTo = $attributes['tagsPostBlurTo'] ?? '';
    $tagsPostTranslateXFrom = $attributes['tagsPostTranslateXFrom'] ?? '';
    $tagsPostTranslateXTo = $attributes['tagsPostTranslateXTo'] ?? '';
    $tagsPostTranslateYFrom = $attributes['tagsPostTranslateYFrom'] ?? '';
    $tagsPostTranslateYTo = $attributes['tagsPostTranslateYTo'] ?? '';
    $tagsPostScaleType = $attributes['tagsPostScaleType'] ?? '';
    $tagsPostScaleFrom = $attributes['tagsPostScaleFrom'] ?? '';
    $tagsPostScaleTo = $attributes['tagsPostScaleTo'] ?? '';
    $tagsPostRotateFrom = $attributes['tagsPostRotateFrom'] ?? '';
    $tagsPostRotateTo = $attributes['tagsPostRotateTo'] ?? '';
    $tagsPostRotateXFrom = $attributes['tagsPostRotateXFrom'] ?? '';
    $tagsPostRotateXTo = $attributes['tagsPostRotateXTo'] ?? '';
    $tagsPostRotateYFrom = $attributes['tagsPostRotateYFrom'] ?? '';
    $tagsPostRotateYTo = $attributes['tagsPostRotateYTo'] ?? '';
    $tagsPostSkewXFrom = $attributes['tagsPostSkewXFrom'] ?? '';
    $tagsPostSkewXTo = $attributes['tagsPostSkewXTo'] ?? '';
    $tagsPostSkewYFrom = $attributes['tagsPostSkewYFrom'] ?? '';
    $tagsPostSkewYTo = $attributes['tagsPostSkewYTo'] ?? '';
    $tagsPostDuration = $attributes['tagsPostDuration'] ?? '';
    $tagsPostDelay = $attributes['tagsPostDelay'] ?? '';
    $tagsPostEndDelay = $attributes['tagsPostEndDelay'] ?? '';
    $tagsPostEasing = $attributes['tagsPostEasing'] ?? '';
    $tagsPostDirection = $attributes['tagsPostDirection'] ?? '';
    $tagsPostLoop = $attributes['tagsPostLoop'] ?? '';
    $tagsPostEffectHover = $attributes['tagsPostEffectHover'] ?? '';
    $tagsPostOpacityHover = $attributes['tagsPostOpacityHover'] ?? '';
    $tagsPostBlurHover = $attributes['tagsPostBlurHover'] ?? '';
    $tagsPostTranslateXHover = $attributes['tagsPostTranslateXHover'] ?? '';
    $tagsPostTranslateYHover = $attributes['tagsPostTranslateYHover'] ?? '';
    $tagsPostScaleTypeHover = $attributes['tagsPostScaleTypeHover'] ?? '';
    $tagsPostScaleHover = $attributes['tagsPostScaleHover'] ?? '';
    $tagsPostRotateHover = $attributes['tagsPostRotateHover'] ?? '';
    $tagsPostRotateXHover = $attributes['tagsPostRotateXHover'] ?? '';
    $tagsPostRotateYHover = $attributes['tagsPostRotateYHover'] ?? '';
    $tagsPostSkewXHover = $attributes['tagsPostSkewXHover'] ?? '';
    $tagsPostSkewYHover = $attributes['tagsPostSkewYHover'] ?? '';
    $tagsPostDurationHover = $attributes['tagsPostDurationHover'] ?? '';
    $tagsPostEasingHover = $attributes['tagsPostEasingHover'] ?? '';
    $tagsPostDesktop = $attributes['tagsPostDesktop'] ?? '';
    $tagsPostTablet = $attributes['tagsPostTablet'] ?? '';
    $tagsPostMobile = $attributes['tagsPostMobile'] ?? '';
    $tagsPostFontSizeMobile = $attributes['tagsPostFontSizeMobile'] ?? '';
    $tagsPostFontSizeTablet = $attributes['tagsPostFontSizeTablet'] ?? '';
    $tagsPostFontSize = $attributes['tagsPostFontSize'] ?? '';
    $tagsPostFontStyle = $attributes['tagsPostFontStyle'] ?? '';
    $tagsPostFontFamily = $attributes['tagsPostFontFamily'] ?? '';
    $tagsPostFontWeight = $attributes['tagsPostFontWeight'] ?? '';
    $tagsPostLineHeight = $attributes['tagsPostLineHeight'] ?? '';
    $tagsPostLetterSpacing = $attributes['tagsPostLetterSpacing'] ?? '';
    $tagsPostColorIn = $attributes['tagsPostColorIn'] ?? '';
    $tagsPostEffectSplit = $attributes['tagsPostEffectSplit'] ?? '';
    $tagsPostStagger = $attributes['tagsPostStagger'] ?? '';
    $tagsPostDirectionBlock = $attributes['tagsPostDirectionBlock'] ?? '';
    $tagsPostBlockColor = $attributes['tagsPostBlockColor'] ?? '';

    $isBold = isset($tagsPostFontStyle['fontWeight']) && $tagsPostFontStyle['fontWeight'] === 'bold';
    $fontStyle = isset($tagsPostFontStyle['fontStyle']) ? esc_attr($tagsPostFontStyle['fontStyle']) : 'normal'; // Valore di default
    $fontWeight = $isBold ? 'bold' : (isset($tagsPostFontWeight) ? esc_attr($tagsPostFontWeight) : 'normal'); // Valore di default
    $textDecoration = isset($tagsPostFontStyle['textDecoration']) ? esc_attr($tagsPostFontStyle['textDecoration']) : 'none'; // Valore di default

    $style = "
    letter-spacing: " . esc_attr($tagsPostLetterSpacing) . "px;
    line-height: " . esc_attr($tagsPostLineHeight) . ";
    font-family: " . esc_attr($tagsPostFontFamily) . ";
    font-style: " . $fontStyle . ";
    font-weight: " . $fontWeight . ";
    text-decoration: " . $textDecoration . ";
    font-size: clamp(" . esc_attr($tagsPostFontSizeMobile) . "px," . esc_attr($tagsPostFontSizeTablet) . "vw, " . esc_attr($tagsPostFontSize) . "px); 
    padding-top: " . esc_attr($tagsPostPadding['top']) . ";
    padding-bottom: " . esc_attr($tagsPostPadding['bottom']) . ";
    padding-left: " . esc_attr($tagsPostPadding['left']) . ";
    padding-right: " . esc_attr($tagsPostPadding['right']) . ";
    margin-top: " . esc_attr($tagsPostMargin['top']) . ";
    margin-bottom: " . esc_attr($tagsPostMargin['bottom']) . ";
    margin-left: " . esc_attr($tagsPostMargin['left']) . ";
    margin-right: " . esc_attr($tagsPostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($tagsPostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($tagsPostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($tagsPostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($tagsPostBorderRadius['left']) . ";
    border-style: " . esc_attr($tagsPostBorderStyle) . ";
    border-width: " . esc_attr($tagsPostBorderSize['top']) . " " . esc_attr($tagsPostBorderSize['right']) . " " . esc_attr($tagsPostBorderSize['bottom']) . " " . esc_attr($tagsPostBorderSize['left']) . ";
    border-color: " . esc_attr($tagsPostBorderColor) . ";
    transform: rotate(" . esc_attr($tagsPostRotate) . "deg);
    opacity: " . esc_attr($tagsPostOpacity) . ";
    " . ($tagsPostBoxShadow ? "box-shadow: " . esc_attr($tagsPostBoxShadowHOffset . 'px') . " " . esc_attr($tagsPostBoxShadowVOffset . 'px') . " " . esc_attr($tagsPostBoxShadowBlur . 'px') . " " . esc_attr($tagsPostBoxShadowSpread . 'px') . " " . esc_attr($tagsPostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($tagsPostColor) . ";
    color: " . esc_attr($tagsPostColorIn) . ";
    max-width: max-content;
";
    $desktopClassTags = $tagsPostDesktop ? 'desktop-post-tags-visible' : 'desktop-post-tags-hidden';
    $tabletClassTags = $tagsPostMobile ? 'tablet-post-tags-visible' : 'tablet-post-tags-hidden';
    $mobileClassTags = $tagsPostTablet ? 'mobile-post-tags-visible' : 'mobile-post-tags-hidden';
?>
    <div class="content-tags-post" style="justify-content:<?php echo esc_attr($tagsPostAlign); ?>;display:flex;">
        <?php foreach ($post['tags'] as $tag) : ?>
            <span class="tags-post <?php echo esc_attr($desktopClassTags); ?> <?php echo esc_attr($tabletClassTags); ?> <?php echo esc_attr($mobileClassTags); ?>"
                data-font-family="<?php echo esc_attr($tagsPostFontFamily); ?>"
                style="<?php echo $style; ?>"
                <?php if ($tagsPostEffect !== 'none') : ?>
                data-effect-in="<?php echo esc_attr($tagsPostEffect); ?>"
                data-duration="<?php echo esc_attr($tagsPostDuration); ?>"
                data-delay-in="<?php echo esc_attr($tagsPostDelay); ?>"
                data-delay-in-end="<?php echo esc_attr($tagsPostEndDelay); ?>"
                data-easing-in="<?php echo esc_attr($tagsPostEasing); ?>"
                data-direction-in="<?php echo esc_attr($tagsPostDirection); ?>"
                data-loop-in="<?php echo esc_attr($tagsPostLoop); ?>"
                data-opacity-in-from="<?php echo esc_attr($tagsPostOpacityFrom); ?>"
                data-opacity-in-to="<?php echo esc_attr($tagsPostOpacityTo); ?>"
                data-filter-in-from="<?php echo esc_attr($tagsPostBlurFrom); ?>"
                data-filter-in-to="<?php echo esc_attr($tagsPostBlurTo); ?>"
                data-start-x-from="<?php echo esc_attr($tagsPostTranslateXFrom); ?>"
                data-start-x-to="<?php echo esc_attr($tagsPostTranslateXTo); ?>"
                data-start-y-from="<?php echo esc_attr($tagsPostTranslateYFrom); ?>"
                data-start-y-to="<?php echo esc_attr($tagsPostTranslateYTo); ?>"
                data-rotate-in-from="<?php echo esc_attr($tagsPostRotateFrom); ?>"
                data-rotate-in-to="<?php echo esc_attr($tagsPostRotateTo); ?>"
                data-rotate-x-in-from="<?php echo esc_attr($tagsPostRotateXFrom); ?>"
                data-rotate-x-in-to="<?php echo esc_attr($tagsPostRotateXTo); ?>"
                data-rotate-y-in-from="<?php echo esc_attr($tagsPostRotateYFrom); ?>"
                data-rotate-y-in-to="<?php echo esc_attr($tagsPostRotateYTo); ?>"
                data-scale-in-from="<?php echo esc_attr($tagsPostScaleFrom); ?>"
                data-scale-in-to="<?php echo esc_attr($tagsPostScaleTo); ?>"
                data-skew-x-from="<?php echo esc_attr($tagsPostSkewXFrom); ?>"
                data-skew-x-to="<?php echo esc_attr($tagsPostSkewXTo); ?>"
                data-skew-y-from="<?php echo esc_attr($tagsPostSkewYFrom); ?>"
                data-skew-y-to="<?php echo esc_attr($tagsPostSkewYTo); ?>"
                data-scale-custom-effect-in="<?php echo esc_attr($tagsPostScaleType); ?>"
                data-stagger="<?php echo esc_attr($tagsPostStagger); ?>"
                data-effect-split="<?php echo esc_attr($tagsPostEffectSplit); ?>"
                data-direction-block="<?php echo esc_attr($tagsPostDirectionBlock); ?>"
                data-color-block="<?php echo esc_attr($tagsPostBlockColor); ?>"
                <?php endif;
                if ($tagsPostEffectHover !== 'none') : ?>
                data-effect-hover="<?php echo esc_attr($tagsPostEffectHover); ?>"
                data-scale-hover="<?php echo esc_attr($tagsPostScaleHover); ?>"
                data-opacity-hover="<?php echo esc_attr($tagsPostOpacityHover); ?>"
                data-filter-hover="<?php echo esc_attr($tagsPostBlurHover); ?>"
                data-rotate-hover="<?php echo esc_attr($tagsPostRotateHover); ?>"
                data-rotate-x-hover="<?php echo esc_attr($tagsPostRotateXHover); ?>"
                data-rotate-y-hover="<?php echo esc_attr($tagsPostRotateYHover); ?>"
                data-skew-x-hover="<?php echo esc_attr($tagsPostSkewXHover); ?>"
                data-skew-y-hover="<?php echo esc_attr($tagsPostSkewYHover); ?>"
                data-start-x-hover="<?php echo esc_attr($tagsPostTranslateXHover); ?>"
                data-start-y-hover="<?php echo esc_attr($tagsPostTranslateYHover); ?>"
                data-scale-custom-effect-hover="<?php echo esc_attr($tagsPostScaleTypeHover); ?>"
                data-duration-hover="<?php echo esc_attr($tagsPostDurationHover); ?>"
                data-easing-hover="<?php echo esc_attr($tagsPostEasingHover); ?>"
                <?php endif; ?>>
                <?php echo esc_html($tag); ?>
            </span>
        <?php endforeach; ?>
    </div>

<?php

} ?>