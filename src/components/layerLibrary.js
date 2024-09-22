import { Modal, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

const DivModal = ({ slideId, onClose, onSelect }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = () => {
    if (selectedType) { // Verifica che ci sia un tipo selezionato
      onSelect(selectedType); // Passa solo il tipo selezionato
      onClose();
    }
  };

  // Valori di default per l'elemento text
  const defaultTextStyles = {
    fontSize: 16,
    textAlign: "center",
    textColor: "red",
   
  };

  // Definisci i valori di default per i vari tipi di div
  const defaultValues = {
    type1: {
      backgroundColor: '#FFFFFF',
      borderStyle: 'solid',
      borderRadius: 10,
      borderSize: 2,
      padding: 20,
      margin: 10,
      gifUrl: "https://www.deafimpianti.it/wp-content/uploads/2023/02/colonnine-ricarica-auto-elettriche-a-ferrara-wallbox-scaled.jpg", // URL della GIF per type1
    },
    type2: {
      backgroundColor: '#18191c',
      borderStyle: 'dashed',
      borderRadius: 5,
      borderSize: 1,
      padding: 15,
      margin: 5,
    },
  };

  // Ottieni gli stili per il tipo di div selezionato
  const getDivStyle = (type) => {
    const element = defaultValues[type] || {};
    return {
      backgroundColor: element.backgroundColor,
      borderStyle: element.borderStyle,
      borderRadius: element.borderRadius + 'px',
      borderWidth: element.borderSize + 'px',
      padding: element.padding + 'px',
      margin: element.margin + 'px',
      position: "relative", // Aggiungi questo per posizionare la GIF
    };
  };
  
  const renderTextPreview = () => {
    const styles = {
      fontSize: defaultTextStyles.fontSize,
      textAlign: defaultTextStyles.textAlign,
      color: defaultTextStyles.textColor,
     
    };

    return (
      <div style={{ ...styles }}>
        {selectedType === "type1" ? "Div predefinito 1" : "Div predefinito 2"}
      </div>
    );
  };
  return (
    <Modal title={__('Select Div Type', 'cocoblocks')} onRequestClose={onClose} className="modal-div">
      <div className="content-div-modal">
        <div className="div-item" onClick={() => setSelectedType("type1")} style={getDivStyle("type1")}>
        {renderTextPreview()}
        <img style={{maxWidth:'150px'}} src={defaultValues.type1.gifUrl} alt="Type 1 GIF" className="gif-preview" />
        </div>
        <div className="div-item" onClick={() => setSelectedType("type2")} style={getDivStyle("type2")}>
          <p>{__("Div predefinito 2", "cocoblocks")}</p>
        </div>
      
      </div>
      <Button onClick={handleSelect} disabled={!selectedType}>
        {__("Select Div", "cocoblocks")}
      </Button>
      <Button onClick={onClose}>
        {__("Close", "cocoblocks")}
      </Button>
    </Modal>
  );
};

export default DivModal;