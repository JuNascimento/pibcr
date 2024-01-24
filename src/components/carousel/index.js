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
            <SliderImage src="images/sliderEvents/culto-jovem-sonhos.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/curso-noivos.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/despertamento-renovo.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/escola-lideres.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/retorno-ebd.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/talmidim-ferias.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
