import ProjectCard from "../ProjectCard";
import { motion } from "framer-motion";
import {
  ProjectsSection,
  ProjectsContainer,
  SectionTitle,
  CardsWrapper,
} from "./styledComponents";

const slideUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projectData = [
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/v1751634093/jobby-app_ckfo4r.jpg",
    title: "Jobby App",
    domain: "Fullstack",
    description:
      "A job tracking platform with secure authentication, job listing management, and user-specific dashboards.",
    tools: "React, Node.js, Express, MongoDB, JWT, Tailwind CSS",
    github: "https://github.com/hanuman2005/jobby-app",
    live: "https://hanumanjobby.ccbp.tech",
  },
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/v1751633891/nxt-trendz_eqcfe5.png",
    title: "Nxt Trendz",
    domain: "Frontend",
    description:
      "E-commerce platform clone featuring product listing, cart functionality, protected routes, and JWT-based login.",
    tools: "React, React Router, Bootstrap, JWT Auth, REST APIs",
    github: "https://github.com/hanuman2005/NxtTrends",
    live: "https://hanumantrendz.ccbp.tech",
  },
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/v1751634196/nxt-watch_erutx2.webp",
    title: "Nxt Watch",
    domain: "Frontend",
    description:
      "YouTube clone with theme toggle, search/filter, video playback, and saved videos — all with secure authentication.",
    tools: "React, Context API, React Router, Styled Components, JWT",
    github: "https://github.com/hanuman2005/nxt-watch",
    live: "https://hanumannxtwatch.ccbp.tech",
  },
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/v1751634163/magimoments-ai_kc8csd.jpg",
    title: "Magimoments",
    domain: "AI · Robotics · Experience Design",
    description:
      "A no-code AI platform that predicts and fulfills guest desires using intelligent drones and robots. Created using a powerful stack of AI tools, Magimoments blends predictive logic with immersive experience design — all without writing a single line of backend code.",
    tools: "Wegic, ChatGPT, Gamma, GitHub Copilot, Sologon AI, Clipchamp",
    live: "https://magimoments.wegic.app",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.bk6Qvtxmdnkq2ps7BlCingHaE7?w=241&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    title: "Stock Seer",
    domain: "AI · Finance · Predictive Analytics",
    description:
      "A machine learning-powered platform that forecasts stock prices using Linear Regression on historical data. Designed to assist traders and investors in decision-making, Stock Seer transforms raw market data into actionable insights with real-time visualizations and zero guesswork.",
    tools: "Python, Pandas, NumPy, Matplotlib, Scikit-learn, Jupyter",
    live: "https://your-deployed-link.com",
  },
];

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle>Projects</SectionTitle>

        {/* Wrapper with scroll + stagger settings */}
        <CardsWrapper
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {projectData.map((project, index) => (
            <motion.div key={index} variants={slideUp}>
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </CardsWrapper>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;
