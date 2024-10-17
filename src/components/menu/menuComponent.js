import React, { useState, useEffect, useRef } from "react";
import "./menu.scss";
//import { gsap } from 'gsap';

const MenuComponent = ({ element, menuItems }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isResponsiveMode, setIsResponsiveMode] = useState(false);

  const handleClick = () => {
    setIsToggled(!isToggled);
  };

  const [openSubMenus, setOpenSubMenus] = useState([]);

  const subMenuRefs = useRef([]); // Ref per ciascun sub-menu

  // Funzione per aprire/chiudere il sub-menu e gestire l'animazione
  const toggleSubMenu = (index) => {
    const isOpen = openSubMenus.includes(index);

    if (isOpen) {
      // Animazione per chiudere il sub-menu
      gsap.to(subMenuRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: .5,
        ease: 'power2.inOut',
        onComplete: () => {
          // Una volta completata l'animazione, rimuovi l'indice del sub-menu dallo stato
          setOpenSubMenus((prevOpenSubMenus) =>
            prevOpenSubMenus.filter((i) => i !== index)
          );
        },
      });
    } else {
      // Aggiungi l'indice del sub-menu allo stato e aprilo con l'animazione
      setOpenSubMenus((prevOpenSubMenus) => [...prevOpenSubMenus, index]);
      gsap.fromTo(
        subMenuRefs.current[index],{ 
          height: 0, 
          opacity: 0 
        },
        { 
          height: 'auto', 
          opacity: 1, 
          duration: 2.5, 
          ease: "bounce.out",
          y: 10
        }
      );
    }
  };


  // Gestione degli stili per il menu
  const stylesUlMenu = {
    justifyContent: element.textAlign,
    alignItems: element.textAlignItems,
    backgroundColor: element.backgroundColor,
    gap: element.gapMenu + "px",
    height: element.heightMenu,
    flexDirection: element.orientationMenu,
    padding: `${element.paddingTitle?.top} ${element.paddingTitle?.right} ${element.paddingTitle?.bottom} ${element.paddingTitle?.left}`,
  };

  const stylesUlMenuNormal = {
    justifyContent: element.textAlign,
    alignItems: element.textAlignItems,
    backgroundColor: element.backgroundColor,
    gap: element.gapMenu + "px",
    flexDirection: element.orientationMenu,
    padding: `${element.paddingTitle?.top} ${element.paddingTitle?.right} ${element.paddingTitle?.bottom} ${element.paddingTitle?.left}`,
  };

  const isBold = element.fontStyle?.fontWeight === "bold";

  const stylesAMenu = {
    fontSize: element.fontSize + "px",
    color: element.textColor,
    "--color-hover-menu": element.textColorHover,
    letterSpacing: element.letterSpacing + "px",
    fontStyle: element.fontStyle?.fontStyle || "normal", // Valore di default
    fontWeight: isBold ? "bold" : element.fontWeight || "normal",
    textDecoration: element.fontStyle?.textDecoration || "none", // Valore di default
    lineHeight: element.lineHeight,
    fontFamily: element.fontFamily,
  };

  const stylesToggle = {
    margin: `${element.marginTitle?.top} ${element.marginTitle?.right} ${element.marginTitle?.bottom} ${element.marginTitle?.left}`,
    boxShadow:
      `${element.boxShadowX}px ${element.boxShadowY}px ${element.boxShadowBlur}px ${element.boxShadowSpread}px ${element.colorShadow}` ||
      "0 0 0 0 #000000",
    backgroundColor: element.backgroundColorToggle,
    "--color-icon-menu": element.toggleColor,
    borderRadius: element.radiusToggle + "px",
    "--scale-icon-menu": element.scaleToggle,
  };

  // Funzione per gestire il cambio di modalità (toggle/normale/responsive) in base alla larghezza dello schermo
  const handleResize = () => {
    if (window.innerWidth <= element.breakpoint) { // Usa element.breakpoint
      setIsResponsiveMode(true);
    } else {
      setIsResponsiveMode(false);
      setIsToggled(false); // Nasconde il menu toggle quando si esce dalla modalità responsive
    }
  };

  useEffect(() => {
    // Aggiungi il listener per il resize
    window.addEventListener("resize", handleResize);
    handleResize(); // Chiama la funzione una volta per impostare lo stato iniziale
    return () => {
      // Rimuovi il listener quando il componente si smonta
      window.removeEventListener("resize", handleResize);
    };
  }, [element.breakpoint]); // Usa element.breakpoint
  

  return (
    <>
      {/* Determina la classe del componente in base alla modalità scelta */}
      <div style={{zIndex:element.zIndexMenu}} className={`menu-component menu-mode-${element.menuMode} ${isResponsiveMode ? 'menu-responsive' : ''}`}>
        
        {/* Modalità Toggle (codice originale) */}
        {(element.menuMode === 'toggle') && (
          <>
            <div
              className={`hamburger-icon ${element.direction} ${element.hideTitle} ${element.sizeToggle}`}
              id="icon"
              onClick={handleClick}
              style={stylesToggle}
            >
              <div className={`icon-1 ${isToggled ? "a" : ""}`} id="a"></div>
              <div className={`icon-2 ${isToggled ? "c" : ""}`} id="b"></div>
              <div className={`icon-3 ${isToggled ? "b" : ""}`} id="c"></div>
              <div className="clear"></div>
            </div>

            <nav
              id="nav"
              className={`nav-toggle-slide ${element.direction} ${element.directionMenu} ${element.widthMenu} ${
                isToggled ? "show" : ""
              }`}
            >
               <ul style={stylesUlMenu}>
      {menuItems.map((item, idx) => (
          <li 
            key={idx} 
            style={{ position: 'relative' }} 
            className={`${item.subMenu && item.subMenu.length > 0 ? 'has-submenu' : ''} ${element.submenuMode === 'hover' ? 'submenu-hover' : ''}`}
            // Aggiungi eventi mouse solo se il modo è hover
            onMouseEnter={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
            onMouseLeave={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
          >
          <a style={stylesAMenu} href={item.link}>
            {item.text}
          </a>
          {item.subMenu && item.subMenu.length > 0 && (
            <>
             {element.submenuMode === 'click' ? (
                  <button
                    onClick={() => toggleSubMenu(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    }}
                  >
                    {openSubMenus.includes(idx) ? '▲' : '▼'}
                  </button>
                ) : (
                  <span
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      cursor: 'pointer',
                    }}
                  >
                    ▼
                  </span>
                )}
              <ul
                className="sub-menu"
                ref={(el) => (subMenuRefs.current[idx] = el)} // Assegna un ref per ciascun sub-menu
                style={{
                  display: openSubMenus.includes(idx) ? 'block' : 'none',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.subMenu.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <a style={stylesAMenu} href={subItem.link}>
                      {subItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
            </nav>
          </>
        )}

        {/* Modalità Normale (menu semplice) */}
        {(element.menuMode === 'normal') && (
          <nav className={"slider-nav-menu normal-menu " + element.hideTitle}>
            <ul style={stylesUlMenuNormal}>
      {menuItems.map((item, idx) => (
        <li 
          key={idx} 
          style={{ position: 'relative' }} 
          className={`${item.subMenu && item.subMenu.length > 0 ? 'has-submenu' : ''} ${element.submenuMode === 'hover' ? 'submenu-hover' : ''}`}
            // Aggiungi eventi mouse solo se il modo è hover
            onMouseEnter={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
            onMouseLeave={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
       >
          <a style={stylesAMenu} href={item.link}>
            {item.text}
          </a>
          {item.subMenu && item.subMenu.length > 0 && (
            <>
             {element.submenuMode === 'click' ? (
                  <button
                    onClick={() => toggleSubMenu(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      position: 'absolute',
                      top: 0,
                    }}
                  >
                    {openSubMenus.includes(idx) ? '▲' : '▼'}
                  </button>
                ) : (
                  <span
                    style={{
                      position: 'absolute',
                      top: 0,
                      cursor: 'pointer',
                    }}
                  >
                    ▼
                  </span>
                )}
              <ul
                ref={(el) => (subMenuRefs.current[idx] = el)} // Assegna un ref per ciascun sub-menu
                className="sub-menu"
                style={{
                  height: openSubMenus.includes(idx) ? 'auto' : 0,
                  overflow: 'hidden',
                  opacity: openSubMenus.includes(idx) ? 1 : 0,
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.subMenu.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <a style={stylesAMenu} href={subItem.link}>
                      {subItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
          </nav>
        )}

{/* Modalità Responsive (menu normale fuori dal breakpoint, menu a toggle dentro al breakpoint) */}
{(element.menuMode === 'responsive') && (
  <>
    {/* Modalità Normale (visibile solo se non siamo in modalità responsiva) */}
    {!isResponsiveMode && (
      <nav className="slider-nav-menu normal-menu">
        <ul style={stylesUlMenuNormal}>
      {menuItems.map((item, idx) => (
        <li 
          key={idx} 
          style={{ position: 'relative' }} 
          className={`${item.subMenu && item.subMenu.length > 0 ? 'has-submenu' : ''} ${element.submenuMode === 'hover' ? 'submenu-hover' : ''}`}
          // Aggiungi eventi mouse solo se il modo è hover
          onMouseEnter={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
          onMouseLeave={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
          >
          <a style={stylesAMenu} href={item.link}>
            {item.text}
          </a>
          {item.subMenu && item.subMenu.length > 0 && (
            <>
             {element.submenuMode === 'click' ? (
                  <button
                    onClick={() => toggleSubMenu(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    }}
                  >
                    {openSubMenus.includes(idx) ? '▲' : '▼'}
                  </button>
                ) : (
                  <span
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      cursor: 'pointer',
                    }}
                  >
                    ▼
                  </span>
                )}
              <ul
                className="sub-menu"
                ref={(el) => (subMenuRefs.current[idx] = el)} // Assegna un ref per ciascun sub-menu
                style={{
                  display: openSubMenus.includes(idx) ? 'block' : 'none',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.subMenu.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <a style={stylesAMenu} href={subItem.link}>
                      {subItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
      </nav>
    )}

    {/* Modalità Toggle quando si raggiunge il breakpoint */}
    {isResponsiveMode && (
      <>
        <div
          className={`hamburger-icon ${element.direction} ${element.hideTitle} ${element.sizeToggle}`}
          id="icon"
          onClick={handleClick}
          style={stylesToggle}
        >
          <div className={`icon-1 ${isToggled ? "a" : ""}`} id="a"></div>
          <div className={`icon-2 ${isToggled ? "c" : ""}`} id="b"></div>
          <div className={`icon-3 ${isToggled ? "b" : ""}`} id="c"></div>
          <div className="clear"></div>
        </div>

        <nav
          id="nav"
          className={`nav-toggle-slide ${element.direction} ${element.directionMenu} ${element.widthMenu} ${
            isToggled ? "show" : ""
          }`}
        >
           <ul style={stylesUlMenu}>
      {menuItems.map((item, idx) => (
        <li 
          key={idx} 
          style={{ position: 'relative' }}  
          className={`${item.subMenu && item.subMenu.length > 0 ? 'has-submenu' : ''} ${element.submenuMode === 'hover' ? 'submenu-hover' : ''}`}
          // Aggiungi eventi mouse solo se il modo è hover
          onMouseEnter={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
          onMouseLeave={() => element.submenuMode === 'hover' && toggleSubMenu(idx)}
        >
          <a style={stylesAMenu} href={item.link}>
            {item.text}
          </a>
          {item.subMenu && item.subMenu.length > 0 && (
            <>
             {element.submenuMode === 'click' ? (
                  <button
                    onClick={() => toggleSubMenu(idx)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      position: 'absolute',
                      right: 0,
                      top: 0,
                    }}
                  >
                    {openSubMenus.includes(idx) ? '▲' : '▼'}
                  </button>
                ) : (
                  <span
                    style={{
                      position: 'absolute',
                      right: 0,
                      top: 0,
                      cursor: 'pointer',
                    }}
                  >
                    ▼
                  </span>
                )}
              <ul
                className="sub-menu"
                ref={(el) => (subMenuRefs.current[idx] = el)} // Assegna un ref per ciascun sub-menu
                style={{
                  display: openSubMenus.includes(idx) ? 'block' : 'none',
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  whiteSpace: 'nowrap',
                }}
              >
                {item.subMenu.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <a style={stylesAMenu} href={subItem.link}>
                      {subItem.text}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </li>
      ))}
    </ul>
        </nav>
      </>
    )}
  </>
)}
      </div>
    </>
  );
};

export default MenuComponent;
