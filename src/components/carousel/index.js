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
            <SliderImage src="images/sliderEvents/celebrando_a_transformacao.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto_mulheres_marco.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto_no_lar.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/peca_teatro_pascoa.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/quilo_do_amor.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto_homens_marco.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
