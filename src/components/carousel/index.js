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
            <SliderImage src="images/sliderEvents/educando-filhos.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/homem-ao-maximo.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/mulher-unica.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/poder-da-alicanca-2024.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
