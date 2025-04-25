<?php

function render_post_categories($post, $attributes)
{
    $categoriesPostAlign = $attributes['categoriesPostAlign'] ?? '';
    $categoriesPostColor = $attributes['categoriesPostColor'] ?? '';
    $categoriesPostPadding = $attributes['categoriesPostPadding'] ?? '';
    $categoriesPostMargin = $attributes['categoriesPostMargin'] ?? '';
    $categoriesPostBorderRadius = $attributes['categoriesPostBorderRadius'] ?? '';
    $categoriesPostBorderStyle = $attributes['categoriesPostBorderStyle'] ?? '';
    $categoriesPostBorderSize = $attributes['categoriesPostBorderSize'] ?? '';
    $categoriesPostBorderColor = $attributes['categoriesPostBorderColor'] ?? '';
    $categoriesPostRotate = $attributes['categoriesPostRotate'] ?? '';
    $categoriesPostOpacity = $attributes['categoriesPostOpacity'] ?? '';
    $categoriesPostBoxShadow = $attributes['categoriesPostBoxShadow'] ?? '';
    $categoriesPostBoxShadowHOffset = $attributes['categoriesPostBoxShadowHOffset'] ?? '';
    $categoriesPostBoxShadowVOffset = $attributes['categoriesPostBoxShadowVOffset'] ?? '';
    $categoriesPostBoxShadowBlur = $attributes['categoriesPostBoxShadowBlur'] ?? '';
    $categoriesPostBoxShadowSpread = $attributes['categoriesPostBoxShadowSpread'] ?? '';
    $categoriesPostBoxShadowColor = $attributes['categoriesPostBoxShadowColor'] ?? '';
    $categoriesPostEffect = $attributes['categoriesPostEffect'] ?? '';
    $categoriesPostOpacityFrom = $attributes['categoriesPostOpacityFrom'] ?? '';
    $categoriesPostOpacityTo = $attributes['categoriesPostOpacityTo'] ?? '';
    $categoriesPostBlurFrom = $attributes['categoriesPostBlurFrom'] ?? '';
    $categoriesPostBlurTo = $attributes['categoriesPostBlurTo'] ?? '';
    $categoriesPostTranslateXFrom = $attributes['categoriesPostTranslateXFrom'] ?? '';
    $categoriesPostTranslateXTo = $attributes['categoriesPostTranslateXTo'] ?? '';
    $categoriesPostTranslateYFrom = $attributes['categoriesPostTranslateYFrom'] ?? '';
    $categoriesPostTranslateYTo = $attributes['categoriesPostTranslateYTo'] ?? '';
    $categoriesPostScaleType = $attributes['categoriesPostScaleType'] ?? '';
    $categoriesPostScaleFrom = $attributes['categoriesPostScaleFrom'] ?? '';
    $categoriesPostScaleTo = $attributes['categoriesPostScaleTo'] ?? '';
    $categoriesPostRotateFrom = $attributes['categoriesPostRotateFrom'] ?? '';
    $categoriesPostRotateTo = $attributes['categoriesPostRotateTo'] ?? '';
    $categoriesPostRotateXFrom = $attributes['categoriesPostRotateXFrom'] ?? '';
    $categoriesPostRotateXTo = $attributes['categoriesPostRotateXTo'] ?? '';
    $categoriesPostRotateYFrom = $attributes['categoriesPostRotateYFrom'] ?? '';
    $categoriesPostRotateYTo = $attributes['categoriesPostRotateYTo'] ?? '';
    $categoriesPostSkewXFrom = $attributes['categoriesPostSkewXFrom'] ?? '';
    $categoriesPostSkewXTo = $attributes['categoriesPostSkewXTo'] ?? '';
    $categoriesPostSkewYFrom = $attributes['categoriesPostSkewYFrom'] ?? '';
    $categoriesPostSkewYTo = $attributes['categoriesPostSkewYTo'] ?? '';
    $categoriesPostDuration = $attributes['categoriesPostDuration'] ?? '';
    $categoriesPostDelay = $attributes['categoriesPostDelay'] ?? '';
    $categoriesPostEndDelay = $attributes['categoriesPostEndDelay'] ?? '';
    $categoriesPostEasing = $attributes['categoriesPostEasing'] ?? '';
    $categoriesPostDirection = $attributes['categoriesPostDirection'] ?? '';
    $categoriesPostLoop = $attributes['categoriesPostLoop'] ?? '';
    $categoriesPostEffectHover = $attributes['categoriesPostEffectHover'] ?? '';
    $categoriesPostOpacityHover = $attributes['categoriesPostOpacityHover'] ?? '';
    $categoriesPostBlurHover = $attributes['categoriesPostBlurHover'] ?? '';
    $categoriesPostTranslateXHover = $attributes['categoriesPostTranslateXHover'] ?? '';
    $categoriesPostTranslateYHover = $attributes['categoriesPostTranslateYHover'] ?? '';
    $categoriesPostScaleTypeHover = $attributes['categoriesPostScaleTypeHover'] ?? '';
    $categoriesPostScaleHover = $attributes['categoriesPostScaleHover'] ?? '';
    $categoriesPostRotateHover = $attributes['categoriesPostRotateHover'] ?? '';
    $categoriesPostRotateXHover = $attributes['categoriesPostRotateXHover'] ?? '';
    $categoriesPostRotateYHover = $attributes['categoriesPostRotateYHover'] ?? '';
    $categoriesPostSkewXHover = $attributes['categoriesPostSkewXHover'] ?? '';
    $categoriesPostSkewYHover = $attributes['categoriesPostSkewYHover'] ?? '';
    $categoriesPostDurationHover = $attributes['categoriesPostDurationHover'] ?? '';
    $categoriesPostEasingHover = $attributes['categoriesPostEasingHover'] ?? '';
    $categoriesPostDesktop = $attributes['categoriesPostDesktop'] ?? '';
    $categoriesPostTablet = $attributes['categoriesPostTablet'] ?? '';
    $categoriesPostMobile = $attributes['categoriesPostMobile'] ?? '';
    $categoriesPostFontSizeMobile = $attributes['categoriesPostFontSizeMobile'] ?? '';
    $categoriesPostFontSizeTablet = $attributes['categoriesPostFontSizeTablet'] ?? '';
    $categoriesPostFontSize = $attributes['categoriesPostFontSize'] ?? '';
    $categoriesPostFontStyle = $attributes['categoriesPostFontStyle'] ?? '';
    $categoriesPostFontFamily = $attributes['categoriesPostFontFamily'] ?? '';
    $categoriesPostFontWeight = $attributes['categoriesPostFontWeight'] ?? '';
    $categoriesPostLineHeight = $attributes['categoriesPostLineHeight'] ?? '';
    $categoriesPostLetterSpacing = $attributes['categoriesPostLetterSpacing'] ?? '';
    $categoriesPostColorIn = $attributes['categoriesPostColorIn'] ?? '';
    $categoriesPostEffectSplit = $attributes['categoriesPostEffectSplit'] ?? '';
    $categoriesPostStagger = $attributes['categoriesPostStagger'] ?? '';
    $categoriesPostDirectionBlock = $attributes['categoriesPostDirectionBlock'] ?? '';
    $categoriesPostBlockColor = $attributes['categoriesPostBlockColor'] ?? '';

    $isBold = isset($categoriesPostFontStyle['fontWeight']) && $categoriesPostFontStyle['fontWeight'] === 'bold';
    $fontStyle = isset($categoriesPostFontStyle['fontStyle']) ? esc_attr($categoriesPostFontStyle['fontStyle']) : 'normal'; // Valore di default
    $fontWeight = $isBold ? 'bold' : (isset($categoriesPostFontWeight) ? esc_attr($categoriesPostFontWeight) : 'normal'); // Valore di default
    $textDecoration = isset($categoriesPostFontStyle['textDecoration']) ? esc_attr($categoriesPostFontStyle['textDecoration']) : 'none'; // Valore di default

    $style = "
    letter-spacing: " . esc_attr($categoriesPostLetterSpacing) . "px;
    line-height: " . esc_attr($categoriesPostLineHeight) . ";
    font-family: " . esc_attr($categoriesPostFontFamily) . ";
    font-style: " . $fontStyle . ";
    font-weight: " . $fontWeight . ";
    text-decoration: " . $textDecoration . ";
    font-size: clamp(" . esc_attr($categoriesPostFontSizeMobile) . "px," . esc_attr($categoriesPostFontSizeTablet) . "vw, " . esc_attr($categoriesPostFontSize) . "px); 
    padding-top: " . esc_attr($categoriesPostPadding['top']) . ";
    padding-bottom: " . esc_attr($categoriesPostPadding['bottom']) . ";
    padding-left: " . esc_attr($categoriesPostPadding['left']) . ";
    padding-right: " . esc_attr($categoriesPostPadding['right']) . ";
    margin-top: " . esc_attr($categoriesPostMargin['top']) . ";
    margin-bottom: " . esc_attr($categoriesPostMargin['bottom']) . ";
    margin-left: " . esc_attr($categoriesPostMargin['left']) . ";
    margin-right: " . esc_attr($categoriesPostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($categoriesPostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($categoriesPostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($categoriesPostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($categoriesPostBorderRadius['left']) . ";
    border-style: " . esc_attr($categoriesPostBorderStyle) . ";
    border-width: " . esc_attr($categoriesPostBorderSize['top']) . " " . esc_attr($categoriesPostBorderSize['right']) . " " . esc_attr($categoriesPostBorderSize['bottom']) . " " . esc_attr($categoriesPostBorderSize['left']) . ";
    border-color: " . esc_attr($categoriesPostBorderColor) . ";
    transform: rotate(" . esc_attr($categoriesPostRotate) . "deg);
    opacity: " . esc_attr($categoriesPostOpacity) . ";
    " . ($categoriesPostBoxShadow ? "box-shadow: " . esc_attr($categoriesPostBoxShadowHOffset . 'px') . " " . esc_attr($categoriesPostBoxShadowVOffset . 'px') . " " . esc_attr($categoriesPostBoxShadowBlur . 'px') . " " . esc_attr($categoriesPostBoxShadowSpread . 'px') . " " . esc_attr($categoriesPostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($categoriesPostColor) . ";
    color: " . esc_attr($categoriesPostColorIn) . ";
    max-width: max-content;
";
    $desktopClassCategories = $categoriesPostDesktop ? 'desktop-post-categories-visible' : 'desktop-post-categories-hidden';
    $tabletClassCategories = $categoriesPostMobile ? 'tablet-post-categories-visible' : 'tablet-post-categories-hidden';
    $mobileClassCategories = $categoriesPostTablet ? 'mobile-post-categories-visible' : 'mobile-post-categories-hidden';
?>
    <div class="content-categories-post" style="justify-content:<?php echo esc_attr($categoriesPostAlign); ?>;display:flex;">
        <?php foreach ($post['categories'] as $category) : ?>
            <span class="categories-post <?php echo esc_attr($desktopClassCategories); ?> <?php echo esc_attr($tabletClassCategories); ?> <?php echo esc_attr($mobileClassCategories); ?>"
                data-font-family="<?php echo esc_attr($categoriesPostFontFamily); ?>"
                style="<?php echo esc_attr($style); ?>"
                <?php if ($categoriesPostEffect !== 'none') : ?>
                data-effect-in="<?php echo esc_attr($categoriesPostEffect); ?>"
                data-duration="<?php echo esc_attr($categoriesPostDuration); ?>"
                data-delay-in="<?php echo esc_attr($categoriesPostDelay); ?>"
                data-delay-in-end="<?php echo esc_attr($categoriesPostEndDelay); ?>"
                data-easing-in="<?php echo esc_attr($categoriesPostEasing); ?>"
                data-direction-in="<?php echo esc_attr($categoriesPostDirection); ?>"
                data-loop-in="<?php echo esc_attr($categoriesPostLoop); ?>"
                data-opacity-in-from="<?php echo esc_attr($categoriesPostOpacityFrom); ?>"
                data-opacity-in-to="<?php echo esc_attr($categoriesPostOpacityTo); ?>"
                data-filter-in-from="<?php echo esc_attr($categoriesPostBlurFrom); ?>"
                data-filter-in-to="<?php echo esc_attr($categoriesPostBlurTo); ?>"
                data-start-x-from="<?php echo esc_attr($categoriesPostTranslateXFrom); ?>"
                data-start-x-to="<?php echo esc_attr($categoriesPostTranslateXTo); ?>"
                data-start-y-from="<?php echo esc_attr($categoriesPostTranslateYFrom); ?>"
                data-start-y-to="<?php echo esc_attr($categoriesPostTranslateYTo); ?>"
                data-rotate-in-from="<?php echo esc_attr($categoriesPostRotateFrom); ?>"
                data-rotate-in-to="<?php echo esc_attr($categoriesPostRotateTo); ?>"
                data-rotate-x-in-from="<?php echo esc_attr($categoriesPostRotateXFrom); ?>"
                data-rotate-x-in-to="<?php echo esc_attr($categoriesPostRotateXTo); ?>"
                data-rotate-y-in-from="<?php echo esc_attr($categoriesPostRotateYFrom); ?>"
                data-rotate-y-in-to="<?php echo esc_attr($categoriesPostRotateYTo); ?>"
                data-scale-in-from="<?php echo esc_attr($categoriesPostScaleFrom); ?>"
                data-scale-in-to="<?php echo esc_attr($categoriesPostScaleTo); ?>"
                data-skew-x-from="<?php echo esc_attr($categoriesPostSkewXFrom); ?>"
                data-skew-x-to="<?php echo esc_attr($categoriesPostSkewXTo); ?>"
                data-skew-y-from="<?php echo esc_attr($categoriesPostSkewYFrom); ?>"
                data-skew-y-to="<?php echo esc_attr($categoriesPostSkewYTo); ?>"
                data-scale-custom-effect-in="<?php echo esc_attr($categoriesPostScaleType); ?>"
                data-stagger="<?php echo esc_attr($categoriesPostStagger); ?>"
                data-effect-split="<?php echo esc_attr($categoriesPostEffectSplit); ?>"
                data-direction-block="<?php echo esc_attr($categoriesPostDirectionBlock); ?>"
                data-color-block="<?php echo esc_attr($categoriesPostBlockColor); ?>"
                <?php endif;
                if ($categoriesPostEffectHover !== 'none') : ?>
                data-effect-hover="<?php echo esc_attr($categoriesPostEffectHover); ?>"
                data-scale-hover="<?php echo esc_attr($categoriesPostScaleHover); ?>"
                data-opacity-hover="<?php echo esc_attr($categoriesPostOpacityHover); ?>"
                data-filter-hover="<?php echo esc_attr($categoriesPostBlurHover); ?>"
                data-rotate-hover="<?php echo esc_attr($categoriesPostRotateHover); ?>"
                data-rotate-x-hover="<?php echo esc_attr($categoriesPostRotateXHover); ?>"
                data-rotate-y-hover="<?php echo esc_attr($categoriesPostRotateYHover); ?>"
                data-skew-x-hover="<?php echo esc_attr($categoriesPostSkewXHover); ?>"
                data-skew-y-hover="<?php echo esc_attr($categoriesPostSkewYHover); ?>"
                data-start-x-hover="<?php echo esc_attr($categoriesPostTranslateXHover); ?>"
                data-start-y-hover="<?php echo esc_attr($categoriesPostTranslateYHover); ?>"
                data-scale-custom-effect-hover="<?php echo esc_attr($categoriesPostScaleTypeHover); ?>"
                data-duration-hover="<?php echo esc_attr($categoriesPostDurationHover); ?>"
                data-easing-hover="<?php echo esc_attr($categoriesPostEasingHover); ?>"
                <?php endif; ?>>
                <?php echo esc_html($category); ?>
            </span>
        <?php endforeach; ?>
    </div>

<?php

} ?>