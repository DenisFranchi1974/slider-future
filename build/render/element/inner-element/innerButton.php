<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

function slider_future_render_innerButton($innerElement)
{
    $desktopClassButton = $innerElement['enableDesktopButton'] ? 'desktop-button-visible-inner' : 'desktop-button-hidden-inner';
    $tabletClassButton = $innerElement['enableTabletButton'] ? 'tablet-button-visible-inner' : 'tablet-button-hidden-inner';
    $mobileClassButton = $innerElement['enableMobileButton'] ? 'mobile-button-visible-inner' : 'mobile-button-hidden-inner';
    if ($innerElement['buttonLink'] !== 'none') {
        if ($innerElement['buttonLink'] === 'link' && !empty($innerElement['linkUrlButton'])) {
            $link_url = esc_url($innerElement['linkUrlButton']);
            if (!empty($innerElement['linkTargetButton'])) {
                $linkTargetButton = esc_attr($innerElement['linkTargetButton']);
            }
            if ($innerElement['linkRelButton'] === 'nofollow') {
                $rel_div = 'nofollow';
            }
            $onclick = "window.open('{$link_url}', '{$linkTargetButton}', 'rel={$rel_div}');";
        } elseif ($innerElement['buttonLink'] === 'scroll-below') {
            $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
        } elseif ($innerElement['buttonLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdButton'])) {
            $scroll_id = esc_attr($innerElement['scrollToIdButton']);
            $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
        }
    }
    $defaultButtonColor = '#ffffff';
    $defaultBackgroundBorderColorButton = '#ffffff';
    $defaultBorderStyleButton = 'solid';
    $defaultBackgroundBorderRadiusButton = '4';
    $defaultButtonBackgroundColor = '#ffffff';
    $defaultButtonBackgroundColorHover = '#18191c';
    $defaultWidthButton = '35';
    $defaultHeightButton = '55';
    $defaultButtonColorHover = '#ffffff';
    $defaultBorderSizeButtonTop = '0';
    $defaultBorderSizeButtonRight = '0';
    $defaultBorderSizeButtonBottom = '0';
    $defaultBorderSizeButtonLeft = '0';
    $buttonStyle = '';
    if (isset($innerElement['buttonColor'])) {
        $buttonStyle .= "--color-button-inner: " . esc_attr($innerElement['buttonColor']) . "; ";
    } else {
        $buttonStyle .= "--color-button-inner: " . esc_attr($defaultButtonColor) . "; ";
    }
    if (isset($innerElement['backgroundBorderColorButton'])) {
        $buttonStyle .= "--border-color-button-inner: " . esc_attr($innerElement['backgroundBorderColorButton']) . "; ";
    } else {
        $buttonStyle .= "--border-color-button-inner: " . esc_attr($defaultBackgroundBorderColorButton) . "; ";
    }
    if (isset($innerElement['borderStyleButton'])) {
        $buttonStyle .= "--border-style-button-inner: " . esc_attr($innerElement['borderStyleButton']) . "; ";
    } else {
        $buttonStyle .= "--border-style-button-inner: " . esc_attr($defaultBorderStyleButton) . "; ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['top'])) {
        $buttonStyle .= "--border-width-button-top-inner: " . esc_attr($innerElement['backgroundBorderSizeButton']['top']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-top-inner: " . esc_attr($defaultBorderSizeButtonTop) . "; ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['right'])) {
        $buttonStyle .= "--border-width-button-right-inner: " . esc_attr($innerElement['backgroundBorderSizeButton']['right']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-right-inner: " . esc_attr($defaultBorderSizeButtonRight) . "; ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['bottom'])) {
        $buttonStyle .= "--border-width-button-bottom-inner: " . esc_attr($innerElement['backgroundBorderSizeButton']['bottom']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-bottom-inner: " . esc_attr($defaultBorderSizeButtonBottom) . "; ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['left'])) {
        $buttonStyle .= "--border-width-button-left-inner: " . esc_attr($innerElement['backgroundBorderSizeButton']['left']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-left-inner: " . esc_attr($defaultBorderSizeButtonLeft) . "; ";
    }
    if (isset($innerElement['backgroundBorderRadiusButton'])) {
        $buttonStyle .= "--border-radius-button-inner: " . esc_attr($innerElement['backgroundBorderRadiusButton']) . "px; ";
    } else {
        $buttonStyle .= "--border-radius-button-inner: " . esc_attr($defaultBackgroundBorderRadiusButton) . "px; ";
    }
    if (isset($innerElement['buttonBackgroundColor'])) {
        $buttonStyle .= "--background-color-button-inner: " . esc_attr($innerElement['buttonBackgroundColor']) . "; ";
    } else {
        $buttonStyle .= "--background-color-button-inner: " . esc_attr($defaultButtonBackgroundColor) . "; ";
    }
    if (isset($innerElement['widthCustomButton'])) {
        $buttonStyle .= "--buttonWidth-inner: " . esc_attr($innerElement['widthCustomButton']) . "px; ";
    } else {
        $buttonStyle .= "--buttonWidth-inner: " . esc_attr($defaultWidthButton) . "px; ";
    }
    if (isset($innerElement['heightCustomButton'])) {
        $buttonStyle .= "--buttonHeight-inner: " . esc_attr($innerElement['heightCustomButton']) . "px; ";
    } else {
        $buttonStyle .= "--buttonHeight-inner: " . esc_attr($defaultHeightButton) . "px; ";
    }
    if (isset($innerElement['buttonColorHover'])) {
        $buttonStyle .= "--color-button-hover-inner: " . esc_attr($innerElement['buttonColorHover']) . "; ";
    } else {
        $buttonStyle .= "--color-button-hover-inner: " . esc_attr($defaultButtonColorHover) . "; ";
    }
    if (isset($innerElement['buttonBackgroundColorHover'])) {
        $buttonStyle .= "--background-color-button-hover-inner: " . esc_attr($innerElement['buttonBackgroundColorHover']) . "; ";
    } else {
        $buttonStyle .= "--background-color-button-hover-inner: " . esc_attr($defaultButtonBackgroundColorHover) . "; ";
    }
    if (isset($innerElement['rotateButton'])) {
        $buttonStyle .= "transform: rotate(" . esc_attr($innerElement['rotateButton']) . "deg); ";
    } else {
        $buttonStyle .= "transform: rotate(0deg); ";
    }
    $buttonStyle .= "margin: ";
    $buttonStyle .= isset($innerElement['marginButton']['top']) ? esc_attr($innerElement['marginButton']['top']) : '0';
    $buttonStyle .= " " . (isset($innerElement['marginButton']['right']) ? esc_attr($innerElement['marginButton']['right']) : '0') . " ";
    $buttonStyle .= (isset($innerElement['marginButton']['bottom']) ? esc_attr($innerElement['marginButton']['bottom']) : '0') . " ";
    $buttonStyle .= (isset($innerElement['marginButton']['left']) ? esc_attr($innerElement['marginButton']['left']) : '0') . "; ";
    if (isset($innerElement['backgroundBorderColorHover'])) {
        $buttonStyle .= "--border-color-button-hover-inner: " . esc_attr($innerElement['backgroundBorderColorHover']) . "; ";
    } else {
        $buttonStyle .= "--border-color-button-hover-inner: #ffffff; ";
    }
    if (isset($innerElement['borderStyleHover'])) {
        $buttonStyle .= "--border-style-button-hover-inner: " . esc_attr($innerElement['borderStyleHover']) . "; ";
    } else {
        $buttonStyle .= "--border-style-button-hover-inner: solid; ";
    }
    $buttonStyle .= "--border-width-button-hover-top-inner: " . (isset($innerElement['backgroundBorderSizeHover']['top']) ? esc_attr($innerElement['backgroundBorderSizeHover']['top']) : '3') . "; ";
    $buttonStyle .= "--border-width-button-hover-right-inner: " . (isset($innerElement['backgroundBorderSizeHover']['right']) ? esc_attr($innerElement['backgroundBorderSizeHover']['right']) : '3') . "; ";
    $buttonStyle .= "--border-width-button-hover-bottom-inner: " . (isset($innerElement['backgroundBorderSizeHover']['bottom']) ? esc_attr($innerElement['backgroundBorderSizeHover']['bottom']) : '3') . "; ";
    $buttonStyle .= "--border-width-button-hover-left-inner: " . (isset($innerElement['backgroundBorderSizeHover']['left']) ? esc_attr($innerElement['backgroundBorderSizeHover']['left']) : '3') . "; ";
    $buttonStyle .= "z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '1') . "; ";
    if (isset($innerElement['delayTransition'])) {
        $buttonStyle .= "--delay-hide-seconds-button-inner: " . esc_attr($innerElement['delayTransition']) . "s; ";
    } else {
        $buttonStyle .= "--delay-hide-seconds-button-inner: 0s; ";
    }
    if ($innerElement['buttonLink'] !== 'none') {
        $buttonStyle .= "cursor: pointer; ";
    }
    $mouseStyles = "";
    if (isset($innerElement['opacityButton'])) {
        $mouseStyles .= "opacity: " . esc_attr($innerElement['opacityButton']) . "; ";
    }
    if (!empty($innerElement['enableBoxShadow'])) {
        $boxShadowX = esc_attr($innerElement['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($innerElement['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($innerElement['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($innerElement['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($innerElement['colorBoxShadow'] ?? '#000000');
        $mouseStyles .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    $isBold = isset($innerElement['fontStyle']['fontWeight']) && $innerElement['fontStyle']['fontWeight'] === 'bold';
    $fontSizeButton = esc_attr($innerElement['fontSizeButton']);
    $fontSizeButtonTablet = esc_attr($innerElement['fontSizeButtonTablet']);
    $fontSizeButtonMobile = esc_attr($innerElement['fontSizeButtonMobile']);
    $buttonStyle3 = "";
    if (isset($innerElement['buttonColor'])) {
        $buttonStyle3 .= "color: " . esc_attr($innerElement['buttonColor']) . "; ";
    }
    if (isset($innerElement['backgroundBorderColorButton'])) {
        $buttonStyle3 .= "border-color: " . esc_attr($innerElement['backgroundBorderColorButton']) . "; ";
    }
    if (isset($innerElement['borderStyleButton'])) {
        $buttonStyle3 .= "border-style: " . esc_attr($innerElement['borderStyleButton']) . "; ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['top'])) {
        $buttonStyle3 .= "border-width: " . esc_attr($innerElement['backgroundBorderSizeButton']['top']) . " ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['right'])) {
        $buttonStyle3 .= esc_attr($innerElement['backgroundBorderSizeButton']['right']) . " ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['bottom'])) {
        $buttonStyle3 .= esc_attr($innerElement['backgroundBorderSizeButton']['bottom']) . " ";
    }
    if (isset($innerElement['backgroundBorderSizeButton']['left'])) {
        $buttonStyle3 .= esc_attr($innerElement['backgroundBorderSizeButton']['left']) . "; ";
    }
    if (isset($innerElement['buttonBackgroundColor'])) {
        $buttonStyle3 .= "background-color: " . esc_attr($innerElement['buttonBackgroundColor']) . "; ";
    }
    $buttonStyle3 .= "font-size: clamp(" . $fontSizeButtonMobile . 'px,' . $fontSizeButtonTablet . 'vw,' . $fontSizeButton . "px); ";
    if (isset($innerElement['fontWeightButton'])) {
        $buttonStyle3 .= "font-weight: " . esc_attr($innerElement['fontWeightButton']) . "; ";
    }
    if (isset($innerElement['fontStyle']['fontStyle'])) {
        $buttonStyle3 .= "font-style: " . esc_attr($innerElement['fontStyle']['fontStyle']) . "; ";
    }
    if (isset($innerElement['fontStyle']['textDecoration'])) {
        $buttonStyle3 .= "text-decoration: " . esc_attr($innerElement['fontStyle']['textDecoration']) . "; ";
    }
    if (isset($innerElement['lineHeightButton'])) {
        $buttonStyle3 .= "line-height: " . esc_attr($innerElement['lineHeightButton']) . "; ";
    }
    if (isset($innerElement['fontFamilyButton'])) {
        $buttonStyle3 .= "font-family: " . esc_attr($innerElement['fontFamilyButton']) . "; ";
    }
    if (isset($innerElement['letterSpacingButton'])) {
        $buttonStyle3 .= "letter-spacing: " . esc_attr($innerElement['letterSpacingButton']) . "px; ";
    }
    if (isset($innerElement['widthCustomButton'])) {
        $buttonStyle3 .= "--buttonWidth-inner: " . esc_attr($innerElement['widthCustomButton']) . "px; ";
    }
    if (isset($innerElement['heightCustomButton'])) {
        $buttonStyle3 .= "--buttonHeight-inner: " . esc_attr($innerElement['heightCustomButton']) . "px; ";
    }
    if (isset($innerElement['borderRadiusButton']['top'])) {
        $buttonStyle3 .= "border-top-left-radius: " . esc_attr($innerElement['borderRadiusButton']['top']) . "; ";
    }
    if (isset($innerElement['borderRadiusButton']['right'])) {
        $buttonStyle3 .= "border-top-right-radius: " . esc_attr($innerElement['borderRadiusButton']['right']) . "; ";
    }
    if (isset($innerElement['borderRadiusButton']['bottom'])) {
        $buttonStyle3 .= "border-bottom-right-radius: " . esc_attr($innerElement['borderRadiusButton']['bottom']) . "; ";
    }
    if (isset($innerElement['borderRadiusButton']['left'])) {
        $buttonStyle3 .= "border-bottom-left-radius: " . esc_attr($innerElement['borderRadiusButton']['left']) . "; ";
    }
    if (isset($innerElement['paddingButton']['top'])) {
        $buttonStyle3 .= "padding-top: " . esc_attr($innerElement['paddingButton']['top']) . "; ";
    }
    if (isset($innerElement['paddingButton']['right'])) {
        $buttonStyle3 .= "padding-right: " . esc_attr($innerElement['paddingButton']['right']) . "; ";
    }
    if (isset($innerElement['paddingButton']['bottom'])) {
        $buttonStyle3 .= "padding-bottom: " . esc_attr($innerElement['paddingButton']['bottom']) . "; ";
    }
    if (isset($innerElement['paddingButton']['left'])) {
        $buttonStyle3 .= "padding-left: " . esc_attr($innerElement['paddingButton']['left']) . "; ";
    }
    if (isset($innerElement['colorHover'])) {
        $buttonStyle3 .= "--color-hover-icon-inner: " . esc_attr($innerElement['colorHover']) . "; ";
    }
    if (isset($innerElement['buttonColorHover'])) {
        $buttonStyle3 .= "--color-button-hover-inner: " . esc_attr($innerElement['buttonColorHover']) . "; ";
    } else {
        $buttonStyle3 .= "--color-button-hover-inner: " . esc_attr($defaultButtonColorHover) . "; ";
    }
    if (isset($innerElement['borderStyleHover'])) {
        $buttonStyle3 .= "--border-style-button-hover-inner: " . esc_attr($innerElement['borderStyleHover']) . "; ";
    } else {
        $buttonStyle3 .= "--border-style-button-hover-inner: solid; ";
    }
    if (isset($innerElement['backgroundBorderColorHover'])) {
        $buttonStyle3 .= "--border-color-button-hover-inner: " . esc_attr($innerElement['backgroundBorderColorHover']) . "; ";
    } else {
        $buttonStyle3 .= "--border-color-button-hover-inner: #000000; ";
    }
    if (isset($innerElement['buttonBackgroundColorHover'])) {
        $buttonStyle3 .= "--background-color-button-hover-inner: " . esc_attr($innerElement['buttonBackgroundColorHover']) . "; ";
    } else {
        $buttonStyle3 .= "--background-color-button-hover-inner: '#FFFFFF'; ";
    }
    $buttonStyle3 .= "--border-width-button-hover-top-inner: " . (isset($innerElement['backgroundBorderSizeHover']['top']) ? esc_attr($innerElement['backgroundBorderSizeHover']['top']) : '0') . "; ";
    $buttonStyle3 .= "--border-width-button-hover-right-inner: " . (isset($innerElement['backgroundBorderSizeHover']['right']) ? esc_attr($innerElement['backgroundBorderSizeHover']['right']) : '0') . "; ";
    $buttonStyle3 .= "--border-width-button-hover-bottom-inner: " . (isset($innerElement['backgroundBorderSizeHover']['bottom']) ? esc_attr($innerElement['backgroundBorderSizeHover']['bottom']) : '0') . "; ";
    $buttonStyle3 .= "--border-width-button-hover-left-inner: " . (isset($innerElement['backgroundBorderSizeHover']['left']) ? esc_attr($innerElement['backgroundBorderSizeHover']['left']) : '0') . "; ";
    $buttonStyle3 .= "display: flex;";
    $buttonStyle3 .= "opacity: " . (isset($innerElement['opacityButton']) ? esc_attr($innerElement['opacityButton']) : '1') . "; ";
    if (isset($innerElement['buttonAlign'])) {
        $buttonStyle3 .= "justify-content: " . esc_attr($innerElement['buttonAlign']) . "; ";
    } else {
        $buttonStyle3 .= "justify-content: 'center'; ";
    }
    if (isset($innerElement['icoAligItemButton'])) {
        $buttonStyle3 .= "align-items: " . esc_attr($innerElement['icoAligItemButton']) . "; ";
    } else {
        $buttonStyle3 .= "align-items: 'center'; ";
    }
    if (isset($innerElement['gapIcon'])) {
        $buttonStyle3 .= "gap: " . esc_attr($innerElement['gapIcon']) . "px; ";
    } else {
        $buttonStyle3 .= "gap: 5 'px'; ";
    }
    if (!empty($innerElement['enableBoxShadow'])) {
        $boxShadowX = esc_attr($innerElement['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($innerElement['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($innerElement['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($innerElement['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($innerElement['colorBoxShadow'] ?? '#000000');
        $buttonStyle3 .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    $buttonContentStyle3 = "
        width: " . (isset($innerElement['widthButton']) && $innerElement['widthButton'] === 'custom'
        ? esc_attr($innerElement['widthCustomButton']) . 'px'
        : esc_attr($innerElement['widthButton'])) . ";
        transform: rotate(" . (isset($innerElement['rotateButton']) ? esc_attr($innerElement['rotateButton']) : '0') . "deg);
        z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '1') . ";
        margin: " . (isset($innerElement['marginButton']['top']) ? esc_attr($innerElement['marginButton']['top']) : '0') . " " .
        (isset($innerElement['marginButton']['right']) ? esc_attr($innerElement['marginButton']['right']) : '0') . " " .
        (isset($innerElement['marginButton']['bottom']) ? esc_attr($innerElement['marginButton']['bottom']) : '0') . " " .
        (isset($innerElement['marginButton']['left']) ? esc_attr($innerElement['marginButton']['left']) : '0') . ";
    ";
    switch ($innerElement['buttonType']) {
        case 'type1':
?>
            <span
                <?php if ($innerElement['buttonLink'] !== 'none') : ?>
                onclick="<?php echo esc_js($onclick); ?>"
                <?php endif; ?>
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
                data-image-color="<?php echo esc_attr($innerElement['backgroundColorImage'] ?? ''); ?>"
                <?php endif;
                if ($innerElement['effectHover'] !== 'none') : ?>
                data-image-color-hover="<?php echo esc_attr($innerElement['backgroundColorImageHover'] ?? ''); ?>"
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
                <?php endif; ?>
                class="content-button-slide-inner scroll-btn-inner <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                style="<?php echo esc_attr($buttonStyle); ?>">
                <span class="mouse-inner" style="<?php echo esc_attr($mouseStyles); ?>">
                    <span></span>
                </span>
            </span>
        <?php
            break;
        case 'type2':
        ?>
            <span
                <?php if ($innerElement['buttonLink'] !== 'none') : ?>
                onclick="<?php echo esc_js($onclick); ?>"
                <?php endif; ?>
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
                data-image-color="<?php echo esc_attr($innerElement['backgroundColorImage'] ?? ''); ?>"
                <?php endif;
                if ($innerElement['effectHover'] !== 'none') : ?>
                data-image-color-hover="<?php echo esc_attr($innerElement['backgroundColorImageHover'] ?? ''); ?>"
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
                <?php endif; ?>
                class="content-button-slide-inner scroll-btn-inner <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                style="<?php echo esc_attr($buttonStyle); ?>">
                <span class="mouse-inner" style="<?php echo esc_attr($mouseStyles); ?>">
                    <span></span>
                </span>
            </span>
        <?php
            break;
        case 'type3':
        case 'type4':
        case 'type5':
        case 'type6':
        case 'type7':
        case 'type8':
            $link_url = '#';
            $linkTargetButton = '_self';
            $rel_div = '';
            if ($innerElement['buttonLink'] !== 'none') {
                if ($innerElement['buttonLink'] === 'link' && !empty($innerElement['linkUrlButton'])) {
                    $link_url = esc_url($innerElement['linkUrlButton']);
                    if (!empty($innerElement['linkTargetButton'])) {
                        $linkTargetButton = esc_attr($innerElement['linkTargetButton']);
                    }
                    if ($innerElement['linkRelButton'] === 'nofollow') {
                        $rel_div = 'nofollow';
                    }
                } elseif ($innerElement['buttonLink'] === 'scroll-below') {
                    $link_url = '#scroll-below';
                } elseif ($innerElement['buttonLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdButton'])) {
                    $scroll_id = esc_attr($innerElement['scrollToIdButton']);
                    $link_url = "#{$scroll_id}";
                }
            }
        ?>
            <div class="button-slider-inner <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                style="<?php echo esc_attr($buttonContentStyle3); ?>"
                data-font-family="<?php echo esc_attr($innerElement['fontFamilyButton']); ?>"
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
                data-image-color="<?php echo esc_attr($innerElement['backgroundColorImage'] ?? ''); ?>"
                <?php endif;
                if ($innerElement['effectHover'] !== 'none') : ?>
                data-image-color-hover="<?php echo esc_attr($innerElement['backgroundColorImageHover'] ?? ''); ?>"
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
                <?php endif; ?>>
                <a class="content-button-slide-inner <?php echo esc_attr($innerElement['iconShowHover'] ?? 'icon-show-always'); ?> <?php echo esc_attr($innerElement['iconHideShowHover'] ?? 'icon-hide-opacity'); ?>" href="<?php echo esc_url($link_url); ?>"
                    style="<?php echo esc_attr($buttonStyle3); ?>"
                    target="<?php echo esc_attr($linkTargetButton); ?>"
                    rel="<?php echo esc_attr($rel_div); ?>"
                    <?php if ($innerElement['buttonLink'] === 'scroll-below' || ($innerElement['buttonLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdButton']))) : ?>
                    onclick="event.preventDefault(); 
                    <?php
                        echo $innerElement['buttonLink'] === 'scroll-below'
                            ? "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });"
                            : "document.getElementById('" . esc_js($scroll_id) . "').scrollIntoView({ behavior: 'smooth' });";
                    ?>"
                    <?php endif;
                    $stylesIcon = '';
                    if (!empty($innerElement['rotateIcon'])) {
                        $stylesIcon .= "transform: rotate(" . esc_attr($innerElement['rotateIcon']) . "deg); ";
                    }
                    if (!empty($innerElement['rotateIconHover'])) {
                        $stylesIcon .= "--rotate-icon-button-hover-inner: " . esc_attr($innerElement['rotateIconHover']) . "deg; ";
                    }
                    $stylesIcon .= "display: flex; ";
                    if (!empty($innerElement['iconAnimationDuration'])) {
                        $stylesIcon .= "--fa-animation-duration: " . esc_attr($innerElement['iconAnimationDuration']) . "s; ";
                    }
                    if (!empty($innerElement['durationEffectHoverIcon'])) {
                        $stylesIcon .= "--transition-hover-icon-button-inner: " . esc_attr($innerElement['durationEffectHoverIcon']) . "s; ";
                    }
                    if (!empty($innerElement['translateEffectHoverIcon'])) {
                        $stylesIcon .= "--translate-hover-icon-button-inner: " . esc_attr($innerElement['translateEffectHoverIcon']) . "px; ";
                    }
                    if (!empty($innerElement['iconColorHover'])) {
                        $stylesIcon .= "--color-icon-button-inner-hover: " . esc_attr($innerElement['iconColorHover']) . "; ";
                    }
                    ?>>
                    <?php if (!empty($innerElement['icon']) && $innerElement['icoPositionButton'] === 'before') : ?>
                        <div class="content-icon-button-inner  <?php echo esc_attr($innerElement['iconAnimation'] ?? 'none') ?> <?php echo esc_attr($innerElement['animationHoverIcon'] ?? 'none') ?>"
                            style="<?php echo esc_attr($stylesIcon); ?>"
                            data-icon-size="<?php echo esc_attr($innerElement['sizeIcon']); ?>"
                            data-icon-color="<?php echo esc_attr($innerElement['iconColor']); ?>"
                            data-icon="<?php echo esc_attr($innerElement['icon']); ?>">
                        </div>
                    <?php endif; ?>
                    <?php echo esc_html($innerElement['button']); ?>
                    <?php if (!empty($innerElement['icon']) && $innerElement['icoPositionButton'] === 'after') : ?>
                        <div class="content-icon-button-inner <?php echo esc_attr($innerElement['iconAnimation'] ?? 'none') ?> <?php echo esc_attr($innerElement['animationHoverIcon'] ?? 'none') ?>"
                            style="<?php echo esc_attr($stylesIcon); ?>"
                            data-icon-size="<?php echo esc_attr($innerElement['sizeIcon']); ?>"
                            data-icon-color="<?php echo esc_attr($innerElement['iconColor']); ?>"
                            data-icon="<?php echo esc_attr($innerElement['icon']); ?>">
                        </div>
                    <?php endif; ?>
                </a>
            </div>
<?php
            break;
        default:
            break;
    }
} ?>