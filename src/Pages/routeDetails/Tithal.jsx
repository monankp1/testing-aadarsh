import { IconButton } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export function Tithal() {
  const navigate = useNavigate();
  const headingStyle = {
    fontWeight: "bold",
    fontSize: "1.25rem"
  }
  return (
    <>
      <BackIcon onClick={() => navigate(-1)}>
        {/* Navigate back */}
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd569ca716b29d7f1a98071e37fd2287542114cc8243ecad11b40ab9ef936c8?apiKey=65b9bef5a9974c109a4afdb193963080&"
          alt="Back button"
        />
      </BackIcon>
      <MainContainer>
        <TemplePageContainer>
          <Header>
            <Title>BAPS Shree Swaminarayan Mandir, Tithal</Title>
          </Header>
          <TempleImageWrapper>
            <TempleImage
              src="https://www.baps.org//Data/Sites/1/Media/LocationImages/149149-tithal.jpg"
              alt="BAPS Shree Swaminarayan Mandir, Tithal"
            />
          </TempleImageWrapper>
        </TemplePageContainer>

        <Content>
          <Paragraph>
            અરબી સમુદ્રના દરિયા કિનારે આવેલું સુંદર સ્વામિનારાયણ મંદિર એટલે તિથલ.
            બ્બ્રહ્મસ્વરૂપ પ્રમુખસ્વામી મહારાજ બ્રહ્મસ્વરૂપ યોગીજી મહારાજના સમયથી અહીં વલસાડ જિલ્લામાં વિચરણમાં પધારતા. બ્રહ્મસ્વરૂપ પ્રમુખસ્વામી મહારાજે 1989માં સાગરપુત્રો (માછી સમાજ)ના આગ્રહને વશ થઈ જલઝીલણીનો સમૈયો આ સમુદ્ર કિનારે ઉજવ્યો હતો. તે સમયે તિથલ સમુદ્ર કિનારે હાલ મંદિર છે ત્યાં જ સમુદ્રમાં હરિકૃષ્ણ મહારાજને સ્નાન કરાવી જમીન ઉપર દ્રષ્ટિ કરાવી હતી. 1990ની વિદેશયાત્રા પહેલા અહીંના માછી મહાજનોએ સ્વામીજીને આ જમીન અર્પણ કરી હતી.
            ત્યારબાદ પૂજ્ય વિવેકસ્વરૂપ સ્વામી અહીં રહી સત્સંગ-પ્રવૃતિ અને મંદિરની જવાબદારી સંભાળતા. સંતોએ નાની ઓરડીમાં રહી વિકાસના મંડાણ શરૂ કર્યા. સંત નિવાસ અને ઘાસથી છાપરું બનાવી સભામંડપ તૈયાર કરી સત્સંગકાર્ય શરૂ કર્યું. હરિમંદિરમાંથી શિખરબદ્ધ મંદિરનો સંકલ્પ સ્વામીશ્રીએ આદર્યો.
            <br />
          </Paragraph>

          <Paragraph>
            અનેક વિઘ્નો અને વિરોધો વચ્ચે નિર્માણ પામેલ આ મંદિર માટે “માર ખાય તે માલ ખાય” એવું બોલી સ્વામીશ્રીએ તિથલ મંદિરને જન્મ જયંતીનો લાભ આપ્યો.
            પરમ પૂજ્ય મહંતસ્વામી મહારાજ દ્વારા વહેલી સવારે તા. 28-06-1999 ના રોજ મૂર્તિ પ્રતિષ્ઠા થઈ. તિથલ મંદિર એ બ્રહ્મસ્વરૂપ શાસ્ત્રીજી મહારાજનો સંકલ્પ હતો. અખિલ સ્વામિનારાયણ સંપ્રદાયમાં એક માત્ર સમુદ્ર કિનારે આવેલું આ પ્રથમ મંદિર છે.
            <br />
          </Paragraph>

          <Paragraph>
            સને 1999 તિથલ મંદિર માટે ઠાકોરજીની સુવર્ણતુલા થઈ અને સ્વામીશ્રીની જન્મ જયંતીનો પાંચ દિવસીય ઉત્સવ ઉજવાયો હતો. સને 2001 અને 2002 તથા સને 2003માં સ્વામીશ્રીની હાજરીમાં અહીં ઝોળી પર્વ ઉજવાયેલો.
            <br />
          </Paragraph>

          <Paragraph>
            તિથલ મંદિરની પ્રવૃતિ શરૂ થઈ ત્યારથી પૂજ્ય સંતોના પ્રયત્નોથી અહીં દરરોજના એક શેરથી પાંચ શેર દારૂ પીનારા 10,000 પરિવારો આજે શુદ્ધ અને પવિત્ર જીવન જીવતા થયા છે. અહીં છેલ્લા 25 વર્ષમાં 108 હરિમંદિરો તૈયાર થયા છે.
            45,000નો માનવ મહેરામણ અહીં અન્નકૂટના દર્શને આવે છે. આદિવાસીઓની ભક્તિ અને આસ્થાના સ્થાન સમું ધરમપુરનું મંદિર અને સાથે PSVTC (પ્રમુખસ્વામી વોકેશનલ ટ્રેનિંગ સેન્ટર)નું પ્રદાન પ્રમુખસ્વામી મહારાજ શતાબ્દી મહોત્સવે શરૂ થયું.
            <br />
          </Paragraph>


        </Content>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  position: relative;
  margin-top: 21px;
  height: auto;
  padding: 0 20px;
`;

const BackIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
`;

const Header = styled.header`
  background-color: #fff;
`;

const Title = styled.h2`
  background-color: #fff;
`;

const Content = styled.section`
  background-color: #fff;
`;

const Paragraph = styled.p`
  background-color: #fff;
`;

const TemplePageContainer = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;

const TempleTitle = styled.h1`
  color: var(--BG-Pink, #270025);
  font: 700 19px Overlock, sans-serif;
`;

const TempleImageWrapper = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 17px;
  border-radius: 8px;
`;

const TempleImage = styled.img`
  width: 100%;
  aspect-ratio: 1.47;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;

export default Tithal;
