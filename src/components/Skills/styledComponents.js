import styled from 'styled-components';
import { motion } from "framer-motion";

export const SkillsSection = styled.section`
  padding: 4rem 1rem;
  background-color: #ffffff;

  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
  }
`;

export const SkillsContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
`;

export const SectionTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CategoryColumn = styled.div`
  flex: 1 1 48%;
`;

export const CategoryHeader = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  color: #111827;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const Icon = styled.span`
  font-size: 1.25rem;
  color: #14b8a6;
`;

export const SkillRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const SkillName = styled.span`
  font-size: 0.95rem;
  color: #374151;

  @media (prefers-color-scheme: dark) {
    color: #e5e7eb;
  }
`;

export const SkillLevel = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #14b8a6;
`;



export const SkillBarContainer = styled.div`
  width: 100%;
  height: 10px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

export const SkillBarFill = styled(motion.div)`
  height: 100%;
  background-color: #14b8a6;
  border-radius: 5px;
`;

