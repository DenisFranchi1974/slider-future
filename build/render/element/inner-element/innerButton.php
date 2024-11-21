<?php
function render_innerButton($innerElement, $slide)
{
    $desktopClassButton = $innerElement['enableDesktopButton'] ? 'desktop-button-visible-inner' : 'desktop-button-hidden-inner';
    $tabletClassButton = $innerElement['enableTabletButton'] ? 'tablet-button-visible-inner' : 'tablet-button-hidden-inner';
    $mobileClassButton = $innerElement['enableMobileButton'] ? 'mobile-button-visible-inner' : 'mobile-button-hidden-inner';
    if ($innerElement['buttonLink'] !== 'none') {
        // Prepara l'attributo onclick se textLink è diverso da 'none'
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


    $defaultButtonColor = '#000000';
    $defaultBackgroundBorderColorButton = '#cccccc';
    $defaultBorderStyleButton = 'solid';
    $defaultBackgroundBorderRadiusButton = '4';
    $defaultBackgroundBorderSizeButton = '1';
    $defaultButtonBackgroundColor = '#ffffff';
    $defaultWidthButton = '35';
    $defaultHeightButton = '55';
    $defaultButtonColorHover = '#000000';

    $buttonStyle = "
                                --color-button-inner: " . (isset($innerElement['buttonColor']) ? esc_attr($innerElement['buttonColor']) : $defaultButtonColor) . ";
                                --border-color-button-inner: " . (isset($innerElement['backgroundBorderColorButton']) ? esc_attr($innerElement['backgroundBorderColorButton']) : $defaultBackgroundBorderColorButton) . ";
                                --border-style-button-inner: " . (isset($innerElement['borderStyleButton']) ? esc_attr($innerElement['borderStyleButton']) : $defaultBorderStyleButton) . ";
                                --border-radius-button-inner: " . (isset($innerElement['backgroundBorderRadiusButton']) ? esc_attr($innerElement['backgroundBorderRadiusButton']) : $defaultBackgroundBorderRadiusButton) . "px;
                                --border-width-button-inner: " . (isset($innerElement['backgroundBorderSizeButton']) ? esc_attr($innerElement['backgroundBorderSizeButton']) : $defaultBackgroundBorderSizeButton) . "px;
                                --background-color-button-inner: " . (isset($innerElement['buttonBackgroundColor']) ? esc_attr($innerElement['buttonBackgroundColor']) : $defaultButtonBackgroundColor) . ";
                                --buttonWidth-inner: " . (isset($innerElement['widthCustomButton']) ? esc_attr($innerElement['widthCustomButton']) : $defaultWidthButton) . "px;
                                --buttonHeight-inner: " . (isset($innerElement['heightCustomButton']) ? esc_attr($innerElement['heightCustomButton']) : $defaultHeightButton) . "px;
                                --color-button-hover-inner: " . (isset($innerElement['buttonColorHover']) ? esc_attr($innerElement['buttonColorHover']) : $defaultButtonColorHover) . ";
                                transform: rotate(" . (isset($innerElement['rotateButton']) ? esc_attr($innerElement['rotateButton']) : '0') . "deg);
                                margin: " . (isset($innerElement['marginButton']['top']) ? esc_attr($innerElement['marginButton']['top']) : '0') . " " .
        (isset($innerElement['marginButton']['right']) ? esc_attr($innerElement['marginButton']['right']) : '0') . " " .
        (isset($innerElement['marginButton']['bottom']) ? esc_attr($innerElement['marginButton']['bottom']) : '0') . " " .
        (isset($innerElement['marginButton']['left']) ? esc_attr($innerElement['marginButton']['left']) : '0') . ";
                                --box-shadow-x-button-inner: " . (isset($innerElement['boxShadowX']) ? esc_attr($innerElement['boxShadowX']) : '0') . "px;
                                --box-shadow-y-button-inner: " . (isset($innerElement['boxShadowY']) ? esc_attr($innerElement['boxShadowY']) : '0') . "px;
                                --box-shadow-blur-button-inner: " . (isset($innerElement['boxShadowBlur']) ? esc_attr($innerElement['boxShadowBlur']) : '0') . "px;
                                --box-shadow-color-button-inner: " . (isset($innerElement['colorShadow']) ? esc_attr($innerElement['colorShadow']) : '#000000') . ";
                                --box-shadow-spread-button-inner: " . (isset($innerElement['boxShadowSpread']) ? esc_attr($innerElement['boxShadowSpread']) : '0') . "px;
                                --duration-effect-button-inner: " . (isset($innerElement['durationEffectButton']) ? esc_attr($innerElement['durationEffectButton']) : '0') . "s;
                                --delay-effect-button-inner: " . (isset($innerElement['delayEffectButton']) ? esc_attr($innerElement['delayEffectButton']) : '0') . "s;
                                --interation-button-inner: " . (isset($innerElement['interationButton']) ? esc_attr($innerElement['interationButton']) : 'forwards') . ";
                                --border-color-button-hover-inner: " . (isset($innerElement['backgroundBorderColorHover']) ? esc_attr($innerElement['backgroundBorderColorHover']) : '#000000') . ";
                                --border-style-button-hover-inner: " . (isset($innerElement['borderStyleHover']) ? esc_attr($innerElement['borderStyleHover']) : 'none') . ";
                                --border-width-button-hover-inner: " . (isset($innerElement['backgroundBorderSizeHover']) ? esc_attr($innerElement['backgroundBorderSizeHover']) : '0') . "px;
                                --rotate-button-hover-inner: " . (isset($innerElement['rotateHover']) ? esc_attr($innerElement['rotateHover']) : '0') . "deg;
                                --delay-hide-seconds-button-inner: " . (isset($innerElement['delayTransition']) ? esc_attr($innerElement['delayTransition']) : '0') . "s;
                                z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '0') . ";
                                 " . ($innerElement['buttonLink'] !== 'none' ? 'cursor: pointer;' : '') . "
                                ";
    $mouseStyles = "
                                opacity: " . (isset($innerElement['opacityButton']) ? esc_attr($innerElement['opacityButton']) : '1') . ";
                                --opacity-button-hover-inner: " . (isset($innerElement['opacityHover']) ? esc_attr($innerElement['opacityHover']) : '1') . ";
                                transition: " . (isset($innerElement['durationEffectHover']) ? esc_attr($innerElement['durationEffectHover']) : '0') . "s;
                                ";

    $isBold = isset($innerElement['fontStyle']['fontWeight']) && $innerElement['fontStyle']['fontWeight'] === 'bold';

    $buttonStyle3 = "
                                    color: " . (isset($innerElement['buttonColor']) ? esc_attr($innerElement['buttonColor']) : '#000000') . ";
                                    border-color: " . (isset($innerElement['backgroundBorderColorButton']) ? esc_attr($innerElement['backgroundBorderColorButton']) : '#000000') . ";
                                    border-style: " . (isset($innerElement['borderStyleButton']) ? esc_attr($innerElement['borderStyleButton']) : 'none') . ";
                                    border-width: " . (isset($innerElement['backgroundBorderSizeButton']) ? esc_attr($innerElement['backgroundBorderSizeButton']) : '0') . "px;
                                    background-color: " . (isset($innerElement['buttonBackgroundColor']) ? esc_attr($innerElement['buttonBackgroundColor']) : '#ffffff') . ";
                                    font-size: " . (isset($innerElement['fontSizeButton']) ? esc_attr($innerElement['fontSizeButton']) : '16') . "px;
                                    --font-size-button-tablet-inner: " . (isset($innerElement['fontSizeButtonTablet']) ? esc_attr($innerElement['fontSizeButtonTablet']) : '16') . "px;
                                    --font-size-button-mobile-inner: " . (isset($innerElement['fontSizeButtonMobile']) ? esc_attr($innerElement['fontSizeButtonMobile']) : '16') . "px;
                                    font-weight: " . (isset($innerElement['fontWeightButton']) ? esc_attr($innerElement['fontWeightButton']) : 'normal') . ";
                                    font-style: " . (isset($innerElement['fontStyle']['fontStyle']) ? esc_attr($innerElement['fontStyle']['fontStyle']) : 'normal') . ";
                                    text-decoration: " . (isset($innerElement['fontStyle']['textDecoration']) ? esc_attr($innerElement['fontStyle']['textDecoration']) : 'none') . ";
                                    line-height: " . (isset($innerElement['lineHeightButton']) ? esc_attr($innerElement['lineHeightButton']) : 'normal') . ";
                                    font-family: " . (isset($innerElement['fontFamilyButton']) ? esc_attr($innerElement['fontFamilyButton']) : 'inherit') . ";
                                    letter-spacing: " . (isset($innerElement['letterSpacingButton']) ? esc_attr($innerElement['letterSpacingButton']) : '0') . "px;
                                    --buttonWidth-inner: " . (isset($innerElement['widthCustomButton']) ? esc_attr($innerElement['widthCustomButton']) : 'auto') . "px;
                                    --buttonHeight-inner: " . (isset($innerElement['heightCustomButton']) ? esc_attr($innerElement['heightCustomButton']) : 'auto') . "px;
                                    border-top-left-radius: " . (isset($innerElement['borderRadiusButton']['top']) ? esc_attr($innerElement['borderRadiusButton']['top']) : '0') . ";
                                    border-top-right-radius: " . (isset($innerElement['borderRadiusButton']['right']) ? esc_attr($innerElement['borderRadiusButton']['right']) : '0') . ";
                                    border-bottom-right-radius: " . (isset($innerElement['borderRadiusButton']['bottom']) ? esc_attr($innerElement['borderRadiusButton']['bottom']) : '0') . ";
                                    border-bottom-left-radius: " . (isset($innerElement['borderRadiusButton']['left']) ? esc_attr($innerElement['borderRadiusButton']['left']) : '0') . ";
                                    padding: " . (isset($innerElement['paddingButton']['top']) ? esc_attr($innerElement['paddingButton']['top']) : '0') . " " .
        (isset($innerElement['paddingButton']['right']) ? esc_attr($innerElement['paddingButton']['right']) : '0') . " " .
        (isset($innerElement['paddingButton']['bottom']) ? esc_attr($innerElement['paddingButton']['bottom']) : '0') . " " .
        (isset($innerElement['paddingButton']['left']) ? esc_attr($innerElement['paddingButton']['left']) : '0') . ";
                                    --border-color-button-hover-inner: " . (isset($innerElement['backgroundBorderColorHover']) ? esc_attr($innerElement['backgroundBorderColorHover']) : '#000000') . ";
                                    --border-style-button-hover-inner: " . (isset($innerElement['borderStyleHover']) ? esc_attr($innerElement['borderStyleHover']) : 'none') . ";
                                    --border-width-button-hover-inner: " . (isset($innerElement['backgroundBorderSizeHover']) ? esc_attr($innerElement['backgroundBorderSizeHover']) : '0') . "px;
                                    --background-color-button-hover-inner: " . (isset($innerElement['buttonBackgroundColorHover']) ? esc_attr($innerElement['buttonBackgroundColorHover']) : '#ffffff') . ";
                                    --color-button-hover-inner: " . (isset($innerElement['buttonColorHover']) ? esc_attr($innerElement['buttonColorHover']) : '#000000') . ";
                                    opacity: " . (isset($innerElement['opacityButton']) ? esc_attr($innerElement['opacityButton']) : '1') . ";
                                    box-shadow: " . (isset($innerElement['boxShadowX']) ? esc_attr($innerElement['boxShadowX']) : '0') . "px " .
        (isset($innerElement['boxShadowY']) ? esc_attr($innerElement['boxShadowY']) : '0') . "px " .
        (isset($innerElement['boxShadowBlur']) ? esc_attr($innerElement['boxShadowBlur']) : '0') . "px " .
        (isset($innerElement['boxShadowSpread']) ? esc_attr($innerElement['boxShadowSpread']) : '0') . "px " .
        (isset($innerElement['colorShadow']) ? esc_attr($innerElement['colorShadow']) : '#000000') . ";
                                    --opacity-button-hover-inner: " . (isset($innerElement['opacityHover']) ? esc_attr($innerElement['opacityHover']) : '1') . ";
                                    z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '0') . ";
                                     --delay-hide-seconds-button-inner: " . (isset($innerElement['delayTransition']) ? esc_attr($innerElement['delayTransition']) : '0') . "s;
                                     " . (!empty($innerElement['icon']) ? "display: flex; align-items: " . esc_attr($innerElement['icoAligItemButton']) . "; gap: " . esc_attr($innerElement['gapIcon']) . "px;" : "") . "
                                ";

    $buttonContentStyle3 = "
                                   text-align: " . (isset($innerElement['buttonAlign']) ? esc_attr($innerElement['buttonAlign']) : 'left') . ";
                                    width: " . (isset($innerElement['widthButton']) && $innerElement['widthButton'] === 'custom'
        ? esc_attr($innerElement['widthCustomButton']) . '%'
        : esc_attr($innerElement['widthButton'])) . ";
                                    transform: rotate(" . (isset($innerElement['rotateButton']) ? esc_attr($innerElement['rotateButton']) : '0') . "deg);
                                    --duration-effect-button-inner: " . (isset($innerElement['durationEffectButton']) ? esc_attr($innerElement['durationEffectButton']) : '0') . "s;
                                    --delay-effect-button-inner: " . (isset($innerElement['delayEffectButton']) ? esc_attr($innerElement['delayEffectButton']) : '0') . "s;
                                    --interation-button-inner: " . (isset($innerElement['interationButton']) ? esc_attr($innerElement['interationButton']) : 'forwards') . ";
                                    --rotate-button-hover-inner: " . (isset($innerElement['rotateHover']) ? esc_attr($innerElement['rotateHover']) : '0') . "deg;
                                    transition: transform " . (isset($innerElement['durationEffectHover']) ? esc_attr($innerElement['durationEffectHover']) : '0') . "s ease;
                                    z-index: " . (isset($innerElement['zIndexButton']) ? esc_attr($innerElement['zIndexButton']) : '0') . ";
                                    margin: " . (isset($innerElement['marginButton']['top']) ? esc_attr($innerElement['marginButton']['top']) : '0') . " " .
        (isset($innerElement['marginButton']['right']) ? esc_attr($innerElement['marginButton']['right']) : '0') . " " .
        (isset($innerElement['marginButton']['bottom']) ? esc_attr($innerElement['marginButton']['bottom']) : '0') . " " .
        (isset($innerElement['marginButton']['left']) ? esc_attr($innerElement['marginButton']['left']) : '0') . ";
                                ";

    switch ($innerElement['buttonType']) {
        case 'type1':
?>
            <?php if ($slide['developerMode']) : ?>
                <div class="content-button-slide-inner content-button-absolute-inner"
                    style="
                                                        transform: translate(<?php echo esc_attr($innerElement['desktop']['x']) ?> px, <?php echo esc_attr($innerElement['desktop']['y']) ?>px);
                                                        position: absolute;
                                                        --delay-hide-seconds-button-inner: <?php echo esc_attr($innerElement['delayTransition']); ?>s;
                                                    "
                    data-desktop-x="<?php echo esc_attr($innerElement['desktop']['x']); ?>"
                    data-desktop-y="<?php echo esc_attr($innerElement['desktop']['y']); ?>"
                    data-tablet-x="<?php echo esc_attr($innerElement['tablet']['x']); ?>"
                    data-tablet-y="<?php echo esc_attr($innerElement['tablet']['y']); ?>"
                    data-mobile-x="<?php echo esc_attr($innerElement['mobile']['x']); ?>"
                    data-mobile-y="<?php echo esc_attr($innerElement['mobile']['y']); ?>">
                <?php endif; ?>
                <span
                    <?php if ($innerElement['buttonLink'] !== 'none') : ?>
                    onclick="<?php echo $onclick; ?>"
                    <?php endif; ?>
                    class="content-button-slide-inner scroll-btn-inner <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                    style="<?php echo esc_attr($buttonStyle); ?>"
                    data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                    data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                    data-animation-button-inner="<?php echo esc_attr($innerElement['animationButton']); ?>">
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
                <div class="content-button-slide-inner content-button-absolute-inner"
                    style="
                                                    transform: translate(<?php echo esc_attr($innerElement['desktop']['x']) ?> px, <?php echo esc_attr($innerElement['desktop']['y']) ?>px);
                                                    position: absolute;
                                                    --delay-hide-seconds-button-inner: <?php echo esc_attr($innerElement['delayTransition']); ?>s;
                                                "
                    data-desktop-x="<?php echo esc_attr($innerElement['desktop']['x']); ?>"
                    data-desktop-y="<?php echo esc_attr($innerElement['desktop']['y']); ?>"
                    data-tablet-x="<?php echo esc_attr($innerElement['tablet']['x']); ?>"
                    data-tablet-y="<?php echo esc_attr($innerElement['tablet']['y']); ?>"
                    data-mobile-x="<?php echo esc_attr($innerElement['mobile']['x']); ?>"
                    data-mobile-y="<?php echo esc_attr($innerElement['mobile']['y']); ?>"
                    data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                    data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>">
                <?php endif; ?>
                <span
                    <?php if ($innerElement['buttonLink'] !== 'none') : ?>
                    onclick="<?php echo $onclick; ?>"
                    <?php endif; ?>
                    class="content-button-slide scroll-btn <?php echo esc_attr($innerElement['animationButton']); ?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                    style="<?php echo esc_attr($buttonStyle); ?>"
                    data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                    data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"
                    data-animation-button="<?php echo esc_attr($innerElement['animationButton']); ?>">
                    <span class="mouse-inner" style="<?php echo esc_attr($mouseStyles); ?>">
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

            if ($innerElement['buttonLink'] !== 'none') {
                // Prepara l'attributo href se buttonLink è diverso da 'none'
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
            <?php if ($slide['developerMode']) : ?>
                <div class="content-button-slide-inner content-button-absolute-inner"
                    style="
                                                    transform: translate(<?php echo esc_attr($innerElement['desktop']['x']) ?> px, <?php echo esc_attr($innerElement['desktop']['y']) ?>px);
                                                    position: absolute;
                                                    --delay-hide-seconds-button-inner: <?php echo esc_attr($innerElement['delayTransition']); ?>s;
                                                "
                    data-desktop-x="<?php echo esc_attr($innerElement['desktop']['x']); ?>"
                    data-desktop-y="<?php echo esc_attr($innerElement['desktop']['y']); ?>"
                    data-tablet-x="<?php echo esc_attr($innerElement['tablet']['x']); ?>"
                    data-tablet-y="<?php echo esc_attr($innerElement['tablet']['y']); ?>"
                    data-mobile-x="<?php echo esc_attr($innerElement['mobile']['x']); ?>"
                    data-mobile-y="<?php echo esc_attr($innerElement['mobile']['y']); ?>">
                <?php endif; ?>
                <div class="button-slider-inner <?php echo esc_attr($innerElement['animationButton']); ?> <?php echo esc_attr($desktopClassButton); ?> <?php echo esc_attr($tabletClassButton); ?> <?php echo esc_attr($mobileClassButton); ?>"
                    style="<?php echo esc_attr($buttonContentStyle3); ?>"
                    data-font-family="<?php echo esc_attr($innerElement['fontFamilyButton']); ?>"
                    <?php if ($innerElement['effectIn'] !== 'none') : ?>
                    data-effect-in="<?php echo esc_attr($innerElement['effectIn'] ?? ''); ?>"
                    data-duration="<?php echo esc_attr($innerElement['duration'] ?? 800); ?>"
                    data-delay-in="<?php echo esc_attr($innerElement['delay'] ?? 0); ?>"
                    data-delay-in-end="<?php echo esc_attr($$innerElement['easing'] ?? 'linear'); ?>"
                    data-direction-in="<?php echo esc_attr($innerElement['direction'] ?? 'normal'); ?>"
                    data-loop-in="<?php echo esc_attr($innerElement['loop'] ?? '1'); ?>"
                    data-opacity-in-from="<?php echo esc_attr($innerElement['opacityFrom'] ?? 0); ?>"
                    data-opacity-in-to="<?php echo esc_attr($innerElement['opacityTo'] ?? 1); ?>"
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
                    <a class="content-button-slide-inner <?php echo esc_attr($innerElement['iconShowHover']); ?> <?php echo esc_attr($innerElement['iconHideShowHover']); ?>" href="<?php echo $link_url; ?>"
                        style="<?php echo esc_attr($buttonStyle3); ?>"
                        data-delay-hide="<?php echo esc_attr($innerElement['delayHide']) ? 'true' : 'false'; ?>"
                        data-delay-seconds="<?php echo esc_attr($innerElement['delaySeconds']); ?>"

                        target="<?php echo $linkTargetButton; ?>"
                        rel="<?php echo $rel_div; ?>"
                        <?php if ($innerElement['buttonLink'] === 'scroll-below' || ($innerElement['buttonLink'] === 'scroll-to-id' && !empty($innerElement['scrollToIdButton']))) : ?>
                        onclick="event.preventDefault(); <?php echo $innerElement['buttonLink'] === 'scroll-below' ? "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });" : "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });"; ?>"
                        <?php endif; ?>>
                        <?php if (!empty($innerElement['icon']) && $innerElement['icoPositionButton'] === 'before') : ?>
                            <div class="content-icon-button  <?php echo esc_attr($innerElement['iconAnimation'] ?? 'none') ?> <?php echo esc_attr($innerElement['animationHoverIcon'] ?? 'none') ?>"
                                style="<?php echo esc_attr($stylesIcon); ?>"
                                data-icon-size="<?php echo esc_attr($innerElement['sizeIcon']); ?>"
                                data-icon-color="<?php echo esc_attr($innerElement['iconColor']); ?>"
                                data-icon="<?php echo esc_attr($innerElement['icon']); ?>">
                            </div>
                        <?php endif; ?>
                        <?php echo esc_html($innerElement['button']); ?>
                        <?php if (!empty($innerElement['icon']) && $innerElement['icoPositionButton'] === 'after') : ?>
                            <div class="content-icon-button <?php echo esc_attr($innerElement['iconAnimation'] ?? 'none') ?> <?php echo esc_attr($innerElement['animationHoverIcon'] ?? 'none') ?>"
                                style="<?php echo esc_attr($stylesIcon); ?>"
                                data-icon-size="<?php echo esc_attr($innerElement['sizeIcon']); ?>"
                                data-icon-color="<?php echo esc_attr($innerElement['iconColor']); ?>"
                                data-icon="<?php echo esc_attr($innerElement['icon']); ?>">
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