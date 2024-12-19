import React, { useState } from "react";
import { Modal, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

import img1 from "../assets/images/1.jpg"; 
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/3.jpg";

const ImageSelectionModal = ({ onClose, onSelect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [primaryCategories] = useState([
    { label: __('Images','cocoblock'), icon: <PhotoCameraIcon /> },
    { label: __('Objects','cocoblock'), icon: <CloudQueueIcon /> }
  ]);
  const [selectedPrimaryCategory, setSelectedPrimaryCategory] = useState(__('Images','cocoblock'));
  const [categories] = useState([__('All','cocoblock'), __('City','cocoblock'), __('Sport','cocoblock'),__('People','cocoblock'),__('Cover','cocoblock')]);
  const [selectedCategory, setSelectedCategory] = useState(__('All','cocoblock'));
  const [images] = useState([
    {
      url: img1,
      alt: "",
      title: "Titolo 1",
      category:__('City','cocoblock'),
    },
    {
      url: img2,
      alt: "",
      title: "Titolo 2",
      category:  __('Sport','cocoblock'),
    },
    {
      url: img3,
      alt: "",
      title: "Titolo 3",
      category: __('City','cocoblock'),
    },
    {
      url: img4,
      alt: "",
      title: "Titolo 4",
      category: __('City','cocoblock'),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2024/12/slider-layer-1.webp",
      alt: "",
      title: "Woman pointing",
      category: __('People','cocoblock'),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2024/12/slider-layer-2.webp",
      alt: "",
      title: "Woman listening to music",
      category: __('People','cocoblock'),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2024/12/disk-cover.webp",
      alt: "",
      title: "Disc Cover",
      category: __('Cover','cocoblock'),
    },
  ]);

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const filteredImages = selectedPrimaryCategory === __("Images", "cocoblocks")
    ? selectedCategory === __("All", "cocoblocks")
      ? images.filter((image) => image.category !== __('Cover','cocoblock'))
      : images.filter((image) => image.category === selectedCategory && image.category !== __('Cover','cocoblock'))
    : images.filter((image) => image.category === __('Cover','cocoblock'));

  const handleSelect = async (image) => {
    setIsLoading(true);
    try {
      await onSelect(image); // Supponendo che onSelect gestisca l'operazione asincrona
    } catch (error) {
      console.error("Errore durante la selezione dell'immagine:", error);
    } finally {
      setIsLoading(false);
      onClose(); // Chiudi il modale dopo la selezione
    }
  };

  return (
    <Modal
      onRequestClose={onClose}
      className="modal-image-slider"
      isFullScreen={true}
    >
      <div className="modal-body">
        {/* Navigatore delle categorie */}
        <div className="category-navigator">
          <div className="logo-modal">
            <h2>{__('SF','cocoblock')}</h2>
          </div>
          {primaryCategories.map((category, index) => (
            <div key={index} className="primary-category">
              <Button
                isSecondary
                onClick={() => {
                  setSelectedPrimaryCategory(category.label);
                  setSelectedCategory(__('All','cocoblock')); // Resetta la sottocategoria quando si cambia la categoria primaria
                }}
                className={selectedPrimaryCategory === category.label ? "button-cat-modal active" : "button-cat-modal"}
              >
                {category.icon} {category.label}
              </Button>
              {selectedPrimaryCategory === category.label && (
                <div className="subcategory-navigator">
                  {category.label === __("Images", "cocoblocks") && (
                    categories.filter(subcategory => subcategory !== __('Cover','cocoblock')).map((subcategory, subIndex) => (
                      <Button
                        key={subIndex}
                        isSecondary
                        onClick={() => setSelectedCategory(subcategory)}
                        className={selectedCategory === subcategory ? "button-cat-modal active" : "button-cat-modal"}
                      >
                        {subcategory}
                      </Button>
                    ))
                  )}
                  {category.label === __("Objects", "cocoblocks") && (
                    <Button
                      isSecondary
                      onClick={() => setSelectedCategory(__('Cover','cocoblock'))}
                      className={selectedCategory === __('Cover','cocoblock') ? "button-cat-modal active" : "button-cat-modal"}
                    >
                      {__('Cover','cocoblock')}
                    </Button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="image-selection-modal">
          {/* Sezione delle immagini */}
          {filteredImages.map((image, index) => (
            <div key={index} className="image-item">
              <div className="image-item-inner">
                <img src={image.url} alt={image.alt} />
              </div>
              <Button isSecondary onClick={() => handleSelect(image)}>
                {__("Select", "text-domain")}
              </Button>
              <h4>{image.title}</h4>
            </div>
          ))}
          <div className="copy-right-modal">
            <Button
              isSecondary
              onClick={() => setIsLicenseModalOpen(true)}
              style={{
                textAlign: "left",
                background: "none",
                border: "none",
                color: "inherit",
                padding: 0,
              }}
            >
              {__("© Copyright & License Info", "cocoblocks")}
            </Button>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-message">
            <p>{__("Please wait a moment...", "text-domain")}</p>
          </div>
        </div>
      )}
      {isLicenseModalOpen && (
        <Modal
          title={__("Copyright & Licensing - Slider Future Library", "text-domain")}
          onRequestClose={() => setIsLicenseModalOpen(false)}
          className="license-modal"
        >
          <div className="license-content">
            <p>
              {__(
                "Here you will find all the licenses for images and objects in detail.",
                "text-domain"
              )}
            </p>
            {/* Aggiungi ulteriori dettagli sulle licenze qui */}
            <Button isSecondary 
            onClick={() => setIsLicenseModalOpen(false)}
            className="button-close-modal-license"
            >
              {__("Close", "text-domain")}
            </Button>
          </div>
        </Modal>
      )}
    </Modal>
  );
};

export default ImageSelectionModal;