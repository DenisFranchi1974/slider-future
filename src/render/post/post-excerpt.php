<?php
function render_post_excerpt($post, $attributes)
{
    $excerptPostAlign = $attributes['excerptPostAlign'] ?? '';
    $excerptPostColor = $attributes['excerptPostColor'] ?? '';
    $excerptPostPadding = $attributes['excerptPostPadding'] ?? '';
    $excerptPostMargin = $attributes['excerptPostMargin'] ?? '';
    $excerptPostBorderRadius = $attributes['excerptPostBorderRadius'] ?? '';
    $excerptPostBorderStyle = $attributes['excerptPostBorderStyle'] ?? '';
    $excerptPostBorderSize = $attributes['excerptPostBorderSize'] ?? '';
    $excerptPostBorderColor = $attributes['excerptPostBorderColor'] ?? '';
    $excerptPostRotate = $attributes['excerptPostRotate'] ?? '';
    $excerptPostOpacity = $attributes['excerptPostOpacity'] ?? '';
    $excerptPostBoxShadow = $attributes['excerptPostBoxShadow'] ?? '';
    $excerptPostBoxShadowHOffset = $attributes['excerptPostBoxShadowHOffset'] ?? '';
    $excerptPostBoxShadowVOffset = $attributes['excerptPostBoxShadowVOffset'] ?? '';
    $excerptPostBoxShadowBlur = $attributes['excerptPostBoxShadowBlur'] ?? '';
    $excerptPostBoxShadowSpread = $attributes['excerptPostBoxShadowSpread'] ?? '';
    $excerptPostBoxShadowColor = $attributes['excerptPostBoxShadowColor'] ?? '';
    $excerptPostEffect = $attributes['excerptPostEffect'] ?? '';
    $excerptPostOpacityFrom = $attributes['excerptPostOpacityFrom'] ?? '';
    $excerptPostOpacityTo = $attributes['excerptPostOpacityTo'] ?? '';
    $excerptPostBlurFrom = $attributes['excerptPostBlurFrom'] ?? '';
    $excerptPostBlurTo = $attributes['excerptPostBlurTo'] ?? '';
    $excerptPostTranslateXFrom = $attributes['excerptPostTranslateXFrom'] ?? '';
    $excerptPostTranslateXTo = $attributes['excerptPostTranslateXTo'] ?? '';
    $excerptPostTranslateYFrom = $attributes['excerptPostTranslateYFrom'] ?? '';
    $excerptPostTranslateYTo = $attributes['excerptPostTranslateYTo'] ?? '';
    $excerptPostScaleType = $attributes['excerptPostScaleType'] ?? '';
    $excerptPostScaleFrom = $attributes['excerptPostScaleFrom'] ?? '';
    $excerptPostScaleTo = $attributes['excerptPostScaleTo'] ?? '';
    $excerptPostRotateFrom = $attributes['excerptPostRotateFrom'] ?? '';
    $excerptPostRotateTo = $attributes['excerptPostRotateTo'] ?? '';
    $excerptPostRotateXFrom = $attributes['excerptPostRotateXFrom'] ?? '';
    $excerptPostRotateXTo = $attributes['excerptPostRotateXTo'] ?? '';
    $excerptPostRotateYFrom = $attributes['excerptPostRotateYFrom'] ?? '';
    $excerptPostRotateYTo = $attributes['excerptPostRotateYTo'] ?? '';
    $excerptPostSkewXFrom = $attributes['excerptPostSkewXFrom'] ?? '';
    $excerptPostSkewXTo = $attributes['excerptPostSkewXTo'] ?? '';
    $excerptPostSkewYFrom = $attributes['excerptPostSkewYFrom'] ?? '';
    $excerptPostSkewYTo = $attributes['excerptPostSkewYTo'] ?? '';
    $excerptPostDuration = $attributes['excerptPostDuration'] ?? '';
    $excerptPostDelay = $attributes['excerptPostDelay'] ?? '';
    $excerptPostEndDelay = $attributes['excerptPostEndDelay'] ?? '';
    $excerptPostEasing = $attributes['excerptPostEasing'] ?? '';
    $excerptPostDirection = $attributes['excerptPostDirection'] ?? '';
    $excerptPostLoop = $attributes['excerptPostLoop'] ?? '';
    $excerptPostEffectHover = $attributes['excerptPostEffectHover'] ?? '';
    $excerptPostOpacityHover = $attributes['excerptPostOpacityHover'] ?? '';
    $excerptPostBlurHover = $attributes['excerptPostBlurHover'] ?? '';
    $excerptPostTranslateXHover = $attributes['excerptPostTranslateXHover'] ?? '';
    $excerptPostTranslateYHover = $attributes['excerptPostTranslateYHover'] ?? '';
    $excerptPostScaleTypeHover = $attributes['excerptPostScaleTypeHover'] ?? '';
    $excerptPostScaleHover = $attributes['excerptPostScaleHover'] ?? '';
    $excerptPostRotateHover = $attributes['excerptPostRotateHover'] ?? '';
    $excerptPostRotateXHover = $attributes['excerptPostRotateXHover'] ?? '';
    $excerptPostRotateYHover = $attributes['excerptPostRotateYHover'] ?? '';
    $excerptPostSkewXHover = $attributes['excerptPostSkewXHover'] ?? '';
    $excerptPostSkewYHover = $attributes['excerptPostSkewYHover'] ?? '';
    $excerptPostDurationHover = $attributes['excerptPostDurationHover'] ?? '';
    $excerptPostEasingHover = $attributes['excerptPostEasingHover'] ?? '';
    $excerptPostDesktop = $attributes['excerptPostDesktop'] ?? '';
    $excerptPostTablet = $attributes['excerptPostTablet'] ?? '';
    $excerptPostMobile = $attributes['excerptPostMobile'] ?? '';
    $excerptPostLink = $attributes['excerptPostLink'] ?? '';
    $excerptPostTarget = $attributes['excerptPostTarget'] ?? '';
    $excerptPostFontSizeMobile = $attributes['excerptPostFontSizeMobile'] ?? '';
    $excerptPostFontSizeTablet = $attributes['excerptPostFontSizeTablet'] ?? '';
    $excerptPostFontSize = $attributes['excerptPostFontSize'] ?? '';
    $excerptPostFontStyle = $attributes['excerptPostFontStyle'] ?? '';
    $excerptPostFontFamily = $attributes['excerptPostFontFamily'] ?? '';
    $excerptPostFontWeight = $attributes['excerptPostFontWeight'] ?? '';
    $excerptPostLineHeight = $attributes['excerptPostLineHeight'] ?? '';
    $excerptPostLetterSpacing = $attributes['excerptPostLetterSpacing'] ?? '';
    $excerptPostColorIn = $attributes['excerptPostColorIn'] ?? '';
    $excerptPostEffectSplit = $attributes['excerptPostEffectSplit'] ?? '';
    $excerptPostStagger = $attributes['excerptPostStagger'] ?? '';
    $excerptPostDirectionBlock = $attributes['excerptPostDirectionBlock'] ?? '';
    $excerptPostBlockColor = $attributes['excerptPostBlockColor'] ?? '';

    $isBold = isset($excerptPostFontStyle['fontWeight']) && $excerptPostFontStyle['fontWeight'] === 'bold';
    $fontStyle = isset($excerptPostFontStyle['fontStyle']) ? esc_attr($excerptPostFontStyle['fontStyle']) : 'normal'; // Valore di default
    $fontWeight = $isBold ? 'bold' : (isset($excerptPostFontWeight) ? esc_attr($excerptPostFontWeight) : 'normal'); // Valore di default
    $textDecoration = isset($excerptPostFontStyle['textDecoration']) ? esc_attr($excerptPostFontStyle['textDecoration']) : 'none'; // Valore di default

    $style = "
    letter-spacing: " . esc_attr($excerptPostLetterSpacing) . "px;
    line-height: " . esc_attr($excerptPostLineHeight) . ";
    font-family: " . esc_attr($excerptPostFontFamily) . ";
    font-style: " . $fontStyle . ";
    font-weight: " . $fontWeight . ";
    text-decoration: " . $textDecoration . ";
    font-size: clamp(" . esc_attr($excerptPostFontSizeMobile) . "px," . esc_attr($excerptPostFontSizeTablet) . "vw, " . esc_attr($excerptPostFontSize) . "px); 
    padding-top: " . esc_attr($excerptPostPadding['top']) . ";
    padding-bottom: " . esc_attr($excerptPostPadding['bottom']) . ";
    padding-left: " . esc_attr($excerptPostPadding['left']) . ";
    padding-right: " . esc_attr($excerptPostPadding['right']) . ";
    margin-top: " . esc_attr($excerptPostMargin['top']) . ";
    margin-bottom: " . esc_attr($excerptPostMargin['bottom']) . ";
    margin-left: " . esc_attr($excerptPostMargin['left']) . ";
    margin-right: " . esc_attr($excerptPostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($excerptPostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($excerptPostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($excerptPostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($excerptPostBorderRadius['left']) . ";
    border-style: " . esc_attr($excerptPostBorderStyle) . ";
    border-width: " . esc_attr($excerptPostBorderSize['top']) . " " . esc_attr($excerptPostBorderSize['right']) . " " . esc_attr($excerptPostBorderSize['bottom']) . " " . esc_attr($excerptPostBorderSize['left']) . ";
    border-color: " . esc_attr($excerptPostBorderColor) . ";
    transform: rotate(" . esc_attr($excerptPostRotate) . "deg);
    opacity: " . esc_attr($excerptPostOpacity) . ";
    " . ($excerptPostBoxShadow ? "box-shadow: " . esc_attr($excerptPostBoxShadowHOffset . 'px') . " " . esc_attr($excerptPostBoxShadowVOffset . 'px') . " " . esc_attr($excerptPostBoxShadowBlur . 'px') . " " . esc_attr($excerptPostBoxShadowSpread . 'px') . " " . esc_attr($excerptPostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($excerptPostColor) . ";
    color: " . esc_attr($excerptPostColorIn) . ";
    max-width: max-content;
";
    $desktopClassExcerpt = $excerptPostDesktop ? 'desktop-post-excerpt-visible' : 'desktop-post-excerpt-hidden';
    $tabletClassExcerpt = $excerptPostMobile ? 'tablet-post-excerpt-visible' : 'tablet-post-excerpt-hidden';
    $mobileClassExcerpt = $excerptPostTablet ? 'mobile-post-excerpt-visible' : 'mobile-post-excerpt-hidden';
    $link_url = '';
    $onclick = '';
    $linkTargetImage = '_self';
    if ($excerptPostLink !== 'none') {
        if ($excerptPostLink === 'link' && !empty(esc_url($post['link']))) {
            $link_url = esc_url($post['link']);
            if (!empty($excerptPostTarget)) {
                $linkTargetImage = esc_attr($excerptPostTarget);
            }
            $onclick = "window.open('{$link_url}', '{$linkTargetImage}');";
        }
    }
?>
    <div class="content-excerpt-post" style="justify-content:<?php echo esc_attr($excerptPostAlign); ?>;display:flex;<?php if ($excerptPostLink !== 'none') : ?>cursor: pointer;<?php endif; ?>"
        <?php
        if ($excerptPostLink !== 'none') : ?>
        onclick="<?php echo esc_js( $onclick ); ?>"
        <?php endif; ?>>
        <p class="excerpt-post <?php echo esc_attr($desktopClassExcerpt); ?> <?php echo esc_attr($tabletClassExcerpt); ?> <?php echo esc_attr($mobileClassExcerpt); ?>"
            data-font-family="<?php echo esc_attr($excerptPostFontFamily); ?>"
            style="<?php echo esc_attr($style); ?>"
            <?php if ($excerptPostEffect !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($excerptPostEffect); ?>"
            data-duration="<?php echo esc_attr($excerptPostDuration); ?>"
            data-delay-in="<?php echo esc_attr($excerptPostDelay); ?>"
            data-delay-in-end="<?php echo esc_attr($excerptPostEndDelay); ?>"
            data-easing-in="<?php echo esc_attr($excerptPostEasing); ?>"
            data-direction-in="<?php echo esc_attr($excerptPostDirection); ?>"
            data-loop-in="<?php echo esc_attr($excerptPostLoop); ?>"
            data-opacity-in-from="<?php echo esc_attr($excerptPostOpacityFrom); ?>"
            data-opacity-in-to="<?php echo esc_attr($excerptPostOpacityTo); ?>"
            data-filter-in-from="<?php echo esc_attr($excerptPostBlurFrom); ?>"
            data-filter-in-to="<?php echo esc_attr($excerptPostBlurTo); ?>"
            data-start-x-from="<?php echo esc_attr($excerptPostTranslateXFrom); ?>"
            data-start-x-to="<?php echo esc_attr($excerptPostTranslateXTo); ?>"
            data-start-y-from="<?php echo esc_attr($excerptPostTranslateYFrom); ?>"
            data-start-y-to="<?php echo esc_attr($excerptPostTranslateYTo); ?>"
            data-rotate-in-from="<?php echo esc_attr($excerptPostRotateFrom); ?>"
            data-rotate-in-to="<?php echo esc_attr($excerptPostRotateTo); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($excerptPostRotateXFrom); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($excerptPostRotateXTo); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($excerptPostRotateYFrom); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($excerptPostRotateYTo); ?>"
            data-scale-in-from="<?php echo esc_attr($excerptPostScaleFrom); ?>"
            data-scale-in-to="<?php echo esc_attr($excerptPostScaleTo); ?>"
            data-skew-x-from="<?php echo esc_attr($excerptPostSkewXFrom); ?>"
            data-skew-x-to="<?php echo esc_attr($excerptPostSkewXTo); ?>"
            data-skew-y-from="<?php echo esc_attr($excerptPostSkewYFrom); ?>"
            data-skew-y-to="<?php echo esc_attr($excerptPostSkewYTo); ?>"
            data-scale-custom-effect-in="<?php echo esc_attr($excerptPostScaleType); ?>"
            data-stagger="<?php echo esc_attr($excerptPostStagger); ?>"
            data-effect-split="<?php echo esc_attr($excerptPostEffectSplit); ?>"
            data-direction-block="<?php echo esc_attr($excerptPostDirectionBlock); ?>"
            data-color-block="<?php echo esc_attr($excerptPostBlockColor); ?>"
            <?php endif;
            if ($excerptPostEffectHover !== 'none') : ?>
            data-effect-hover="<?php echo esc_attr($excerptPostEffectHover); ?>"
            data-scale-hover="<?php echo esc_attr($excerptPostScaleHover); ?>"
            data-opacity-hover="<?php echo esc_attr($excerptPostOpacityHover); ?>"
            data-filter-hover="<?php echo esc_attr($excerptPostBlurHover); ?>"
            data-rotate-hover="<?php echo esc_attr($excerptPostRotateHover); ?>"
            data-rotate-x-hover="<?php echo esc_attr($excerptPostRotateXHover); ?>"
            data-rotate-y-hover="<?php echo esc_attr($excerptPostRotateYHover); ?>"
            data-skew-x-hover="<?php echo esc_attr($excerptPostSkewXHover); ?>"
            data-skew-y-hover="<?php echo esc_attr($excerptPostSkewYHover); ?>"
            data-start-x-hover="<?php echo esc_attr($excerptPostTranslateXHover); ?>"
            data-start-y-hover="<?php echo esc_attr($excerptPostTranslateYHover); ?>"
            data-scale-custom-effect-hover="<?php echo esc_attr($excerptPostScaleTypeHover); ?>"
            data-duration-hover="<?php echo esc_attr($excerptPostDurationHover); ?>"
            data-easing-hover="<?php echo esc_attr($excerptPostEasingHover); ?>"
            <?php endif; ?>>
            <?php echo esc_html($post['excerpt']); ?>
        </p>
    </div>

<?php

} ?>