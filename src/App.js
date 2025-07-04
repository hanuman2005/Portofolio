import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ExperienceSection from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <ExperienceSection />
      <Certificates/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
