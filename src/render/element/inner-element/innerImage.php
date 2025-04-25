<?php
function render_innerImage($innerElement, $slide)
{
    $marginTop = esc_attr($innerElement['marginImage']['top'] ?? '0px');
    $marginRight = esc_attr($innerElement['marginImage']['right'] ?? '0px');
    $marginBottom = esc_attr($innerElement['marginImage']['bottom'] ?? '0px');
    $marginLeft = esc_attr($innerElement['marginImage']['left'] ?? '0px');
    $margin = "$marginTop $marginRight $marginBottom $marginLeft";
    $paddingTop = esc_attr($innerElement['paddingImage']['top'] ?? '0px');
    $paddingRight = esc_attr($innerElement['paddingImage']['right'] ?? '0px');
    $paddingBottom = esc_attr($innerElement['paddingImage']['bottom'] ?? '0px');
    $paddingLeft = esc_attr($innerElement['paddingImage']['left'] ?? '0px');
    $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
    $borderRadiusTop = esc_attr($innerElement['backgroundBorderRadiusImage']['top'] ?? '0px');
    $borderRadiusRight = esc_attr($innerElement['backgroundBorderRadiusImage']['right'] ?? '0px');
    $borderRadiusBottom = esc_attr($innerElement['backgroundBorderRadiusImage']['bottom'] ?? '0px');
    $borderRadiusLeft = esc_attr($innerElement['backgroundBorderRadiusImage']['left'] ?? '0px');
    $borderRadius = "$borderRadiusTop $borderRadiusRight $borderRadiusBottom $borderRadiusLeft";
    $borderSizeTop = esc_attr($innerElement['backgroundBorderSizeImage']['top'] ?? '0px');
    $borderSizeRight = esc_attr($innerElement['backgroundBorderSizeImage']['right'] ?? '0px');
    $borderSizeBottom = esc_attr($innerElement['backgroundBorderSizeImage']['bottom'] ?? '0px');
    $borderSizeLeft = esc_attr($innerElement['backgroundBorderSizeImage']['left'] ?? '0px');
    $borderSize = "$borderSizeTop $borderSizeRight $borderSizeBottom $borderSizeLeft";
    $style = "border-style: " . esc_attr($innerElement['borderStyleImage']) . ";
                border-width: " . $borderSize . ";
                border-color: " . esc_attr($innerElement['backgroundBorderColorImage'] ?? 0) . ";
                border-radius:  " . $borderRadius . ";
                padding: " . $padding . ";
                background-color: " . esc_attr($innerElement['backgroundColorImage'] ?? '') . ";
                margin: " . $margin . ";
                --spike-width-inner:" . esc_attr($innerElement['spikeLeftWidth'] ?? 0) . "%;
                --spike-width-right-inner: " . esc_attr($innerElement['spikeRightWidth'] ?? 0) . "%;
                z-index: " . esc_attr($innerElement['zIndexImage'] ?? 1) . ";
                max-width: 100%;
                ";
    if (!empty($innerElement['enableBoxShadowImage'])) {
        $boxShadowXImage = esc_attr($innerElement['boxShadowXImage'] ?? 0);
        $boxShadowYImage = esc_attr($innerElement['boxShadowYImage'] ?? 0);
        $boxShadowBlurImage = esc_attr($innerElement['boxShadowBlurImage'] ?? 0);
        $boxShadowSpreadImage = esc_attr($innerElement['boxShadowSpreadImage'] ?? 0);
        $colorShadowImage = esc_attr($innerElement['colorShadowImage'] ?? '#000000');

        $style .= " box-shadow: {$boxShadowXImage}px {$boxShadowYImage}px {$boxShadowBlurImage}px {$boxShadowSpreadImage}px {$colorShadowImage};";
    }
    if ($innerElement['widthImage'] === 'relative') {
        $style .= "width: " . esc_attr($innerElement['customWidthImage']) . "%;";
    } elseif ($innerElement['widthImage'] === 'fixed') {
        $style .= "width: " . esc_attr($innerElement['customWidthImagePx']) . "px;";
    }

    if ($innerElement['heightImage'] === 'relative') {
        $style .= "height: " . esc_attr($innerElement['customHeightImage']) . "%;";
    } elseif ($innerElement['heightImage'] === 'fixed') {
        $style .= "height: " . esc_attr($innerElement['customHeightImagePx']) . "px;";
    }

    if ($innerElement['widthImage'] !== 'auto' || $innerElement['heightImage'] !== 'auto') {
        $style .= "object-fit: " . esc_attr($innerElement['fit']) . ";";
    }

    $desktopClassImage = $innerElement['enableDesktopImage'] ? 'desktop-image-visible-inner' : 'desktop-image-hidden-inner';
    $tabletClassImage = $innerElement['enableTabletImage'] ? 'tablet-image-visible-inner' : 'tablet-image-hidden-inner';
    $mobileClassImage = $innerElement['enableMobileImage'] ? 'mobile-image-visible-inner' : 'mobile-image-hidden-inner';
    $link_url = '';
    $onclick = '';
    $linkTargetImage = '_self';
    $rel_div = 'follow';
    $rotateImage = esc_attr($innerElement['rotateImage'] ?? 0);
    $rotateImageX = esc_attr($innerElement['rotateImageX'] ?? 0);
    $rotateImageY = esc_attr($innerElement['rotateImageY'] ?? 0);
    $perspectiveImage = esc_attr($innerElement['perspectiveImage'] ?? 0);

    if ($innerElement['imageLink'] !== 'none') {
        if ($innerElement['imageLink'] === 'link' && !empty($innerElement['linkUrlImage'])) {
            $link_url = esc_url($innerElement['linkUrlImage']);
            if (!empty($innerElement['linkTargetImage'])) {
                $linkTargetImage = esc_attr($innerElement['linkTargetImage']);
            }
            if ($innerElement['linkRelImage'] === 'nofollow') {
                $rel_div = 'nofollow';
            }
            $onclick = "window.open('{$link_url}', '{$linkTargetImage}', 'rel={$rel_div}');";
        } elseif ($innerElement['imageLink'] === 'scroll-below') {
            $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
        } elseif ($innerElement['imageLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdImage'])) {
            $scroll_id = esc_attr($innerElement['scrollToIdImage']);
            $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
        }
    }
