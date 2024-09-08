import { Modal, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";

const ButtonTypeSelectionModal = ({ slideId, onClose, onSelect }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = () => {
    onSelect(slideId, selectedType); // Passa solo il tipo
    onClose();
  };

  return (
    <Modal title="Select Button Type" onRequestClose={onClose}>
      <div>
        <Button onClick={() => setSelectedType("type1")}>Type 1</Button>
        <Button onClick={() => setSelectedType("type2")}>Type 2</Button>
        <Button onClick={() => setSelectedType("type3")}>Type 3</Button>
        <Button isPrimary onClick={handleSelect}>Select</Button>
      </div>
    </Modal>
  );
};

export default ButtonTypeSelectionModal;

