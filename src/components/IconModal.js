import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState } from 'react';
import { Modal, Button, TextControl } from '@wordpress/components';

const categories = {
    communication: {
        solid: [
          'fa-solid fa-phone',             // Phone
          'fa-solid fa-envelope',          // Envelope
          'fa-solid fa-comments',          // Comments
          'fa-solid fa-video',             // Video
          'fa-solid fa-volume-up',         // Volume Up
          'fa-solid fa-volume-down',       // Volume Down
          'fa-solid fa-volume-mute',       // Volume Mute
          'fa-solid fa-microphone',        // Microphone
          'fa-solid fa-microphone-alt',    // Microphone Alt
          'fa-solid fa-headphones',        // Headphones
          'fa-solid fa-signal',            // Signal
          'fa-solid fa-rss',               // RSS
          'fa-solid fa-paper-plane',       // Paper Plane
          'fa-solid fa-chat',              // Chat
          'fa-solid fa-broadcast-tower',   // Broadcast Tower
          'fa-solid fa-cogs',              // Cogs (Settings)
          'fa-solid fa-user-cog',          // User Cog (Settings for user)
          'fa-solid fa-tachometer-alt',    // Tachometer (Dashboard)
          'fa-solid fa-bell',              // Bell (Notifications)
          'fa-solid fa-calendar-alt',      // Calendar
        ],
        brands: [
          'fa-brands fa-skype',            // Skype
          'fa-brands fa-telegram',         // Telegram
          'fa-brands fa-whatsapp',         // WhatsApp
          'fa-brands fa-viber',            // Viber
          'fa-brands fa-signal',           // Signal
          'fa-brands fa-line',             // LINE
          'fa-brands fa-discord',          // Discord
          'fa-brands fa-slack',            // Slack
          'fa-brands fa-messenger',        // Messenger
          'fa-brands fa-weixin',           // WeChat
          'fa-brands fa-zoom',             // Zoom
          'fa-brands fa-twitch',           // Twitch
          'fa-brands fa-mastodon',         // Mastodon
          'fa-brands fa-icq',              // ICQ
          'fa-brands fa-fax',              // Fax
          'fa-brands fa-drift',            // Drift
          'fa-brands fa-rocketchat',       // Rocket.Chat
          'fa-brands fa-google-chat',      // Google Chat
          'fa-brands fa-foursquare',       // Foursquare
        ],
      },
      social: {
        solid: [
          'fa-solid fa-user',             // User
          'fa-solid fa-users',            // Users
          'fa-solid fa-share',            // Share
          'fa-solid fa-heart',            // Heart
          'fa-solid fa-thumbs-up',        // Thumbs Up
          'fa-solid fa-thumbs-down',      // Thumbs Down
          'fa-solid fa-plus',             // Plus
          'fa-solid fa-minus',            // Minus
          'fa-solid fa-reply',            // Reply
          'fa-solid fa-retweet',          // Retweet
          'fa-solid fa-comments',         // Comments
          'fa-solid fa-bullhorn',         // Bullhorn
          'fa-solid fa-star',             // Star
          'fa-solid fa-gift',             // Gift
          'fa-solid fa-crown',            // Crown
          'fa-solid fa-award',            // Award
          'fa-solid fa-trophy',           // Trophy
          'fa-solid fa-medal',            // Medal
        ],
        brands: [
          'fa-brands fa-facebook',        // Facebook
          'fa-brands fa-twitter',         // Twitter
          'fa-brands fa-instagram',       // Instagram
          'fa-brands fa-linkedin',        // LinkedIn
          'fa-brands fa-youtube',         // YouTube
          'fa-brands fa-tiktok',          // TikTok
          'fa-brands fa-pinterest',       // Pinterest
          'fa-brands fa-snapchat',        // Snapchat
          'fa-brands fa-reddit',          // Reddit
          'fa-brands fa-whatsapp',        // WhatsApp
          'fa-brands fa-github',          // GitHub
          'fa-brands fa-dribbble',        // Dribbble
          'fa-brands fa-behance',         // Behance
          'fa-brands fa-medium',          // Medium
          'fa-brands fa-tumblr',          // Tumblr
          'fa-brands fa-vk',              // VK
          'fa-brands fa-line',            // LINE
          'fa-brands fa-flickr',          // Flickr
          'fa-brands fa-dailymotion',     // Dailymotion
          'fa-brands fa-mastodon',        // Mastodon
        ],
      },
      design: {
        solid: [
          'fa-solid fa-paint-brush',       // Paint Brush
          'fa-solid fa-palette',           // Palette
          'fa-solid fa-image',             // Image
          'fa-solid fa-camera',            // Camera
          'fa-solid fa-draw-polygon',      // Draw Polygon
          'fa-solid fa-pen',               // Pen
          'fa-solid fa-edit',              // Edit
          'fa-solid fa-swatchbook',        // Swatchbook
          'fa-solid fa-circle',            // Circle
          'fa-solid fa-square',            // Square
          'fa-solid fa-star',              // Star
          'fa-solid fa-arrow-right',       // Arrow Right
          'fa-solid fa-arrow-left',        // Arrow Left
          'fa-solid fa-arrow-up',          // Arrow Up
          'fa-solid fa-arrow-down',        // Arrow Down
          'fa-solid fa-upload',            // Upload
          'fa-solid fa-download',          // Download
        ],
        brands: [
          'fa-brands fa-sketch',           // Sketch
          'fa-brands fa-figma',            // Figma
          'fa-brands fa-invision',         // InVision
        ],
      },
      accessibility: {
        solid: [
          'fa-solid fa-universal-access',   // Universal Access
          'fa-solid fa-wheelchair',         // Wheelchair
          'fa-solid fa-blind',              // Blind
          'fa-solid fa-deaf',               // Deaf
          'fa-solid fa-sign-language',      // Sign Language
          'fa-solid fa-volume-up',          // Volume Up
          'fa-solid fa-volume-down',        // Volume Down
          'fa-solid fa-volume-mute',        // Volume Mute
          'fa-solid fa-headphones',         // Headphones
          'fa-solid fa-keyboard',           // Keyboard
          'fa-solid fa-mouse',              // Mouse
          'fa-solid fa-braille',            // Braille
          'fa-solid fa-dna',                // DNA
          'fa-solid fa-heartbeat',          // Heartbeat
          'fa-solid fa-thermometer',        // Thermometer
          'fa-solid fa-ambulance',          // Ambulance
          'fa-solid fa-stethoscope',        // Stethoscope
          'fa-solid fa-capsules',           // Capsules
        ],
        brands: [
          'fa-brands fa-accessible-icon',   // Accessible Icon
          'fa-brands fa-audible',           // Audible
          'fa-brands fa-fort-awesome',      // Fort Awesome
          'fa-brands fa-font-awesome',      // Font Awesome
          'fa-brands fa-sass',              // Sass
        ],
      },
      alert: {
        solid: [
          'fa-solid fa-exclamation-triangle', // Warning Triangle
          'fa-solid fa-exclamation-circle',   // Warning Circle
          'fa-solid fa-info-circle',          // Info Circle
          'fa-solid fa-info',                 // Info
          'fa-solid fa-bell',                 // Bell
          'fa-solid fa-bell-slash',           // Bell Slash
          'fa-solid fa-envelope',             // Envelope
          'fa-solid fa-envelope-open',        // Envelope Open
          'fa-solid fa-bomb',                 // Bomb
          'fa-solid fa-fire',                 // Fire
          'fa-solid fa-skull-crossbones',     // Skull and Crossbones
          'fa-solid fa-hand-paper',           // Hand Paper
          'fa-solid fa-warning',              // Warning
          'fa-solid fa-cross',                // Cross
        ],
        brands: [
          'fa-brands fa-google',              // Google
          'fa-brands fa-facebook',            // Facebook
          'fa-brands fa-twitter',             // Twitter
          'fa-brands fa-instagram',           // Instagram
          'fa-brands fa-linkedin',            // LinkedIn
          'fa-brands fa-youtube',             // YouTube
          'fa-brands fa-reddit',              // Reddit
          'fa-brands fa-pinterest',           // Pinterest
          'fa-brands fa-whatsapp',            // WhatsApp
          'fa-brands fa-tiktok',              // TikTok
        ],
      },
      animals: {
        solid: [
          'fa-solid fa-dog',          // Dog
          'fa-solid fa-cat',          // Cat
          'fa-solid fa-fish',         // Fish
          'fa-solid fa-horse',        // Horse
          'fa-solid fa-paw',          // Paw Print
          'fa-solid fa-cow',          // Cow
          'fa-solid fa-kiwi-bird',    // Kiwi Bird
          'fa-solid fa-squirrel',     // Squirrel
        ],
        brands: [
          // Al momento, FontAwesome non include icone specifiche per gli animali nella sezione brands.
          // Tuttavia, puoi considerare l'uso di icone di marchi relativi ad animali o ecologia, se disponibili.
        ],
    },
    arrows: {
        solid: [
          'fa-solid fa-arrow-up',       // Arrow Up
          'fa-solid fa-arrow-down',     // Arrow Down
          'fa-solid fa-arrow-left',     // Arrow Left
          'fa-solid fa-arrow-right',    // Arrow Right
          'fa-solid fa-arrow-up-right-from-square', // Arrow Up Right
          'fa-solid fa-arrows-left-right', // Arrows Left Right
          'fa-solid fa-arrows',         // Arrows (all directions)
          'fa-solid fa-arrow-circle-up', // Arrow Circle Up
          'fa-solid fa-arrow-circle-down', // Arrow Circle Down
          'fa-solid fa-arrow-circle-left', // Arrow Circle Left
          'fa-solid fa-arrow-circle-right', // Arrow Circle Right
          'fa-solid fa-angle-up',       // Angle Up
          'fa-solid fa-angle-down',     // Angle Down
          'fa-solid fa-angle-left',     // Angle Left
          'fa-solid fa-angle-right',    // Angle Right
          'fa-solid fa-chevron-up',     // Chevron Up
          'fa-solid fa-chevron-down',   // Chevron Down
          'fa-solid fa-chevron-left',   // Chevron Left
          'fa-solid fa-chevron-right',  // Chevron Right
        ],
        brands: [
          // Attualmente, FontAwesome non include icone specifiche per le frecce nella sezione brands.
          // Le icone per le frecce sono generalmente nella sezione solid.
        ],
    },
    astronomy: {
        solid: [
          'fa-solid fa-sun',              // Sun
          'fa-solid fa-moon',             // Moon
          'fa-solid fa-star',             // Star
          'fa-solid fa-star-half',        // Star Half
          'fa-solid fa-cloud-moon',       // Cloud Moon
          'fa-solid fa-cloud-sun',        // Cloud Sun
          'fa-solid fa-satellite-dish',   // Satellite Dish
          'fa-solid fa-satellite',        // Satellite
          'fa-solid fa-rocket',           // Rocket
          'fa-solid fa-meteor',           // Meteor (not officially included, for example purpose)
          'fa-solid fa-space-shuttle',    // Space Shuttle
          'fa-solid fa-lightbulb',        // Lightbulb (for inspiration, not strictly astronomy)
        ],
        brands: [
          // Attualmente, FontAwesome non include icone specifiche per l'astronomia nella sezione brands.
          // Tuttavia, puoi considerare l'uso di icone di marchi associati all'astronomia o alla scienza, se disponibili.
        ],
    },
    automotive: {
        solid: [
          'fa-solid fa-car',               // Car
          'fa-solid fa-truck',             // Truck
          'fa-solid fa-bus',               // Bus
          'fa-solid fa-motorcycle',        // Motorcycle
          'fa-solid fa-bicycle',           // Bicycle
          'fa-solid fa-car-side',          // Car Side
          'fa-solid fa-tachometer-alt',    // Tachometer
          'fa-solid fa-gas-pump',          // Gas Pump
          'fa-solid fa-key',               // Key
          'fa-solid fa-wrench',            // Wrench
          'fa-solid fa-tools',             // Tools
          'fa-solid fa-car-crash',         // Car Crash
          'fa-solid fa-car-battery',       // Car Battery
          'fa-solid fa-parking',           // Parking
        ],
        brands: [
        ],
      },
      buildings: {
        solid: [
          'fa-solid fa-building',           // Building
          'fa-solid fa-building-circle-check', // Building with Check
          'fa-solid fa-building-circle-xmark', // Building with Xmark
          'fa-solid fa-building-columns',    // Building Columns
          'fa-solid fa-building-lock',       // Building Lock
          'fa-solid fa-building-user',       // Building User
          'fa-solid fa-house',               // House
          'fa-solid fa-house-chimney',       // House with Chimney
          'fa-solid fa-house-circle-check',  // House with Circle Check
          'fa-solid fa-house-circle-xmark',  // House with Circle Xmark
          'fa-solid fa-house-laptop',        // House with Laptop
          'fa-solid fa-house-medical',       // House with Medical Cross
          'fa-solid fa-school',              // School
          'fa-solid fa-church',              // Church
          'fa-solid fa-mosque',              // Mosque
          'fa-solid fa-synagogue',           // Synagogue
          'fa-solid fa-warehouse',           // Warehouse
          'fa-solid fa-hospital',            // Hospital
          'fa-solid fa-office-building',     // Office Building
        ],
        brands: [
          // FontAwesome non include specifiche icone di edifici per marchi nella sezione brands.
          // Tuttavia, puoi considerare l'uso di icone di marchi associati all'edilizia o architettura, se disponibili.
        ],
      },
      business: {
        solid: [
          'fa-solid fa-briefcase',          // Briefcase
          'fa-solid fa-chart-line',         // Line Chart
          'fa-solid fa-dollar-sign',        // Dollar Sign
          'fa-solid fa-file-invoice-dollar',// Invoice
          'fa-solid fa-suitcase',           // Suitcase
          'fa-solid fa-handshake',          // Handshake
          'fa-solid fa-building',           // Building
          'fa-solid fa-user-tie',           // User with Tie
          'fa-solid fa-wallet',             // Wallet
          'fa-solid fa-credit-card',        // Credit Card
          'fa-solid fa-money-bill-wave',    // Money Bill
          'fa-solid fa-calculator',         // Calculator
          'fa-solid fa-balance-scale',      // Balance Scale
          'fa-solid fa-chart-bar',          // Bar Chart
          'fa-solid fa-clipboard',          // Clipboard
          'fa-solid fa-clipboard-list',     // Clipboard List
          'fa-solid fa-fax',                // Fax Machine
          'fa-solid fa-file-contract',      // File Contract
          'fa-solid fa-piggy-bank',         // Piggy Bank
          'fa-solid fa-coins',              // Coins
        ],
        brands: [
          'fa-brands fa-paypal',            // PayPal
          'fa-brands fa-cc-visa',           // Visa
          'fa-brands fa-cc-mastercard',     // MasterCard
          'fa-brands fa-cc-amex',           // American Express
          'fa-brands fa-cc-discover',       // Discover
          'fa-brands fa-cc-stripe',         // Stripe
          'fa-brands fa-google-wallet',     // Google Wallet
          'fa-brands fa-apple-pay',         // Apple Pay
          'fa-brands fa-amazon',            // Amazon
          'fa-brands fa-shopify',           // Shopify
        ],
      },
      coding: {
        solid: [
          'fa-solid fa-code',               // Code
          'fa-solid fa-code-branch',        // Code Branch
          'fa-solid fa-terminal',           // Terminal
          'fa-solid fa-laptop-code',        // Laptop with Code
          'fa-solid fa-file-code',          // File Code
          'fa-solid fa-server',             // Server
          'fa-solid fa-database',           // Database
          'fa-solid fa-bug',                // Bug
          'fa-solid fa-project-diagram',    // Project Diagram
          'fa-solid fa-keyboard',           // Keyboard
          'fa-solid fa-hdd',                // Hard Drive
          'fa-solid fa-cloud',              // Cloud
          'fa-solid fa-sync',               // Sync (for version control)
          'fa-solid fa-cogs',               // Cogs (Settings/Configurations)
          'fa-solid fa-lock',               // Lock (Security)
          'fa-solid fa-shield-alt',         // Shield (Security)
          'fa-solid fa-network-wired',      // Network Wired
          'fa-solid fa-file-export',        // File Export (Deployment)
          'fa-solid fa-desktop',            // Desktop
          'fa-solid fa-mobile-alt',         // Mobile Device
        ],
        brands: [
          'fa-brands fa-github',            // GitHub
          'fa-brands fa-gitlab',            // GitLab
          'fa-brands fa-bitbucket',         // Bitbucket
          'fa-brands fa-stack-overflow',    // Stack Overflow
          'fa-brands fa-js',                // JavaScript
          'fa-brands fa-react',             // React
          'fa-brands fa-node-js',           // Node.js
          'fa-brands fa-python',            // Python
          'fa-brands fa-html5',             // HTML5
          'fa-brands fa-css3-alt',          // CSS3
          'fa-brands fa-java',              // Java
          'fa-brands fa-docker',            // Docker
          'fa-brands fa-aws',               // AWS
          'fa-brands fa-linux',             // Linux
          'fa-brands fa-angular',           // Angular
          'fa-brands fa-vuejs',             // Vue.js
          'fa-brands fa-php',               // PHP
          'fa-brands fa-sass',              // SASS
          'fa-brands fa-npm',               // npm
          'fa-brands fa-visual-studio',     // Visual Studio
        ],
      },
      communication: {
        solid: [
          'fa-solid fa-phone',              // Phone
          'fa-solid fa-envelope',           // Envelope
          'fa-solid fa-comments',           // Comments
          'fa-solid fa-comment-dots',       // Comment Dots
          'fa-solid fa-sms',                // SMS
          'fa-solid fa-inbox',              // Inbox
          'fa-solid fa-paper-plane',        // Paper Plane
          'fa-solid fa-bell',               // Bell (Notification)
          'fa-solid fa-bullhorn',           // Bullhorn (Announcement)
          'fa-solid fa-microphone',         // Microphone
          'fa-solid fa-microphone-alt',     // Microphone Alt
          'fa-solid fa-headset',            // Headset
          'fa-solid fa-video',              // Video Call
          'fa-solid fa-wifi',               // WiFi (Wireless Communication)
          'fa-solid fa-rss',                // RSS Feed
          'fa-solid fa-at',                 // At symbol (@)
          'fa-solid fa-mobile-alt',         // Mobile Phone
          'fa-solid fa-satellite-dish',     // Satellite Dish
          'fa-solid fa-signal',             // Signal Strength
          'fa-solid fa-tty',                // TTY (Teletype)
        ],
        brands: [
          'fa-brands fa-whatsapp',          // WhatsApp
          'fa-brands fa-facebook-messenger',// Facebook Messenger
          'fa-brands fa-telegram',          // Telegram
          'fa-brands fa-slack',             // Slack
          'fa-brands fa-discord',           // Discord
          'fa-brands fa-weixin',            // WeChat
          'fa-brands fa-skype',             // Skype
          'fa-brands fa-viber',             // Viber
          'fa-brands fa-snapchat',          // Snapchat
          'fa-brands fa-linkedin',          // LinkedIn
          'fa-brands fa-twitter',           // Twitter
          'fa-brands fa-instagram',         // Instagram (Direct Messaging)
          'fa-brands fa-facebook',          // Facebook
          'fa-brands fa-reddit',            // Reddit
          'fa-brands fa-google',            // Google (Gmail)
          'fa-brands fa-twitch',            // Twitch
          'fa-brands fa-youtube',           // YouTube
          'fa-brands fa-signal',            // Signal
          'fa-brands fa-line',              // LINE
          'fa-brands fa-microsoft-teams',   // Microsoft Teams
        ],
      },
      editing: {
        solid: [
          'fa-solid fa-pen',                // Pen
          'fa-solid fa-pencil-alt',         // Pencil Alt
          'fa-solid fa-edit',               // Edit
          'fa-solid fa-eraser',             // Eraser
          'fa-solid fa-cut',                // Cut
          'fa-solid fa-copy',               // Copy
          'fa-solid fa-paste',              // Paste
          'fa-solid fa-undo',               // Undo
          'fa-solid fa-redo',               // Redo
          'fa-solid fa-trash',              // Trash
          'fa-solid fa-save',               // Save
          'fa-solid fa-folder-open',        // Open Folder
          'fa-solid fa-highlighter',        // Highlighter
          'fa-solid fa-marker',             // Marker
          'fa-solid fa-tint',               // Tint (Color Picker)
          'fa-solid fa-fill',               // Fill
          'fa-solid fa-fill-drip',          // Fill Drip
          'fa-solid fa-ruler',              // Ruler
          'fa-solid fa-ruler-combined',     // Ruler Combined
          'fa-solid fa-text-height',        // Text Height
          'fa-solid fa-text-width',         // Text Width
          'fa-solid fa-align-left',         // Align Left
          'fa-solid fa-align-center',       // Align Center
          'fa-solid fa-align-right',        // Align Right
          'fa-solid fa-align-justify',      // Align Justify
          'fa-solid fa-bold',               // Bold
          'fa-solid fa-italic',             // Italic
          'fa-solid fa-strikethrough',      // Strikethrough
          'fa-solid fa-underline',          // Underline
          'fa-solid fa-font',               // Font
          'fa-solid fa-heading',            // Heading
          'fa-solid fa-indent',             // Indent
          'fa-solid fa-outdent',            // Outdent
          'fa-solid fa-spell-check',        // Spell Check
          'fa-solid fa-image',              // Image (Image Editing)
          'fa-solid fa-crop',               // Crop
          'fa-solid fa-crop-alt',           // Crop Alt
        ],
        brands: [
          'fa-brands fa-google-drive',      // Google Drive (Docs, Sheets)
          'fa-brands fa-wordpress',         // WordPress (Editing Content)
          'fa-brands fa-blogger',           // Blogger
          'fa-brands fa-medium',            // Medium
          'fa-brands fa-dribbble',          // Dribbble (Design)
          'fa-brands fa-behance',           // Behance (Design)
        ],
      },
      files: {
        solid: [
          'fa-solid fa-file',                 // Generic File
          'fa-solid fa-file-alt',             // File Alt
          'fa-solid fa-file-archive',         // Archive File (ZIP)
          'fa-solid fa-file-audio',           // Audio File
          'fa-solid fa-file-code',            // Code File
          'fa-solid fa-file-excel',           // Excel File
          'fa-solid fa-file-image',           // Image File
          'fa-solid fa-file-pdf',             // PDF File
          'fa-solid fa-file-powerpoint',      // PowerPoint File
          'fa-solid fa-file-video',           // Video File
          'fa-solid fa-file-word',            // Word File
          'fa-solid fa-file-contract',        // Contract File
          'fa-solid fa-file-download',        // File Download
          'fa-solid fa-file-upload',          // File Upload
          'fa-solid fa-folder',               // Folder
          'fa-solid fa-folder-open',          // Open Folder
          'fa-solid fa-folder-plus',          // Add Folder
          'fa-solid fa-folder-minus',         // Remove Folder
          'fa-solid fa-file-medical',         // Medical File
          'fa-solid fa-file-signature',       // File Signature
          'fa-solid fa-copy',                 // Copy File
          'fa-solid fa-paste',                // Paste File
          'fa-solid fa-file-export',          // Export File
          'fa-solid fa-file-import',          // Import File
          'fa-solid fa-file-invoice',         // Invoice File
          'fa-solid fa-file-prescription',    // Prescription File
        ],
        brands: [
          'fa-brands fa-dropbox',             // Dropbox
          'fa-brands fa-google-drive',        // Google Drive
          'fa-brands fa-apple',               // Apple (iCloud Files)
          'fa-brands fa-windows',             // Windows (File Explorer)
          'fa-brands fa-github',              // GitHub (Code Files)
        ],
      },
      security: {
        solid: [
          'fa-solid fa-lock',                 // Lock
          'fa-solid fa-lock-open',            // Lock Open
          'fa-solid fa-shield-alt',           // Shield
          'fa-solid fa-key',                  // Key
          'fa-solid fa-user-shield',          // User Shield
          'fa-solid fa-shield-virus',         // Shield Virus
          'fa-solid fa-fingerprint',          // Fingerprint
          'fa-solid fa-user-secret',          // User Secret
          'fa-solid fa-shield',               // Shield (Generic)
          'fa-solid fa-exclamation-triangle', // Warning (Alert)
          'fa-solid fa-unlock',               // Unlock
          'fa-solid fa-camera',               // Camera (Surveillance)
          'fa-solid fa-door-closed',          // Door Closed
          'fa-solid fa-door-open',            // Door Open
          'fa-solid fa-user-lock',            // User Lock
          'fa-solid fa-bell-slash',           // Bell Slash (Mute Alerts)
          'fa-solid fa-shield-alt',           // Shield Alt
          'fa-solid fa-virus-slash',          // Virus Slash
          'fa-solid fa-shield-halved',        // Half Shield (Partial Security)
          'fa-solid fa-eye-slash',            // Hide (Privacy)
        ],
        brands: [
          'fa-brands fa-expeditedssl',        // SSL
          'fa-brands fa-cc-stripe',           // Stripe (Secure Payments)
          'fa-brands fa-cloudflare',          // Cloudflare (Web Security)
          'fa-brands fa-cc-mastercard',       // Mastercard (Secure Payments)
        ],
      },
      
  // Aggiungi altre categorie e icone se necessario
};


