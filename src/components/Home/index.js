// index.js
import React from "react";
import { motion } from "framer-motion";
import {
  HomeSection,
  HomeContent,
  Heading,
  Wish,
  Subheading,
  SubDescription,
  ButtonGroup,
  ActionButton,
} from "./styledComponents";

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => (
  <HomeSection
    as={motion.section}
    id="home"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    <HomeContent as={motion.div} variants={containerVariants}>
      <motion.div variants={fadeUp}>
        <Heading>
          <span
            style={{
              background: "linear-gradient(to right, #14b8a6, #6366f1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Hey There
          </span>
        </Heading>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Wish>NICE TO MEET YOU!</Wish>
      </motion.div>

      <motion.div variants={fadeUp}>
        <SubDescription>
          I'm Hanumantha Rao — a web developer who loves turning ideas into
          interactive realities.
        </SubDescription>
      </motion.div>

      <motion.div variants={fadeUp}>
        <Subheading>
          B.Tech in AI & DS • Aspiring Full-Stack Engineer • Passionate About
          Data Science
        </Subheading>
      </motion.div>

      <motion.div variants={fadeUp}>
        <ButtonGroup>
          <ActionButton href="/resume.pdf" download>
            Download CV
          </ActionButton>
          <ActionButton href="#about" transparent>
            Know More
          </ActionButton>
        </ButtonGroup>
      </motion.div>
    </HomeContent>
  </HomeSection>
);

export default Home;
