import React, { useEffect, useState } from "react";
import { Modal, Button } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import VisibilityIcon from '@mui/icons-material/Visibility';
import InfoIcon from '@mui/icons-material/Info'; 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const SliderTemplateModal = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isProFeature, setIsProFeature] = useState(true);
  const [hoveredTemplate, setHoveredTemplate] = useState(null);

  useEffect(() => {
    if (typeof window.isProFeature !== 'undefined') {
      setIsProFeature(window.isProFeature);
    }
  }, []);

  const templates = [
    {
      id: 1,
      title: "Style and Fashion",
      span: "FREE",
      category: "Free",
      previewImage: "https://franchiwebdesign.com/wp-content/uploads/2025/01/template-1.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/style-and-fashion/",
      jsonLink: "https://franchiwebdesign.com/template/style-and-fashion.json",
      class: "free"
    },
    {
      id: 2,
      title: "Phantom Elegance",
      span: "PRO",
      category: "Pro",
      previewImage: " https://franchiwebdesign.com/wp-content/uploads/2025/01/sliderfuture-phantom-elegance-demo-1.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/phantom-elegance/",
      jsonLink: "https://franchiwebdesign.com/template/phantom-elegance.json",
      class: "pro"
    },
    {
      id: 3,
      title: "Wanderlust Explorer",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/01/slider-future-template-post-1.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/wanderlust-explorer/",
      jsonLink: "https://franchiwebdesign.com/template/wanderlust-explorer.json",
      class: "free",
      query:"query"
    },
    {
      id: 4,
      title: "Wanderlust Explorer",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-template-nature-free.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/nature-workspaces/",
      jsonLink: "https://franchiwebdesign.com/template/nature-workspaces.json",
      class: "free",
    },
    {
      id: 5,
      title: "Smooth Nature Slideshow",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-template-nature-fade.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/smooth-nature-slideshow/",
      jsonLink: "https://franchiwebdesign.com/template/smooth-nature-slideshow.json",
      class: "free",
    },
    {
      id: 6,
      title: "Codex Games",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-template-game.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/codex-games/",
      jsonLink: "https://franchiwebdesign.com/template/codex-games.json",
      class: "free",
    },
    {
      id: 7,
      title: "Codex Games",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-template-vegan-style.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/vegan-style/",
      jsonLink: "https://franchiwebdesign.com/template/vegan-style.json",
      class: "free",
    },
    {
      id: 8,
      title: "Relax",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-relax-template-free.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/relax/",
      jsonLink: "https://franchiwebdesign.com/template/relax.json",
      class: "free",
    },
    {
      id: 9,
      title: "Home Designs",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-template-home-designs-free.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/home-designs/",
      jsonLink: "https://franchiwebdesign.com/template/home-designs.json",
      class: "free",
    },
    {
      id: 10,
      title: "Tech",
      span: "FREE",
      category: "Free",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/slider-future-template-tech.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/tech/",
      jsonLink: "https://franchiwebdesign.com/template/tech.json",
      class: "free",
    },
    {
      id: 11,
      title: "Visual & Text Content",
      span: "FREE",
      category: "Carousels",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/visual-text-content-carousel-template.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/smooth-flow-carousel/#visual",
      jsonLink: "https://franchiwebdesign.com/template/visual-text-content-carousel.json",
      class: "free",
    },
    {
      id: 12,
      title: "Interactive Content",
      span: "FREE",
      category: "Carousels",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/interactive-slider-carousel-template.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/smooth-flow-carousel/#interactive",
      jsonLink: "https://franchiwebdesign.com/template/interactive-slider.json",
      class: "free",
    },
    {
      id: 13,
      title: "Testimonials",
      span: "FREE",
      category: "Carousels",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/testimonials-carousel-template.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/smooth-flow-carousel/#testimonials",
      jsonLink: "https://franchiwebdesign.com/template/testimonials.json",
      class: "free",
    },
    {
      id: 14,
      title: "Coverflow Effect",
      span: "FREE",
      category: "Carousels",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/coverflow-effect-carousel-template.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/smooth-flow-carousel/#coverflow",
      jsonLink: "https://franchiwebdesign.com/template/coverflow-effect.json",
      class: "free",
    },
    {
      id: 15,
      title: "Logos",
      span: "FREE",
      category: "Carousels",
      previewImage: "https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/03/logos-carousel-template.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/smooth-flow-carousel/#logos",
      jsonLink: "https://franchiwebdesign.com/template/logos.json",
      class: "free",
    },
  ];

  const filteredTemplates = templates.filter((template) => {
    if (selectedCategory === "All") return true;
    
    // Se seleziono "Free", prendo sia quelli con category "Free" sia quelli con span "FREE"
    if (selectedCategory === "Free") {
      return template.category === "Free" || template.span === "FREE";
    }
  
    return template.category === selectedCategory;
  });
  

  const handleImport = async (jsonLink) => {
    try {
      const response = await fetch(jsonLink);
      if (!response.ok) {
        throw new Error("Error loading the template.");
      }
      const data = await response.json();
      const blocks = wp.blocks.parse(data.content);

      const clientId = select("core/block-editor").getSelectedBlockClientId();
      if (clientId) {
        dispatch("core/block-editor").replaceBlocks(clientId, blocks);
      } else {
        dispatch("core/block-editor").insertBlocks(blocks);
      }

      onClose();
    } catch (error) {
      console.error("Error during template import:", error);
      alert(__("Error during the import of the template.", "slider-future"));
    }
  };

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const handleBuyNow = () => {
    window.open("https://sliderfuture.franchiwebdesign.com/pricing/", "_blank", "noopener,noreferrer");
  };

  const [currentPage, setCurrentPage] = useState(1);
