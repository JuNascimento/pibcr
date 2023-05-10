import FooterContainer from "../components/footer";
import Header from "../components/header";
import AboutContainer from "../components/pageTitle";
import ScrollToTop from "../helpers/scrollToTop";

const About = () => {
  return (
    <ScrollToTop>
      <Header />
      <AboutContainer />
      <FooterContainer />
    </ScrollToTop>
  );
};

export default About;
