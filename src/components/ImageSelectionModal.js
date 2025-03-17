import React, { useState, lazy, Suspense } from "react";
import { Modal, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";
const PhotoCameraIcon = lazy(() => import('@mui/icons-material/PhotoCamera'));
const CloudQueueIcon = lazy(() => import('@mui/icons-material/CloudQueue'));
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ImageSelectionModal = ({ onClose, onSelect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [primaryCategories] = useState([
    { label: __('Images', "slider-future"), icon: <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}><PhotoCameraIcon /></Suspense> },
    { label: __('Objects', "slider-future"), icon: <Suspense fallback={<div>{__('Loading...','slider-future')}</div>}><CloudQueueIcon /></Suspense> }
  ]);
  const [selectedPrimaryCategory, setSelectedPrimaryCategory] = useState(__('Images', "slider-future"));
  const [categories] = useState([__('All', "slider-future"), __('City', "slider-future"), __('Sport', "slider-future"),__('People', "slider-future"),__('Nature', "slider-future"),__('Food', "slider-future"),__('Work', "slider-future"),__('Music', "slider-future"),__('Shop', "slider-future")]);
  const [selectedCategory, setSelectedCategory] = useState(__('All', "slider-future"));
  const [images] = useState([
    // Lista di immagini
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
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/slider-future-testi-3.webp",
        alt: "",
        title: "Man",
        category: __('People',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/slider-future-testi-1.webp",
        alt: "",
        title: "Man",
        category: __('People',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/slider-future-testi-2.webp",
        alt: "",
        title: "Woman",
        category: __('People',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/spice-still-life-ingredients-star-anise-anise-turmeric-33.webp",
        alt: "",
        title: "Spices",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/aroma-food-pepper-spice-kitchen-salt-22.webp",
        alt: "",
        title: "Spices",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/aroma-food-herb-produce-drink-lemon-6.webp",
        alt: "",
        title: "Spices",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/spice-still-life-ingredients-star-anise-anise-turmeric-5.webp",
        alt: "",
        title: "Spices",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/wood-leaf-flower-aroma-food-cooking-4.webp",
        alt: "",
        title: "Spices",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/aroma-food-spice-kitchen-bazaar-cinnamon-3.webp",
        alt: "",
        title: "Spices",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/aroma-food-pepper-spice-kitchen-salt.webp",
        alt: "",
        title: "Spices",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/slider-future-carosel-scaled.webp",
        alt: "",
        title: "Dubai",
        category: __('City',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/slider-future-phone-demo.webp",
        alt: "",
        title: "Microphone",
        category: __('Music',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/music-light-technology-golden-microphone-micro.webp",
        alt: "",
        title: "Microphone",
        category: __('Music',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/music-light-technology-live-microphone-gadget.webp",
        alt: "",
        title: "Microphone",
        category: __('Music',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/music-technology-microphone-studio-lighting-amplifier.webp",
        alt: "",
        title: "Microphone",
        category: __('Music',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/music-light-technology-microphone-blue-lighting.webp",
        alt: "",
        title: "Microphone",
        category: __('Music',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/music-light-technology-white-star-concert.webp",
        alt: "",
        title: "Microphone",
        category: __('Music',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/music-light-technology-white-star-concert.webp",
        alt: "",
        title: "Bag",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/leather-purple-bag-fashion-pink-handbag.webp",
        alt: "",
        title: "Bag",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/leather-red-bag-pink-handbag-wallet.webp",
        alt: "",
        title: "Bag",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/leather-bag-fashion-handbag-brand-jewellery-518819-pxhere.com_.webp",
        alt: "",
        title: "Bag",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/leather-red-bag-handbag-brand-textile-826780-pxhere.com-1.webp",
        alt: "",
        title: "Bag",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/leather-bag-black-handbag-brand-briefcase-1093613-pxhere.com-1.webp",
        alt: "",
        title: "Bag",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/leather-bag-handbag-package-brand-briefcase-673931-pxhere.com-1.webp",
        alt: "",
        title: "Bag",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/vr.webp",
        alt: "",
        title: "Woman with VR",
        category: __('People',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/clock-2.webp",
        alt: "",
        title: "Clock",
        category: __('Tech',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/computer-2.webp",
        alt: "",
        title: "Computer",
        category: __('Tech',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-designs-home-demo-3-scaled.webp",
        alt: "",
        title: "Design",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-designs-home-demo-2-2-scaled.webp",
        alt: "",
        title: "Design",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-designs-home-demo-2-1-scaled.webp",
        alt: "",
        title: "Design",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-home-design-demo-1-scaled.webp",
        alt: "",
        title: "Design",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-relax-demo-1-1-scaled.webp",
        alt: "",
        title: "Pool",
        category: __('Nature',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/table-cutlery-silverware-wine-white-glass-slider-futurem-scaled.webp",
        alt: "",
        title: "Dish",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-relax-demo-2-scaled.webp",
        alt: "",
        title: "Design",
        category: __('Shop',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/apple-coffee-fruit-morning-cup-slider-future-scaled.webp",
        alt: "",
        title: "Dish",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/tree-grass-branch-plant-farm-leaf-slider-future-scaled.webp",
        alt: "",
        title: "Dish",
        category: __('Food',"slider-future"),
      },
      {
        url: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/raspberry-summer-ripe-dish-meal-food-slider-future-scaled.webp",
        alt: "",
        title: "Dish",
        category: __('Food',"slider-future"),
      },
    // altre immagini...
  ]);

  const objectSubcategories = [
    __("All", "slider-future"),
    __("Auto", "slider-future"),
    __("Tech", "slider-future")
  ];
  

    const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1); // Pagina corrente
  const imagesPerPage = 9; // Numero di immagini per pagina

  const filteredImages = selectedPrimaryCategory === __("Images", "slider-future")
  ? selectedCategory === __("All", "slider-future")
    ? images.filter((image) => image.category !== __('Auto', "slider-future"))
    : images.filter((image) => image.category === selectedCategory && image.category !== __('Auto', "slider-future"))
  : selectedCategory === __("All", "slider-future")
    ? images.filter((image) => objectSubcategories.includes(image.category))
    : images.filter((image) => image.category === selectedCategory);



  const totalPages = Math.ceil(filteredImages.length / imagesPerPage); // Numero totale di pagine

  // Calcola le immagini da mostrare per la pagina corrente
  const currentImages = filteredImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  const handleSelect = async (image) => {
    setIsLoading(true);
    try {
      await onSelect(image);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      onClose();
    }
  };

 

  return (
    <Modal onRequestClose={onClose} className="modal-image-slider" isFullScreen={true}>
      <div className="modal-body">
        <div className="category-navigator">
          <div className="logo-modal">
            <h2>{__('SF', "slider-future")}</h2>
          </div>
          {primaryCategories.map((category, index) => (
            <div key={index} className="primary-category">
              <Button
                variant='secondary'
                onClick={() => {
                  setSelectedPrimaryCategory(category.label);
                  setSelectedCategory(__('All', "slider-future"));
                }}
                className={selectedPrimaryCategory === category.label ? "button-cat-modal active" : "button-cat-modal"}
              >
                {category.icon} {category.label}
              </Button>
              {selectedPrimaryCategory === category.label && (
                <div className="subcategory-navigator">
                  {category.label === __("Images", "slider-future") && (
                    categories.filter(subcategory => subcategory !== __('Auto', "slider-future")).map((subcategory, subIndex) => (
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
  objectSubcategories.map((subcategory, subIndex) => (
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

                </div>
              )}
            </div>
          ))}
        </div>

        <div className="image-selection-modal">
          {/* Mostra le immagini per la pagina corrente */}
          {currentImages.map((image, index) => (
            <div key={index} className="image-item">
              <div className="image-item-inner">
                <img src={image.url} alt={image.title} />
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
          
          {/* Navigatore per le pagine */}
          <div className="pagination">
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <KeyboardArrowLeftIcon />
            </Button>
            <span>{currentPage} {__('...','slider-future')} {totalPages}</span>
            <Button
              variant="secondary"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
             <KeyboardArrowRightIcon />
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
