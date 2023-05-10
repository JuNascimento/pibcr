import HeaderContainer from "../components/header";
import FooterContainer from "../components/footer";
import CelebrationsContainer from "../components/celebrations";
import WelcomeContainer from "../components/welcome";
import DonationsContainer from "../components/donations";
import YoutubeContainer from "../components/youtube";
import CarouselContainer from "../components/carousel";
import ScrollToTop from "../helpers/scrollToTop";

const Home = () => {
  return (
    <ScrollToTop>
      <HeaderContainer />
      <CarouselContainer />
      <CelebrationsContainer />
      <WelcomeContainer />
      <DonationsContainer />
      <YoutubeContainer />
      <FooterContainer />
    </ScrollToTop>
  );
};

export default Home;
