import {
  LogoImage,
  Footer,
  FooterDivision,
  FooterTitle,
  FooterText,
  SocialMediaIcons,
  SocialMediaIcon,
} from "./index.styles";
import GrayLogo from "../../images/pibLogoCinza.png";

const FooterContainer = () => {
  return (
    <Footer>
      <LogoImage src={GrayLogo} />
      <FooterDivision>
        <FooterTitle>Sobre nós</FooterTitle>
        <FooterText>
          Primeira Igreja Batista em Coelho da Rocha. Rua Joaquim Gomes de
          Andrade, 37 - Coelho da Rocha, São João de Meriti - RJ. 21 2751-0075 -
          WhatsApp 21 97681-3783 | pibcoelhorocha@yahoo.com.br
        </FooterText>
      </FooterDivision>
      <FooterDivision>
        <FooterTitle>Nos acompanhe nas redes sociais</FooterTitle>
        <SocialMediaIcons>
          <a
            href="https://www.instagram.com/pibcroficial/"
            target={"_blank"}
            rel="noreferrer"
          >
            <SocialMediaIcon>
              <img src="images/instagram.png" width="28px" />
            </SocialMediaIcon>
          </a>
          <a
            href="https://www.facebook.com/pibcroficial"
            target={"_blank"}
            rel="noreferrer"
          >
            <SocialMediaIcon>
              <img src="images/facebook.png" width="28px" />
            </SocialMediaIcon>
          </a>
          <a
            href="https://www.youtube.com/@PIBCROficial"
            target={"_blank"}
            rel="noreferrer"
          >
            <SocialMediaIcon>
              <img src="images/youtube.png" width="28px" />
            </SocialMediaIcon>
          </a>
        </SocialMediaIcons>
      </FooterDivision>
    </Footer>
  );
};

export default FooterContainer;
