<?php
function render_group($element, $slide)
{
    $link_url = '';
    $onclick = '';
    $target_div = '_self';
    $rel_div = 'follow';
    if ($element['textLink'] !== 'none') {
        if ($element['textLink'] === 'link' && !empty($element['linkUrl'])) {
            $link_url = esc_url($element['linkUrl']);
            if (!empty($element['linkTarget'])) {
                $target_div = esc_attr($element['linkTarget']);
            }
            if ($element['linkRel'] === 'nofollow') {
                $rel_div = 'nofollow';
            }
            $onclick = "window.open('{$link_url}', '{$target_div}', 'rel={$rel_div}');";
        } elseif ($element['textLink'] === 'scroll-below') {
            $onclick = "window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });";
        } elseif ($element['textLink'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
            $scroll_id = esc_attr($element['scrollToId']);
            $onclick = "document.getElementById('{$scroll_id}').scrollIntoView({ behavior: 'smooth' });";
        }
    }
    $desktopClassDiv = $element['enableDesktop'] ? 'desktop-div-visible' : 'desktop-div-hidden';
    $tabletClassDiv = $element['enableTablet'] ? 'tablet-div-visible' : 'tablet-div-hidden';
    $mobileClassDiv = $element['enableMobile'] ? 'mobile-div-visible' : 'mobile-div-hidden';
    $TagDiv = !empty($element['elementDiv']) ? $element['elementDiv'] : 'div';
?>
    <?php if ($slide['developerMode']) : ?>
        <div
            class="content-inner-div-absolute"
            style="position:absolute; z-index:<?php echo esc_attr($element['zIndexDiv'] ?? 1) ?>"
            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>">
        <?php endif; ?>
        <div
            class="content-inner-div"
            style="opacity: <?php echo esc_attr($element['opacityDiv'] ?? 1) ?>;  
                                         z-index:<?php echo esc_attr($element['zIndexDiv'] ?? 1) ?>;
                                         width: <?php echo esc_attr($element['contentWidthDiv']) === 'custom' ? esc_attr($element['customContentWidthDiv']) . '%' : esc_attr($element['contentWidthDiv']); ?>;">
            <<?php echo esc_attr($TagDiv); ?>
                <?php if ($element['textLink'] !== 'none') : ?>
                onclick="<?php echo esc_js( $onclick ); ?>"
                <?php endif; ?>
                class="div-slide <?php echo esc_attr($desktopClassDiv . ' ' . $tabletClassDiv . ' ' . $mobileClassDiv); ?>"
                <?php
                $inline_style = 'background-color: ' . esc_attr($element['backgroundColor'] ?? 'transparent') . ';'
                    . 'display: ' . esc_attr($element['displayDiv'] ?? 'flex') . ';'
                    . 'position: relative;'
                    . ($element['textLink'] !== 'none' ? 'cursor: pointer;' : '')
                    . 'visibility: visible;'
                    . 'gap: ' . esc_attr($element['gapItemsDiv']) . 'px;'
                    . 'border-radius: ' . esc_attr($element['backgroundBorderRadiusDiv']['top'] ?? 0) . ' ' . esc_attr($element['backgroundBorderRadiusDiv']['right'] ?? 0) . ' ' . esc_attr($element['backgroundBorderRadiusDiv']['bottom'] ?? 0) . ' ' . esc_attr($element['backgroundBorderRadiusDiv']['left'] ?? 0) . ';'
                    . 'padding-top: ' . esc_attr($element['backgroundVerticalPaddingDiv']) . 'px;'
                    . 'padding-bottom: ' . esc_attr($element['backgroundVerticalPaddingDiv']) . 'px;'
                    . 'padding-left: ' . esc_attr($element['backgroundHorizontalPaddingDiv']) . 'px;'
                    . 'padding-right: ' . esc_attr($element['backgroundHorizontalPaddingDiv']) . 'px;'
                    . 'border-style: ' . esc_attr($element['borderStyleDiv']) . ';'
                    . 'border-width: ' . esc_attr($element['backgroundBorderSizeDiv']['top'] ?? 0) . ' ' . esc_attr($element['backgroundBorderSizeDiv']['right'] ?? 0) . ' ' . esc_attr($element['backgroundBorderSizeDiv']['bottom'] ?? 0) . ' ' . esc_attr($element['backgroundBorderSizeDiv']['left'] ?? 0) . ';'
                    . 'border-color: ' . esc_attr($element['backgroundBorderColorDiv'] ?? '') . ';'
                    . 'height: ' . (esc_attr($element['contentHeightDiv']) === 'custom' ? esc_attr($element['customContentHeightDiv']) . '%' : esc_attr($element['contentHeightDiv'])) . ';'
                    . 'margin: ' . esc_attr($element['marginDiv']['top'] ?? 0) . ' ' . esc_attr($element['marginDiv']['right'] ?? 0) . ' ' . esc_attr($element['marginDiv']['bottom'] ?? 0) . ' ' . esc_attr($element['marginDiv']['left'] ?? 0) . ';';

                if (!empty($element['enableBoxShadow'])) {
                    $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
                    $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
                    $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
                    $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
                    $colorShadow = esc_attr($element['colorShadow'] ?? '#000000');
                    $inline_style .= 'box-shadow: ' . $boxShadowX . 'px '
                        . $boxShadowY . 'px '
                        . $boxShadowBlur . 'px '
                        . $boxShadowSpread . 'px '
                        . $colorShadow . ';';
                }
                if ($element['displayDiv'] === 'flex') {
                    $inline_style .= 'flex-direction: ' . esc_attr($element['layoutDiv']) . ';';
                    $inline_style .= 'flex-wrap: ' . esc_attr($element['layoutWrap']) . ';';
                    if ($element['layoutDiv'] === 'row') {
                        $inline_style .= 'justify-content: ' . esc_attr($element['layoutJustifyDiv'] ?? 'center') . ';';
                        $inline_style .= 'align-items: ' . esc_attr($element['layoutVerticalAlignDivRow'] ?? 'center') . ';';
                    }

                    if ($element['layoutDiv'] === 'column') {
                        $inline_style .= 'justify-content: ' . esc_attr($element['layoutVerticalAlignDivColumn'] ?? 'center') . ';';
                        $inline_style .= 'align-items: ' . esc_attr($element['layoutJustifyDivColumn'] ?? 'center') . ';';
                    }
                }
                if ($element['displayDiv'] === 'grid') {
                    if ($element['itemGridPositionDiv'] === 'auto') {
                        $inline_style .= 'grid-template-columns: repeat(auto-fill, minmax(min(' . esc_attr($element['itemGridWidthDiv'] ?? 150) . 'px, 100%), 1fr));';
                    }
                    if ($element['itemGridPositionDiv'] === 'manual') {
                        $inline_style .= 'grid-template-columns: repeat(' . esc_attr($element['itemGridColumnDiv'] ?? 5) . ', minmax(0, 1fr));';
                    }
                }

                $inline_style .= 'transform: rotate(' . esc_attr($element['rotateDiv'] ?? 0) . 'deg);';
                ?>
                style="<?php echo esc_attr($inline_style); ?>"
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

                <?php if (!empty($element['innerElements']) && is_array($element['innerElements'])): ?>
                    <?php foreach ($element['innerElements'] as $innerIndex => $innerElement): ?>

                        <?php

                        include_once __DIR__ . '/inner-element/innerText.php';
                        include_once __DIR__ . '/inner-element/innerButton.php';
                        include_once __DIR__ . '/inner-element/innerIcon.php';
                        include_once __DIR__ . '/inner-element/innerImage.php';

                        if ($innerElement['type'] === 'text') :
                            render_innerText($innerElement, $slide);
                        elseif ($innerElement['type'] === 'button') :
                            render_innerButton($innerElement);
                        elseif ($innerElement['type'] === 'icon') :
                            render_innerIcon($innerElement, $slide);
                        elseif ($innerElement['type'] === 'image') :
                            render_innerImage($innerElement, $slide);

                        ?>

                        <?php endif; ?>
                    <?php endforeach; ?>
                <?php endif; ?>
            </<?php echo esc_attr($TagDiv); ?>>
        </div>
        <?php if ($slide['developerMode']) : ?>
        </div>
<?php endif;
    } ?>