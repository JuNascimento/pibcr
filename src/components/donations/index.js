import { useState } from "react";
import {
  Donations,
  DonationItems,
  DonationItem,
  DonationInfo,
  DonationItemInfo,
  DonationInput,
  DonationCopyButton,
  DonationsText,
  DonationCopyPaste,
  IconSvg,
} from "./index.styles";
import { BankSvg } from "../../components/svgIcons/bankSvg";
import { CopySvg } from "../../components/svgIcons/copySvg";
import { PixSvg } from "../../components/svgIcons/pixSvg";
import { CheckSvg } from "../../components/svgIcons/checkSvg";
import { CaixaBank } from "../../components/svgIcons/caixaBankSvg";

const DonationsContainer = () => {
  const [isCopied, setIsCopied] = useState(false);
  const copyText = "287829020001/46";

  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleClick = () => {
    copyTextToClipboard(copyText)
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Donations>
      <h2>Faça-nos uma doação</h2>
      <DonationsText>
        Com a sua doação, podemos continuar ajudando nossa comunidade
      </DonationsText>
      <DonationItems>
        <DonationItem>
          <h3>Transferência</h3>
          <DonationInfo>
            <DonationItemInfo>
              <p>
                <strong>Santander</strong>
              </p>
              <p>
                <strong>Agencia:</strong> 4227
              </p>
              <p>
                <strong>Conta:</strong> 13001081-7
              </p>
              <p>
                <strong>CNPJ:</strong> 287829020001/46
              </p>
            </DonationItemInfo>
            <IconSvg>
              <BankSvg />
            </IconSvg>
          </DonationInfo>
        </DonationItem>
        <DonationItem>
          <h3>Pix</h3>
          <DonationInfo>
            <div>
              <DonationItemInfo>
                <p>
                  <strong>Santander</strong>
                </p>
                <img src="images/pix-pib.png" width={"100%"} />
              </DonationItemInfo>
              <>
                <DonationCopyPaste>
                  <strong>Chave: </strong>
                  <DonationInput type="text" value={copyText} readOnly />
                  <DonationCopyButton onClick={handleClick}>
                    <span>{isCopied ? <CheckSvg /> : <CopySvg />}</span>
                  </DonationCopyButton>
                </DonationCopyPaste>
              </>
            </div>

            <IconSvg>
              <PixSvg />
            </IconSvg>
          </DonationInfo>
        </DonationItem>
        <DonationItem>
          <h3>Transferência</h3>
          <DonationInfo>
            <DonationItemInfo>
              <p>
                <strong>Caixa Econômica</strong>
              </p>
              <p>
                <strong>Agencia:</strong> 0190 003
              </p>
              <p>
                <strong>Conta:</strong> 00005486-0
              </p>
              <p>
                <strong>CNPJ:</strong> 287829020001/46
              </p>
            </DonationItemInfo>
            <IconSvg>
              <CaixaBank />
            </IconSvg>
          </DonationInfo>
        </DonationItem>
      </DonationItems>
    </Donations>
  );
};

export default DonationsContainer;
