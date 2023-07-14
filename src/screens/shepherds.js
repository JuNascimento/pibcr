import FooterContainer from "../components/footer";
import HeaderContainer from "../components/header";
import ShepherdsDescriptions from "../components/sheperdsDescriptions";
import ScrollToTop from "../helpers/scrollToTop";

const Shepherds = () => {
  return (
    <ScrollToTop>
      <HeaderContainer />
      <ShepherdsDescriptions />
      <FooterContainer />
    </ScrollToTop>
  );
};

export default Shepherds;
