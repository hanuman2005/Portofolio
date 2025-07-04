import React from 'react';
import {
  FooterContainer,
  FooterLinks,
  FooterLink,
  SocialIcons,
  SocialIcon,
  FooterCopy,
} from './styledComponents';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#home">Home</FooterLink>
        <FooterLink href="#about">About</FooterLink>
        <FooterLink href="#projects">Projects</FooterLink>
        <FooterLink href="#contact">Contact</FooterLink>
      </FooterLinks>
      <SocialIcons>
        <SocialIcon href="https://linkedin.com/in/madeneni" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon href="https://github.com/hanuman2005" target="_blank" rel="noreferrer">
          <FaGithub />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/loyal_boy_hanuman" target="_blank" rel="noreferrer">
          <FaInstagram />
        </SocialIcon>
      </SocialIcons>
      <FooterCopy>&copy; 2025 Hanumantha Rao. All rights reserved.</FooterCopy>
    </FooterContainer>
  );
};

export default Footer;
