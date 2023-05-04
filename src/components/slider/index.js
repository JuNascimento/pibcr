/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {
  Slider,
  SliderItem,
  SliderText,
  SliderTitle,
  SliderLabel,
  SliderImage,
} from "./index.styles";

const SliderContainer = (props) => {
  const [sliderPictureIndex, setSliderPictureIndex] = useState(0);

  const changeSlider = () => {
    let nextSliderPictureIndex = sliderPictureIndex + 1;
    if (nextSliderPictureIndex >= props.sliderItems.length) {
      nextSliderPictureIndex = 0;
    }

    setSliderPictureIndex(nextSliderPictureIndex);
  };

  useEffect(() => {
    setTimeout(changeSlider, 5000);
  }, [sliderPictureIndex]);

  return (
    <Slider>
      <SliderItem>
        <SliderText>
          {props.sliderItems[sliderPictureIndex] && (
            <SliderTitle>
              {props.sliderItems[sliderPictureIndex].title}
            </SliderTitle>
          )}
          {props.sliderItems[sliderPictureIndex] && (
            <SliderLabel>
              {props.sliderItems[sliderPictureIndex].keywords.join(" - ")}
            </SliderLabel>
          )}
        </SliderText>
        {props.sliderItems[sliderPictureIndex] && (
          <SliderImage
            src={props.sliderItems[sliderPictureIndex].image}
            isHome={props.isHome}
          />
        )}
      </SliderItem>
    </Slider>
  );
};

export default SliderContainer;
