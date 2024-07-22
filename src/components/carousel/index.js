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
            <SliderImage src="images/sliderEvents/homem-ao-maximo-setembro.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/mulher-unica-setembro.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/poder-da-alianca-setembro.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/celebrando-julho.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/educando-filhos-julho-22.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/curso-libras.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/cine-casais.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-adolescentes-julho-26.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/culto-praca-julho.png" />
          </div>
          <div>
            <SliderImage src="images/sliderEvents/escola-lideres-agosto.png" />
          </div>
        </Carousel>
      </Slider>
    );
  }
}

export default DemoCarousel;
