import FooterContainer from "../components/footer";
import HeaderContainer from "../components/header";
import MinistriesContainer from "../components/ministries";
import ScrollToTop from "../helpers/scrollToTop";
// import SliderContainer from "../components/slider";

const Ministries = () => {
  // const sliderItems = [
  //   {
  //     title: "Missões & Evangelismo",
  //     keywords: ["ir", "fazer", "evangelizar"],
  //     image: "images/sliderMinistries/foto0.jpeg",
  //   },
  //   {
  //     title: "Comunhão",
  //     keywords: ["reunir", "batizar", "integrar"],
  //     image: "images/sliderMinistries/foto1.jpeg",
  //   },
  //   {
  //     title: "Adoração",
  //     keywords: ["amar", "adorar", "celebrar"],
  //     image: "images/sliderMinistries/foto2.jpeg",
  //   },
  //   {
  //     title: "Discipulado",
  //     keywords: ["ensinar", "obedecer", "edificar"],
  //     image: "images/sliderMinistries/foto3.jpeg",
  //   },
  //   {
  //     title: "Serviço",
  //     keywords: ["servir", "preparar", "ministrar"],
  //     image: "images/sliderMinistries/foto4.jpeg",
  //   },
  // ];

  return (
    <ScrollToTop>
      <HeaderContainer />
      {/* <SliderContainer sliderItems={sliderItems} isHome={false} /> */}
      <MinistriesContainer />
      <FooterContainer />
    </ScrollToTop>
  );
};

export default Ministries;
