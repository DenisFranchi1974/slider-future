import React, { useState } from "react";
import { Modal, Button } from "@wordpress/components";
import { useSelect, dispatch, select } from "@wordpress/data";
import { BlockPreview } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

const TextPatternSelectionModal = ({ onClose }) => {
  const patterns = useSelect((select) => select("core").getBlockPatterns(), []);

  if (!patterns) {
    return <p>{__("Loading patterns...", "text-domain")}</p>;
  }

  // Filtra i pattern per la categoria "text"
  const textPatterns = patterns.filter(
    (pattern) => pattern.categories && pattern.categories.includes("sf-slider")
  );

  const handleSelect = (pattern) => {
    if (!pattern || !pattern.content) {
      console.error("Pattern content is undefined or empty", pattern);
      return;
    }

    const clientId = select("core/block-editor").getSelectedBlockClientId();
    if (clientId) {
      const blocks = wp.blocks.parse(pattern.content); // Parse the content to blocks
      dispatch("core/block-editor").replaceBlocks(clientId, blocks);
    } else {
      console.error("No block selected");
    }

    onClose();
  };

  return (
    <Modal
      onRequestClose={onClose}
      title={__("Select a Slider Pattern", "text-domain")}
      isFullScreen={true}
      className="slider-pattern-selection-modal"
    >
      <div className="pattern-selection-modal">
        {textPatterns.length > 0 ? (
          textPatterns.map((pattern, index) => (
            <div key={index} className="pattern-item">
              <h4>{pattern.title}</h4>
              <BlockPreview
                viewportWidth={800}
                blocks={wp.blocks.parse(pattern.content)}
              />
              <Button isPrimary onClick={() => handleSelect(pattern)}>
                {__("Select", "text-domain")}
              </Button>
            </div>
          ))
        ) : (
          <p>
            {__("No patterns found in the 'text' category.", "text-domain")}
          </p>
        )}
      </div>
    </Modal>
  );
};

export default TextPatternSelectionModal;
