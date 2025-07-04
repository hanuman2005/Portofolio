import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #1f2937;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const FooterLink = styled.a`
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #14b8a6;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const SocialIcon = styled.a`
  font-size: 1.25rem;
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #14b8a6;
  }
`;
export const FooterCopy = styled.p`
  textalign: "center";
  padding: "1rem";
  color: "#888";
`;
