import { Welcome, WelcomeText, WelcomeInfo } from "./index.styles";
import { ArrowSvg } from "../../components/svgIcons/arrowSvg";
import { Link } from "react-router-dom";

const WelcomeContainer = () => {
  return (
    <Welcome>
      <h2>Seja bem vindo</h2>
      <WelcomeText>
        Envolver-se com as atividades da igreja é a melhor maneira para
        estreitar os laços de amizade e também para seu crescimento espiritual.
        Aqui na Primeira Igreja você terá a oportunidade de crescer em seu
        relacionamento com Cristo através das diversas atividades que temos. Vem
        com a família da <strong>PIBCR</strong>!
      </WelcomeText>
      <WelcomeInfo>
        <h3>Vem dar uma olhada nas nossas atividades!</h3>
        <Link to={"eventos"}>
          <ArrowSvg degrees={0} color={"#151922"} />
        </Link>
      </WelcomeInfo>
    </Welcome>
  );
};

export default WelcomeContainer;
