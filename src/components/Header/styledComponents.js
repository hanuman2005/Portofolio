import styled from "styled-components";
import { HiX } from "react-icons/hi";

export const HeaderWrapper = styled.header`
  background-color: #1f2937;
  color: white;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Nav = styled.nav`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const GradientName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(to right, #14b8a6, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;

  li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
    cursor: pointer;

    &:hover {
      color: #14b8a6;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuIcon = styled.div`
  font-size: 1.8rem;
  cursor: pointer;
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 66%;
  height: 100vh;
  background-color: #111827;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  padding: 1.5rem;
  z-index: 999;

  &.open {
    transform: translateX(0);
  }
`;

export const CloseIcon = styled(HiX)`
  font-size: 1.8rem;
  cursor: pointer;
  margin-bottom: 2rem;
`;

export const MobileLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li a {
    color: white;
    font-size: 1.1rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #14b8a6;
    }
  }
`;
