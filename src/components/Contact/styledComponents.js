// styledComponents.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled.section`
  padding: 64px 16px;
  background-color: #f3f4f6;
  @media (prefers-color-scheme: dark) {
    background-color: #111827;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #1f2937;
  margin-bottom: 32px;
  @media (prefers-color-scheme: dark) {
    color: #fff;
  }
`;

export const ContactContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InfoCard = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    color: white;
  }
`;

export const IconWrapper = styled.div`
  font-size: 15px;
  color: #14b8a6;
`;

export const InfoText = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

export const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

// styledComponents.js

export const Input = styled(motion.input)`
  padding: 12px;
  margin-bottom: 16px;
  width: 100%;
  background-color: #1f2937;
  border-bottom: 2px solid #ccc;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  transition: 0.3s ease;

  &::placeholder {
    color: #ffffff;
    font-size: 14px;
  }

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 8px rgba(108, 99, 255, 0.5);  // ✅ subtle glowing effect
  }
`;

export const TextArea = styled(motion.textarea)`
  padding: 12px;
  margin-bottom: 16px;
  width: 100%;
  height: 120px;
  background-color: #1f2937;
  border-bottom: 2px solid #ccc;
  border-radius: 8px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  resize: none;
  transition: 0.3s ease;

  &::placeholder {
    color: #ffffff;
    font-size: 14px;
  }

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 8px rgba(108, 99, 255, 0.5);  // ✅ same effect here
  }
`;

export const SubmitButton = styled(motion.button)`
  padding: 12px 24px;
  background-color: #14b8a6;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.2s ease, background-color 0.3s;

  &:hover {
    transform: scale(1.03);
    background-color: #0d9488;
  }
`;