// Inizializza la categoria "all"
categories.all = {
    solid: [],
    brands: []
  };
  
  // Popola "categories.all" con tutte le icone
  Object.keys(categories).forEach(category => {
    if (category !== 'all') {
      const subCategories = categories[category];
      Object.keys(subCategories).forEach(subCategory => {
        categories.all[subCategory].push(...subCategories[subCategory]);
      });
    }
  });
  

  const IconModal = ({ isOpen, onClose, onSelectIcon }) => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedSubCategory, setSelectedSubCategory] = useState('solid');
    const [searchTerm, setSearchTerm] = useState('');
  
    // Funzione per gestire la ricerca
    const handleSearchChange = (value) => {
      setSearchTerm(value.toLowerCase());
    };
  
    const filteredIcons = selectedCategory === 'all'
      ? categories.all[selectedSubCategory].filter(iconClass =>
          iconClass.toLowerCase().includes(searchTerm)
        )
      : categories[selectedCategory][selectedSubCategory].filter(iconClass =>
          iconClass.toLowerCase().includes(searchTerm)
        );

  return (
    <Modal title="Select Icon" onRequestClose={onClose} isOpen={isOpen} className='icon-modal'>
      <div className="icon-modal-container">
        <div className="icon-modal-sidebar">
          <h3>Categories</h3>
          <Button
            isPrimary={selectedCategory === 'all'}
            onClick={() => {
              setSelectedCategory('all');
              setSelectedSubCategory('solid');
            }}
          >
            All
          </Button>
          <Button
            isPrimary={selectedCategory === 'communication'}
            onClick={() => {
              setSelectedCategory('communication');
              setSelectedSubCategory('solid');
            }}
          >
            Communication
          </Button>
          <Button
            isPrimary={selectedCategory === 'social'}
            onClick={() => {
              setSelectedCategory('social');
              setSelectedSubCategory('solid');
            }}
          >
            Social
          </Button>
          <Button
            isPrimary={selectedCategory === 'design'}
            onClick={() => {
              setSelectedCategory('design');
              setSelectedSubCategory('solid');
            }}
          >
            Design
          </Button>
          <Button
            isPrimary={selectedCategory === 'accessibility'}
            onClick={() => {
              setSelectedCategory('accessibility');
              setSelectedSubCategory('solid');
            }}
          >
            Accessibility
          </Button>
          <Button
            isPrimary={selectedCategory === 'alert'}
            onClick={() => {
              setSelectedCategory('alert');
              setSelectedSubCategory('solid');
            }}
          >
            Alert
          </Button>
          <Button
            isPrimary={selectedCategory === 'animals'}
            onClick={() => {
              setSelectedCategory('animals');
              setSelectedSubCategory('solid');
            }}
          >
            Animals
          </Button>
          <Button
            isPrimary={selectedCategory === 'arrows'}
            onClick={() => {
              setSelectedCategory('arrows');
              setSelectedSubCategory('solid');
            }}
          >
            Arrows
          </Button>
          <Button
            isPrimary={selectedCategory === 'astronomy'}
            onClick={() => {
              setSelectedCategory('astronomy');
              setSelectedSubCategory('solid');
            }}
          >
            Astronomy
          </Button>
          <Button
            isPrimary={selectedCategory === 'automotive'}
            onClick={() => {
              setSelectedCategory('automotive');
              setSelectedSubCategory('solid');
            }}
          >
            Automotive
          </Button>
          <Button
            isPrimary={selectedCategory === 'buildings'}
            onClick={() => {
              setSelectedCategory('buildings');
              setSelectedSubCategory('solid');
            }}
          >
            Buildings
          </Button>
          {/* Aggiungi altri bottoni per le categorie */}
        
        <Button
            isPrimary={selectedCategory === 'business'}
            onClick={() => {
              setSelectedCategory('business');
              setSelectedSubCategory('solid');
            }}
          >
            Business
          </Button>
          <Button
            isPrimary={selectedCategory === 'coding'}
            onClick={() => {
              setSelectedCategory('coding');
              setSelectedSubCategory('solid');
            }}
          >
            Coding
          </Button>
          <Button
            isPrimary={selectedCategory === 'communication'}
            onClick={() => {
              setSelectedCategory('communication');
              setSelectedSubCategory('solid');
            }}
          >
            Communication
          </Button>
          <Button
            isPrimary={selectedCategory === 'editing'}
            onClick={() => {
              setSelectedCategory('editing');
              setSelectedSubCategory('solid');
            }}
          >
            Editing
          </Button>
          <Button
            isPrimary={selectedCategory === 'files'}
            onClick={() => {
              setSelectedCategory('files');
              setSelectedSubCategory('solid');
            }}
          >
            Files
          </Button>
          <Button
            isPrimary={selectedCategory === 'security'}
            onClick={() => {
              setSelectedCategory('security');
              setSelectedSubCategory('solid');
            }}
          >
            Security
          </Button>
          {/* Aggiungi altri bottoni per le categorie */}
        </div>
        <div className="icon-modal-main">
          <div className="icon-subcategory">
            <Button
              isPrimary={selectedSubCategory === 'solid'}
              onClick={() => setSelectedSubCategory('solid')}
            >
              Solid
            </Button>
            <Button
              isPrimary={selectedSubCategory === 'brands'}
              onClick={() => setSelectedSubCategory('brands')}
            >
              Brands
            </Button>
          </div>
          <TextControl
            label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search icons..."
          />
          <div className="icon-selection">
         
          {filteredIcons.length > 0 ? (
              filteredIcons.map((icon, index) => (
                <Button key={index} onClick={() => onSelectIcon(icon)}>
                  <i className={`fas ${icon} h-6 w-6`} />
                </Button>
              ))
            ) : (
              <p>No icons found</p>
            )}

          </div>
        </div>
      </div>
    </Modal>
  );
};

export default IconModal;

