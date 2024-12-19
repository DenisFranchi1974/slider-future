<?php
function render_post_image($post, $attributes)
{
    $imagePostAlign = $attributes['imagePostAlign'] ?? '';
    $imagePostSize = $attributes['imagePostSize'] ?? '';
    $imagePostWidth = $attributes['imagePostWidth'] ?? '';
    $imagePostWidthPx = $attributes['imagePostWidthPx'] ?? '';
    $imagePostWidthPercent = $attributes['imagePostWidthPercent'] ?? '';
    $imagePostHeight = $attributes['imagePostHeight'] ?? '';
    $imagePostHeightPx = $attributes['imagePostHeightPx'] ?? '';
    $imagePostHeightPercent = $attributes['imagePostHeightPercent'] ?? '';
    $imagePostColor = $attributes['imagePostColor'] ?? '';
    $imagePostPadding = $attributes['imagePostPadding'] ?? '';
    $imagePostMargin = $attributes['imagePostMargin'] ?? '';
    $imagePostBorderRadius = $attributes['imagePostBorderRadius'] ?? '';
    $imagePostBorderStyle = $attributes['imagePostBorderStyle'] ?? '';
    $imagePostBorderSize = $attributes['imagePostBorderSize'] ?? '';
    $imagePostBorderColor = $attributes['imagePostBorderColor'] ?? '';
    $imagePostRotate = $attributes['imagePostRotate'] ?? '';
    $imagePostOpacity = $attributes['imagePostOpacity'] ?? '';
    $imagePostBoxShadow = $attributes['imagePostBoxShadow'] ?? '';
    $imagePostBoxShadowHOffset = $attributes['imagePostBoxShadowHOffset'] ?? '';
    $imagePostBoxShadowVOffset = $attributes['imagePostBoxShadowVOffset'] ?? '';
    $imagePostBoxShadowBlur = $attributes['imagePostBoxShadowBlur'] ?? '';
    $imagePostBoxShadowSpread = $attributes['imagePostBoxShadowSpread'] ?? '';
    $imagePostBoxShadowColor = $attributes['imagePostBoxShadowColor'] ?? '';
    $imagePostEffect = $attributes['imagePostEffect'] ?? '';
    $imagePostOpacityFrom = $attributes['imagePostOpacityFrom'] ?? '';
    $imagePostOpacityTo = $attributes['imagePostOpacityTo'] ?? '';
    $imagePostBlurFrom = $attributes['imagePostBlurFrom'] ?? '';
    $imagePostBlurTo = $attributes['imagePostBlurTo'] ?? '';
    $imagePostTranslateXFrom = $attributes['imagePostTranslateXFrom'] ?? '';
    $imagePostTranslateXTo = $attributes['imagePostTranslateXTo'] ?? '';
    $imagePostTranslateYFrom = $attributes['imagePostTranslateYFrom'] ?? '';
    $imagePostTranslateYTo = $attributes['imagePostTranslateYTo'] ?? '';
    $imagePostScaleType = $attributes['imagePostScaleType'] ?? '';
    $imagePostScaleFrom = $attributes['imagePostScaleFrom'] ?? '';
    $imagePostScaleTo = $attributes['imagePostScaleTo'] ?? '';
    $imagePostRotateFrom = $attributes['imagePostRotateFrom'] ?? '';
    $imagePostRotateTo = $attributes['imagePostRotateTo'] ?? '';
    $imagePostRotateXFrom = $attributes['imagePostRotateXFrom'] ?? '';
    $imagePostRotateXTo = $attributes['imagePostRotateXTo'] ?? '';
    $imagePostRotateYFrom = $attributes['imagePostRotateYFrom'] ?? '';
    $imagePostRotateYTo = $attributes['imagePostRotateYTo'] ?? '';
    $imagePostSkewXFrom = $attributes['imagePostSkewXFrom'] ?? '';
    $imagePostSkewXTo = $attributes['imagePostSkewXTo'] ?? '';
    $imagePostSkewYFrom = $attributes['imagePostSkewYFrom'] ?? '';
    $imagePostSkewYTo = $attributes['imagePostSkewYTo'] ?? '';
    $imagePostDuration = $attributes['imagePostDuration'] ?? '';
    $imagePostDelay = $attributes['imagePostDelay'] ?? '';
    $imagePostEndDelay = $attributes['imagePostEndDelay'] ?? '';
    $imagePostEasing = $attributes['imagePostEasing'] ?? '';
    $imagePostDirection = $attributes['imagePostDirection'] ?? '';
    $imagePostLoop = $attributes['imagePostLoop'] ?? '';
    $imagePostEffectHover = $attributes['imagePostEffectHover'] ?? '';
    $imagePostOpacityHover = $attributes['imagePostOpacityHover'] ?? '';
    $imagePostBlurHover = $attributes['imagePostBlurHover'] ?? '';
    $imagePostTranslateXHover = $attributes['imagePostTranslateXHover'] ?? '';
    $imagePostTranslateYHover = $attributes['imagePostTranslateYHover'] ?? '';
    $imagePostScaleTypeHover = $attributes['imagePostScaleTypeHover'] ?? '';
    $imagePostScaleHover = $attributes['imagePostScaleHover'] ?? '';
    $imagePostRotateHover = $attributes['imagePostRotateHover'] ?? '';
    $imagePostRotateXHover = $attributes['imagePostRotateXHover'] ?? '';
    $imagePostRotateYHover = $attributes['imagePostRotateYHover'] ?? '';
    $imagePostSkewXHover = $attributes['imagePostSkewXHover'] ?? '';
    $imagePostSkewYHover = $attributes['imagePostSkewYHover'] ?? '';
    $imagePostDurationHover = $attributes['imagePostDurationHover'] ?? '';
    $imagePostEasingHover = $attributes['imagePostEasingHover'] ?? '';
    $imagePostDesktop = $attributes['imagePostDesktop'] ?? '';
    $imagePostTablet = $attributes['imagePostTablet'] ?? '';
    $imagePostMobile = $attributes['imagePostMobile'] ?? '';
    $imagePostLink = $attributes['imagePostLink'] ?? '';
    $imagePostTarget = $attributes['imagePostTarget'] ?? '';


    $style = "
    object-fit: " . esc_attr($imagePostSize) . ";
    width: " . esc_attr($imagePostWidth === "fixed" ? $imagePostWidthPx . 'px' : $imagePostWidthPercent . '%') . ";
    height: " . esc_attr($imagePostHeight === "fixed" ? $imagePostHeightPx . 'px' : $imagePostHeightPercent . '%') . ";
    padding-top: " . esc_attr($imagePostPadding['top']) . ";
    padding-bottom: " . esc_attr($imagePostPadding['bottom']) . ";
    padding-left: " . esc_attr($imagePostPadding['left']) . ";
    padding-right: " . esc_attr($imagePostPadding['right']) . ";
    margin-top: " . esc_attr($imagePostMargin['top']) . ";
    margin-bottom: " . esc_attr($imagePostMargin['bottom']) . ";
    margin-left: " . esc_attr($imagePostMargin['left']) . ";
    margin-right: " . esc_attr($imagePostMargin['right']) . ";
    border-top-left-radius: " . esc_attr($imagePostBorderRadius['top']) . ";
    border-top-right-radius: " . esc_attr($imagePostBorderRadius['right']) . ";
    border-bottom-right-radius: " . esc_attr($imagePostBorderRadius['bottom']) . ";
    border-bottom-left-radius: " . esc_attr($imagePostBorderRadius['left']) . ";
    border-style: " . esc_attr($imagePostBorderStyle) . ";
    border-width: " . esc_attr($imagePostBorderSize['top']) . " " . esc_attr($imagePostBorderSize['right']) . " " . esc_attr($imagePostBorderSize['bottom']) . " " . esc_attr($imagePostBorderSize['left']) . ";
    border-color: " . esc_attr($imagePostBorderColor) . ";
    transform: rotate(" . esc_attr($imagePostRotate) . "deg);
    opacity: " . esc_attr($imagePostOpacity) . ";
    " . ($imagePostBoxShadow ? "box-shadow: " . esc_attr($imagePostBoxShadowHOffset . 'px') . " " . esc_attr($imagePostBoxShadowVOffset . 'px') . " " . esc_attr($imagePostBoxShadowBlur . 'px') . " " . esc_attr($imagePostBoxShadowSpread . 'px') . " " . esc_attr($imagePostBoxShadowColor) . ";" : "") . "
    background-color: " . esc_attr($imagePostColor) . ";
";
    $desktopClassImage = $imagePostDesktop ? 'desktop-post-image-visible' : 'desktop-post-image-hidden';
    $tabletClassImage = $imagePostMobile ? 'tablet-post-image-visible' : 'tablet-post-image-hidden';
    $mobileClassImage = $imagePostTablet ? 'mobile-post-image-visible' : 'mobile-post-image-hidden';
    $link_url = '';
    $onclick = '';
    $linkTargetImage = '_self';
    if ($imagePostLink !== 'none') {
        if ($imagePostLink === 'link' && !empty(esc_url($post['link']))) {
            $link_url = esc_url($post['link']);
            if (!empty($imagePostTarget)) {
                $linkTargetImage = esc_attr($imagePostTarget);
            }
            $onclick = "window.open('{$link_url}', '{$linkTargetImage}');";
        }
    }
?>
    <div class="featured-image-post <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>" style="text-align:<?php echo esc_attr($imagePostAlign); ?>;<?php if ($imagePostLink !== 'none') : ?>cursor: pointer;<?php endif; ?>"
        <?php
        if ($imagePostLink !== 'none') : ?>
        onclick="<?php echo $onclick; ?>"
        <?php endif; ?>>
        <img
            src="<?php echo esc_url($post['image']); ?>"
            alt="<?php echo esc_attr($post['title']); ?>"
            style="<?php echo $style; ?>"
            <?php if ($imagePostEffect !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($imagePostEffect); ?>"
            data-duration="<?php echo esc_attr($imagePostDuration); ?>"
            data-delay-in="<?php echo esc_attr($imagePostDelay); ?>"
            data-delay-in-end="<?php echo esc_attr($imagePostEndDelay); ?>"
            data-easing-in="<?php echo esc_attr($imagePostEasing); ?>"
            data-direction-in="<?php echo esc_attr($imagePostDirection); ?>"
            data-loop-in="<?php echo esc_attr($imagePostLoop); ?>"
            data-opacity-in-from="<?php echo esc_attr($imagePostOpacityFrom); ?>"
            data-opacity-in-to="<?php echo esc_attr($imagePostOpacityTo); ?>"
            data-filter-in-from="<?php echo esc_attr($imagePostBlurFrom); ?>"
            data-filter-in-to="<?php echo esc_attr($imagePostBlurTo); ?>"
            data-start-x-from="<?php echo esc_attr($imagePostTranslateXFrom); ?>"
            data-start-x-to="<?php echo esc_attr($imagePostTranslateXTo); ?>"
            data-start-y-from="<?php echo esc_attr($imagePostTranslateYFrom); ?>"
            data-start-y-to="<?php echo esc_attr($imagePostTranslateYTo); ?>"
            data-rotate-in-from="<?php echo esc_attr($imagePostRotateFrom); ?>"
            data-rotate-in-to="<?php echo esc_attr($imagePostRotateTo); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($imagePostRotateXFrom); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($imagePostRotateXTo); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($imagePostRotateYFrom); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($imagePostRotateYTo); ?>"
            data-scale-in-from="<?php echo esc_attr($imagePostScaleFrom); ?>"
            data-scale-in-to="<?php echo esc_attr($imagePostScaleTo); ?>"
            data-skew-x-from="<?php echo esc_attr($imagePostSkewXFrom); ?>"
            data-skew-x-to="<?php echo esc_attr($imagePostSkewXTo); ?>"
            data-skew-y-from="<?php echo esc_attr($imagePostSkewYFrom); ?>"
            data-skew-y-to="<?php echo esc_attr($imagePostSkewYTo); ?>"
            data-scale-custom-effect-in="<?php echo esc_attr($imagePostScaleType); ?>"
            <?php endif;
            if ($imagePostEffectHover !== 'none') : ?>
            data-effect-hover="<?php echo esc_attr($imagePostEffectHover); ?>"
            data-scale-hover="<?php echo esc_attr($imagePostScaleHover); ?>"
            data-opacity-hover="<?php echo esc_attr($imagePostOpacityHover); ?>"
            data-filter-hover="<?php echo esc_attr($imagePostBlurHover); ?>"
            data-rotate-hover="<?php echo esc_attr($imagePostRotateHover); ?>"
            data-rotate-x-hover="<?php echo esc_attr($imagePostRotateXHover); ?>"
            data-rotate-y-hover="<?php echo esc_attr($imagePostRotateYHover); ?>"
            data-skew-x-hover="<?php echo esc_attr($imagePostSkewXHover); ?>"
            data-skew-y-hover="<?php echo esc_attr($imagePostSkewYHover); ?>"
            data-start-x-hover="<?php echo esc_attr($imagePostTranslateXHover); ?>"
            data-start-y-hover="<?php echo esc_attr($imagePostTranslateYHover); ?>"
            data-scale-custom-effect-hover="<?php echo esc_attr($imagePostScaleTypeHover); ?>"
            data-duration-hover="<?php echo esc_attr($imagePostDurationHover); ?>"
            data-easing-hover="<?php echo esc_attr($imagePostEasingHover); ?>"
            <?php endif; ?> />
    </div>

<?php

} ?>