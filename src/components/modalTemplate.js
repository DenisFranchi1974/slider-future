import React, { useEffect, useState } from "react";
import { Modal, Button } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import VisibilityIcon from '@mui/icons-material/Visibility';
import InfoIcon from '@mui/icons-material/Info'; // Importa l'icona Info

const SliderTemplateModal = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isProFeature, setIsProFeature] = useState(true);
  const [hoveredTemplate, setHoveredTemplate] = useState(null); // Stato per il template su cui si passa il mouse

  useEffect(() => {
    if (typeof window.isProFeature !== 'undefined') {
      setIsProFeature(window.isProFeature);
    }
  }, []);

  const templates = [
    {
      id: 1,
      title: "Style and Fashion",
      span: "PRO",
      category: "Pro",
      previewImage: "https://franchiwebdesign.com/wp-content/uploads/2025/01/template-1.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/style-and-fashion/",
      jsonLink: "https://franchiwebdesign.com/template/style-and-fashion.json",
      class: "pro"
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
      previewImage: " https://sliderfuture.franchiwebdesign.com/wp-content/uploads/2025/02/slider-future-template-nature-free.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/nature-workspaces/",
      jsonLink: "https://franchiwebdesign.com/template/nature-workspaces.json",
      class: "free",
    },
  ];

  const filteredTemplates = templates.filter((template) =>
    selectedCategory === "All" ? true : template.category === selectedCategory
  );

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
    window.open("https://sliderfuture.franchiwebdesign.com/", "_blank", "noopener,noreferrer");
  };

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
         
          {["All", "Free", "Pro"].map((category) => (
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
            filteredTemplates.map((template) => (
              <div 
                key={template.id} 
                className="image-item"
                onMouseOver={() => setHoveredTemplate(template.id)} // Imposta il template su cui si passa il mouse
                onMouseOut={() => setHoveredTemplate(null)} // Resetta lo stato quando il mouse esce
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
                    <InfoIcon className="info-icon" /> // Aggiungi l'icona Info per i template Free
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