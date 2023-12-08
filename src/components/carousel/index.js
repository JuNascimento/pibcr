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
            <SliderImage src="images/sliderEvents/aniver-igreja.jpeg" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/batismo-dezembro-2023.jpeg" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/jejum-oracao-dezembro-2023.jpeg" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/batismo.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
