import styled from "styled-components";
import { motion } from "framer-motion";

export const ProjectsSection = styled.section.attrs({
  className: "py-16 bg-gray-50 dark:bg-[#0f172a]",
})``;

export const ProjectsContainer = styled.div.attrs({
  className: "max-w-6xl mx-auto px-4",
})``;

export const SectionTitle = styled.h2.attrs({
  className: "text-3xl md:text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white",
})``;

export const CardsWrapper = styled(motion.div).attrs({
  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
})``;
