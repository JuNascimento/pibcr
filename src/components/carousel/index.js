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
            <SliderImage src="images/sliderEvents/vigilia.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/romper-em-fe.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-praca.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-fim-de-ano.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
