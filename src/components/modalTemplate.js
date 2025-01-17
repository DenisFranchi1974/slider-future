import React, { useState } from "react";
import { Modal, Button } from "@wordpress/components";
import { dispatch, select } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import VisibilityIcon from '@mui/icons-material/Visibility';

const SliderTemplateModal = ({ onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const templates = [
    {
      id: 1,
      title: "Style and Fashion",
      span: "PRO",
      category: "Pro",
      previewImage: "https://franchiwebdesign.com/wp-content/uploads/2025/01/template-1.webp",
      demoLink: "https://sliderfuture.franchiwebdesign.com/style-and-fashion/",
      jsonLink: "https://franchiwebdesign.com/template/style-and-fashion.json",
      class:"pro"
    },
    {
      id: 2,
      title: "Template 2",
      span: "FREE",
      category: "Free",
      previewImage: "https://franchiwebdesign.com/wp-content/uploads/2024/12/slider-layer-1.webp",
      demoLink: "https://franchiwebdesign.com/",
      jsonLink: "https://yoursite.com/template2.json",
      class:"free"
    },
  ];

  const filteredTemplates = templates.filter((template) =>
    selectedCategory === "All" ? true : template.category === selectedCategory
  );

  const handleImport = async (jsonLink) => {
    try {
      const response = await fetch(jsonLink);
      if (!response.ok) {
        throw new Error("Errore nel caricamento del template.");
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
      console.error("Errore durante l'importazione del template:", error);
      alert(__("Errore durante l'importazione del template.", "slider-future"));
    }
  };

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

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
              isSecondary={selectedCategory !== category}
              isPrimary={selectedCategory === category}
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
              <div key={template.id} className="image-item">
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
                </h4>
                <div className="template-buttons">
                  <Button
                    isSecondary
                    href={template.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-demo"
                  >
                    <VisibilityIcon />
                  </Button>
                  <Button
                    isPrimary
                    onClick={() => handleImport(template.jsonLink)}
                  >
                    {__("Import", "slider-future")}
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>{__("No templates available.", "slider-future")}</p>
          )}
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
            <Button
              isSecondary
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
