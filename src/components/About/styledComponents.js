import styled from 'styled-components';

export const AboutSection = styled.section`
  padding: 4rem 1rem;
  background-color: #f3f4f6; /* Tailwind gray-100 */

  @media (prefers-color-scheme: dark) {
    background-color: #111827; /* Tailwind gray-900 */
  }
`;

export const Container = styled.div`
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;

export const Heading = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  color: #111827; /* Tailwind gray-900 */
  margin-bottom: 1.5rem;

  @media (prefers-color-scheme: dark) {
    color: #ffffff;
  }
`;

export const Description = styled.p`
  color: #374151; /* Tailwind gray-700 */
  font-size: 1rem;
  line-height: 1.75;

  @media (prefers-color-scheme: dark) {
    color: #d1d5db; /* Tailwind gray-300 */
  }

  br {
    margin-bottom: 1rem;
    display: block;
    content: '';
  }
`;
