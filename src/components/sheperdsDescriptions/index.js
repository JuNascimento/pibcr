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
          <Name>Pr. Sander Alexander Santanna da Silveira</Name>
          <Description>
            <DescriptionText>
              Pastor auxiliar da PIBCR, líder da Juventude Conectada. Casado a
              25 anos com Sheila Peixoto, pai da Isabela e Isaque. Formado em
              Música Sacra pelo Seminário Teológico Batista do Sul do Brasil em
              2001 e em Teologia pelo Seminário Teológico Betel em 2017. Tem o
              coração inflamado por Missões e Evangelização Local. Dentre suas
              vocações também estão o ensino das Escrituras.
            </DescriptionText>
            <Photo src={"images/sheperds/sander.jpeg"} />
          </Description>
        </Shepherd>
      </Descriptions>
    </PageContainerDark>
  );
};

export default ShepherdsDescriptions;
