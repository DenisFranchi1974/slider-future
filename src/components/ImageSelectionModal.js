import React, { useState } from "react";
import { Modal, Button } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/3.jpg';
import logo from './images/1.jpg';

const ImageSelectionModal = ({ onClose, onSelect }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories] = useState(["Tutte", "Categoria 1", "Categoria 2"]);
  const [selectedCategory, setSelectedCategory] = useState("Tutte");
  const [images] = useState([
    { url: img1, alt: "Immagine 1", title: "Titolo 1", category: "Categoria 1" },
    { url: img2, alt: "Immagine 2", title: "Titolo 2", category: "Categoria 2" },
    { url: img3, alt: "Immagine 3", title: "Titolo 3", category: "Categoria 1" },
    { url: img4, alt: "Immagine 4", title: "Titolo 4", category: "Categoria 1" },
  ]);

  const [isLicenseModalOpen, setIsLicenseModalOpen] = useState(false);

  const filteredImages = selectedCategory === "Tutte"
    ? images
    : images.filter(image => image.category === selectedCategory);

  const handleSelect = async (image) => {
    setIsLoading(true);
    try {
      await onSelect(image); // Supponendo che onSelect gestisca l'operazione asincrona
    } catch (error) {
      console.error('Errore durante la selezione dell\'immagine:', error);
    } finally {
      setIsLoading(false);
      onClose(); // Chiudi il modale dopo la selezione
    }
  };

  return (
    <Modal onRequestClose={onClose} className="modal-image-slider" isFullScreen={true}>
      <div className="modal-body">
        {/* Navigatore delle categorie */}
        <div className="category-navigator">
          <div className="logo-modal">
            <img src={logo} alt={__('Slider', 'cocoblocks')} />
          </div>
          {categories.map((category, index) => (
            <Button
              key={index}
              isSecondary
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="image-selection-modal">
          {/* Sezione delle immagini */}
          {filteredImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.url} alt={image.alt} />
              <Button
                isSecondary
                onClick={() => handleSelect(image)}
              >
                {__("Select", "text-domain")}
              </Button>
              <h4>{image.title}</h4>
            </div>
          ))}
          <div className="copy-right-modal">
          <Button 
              isSecondary
              onClick={() => setIsLicenseModalOpen(true)}
              style={{ textAlign: 'left', background: 'none', border: 'none', color: 'inherit', padding: 0 }}
            >
              {__('© Copyright & License Info', 'cocoblocks')}
            </Button>
          </div>
        </div>
       
      </div>
      {isLoading && (
          <div className="loading-overlay">
            <div className="loading-message">
              <p>{__('Please wait a moment...', 'text-domain')}</p>
             
            </div>
          </div>
        )}
         {isLicenseModalOpen && (
          <Modal
            title={__('License Information', 'text-domain')}
            onRequestClose={() => setIsLicenseModalOpen(false)}
            className="license-modal"
          >
            <div className="license-content">
              <p>{__('Here you can put the detailed information about licenses.', 'text-domain')}</p>
              {/* Aggiungi ulteriori dettagli sulle licenze qui */}
              <Button isSecondary onClick={() => setIsLicenseModalOpen(false)}>
                {__('Close', 'text-domain')}
              </Button>
            </div>
          </Modal>
        )}
    </Modal>
  );
};

export default ImageSelectionModal;
