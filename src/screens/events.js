import FooterContainer from "../components/footer";
import HeaderContainer from "../components/header";
import EventsContainer from "../components/events";
import ScrollToTop from "../helpers/scrollToTop";

const Events = () => {
  return (
    <ScrollToTop>
      <HeaderContainer />
      <EventsContainer />
      <FooterContainer />
    </ScrollToTop>
  );
};

export default Events;
