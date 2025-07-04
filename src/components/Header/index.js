// Header.js
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import {
  HeaderWrapper,
  Nav,
  GradientName,
  NavLinks,
  MobileIcon,
  MobileMenu,
  CloseIcon,
  MobileLinks,
} from "./styledComponents";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      setMenuOpen(false);
    }
  };

  const navLinks = (
    <>
      <li>
        <a onClick={() => scrollToSection("home")}>Home</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("about")}>About</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("skills")}>Skills</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("projects")}>Projects</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("experience")}>Experience</a>
      </li>
      <li>
        <a onClick={() => scrollToSection("certificates")}>Certificates</a>
      </li>

      <li>
        <a onClick={() => scrollToSection("contact")}>Contact</a>
      </li>
    </>
  );

  return (
    <HeaderWrapper>
      <Nav>
        <GradientName>Hanumantha Rao</GradientName>
        <NavLinks>{navLinks}</NavLinks>
        <MobileIcon>
          {menuOpen ? (
            <HiX className="menu-icon" onClick={() => setMenuOpen(false)} />
          ) : (
            <HiMenu className="menu-icon" onClick={() => setMenuOpen(true)} />
          )}
        </MobileIcon>
      </Nav>
      <MobileMenu className={menuOpen ? "open" : ""}>
        <CloseIcon onClick={() => setMenuOpen(false)} />
        <MobileLinks>{navLinks}</MobileLinks>
      </MobileMenu>
    </HeaderWrapper>
  );
};

export default Header;

// styledComponents.js
