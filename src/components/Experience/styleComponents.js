import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 0;
  position: relative;
  overflow: visible;
  background-color: #ffffff;
  @media (prefers-color-scheme: dark) {
    background-color: #1a202c;
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  overflow: visible;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Column = styled.div`
  position: relative;
  overflow: hidden;
  padding-left: 1.5rem;
  border-left: 4px solid #14b8a6;
`;

export const Item = styled.div`
  position: relative;
  margin-bottom: 2.5rem;
  transition: transform 0.3s ease;
  &:hover .dot {
    transform: scale(1.25);
  }
`;

export const Dot = styled.div.attrs({
  className: `
    absolute w-3 h-3 bg-teal-500 rounded-full 
    -left-6 top-2 group-hover:scale-125 
    transition-transform duration-300
  `,
})``;

export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1f2937;
  text-decoration: underline;
  text-underline-offset: 4px;
  text-decoration-color: #14b8a6;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const Title = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const Date = styled.span`
  display: block;
  font-size: 0.875rem;
  color: #14b8a6;
`;

export const Description = styled.p`
  color: #4b5563;
  margin-top: 0.25rem;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;
