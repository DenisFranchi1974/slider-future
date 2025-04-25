<?php
function render_button($element, $slide)
{
    $desktopClassButton = $element['enableDesktopButton'] ? 'desktop-button-visible' : 'desktop-button-hidden';
    $tabletClassButton = $element['enableTabletButton'] ? 'tablet-button-visible' : 'tablet-button-hidden';
    $mobileClassButton = $element['enableMobileButton'] ? 'mobile-button-visible' : 'mobile-button-hidden';
    if ($element['buttonLink'] !== 'none') {
        if ($element['buttonLink'] === 'link' && !empty($element['linkUrlButton'])) {
            $link_url = esc_url($element['linkUrlButton']);
            if (!empty($element['linkTargetButton'])) {
                $linkTargetButton = esc_attr($element['linkTargetButton']);
            }
            if ($element['linkRelButton'] === 'nofollow') {
                $rel_div = 'nofollow';
            }
            $onclick = "window.open('{$link_url}', '{$linkTargetButton}', 'rel={$rel_div}');";
        } elseif ($element['buttonLink'] === 'scroll-below') {
            $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
        } elseif ($element['buttonLink'] === 'scroll-to-id' && !empty($element['scrollToIdButton'])) {
            $scroll_id = esc_attr($element['scrollToIdButton']);
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
    if (isset($element['buttonColor'])) {
        $buttonStyle .= "--color-button: " . esc_attr($element['buttonColor']) . "; ";
    } else {
        $buttonStyle .= "--color-button: " . esc_attr($defaultButtonColor) . "; ";
    }
    if (isset($element['backgroundBorderColorButton'])) {
        $buttonStyle .= "--border-color-button: " . esc_attr($element['backgroundBorderColorButton']) . "; ";
    } else {
        $buttonStyle .= "--border-color-button: " . esc_attr($defaultBackgroundBorderColorButton) . "; ";
    }
    if (isset($element['borderStyleButton'])) {
        $buttonStyle .= "--border-style-button: " . esc_attr($element['borderStyleButton']) . "; ";
    } else {
        $buttonStyle .= "--border-style-button: " . esc_attr($defaultBorderStyleButton) . "; ";
    }
    if (isset($element['backgroundBorderSizeButton']['top'])) {
        $buttonStyle .= "--border-width-button-top: " . esc_attr($element['backgroundBorderSizeButton']['top']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-top: " . esc_attr($defaultBorderSizeButtonTop) . "; ";
    }
    if (isset($element['backgroundBorderSizeButton']['right'])) {
        $buttonStyle .= "--border-width-button-right: " . esc_attr($element['backgroundBorderSizeButton']['right']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-right: " . esc_attr($defaultBorderSizeButtonRight) . "; ";
    }
    if (isset($element['backgroundBorderSizeButton']['bottom'])) {
        $buttonStyle .= "--border-width-button-bottom: " . esc_attr($element['backgroundBorderSizeButton']['bottom']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-bottom: " . esc_attr($defaultBorderSizeButtonBottom) . "; ";
    }
    if (isset($element['backgroundBorderSizeButton']['left'])) {
        $buttonStyle .= "--border-width-button-left: " . esc_attr($element['backgroundBorderSizeButton']['left']) . "; ";
    } else {
        $buttonStyle .= "--border-width-button-left: " . esc_attr($defaultBorderSizeButtonLeft) . "; ";
    }
    if (isset($element['backgroundBorderRadiusButton'])) {
        $buttonStyle .= "--border-radius-button: " . esc_attr($element['backgroundBorderRadiusButton']) . "px; ";
    } else {
        $buttonStyle .= "--border-radius-button: " . esc_attr($defaultBackgroundBorderRadiusButton) . "px; ";
    }
    if (isset($element['buttonBackgroundColor'])) {
        $buttonStyle .= "--background-color-button: " . esc_attr($element['buttonBackgroundColor']) . "; ";
    } else {
        $buttonStyle .= "--background-color-button: " . esc_attr($defaultButtonBackgroundColor) . "; ";
    }
    if (isset($element['widthCustomButton'])) {
        $buttonStyle .= "--buttonWidth: " . esc_attr($element['widthCustomButton']) . "px; ";
    } else {
        $buttonStyle .= "--buttonWidth: " . esc_attr($defaultWidthButton) . "px; ";
    }
    if (isset($element['heightCustomButton'])) {
        $buttonStyle .= "--buttonHeight: " . esc_attr($element['heightCustomButton']) . "px; ";
    } else {
        $buttonStyle .= "--buttonHeight: " . esc_attr($defaultHeightButton) . "px; ";
    }
    if (isset($element['buttonColorHover'])) {
        $buttonStyle .= "--color-button-hover: " . esc_attr($element['buttonColorHover']) . "; ";
    } else {
        $buttonStyle .= "--color-button-hover: " . esc_attr($defaultButtonColorHover) . "; ";
    }
    if (isset($element['buttonBackgroundColorHover'])) {
        $buttonStyle .= "--background-color-button-hover: " . esc_attr($element['buttonBackgroundColorHover']) . "; ";
    } else {
        $buttonStyle .= "--background-color-button-hover: " . esc_attr($defaultButtonBackgroundColorHover) . "; ";
    }
    if (isset($element['rotateButton'])) {
        $buttonStyle .= "transform: rotate(" . esc_attr($element['rotateButton']) . "deg); ";
    } else {
        $buttonStyle .= "transform: rotate(0deg); ";
    }
    $buttonStyle .= "margin: ";
    $buttonStyle .= isset($element['marginButton']['top']) ? esc_attr($element['marginButton']['top']) : '0';
    $buttonStyle .= " " . (isset($element['marginButton']['right']) ? esc_attr($element['marginButton']['right']) : '0') . " ";
    $buttonStyle .= (isset($element['marginButton']['bottom']) ? esc_attr($element['marginButton']['bottom']) : '0') . " ";
    $buttonStyle .= (isset($element['marginButton']['left']) ? esc_attr($element['marginButton']['left']) : '0') . "; ";
    if (isset($element['backgroundBorderColorHover'])) {
        $buttonStyle .= "--border-color-button-hover: " . esc_attr($element['backgroundBorderColorHover']) . "; ";
    } else {
        $buttonStyle .= "--border-color-button-hover: #ffffff; ";
    }
    if (isset($element['borderStyleHover'])) {
        $buttonStyle .= "--border-style-button-hover: " . esc_attr($element['borderStyleHover']) . "; ";
    } else {
        $buttonStyle .= "--border-style-button-hover: solid; ";
    }
    $buttonStyle .= "--border-width-button-hover-top: " . (isset($element['backgroundBorderSizeHover']['top']) ? esc_attr($element['backgroundBorderSizeHover']['top']) : '3') . "; ";
    $buttonStyle .= "--border-width-button-hover-right: " . (isset($element['backgroundBorderSizeHover']['right']) ? esc_attr($element['backgroundBorderSizeHover']['right']) : '3') . "; ";
    $buttonStyle .= "--border-width-button-hover-bottom: " . (isset($element['backgroundBorderSizeHover']['bottom']) ? esc_attr($element['backgroundBorderSizeHover']['bottom']) : '3') . "; ";
    $buttonStyle .= "--border-width-button-hover-left: " . (isset($element['backgroundBorderSizeHover']['left']) ? esc_attr($element['backgroundBorderSizeHover']['left']) : '3') . "; ";
    $buttonStyle .= "z-index: " . (isset($element['zIndexButton']) ? esc_attr($element['zIndexButton']) : '1') . "; ";
    if (isset($element['delayTransition'])) {
        $buttonStyle .= "--delay-hide-seconds-button: " . esc_attr($element['delayTransition']) . "s; ";
    } else {
        $buttonStyle .= "--delay-hide-seconds-button: 0s; ";
    }
    if ($element['buttonLink'] !== 'none') {
        $buttonStyle .= "cursor: pointer; ";
    }
    $mouseStyles = "";
    if (isset($element['opacityButton'])) {
        $mouseStyles .= "opacity: " . esc_attr($element['opacityButton']) . "; ";
    }
    if (!empty($element['enableBoxShadow'])) {
        $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
        $mouseStyles .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === 'bold';
    $fontSizeButton = esc_attr($element['fontSizeButton']);
    $fontSizeButtonTablet = esc_attr($element['fontSizeButtonTablet']);
    $fontSizeButtonMobile = esc_attr($element['fontSizeButtonMobile']);
    $buttonStyle3 = "";
    if (isset($element['buttonColor'])) {
        $buttonStyle3 .= "color: " . esc_attr($element['buttonColor']) . "; ";
    }
    if (isset($element['backgroundBorderColorButton'])) {
        $buttonStyle3 .= "border-color: " . esc_attr($element['backgroundBorderColorButton']) . "; ";
    }
    if (isset($element['borderStyleButton'])) {
        $buttonStyle3 .= "border-style: " . esc_attr($element['borderStyleButton']) . "; ";
    }
    if (isset($element['backgroundBorderSizeButton']['top'])) {
        $buttonStyle3 .= "border-width: " . esc_attr($element['backgroundBorderSizeButton']['top']) . " ";
    }
    if (isset($element['backgroundBorderSizeButton']['right'])) {
        $buttonStyle3 .= esc_attr($element['backgroundBorderSizeButton']['right']) . " ";
    }
    if (isset($element['backgroundBorderSizeButton']['bottom'])) {
        $buttonStyle3 .= esc_attr($element['backgroundBorderSizeButton']['bottom']) . " ";
    }
    if (isset($element['backgroundBorderSizeButton']['left'])) {
        $buttonStyle3 .= esc_attr($element['backgroundBorderSizeButton']['left']) . "; ";
    }
    if (isset($element['buttonBackgroundColor'])) {
        $buttonStyle3 .= "background-color: " . esc_attr($element['buttonBackgroundColor']) . "; ";
    }
    $buttonStyle3 .= "font-size: clamp(" . $fontSizeButtonMobile . 'px,' . $fontSizeButtonTablet . 'vw,' . $fontSizeButton . "px); ";
    if (isset($element['fontWeightButton'])) {
        $buttonStyle3 .= "font-weight: " . esc_attr($element['fontWeightButton']) . "; ";
    }
    if (isset($element['fontStyle']['fontStyle'])) {
        $buttonStyle3 .= "font-style: " . esc_attr($element['fontStyle']['fontStyle']) . "; ";
    }
    if (isset($element['fontStyle']['textDecoration'])) {
        $buttonStyle3 .= "text-decoration: " . esc_attr($element['fontStyle']['textDecoration']) . "; ";
    }
    if (isset($element['lineHeightButton'])) {
        $buttonStyle3 .= "line-height: " . esc_attr($element['lineHeightButton']) . "; ";
    }
    if (isset($element['fontFamilyButton'])) {
        $buttonStyle3 .= "font-family: " . esc_attr($element['fontFamilyButton']) . "; ";
    }
    if (isset($element['letterSpacingButton'])) {
        $buttonStyle3 .= "letter-spacing: " . esc_attr($element['letterSpacingButton']) . "px; ";
    }
    if (isset($element['widthCustomButton'])) {
        $buttonStyle3 .= "--buttonWidth: " . esc_attr($element['widthCustomButton']) . "px; ";
    }
    if (isset($element['heightCustomButton'])) {
        $buttonStyle3 .= "--buttonHeight: " . esc_attr($element['heightCustomButton']) . "px; ";
    }
    if (isset($element['borderRadiusButton']['top'])) {
        $buttonStyle3 .= "border-top-left-radius: " . esc_attr($element['borderRadiusButton']['top']) . "; ";
    }
    if (isset($element['borderRadiusButton']['right'])) {
        $buttonStyle3 .= "border-top-right-radius: " . esc_attr($element['borderRadiusButton']['right']) . "; ";
    }
    if (isset($element['borderRadiusButton']['bottom'])) {
        $buttonStyle3 .= "border-bottom-right-radius: " . esc_attr($element['borderRadiusButton']['bottom']) . "; ";
    }
    if (isset($element['borderRadiusButton']['left'])) {
        $buttonStyle3 .= "border-bottom-left-radius: " . esc_attr($element['borderRadiusButton']['left']) . "; ";
    }
    if (isset($element['paddingButton']['top'])) {
        $buttonStyle3 .= "padding-top: " . esc_attr($element['paddingButton']['top']) . "; ";
    }
    if (isset($element['paddingButton']['right'])) {
        $buttonStyle3 .= "padding-right: " . esc_attr($element['paddingButton']['right']) . "; ";
    }
    if (isset($element['paddingButton']['bottom'])) {
        $buttonStyle3 .= "padding-bottom: " . esc_attr($element['paddingButton']['bottom']) . "; ";
    }
    if (isset($element['paddingButton']['left'])) {
        $buttonStyle3 .= "padding-left: " . esc_attr($element['paddingButton']['left']) . "; ";
    }
    if (isset($element['colorHover'])) {
        $buttonStyle3 .= "--color-hover-icon: " . esc_attr($element['colorHover']) . "; ";
    }
    if (isset($element['buttonColorHover'])) {
        $buttonStyle3 .= "--color-button-hover: " . esc_attr($element['buttonColorHover']) . "; ";
    } else {
        $buttonStyle3 .= "--color-button-hover: " . esc_attr($defaultButtonColorHover) . "; ";
    }
    if (isset($element['borderStyleHover'])) {
        $buttonStyle3 .= "--border-style-button-hover: " . esc_attr($element['borderStyleHover']) . "; ";
    } else {
        $buttonStyle3 .= "--border-style-button-hover: solid; ";
    }
    if (isset($element['backgroundBorderColorHover'])) {
        $buttonStyle3 .= "--border-color-button-hover: " . esc_attr($element['backgroundBorderColorHover']) . "; ";
    } else {
        $buttonStyle3 .= "--border-color-button-hover: #000000; ";
    }
    if (isset($element['buttonBackgroundColorHover'])) {
        $buttonStyle3 .= "--background-color-button-hover: " . esc_attr($element['buttonBackgroundColorHover']) . "; ";
    } else {
        $buttonStyle3 .= "--background-color-button-hover: '#FFFFFF'; ";
    }
    $buttonStyle3 .= "--border-width-button-hover-top: " . (isset($element['backgroundBorderSizeHover']['top']) ? esc_attr($element['backgroundBorderSizeHover']['top']) : '0') . "; ";
    $buttonStyle3 .= "--border-width-button-hover-right: " . (isset($element['backgroundBorderSizeHover']['right']) ? esc_attr($element['backgroundBorderSizeHover']['right']) : '0') . "; ";
    $buttonStyle3 .= "--border-width-button-hover-bottom: " . (isset($element['backgroundBorderSizeHover']['bottom']) ? esc_attr($element['backgroundBorderSizeHover']['bottom']) : '0') . "; ";
    $buttonStyle3 .= "--border-width-button-hover-left: " . (isset($element['backgroundBorderSizeHover']['left']) ? esc_attr($element['backgroundBorderSizeHover']['left']) : '0') . "; ";
    $buttonStyle3 .= "display: flex;";
    $buttonStyle3 .= "opacity: " . (isset($element['opacityButton']) ? esc_attr($element['opacityButton']) : '1') . "; ";
    if (isset($element['buttonAlign'])) {
        $buttonStyle3 .= "justify-content: " . esc_attr($element['buttonAlign']) . "; ";
    } else {
        $buttonStyle3 .= "justify-content: 'center'; ";
    }
    if (isset($element['icoAligItemButton'])) {
        $buttonStyle3 .= "align-items: " . esc_attr($element['icoAligItemButton']) . "; ";
    } else {
        $buttonStyle3 .= "align-items: 'center'; ";
    }
    if (isset($element['gapIcon'])) {
        $buttonStyle3 .= "gap: " . esc_attr($element['gapIcon']) . "px; ";
    } else {
        $buttonStyle3 .= "gap: 5 'px'; ";
    }
    if (!empty($element['enableBoxShadow'])) {
        $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
        $buttonStyle3 .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    $buttonContentStyle3 = "
        width: " . (isset($element['widthButton']) && $element['widthButton'] === 'custom'
        ? esc_attr($element['widthCustomButton']) . 'px'
        : esc_attr($element['widthButton'])) . ";
        transform: rotate(" . (isset($element['rotateButton']) ? esc_attr($element['rotateButton']) : '0') . "deg);
        z-index: " . (isset($element['zIndexButton']) ? esc_attr($element['zIndexButton']) : '1') . ";
        margin: " . (isset($element['marginButton']['top']) ? esc_attr($element['marginButton']['top']) : '0') . " " .
        (isset($element['marginButton']['right']) ? esc_attr($element['marginButton']['right']) : '0') . " " .
        (isset($element['marginButton']['bottom']) ? esc_attr($element['marginButton']['bottom']) : '0') . " " .
        (isset($element['marginButton']['left']) ? esc_attr($element['marginButton']['left']) : '0') . ";
    ";
    switch ($element['buttonType']) {
        case 'type1':
?>
            <?php if ($slide['developerMode']) : ?>
                <div class="content-button-slide content-button-absolute"
                    style="
                            transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                            position: absolute;"
                    data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                    data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                    data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                    data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                    data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                    data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>">
                <?php endif; ?>
                <span
                    <?php if ($element['buttonLink'] !== 'none') : ?>
                    onclick="<?php echo esc_js( $onclick ); ?>"
                    <?php endif; ?>
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
                    data-image-color="<?php echo esc_attr($element['backgroundColorImage'] ?? ''); ?>"
                    <?php endif;
                    if ($element['effectHover'] !== 'none') : ?>
                    data-image-color-hover="<?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>"
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
                    <?php endif; ?>
                    class="content-button-slide scroll-btn <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                    style="<?php echo esc_attr($buttonStyle); ?>">
                    <span class="mouse" style="<?php echo esc_attr($mouseStyles); ?>">
                        <span></span>
                    </span>
                </span>
                <?php if ($slide['developerMode']) : ?>
                </div>
            <?php endif; ?>
        <?php
            break;
        case 'type2':
        ?>
            <?php if ($slide['developerMode']) : ?>
                <div class="content-button-slide content-button-absolute"
                    style="
                        transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                        position: absolute;"
                    data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                    data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                    data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                    data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                    data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                    data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>">
                <?php endif; ?>
                <span
                    <?php if ($element['buttonLink'] !== 'none') : ?>
                    onclick="<?php echo esc_js( $onclick ); ?>"
                    <?php endif; ?>
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
                    data-image-color="<?php echo esc_attr($element['backgroundColorImage'] ?? ''); ?>"
                    <?php endif;
                    if ($element['effectHover'] !== 'none') : ?>
                    data-image-color-hover="<?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>"
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
                    <?php endif; ?>
                    class="content-button-slide scroll-btn <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                    style="<?php echo esc_attr($buttonStyle); ?>">
                    <span class="mouse" style="<?php echo esc_attr($mouseStyles); ?>">
                        <span></span>
                    </span>
                </span>
                <?php if ($slide['developerMode']) : ?>
                </div>
            <?php endif; ?>
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
            if ($element['buttonLink'] !== 'none') {
                if ($element['buttonLink'] === 'link' && !empty($element['linkUrlButton'])) {
                    $link_url = esc_url($element['linkUrlButton']);
                    if (!empty($element['linkTargetButton'])) {
                        $linkTargetButton = esc_attr($element['linkTargetButton']);
                    }
                    if ($element['linkRelButton'] === 'nofollow') {
                        $rel_div = 'nofollow';
                    }
                } elseif ($element['buttonLink'] === 'scroll-below') {
                    $link_url = '#scroll-below';
                } elseif ($element['buttonLink'] === 'scroll-to-id' && !empty($element['scrollToIdButton'])) {
                    $scroll_id = esc_attr($element['scrollToIdButton']);
                    $link_url = "#{$scroll_id}";
                }
            }
        ?>
            <?php if ($slide['developerMode']) : ?>
                <div class="content-button-slide content-button-absolute"
                    style="
                        transform: translate(<?php echo esc_attr($element['desktop']['x']) ?> px, <?php echo esc_attr($element['desktop']['y']) ?>px);
                        position: absolute;"
                    data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
                    data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
                    data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
                    data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
                    data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
                    data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>">
                <?php endif; ?>
                <div class="button-slider <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                    style="<?php echo esc_attr($buttonContentStyle3); ?>"
                    data-font-family="<?php echo esc_attr($element['fontFamilyButton']); ?>"
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
                    data-image-color="<?php echo esc_attr($element['backgroundColorImage'] ?? ''); ?>"
                    <?php endif;
                    if ($element['effectHover'] !== 'none') : ?>
                    data-image-color-hover="<?php echo esc_attr($element['backgroundColorImageHover'] ?? ''); ?>"
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
                    <?php endif; ?>>
                    <a class="content-button-slide <?php echo esc_attr($element['iconShowHover'] ?? 'icon-show-always'); ?> <?php echo esc_attr($element['iconHideShowHover'] ?? 'icon-hide-opacity'); ?>" href="<?php echo esc_url($link_url); ?>"
                        style="<?php echo esc_attr($buttonStyle3); ?>"
                        target="<?php echo esc_attr($linkTargetButton); ?>"
                        rel="<?php echo esc_attr($rel_div); ?>"
                        <?php if ($element['buttonLink'] === 'scroll-below' || ($element['buttonLink'] === 'scroll-to-id' && !empty($element['scrollToIdButton']))) : ?>
                        onclick="event.preventDefault(); 
                        <?php 
                        echo $element['buttonLink'] === 'scroll-below' 
                            ? "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });" 
                            : "document.getElementById('" . esc_js($scroll_id) . "').scrollIntoView({ behavior: 'smooth' });"; 
                        ?>"
                    <?php endif; 
                        $stylesIcon = '';
                        if (!empty($element['rotateIcon'])) {
                            $stylesIcon .= "transform: rotate(" . esc_attr($element['rotateIcon']) . "deg); ";
                        }
                        if (!empty($element['rotateIconHover'])) {
                            $stylesIcon .= "--rotate-icon-button-hover: " . esc_attr($element['rotateIconHover']) . "deg; ";
                        }
                        $stylesIcon .= "display: flex; ";
                        if (!empty($element['iconAnimationDuration'])) {
                            $stylesIcon .= "--fa-animation-duration: " . esc_attr($element['iconAnimationDuration']) . "s; ";
                        }
                        if (!empty($element['durationEffectHoverIcon'])) {
                            $stylesIcon .= "--transition-hover-icon-button: " . esc_attr($element['durationEffectHoverIcon']) . "s; ";
                        }
                        if (!empty($element['translateEffectHoverIcon'])) {
                            $stylesIcon .= "--translate-hover-icon-button: " . esc_attr($element['translateEffectHoverIcon']) . "px; ";
                        }
                        if (!empty($element['iconColorHover'])) {
                            $stylesIcon .= "--color-icon-button-hover: " . esc_attr($element['iconColorHover']) . "; ";
                        }
                        ?>>
                        <?php if (!empty($element['icon']) && $element['icoPositionButton'] === 'before') : ?>
                            <div class="content-icon-button  <?php echo esc_attr($element['iconAnimation'] ?? 'none') ?> <?php echo esc_attr($element['animationHoverIcon'] ?? 'none') ?>"
                                style="<?php echo esc_attr($stylesIcon); ?>"
                                data-icon-size="<?php echo esc_attr($element['sizeIcon']); ?>"
                                data-icon-color="<?php echo esc_attr($element['iconColor']); ?>"
                                data-icon="<?php echo esc_attr($element['icon']); ?>">
                            </div>
                        <?php endif; ?>
                        <?php echo esc_html($element['button']); ?>
                        <?php if (!empty($element['icon']) && $element['icoPositionButton'] === 'after') : ?>
                            <div class="content-icon-button <?php echo esc_attr($element['iconAnimation'] ?? 'none') ?> <?php echo esc_attr($element['animationHoverIcon'] ?? 'none') ?>"
                                style="<?php echo esc_attr($stylesIcon); ?>"
                                data-icon-size="<?php echo esc_attr($element['sizeIcon']); ?>"
                                data-icon-color="<?php echo esc_attr($element['iconColor']); ?>"
                                data-icon="<?php echo esc_attr($element['icon']); ?>">
                            </div>
                        <?php endif; ?>
                    </a>
                </div>
                <?php if ($slide['developerMode']) : ?>
                </div>
            <?php endif; ?>
<?php
            break;
        default:
            break;
    }
} ?>