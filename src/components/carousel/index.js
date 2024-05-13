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
            <SliderImage src="images/sliderEvents/mes-familia.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/batismo-maio.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-colheita-maio.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-jovem-maio.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/testemunho.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
