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
            <SliderImage src="images/sliderEvents/acao-evangelistica-dez-2023.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-natal-dez-2023.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/fim-de-ano-dez-2023.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
