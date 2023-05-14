import {
  Celebrations,
  CelebrationsTitle,
  CelebrationsInfo,
  CelebrationItem,
  CelebrationItemList,
} from "./index.styles";
import { Link } from "react-router-dom";

const CelebrationsContainer = () => {
  return (
    <Celebrations>
      <CelebrationsTitle>NOSSAS CELEBRAÇÕES</CelebrationsTitle>
      <CelebrationItemList>
        <CelebrationItem>
          Quarta-feira às <strong>19h</strong>
        </CelebrationItem>
        <CelebrationItem>
          Domingos às <strong>09:30</strong> e <strong>18h</strong>
        </CelebrationItem>
      </CelebrationItemList>
      <CelebrationsInfo>
        Confira os demais horários clicando{" "}
        <Link to={"programacao"} preventScrollReset={false}>
          aqui
        </Link>
      </CelebrationsInfo>
    </Celebrations>
  );
};

export default CelebrationsContainer;