?>
    <div
        <?php if ($innerElement['imageLink'] !== 'none') : ?>
        onclick="<?php echo esc_js( $onclick ); ?>"
        <?php endif; ?>
       style="transform:perspective(<?php echo esc_attr( $perspectiveImage ); ?>px) rotateX(<?php echo esc_attr( $rotateImageX ); ?>deg) rotateY(<?php echo esc_attr( $rotateImageY ); ?>deg) rotate(<?php echo esc_attr( $rotateImage ); ?>deg);
                                               opacity: <?php echo esc_attr($innerElement['opacityImage'] ?? 1) ?>;
                                               width:<?php echo esc_attr($innerElement['widthImageContent']) ?>;
                                                --background-color-image-inner-hover: <?php echo esc_attr($innerElement['backgroundColorImageHover'] ?? ''); ?>;
                                           position:<?php echo esc_attr($innerElement['positionInnerImage'] ?? 'static') ?>;
                                            text-align:<?php echo esc_attr($innerElement['imageAlign'] ?? 'center') ?>;
                                           top: <?php echo esc_attr($innerElement['verticalPositionInnerImage'] ?? '') ?>px;
                                           left: <?php echo esc_attr($innerElement['horizontalPositionInnerImage'] ?? '') ?>px;
                                            <?php if ($innerElement['imageLink'] !== 'none') : ?>
                                            cursor: pointer;
                                            <?php endif; ?>"
        class="content-img-inner <?php echo esc_attr($innerElement['imageFilter']) ?> <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?>">
        <img
            src="<?php echo esc_url($innerElement['imageUrl']); ?>"
            alt="<?php echo esc_attr($innerElement['alt']); ?>"
            style="<?php echo esc_attr($style); ?>"
            class="img-inner image-with-mask <?php echo esc_attr($innerElement['blobMask']); ?> <?php echo esc_attr($innerElement['spikeMask']) ?> <?php echo esc_attr($innerElement['spikeMaskRight']) ?>"
            <?php if ($innerElement['effectIn'] !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($innerElement['effectIn'] ?? ''); ?>"
            data-duration="<?php echo esc_attr($innerElement['duration'] ?? 800); ?>"
            data-delay-in="<?php echo esc_attr($innerElement['delay'] ?? 0); ?>"
            data-delay-in-end="<?php echo esc_attr($innerElement['endDelay'] ?? 0); ?>"
            data-easing-in="<?php echo esc_attr($innerElement['easing'] ?? 'linear'); ?>"
            data-direction-in="<?php echo esc_attr($innerElement['direction'] ?? 'normal'); ?>"
            data-loop-in="<?php echo esc_attr($innerElement['loop'] ?? '1'); ?>"
            data-opacity-in-from="<?php echo esc_attr($innerElement['opacityFrom'] ?? 0); ?>"
            data-opacity-in-to="<?php echo esc_attr($innerElement['opacityTo'] ?? 1); ?>"
            data-filter-in-from="<?php echo esc_attr($innerElement['filterFrom'] ?? 0); ?>"
            data-filter-in-to="<?php echo esc_attr($innerElement['filterTo'] ?? 0); ?>"
            data-start-x-from="<?php echo esc_attr($innerElement['startXFrom'] ?? 100); ?>"
            data-start-x-to="<?php echo esc_attr($innerElement['startXTo'] ?? 0); ?>"
            data-start-y-from="<?php echo esc_attr($innerElement['startYFrom'] ?? 0); ?>"
            data-start-y-to="<?php echo esc_attr($innerElement['startYTo'] ?? 0); ?>"
            data-rotate-in-from="<?php echo esc_attr($innerElement['rotateFrom'] ?? 0); ?>"
            data-rotate-in-to="<?php echo esc_attr($innerElement['rotateTo'] ?? 0); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($innerElement['rotateXFrom'] ?? 0); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($innerElement['rotateXTo'] ?? 0); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($innerElement['rotateYFrom'] ?? 0); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($innerElement['rotateYTo'] ?? 0); ?>"
            data-scale-in-from="<?php echo esc_attr($innerElement['scaleFrom'] ?? 0); ?>"
            data-scale-in-to="<?php echo esc_attr($innerElement['scaleTo'] ?? 1); ?>"
            data-skew-x-from="<?php echo esc_attr($innerElement['skewXFrom'] ?? 0); ?>"
            data-skew-x-to="<?php echo esc_attr($innerElement['skewXTo'] ?? 0); ?>"
            data-skew-y-from="<?php echo esc_attr($innerElement['skewYFrom'] ?? 0); ?>"
            data-skew-y-to="<?php echo esc_attr($innerElement['skewYTo'] ?? 0); ?>"
            data-scale-custom-effect-in="<?php echo esc_attr($innerElement['scaleType'] ?? 'scale'); ?>"
            <?php endif;
            if ($innerElement['effectHover'] !== 'none') : ?>
            data-effect-hover="<?php echo esc_attr($innerElement['effectHover'] ?? ''); ?>"
            data-scale-hover="<?php echo esc_attr($innerElement['scaleHover'] ?? 1); ?>"
            data-opacity-hover="<?php echo esc_attr($innerElement['opacityHover'] ?? 1); ?>"
            data-filter-hover="<?php echo esc_attr($innerElement['filterHover'] ?? 0); ?>"
            data-rotate-hover="<?php echo esc_attr($innerElement['rotateHover'] ?? 0); ?>"
            data-rotate-x-hover="<?php echo esc_attr($innerElement['rotateXHover'] ?? 0); ?>"
            data-rotate-y-hover="<?php echo esc_attr($innerElement['rotateYHover'] ?? 0); ?>"
            data-skew-x-hover="<?php echo esc_attr($innerElement['skewXHover'] ?? 0); ?>"
            data-skew-y-hover="<?php echo esc_attr($innerElement['skewYHover'] ?? 0); ?>"
            data-start-x-hover="<?php echo esc_attr($innerElement['startXHover'] ?? 100); ?>"
            data-start-y-hover="<?php echo esc_attr($innerElement['startYHover'] ?? 0); ?>"
            data-scale-custom-effect-hover="<?php echo esc_attr($innerElement['scaleTypeHover'] ?? 'scale'); ?>"
            data-duration-hover="<?php echo esc_attr($innerElement['durationHover'] ?? 800); ?>"
            data-easing-hover="<?php echo esc_attr($innerElement['easingHover'] ?? 'linear'); ?>"
            <?php endif; ?> />
    </div>
<?php } ?>