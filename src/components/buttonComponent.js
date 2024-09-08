import React from "react";

const ButtonComponent = ({ element }) => {
  const { buttonType } = element;

  // Style button 1
  const buttonStyle1 = {
    '--color-button': element.buttonColor,
    '--border-color-button': element.backgroundBorderColorButton,
    '--border-style-button': element.borderStyleButton,
    '--border-radius-button': element.backgroundBorderRadiusButton+'px',
    '--border-width-button': element.backgroundBorderSizeButton+'px',
    '--background-color-button': element.buttonBackgroundColor,
  };

  let buttonHTML;
  switch (buttonType) {
    case "type1":
      buttonHTML = (
        <span className="scroll-btn" style={buttonStyle1}>
          <a href="#">
            <span className="mouse">
              <span></span>
            </span>
          </a>
        </span>
      );
      break;
    case "type2":
      buttonHTML = (
        <button className="custom-button">Custom Button Type 2</button>
      );
      break;
    case "type3":
      buttonHTML = <p>Button Type 3</p>;
      break;
    default:
      buttonHTML = null;
  }

  return buttonHTML;
};

export default ButtonComponent;

