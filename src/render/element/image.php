<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

function slider_future_render_image($element, $slide)
{
    $marginTop = esc_attr($element['marginImage']['top'] ?? '0px');
    $marginRight = esc_attr($element['marginImage']['right'] ?? '0px');
    $marginBottom = esc_attr($element['marginImage']['bottom'] ?? '0px');
    $marginLeft = esc_attr($element['marginImage']['left'] ?? '0px');
    $paddingTop = esc_attr($element['paddingImage']['top'] ?? '0px');
    $paddingRight = esc_attr($element['paddingImage']['right'] ?? '0px');
    $paddingBottom = esc_attr($element['paddingImage']['bottom'] ?? '0px');
    $paddingLeft = esc_attr($element['paddingImage']['left'] ?? '0px');
    $style = "";
    if (!empty($element['enableBoxShadowImage'])) {
        $boxShadowXImage = esc_attr($element['boxShadowXImage'] ?? 0);
        $boxShadowYImage = esc_attr($element['boxShadowYImage'] ?? 0);
        $boxShadowBlurImage = esc_attr($element['boxShadowBlurImage'] ?? 0);
        $boxShadowSpreadImage = esc_attr($element['boxShadowSpreadImage'] ?? 0);
        $colorShadowImage = esc_attr($element['colorShadowImage'] ?? '#000000');
        $style .= 'box-shadow: ' . $boxShadowXImage . 'px '
            . $boxShadowYImage . 'px '
            . $boxShadowBlurImage . 'px '
            . $boxShadowSpreadImage . 'px '
            . $colorShadowImage . ';';
    }
    $backgroundBorderColorImage = esc_attr($element['backgroundBorderColorImage'] ?? '#000');
    $borderRadiusTop = esc_attr($element['backgroundBorderRadiusImage']['top'] ?? '0px');
    $borderRadiusRight = esc_attr($element['backgroundBorderRadiusImage']['right'] ?? '0px');
    $borderRadiusBottom = esc_attr($element['backgroundBorderRadiusImage']['bottom'] ?? '0px');
    $borderRadiusLeft = esc_attr($element['backgroundBorderRadiusImage']['left'] ?? '0px');
    $borderRadius = "$borderRadiusTop $borderRadiusRight $borderRadiusBottom $borderRadiusLeft";
    $backgroundColorImage = esc_attr($element['backgroundColorImage'] ?? '');
    $borderWidthTop = esc_attr($element['backgroundBorderSizeImage']['top'] ?? '0px');
    $borderWidthRight = esc_attr($element['backgroundBorderSizeImage']['right'] ?? '0px');
    $borderWidthBottom = esc_attr($element['backgroundBorderSizeImage']['bottom'] ?? '0px');
    $borderWidthLeft = esc_attr($element['backgroundBorderSizeImage']['left'] ?? '0px');
    $borderWidth = "$borderWidthTop $borderWidthRight $borderWidthBottom $borderWidthLeft";
    $spikeLeftWidth = esc_attr($element['spikeLeftWidth'] ?? 0);
    $spikeRightWidth = esc_attr($element['spikeRightWidth'] ?? 0);
    $imageColorHover = esc_attr($element['imageColorHover'] ?? '');
    $margin = "$marginTop $marginRight $marginBottom $marginLeft";
    $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
    $style .= "
                                    border-style: " . esc_attr($element['borderStyleImage']) . ";
                                    border-width: " . $borderWidth . ";
                                    border-color: " . $backgroundBorderColorImage . ";
                                    border-radius: " . $borderRadius . ";
                                    padding: " . $padding . ";
                                    background-color: " . $backgroundColorImage . ";
                                    max-width: 100%;
                                    --spike-width:" . $spikeLeftWidth . "%;
                                    --spike-width-right: " . $spikeRightWidth . "%;
                                    --color-hover-image: " . $imageColorHover . ";
                                    margin: " . $margin . ";
                                    ";
    if ($element['widthImage'] === 'relative') {
        $style .= " width: " . esc_attr($element['customWidthImage']) . "%;";
    } elseif ($element['widthImage'] === 'fixed') {
        $style .= " width: " . esc_attr($element['customWidthImagePx']) . "px;";
    }
    if ($element['heightImage'] === 'relative') {
        $style .= " height: " . esc_attr($element['customHeightImage']) . "%;";
    } elseif ($element['heightImage'] === 'fixed') {
        $style .= " height: " . esc_attr($element['customHeightImagePx']) . "px;";
    }
    if ($element['widthImage'] !== 'auto' || $element['heightImage'] !== 'auto') {
        $style .= " object-fit: " . esc_attr($element['fit']) . ";";
    }
    $desktopClassImage = $element['enableDesktopImage'] ? 'desktop-image-visible' : 'desktop-image-hidden';
    $tabletClassImage = $element['enableTabletImage'] ? 'tablet-image-visible' : 'tablet-image-hidden';
    $mobileClassImage = $element['enableMobileImage'] ? 'mobile-image-visible' : 'mobile-image-hidden';
    $link_url = '';
    $onclick = '';
    $linkTargetImage = '_self';
    $rel_div = 'follow';
    if ($element['imageLink'] !== 'none') {
        if ($element['imageLink'] === 'link' && !empty($element['linkUrlImage'])) {
            $link_url = esc_url($element['linkUrlImage']);
            if (!empty($element['linkTargetImage'])) {
                $linkTargetImage = esc_attr($element['linkTargetImage']);
            }
            if ($element['linkRelImage'] === 'nofollow') {
                $rel_div = 'nofollow';
            }
            $onclick = "window.open('{$link_url}', '{$linkTargetImage}', 'rel={$rel_div}');";
        } elseif ($element['imageLink'] === 'scroll-below') {
            $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
        } elseif ($element['imageLink'] === 'scroll-to-id' && !empty($element['scrollToIdImage'])) {
            $scroll_id = esc_attr($element['scrollToIdImage']);
            $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
        }
    }
    $imageAlign = esc_attr($element['imageAlign'] ?? 'center');
    $opacityImage = esc_attr($element['opacityImage'] ?? 1);
    $rotateImage = esc_attr($element['rotateImage'] ?? 0);
    $rotateImageX = esc_attr($element['rotateImageX'] ?? 0);
    $rotateImageY = esc_attr($element['rotateImageY'] ?? 0);
    $perspectiveImage = esc_attr($element['perspectiveImage'] ?? 0);
    $zIndexImage = esc_attr($element['zIndexImage'] ?? 1);
?>
    <?php if ($slide['developerMode']) : ?>
        <div class="content-content-image-first-absolute"
            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>"
            style="position: absolute; text-align:<?php echo esc_attr($imageAlign); ?>; z-index:<?php echo esc_attr($zIndexImage); ?>">
        <?php endif; ?>
        <div
            <?php
            if ($element['imageLink'] !== 'none') : ?>
            onclick="<?php echo esc_js($onclick); ?>"
            <?php endif;

            ?>
            style="transform:perspective(<?php echo esc_attr($perspectiveImage); ?>px) rotateX(<?php echo esc_attr($rotateImageX); ?>deg) rotateY(<?php echo esc_attr($rotateImageY); ?>deg) rotate(<?php echo esc_attr($rotateImage); ?>deg);
                                opacity:<?php echo esc_attr($opacityImage); ?>; 
                                z-index:<?php echo esc_attr($zIndexImage); ?>;
                                --background-color-image-hover: <?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>;
                                 <?php if ($element['imageLink'] !== 'none') : ?>
                                        cursor: pointer;
                                    <?php endif; ?>
                                width:<?php echo esc_attr($element['widthImageContent']) ?>;
                                text-align:<?php echo esc_attr($imageAlign); ?>;"
            class="content-img-first  <?php echo esc_attr($desktopClassImage); ?> <?php echo esc_attr($tabletClassImage); ?> <?php echo esc_attr($mobileClassImage); ?> <?php echo esc_attr($element['imageFilter']) ?>">
            <img src="<?php echo esc_url($element['url']); ?>" alt="<?php echo esc_attr($element['alt']); ?>" class="image-first-slide image-with-mask <?php echo esc_attr($element['blobMask']) ?> <?php echo esc_attr($element['spikeMask']) ?> <?php echo esc_attr($element['spikeMaskRight']) ?>"
                style="<?php echo esc_attr($style); ?>"
                <?php if ($element['effectIn'] !== 'none') : ?>
                data-effect-in="<?php echo esc_attr($element['effectIn'] ?? ''); ?>"
                data-duration="<?php echo esc_attr($element['duration'] ?? 800); ?>"
                data-delay-in="<?php echo esc_attr($element['delay'] ?? 0); ?>"
                data-delay-in-end="<?php echo esc_attr($element['endDelay'] ?? 0); ?>"
                data-easing-in="<?php echo esc_attr($element['easing'] ?? 'linear'); ?>"
                data-direction-in="<?php echo esc_attr($element['direction'] ?? 'normal'); ?>"
                data-loop-in="<?php echo esc_attr($element['loop'] ?? '1'); ?>"
                data-opacity-in-from="<?php echo esc_attr($element['opacityFrom'] ?? 0); ?>"
                data-opacity-in-to="<?php echo esc_attr($element['opacityTo'] ?? 1); ?>"
                data-filter-in-from="<?php echo esc_attr($element['filterFrom'] ?? 0); ?>"
                data-filter-in-to="<?php echo esc_attr($element['filterTo'] ?? 0); ?>"
                data-start-x-from="<?php echo esc_attr($element['startXFrom'] ?? 100); ?>"
                data-start-x-to="<?php echo esc_attr($element['startXTo'] ?? 0); ?>"
                data-start-y-from="<?php echo esc_attr($element['startYFrom'] ?? 0); ?>"
                data-start-y-to="<?php echo esc_attr($element['startYTo'] ?? 0); ?>"
                data-rotate-in-from="<?php echo esc_attr($element['rotateFrom'] ?? 0); ?>"
                data-rotate-in-to="<?php echo esc_attr($element['rotateTo'] ?? 0); ?>"
                data-rotate-x-in-from="<?php echo esc_attr($element['rotateXFrom'] ?? 0); ?>"
                data-rotate-x-in-to="<?php echo esc_attr($element['rotateXTo'] ?? 0); ?>"
                data-rotate-y-in-from="<?php echo esc_attr($element['rotateYFrom'] ?? 0); ?>"
                data-rotate-y-in-to="<?php echo esc_attr($element['rotateYTo'] ?? 0); ?>"
                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? 0); ?>"
                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? 1); ?>"
                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? 0); ?>"
                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? 0); ?>"
                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? 0); ?>"
                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? 0); ?>"
                data-scale-custom-effect-in="<?php echo esc_attr($element['scaleType'] ?? 'scale'); ?>"
                <?php endif;
                if ($element['effectHover'] !== 'none') : ?>
                data-effect-hover="<?php echo esc_attr($element['effectHover'] ?? ''); ?>"
                data-scale-hover="<?php echo esc_attr($element['scaleHover'] ?? 1); ?>"
                data-opacity-hover="<?php echo esc_attr($element['opacityHover'] ?? 1); ?>"
                data-filter-hover="<?php echo esc_attr($element['filterHover'] ?? 0); ?>"
                data-rotate-hover="<?php echo esc_attr($element['rotateHover'] ?? 0); ?>"
                data-rotate-x-hover="<?php echo esc_attr($element['rotateXHover'] ?? 0); ?>"
                data-rotate-y-hover="<?php echo esc_attr($element['rotateYHover'] ?? 0); ?>"
                data-skew-x-hover="<?php echo esc_attr($element['skewXHover'] ?? 0); ?>"
                data-skew-y-hover="<?php echo esc_attr($element['skewYHover'] ?? 0); ?>"
                data-start-x-hover="<?php echo esc_attr($element['startXHover'] ?? 100); ?>"
                data-start-y-hover="<?php echo esc_attr($element['startYHover'] ?? 0); ?>"
                data-scale-custom-effect-hover="<?php echo esc_attr($element['scaleTypeHover'] ?? 'scale'); ?>"
                data-duration-hover="<?php echo esc_attr($element['durationHover'] ?? 800); ?>"
                data-easing-hover="<?php echo esc_attr($element['easingHover'] ?? 'linear'); ?>"
                <?php endif; ?> />
        </div>
        <?php if ($slide['developerMode']) : ?>
        </div>
<?php endif;
    } ?>