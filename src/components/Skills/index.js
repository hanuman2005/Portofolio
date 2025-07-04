import React from "react";
import {
  SkillsSection,
  SkillsContainer,
  SectionTitle,
  Grid,
  CategoryColumn,
  CategoryHeader,
  SkillRow,
  SkillName,
  SkillLevel,
  Icon,
  SkillBarContainer,
  SkillBarFill,
} from "./styledComponents";

import { FaCode, FaServer, FaTools, FaLaptopCode } from "react-icons/fa";

const skills = {
  Frontend: [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
  ],
  Backend: [
    { name: "Node.js", level: 75 },
    { name: "Express.js", level: 70 },
  ],
  Tools: [{ name: "Git", level: 80 }],
  Programming: [
    { name: "Java", level: 80 },
    { name: "Python", level: 85 },
    { name: "SQL", level: 75 },
  ],
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle>Skills</SectionTitle>
        <Grid>
          <CategoryColumn>
            <CategoryHeader>
              <Icon>
                <FaLaptopCode />
              </Icon>{" "}
              Frontend
            </CategoryHeader>
            {skills.Frontend.map((skill, i) => (
              <SkillRow key={i}>
                <div style={{ width: "100%" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </div>
                  <SkillBarContainer>
                    <SkillBarFill
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </SkillBarContainer>
                </div>
              </SkillRow>
            ))}

            <CategoryHeader>
              <Icon>
                <FaTools />
              </Icon>{" "}
              Tools
            </CategoryHeader>
            {skills.Tools.map((skill, i) => (
              <SkillRow key={i}>
                <div style={{ width: "100%" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </div>
                  <SkillBarContainer>
                    <SkillBarFill
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </SkillBarContainer>
                </div>
              </SkillRow>
            ))}
          </CategoryColumn>

          <CategoryColumn>
            <CategoryHeader>
              <Icon>
                <FaServer />
              </Icon>{" "}
              Backend
            </CategoryHeader>
            {skills.Backend.map((skill, i) => (
              <SkillRow key={i}>
                <div style={{ width: "100%" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </div>
                  <SkillBarContainer>
                    <SkillBarFill
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </SkillBarContainer>
                </div>
              </SkillRow>
            ))}

            <CategoryHeader>
              <Icon>
                <FaCode />
              </Icon>{" "}
              Programming
            </CategoryHeader>
            {skills.Programming.map((skill, i) => (
              <SkillRow key={i}>
                <div style={{ width: "100%" }}>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <SkillName>{skill.name}</SkillName>
                    <SkillLevel>{skill.level}%</SkillLevel>
                  </div>
                  <SkillBarContainer>
                    <SkillBarFill
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      viewport={{ once: true }}
                    />
                  </SkillBarContainer>
                </div>
              </SkillRow>
            ))}
          </CategoryColumn>
        </Grid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
