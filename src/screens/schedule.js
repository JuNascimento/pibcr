import FooterContainer from "../components/footer";
import HeaderContainer from "../components/header";
import ScheduleContainer from "../components/schedule";
import ScrollToTop from "../helpers/scrollToTop";

const Schedule = () => {
  return (
    <ScrollToTop>
      <HeaderContainer />
      <ScheduleContainer />
      <FooterContainer />
    </ScrollToTop>
  );
};

export default Schedule;
