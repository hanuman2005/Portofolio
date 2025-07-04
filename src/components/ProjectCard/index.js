import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  CardContainer,
  CardInner,
  CardFront,
  CardBack,
  Title,
  DomainBadge,
  Description,
  TechList,
  ButtonGroup,
  ActionButton,
} from "./styledComponents";

const slideFrom = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const ProjectCard = ({
  image,
  title,
  domain,
  description,
  tools,
  github,
  live,
  index,
}) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      variants={slideFrom(index)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <CardContainer>
        <CardInner
          as={motion.div}
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.5 }}
        >
          <CardFront
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Title>{title}</Title>
            <DomainBadge>{domain}</DomainBadge>
          </CardFront>
          <CardBack>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <TechList>
              {tools.split(",").map((tool) => (
                <span key={tool.trim()}>{tool.trim()}</span>
              ))}
            </TechList>
            <ButtonGroup>
              <ActionButton href={github} target="_blank">
                GitHub
              </ActionButton>
              <ActionButton href={live} target="_blank">
                Live Site
              </ActionButton>
            </ButtonGroup>
          </CardBack>
        </CardInner>
      </CardContainer>
    </motion.div>
  );
};

export default ProjectCard;
