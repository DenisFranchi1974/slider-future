import { Modal, Button } from "@wordpress/components";
import { useState } from "@wordpress/element";
import { __ } from "@wordpress/i18n";

const ButtonTypeSelectionModal = ({ slideId, onClose, onSelect }) => {
  const [selectedType, setSelectedType] = useState("");

  const handleSelect = () => {
    onSelect(slideId, selectedType); // Passa solo il tipo
    onClose();
  };

  // Definisci i valori di default per i vari tipi di bottoni
  const defaultValues = {
    type1: {
      buttonColor: '#FFFFFF',
      backgroundBorderColorButton: '#FFFFFF',
      borderStyleButton: 'solid',
      backgroundBorderRadiusButton: 30,
      backgroundBorderSizeButton: 3,
      buttonBackgroundColor: '#18191c',
      buttonColorHover: '#18191c',
      rotateButton: 0,
      widthCustomButton: 35,
      heightCustomButton: 55,
      marginButton: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      opacityButton: 1,
      colorShadow: "",
      boxShadowX: 0,
      boxShadowY: 0,
      boxShadowBlur: 0,
      boxShadowSpread: 0,
      animationButton:"none",
      durationEffectButton: 1,
      delayEffect: 0,
      interationButton: "forwards",
      backgroundBorderColorHover: "#FFFFFF",
      backgoroundBorderSizeHover: 3,
      borderStyleHover: "solid",
    },
    type2: {
      buttonColor: '#18191c',
      backgroundBorderColorButton: '#18191c',
      borderStyleButton: 'solid',
      backgroundBorderRadiusButton: 30,
      backgroundBorderSizeButton: 3,
      buttonBackgroundColor: '#FFFFFF',
      buttonColorHover: '#FFFFFF',
      rotateButton: 0,
      widthCustomButton: 35,
      heightCustomButton: 55,
      marginButton: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
      opacityButton: 1,
      colorShadow: "",
      boxShadowX: 0,
      boxShadowY: 0,
      boxShadowBlur: 0,
      boxShadowSpread: 0,
      animationButton: "none",
      durationEffectButton: 1,
      delayEffect: 0,
      interationButton: "forwards",
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#18191c",
      backgoroundBorderSizeHover: 3,
      opacityHover: 1,
      rotateHover: 0,
    },
  };

  // Ottieni gli stili per il tipo di bottone selezionato
  const getButtonStyle = (type) => {
    const element = defaultValues[type] || {};
    return {
      '--color-button': element.buttonColor,
      '--border-color-button': element.backgroundBorderColorButton,
      '--border-style-button': element.borderStyleButton,
      '--border-radius-button': element.backgroundBorderRadiusButton + 'px',
      '--border-width-button': element.backgroundBorderSizeButton + 'px',
      '--background-color-button': element.buttonBackgroundColor,
      '--color-button-hover': element.buttonColorHover,
      transform:'rotate('+element.rotateButton+'deg)',
      '--buttonWidth': element. widthCustomButton+'px',
      '--buttonHeight': element.heightCustomButton+'px',
      margin: `${element.marginButton?.top} ${element.marginButton?.right} ${element.marginButton?.bottom} ${element.marginButton?.left}`,
      opacity: element.opacityButton,
      "--box-shadow-x-button": element.boxShadowX + "px" || "0",
      "--box-shadow-y-button": element.boxShadowY + "px" || "0",
      "--box-shadow-blur-button": element.boxShadowBlur + "px" || "0",
      "--box-shadow-color-button": element.colorShadow || "#000000",
      "--box-shadow-spread-button": element.boxShadowSpread + "px" || "0",
      "--duration-effect-button": element.durationEffectButton + "s",
      "--delay-effect-button": element.delayEffectButton + "s",
      "--interation-button": element.interationButton || "forwards",
      "--border-color-button-hover": element.backgroundBorderColorHover ,
      "--border-style-button-hover": element.borderStyleHover || "none",
      "--border-width-button-hover": `${element.backgroundBorderSizeHover}px` || "0",
      "--rotate-button-hover": `${element.rotateHover}deg` || "0",
    };
  };

  // Ottieni gli stili per il tipo di bottone selezionato
  const getButtonStyleButton = (type) => {
    const element = defaultValuesButton[type] || {};
    return {
      color: element.buttonColor,
      borderColor: element.backgroundBorderColorButton,
      borderStyle: element.borderStyleButton,
      borderWidth: element.backgroundBorderSizeButton + 'px',
      backgroundColor: element.buttonBackgroundColor,
      fontSize: element.fontSizeButton + 'px',
      '--font-size-button-tablet': element.fontSizeButtonTablet + 'px',
      '--font-size-button-mobile': element.fontSizeButtonMobile + 'px',
      fontStyle: element.fontStyle?.fontStyle || "normal", // Valore di default
      textDecoration: element.fontStyle?.textDecoration || "none", // Valore di default
      lineHeight: element.lineHeightButton,
      fontFamily: element.fontFamilyButton,
      letterSpacing: element.letterSpacingButton + 'px',
      '--buttonWidth': element. widthCustomButton+'px',
      '--buttonHeight': element.heightCustomButton+'px',
      borderTopLeftRadius: element.borderRadiusButton?.top,
      borderTopRightRadius: element.borderRadiusButton?.right,
      borderBottomRightRadius: element.borderRadiusButton?.bottom,
      borderBottomLeftRadius: element.borderRadiusButton?.left,
      padding: `${element.paddingButton?.top} ${element.paddingButton?.right} ${element.paddingButton?.bottom} ${element.paddingButton?.left}`,
      "--border-color-button-hover": element.backgroundBorderColorHover ,
      "--border-style-button-hover": element.borderStyleHover || "none",
      "--border-width-button-hover": `${element.backgroundBorderSizeHover}px` || "0",
      "--background-color-button-hover": element.buttonBackgroundColorHover,
      "--color-button-hover": element.buttonColorHover,
      opacity: element.opacityButton,
      boxShadow:
      `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorShadow}` ||
      "0 0 0 0 #000000",
      "--opacity-button-hover": element.opacityHover,
      transition: 'transform ' + element.durationEffectHover + 's ease, ' +
      'opacity ' + element.durationEffectHover + 's ease, ' +
      'color ' + element.durationEffectHover + 's ease',
    };
  };

  const defaultValuesButton = {
    type3: {
      button:__(' Click Here', 'cocoblocks'),
      buttonColor: '#FFFFFF',
      backgroundBorderColorButton: '#FFFFFF',
      borderStyleButton: 'solid',
      borderRadiusButton:{
        top: '50px',
        right: '50px',
        bottom:'50px',
        left: '50px',
      },
      backgroundBorderSizeButton: 1,
      buttonBackgroundColor: '#18191c',
      buttonColorHover: '#18191c',
      paddingButton: {
        top: '8px',
        right: '12px',
        bottom: '8px',
        left: '12px',
      },
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#18191c",
      backgroundBorderSizeHover: 1,
      buttonBackgroundColorHover: "#FFFFFF",
    },
    type4: {
      buttonColor: '#18191c',
      backgroundBorderColorButton: '#18191c',
      borderStyleButton: 'solid',
      borderRadiusButton:{
        top: '50px',
        right: '50px',
        bottom:'50px',
        left: '50px',
      },
      backgroundBorderSizeButton: 1,
      buttonBackgroundColor: '#FFFFFF',
      buttonColorHover: '#FFFFFF',
      paddingButton: {
        top: '8px',
        right: '12px',
        bottom: '8px',
        left: '12px',
      },
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#FFFFFF",
      backgroundBorderSizeHover: 1,
      buttonBackgroundColorHover: "#18191c",
    },
    type5: {
      buttonColor: '#FFFFFF',
      backgroundBorderColorButton: '#FFFFFF',
      borderStyleButton: 'solid',
      borderRadiusButton:{
        top: 0,
        right: 0,
        bottom:0,
        left: 0,
      },
      backgroundBorderSizeButton: 1,
      buttonBackgroundColor: '#18191c',
      buttonColorHover: '#18191c',
      paddingButton: {
        top: '8px',
        right: '12px',
        bottom: '8px',
        left: '12px',
      },
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#18191c",
      backgroundBorderSizeHover: 1,
      buttonBackgroundColorHover: "#FFFFFF",
    },
    type6: {
      buttonColor: '#18191c',
      backgroundBorderColorButton: '#18191c',
      borderStyleButton: 'solid',
      borderRadiusButton:{
        top: 0,
        right: 0,
        bottom:0,
        left: 0,
      },
      backgroundBorderSizeButton: 1,
      buttonBackgroundColor: '#FFFFFF',
      buttonColorHover: '#FFFFFF',
      paddingButton: {
        top: '8px',
        right: '12px',
        bottom: '8px',
        left: '12px',
      },
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#FFFFFF",
      backgroundBorderSizeHover: 1,
      buttonBackgroundColorHover: "#18191c",
    },
    type7: {
      buttonColor: '#FFFFFF',
      backgroundBorderColorButton: '#FFFFFF',
      borderStyleButton: 'solid',
      borderRadiusButton:{
        top: '35px',
        right: 0,
        bottom:'35px',
        left: 0,
      },
      backgroundBorderSizeButton: 1,
      buttonBackgroundColor: '#18191c',
      buttonColorHover: '#18191c',
      paddingButton: {
        top: '10px',
        right: '20px',
        bottom: '10px',
        left: '20px',
      },
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#18191c",
      backgroundBorderSizeHover: 1,
      buttonBackgroundColorHover: "#FFFFFF",
    },
    type8: {
      buttonColor: '#18191c',
      backgroundBorderColorButton: '#18191c',
      borderStyleButton: 'solid',
      borderRadiusButton:{
        top: '35px',
        right: 0,
        bottom:'35px',
        left: 0,
      },
      backgroundBorderSizeButton: 1,
      buttonBackgroundColor: '#FFFFFF',
      buttonColorHover: '#FFFFFF',
      paddingButton: {
        top: '10px',
        right: '20px',
        bottom: '10px',
        left: '20px',
      },
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#FFFFFF",
      backgroundBorderSizeHover: 1,
      buttonBackgroundColorHover: "#18191c",
    },
    type9: {
      buttonColor: '#18191c',
      backgroundBorderColorButton: '#18191c',
      borderStyleButton: 'solid',
      borderRadiusButton:{
        top: '35px',
        right: 0,
        bottom:'35px',
        left: 0,
      },
      backgroundBorderSizeButton: 1,
      buttonBackgroundColor: '#FFFFFF',
      buttonColorHover: '#FFFFFF',
      paddingButton: {
        top: '10px',
        right: '20px',
        bottom: '10px',
        left: '20px',
      },
      borderStyleHover: "solid",
      backgroundBorderColorHover: "#FFFFFF",
      backgroundBorderSizeHover: 1,
      buttonBackgroundColorHover: "#18191c",
    },


  };

  return (
    <Modal title={__('Select Button Type','cocoblock')} onRequestClose={onClose} className="modal-button">
      <div className="content-button-modal">
        <Button onClick={() => setSelectedType("type1")} className={selectedType === "type1" ? "selected" : ""}>
          <span className="scroll-btn" style={getButtonStyle("type1")}>
            <a href="#">
              <span className="mouse">
                <span></span>
              </span>
            </a>
          </span>
        </Button>
        <Button onClick={() => setSelectedType("type2")}  className={selectedType === "type2" ? "selected" : ""}>
        <span className="scroll-btn" style={getButtonStyle("type2")}>
            <a href="#">
              <span className="mouse">
                <span></span>
              </span>
            </a>
          </span>
        </Button>
        <Button onClick={() => setSelectedType("type3")}  className={selectedType === "type3" ? "selected" : ""}>
        <div className={'content-button-slide button-slider'} >
          <a href="#" style={getButtonStyleButton("type3")}>
              {__('Click Here', 'cocoblocks')}
          </a>
        </div>
        </Button>
        <Button onClick={() => setSelectedType("type4")}  className={selectedType === "type4" ? "selected" : ""}>
        <div className={'content-button-slide button-slider'} >
          <a href="#" style={getButtonStyleButton("type4")}>
              {__('Click Here', 'cocoblocks')}
          </a>
        </div>
        </Button>
        <Button onClick={() => setSelectedType("type5")}  className={selectedType === "type5" ? "selected" : ""}>
        <div className={'content-button-slide button-slider'} >
          <a href="#" style={getButtonStyleButton("type5")}>
              {__('Click Here', 'cocoblocks')}
          </a>
        </div>
        </Button>
        <Button onClick={() => setSelectedType("type6")}  className={selectedType === "type6" ? "selected" : ""}>
        <div className={'content-button-slide button-slider'} >
          <a href="#" style={getButtonStyleButton("type6")}>
              {__('Click Here', 'cocoblocks')}
          </a>
        </div>
        </Button>
        <Button onClick={() => setSelectedType("type7")}  className={selectedType === "type7" ? "selected" : ""}>
        <div className={'content-button-slide button-slider'} >
          <a href="#" style={getButtonStyleButton("type7")}>
              {__('Click Here', 'cocoblocks')}
          </a>
        </div>
        </Button>
        <Button onClick={() =>setSelectedType("type8")} className={selectedType === "type8" ? "selected" : ""}>
        <div className={'content-button-slide button-slider'} >
          <a href="#" style={getButtonStyleButton("type8")}>
              {__('Click Here', 'cocoblocks')}
          </a>
        </div>
        </Button>
      </div>
      <Button onClick={handleSelect}  className={`button-select ${selectedType ? "selected" : ""}`}>{__('Select','cocoblock')}</Button>
    </Modal>
  );
};

export default ButtonTypeSelectionModal;
