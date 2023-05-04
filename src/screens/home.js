import HeaderContainer from "../components/header";
import FooterContainer from "../components/footer";
import CelebrationsContainer from "../components/celebrations";
import WelcomeContainer from "../components/welcome";
import DonationsContainer from "../components/donations";
import YoutubeContainer from "../components/youtube";
import CarouselContainer from "../components/carousel";

const Home = () => {
  return (
    <>
      <HeaderContainer />
      <CarouselContainer />
      <CelebrationsContainer />
      <WelcomeContainer />
      <DonationsContainer />
      <YoutubeContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
