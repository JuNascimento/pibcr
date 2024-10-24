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
            <SliderImage src="images/sliderEvents/vigilia-jovem-novembro.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/sexta-a-dois-setembro.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/ebd-classe-unica.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-vida-ativa.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-praca-outubro.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/aniver-coro.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
