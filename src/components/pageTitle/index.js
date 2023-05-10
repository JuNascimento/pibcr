import {
  About,
  Title,
  Subtitle,
  SubtitleText,
  Description,
  MapIcon,
  Emphasis,
  Line,
  Question,
  Number,
  QuestionInfo,
  DescriptionDivision,
  KnowMore,
  KnowMoreText,
} from "./index.styles";
import { MapSvg } from "../svgIcons/mapSvg";
import { ArrowSvg } from "../svgIcons/arrowSvg";
import { MarkerSvg } from "../svgIcons/markerSvg";
import { Link } from "react-router-dom";
import MyComponent from "../maps";
import { ROTA } from "../../variables";

const AboutContainer = () => {
  return (
    <About>
      <Title>Olá, somos a Primeira Igreja Batista em Coelho da Rocha!</Title>
      <Description>
        Somos uma família que visa <Emphasis> ACOLHER</Emphasis>,{" "}
        <Emphasis>INTEGRAR</Emphasis>, <Emphasis>ACOMPANHAR</Emphasis> e{" "}
        <Emphasis>CAPACITAR</Emphasis>.
      </Description>
      <Line />
      <SubtitleText>Venha conhecer um pouco mais da nossa Igreja</SubtitleText>
      <Description>
        Aqui você encontrará informações sobre os Ministérios e Projetos que
        temos, além de uma orientação geral acerca da dinâmica do funcionamento
        da nossa Igreja como Corpo de Cristo.
      </Description>
      <Description>
        Nosso desejo é que você seja um membro deste Corpo, se encaixando em
        algum ministério para continuar crescendo e servindo a Deus.
      </Description>
      <Question>
        <QuestionInfo>
          <h3>Como se tornar um membro do Corpo de Cristo PIBCR?</h3>
          <p>Uma pessoa pode se tornar membro por:</p>
          <ul>
            <li>Conversão</li>
            <li>Transferência (outra Igreja Batista)</li>
            <li>
              Declaração de fé (antiga aclamação, quando vem de outras
              denominações)
            </li>
          </ul>
        </QuestionInfo>
      </Question>
      <Subtitle>
        <SubtitleText>Próximos passos</SubtitleText>
        <MapIcon>
          <MapSvg />
        </MapIcon>
      </Subtitle>
      <DescriptionDivision>
        <Number>1</Number>
        <Description>
          Quando uma pessoa entrega sua vida a Cristo, ela deve começar na
          classe de novos convertidos. Essa classe também é para aqueles que
          chegaram de outras igrejas e não tiveram uma base, os fundamentos.
        </Description>
      </DescriptionDivision>
      <DescriptionDivision>
        <Number>2</Number>
        <Description>
          Após a classe, os novos convertidos passarão pelo Batismo. Os irmãos
          que estavam afastados e retornaram, bem como irmãos de outras igrejas,
          precisarão passar pela classe de integração. Essa classe visa passar a
          visão da igreja e integrar a pessoa na PIBCR.
        </Description>
      </DescriptionDivision>
      <DescriptionDivision>
        <Number>3</Number>
        <Description>
          O passo seguinte é a participação na EBD (Escola Bíblica Dominical) e
          na Escola de Líderes. Todos os membros devem fazer parte da EBD e
          passar pela Escola de Líderes.
        </Description>
      </DescriptionDivision>
      <SubtitleText>Estrutura da igreja</SubtitleText>
      <Description>
        A nossa Igreja é composta pelos Oficiais (Pastores e Diáconos). Também
        possui sua Diretoria e conta com dois Conselhos, o Administrativo (visa
        ajudar nas questões administrativas da Igreja) e o Fiscal (visa
        verificar toda a parte contábil).
      </Description>
      <Description>
        A PIBCR trabalha com uma estrutura ministerial, orientada pelo Espírito
        Santo. Os ministérios são equipes de trabalho que agem em áreas
        específicas da Igreja. Todos os ministérios caminham juntos para cumprir
        o chamado, para glorificar a Deus, para expandir o Reino sobre a terra e
        para a saúde espiritual, moral, emocional e física do ser humano.
      </Description>
      <KnowMore>
        <KnowMoreText>
          Para saber mais sobre os ministérios, clique{" "}
          <Link to={`${ROTA}ministerios`}>aqui</Link>
        </KnowMoreText>
        <ArrowSvg color="#ccc" />
        <ArrowSvg color="#ccc" />
      </KnowMore>
      <Subtitle>
        <SubtitleText>Onde estamos</SubtitleText>
        <MapIcon>
          <MarkerSvg />
        </MapIcon>
      </Subtitle>
      <MyComponent />
      <KnowMoreText>Venha nos fazer uma visita!</KnowMoreText>
    </About>
  );
};

export default AboutContainer;
