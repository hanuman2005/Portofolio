import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  CertificateSection,
  SectionTitle,
  Description,
  CardGrid,
  CertificateCard,
  CertificateImage,
  CourseTitle,
  University,
  KnowMoreButton,
} from "./styledComponents";

const slideFrom = (index) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const AnimatedCertificateCard = ({ cert, index }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      variants={slideFrom(index)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <CertificateCard>
        <CertificateImage src={cert.image} alt={cert.title} />
        <CourseTitle>{cert.title}</CourseTitle>
        <University>{cert.university}</University>
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
          <KnowMoreButton>View Credential</KnowMoreButton>
        </a>
      </CertificateCard>
    </motion.div>
  );
};

const certificateData = [
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/c_thumb,w_200,g_face/v1751021197/nodejs_bxywuq.jpg",
    title: "Node JS",
    university: "Nxtwave",
    link: "https://res.cloudinary.com/dnky2vvud/image/upload/v1751021197/nodejs_bxywuq.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/c_thumb,w_200,g_face/v1751022821/StaticWebsite_pctnfy_zu3gqo.png",
    title: "Static Website Development",
    university: "NxtWave",
    link: "https://res.cloudinary.com/dnky2vvud/image/upload/v1751022821/StaticWebsite_pctnfy_zu3gqo.png`",
  },
  {
    image:
      "https://drive.google.com/thumbnail?id=1BHI_jEUsv_9-vuuBibahQj0fusYjtZ_C",
    title: "Responsive Website Development",
    university: "NxtWave",
    link: "https://res.cloudinary.com/dnky2vvud/image/upload/v1751022640/ResponsiveWebsite_ps0sb2_qgsadt.png",
  },
  {
    image: "https://res.cloudinary.com/dnky2vvud/image/upload/c_thumb,w_200,g_face/v1751633613/DWA_page-0001_axcdlv.jpg",
    title: "Dynamic Web Application",
    university: "NxtWave",
    link: "https://res.cloudinary.com/dnky2vvud/image/upload/v1751633613/DWA_page-0001_axcdlv.jpg",
  },
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/c_thumb,w_200,g_face/v1751022565/python_wtnxr7_gnn4qc.png",
    title: "Python Programming",
    university: "NxtWave",
    link: "https://res.cloudinary.com/dnky2vvud/image/upload/v1751022565/python_wtnxr7_gnn4qc.png",
  },
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/c_thumb,w_200,g_face/v1751022324/SQL_mzrmzr_rxzcnn.png",
    title: "Introduction to Databases",
    university: "NxtWave",
    link: "https://res.cloudinary.com/dnky2vvud/image/upload/v1751022324/SQL_mzrmzr_rxzcnn.png",
  },
  {
    image:
      "https://res.cloudinary.com/dnky2vvud/image/upload/c_thumb,w_200,g_face/v1751020419/GenerativeAIProject_rik5pg.png",
    title: "Magimoments – AI Website Builder",
    university: "NxtWave",
    link: "https://res.cloudinary.com/dnky2vvud/image/upload/v1751020419/GenerativeAIProject_rik5pg.png",
  },
];

const Certificates = () => {
  return (
    <CertificateSection id="certificates">
      <SectionTitle>
        <span>Check Out</span> <br /> MY CERTIFICATE
      </SectionTitle>
      <Description>
        I have done various programming courses to increase my programming
        skills and I'm sharing few of them
      </Description>
      <KnowMoreButton href="#contact">KNOW MORE</KnowMoreButton>

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <CardGrid>
          {certificateData.map((cert, index) => (
            <AnimatedCertificateCard cert={cert} index={index} key={index} />
          ))}
        </CardGrid>
      </motion.div>
    </CertificateSection>
  );
};

export default Certificates;
