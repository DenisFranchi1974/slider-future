import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { border, styles, textColor } from "@wordpress/icons";
import React, { useState } from "react";

const MenuInnerComponent = ({ element, index, menuItems,menuDiv, menuIndex }) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const stylesUlMenu = {
    justifyContent: menuDiv.textAlign,
    alignItems: menuDiv.textAlignItems,
    backgroundColor: menuDiv.backgroundColor,
    gap: menuDiv.gapMenu + 'px',
    height: menuDiv.heightMenu,
    padding: `${menuDiv.paddingTitle?.top} ${menuDiv.paddingTitle?.right} ${menuDiv.paddingTitle?.bottom} ${menuDiv.paddingTitle?.left}`, // Usa i valori aggi
  };

  const isBold = menuDiv.fontStyle?.fontWeight === "bold";

  const stylesAMenu = {
    fontSize: menuDiv.fontSize+'px',
    color: menuDiv.textColor,
    '--color-hover-menu': menuDiv.textColorHover,
    letterSpacing: menuDiv.letterSpacing + "px",
    fontStyle: menuDiv.fontStyle?.fontStyle || "normal", // Valore di default
    fontWeight: isBold ? "bold" : menuDiv.fontWeight || "normal",
    textDecoration: menuDiv.fontStyle?.textDecoration || "none", // Valore di default
    lineHeight: menuDiv.lineHeight,
    fontFamily: menuDiv.fontFamily,
  };

  const stylesToggle = {
    margin: `${menuDiv.marginTitle?.top} ${menuDiv.marginTitle?.right} ${menuDiv.marginTitle?.bottom} ${menuDiv.marginTitle?.left}`, // Usa i valori aggi
    boxShadow:
    `${menuDiv.boxShadowX}px ${menuDiv.boxShadowY}px ${menuDiv.boxShadowBlur}px ${menuDiv.boxShadowSpread}px ${menuDiv.colorShadow}` ||
    "0 0 0 0 #000000",
    backgroundColor: menuDiv.backgroundColorToggle,
    '--color-icon-menu': menuDiv.toggleColor,
    borderRadius: menuDiv.radiusToggle + 'px',
    '--scale-icon-menu': menuDiv.scaleToggle,
  };
  

  return (
    <>
      <div className={"hamburger-icon " + menuDiv.direction + " " + menuDiv.hideTitle + " " + menuDiv.sizeToggle} id="icon" onClick={handleClick} style={stylesToggle}>
        <div className={`icon-1 ${isToggled ? 'a' : ''}`} id="a"></div>
        <div className={`icon-2 ${isToggled ? 'c' : ''}`} id="b"></div>
        <div className={`icon-3 ${isToggled ? 'b' : ''}`} id="c"></div>
        <div className="clear"></div>
      </div>

      <nav id="nav" className={`${menuDiv.direction} ${menuDiv.directionMenu} ${menuDiv.widthMenu} ${isToggled ? 'show' : ''}`}>
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

export default MenuInnerComponent;