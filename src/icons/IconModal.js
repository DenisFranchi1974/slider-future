import React, { useState } from 'react';
import { Modal, Button, TextControl } from '@wordpress/components';
import materialIcons from './materialIcons';
import { __ } from "@wordpress/i18n";

const categories = {

  action: [
    'AddAlarm',
    'Archive',
    'ArrowBack',
    'ArrowForward',
    'ArrowUpward',
    'Cancel',
    'Check',
    'CheckCircle',
    'Close',
    'Delete',
    'Edit',
    'Home',
    'Info',
    'KeyboardArrowDown',
    'KeyboardArrowUp',
    'MoreHoriz',
    'Redo',
    'Refresh',
    'Save',
    'Search',
    'Share',
  ],

  alerts: [
    'AddAlert',
    'Announcement',
    'Error',
    'ErrorOutline',
    'NotificationImportant',
    'WarningAmber',
    'Warning',
  ],
  
  communication: [
    'Phone',
    'Envelope',
    'Telegram',
    'Chat',
    'Message',
    'ContactMail',
    'ContactPhone',
    'Forum',
    'SupportAgent',
    'Sms',
    'Call',
    'Voicemail',
    'RssFeed',
    'WifiCalling',
    'Notifications',
    'PhoneForwarded',
    'PhoneInTalk',
    'PhoneLocked',
    'SpeakerPhone',
    'ImportContacts',
    'PermContactCalendar',
    'ForumOutlined',
    'SupportAgentOutlined',
    'VoiceChat',
    'MarkChatRead',
    'MarkChatUnread',
    'MarkEmailRead',
    'MarkEmailUnread',
    'MailOutline',
    'ChatBubble',
    'CallEnd',
    'PhonelinkRing',
    'PhonelinkSetup',
    'Contacts',
    'LocalPhone',
    'ImportExport',
    'PhoneAndroid',
    'Drafts',
    'ForumRounded',
    'AddIcCall',
    'EmailRounded',
    'Send',
    'Unsubscribe',
    'ContactSupport',
    'Contactless',
  ],
  device: [
    'BatteryChargingFull',
    'BatteryFull',
    'BatteryAlert',
    'DeviceHub',
    'Devices',
    'Keyboard',
    'Mouse',
    'PhoneAndroid',
    'PhoneIphone',
    'TabletAndroid',
    'TabletMac',
    'Tv',
  ],

  editor: [
    'AttachFile',
    'BorderColor',
    'Clear',
    'Code',
    'FormatBold',
    'FormatColorFill',
    'FormatItalic',
    'FormatUnderlined',
    'InsertDriveFile',
    'Link',
    'Publish',
    'Spellcheck',
  ],

  file: [
    'AttachFile',
    'CloudCircle',
    'CloudDone',
    'CloudDownload',
    'CloudOff',
    'CloudUpload',
    'CreateNewFolder',
    'Description',
    'FileCopy',
    'Folder',
    'FolderOpen',
    'InsertDriveFile',
  ],

  maps: [
    'AddLocation',
    'Checkroom',
    'LocalAirport',
    'LocalHospital',
    'Map',
    'Place',
    'Public',
    'SatelliteAlt',
    'Storefront',
    'Terrain',
    'Theaters',
    'Tram',
    'DetailsIcon'
  ],
  
  social: [
    'Facebook',
    'X',
    'Instagram',
    'LinkedIn',
    'Pinterest',
    'YouTube',
    'Reddit',
    'WhatsApp',
    'Discord',
    'GitHub',
    'ConnectWithoutContact',
    'StarIcon',
    'StarBorderIcon',
    'StarBorderPurple500Icon',
    'StarHalfIcon',
    'StarRateIcon',
    'StarsIcon',
  ],
  business: [
    'Business',
  'AccountBalance',
  'AttachMoney',
  'BarChart',
  'Assignment',
  'Report',
  'MonetizationOn',
  'Equalizer',
  'PieChart',
  'Inventory',
  'Security',
  'GroupAdd',
  'AccessAlarm',
  'AddBusiness',
  'Dashboard',
  'Domain',
  'PeopleAlt',
  'PowerSettingsNew',
  'Public',
  'Search',
  'Task',
  'EventNote',
  'Description',
  'Build',
  'Gavel',
  'RateReview',
  'BusinessCenter',
  'Construction',
  'TrendingUp',
  'PriceChange',
  'Feed',
  'Receipt',
  'EventAvailable',
  'Place',
  'People',
  'TravelExplore',
  'AssignmentTurnedIn',
  'SupervisorAccount',
  'NoteAdd',
  'History',
  'SentimentSatisfied',
  'ReceiptLong',
  'AttachFile',
  'Group',
  'TransferWithinAStation',
  'AddChart',
  'BarChartRounded',
  'Approval',
  ],

  media: [
    'Photo',
    'VideoLibrary',
    'Audiotrack',
    'Movie',
    'Theaters',
    'MusicNote',
    'LibraryMusic',
    'ImageAspectRatio',
    'Radio',
    'RssFeed',
    'CastForEducation',
    'Screenshot',
    'Slideshow',
    'Campaign',
    'AlternateEmail',
    'PictureAsPdf',
    'ScreenShare',
    'FiberNew',
    'Videocam',
    'PhotoCamera',
    'FilterDrama',
    'ViewCarousel',
    'Mms',
    'Web',
    'PhotoSizeSelectActual',
    'PictureInPicture',
    'FilterNone',
    'Fullscreen',
    'MusicOff',
    'AddAPhoto',
    'SaveAlt',
    'RecordVoiceOver',
    'Share',
    'Subscriptions',
    'RateReview',
    'PlaylistAdd',
    'CloudDownload',
    'VideoCall',
    'Language',
    'Description',
    'YouTube',
    'Speaker',
    'Equalizer',
    'ViewInAr',
    'ScreenRotation',
    'FormatQuote',
    'PlayCircleOutlineIcon',
    'AppleIcon',
    'AdbIcon',
    'AndroidIcon'
  ],

  arrows: [
    'ArrowForward',
    'ArrowBack',
    'ArrowUpward',
    'ArrowDownward',
    'ArrowLeft',
    'ArrowRight',
    'North',
    'South',
    'East',
    'West',
    'DoubleArrow',
    'SwapHoriz',
    'SwapVerticalCircle',
    'NorthEast',
    'NorthWest',
    'SouthEast',
    'SouthWest',
    'ArrowRightAlt',
    'ArrowDropDown',
    'ArrowDropUp',
    'ArrowForwardIos',
    'ArrowBackIos',
    'ArrowUpwardOutlined',
    'ArrowDownwardOutlined',
    'ArrowLeftOutlined',
    'ArrowRightOutlined',
    'NorthEastOutlined',
    'NorthWestOutlined',
    'SouthEastOutlined',
    'SouthWestOutlined',
    'ArrowRightAltOutlined',
    'ArrowDropDownOutlined',
    'ArrowDropUpOutlined',
    'ArrowForwardIosOutlined',
    'ArrowBackIosOutlined',
    'ArrowForwardRounded',
    'ArrowBackRounded',
    'ArrowUpwardRounded',
    'ArrowDownwardRounded',
    'ArrowLeftRounded',
    'ArrowRightRounded',
    'ArrowDropDownRounded',
    'ArrowDropUpRounded',
    'ArrowRightAltRounded',
    'ArrowForwardSharp',
    'ArrowBackSharp',
    'ArrowUpwardSharp',
    'ArrowDownwardSharp',
    'ArrowLeftSharp',
    'ArrowRightSharp',
    'ImportExport',
  ],

  time: [
    'AccessAlarm',
    'AccessTime',
    'Alarm',
    'AlarmAdd',
    'AlarmOff',
    'CalendarToday',
    'CalendarViewDay',
    'CalendarViewMonth',
    'CalendarViewWeek',
    'DateRange',
    'DateRangeOutlined',
    'History',
    'HourglassEmpty',
    'HourglassFull',
    'HourglassDisabled',
    'AccessTimeFilled',
    'Schedule',
    'Timer',
    'Timer10',
    'Timer3',
    'TimerOff',
    'Today',
    'WatchLater',
    'WatchLaterOutlined',
    'AccessAlarmOutlined',
    'Event',
    'EventNote',
    'FilterNone',
    'FilterTiltShift',
    'RecentActors',
    'SetMeal',
    'Update',
    'WorkOff',
    'WorkOutline',
    'EventAvailable',
    'EventBusy',
    'EventSeat',
    'Timeline',
    'ScheduleSend',
    'CheckCircle',
    'Clear',
    'AccessAlarmSharp',
    'AccessTimeSharp',
    'AlarmOn',
    'AlarmOffSharp',
    'CalendarMonth'
  ],
  
};

