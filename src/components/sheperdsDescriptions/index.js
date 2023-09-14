import {
  Descriptions,
  Shepherd,
  Name,
  Description,
  DescriptionText,
  Photo,
  SocialMediaIcon,
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
          <Name>Pr. Jônatas Cuppello Venlioles</Name>
          <Description>
            <DescriptionText>
              Pastor Presidente, formado em Teologia pelo Instituto de Educação
              Teológica e em Administração de Empresas pela UNIFESO. Casado com
              Irinete, tendo duas filhas: Júlia e Mariana. Conferencista e
              Escritor, escreveu os seguintes livros: O Tempo de Deus e o nosso
              Tempo; Cumprindo, hoje, a Missão de Deus; Renovando a Fé; Sem
              Tropeçar; Sede do Deus Vivo; Contagiados pelo Amor; Quem vocês
              dizem que eu sou; O agir de Deus em meio ao caos; e O Agir de Deus
              na Família.
              <a
                href="https://www.instagram.com/prjonatasvenlioles/"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialMediaIcon>
                  <img src="images/instagram.png" width="28px" />
                </SocialMediaIcon>
              </a>
            </DescriptionText>
            <Photo src={"images/sheperds/jonatas.png"} />
          </Description>
        </Shepherd>
        <Shepherd>
          <Name>Pr. Alexander Santanna da Silveira</Name>
          <Description>
            <DescriptionText>
              Pastor auxiliar da PIBCR, líder da Juventude Conectada. Com Sheila
              Peixoto, pai da Isabela e Isaque. Formado em Música Sacra pelo
              Seminário Teológico Batista do Sul do Brasil em 2001 e em Teologia
              pelo Seminário Teológico Betel em 2017. Tem o coração inflamado
              por Missões e Evangelização Local. Dentre suas vocações também
              estão o ensino das Escrituras.
              <a
                href="https://www.instagram.com/pastor.sander/"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialMediaIcon>
                  <img src="images/instagram.png" width="28px" />
                </SocialMediaIcon>
              </a>
            </DescriptionText>
            <Photo src={"images/sheperds/sander.png"} />
          </Description>
        </Shepherd>
        <Shepherd>
          <Name>Pr. Alcinei de Oliveira Alves</Name>
          <Description>
            <DescriptionText>
              Pastor líder do ministério de homens e grupo de casais. Casado com
              Ana Paula, Bacharel em Teologia, pai de dois filhos, Matheus e
              Lucas. Além de participar dos Mininistérios de Louvor e
              Intercessão.
              <a
                href="https://www.instagram.com/soualcinei1/"
                target={"_blank"}
                rel="noreferrer"
              >
                <SocialMediaIcon>
                  <img src="images/instagram.png" width="28px" />
                </SocialMediaIcon>
              </a>
            </DescriptionText>
            <Photo src={"images/sheperds/nei.png"} />
          </Description>
        </Shepherd>
        <Shepherd>
          <Name>Pr. Crispo Sostnes Freitas de Sousa</Name>
          <Description>
            <DescriptionText>
              Pastor líder do Ministério Vida Ativa. Casado com Elizete, formado
              em Teologia pela Faculdade Evangélica de Teologia no Seminário
              Unidos de Duque de Caxias.
            </DescriptionText>
            <Photo src={"images/sheperds/crispo.png"} />
          </Description>
        </Shepherd>
        <Shepherd>
          <Name>Pr. Joanes Costa de Oliveira</Name>
          <Description>
            <DescriptionText>
              Pastor líder do Ministério Resgate. Casado com Maria da Penha e
              pai de três filhos. Formado em Enfermagem e Teologia.
            </DescriptionText>
            <Photo src={"images/sheperds/joanes.png"} />
          </Description>
        </Shepherd>
      </Descriptions>
    </PageContainerDark>
  );
};

export default ShepherdsDescriptions;
