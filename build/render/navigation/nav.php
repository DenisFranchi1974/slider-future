<?php
function render_nav($navigationIcons, $navigationTablet, $navigationMobile, $sizeNav, $navColor)
{
?>

    <!-- Pulsante Avanti -->
    <div
        class="<?php echo esc_attr('swiper-button-next ' . (!$navigationTablet ? 'nav-tablet' : '') . ' ' . (!$navigationMobile ? 'nav-mobile' : '')); ?>">
        <?php if ($navigationIcons === 'default') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
            </svg>
        <?php elseif ($navigationIcons === 'one') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="m600-200-57-56 184-184H80v-80h647L544-704l56-56 280 280-280 280Z" />
            </svg>
        <?php elseif ($navigationIcons === 'two') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
            </svg>
        <?php elseif ($navigationIcons === 'three') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
            </svg>
        <?php elseif ($navigationIcons === 'four') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M400-280v-400l200 200-200 200Z" />
            </svg>
        <?php elseif ($navigationIcons === 'five') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
            </svg>
        <?php elseif ($navigationIcons === 'text') : ?>
            <span style="color: <?php echo esc_attr($navColor); ?>; font-size: <?php echo esc_attr($sizeNav . 'px'); ?>;">
                <?php echo esc_html(__('Next', 'cocoblocks')); ?>
            </span>
        <?php endif; ?>
    </div>

    <!-- Pulsante Precedente -->
    <div
        class="<?php echo esc_attr('swiper-button-prev ' . (!$navigationTablet ? 'nav-tablet' : '') . ' ' . (!$navigationMobile ? 'nav-mobile' : '')); ?>">
        <?php if ($navigationIcons === 'default') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
            </svg>
        <?php elseif ($navigationIcons === 'one') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M360-200 80-480l280-280 56 56-183 184h647v80H233l184 184-57 56Z" />
            </svg>
        <?php elseif ($navigationIcons === 'two') : ?>
            <svg style="transform: rotate(180deg);" xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
            </svg>
        <?php elseif ($navigationIcons === 'three') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M440-240 200-480l240-240 56 56-183 184 183 184-56 56Zm264 0L464-480l240-240 56 56-183 184 183 184-56 56Z" />
            </svg>
        <?php elseif ($navigationIcons === 'four') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M560-280 360-480l200-200v400Z" />
            </svg>
        <?php elseif ($navigationIcons === 'five') : ?>
            <svg xmlns="http://www.w3.org/2000/svg" height="<?php echo esc_attr($sizeNav . 'px'); ?>" viewBox="0 -960 960 960" width="<?php echo esc_attr($sizeNav . 'px'); ?>" fill="<?php echo esc_attr($navColor); ?>">
                <path d="M200-440v-80h560v80H200Z" />
            </svg>
        <?php elseif ($navigationIcons === 'text') : ?>
            <span style="color: <?php echo esc_attr($navColor); ?>; font-size: <?php echo esc_attr($sizeNav . 'px'); ?>;">
                <?php echo esc_html(__('Prev', 'cocoblocks')); ?>
            </span>
        <?php endif; ?>
    </div>

<?php
}
?>