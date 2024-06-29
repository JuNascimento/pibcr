import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Slider, SliderImage } from "../slider/index.styles";

class DemoCarousel extends Component {
  render() {
    return (
      <Slider>
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
        >
          <div>
            <SliderImage src="images/sliderEvents/ceia-julho.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/comunicado-talmidim.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/retiro_casais.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-na-praca.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/ebf.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/quartas-avivamento.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/semana-jejum-julho.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/talmidim-mais-q-vencedores.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
