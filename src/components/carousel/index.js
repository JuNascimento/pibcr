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
            <SliderImage
              height={"100%"}
              src="images/sliderEvents/placeholder-1800-720.png"
            />
          </div>
          <div>
            <SliderImage
              height={"100%"}
              src="images/sliderEvents/placeholder-1800-720.png"
            />
          </div>
          <div>
            <SliderImage
              height={"100%"}
              src="images/sliderEvents/placeholder-1800-720.png"
            />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
