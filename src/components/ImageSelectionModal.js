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
  const [categories] = useState([__('All',"slider-future"), __('City',"slider-future"), __('Sport',"slider-future"),__('People',"slider-future"),__('Auto',"slider-future"),__('Nature',"slider-future"),__('Work',"slider-future")]);
  const [selectedCategory, setSelectedCategory] = useState(__('All',"slider-future"));
  const [images] = useState([
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-3-scaled.webp",
      alt: "",
      title: "Woman style",
      category: __('People',"slider-future"),
    },
    {
      url: "https://franchiwebdesign.com/wp-content/uploads/2024/12/slider-layer-2.webp",
      alt: "",
      title: "Woman listening to music",
      category: __('People',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-4-scaled.webp",
      alt: "",
      title: "Woman young",
      category: __('People',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2024/12/slider-layer-1.webp",
      alt: "",
      title: "Woman fashion",
      category: __('People',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-5.webp",
      alt: "",
      title: "Woman elegant",
      category: __('People',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slider-layer-6.webp",
      alt: "",
      title: "Man style",
      category: __('People',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-demo-free-2-1-3-scaled.webp",
      alt: "",
      title: "Path",
      category: __('Nature',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-demo-free-2-1-2-scaled.webp",
      alt: "",
      title: "Lake",
      category: __('Nature',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slide-future-demo-post-3-3.webp",
      alt: "",
      title: "Adventure",
      category: __('Nature',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slider-future-demo-posts-2-3.webp",
      alt: "",
      title: "Snow-capped mountain",
      category: __('Nature',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slider-future-demo-post-1-3-scaled.webp",
      alt: "",
      title: "Coast",
      category: __('Nature',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-demo-free-2-1-1-scaled.webp",
      alt: "",
      title: "Office",
      category: __('Work',"slider-future"),
    },
    {
      url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-car-1-scaled.webp",
      alt: "",
      title: "Jep",
      category: __('Auto',"slider-future"),
    },
  ]);

  

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const filteredImages = selectedPrimaryCategory === __("Images", "slider-future")
    ? selectedCategory === __("All", "slider-future")
      ? images.filter((image) => image.category !== __('Auto',"slider-future"))
      : images.filter((image) => image.category === selectedCategory && image.category !== __('Auto',"slider-future"))
    : images.filter((image) => image.category === __('Auto',"slider-future"));

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
                variant='secondary'
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
                    categories.filter(subcategory => subcategory !== __('Auto',"slider-future")).map((subcategory, subIndex) => (
                      <Button
                        key={subIndex}
                        variant='secondary'
                        onClick={() => setSelectedCategory(subcategory)}
                        className={selectedCategory === subcategory ? "button-cat-modal active" : "button-cat-modal"}
                      >
                        {subcategory}
                      </Button>
                    ))
                  )}
                  {category.label === __("Objects", "slider-future") && (
                    <Button
                      variant='secondary'
                      onClick={() => setSelectedCategory(__('Auto',"slider-future"))}
                      className={selectedCategory === __('Auto',"slider-future") ? "button-cat-modal active" : "button-cat-modal"}
                    >
                      {__('Auto',"slider-future")}
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
              <Button variant='secondary' onClick={() => handleSelect(image)}>
                {__("Select", "slider-future")}
              </Button>
              <h4>{image.title}</h4>
            </div>
          ))}
          <div className="copy-right-modal">
            <Button
              variant='secondary'
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
            <h3>{__('Terms of Using Images and Assets from the Library','slider-future')}</h3>
            <p>
              {__(
                "- All images and assets, including WebP formats, in our library have been optimized for online use. They have been compressed using advanced techniques and efficient formats to ensure fast loading times and improved website performance.",
                "slider-future"
              )}
            </p>
            <p>
              {__(
                "- The pictures are free for personal and even for commercial use.",
                "slider-future"
              )}
            </p>
            <p>
              {__(
                "- You can modify, copy and distribute the photos. All without asking for permission or setting a link to the source. So, attribution is not required.",
                "slider-future"
              )}
            </p>
            <p>
              {__(
                "- The only restriction is that identifiable people may not appear in a bad light or in a way that they may find offensive, unless they give their consent.",
                "slider-future"
              )}
            </p>
            <p>
              {__(
                "- The CC0 license was released by the non-profit organization Creative Commons (CC). Get more information about Creative Commons images and the license on the official license page.",
                "slider-future"
              )}
            </p>
            <p>
              {__(
                "- The images come from ",
                "slider-future"
              )}
              <a href="https://pxhere.com/" target="_blank" rel="noreferrer">{__("PxHere","slider-future")}</a>
              {__(" and ","slider-future")}
              <a href="https://stocksnap.io/" target="_blank" rel="noreferrer">{__("StockSnap","slider-future")}</a>
              {__(" under the ","slider-future")}
              <a href="https://creativecommons.org/publicdomain/zero/1.0/deed.en" target="_blank" rel="noreferrer">{__("CC0 Creative Commons license.","slider-future")}</a>
            </p>
            <Button variant='secondary' 
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