import styled from "styled-components";

export const CertificateSection = styled.section`
  padding: 4rem 1rem;
  background-color: #1f2937;
  color: white;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;

  span {
    color: #86efac;
    font-size: 1.25rem;
    font-weight: 500;
  }
`;

export const Description = styled.p`
  max-width: 600px;
  margin: 1rem auto 2rem;
  font-size: 1rem;
  color: #d1d5db;
`;

export const KnowMoreButton = styled.a`
  display: inline-block;
  border: 2px solid #14b8a6;
  color: #14b8a6;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background-color: #14b8a6;
    color: #1f2937;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

export const CertificateCard = styled.div`
  background-color: #111827;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-6px);
  }
`;

export const CertificateImage = styled.img`
  width: 100%;
  max-width: 220px;
  border-radius: 0.25rem;
`;

export const CourseTitle = styled.h4`
  font-size: 1rem;
  margin-top: 1rem;
  font-weight: 600;
`;

export const University = styled.p`
  font-size: 0.9rem;
  color: #a7f3d0;
`;
