<?php
function render_text($element, $slide)
{
    $fontStyle = esc_attr($element['fontStyle']['fontStyle'] ?? 'normal');
    $fontWeight = esc_attr($element['fontStyle']['fontWeight'] ?? 'normal');
    $textDecoration = esc_attr($element['fontStyle']['textDecoration'] ?? 'none');
    $marginTop = esc_attr($element['marginTitle']['top'] ?? '0px');
    $marginRight = esc_attr($element['marginTitle']['right'] ?? '0px');
    $marginBottom = esc_attr($element['marginTitle']['bottom'] ?? '0px');
    $marginLeft = esc_attr($element['marginTitle']['left'] ?? '0px');
    $margin = "$marginTop $marginRight $marginBottom $marginLeft";
    $paddingTop = esc_attr($element['paddingTitle']['top'] ?? '0px');
    $paddingRight = esc_attr($element['paddingTitle']['right'] ?? '0px');
    $paddingBottom = esc_attr($element['paddingTitle']['bottom'] ?? '0px');
    $paddingLeft = esc_attr($element['paddingTitle']['left'] ?? '0px');
    $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
    $borderSizeTop = esc_attr($element['backgroundBorderSize']['top'] ?? '0px');
    $borderSizeRight = esc_attr($element['backgroundBorderSize']['right'] ?? '0px');
    $borderSizeBottom = esc_attr($element['backgroundBorderSize']['bottom'] ?? '0px');
    $borderSizeLeft = esc_attr($element['backgroundBorderSize']['left'] ?? '0px');
    $borderSize = "$borderSizeTop $borderSizeRight $borderSizeBottom $borderSizeLeft";
    $fontSize = esc_attr($element['fontSize']);
    $fontSizeTablet = esc_attr($element['fontSizeTablet']);
    $fontSizeMobile = esc_attr($element['fontSizeMobile']);
    $color = esc_attr($element['textColor']);
    $widthCursor = esc_attr($element['widthCursor'] ?? '4px');
    $colorHover = esc_attr($element['textColorHover'] ?? '');
    $backgroundColor = esc_attr($element['backgroundColor'] ?? '');
    $textAlign = esc_attr($element['textAlign'] ?? 'center');
    $letterSpacing = esc_attr($element['letterSpacing'] ?? 0);
    $borderStyle = esc_attr($element['borderStyle'] ?? 'none');
    $backgroundBorderColor = esc_attr($element['backgroundBorderColor'] ?? '#000');
    $fontFamily = esc_attr($element['fontFamily'] ?? 'Arial, sans-serif');
    $lineHeight = esc_attr($element['lineHeight'] ?? 1.5);
    $textWriteMode = esc_attr($element['textWriteMode'] ?? 'horizontal-tb');
    $textOrientation = esc_attr($element['textOrientation'] ?? 'mixed');
    $rotate = esc_attr($element['rotate'] ?? 0);
    $borderRadiusTop = esc_attr($element['backgroundBorderRadius']['top'] ?? '0px');
    $borderRadiusRight = esc_attr($element['backgroundBorderRadius']['right'] ?? '0px');
    $borderRadiusBottom = esc_attr($element['backgroundBorderRadius']['bottom'] ?? '0px');
    $borderRadiusLeft = esc_attr($element['backgroundBorderRadius']['left'] ?? '0px');
    $borderRadius = "$borderRadiusTop $borderRadiusRight $borderRadiusBottom $borderRadiusLeft";
    $zIndexTitle = esc_attr($element['zIndexTitle'] ?? 1);
    $blendMode = esc_attr($element['blendMode'] ?? 'normal');
    $isBold = isset($element['fontStyle']['fontWeight']) && $element['fontStyle']['fontWeight'] === "bold" ? "bold" : (isset($element['fontWeight']) ? esc_attr($element['fontWeight']) : "normal");
    $stylesTitle = 'font-size: clamp(' . $fontSizeMobile . 'px,' . $fontSizeTablet . 'vw, ' . $fontSize . 'px); '
        . 'color: ' . $color . '; '
        . '--color-hover: ' . $colorHover . '; '
        . '--color-cursor: ' . $color . '; '
        . '--cursor-width: ' . $widthCursor . 'px; '
        . 'background-color: ' . $backgroundColor . '; '
        . 'text-align: ' . $textAlign . '; '
        . 'letter-spacing: ' . $letterSpacing . 'px; '
        . 'font-style: ' . $fontStyle . '; '
        . 'font-weight: ' . $isBold . '; '
        . 'text-decoration: ' . $textDecoration . '; '
        . 'line-height: ' . $lineHeight . '; '
        . 'font-family: ' . $fontFamily . '; '
        . 'margin: ' . $margin . ';'
        . 'padding: ' . $padding . ';'
        . 'border-width: ' . $borderSize  . ';'
        . 'border-style: ' . $borderStyle . ';'
        . 'border-color: ' . $backgroundBorderColor . ';'
        . 'writing-mode: ' . $textWriteMode . ';'
        . 'text-orientation: ' . $textOrientation . ';'
        . 'transform: rotate(' . $rotate . 'deg);'
        . 'mix-blend-mode: ' . $blendMode . ';'
        . 'z-index: ' . $zIndexTitle . ';'
        . 'border-radius: ' . $borderRadius . ';';
    if (!empty($element['enableTextShadow'])) {
        $textShadowX = esc_attr($element['textShadowX'] ?? 0);
        $textShadowY = esc_attr($element['textShadowY'] ?? 0);
        $textShadowBlur = esc_attr($element['textShadowBlur'] ?? 0);
        $colorTextShadow = esc_attr($element['colorTextShadow'] ?? '#000000');
        $stylesTitle .= 'text-shadow: ' . $textShadowX . 'px '
            . $textShadowY . 'px '
            . $textShadowBlur . 'px '
            . $colorTextShadow . ';';
    }
    if (!empty($element['enableBoxShadow'])) {
        $boxShadowX = esc_attr($element['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($element['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($element['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($element['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($element['colorBoxShadow'] ?? '#000000');
        $stylesTitle .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    if (!empty($element['enableStroke'])) {
        $strokeWidth = esc_attr($element['stroke'] ?? 0);
        $strokeColor = esc_attr($element['colorStroke'] ?? '#000000');
        $stylesTitle .= '-webkit-text-stroke-width: ' . $strokeWidth . 'px;'
            . '-webkit-text-stroke-color: ' . $strokeColor . ';';
    }
    $tag = esc_attr($element['elementTitle'] ?? 'h3');
    $enableDesktop = $element['enableDesktop'] ?? true;
    $enableTablet = $element['enableTablet'] ?? true;
    $enableMobile = $element['enableMobile'] ?? true;
    $desktopClass = $enableDesktop ? 'desktop-title-visible' : 'desktop-title-hidden';
    $tabletClass = $enableTablet ? 'tablet-title-visible' : 'tablet-title-hidden';
    $mobileClass = $enableMobile ? 'mobile-title-visible' : 'mobile-title-hidden';
    $textTypeWriterOne = esc_attr($element['textTypeWriterOne'] ?? '');
    $textTypeWriterTwo = esc_attr($element['textTypeWriterTwo'] ?? '');
    $textTypeWriterThree = esc_attr($element['textTypeWriterThree'] ?? '');
    $textTypeWriterFour = esc_attr($element['textTypeWriterFour'] ?? '');

    if ($slide['developerMode']) : ?>
        <div class="content-content-slide-absolute"
            style="
                                position: absolute;"
            data-desktop-x="<?php echo esc_attr($element['desktop']['x']); ?>"
            data-desktop-y="<?php echo esc_attr($element['desktop']['y']); ?>"
            data-tablet-x="<?php echo esc_attr($element['tablet']['x']); ?>"
            data-tablet-y="<?php echo esc_attr($element['tablet']['y']); ?>"
            data-mobile-x="<?php echo esc_attr($element['mobile']['x']); ?>"
            data-mobile-y="<?php echo esc_attr($element['mobile']['y']); ?>">
        <?php endif; ?>
        <?php
        $widthTitle = $element['widthTitle'] ?? '100%';
        $widthCustomTitle = $element['widthCustomTitle'] ?? '100';
        $opacity = $element['opacity'] ?? 1;
        ?>
        <div
            style="width: <?php echo esc_attr($widthTitle) === 'custom' ? esc_attr($widthCustomTitle) . 'px' : esc_attr($widthTitle); ?>;opacity: <?php echo esc_attr($opacity); ?>"
            class="content-title-slide <?php echo esc_attr($desktopClass); ?> <?php echo esc_attr($tabletClass); ?> <?php echo esc_attr($mobileClass); ?>">
            <<?php
                echo esc_attr($tag);
                ?>
                class="title-slide"
                <?php
                $link_start = '';
                $link_end = '';
                $target = esc_attr($element['linkTarget'] ?? '_self');
                $rel = esc_attr($element['linkRel'] ?? 'follow');
                if ($element['textLink'] === 'link' && !empty($element['linkUrl'])) {
                    $link_start = '<a href="' . esc_url($element['linkUrl']) . '" target="' . $target . '" rel="' . $rel . '">';
                    $link_end = '</a>';
                } elseif ($element['textLink'] === 'scroll-below') {
                    $link_start = '<a href="#" onclick="window.scrollBy({ top: window.innerHeight, behavior: \'smooth\' }); return false;">';
                    $link_end = '</a>';
                } elseif ($element['textLink'] === 'scroll-to-id' && !empty($element['scrollToId'])) {
                    $link_start = '<a href="#" onclick="document.getElementById(\'' . esc_attr($element['scrollToId']) . '\').scrollIntoView({ behavior: \'smooth\' }); return false;">';
                    $link_end = '</a>';
                }
                ?>
                style="<?php echo esc_attr($stylesTitle); ?>"
                data-font-family="<?php echo esc_attr($fontFamily); ?>"
                <?php if ($element['textLink'] === 'link') : ?>
                href="<?php echo esc_url($element['linkUrl']); ?>"
                <?php elseif ($element['textLink'] === 'scroll-below' || $element['textLink'] === 'scroll-to-id') : ?>
                onclick="
                                    <?php if ($element['textLink'] === 'scroll-below') : ?>
                                        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                                    <?php elseif ($element['textLink'] === 'scroll-to-id') : ?>
                                        var targetElement = document.getElementById('<?php echo esc_js($element['scrollToId']); ?>');
                                        if (targetElement) {
                                            targetElement.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    <?php endif; ?> 
                                    return false;
                                "
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
                data-stagger="<?php echo esc_attr($element['stagger'] ?? 80); ?>"
                data-effect-split="<?php echo esc_attr($element['textSplitEffect'] ?? ''); ?>"
                data-direction-block="<?php echo esc_attr($element['directionBlock'] ?? 'right'); ?>"
                data-color-block="<?php echo esc_attr($element['colorBlockEffect'] ?? '#000'); ?>"
                data-rotate-in-from="<?php echo esc_attr($element['rotateFrom'] ?? 0); ?>"
                data-rotate-in-to="<?php echo esc_attr($element['rotateTo'] ?? 0); ?>"
                data-rotate-x-in-from="<?php echo esc_attr($element['rotateXFrom'] ?? 0); ?>"
                data-rotate-x-in-to="<?php echo esc_attr($element['rotateXTo'] ?? 0); ?>"
                data-rotate-y-in-from="<?php echo esc_attr($element['rotateYFrom'] ?? 0); ?>"
                data-rotate-y-in-to="<?php echo esc_attr($element['rotateYTo'] ?? 0); ?>"
                data-scale-in-from="<?php echo esc_attr($element['scaleFrom'] ?? 0); ?>"
                data-scale-in-to="<?php echo esc_attr($element['scaleTo'] ?? 1); ?>"
                data-skew-x-from="<?php echo esc_attr($element['skewXFrom'] ?? 0); ?>"
                data-skew-x-to="<?php echo esc_attr($element['skewXTo'] ?? 1); ?>"
                data-skew-y-from="<?php echo esc_attr($element['skewYFrom'] ?? 0); ?>"
                data-skew-y-to="<?php echo esc_attr($element['skewYTo'] ?? 1); ?>"
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
                <?php endif; ?>>
                <?php
                echo $link_start; ?>
                <?php echo esc_attr($element['text']) ?>
                <?php echo $link_end; ?>
                <?php if ($element['enableTypeWriter']) : ?>
                    <span class="typewrite" data-period="2000" data-break-cursor="<?php echo esc_attr($element['breakCursor']); ?>" data-speed-cursor="<?php echo esc_attr($element['speedCursor']); ?>" data-type='[
                        "<?php echo $textTypeWriterOne; ?>", 
                        "<?php echo $textTypeWriterTwo; ?>", 
                        "<?php echo $textTypeWriterThree; ?>", 
                        "<?php echo $textTypeWriterFour; ?>"
                    ]'>
                    </span>
                    <span class="wrap"></span>
                <?php endif; ?>
            </<?php echo esc_attr($tag); ?>>
        </div>

        <?php if ($slide['developerMode']) : ?>
        </div>
<?php endif;
    } ?>