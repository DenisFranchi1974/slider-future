<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

function slider_future_render_icon($element, $slide)
{
    $desktopClassIcon = $element['enableDesktop'] ? 'desktop-icon-visible' : 'desktop-icon-hidden';
    $tabletClassIcon = $element['enableTablet'] ? 'tablet-icon-visible' : 'tablet-icon-hidden';
    $mobileClassIcon = $element['enableMobile'] ? 'mobile-icon-visible' : 'mobile-icon-hidden';
    if ($element['link'] !== 'none') {
        if ($element['link'] === 'link' && !empty($element['linkUrl'])) {
            $link_url = esc_url($element['linkUrl']);
            if (!empty($element['linkTarget'])) {
                $linkTarget = esc_attr($element['linkTarget']);
            }
            if ($element['linkRel'] === 'nofollow') {
                $rel_div = 'nofollow';
            }
            $onclick = "window.open('{$link_url}', '{$linkTarget}', 'rel={$rel_div}');";
        } elseif ($element['link'] === 'scroll-below') {
            $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
        } elseif ($element['link'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
            $scroll_id = esc_attr($element['scrollToId']);
            $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
        }
    }
    $inline_style = '';
    if (isset($element['backgroundColorIcon'])) {
        $inline_style .= "background-color: " . esc_attr($element['backgroundColorIcon']) . "; ";
    }
    if (isset($element['colorHover'])) {
        $inline_style .= "--color-hover-icon: " . esc_attr($element['colorHover']) . "; ";
    }
    if (isset($element['margin'])) {
        $inline_style .= "margin: "
            . esc_attr($element['margin']['top'] ?? 0) . " "
            . esc_attr($element['margin']['right'] ?? 0) . " "
            . esc_attr($element['margin']['bottom'] ?? 0) . " "
            . esc_attr($element['margin']['left'] ?? 0) . "; ";
    }
    if (isset($element['padding'])) {
        $inline_style .= "padding: "
            . esc_attr($element['padding']['top'] ?? 0) . " "
            . esc_attr($element['padding']['right'] ?? 0) . " "
            . esc_attr($element['padding']['bottom'] ?? 0) . " "
            . esc_attr($element['padding']['left'] ?? 0) . "; ";
    }
    if (isset($element['backgroundBorderSize'])) {
        $inline_style .= "border-width: "
            . esc_attr($element['backgroundBorderSize']['top'] ?? 0) . " "
            . esc_attr($element['backgroundBorderSize']['right'] ?? 0) . " "
            . esc_attr($element['backgroundBorderSize']['bottom'] ?? 0) . " "
            . esc_attr($element['backgroundBorderSize']['left'] ?? 0) . "; ";
    }
    if (isset($element['backgroundBorderColor'])) {
        $inline_style .= "border-color: " . esc_attr($element['backgroundBorderColor']) . "; ";
    }
    if (isset($element['backgroundBorderRadius'])) {
        $inline_style .= "border-radius: "
            . esc_attr($element['backgroundBorderRadius']['top'] ?? 0) . " "
            . esc_attr($element['backgroundBorderRadius']['right'] ?? 0) . " "
            . esc_attr($element['backgroundBorderRadius']['bottom'] ?? 0) . " "
            . esc_attr($element['backgroundBorderRadius']['left'] ?? 0) . "; ";
    }
    if (isset($element['backgroundBorderColorHover'])) {
        $inline_style .= "--border-color-hover-icon: " . esc_attr($element['backgroundBorderColorHover']) . "; ";
    }
    if (isset($element['opacityHover'])) {
        $inline_style .= "--opacity-hover-icon: " . esc_attr($element['opacityHover']) . "; ";
    }
    if (isset($element['borderStyle'])) {
        $inline_style .= "border-style: " . esc_attr($element['borderStyle']) . "; ";
    }
    if (isset($element['borderStyleHover'])) {
        $inline_style .= "--border-style-hover-icon: " . esc_attr($element['borderStyleHover']) . "; ";
    }
    if (isset($element['backgroundBorderSizeHover'])) {
        $inline_style .= "--border-width-hover-icon: "
            . esc_attr($element['backgroundBorderSizeHover']['top'] ?? 0) . " "
            . esc_attr($element['backgroundBorderSizeHover']['right'] ?? 0) . " "
            . esc_attr($element['backgroundBorderSizeHover']['bottom'] ?? 0) . " "
            . esc_attr($element['backgroundBorderSizeHover']['left'] ?? 0) . "; ";
    }
    if (isset($element['translateEffectHover'])) {
        $inline_style .= "--translate-hover-icon: " . esc_attr($element['translateEffectHover']) . "px; ";
    }
    if (isset($element['scaleEffectHover'])) {
        $inline_style .= "--scale-hover-icon: " . esc_attr($element['scaleEffectHover']) . "; ";
    }
    if (isset($element['blurEffectHover'])) {
        $inline_style .= "--blur-hover-icon: " . esc_attr($element['blurEffectHover']) . "px; ";
    }
    $inline_style .= "position: relative; display: flex; ";
    if (isset($element['opacity'])) {
        $inline_style .= "opacity: " . esc_attr($element['opacity']) . "; ";
    }
    if (isset($element['rotate'])) {
        $inline_style .= "transform: rotate(" . esc_attr($element['rotate']) . "deg); ";
    }
    if (isset($element['rotateHover'])) {
        $inline_style .= "--rotate-hover-icon: " . esc_attr($element['rotateHover']) . "deg; ";
    }
    if (isset($element['iconAnimationDuration'])) {
        $inline_style .= "--fa-animation-duration: " . esc_attr($element['iconAnimationDuration']) . "s; ";
    }
    if (isset($element['durationEffectHover'])) {
        $inline_style .= "--transition-hover-icon: " . esc_attr($element['durationEffectHover']) . "s; ";
    }
    if (isset($element['zIndexIcon'])) {
        $inline_style .= "z-index: " . esc_attr($element['zIndexIcon']) . "; ";
    }
    if (isset($element['textLink']) && $element['textLink'] !== 'none') {
        $inline_style .= "cursor: pointer; ";
    }
    if (isset($element['align'])) {
        $inline_style .= "justify-content: " . esc_attr($element['align']) . "; ";
    }
    if (!empty($element['enableBoxShadow'])) {
        $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
        $inline_style .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    $stylesDiv = '';
    if (isset($element['width'])) {
        $stylesDiv .= "width: " . ($element['width'] === 'custom' ? esc_attr($element['widthCustom']) . "px" : esc_attr($element['width'])) . "; ";
    }
    $classNamesDiv = "content-icon ";
    $classNamesIcon = "slide-icon " . esc_attr($element['icon']) . " " . esc_attr($element['iconAnimation']) . " " . esc_attr($element['animationHover']);
?>
    <?php if ($slide['developerMode']) : ?>
        <div class="content-content-icon-absolute <?php echo esc_attr($desktopClassIcon); ?> <?php echo esc_attr($tabletClassIcon); ?> <?php echo esc_attr($mobileClassIcon); ?>"
            style="position:absolute;z-index: <?php echo esc_attr($element['zIndexIcon']); ?>;"
            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>">
        <?php endif; ?>
        <div <?php if ($element['link'] !== 'none') : ?>
            onclick="<?php echo esc_js($onclick); ?>" <?php endif; ?>
            style="<?php echo esc_attr($stylesDiv); ?>"
            class="<?php echo esc_attr($classNamesDiv); ?> <?php echo esc_attr($desktopClassIcon); ?> <?php echo esc_attr($tabletClassIcon); ?> <?php echo esc_attr($mobileClassIcon); ?>"
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
            <?php endif; ?>>
            <div class="element-icon-primary <?php echo esc_attr($classNamesIcon); ?>"
                style="<?php echo esc_attr($inline_style); ?>"
                data-icon-primary="<?php echo esc_attr($element['icon']); ?>"
                data-icon-size-primary-min="<?php echo esc_attr($element['fontSizeMobile']); ?>"
                data-icon-size-primary-preferred="<?php echo esc_attr($element['fontSizeTablet']); ?>"
                data-icon-size-primary-max="<?php echo esc_attr($element['fontSize']); ?>"
                data-icon-color-primary="<?php echo esc_attr($element['color']); ?>">
            </div>
        </div>
        <?php if ($slide['developerMode']) : ?>
        </div>
<?php endif;
    } ?>