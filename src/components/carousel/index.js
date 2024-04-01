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
            <SliderImage src="images/sliderEvents/jejum-oracao-abril.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/encontro-a3-abril.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/encontro-redes-abril.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/quilo_do_amor.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
