import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { border, styles, textColor } from "@wordpress/icons";
import React, { useState } from "react";

const MenuComponent = ({ element, index, menuItems }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const stylesUlMenu = {
    justifyContent: element.textAlign,
    alignItems: element.textAlignItems,
    backgroundColor: element.backgroundColor,
    gap: element.gapMenu + 'px',
    height: element.heightMenu,
    padding: `${element.paddingTitle?.top} ${element.paddingTitle?.right} ${element.paddingTitle?.bottom} ${element.paddingTitle?.left}`, // Usa i valori aggi
  };

  const isBold = element.fontStyle?.fontWeight === "bold";

  const stylesAMenu = {
    fontSize: element.fontSize+'px',
    color: element.textColor,
    '--color-hover-menu': element.textColorHover,
    letterSpacing: element.letterSpacing + "px",
    fontStyle: element.fontStyle?.fontStyle || "normal", // Valore di default
    fontWeight: isBold ? "bold" : element.fontWeight || "normal",
    textDecoration: element.fontStyle?.textDecoration || "none", // Valore di default
    lineHeight: element.lineHeight,
    fontFamily: element.fontFamily,
  };

  const stylesToggle = {
    margin: `${element.marginTitle?.top} ${element.marginTitle?.right} ${element.marginTitle?.bottom} ${element.marginTitle?.left}`, // Usa i valori aggi
    boxShadow:
    `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorShadow}` ||
    "0 0 0 0 #000000",
    backgroundColor: element.backgroundColorToggle,
    '--color-icon-menu': element.toggleColor,
    borderRadius: element.radiusToggle + 'px',
    '--scale-icon-menu': element.scaleToggle,
  };
  

  return (
    <>
      <div className={"hamburger-icon " + element.direction + " " + element.hideTitle + " " + element.sizeToggle} id="icon" onClick={handleClick} style={stylesToggle}>
        <div className={`icon-1 ${isToggled ? 'a' : ''}`} id="a"></div>
        <div className={`icon-2 ${isToggled ? 'c' : ''}`} id="b"></div>
        <div className={`icon-3 ${isToggled ? 'b' : ''}`} id="c"></div>
        <div className="clear"></div>
      </div>

      <nav id="nav" className={`${element.direction} ${element.directionMenu} ${element.widthMenu} ${isToggled ? 'show' : ''}`}>
        <ul style={stylesUlMenu}>
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a style={stylesAMenu} href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MenuComponent;