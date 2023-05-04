import React, { Component } from "react";
import ScrollToTop from "../scrollToTop";
import {
  Ministries,
  MinistriesTitle,
  MinistriesTitleLabel,
  Subtitle,
  SubtitleText,
  Emphasis,
  MinistriesDescription,
  Ministry,
  MinistriesDuty,
  MinistriesDutyItem,
  MinistriesDescriptionLabel,
  MinistryName,
  MinistryDescription,
  MinistryLogo,
  MinistryInfo,
  MinistryDescriptionText,
} from "./index.styles";

class MinistriesContainer extends Component {
  render() {
    return (
      <>
        <Ministries>
          <MinistriesTitle>
            <MinistriesTitleLabel>Ministérios</MinistriesTitleLabel>
          </MinistriesTitle>
          <Subtitle>
            <SubtitleText>
              Os ministérios atuam nas áreas: <Emphasis>Louvor</Emphasis>,{" "}
              <Emphasis>Ensino da Palavra de Deus</Emphasis>,{" "}
              <Emphasis>Evangelização e Missões</Emphasis>,{" "}
              <Emphasis>Ação social</Emphasis>, <Emphasis>Família</Emphasis>,{" "}
              <Emphasis>entre outros</Emphasis>. Cada ministério tem uma direção
              a seguir (área de ação).
              <MinistriesDuty>
                Além disso, todos devem:
                <MinistriesDutyItem>
                  <Emphasis>1 - Ministrar</Emphasis>: cada participante do
                  ministério em questão deve saber o propósito e como realizar.
                </MinistriesDutyItem>
                <MinistriesDutyItem>
                  <Emphasis>2 - Arregimentar</Emphasis>: todo ministério precisa
                  crescer, envolver pessoas e encorajá-las para servir.
                </MinistriesDutyItem>
                <MinistriesDutyItem>
                  <Emphasis>3 - Treinar</Emphasis>: estamos aqui para fazer
                  discípulos, treinamos as pessoas para se desenvolverem. O
                  crescimento vai gerar mais frutos e novos discípulos.
                </MinistriesDutyItem>
              </MinistriesDuty>
            </SubtitleText>
          </Subtitle>
          <MinistriesDescription>
            <MinistriesDescriptionLabel>
              Nossos ministérios são:
            </MinistriesDescriptionLabel>
            <Ministry>
              <MinistryName>Ministério Vida Ativa</MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/vida-ativa.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    É um ministério voltado para a faixa etária acima dos 60
                    anos, ele existe para acompanhar e aproximar os idosos de
                    nossa Igreja e da comunidade, dedicando-lhes atenção e
                    buscando um contato mais próximo: físico, espiritual e
                    emocional, através de estudos, visitas, atividades e
                    passeios que realizamos no decorrer do ano.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério da Família</MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Existe para contribuir com o crescimento espiritual das
                    famílias e ser um canal onde as famílias possam ser
                    edificadas e tratadas. Temos como objetivo trabalhar com a
                    valorização dos relacionamentos entre casais, com a
                    orientação antes do casamento para noivos e namorados,
                    educação dos pais, entre outras atividades.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/ministerio-familia.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério de Esporte</MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/ministerio-esporte.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    O ministério de esporte existe para alcançar pessoas de
                    todas as idades para Cristo, usando a linguagem esportiva
                    como atrativo e ponte entre a comunidade e a Igreja. Dessa
                    forma, as pessoas praticam uma atividade esportiva, de
                    acordo com sua identificação com um esporte que, além de ser
                    importante para a saúde, é uma oportunidade singular de
                    serem edificados na Palavra de Deus, integrados ao serviço
                    no Corpo de Cristo e comissionados a ganhar outros para
                    Jesus, cumprindo a Grande Comissão.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério Jovem</MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Existe para alcançar jovens para Cristo, discipulando-os e
                    tendo como regra de fé e prática a Palavra de Deus, a fim de
                    que cresçam em conhecimento e maturidade espiritual, com
                    vistas ao desenvolvimento de futuros líderes em potencial.
                    Realizamos encontros, cultos, acampamentos, etc.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/ministerio-juventude.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério dos Adolescentes </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/adolescentes.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Seu propósito é acompanhar e ensinar o adolescente o caminho
                    do Senhor para que tenham um caráter cristão. Temos reuniões
                    semanais e encontros esporádicos.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério de Louvor e Adoração</MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    O Ministério de Louvor e Adoração existe para que, de forma
                    inspirativa, possa conduzir a Igreja através de cânticos e
                    hinos que remetem a Deus e a seus feitos e maravilhas.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/vida-ativa.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério de Comunhão</MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/ministerio-comunhao.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Existe para promover a integração entre os membros da
                    Igreja. Visa a comunhão da família de Deus, levando os
                    membros a práticas de relacionamentos espirituais, sociais e
                    solidários. Principais atribuições: desenvolver
                    planejamentos de programas especiais em datas comemorativas
                    e eventos, tais como: organizar atividades recreativas como
                    piqueniques, passeios e retiros no sítio, festa de
                    confraternização, café da manhã, almoço e encontro com
                    lideranças.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério dos Novos Convertidos </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Tem como objetivo acompanhar os novos convertidos em seus
                    primeiros passos na Igreja, tirando dúvidas e criando
                    vínculos. Os encontros das classes para os novos convertidos
                    acontecem às terças, às 19h, e aos domingos, às 8h. Esse é o
                    preparo para o batismo.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/ministerio-novos-convertidos.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério de Oração</MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/ministerio-oracao.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Tem como objetivo reunião de oração pela Igreja, Família e
                    pedidos diários. Procuramos incentivar o maior número de
                    pessoas sobre a importância da oração, através das reuniões
                    de oração todos os dias da semana (segunda à sexta), de 7h
                    às 8h.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Madrugada com Carinho </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    É um ministério que tem como finalidade servir a Jesus
                    através da evangelização e ajuda física (alimentos e roupas)
                    aos moradores em situação de rua do bairro e redondeza.
                    Quinzenalmente levamos alimentos a estes futuros irmãos,
                    resgatando dependentes químicos e os internando em centros
                    de recuperação para os ressocializar.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/madrugada-com-carinho.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério DNA de Deus </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/vida-ativa.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Existe para levar a palavra de Deus através de ministrações
                    com dança. Acreditamos na arte como ferramenta eficaz de
                    evangelismo, alcançando assim jovens e adolescentes para
                    Cristo, discipulando-os e tendo como regra de fé e prática a
                    Palavra de Deus, a fim de que cresçam em conhecimento e
                    maturidade espiritual.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério dos Homens </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    O propósito é ter um momento de falar abertamente aos homens
                    sobre temas relevantes, criar uma unidade e buscar um
                    crescimento em todas as áreas.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/ministerio-homens.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério Beneficiência </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/ministerio-beneficiencia.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Seu propósito é socorrer os que passam por dificuldades,
                    seja com um remédio, uma cesta básica ou outra coisa. Toda a
                    Igreja colabora para juntos ajudarmos quem está precisando.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério Som e Multimídia </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Tem como grande propósito propagar o evangelho através da
                    tecnologia, cuidando não apenas do áudio e vídeo dentro da
                    Igreja, mas os levando para fora da Igreja.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/vida-ativa.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério de Tecnologia e Suporte </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/vida-ativa.png" />ß
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Setor específico de apoio aos Ministérios, voltado para o
                    desenvolvimento e manutenção de mídias sociais, tais como:
                    App, Site, Facebook, Youtube, Instagram, Portfólio etc. Tem
                    como objetivo secundário o desenvolvimento de ferramentas
                    que permitam uma melhor e maior integração da membresia da
                    Igreja, independente do grupo ao qual pertença. Contato:
                    suporte@pibcr.com.br
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério Resgate </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Sua finalidade é alcançar os afastados da fé. Pessoas que já
                    passaram por alguma igreja evangélica e que por algum motivo
                    se desviaram. Esse ministério também é responsável pela
                    classe de integração de novos membros.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/vida-ativa.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério de Missões e Evangelismo </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/ministerio-missoes.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    A visão deste ministério é levar a PIBCR a desenvolver um
                    coração missionário e a viver Missões e Evangelismo como
                    estilo de vida, para que pessoas conheçam a Cristo. O
                    ministério planeja, executa e leva a igreja a se envolver em
                    viagens missionárias, evangelismo e cultos ao ar livre,
                    campanhas missionárias, oficinas de evangelismo, cultos
                    missionários que tragam para a Igreja a realidade
                    missionária e a necessidade de nos envolvermos na obra.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério Intercessão </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    É responsável em levar à Igreja até Deus em oração.
                    Intercede pelos cultos e pelos membros, pelos ministérios e
                    seus líderes. Antecipa-se aos projetos em intercessão.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/vida-ativa.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério do Abraço </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/ministerio-abraco.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Sua finalidade é acolher os visitantes, realizando uma
                    recepção todos os domingos à noite ou em algum evento
                    especial. Os visitantes são apresentados à Igreja e oramos
                    pela vida de cada um.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério de Mulheres</MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Sua finalidade é cuidar das mulheres. Através de cultos e
                    eventos especiais se reúnem para orar e receber instrução da
                    Palavra. Toda última quarta-feira do mês, há um culto só
                    para as mulheres.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/vida-ativa.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Ministério com crianças - TALMIDIN </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/talmidin.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Desejamos encorajar as crianças a viverem experiências com
                    Deus, para que elas ponham sua confiança no Senhor e
                    obedeçam a seus mandamentos. Buscamos criar oportunidades
                    para semear no coração das crianças de forma que elas possam
                    crescer e frutificar através dos encontros dominicais e dos
                    eventos intencionais durante o ano. Nossa equipe se reúne
                    todos os primeiros domingos de cada mês para orar, planejar
                    e consolidar ações importantes. Com as crianças de 0 a 11
                    anos, nos reunimos todos os domingos de manhã, atualmente em
                    classe única, e à noite atuando por faixa etária: Berçário:
                    0 a 23 meses; Maternal: 2 a 3 anos; Infantil I: 4 a 5 anos;
                    Infantil II: 6 a 8 anos; Juniores: 9 a 11 anos.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>
                Ministério com crianças - Discipulado Infantil
              </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Sua finalidade é ensinar às crianças o evangelho, abordando
                    as questões mais significativas. É um preparo para serem
                    discípulos de Cristo desde criança. O Discipulado Infantil é
                    destinado a crianças de 7 a 11 anos.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/talmidin.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Multiministério</MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/multiministerio.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    É voltado principalmente para mulheres, tanto da Igreja como
                    da comunidade, o trabalho, de modo integrativo, nas áreas da
                    vida física, mental, social e espiritual. O propósito é
                    servir a Deus, promovendo comunhão, integração, ação social
                    e evangelização, além de criar oportunidades de melhoria na
                    renda familiar, por meio das oficinas de artesanato,
                    promover renovo espiritual ministrado pela palavra de Deus.
                    Oficinas de artesanato: Tricô - Crochê - Macramê - Biscuit -
                    Vagonite - Pintura em tecido – Bordado em pedras Oficinas de
                    artesanato: Tricô - Crochê - Macramê - Biscuit - Vagonite -
                    Pintura em tecido – Bordado em pedras
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Embaixadores do Rei</MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    A Organização Embaixadores do Rei (OER) é uma organização
                    missionária para meninos e rapazes de 9 a 17 anos
                    (denominados Embaixadores do Rei - ER), levando-os ao
                    conhecimento bíblico, organizacional e físico. Em nossa
                    Igreja trabalhamos com a faixa etária de 6 a 19 anos. A OER
                    tem por finalidade cuidar do ER no seu crescimento
                    espiritual, físico e moral, ajudando o ER a moldar o seu
                    caráter espiritual e moral.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/embaixadores-do-rei.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Mensageiras do Rei</MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/mensageiras-do-rei.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    É uma organização da denominação que trabalha com meninas de
                    9 a 17 anos. Ensina os princípios da Palavra e treina para
                    que cada menina seja uma líder.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Escola de Líderes</MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText>
                    Formar líderes para esse tempo. A Escola de Líderes é
                    dividia em seis módulos, cada um trata de uma área e visa um
                    discipulado voltado para a prática. Todos os membros
                    precisam passar pela Escola de Líderes.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/vida-ativa.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Projeto discipulo Amado</MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/vida-ativa.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Líderes que acompanham e discipulam outros membros. Pelo
                    menos uma vez por mês o líder/discipulador irá se encontrar
                    com seu discípulo para orar, tirar dúvidas, ensinar,
                    corrigir em amor e acompanhar sua caminhada cristã.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>
                Projeto Missionário - Contagiados pelo Amor
              </MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Esse projeto é para toda a Igreja: cada membro, no seu dia a
                    dia, sendo um missionário. Entendemos que em qualquer lugar
                    que estejamos (trabalho, festa, bairro etc.) é um lugar de
                    atuação para gerar relacionamentos que poderão resultar em
                    frutos.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/contagiados-pelo-amor.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Projeto Casa de Paz </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/casa-de-paz.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Semestralmente realizamos o projeto Casas de Paz. Ele visa a
                    conversão. É um projeto evangelístico que visa a conversãose
                    espalha por várias casas de pessoas não crentes e dura oito
                    semanas.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Escola de Cura</MinistryName>
              <MinistryInfo>
                <MinistryDescription>
                  <MinistryDescriptionText left={false}>
                    Estamos nos preparando para ter um ministério voltado para a
                    cura da alma e libertação do passado. Um tempo de tratamento
                    emocional e espiritual. Em breve.
                  </MinistryDescriptionText>
                </MinistryDescription>
                <MinistryLogo src="images/vida-ativa.png" />
              </MinistryInfo>
            </Ministry>
            <Ministry>
              <MinistryName>Escolinha de Futebol </MinistryName>
              <MinistryInfo>
                <MinistryLogo src="images/vida-ativa.png" />
                <MinistryDescription>
                  <MinistryDescriptionText left={true}>
                    Estamos elaborando uma escolinha para garotos de 5 a 12
                    anos. Além da questão esportiva, o objetivo é ensinar os
                    princípios da Palavra em uma sala ao lado da quadra de
                    esportes. Em breve.
                  </MinistryDescriptionText>
                </MinistryDescription>
              </MinistryInfo>
            </Ministry>
          </MinistriesDescription>
          <ScrollToTop />
        </Ministries>
      </>
    );
  }
}

export default MinistriesContainer;