const templatesPerPage = 9;

// Calcolo dei template per pagina
const indexOfLastTemplate = currentPage * templatesPerPage;
const indexOfFirstTemplate = indexOfLastTemplate - templatesPerPage;
const currentTemplates = filteredTemplates.slice(indexOfFirstTemplate, indexOfLastTemplate);

const totalPages = Math.ceil(filteredTemplates.length / templatesPerPage);


  return (
    <Modal
      onRequestClose={onClose}
      title={__("Explore Module Template", "slider-future")}
      isFullScreen={true}
      className="modal-image-slider"
    >
      <div className="modal-body">
        <div className="category-navigator">
          <div className="logo-modal">
            <h2>{__("SF", "slider-future")}</h2>
          </div>
         
          {["All", "Free", "Pro","Carousels"].map((category) => (
            <Button
              key={category}
               variant={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "button-cat-modal active" : "button-cat-modal"}
            >
              {category}
            </Button>
          ))}
        

        </div>
        <div className="image-selection-modal">
          {filteredTemplates.length > 0 ? (
            currentTemplates.map((template) => (
              <div 
                key={template.id} 
                className="image-item"
                onMouseOver={() => setHoveredTemplate(template.id)}
                onMouseOut={() => setHoveredTemplate(null)} 
              >
                <div className="image-item-inner">
                  <img
                    src={template.previewImage}
                    alt={`${template.title} preview`}
                    className="template-preview-image"
                  />
                </div>
                <h4>
                  {template.title}
                  <span className={"version-template " + template.class}>{template.span}</span>
                  {template.query === "query" && (
                    <InfoIcon className="info-icon" /> 
                  )}
                </h4>
                <div className="template-buttons">
                  <Button
                    variant='secondary'
                    href={template.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-demo"
                  >
                    <VisibilityIcon />
                  </Button>
                  {template.category === "Pro" && isProFeature ? (
                   <Button
                    variant="primary"
                   onClick={handleBuyNow}
                 >
                   {__("Buy Now", "slider-future")}
                 </Button>
                  ) : (
                    <Button
                       variant="primary"
                      onClick={() => handleImport(template.jsonLink)}
                    >
                      {__("Import", "slider-future")}
                    </Button>
                  )}
                </div>
                {hoveredTemplate === template.id && template.query === "query" && (
                  <div className="hover-warning">
                    {__("Warning: This is post-based, so after importing, adjust the Query option to match your posts.", "slider-future")}
                  </div>
                )}
              </div>
            ))
          ) : (
            <p>{__("No templates available.", "slider-future")}</p>
          )}


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

          {totalPages > 1 && (
  <div className="pagination">
    <Button
      variant="secondary"
      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
      disabled={currentPage === 1}
    >
      <KeyboardArrowLeftIcon />
    </Button>
    <span className="pagination-info">
      {currentPage} / {totalPages}
    </span>
    <Button
      variant="secondary"
      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
      disabled={currentPage === totalPages}
    >
      <KeyboardArrowRightIcon />
    </Button>
  </div>
)}
        </div>
      </div>
      {isLicenseModalOpen && (
        <Modal
          title={__("Copyright & Licensing - Slider Future Library", "slider-future")}
          onRequestClose={() => setIsLicenseModalOpen(false)}
          className="license-modal"
        >
          <div className="license-content">
            <h3>{__('Terms of Using Templates from the Library','slider-future')}</h3>
            <p>
              {__(
                "All templates available in the library are specifically designed for use with our plugin only. You are free to use, modify, and customize the templates within the plugin, but they cannot be used outside of the plugin or redistributed as standalone templates. Any use of the templates outside of our plugin is strictly prohibited.",
                "slider-future"
              )}
            </p>
            <Button
              variant='secondary'
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

export default SliderTemplateModal;




