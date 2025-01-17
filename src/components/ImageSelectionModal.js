import React, { useState, lazy, Suspense } from "react";
import { Modal, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
const PhotoCameraIcon = lazy(() => import('@mui/icons-material/PhotoCamera'));
const CloudQueueIcon = lazy(() => import('@mui/icons-material/CloudQueue'));

const ImageSelectionModal = ({ onClose, onSelect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [primaryCategories] = useState([
    { label: __('Images',"slider-future"), icon: <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}><PhotoCameraIcon /></Suspense> },
    { label: __('Objects',"slider-future"), icon: <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}><CloudQueueIcon /></Suspense> }
  ]);
  const [selectedPrimaryCategory, setSelectedPrimaryCategory] = useState(__('Images',"slider-future"));
  const [categories] = useState([__('All',"slider-future"), __('City',"slider-future"), __('Sport',"slider-future"),__('People',"slider-future"),__('Cover',"slider-future")]);
  const [selectedCategory, setSelectedCategory] = useState(__('All',"slider-future"));
  const [images] = useState([
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2024/12/slider-layer-1.webp",
      alt: "",
      title: "Woman pointing",
      category: __('People',"slider-future"),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2024/12/slider-layer-2.webp",
      alt: "",
      title: "Woman listening to music",
      category: __('People',"slider-future"),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-3.webp",
      alt: "",
      title: "Woman fashion",
      category: __('People',"slider-future"),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-4.webp",
      alt: "",
      title: "Woman young",
      category: __('People',"slider-future"),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-5.webp",
      alt: "",
      title: "Woman elegant",
      category: __('People',"slider-future"),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-6.webp",
      alt: "",
      title: "Man style",
      category: __('People',"slider-future"),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2024/12/disk-cover.webp",
      alt: "",
      title: "Disc Cover",
      category: __('Cover',"slider-future"),
    },
  ]);

  

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const filteredImages = selectedPrimaryCategory === __("Images", "slider-future")
    ? selectedCategory === __("All", "slider-future")
      ? images.filter((image) => image.category !== __('Cover',"slider-future"))
      : images.filter((image) => image.category === selectedCategory && image.category !== __('Cover',"slider-future"))
    : images.filter((image) => image.category === __('Cover',"slider-future"));

  const handleSelect = async (image) => {
    setIsLoading(true);
    try {
      await onSelect(image); // Supponendo che onSelect gestisca l'operazione asincrona
    } catch (error) {
      console.error(error);
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
            <h2>{__('SF',"slider-future")}</h2>
          </div>
          {primaryCategories.map((category, index) => (
            <div key={index} className="primary-category">
              <Button
                isSecondary
                onClick={() => {
                  setSelectedPrimaryCategory(category.label);
                  setSelectedCategory(__('All',"slider-future")); // Resetta la sottocategoria quando si cambia la categoria primaria
                }}
                className={selectedPrimaryCategory === category.label ? "button-cat-modal active" : "button-cat-modal"}
              >
                {category.icon} {category.label}
              </Button>
              {selectedPrimaryCategory === category.label && (
                <div className="subcategory-navigator">
                  {category.label === __("Images", "slider-future") && (
                    categories.filter(subcategory => subcategory !== __('Cover',"slider-future")).map((subcategory, subIndex) => (
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
                  {category.label === __("Objects", "slider-future") && (
                    <Button
                      isSecondary
                      onClick={() => setSelectedCategory(__('Cover',"slider-future"))}
                      className={selectedCategory === __('Cover',"slider-future") ? "button-cat-modal active" : "button-cat-modal"}
                    >
                      {__('Cover',"slider-future")}
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
                {__("Select", "slider-future")}
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
              {__("© Copyright & License Info", "slider-future")}
            </Button>
          </div>
        </div>
      </div>
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-message">
            <p>{__("Please wait a moment...", "slider-future")}</p>
          </div>
        </div>
      )}
      {isLicenseModalOpen && (
        <Modal
          title={__("Copyright & Licensing - Slider Future Library", "slider-future")}
          onRequestClose={() => setIsLicenseModalOpen(false)}
          className="license-modal"
        >
          <div className="license-content">
            <p>
              {__(
                "Here you will find all the licenses for images and objects in detail.",
                "slider-future"
              )}
            </p>
            {/* Aggiungi ulteriori dettagli sulle licenze qui */}
            <Button isSecondary 
            onClick={() => setIsLicenseModalOpen(false)}
            className="button-close-modal-license"
            >
              {__("Close", "slider-future")}
            </Button>
          </div>
        </Modal>
      )}
    </Modal>
  );
};

export default ImageSelectionModal;