<?php

if (! defined('ABSPATH')) exit; // Exit if accessed directly

function slider_future_render_innerIcon($innerElement, $slide)
{
    $desktopClassIcon = $innerElement['enableDesktop'] ? 'desktop-icon-visible' : 'desktop-icon-hidden';
    $tabletClassIcon = $innerElement['enableTablet'] ? 'tablet-icon-visible' : 'tablet-icon-hidden';
    $mobileClassIcon = $innerElement['enableMobile'] ? 'mobile-icon-visible' : 'mobile-icon-hidden';
    if ($innerElement['link'] !== 'none') {
        if ($innerElement['link'] === 'link' && !empty($innerElement['linkUrl'])) {
            $link_url = esc_url($innerElement['linkUrl']);
            if (!empty($innerElement['linkTarget'])) {
                $linkTarget = esc_attr($innerElement['linkTarget']);
            }
            if ($innerElement['linkRel'] === 'nofollow') {
                $rel_div = 'nofollow';
            }
            $onclick = "window.open('{$link_url}', '{$linkTarget}', 'rel={$rel_div}');";
        } elseif ($innerElement['link'] === 'scroll-below') {
            $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
        } elseif ($innerElement['link'] === 'scroll-to-id' && !empty($innerElement['scrollToId'])) {
            $scroll_id = esc_attr($innerElement['scrollToId']);
            $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
        }
    }
    $inline_style = '';
    if (isset($innerElement['backgroundColorIcon'])) {
        $inline_style .= "background-color: " . esc_attr($innerElement['backgroundColorIcon']) . "; ";
    }
    if (isset($innerElement['colorHover'])) {
        $inline_style .= "--color-hover-icon-inner: " . esc_attr($innerElement['colorHover']) . "; ";
    }
    if (isset($innerElement['margin'])) {
        $inline_style .= "margin: "
            . esc_attr($innerElement['margin']['top'] ?? 0) . " "
            . esc_attr($innerElement['margin']['right'] ?? 0) . " "
            . esc_attr($innerElement['margin']['bottom'] ?? 0) . " "
            . esc_attr($innerElement['margin']['left'] ?? 0) . "; ";
    }
    if (isset($innerElement['padding'])) {
        $inline_style .= "padding: "
            . esc_attr($innerElement['padding']['top'] ?? 0) . " "
            . esc_attr($innerElement['padding']['right'] ?? 0) . " "
            . esc_attr($innerElement['padding']['bottom'] ?? 0) . " "
            . esc_attr($innerElement['padding']['left'] ?? 0) . "; ";
    }
    if (isset($innerElement['backgroundBorderSize'])) {
        $inline_style .= "border-width: "
            . esc_attr($innerElement['backgroundBorderSize']['top'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderSize']['right'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderSize']['bottom'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderSize']['left'] ?? 0) . "; ";
    }
    if (isset($innerElement['backgroundBorderColor'])) {
        $inline_style .= "border-color: " . esc_attr($innerElement['backgroundBorderColor']) . "; ";
    }
    if (isset($innerElement['backgroundBorderRadius'])) {
        $inline_style .= "border-radius: "
            . esc_attr($innerElement['backgroundBorderRadius']['top'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderRadius']['right'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderRadius']['bottom'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderRadius']['left'] ?? 0) . "; ";
    }
    if (isset($innerElement['backgroundBorderColorHover'])) {
        $inline_style .= "--border-color-hover-icon-inner: " . esc_attr($innerElement['backgroundBorderColorHover']) . "; ";
    }
    if (isset($innerElement['opacityHover'])) {
        $inline_style .= "--opacity-hover-icon-inner: " . esc_attr($innerElement['opacityHover']) . "; ";
    }
    if (isset($innerElement['borderStyle'])) {
        $inline_style .= "border-style: " . esc_attr($innerElement['borderStyle']) . "; ";
    }
    if (isset($innerElement['borderStyleHover'])) {
        $inline_style .= "--border-style-hover-icon-inner: " . esc_attr($innerElement['borderStyleHover']) . "; ";
    }
    if (isset($innerElement['backgroundBorderSizeHover'])) {
        $inline_style .= "--border-width-hover-icon-inner: "
            . esc_attr($innerElement['backgroundBorderSizeHover']['top'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderSizeHover']['right'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderSizeHover']['bottom'] ?? 0) . " "
            . esc_attr($innerElement['backgroundBorderSizeHover']['left'] ?? 0) . "; ";
    }
    if (isset($innerElement['translateEffectHover'])) {
        $inline_style .= "--translate-hover-icon-inner: " . esc_attr($innerElement['translateEffectHover']) . "px; ";
    }
    if (isset($innerElement['scaleEffectHover'])) {
        $inline_style .= "--scale-hover-icon-inner: " . esc_attr($innerElement['scaleEffectHover']) . "; ";
    }
    if (isset($innerElement['blurEffectHover'])) {
        $inline_style .= "--blur-hover-icon-inner: " . esc_attr($innerElement['blurEffectHover']) . "px; ";
    }
    $inline_style .= "position: relative; display: flex; ";
    if (isset($innerElement['opacity'])) {
        $inline_style .= "opacity: " . esc_attr($innerElement['opacity']) . "; ";
    }
    if (isset($innerElement['rotate'])) {
        $inline_style .= "transform: rotate(" . esc_attr($innerElement['rotate']) . "deg); ";
    }
    if (isset($innerElement['rotateHover'])) {
        $inline_style .= "--rotate-hover-icon-inner: " . esc_attr($innerElement['rotateHover']) . "deg; ";
    }
    if (isset($innerElement['iconAnimationDuration'])) {
        $inline_style .= "--fa-animation-duration: " . esc_attr($innerElement['iconAnimationDuration']) . "s; ";
    }
    if (isset($innerElement['durationEffectHover'])) {
        $inline_style .= "--transition-hover-icon-inner: " . esc_attr($innerElement['durationEffectHover']) . "s; ";
    }
    if (isset($innerElement['zIndexIcon'])) {
        $inline_style .= "z-index: " . esc_attr($innerElement['zIndexIcon']) . "; ";
    }
    if (isset($innerElement['textLink']) && $innerElement['textLink'] !== 'none') {
        $inline_style .= "cursor: pointer; ";
    }
    if (!empty($innerElement['enableBoxShadow'])) {
        $boxShadowX = esc_attr($innerElement['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($innerElement['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($innerElement['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($innerElement['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($innerElement['colorBoxShadow'] ?? '#000000');
        $inline_style .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    $stylesDiv = '';
    if (isset($innerElement['width'])) {
        $stylesDiv .= "width: " . ($innerElement['width'] === 'custom' ? esc_attr($innerElement['widthCustom']) . "px" : esc_attr($innerElement['width'])) . "; ";
    }
    if (isset($innerElement['align'])) {
        $inline_style .= "justify-content: " . esc_attr($innerElement['align']) . "; ";
    }
    $classNamesDiv = "content-icon-inner ";
    $classNamesIcon = "slide-icon-inner " . esc_attr($innerElement['icon']) . " " . esc_attr($innerElement['iconAnimation']) . " " . esc_attr($innerElement['animationHover']);
?>

    <div <?php if ($innerElement['link'] !== 'none') : ?>
        onclick="<?php echo esc_js($onclick); ?>" <?php endif; ?>
        style="<?php echo esc_attr($stylesDiv); ?>"
        class="<?php echo esc_attr($classNamesDiv); ?> <?php echo esc_attr($desktopClassIcon); ?> <?php echo esc_attr($tabletClassIcon); ?> <?php echo esc_attr($mobileClassIcon); ?>"
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
        <?php endif; ?>>
        <div class="element-icon-primary-inner <?php echo esc_attr($classNamesIcon); ?>"
            style="<?php echo esc_attr($inline_style); ?>"
            data-icon-primary="<?php echo esc_attr($innerElement['icon']); ?>"
            data-icon-size-primary-min="<?php echo esc_attr($innerElement['fontSizeMobile']); ?>"
            data-icon-size-primary-preferred="<?php echo esc_attr($innerElement['fontSizeTablet']); ?>"
            data-icon-size-primary-max="<?php echo esc_attr($innerElement['fontSize']); ?>"
            data-icon-color-primary="<?php echo esc_attr($innerElement['color']); ?>">
        </div>
    </div>
<?php
} ?>