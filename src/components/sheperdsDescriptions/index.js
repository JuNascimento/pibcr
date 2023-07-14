import {
  Descriptions,
  Shepherd,
  Name,
  Description,
  DescriptionText,
  Photo,
} from "./index.styles";
import {
  PageContainerDark,
  PageTitle,
  PageTitleLabelDark,
} from "../../global.styles";

const ShepherdsDescriptions = () => {
  return (
    <PageContainerDark>
      <PageTitle>
        <PageTitleLabelDark>Pastores</PageTitleLabelDark>
      </PageTitle>
      <Descriptions>
        <Shepherd>
          <Name>Jonatas Cuppello Venlioles</Name>
          <Description>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl
              felis, malesuada sed dictum et, finibus vel risus. Pellentesque et
              semper diam. Suspendisse id velit non turpis congue semper. Nulla
              porta odio id ipsum mollis iaculis. Nullam vulputate turpis neque,
              eu fringilla dui feugiat a. Nunc ut leo id massa ultrices
              vehicula. Maecenas eu nunc a leo porta porttitor ac quis magna.
              Proin mi leo, commodo sed neque ac, euismod pretium nulla. Aenean
              auctor, diam non facilisis efficitur, dolor massa molestie ante,
              et efficitur nulla leo ut libero. Quisque eu arcu vitae orci
              tristique porttitor. Quisque facilisis ultricies ipsum ac varius.
            </DescriptionText>
            <Photo />
          </Description>
        </Shepherd>
        <Shepherd>
          <Name>Jonatas Cuppello Venlioles</Name>
          <Description>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nisl
              felis, malesuada sed dictum et, finibus vel risus. Pellentesque et
              semper diam. Suspendisse id velit non turpis congue semper. Nulla
              porta odio id ipsum mollis iaculis. Nullam vulputate turpis neque,
              eu fringilla dui feugiat a. Nunc ut leo id massa ultrices
              vehicula. Maecenas eu nunc a leo porta porttitor ac quis magna.
              Proin mi leo, commodo sed neque ac, euismod pretium nulla. Aenean
              auctor, diam non facilisis efficitur, dolor massa molestie ante,
              et efficitur nulla leo ut libero. Quisque eu arcu vitae orci
              tristique porttitor. Quisque facilisis ultricies ipsum ac varius.
            </DescriptionText>
            <Photo />
          </Description>
        </Shepherd>
      </Descriptions>
    </PageContainerDark>
  );
};

export default ShepherdsDescriptions;
