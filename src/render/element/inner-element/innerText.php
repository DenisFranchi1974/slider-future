<?php
function render_innerText($innerElement, $slide)
{
    $fontStyle = esc_attr($innerElement['fontStyle']['fontStyle'] ?? 'normal');
    $fontWeight = esc_attr($innerElement['fontStyle']['fontWeight'] ?? 'normal');
    $textDecoration = esc_attr($innerElement['fontStyle']['textDecoration'] ?? 'none');
    $marginTop = esc_attr($innerElement['marginTitle']['top'] ?? '0px');
    $marginRight = esc_attr($innerElement['marginTitle']['right'] ?? '0px');
    $marginBottom = esc_attr($innerElement['marginTitle']['bottom'] ?? '0px');
    $marginLeft = esc_attr($innerElement['marginTitle']['left'] ?? '0px');
    $margin = "$marginTop $marginRight $marginBottom $marginLeft";
    $paddingTop = esc_attr($innerElement['paddingTitleBlock']['top'] ?? '0px');
    $paddingRight = esc_attr($innerElement['paddingTitleBlock']['right'] ?? '0px');
    $paddingBottom = esc_attr($innerElement['paddingTitleBlock']['bottom'] ?? '0px');
    $paddingLeft = esc_attr($innerElement['paddingTitleBlock']['left'] ?? '0px');
    $padding = "$paddingTop $paddingRight $paddingBottom $paddingLeft";
    $borderSizeTop = esc_attr($innerElement['backgroundBorderSize']['top'] ?? '0px');
    $borderSizeRight = esc_attr($innerElement['backgroundBorderSize']['right'] ?? '0px');
    $borderSizeBottom = esc_attr($innerElement['backgroundBorderSize']['bottom'] ?? '0px');
    $borderSizeLeft = esc_attr($innerElement['backgroundBorderSize']['left'] ?? '0px');
    $borderSize = "$borderSizeTop $borderSizeRight $borderSizeBottom $borderSizeLeft";
    $fontSize = esc_attr($innerElement['fontSize']);
    $fontSizeTablet = esc_attr($innerElement['fontSizeTablet']);
    $fontSizeMobile = esc_attr($innerElement['fontSizeMobile']);
    $color = esc_attr($innerElement['textColor']);
    $colorHover = esc_attr($innerElement['textColorHover'] ?? '');
    $backgroundColor = esc_attr($innerElement['backgroundColor'] ?? '');
    $textAlign = esc_attr($innerElement['textAlign'] ?? 'center');
    $letterSpacing = esc_attr($innerElement['letterSpacing'] ?? 0);
    $borderStyle = esc_attr($innerElement['borderStyle'] ?? 'none');
    $backgroundBorderColor = esc_attr($innerElement['backgroundBorderColor'] ?? '#000');
    $fontFamily = esc_attr($innerElement['fontFamilyTitleBlock'] ?? 'Arial, sans-serif');
    $lineHeight = esc_attr($innerElement['lineHeight'] ?? 1.5);
    $textWriteMode = esc_attr($innerElement['textWriteMode'] ?? 'horizontal-tb');
    $textOrientation = esc_attr($innerElement['textOrientation'] ?? 'mixed');
    $rotate = esc_attr($innerElement['rotate'] ?? 0);
    $borderRadiusTop = esc_attr($innerElement['backgroundBorderRadius']['top'] ?? '0px');
    $borderRadiusRight = esc_attr($innerElement['backgroundBorderRadius']['right'] ?? '0px');
    $borderRadiusBottom = esc_attr($innerElement['backgroundBorderRadius']['bottom'] ?? '0px');
    $borderRadiusLeft = esc_attr($innerElement['backgroundBorderRadius']['left'] ?? '0px');
    $horizontalPositionInnerText = esc_attr($innerElement['horizontalPositionInnerText'] ?? 0);
    $verticalPositionInnerText = esc_attr($innerElement['verticalPositionInnerText'] ?? 0);
    $positionInnerText = esc_attr($innerElement['positionInnerText'] ?? 'static');
    $borderRadius = "$borderRadiusTop $borderRadiusRight $borderRadiusBottom $borderRadiusLeft";
    $zIndexTitle = esc_attr($innerElement['zIndexTitle'] ?? 1);
    $widthCursor = esc_attr($innerElement['widthCursor'] ?? '4px');
    $blendMode = esc_attr($innerElement['blendMode'] ?? 'normal');
    $isBold = isset($innerElement['fontStyle']['fontWeight']) && $innerElement['fontStyle']['fontWeight'] === "bold" ? "bold" : (isset($innerElement['fontWeight']) ? esc_attr($innerElement['fontWeight']) : "normal");
    $stylesTitle = 'font-size: clamp(' . $fontSizeMobile . 'px,' . $fontSizeTablet . 'vw, ' . $fontSize . 'px); '
        . 'color: ' . $color . '; '
        . '--color-hover-inner: ' . $colorHover . '; '
        . '--color-cursor-inner: ' . $color . '; '
        . '--cursor-width-inner: ' . $widthCursor . 'px; '
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
        . 'left: ' . $horizontalPositionInnerText . 'px;'
        . 'top: ' . $verticalPositionInnerText . 'px;'
        . 'position: ' . $positionInnerText . ';'
        . 'z-index: ' . $zIndexTitle . ';'
        . 'border-radius: ' . $borderRadius . ';';
    if (!empty($innerElement['enableTextShadow'])) {
        $textShadowX = esc_attr($innerElement['textShadowX'] ?? 0);
        $textShadowY = esc_attr($innerElement['textShadowY'] ?? 0);
        $textShadowBlur = esc_attr($innerElement['textShadowBlur'] ?? 0);
        $colorTextShadow = esc_attr($innerElement['colorTextShadow'] ?? '#000000');
        $stylesTitle .= 'text-shadow: ' . $textShadowX . 'px '
            . $textShadowY . 'px '
            . $textShadowBlur . 'px '
            . $colorTextShadow . ';';
    }
    if (!empty($innerElement['enableBoxShadow'])) {
        $boxShadowX = esc_attr($innerElement['boxShadowX'] ?? 0);
        $boxShadowY = esc_attr($innerElement['boxShadowY'] ?? 0);
        $boxShadowBlur = esc_attr($innerElement['boxShadowBlur'] ?? 0);
        $boxShadowSpread = esc_attr($innerElement['boxShadowSpread'] ?? 0);
        $colorBoxShadow = esc_attr($innerElement['colorBoxShadow'] ?? '#000000');
        $stylesTitle .= 'box-shadow: ' . $boxShadowX . 'px '
            . $boxShadowY . 'px '
            . $boxShadowBlur . 'px '
            . $boxShadowSpread . 'px '
            . $colorBoxShadow . ';';
    }
    if (!empty($innerElement['enableStroke'])) {
        $strokeWidth = esc_attr($innerElement['stroke'] ?? 0);
        $strokeColor = esc_attr($innerElement['colorStroke'] ?? '#000000');
        $stylesTitle .= '-webkit-text-stroke-width: ' . $strokeWidth . 'px;'
            . '-webkit-text-stroke-color: ' . $strokeColor . ';';
    }
    $tag = esc_attr($innerElement['elementTitle'] ?? 'h3');
    $enableDesktop = $innerElement['enableDesktop'] ?? true;
    $enableTablet = $innerElement['enableTablet'] ?? true;
    $enableMobile = $innerElement['enableMobile'] ?? true;
    $desktopClass = $enableDesktop ? 'desktop-title-div-visible' : 'desktop-title-div-hidden';
    $tabletClass = $enableTablet ? 'tablet-title-div-visible' : 'tablet-title-div-hidden';
    $mobileClass = $enableMobile ? 'mobile-title-div-visible' : 'mobile-title-div-hidden';
    $textTypeWriterOne = esc_attr($innerElement['textTypeWriterOne'] ?? '');
    $textTypeWriterTwo = esc_attr($innerElement['textTypeWriterTwo'] ?? '');
    $textTypeWriterThree = esc_attr($innerElement['textTypeWriterThree'] ?? '');
    $textTypeWriterFour = esc_attr($innerElement['textTypeWriterFour'] ?? '');
?>
    <?php
    $widthTitle = $innerElement['widthTitleBlock'] ?? '100%';
    $widthCustomTitle = $innerElement['widthCustomTitleBlock'] ?? '100';
    $opacity = $innerElement['opacity'] ?? 1;
    ?>

    <div
        style="width: <?php echo esc_attr($widthTitle) === 'custom' ? esc_attr($widthCustomTitle) . '%' : esc_attr($widthTitle); ?>; opacity: <?php echo esc_attr($opacity); ?>"
        class="content-title-div <?php echo esc_attr($desktopClass); ?> <?php echo esc_attr($tabletClass); ?> <?php echo esc_attr($mobileClass); ?>">
        <<?php echo esc_attr($tag); ?>
            class="title-slide-div"
            <?php
            $link_start = '';
            $link_end = '';
            $target = '_self';
            $rel = 'follow';
            if ($innerElement['textLink'] === 'link' && !empty($innerElement['linkUrl'])) {
                if (!empty($innerElement['linkTarget'])) {
                    $target = esc_attr($innerElement['linkTarget']);
                }
                if ($innerElement['linkRel'] === 'nofollow') {
                    $rel = 'nofollow';
                }
                $link_start = '<a style="text-decoration:none;color:inherit;" href="' . esc_url($innerElement['linkUrl']) . '" target="' . $target . '" rel="' . $rel . '">';
                $link_end = '</a>';
            } elseif ($innerElement['textLink'] === 'scroll-below') {
                $link_start = '<a style="text-decoration:none;color:inherit;" href="#" onclick="window.scrollBy({ top: window.innerHeight, behavior: \'smooth\' }); return false;">';
                $link_end = '</a>';
            } elseif ($innerElement['textLink'] === 'scroll-to-id' && !empty($innerElement['scrollToId'])) {
                $link_start = '<a style="text-decoration:none;color:inherit;" href="#" onclick="document.getElementById(\'' . esc_attr($innerElement['scrollToId']) . '\').scrollIntoView({ behavior: \'smooth\' }); return false;">';
                $link_end = '</a>';
            }
            ?>
            style="<?php echo esc_attr($stylesTitle); ?>"
            data-font-family="<?php echo esc_attr($fontFamily); ?>"
            <?php if ($innerElement['textLink'] === 'link') : ?>
            href="<?php echo esc_url($innerElement['linkUrl']); ?>"
            <?php elseif ($innerElement['textLink'] === 'scroll-below' || $innerElement['textLink'] === 'scroll-to-id') : ?>
            onclick="
                                                        <?php if ($innerElement['textLink'] === 'scroll-below') : ?>
                                                            window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                                                        <?php elseif ($innerElement['textLink'] === 'scroll-to-id') : ?>
                                                            var targetElement = document.getElementById('<?php echo esc_js($innerElement['scrollToId']); ?>');
                                                            if (targetElement) {
                                                                targetElement.scrollIntoView({ behavior: 'smooth' });
                                                            }
                                                        <?php endif; ?>
                                                        return false;
                                                    "
            <?php endif; ?>
            <?php if ($innerElement['effectIn'] !== 'none') : ?>
            data-effect-in="<?php echo esc_attr($innerElement['effectIn'] ?? 'none'); ?>"
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
            data-stagger="<?php echo esc_attr($innerElement['stagger'] ?? 80); ?>"
            data-effect-split="<?php echo esc_attr($innerElement['textSplitEffect'] ?? ''); ?>"
            data-direction-block="<?php echo esc_attr($innerElement['directionBlock'] ?? 'right'); ?>"
            data-color-block="<?php echo esc_attr($innerElement['colorBlockEffect'] ?? '#000'); ?>"
            data-rotate-in-from="<?php echo esc_attr($innerElement['rotateFrom'] ?? 0); ?>"
            data-rotate-in-to="<?php echo esc_attr($innerElement['rotateTo'] ?? 0); ?>"
            data-rotate-x-in-from="<?php echo esc_attr($innerElement['rotateXFrom'] ?? 0); ?>"
            data-rotate-x-in-to="<?php echo esc_attr($innerElement['rotateXTo'] ?? 0); ?>"
            data-rotate-y-in-from="<?php echo esc_attr($innerElement['rotateYFrom'] ?? 0); ?>"
            data-rotate-y-in-to="<?php echo esc_attr($innerElement['rotateYTo'] ?? 0); ?>"
            data-scale-in-from="<?php echo esc_attr($innerElement['scaleFrom'] ?? 0); ?>"
            data-scale-in-to="<?php echo esc_attr($innerElement['scaleTo'] ?? 1); ?>"
            data-skew-x-from="<?php echo esc_attr($innerElement['skewXFrom'] ?? 0); ?>"
            data-skew-x-to="<?php echo esc_attr($innerElement['skewXTo'] ?? 1); ?>"
            data-skew-y-from="<?php echo esc_attr($innerElement['skewYFrom'] ?? 0); ?>"
            data-skew-y-to="<?php echo esc_attr($innerElement['skewYTo'] ?? 1); ?>"
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
            <?php endif; ?>>
            <?php echo $link_start; ?>
            <?php echo $innerElement['content']; ?>
            <?php echo $link_end; ?>
            <?php if ($innerElement['enableTypeWriter']) : ?>
                <span class="typewrite" data-period="2000" data-break-cursor="<?php echo esc_attr($innerElement['breakCursor']); ?>" data-speed-cursor="<?php echo esc_attr($innerElement['speedCursor']); ?>" data-type='[
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
<?php } ?>