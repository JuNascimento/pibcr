import FooterContainer from "../components/footer";
import HeaderContainer from "../components/header";
import MinistriesContainer from "../components/ministries";
import ScrollToTop from "../helpers/scrollToTop";

const Ministries = () => {
  return (
    <ScrollToTop>
      <HeaderContainer />
      <MinistriesContainer />
      <FooterContainer />
    </ScrollToTop>
  );
};

export default Ministries;
