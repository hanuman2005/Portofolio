import React from "react";
import { motion } from "framer-motion";
import {
  Section,
  Container,
  Heading,
  Item,
  Column,
  Date,
  Dot,
  Title,
  Description,
} from "./styleComponents";

const MotionItem = motion(Item);

const ExperienceSection = () => {
  return (
    <Section id="experience">
      <Container>
        <div>
          <Heading>Experience</Heading>
          <Column>
            <MotionItem
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Dot />
              <Date>2024</Date>
              <Title>Data Science Intern – Corizo</Title>
              <Description>
                Built a stock price prediction model using Pandas, NumPy,
                scikit-learn, and Linear Regression.
              </Description>
            </MotionItem>

            <MotionItem
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Dot />
              <Date>2025</Date>
              <Title>DevOps Hackathon – Finalist</Title>
              <Description>
                Collaborated on an AWS + Docker-based CI/CD deployment pipeline
                using GitHub Actions.
              </Description>
            </MotionItem>
          </Column>
        </div>
        <div>
          <Heading>Education</Heading>
          <Column>
            <MotionItem
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Dot />
              <Date>2023 - 2027</Date>
              <Title>B.Tech in AI & DS</Title>
              <Description>
                Pursuing B.Tech in Artificial Intelligence and Data Science with
                9.5 CGPA.
              </Description>
            </MotionItem>
          </Column>
        </div>
      </Container>
    </Section>
  );
};

export default ExperienceSection;
