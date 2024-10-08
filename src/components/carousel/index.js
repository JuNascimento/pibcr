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
            <SliderImage src="images/sliderEvents/congresso-danca-teatro.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-jovem-setembro-2024.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/casa-paz-setembro-2024.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/congresso-mulheres.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