const IconModal = ({ isOpen, onClose, onSelectIcon }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (value) => {
    setSearchTerm(value.toLowerCase());
  };

  const filteredIcons = Object.keys(materialIcons)
    .filter((iconName) =>
      (selectedCategory === 'all' || categories[selectedCategory].includes(iconName)) &&
      iconName.toLowerCase().includes(searchTerm)
    )
    .map((iconName) => ({
      name: iconName,
      component: materialIcons[iconName],
    }));

  return (
    <Modal title="Select Icon" onRequestClose={onClose} isOpen={isOpen} className="icon-modal">
      <div className="icon-modal-search">
        <TextControl
          __nextHasNoMarginBottom
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search icons..."
        />
      </div>
      <div className="icon-modal-container">
        <div className="icon-modal-sidebar">
          <h3>{__('Categories','slider-future')}</h3>
          <Button
             variant={selectedCategory === 'all'}
            onClick={() => setSelectedCategory('all')}
          >
           {__('All','slider-future')}
          </Button>
          {Object.keys(categories).map((category) => (
            <Button
              key={category}
               variant={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        <div className="icon-selection">
          {filteredIcons.length > 0 ? (
            filteredIcons.map((icon, index) => (
              <Button key={index} onClick={() => onSelectIcon(icon.name)}>
                <icon.component style={{ height: '24px', width: '24px' }} />
              </Button>
            ))
          ) : (
            <p>{__('No icons found','slider-future')}</p>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default IconModal;