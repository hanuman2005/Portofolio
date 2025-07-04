// styledComponents.js
import styled from "styled-components";

export const HomeSection = styled.section`
  padding: 6rem 1rem;
  background-color: #f9fafb;
  min-height: 100vh;
  display: flex;
  align-items: center;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`;

export const HomeContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.3;
  color: #1f2937;
  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const Wish = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #14b8a6;
`;

export const SubDescription = styled.p`
  font-size: 1rem;
  color: #4b5563;
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

export const Subheading = styled.p`
  font-size: 0.95rem;
  color: #6b7280;
  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

export const ActionButton = styled.a`
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  ${({ transparent }) =>
    transparent
      ? `
    background-color: transparent;
    color: #14b8a6;
    border: 2px solid #14b8a6;
    &:hover {
      background-color: #14b8a6;
      color: white;
    }
  `
      : `
    background-color: #14b8a6;
    color: white;
    border: none;
    &:hover {
      background-color: #0d9488;
    }
  `}
`;

