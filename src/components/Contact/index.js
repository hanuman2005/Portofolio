import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

import {
  ContactSection,
  ContactContainer,
  ContactInfo,
  InfoCard,
  IconWrapper,
  InfoText,
  ContactForm as BaseForm,
  Input,
  TextArea,
  SubmitButton,
  SectionTitle,
} from "./styledComponents";


const ContactForm = motion(BaseForm); 

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Contact Me</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <InfoCard>
              <IconWrapper>
                <HiPhone />
              </IconWrapper>
              <InfoText>+91 93928 52185</InfoText>
            </InfoCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <InfoCard>
              <IconWrapper>
                <HiMail />
              </IconWrapper>
              <InfoText>madenenihanumanturao@gmail.com</InfoText>
            </InfoCard>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <InfoCard>
              <IconWrapper>
                <HiLocationMarker />
              </IconWrapper>
              <InfoText>Vinukonda, AP, India</InfoText>
            </InfoCard>
          </motion.div>
        </ContactInfo>
        <ContactForm
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          action="https://formsubmit.co/madenenihanumanturao@gmail.com"
          method="POST"
        >
          <Input type="text" name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <TextArea name="message" placeholder="Your Message" required />
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
