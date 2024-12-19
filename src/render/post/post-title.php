<?php
function render_post_title($post, $attributes)
{
    $titlePostAlign = $attributes['titlePostAlign'] ?? '';
    $titlePostColor = $attributes['titlePostColor'] ?? '';
    $titlePostPadding = $attributes['titlePostPadding'] ?? '';
    $titlePostMargin = $attributes['titlePostMargin'] ?? '';
    $titlePostBorderRadius = $attributes['titlePostBorderRadius'] ?? '';
    $titlePostBorderStyle = $attributes['titlePostBorderStyle'] ?? '';
    $titlePostBorderSize = $attributes['titlePostBorderSize'] ?? '';
    $titlePostBorderColor = $attributes['titlePostBorderColor'] ?? '';
    $titlePostRotate = $attributes['titlePostRotate'] ?? '';
    $titlePostOpacity = $attributes['titlePostOpacity'] ?? '';
    $titlePostBoxShadow = $attributes['titlePostBoxShadow'] ?? '';
    $titlePostBoxShadowHOffset = $attributes['titlePostBoxShadowHOffset'] ?? '';
    $titlePostBoxShadowVOffset = $attributes['titlePostBoxShadowVOffset'] ?? '';
    $titlePostBoxShadowBlur = $attributes['titlePostBoxShadowBlur'] ?? '';
    $titlePostBoxShadowSpread = $attributes['titlePostBoxShadowSpread'] ?? '';
    $titlePostBoxShadowColor = $attributes['titlePostBoxShadowColor'] ?? '';
    $titlePostEffect = $attributes['titlePostEffect'] ?? '';
    $titlePostOpacityFrom = $attributes['titlePostOpacityFrom'] ?? '';
    $titlePostOpacityTo = $attributes['titlePostOpacityTo'] ?? '';
    $titlePostBlurFrom = $attributes['titlePostBlurFrom'] ?? '';
    $titlePostBlurTo = $attributes['titlePostBlurTo'] ?? '';
    $titlePostTranslateXFrom = $attributes['titlePostTranslateXFrom'] ?? '';
    $titlePostTranslateXTo = $attributes['titlePostTranslateXTo'] ?? '';
    $titlePostTranslateYFrom = $attributes['titlePostTranslateYFrom'] ?? '';
    $titlePostTranslateYTo = $attributes['titlePostTranslateYTo'] ?? '';
    $titlePostScaleType = $attributes['titlePostScaleType'] ?? '';
    $titlePostScaleFrom = $attributes['titlePostScaleFrom'] ?? '';
    $titlePostScaleTo = $attributes['titlePostScaleTo'] ?? '';
    $titlePostRotateFrom = $attributes['titlePostRotateFrom'] ?? '';
    $titlePostRotateTo = $attributes['titlePostRotateTo'] ?? '';
    $titlePostRotateXFrom = $attributes['titlePostRotateXFrom'] ?? '';
    $titlePostRotateXTo = $attributes['titlePostRotateXTo'] ?? '';
    $titlePostRotateYFrom = $attributes['titlePostRotateYFrom'] ?? '';
    $titlePostRotateYTo = $attributes['titlePostRotateYTo'] ?? '';
    $titlePostSkewXFrom = $attributes['titlePostSkewXFrom'] ?? '';
    $titlePostSkewXTo = $attributes['titlePostSkewXTo'] ?? '';
    $titlePostSkewYFrom = $attributes['titlePostSkewYFrom'] ?? '';
    $titlePostSkewYTo = $attributes['titlePostSkewYTo'] ?? '';
    $titlePostDuration = $attributes['titlePostDuration'] ?? '';
    $titlePostDelay = $attributes['titlePostDelay'] ?? '';
    $titlePostEndDelay = $attributes['titlePostEndDelay'] ?? '';
    $titlePostEasing = $attributes['titlePostEasing'] ?? '';
    $titlePostDirection = $attributes['titlePostDirection'] ?? '';
    $titlePostLoop = $attributes['titlePostLoop'] ?? '';
    $titlePostEffectHover = $attributes['titlePostEffectHover'] ?? '';
    $titlePostOpacityHover = $attributes['titlePostOpacityHover'] ?? '';
    $titlePostBlurHover = $attributes['titlePostBlurHover'] ?? '';
    $titlePostTranslateXHover = $attributes['titlePostTranslateXHover'] ?? '';
    $titlePostTranslateYHover = $attributes['titlePostTranslateYHover'] ?? '';
    $titlePostScaleTypeHover = $attributes['titlePostScaleTypeHover'] ?? '';
    $titlePostScaleHover = $attributes['titlePostScaleHover'] ?? '';
    $titlePostRotateHover = $attributes['titlePostRotateHover'] ?? '';
    $titlePostRotateXHover = $attributes['titlePostRotateXHover'] ?? '';
    $titlePostRotateYHover = $attributes['titlePostRotateYHover'] ?? '';
    $titlePostSkewXHover = $attributes['titlePostSkewXHover'] ?? '';
    $titlePostSkewYHover = $attributes['titlePostSkewYHover'] ?? '';
    $titlePostDurationHover = $attributes['titlePostDurationHover'] ?? '';
    $titlePostEasingHover = $attributes['titlePostEasingHover'] ?? '';
    $titlePostDesktop = $attributes['titlePostDesktop'] ?? '';
    $titlePostTablet = $attributes['titlePostTablet'] ?? '';
    $titlePostMobile = $attributes['titlePostMobile'] ?? '';
    $titlePostLink = $attributes['titlePostLink'] ?? '';
    $titlePostTarget = $attributes['titlePostTarget'] ?? '';
    $titlePostFontSizeMobile = $attributes['titlePostFontSizeMobile'] ?? '';
    $titlePostFontSizeTablet = $attributes['titlePostFontSizeTablet'] ?? '';
    $titlePostFontSize = $attributes['titlePostFontSize'] ?? '';
    $titlePostFontStyle = $attributes['titlePostFontStyle'] ?? '';
    $titlePostFontFamily = $attributes['titlePostFontFamily'] ?? '';
    $titlePostFontWeight = $attributes['titlePostFontWeight'] ?? '';
    $titlePostLineHeight = $attributes['titlePostLineHeight'] ?? '';
    $titlePostLetterSpacing = $attributes['titlePostLetterSpacing'] ?? '';
    $titlePostColorIn = $attributes['titlePostColorIn'] ?? '';
    $titlePostEffectSplit = $attributes['titlePostEffectSplit'] ?? '';
    $titlePostStagger = $attributes['titlePostStagger'] ?? '';
    $titlePostDirectionBlock = $attributes['titlePostDirectionBlock'] ?? '';
    $titlePostBlockColor = $attributes['titlePostBlockColor'] ?? '';

    $isBold = isset($titlePostFontStyle['fontWeight']) && $titlePostFontStyle['fontWeight'] === 'bold';
    $fontStyle = isset($titlePostFontStyle['fontStyle']) ? esc_attr($titlePostFontStyle['fontStyle']) : 'normal'; // Valore di default
    $fontWeight = $isBold ? 'bold' : (isset($titlePostFontWeight) ? esc_attr($titlePostFontWeight) : 'normal'); // Valore di default
    $textDecoration = isset($titlePostFontStyle['textDecoration']) ? esc_attr($titlePostFontStyle['textDecoration']) : 'none'; // Valore di default

    $style = "
    letter-spacing: " . esc_attr($titlePostLetterSpacing) . "px;
    line-height: " . esc_attr($titlePostLineHeight) . ";
    font-family: " . esc_attr($titlePostFontFamily) . ";
    font-style: " . $fontStyle . ";
    font-weight: " . $fontWeight . ";
    text-decoration: " . $textDecoration . ";
    font-size: clamp(" . esc_attr($titlePostFontSizeMobile) . "px," . esc_attr($titlePostFontSizeTablet) . "vw, " . esc_attr($titlePostFontSize) . "px); 
    padding-top: " . esc_attr($titlePostPadding['top']) . ";
    padding-bottom: " . esc_attr($titlePostPadding['bottom']) . ";
    padding-left: " . esc_attr($titlePostPadding['left']) . ";
    padding-right: " . esc_attr($titlePostPadding['right']) . ";
    margin-top: " . esc_attr($titlePostMargin['top']) . ";
    margin-bottom: " . esc_attr($titlePostMargin['bottom']) . ";
    margin-left: " . esc_attr($titlePostMargin['left']) . ";
    margin-right: " . esc_attr($titlePostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($titlePostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($titlePostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($titlePostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($titlePostBorderRadius['left']) . ";
    border-style: " . esc_attr($titlePostBorderStyle) . ";
    border-width: " . esc_attr($titlePostBorderSize['top']) . " " . esc_attr($titlePostBorderSize['right']) . " " . esc_attr($titlePostBorderSize['bottom']) . " " . esc_attr($titlePostBorderSize['left']) . ";
    border-color: " . esc_attr($titlePostBorderColor) . ";
    transform: rotate(" . esc_attr($titlePostRotate) . "deg);
    opacity: " . esc_attr($titlePostOpacity) . ";
    " . ($titlePostBoxShadow ? "box-shadow: " . esc_attr($titlePostBoxShadowHOffset . 'px') . " " . esc_attr($titlePostBoxShadowVOffset . 'px') . " " . esc_attr($titlePostBoxShadowBlur . 'px') . " " . esc_attr($titlePostBoxShadowSpread . 'px') . " " . esc_attr($titlePostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($titlePostColor) . ";
    color: " . esc_attr($titlePostColorIn) . ";
    max-width: max-content;
";
    $desktopClassTitle = $titlePostDesktop ? 'desktop-post-title-visible' : 'desktop-post-title-hidden';
    $tabletClassTitle = $titlePostMobile ? 'tablet-post-title-visible' : 'tablet-post-title-hidden';
    $mobileClassTitle = $titlePostTablet ? 'mobile-post-title-visible' : 'mobile-post-title-hidden';
    $link_url = '';
    $onclick = '';
    $linkTargetImage = '_self';
    if ($titlePostLink !== 'none') {
        if ($titlePostLink === 'link' && !empty(esc_url($post['link']))) {
            $link_url = esc_url($post['link']);
            if (!empty($titlePostTarget)) {
                $linkTargetImage = esc_attr($titlePostTarget);
            }
            $onclick = "window.open('{$link_url}', '{$linkTargetImage}');";
        }
    }
?>
    <div class="content-title-post" style="justify-content:<?php echo esc_attr($titlePostAlign); ?>;display:flex;<?php if ($titlePostLink !== 'none') : ?>cursor: pointer;<?php endif; ?>"
        <?php
        if ($titlePostLink !== 'none') : ?>
        onclick="<?php echo $onclick; ?>"
        <?php endif; ?>>
        <h3 class="title-post <?php echo esc_attr($desktopClassTitle); ?> <?php echo esc_attr($tabletClassTitle); ?> <?php echo esc_attr($mobileClassTitle); ?>"
            data-font-family="<?php echo esc_attr($titlePostFontFamily); ?>"
            style="<?php echo $style; ?>"
            <?php if ($titlePostEffect !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($titlePostEffect); ?>"
            data-duration="<?php echo esc_attr($titlePostDuration); ?>"
            data-delay-in="<?php echo esc_attr($titlePostDelay); ?>"
            data-delay-in-end="<?php echo esc_attr($titlePostEndDelay); ?>"
            data-easing-in="<?php echo esc_attr($titlePostEasing); ?>"
            data-direction-in="<?php echo esc_attr($titlePostDirection); ?>"
            data-loop-in="<?php echo esc_attr($titlePostLoop); ?>"
            data-opacity-in-from="<?php echo esc_attr($titlePostOpacityFrom); ?>"
            data-opacity-in-to="<?php echo esc_attr($titlePostOpacityTo); ?>"
            data-filter-in-from="<?php echo esc_attr($titlePostBlurFrom); ?>"
            data-filter-in-to="<?php echo esc_attr($titlePostBlurTo); ?>"
            data-start-x-from="<?php echo esc_attr($titlePostTranslateXFrom); ?>"
            data-start-x-to="<?php echo esc_attr($titlePostTranslateXTo); ?>"
            data-start-y-from="<?php echo esc_attr($titlePostTranslateYFrom); ?>"
            data-start-y-to="<?php echo esc_attr($titlePostTranslateYTo); ?>"
            data-rotate-in-from="<?php echo esc_attr($titlePostRotateFrom); ?>"
            data-rotate-in-to="<?php echo esc_attr($titlePostRotateTo); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($titlePostRotateXFrom); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($titlePostRotateXTo); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($titlePostRotateYFrom); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($titlePostRotateYTo); ?>"
            data-scale-in-from="<?php echo esc_attr($titlePostScaleFrom); ?>"
            data-scale-in-to="<?php echo esc_attr($titlePostScaleTo); ?>"
            data-skew-x-from="<?php echo esc_attr($titlePostSkewXFrom); ?>"
            data-skew-x-to="<?php echo esc_attr($titlePostSkewXTo); ?>"
            data-skew-y-from="<?php echo esc_attr($titlePostSkewYFrom); ?>"
            data-skew-y-to="<?php echo esc_attr($titlePostSkewYTo); ?>"
            data-scale-custom-effect-in="<?php echo esc_attr($titlePostScaleType); ?>"
            data-stagger="<?php echo esc_attr($titlePostStagger); ?>"
            data-effect-split="<?php echo esc_attr($titlePostEffectSplit); ?>"
            data-direction-block="<?php echo esc_attr($titlePostDirectionBlock); ?>"
            data-color-block="<?php echo esc_attr($titlePostBlockColor); ?>"
            <?php endif;
            if ($titlePostEffectHover !== 'none') : ?>
            data-effect-hover="<?php echo esc_attr($titlePostEffectHover); ?>"
            data-scale-hover="<?php echo esc_attr($titlePostScaleHover); ?>"
            data-opacity-hover="<?php echo esc_attr($titlePostOpacityHover); ?>"
            data-filter-hover="<?php echo esc_attr($titlePostBlurHover); ?>"
            data-rotate-hover="<?php echo esc_attr($titlePostRotateHover); ?>"
            data-rotate-x-hover="<?php echo esc_attr($titlePostRotateXHover); ?>"
            data-rotate-y-hover="<?php echo esc_attr($titlePostRotateYHover); ?>"
            data-skew-x-hover="<?php echo esc_attr($titlePostSkewXHover); ?>"
            data-skew-y-hover="<?php echo esc_attr($titlePostSkewYHover); ?>"
            data-start-x-hover="<?php echo esc_attr($titlePostTranslateXHover); ?>"
            data-start-y-hover="<?php echo esc_attr($titlePostTranslateYHover); ?>"
            data-scale-custom-effect-hover="<?php echo esc_attr($titlePostScaleTypeHover); ?>"
            data-duration-hover="<?php echo esc_attr($titlePostDurationHover); ?>"
            data-easing-hover="<?php echo esc_attr($titlePostEasingHover); ?>"
            <?php endif; ?>>
            <?php echo esc_html($post['title']); ?>
        </h3>
    </div>

<?php

} ?>