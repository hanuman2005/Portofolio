import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  AboutSection,
  Container,
  Heading,
  Description,
} from './styledComponents';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0},
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const About = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={fadeUp}>
            <Heading>About Me</Heading>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Description>
              A creative problem solver with a passion for building intuitive,
              responsive, and scalable web interfaces. With over 1.5 years of
              experience in web development, I’ve crafted projects ranging from
              static sites to dynamic applications using React.
              <br />
              The journey started with curiosity and grew into a commitment to
              creating seamless digital experiences that blend function with design.
              <br />
              Recently, I expanded into Data Science, developing a Stock
              Price Prediction model using machine learning to forecast market
              trends — combining logic with data-driven thinking.
              <br />
              Always eager to learn, experiment, and build, I bring energy,
              adaptability, and a builder’s mindset to every opportunity.
            </Description>
          </motion.div>
        </motion.div>
      </Container>
    </AboutSection>
  );
};

export default About;
