import { IconButton } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export function ImageDetails() {
  const navigate = useNavigate();
  return (
    <>
      <IconButton onClick={() => navigate(-1)}>
        {" "}
        {/* Navigate back */}
        <ArrowBackIosNewIcon />
      </IconButton>
      <MainContainer>
        <TemplePageContainer>
          <Header>
            <Title>BAPS Shree Swaminarayan Mandir, Bharuch</Title>
          </Header>
          <TempleImageWrapper>
            <TempleImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/351507c98c19beda031a9ab798515020e4dfe2b615ea1d64e6a0c47ee617db8e?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="BAPS Shree Swaminarayan Mandir, Nashik"
            />
          </TempleImageWrapper>
        </TemplePageContainer>

        <Content>
          <Paragraph>
            5000 વર્ષથી નર્મદા નદીના તટે વસેલું સુંદર પૌરાણિક શહેર એટલે ભરૂચ.
            અહીં ભૃગુ ઋષિનો આશ્રમ હોવાથી પુરાણોમાં તે ભૃગુપુર કે ભૃગુકચ્છ નામથી
            પ્રસિદ્ધ હતું. બલિરાજાએ અહીં દશાશ્વમેઘ યજ્ઞ કરેલો જ્યાં આજે પણ
            દશાશ્વમેઘ ઘાટ રહેલો છે. અહીં જ ભગવાન વામનસ્વરૂપે બલિ રાજા પાસે
            ભિક્ષા માંગવા આવ્યા હતા.
            <br />
          </Paragraph>
          <Paragraph>
            ભગવાન સ્વામિનારાયણ અને ભરૂચ
            <br />
          </Paragraph>
          <Paragraph>
            સંવંત 1855માં નીલકંઠવર્ણી બે દિવસ માટે નર્મદા નદીના તટે રોકાયા હતા.
            ત્યારબાદ દક્ષિણ ગુજરાત તરફ જતા શ્રીજી મહારાજ અનેકવાર આ ભૂમિ પર
            પધાર્યા છે. ભરૂચની સમીપે આવેલી તીર્થભૂમિ એટલે ઝાડેશ્વર. અહીં
            અશ્વિનીકુમારોએ ભગવાનને પ્રસન્ન કરવા માટે તપ કરેલું.
            <br />
          </Paragraph>
          <Paragraph>
            શાસ્ત્રીજી મહારાજ અને ભરૂચ
            <br />
          </Paragraph>
          <Paragraph>
            શાસ્ત્રીજી મહારાજ અહીં ઘણીવાર પધાર્યા છે. કથા-વાર્તા દ્વારા સૌને
            સત્સંગનું સુખ આપ્યું છે. અટલાદરા મંદિરના નિર્માણ વખતે પરમ પૂજ્ય
            પ્રમુખસ્વામી મહારાજને ચૂનાની ગરમીથી શરીરે લાલ ચાઠા થઈ ગયા ત્યારે તેઓ
            ઝાડેશ્વરમાં બિરાજમાન બ્રહ્મસ્વરૂપ શાસ્ત્રીજી મહારાજ પાસે પધાર્યા
            હતા. શાસ્ત્રીજી મહારાજે તેમના શરીરે હાથ ફેરવતા બધા જ ડાઘ ધીરે ધીરે
            દૂર થઈ ગયા હતા.
            <br />
          </Paragraph>
          <Paragraph>
            યોગીજી મહારાજ અને ભરૂચ
            <br />
          </Paragraph>
          <Paragraph>
            સને 1968માં બ્રહ્મસ્વરૂપ યોગીજી મહારાજની ઉપસ્થિતિમાં પૂ.
            પ્રમુખસ્વામી મહારાજે પારાયણ કરી હતી. યોગીજી મહારાજે અહીંના સત્સંગને
            ખૂબ પોષણ આપેલું. તેઓના જ વરદ હસ્તે તા.08-08-1969ના રોજ પટેલ
            સોસાયટીમાં મંદિરની ખાતવિધિ થઈ હતી.
            <br />
          </Paragraph>
          <Paragraph>
            પ્રમુખસ્વામી મહારાજ અને ભરૂચ
            <br />
          </Paragraph>
          <Paragraph>
            સને 1975માં બ્રહ્મસ્વરૂપ યોગીબાપા દ્વારા ખાત થયેલ જગ્યામાં તૈયાર
            થયેલ મંદિરમાં પરમ પૂજ્ય પ્રમુખસ્વામી મહારાજે અક્ષરપુરુષોત્તમ
            મહારાજની પ્રતિષ્ઠા કરી હતી.
            <br />
          </Paragraph>
          <Paragraph>
            BAPS સંસ્થામાં સૌપ્રથમ આ મંદિરના રંગમંડપમાં નર્મદાના નીરથી મહાઅભિષેક
            કરવા માટે નીલકંઠવર્ણીની મૂર્તિની પ્રતિષ્ઠા પણ અહીં જ કરવામાં આવી
            હતી.
            <br />
          </Paragraph>
          <Paragraph>
            પ્રમુખસ્વામી મહારાજ 2011 માં હ્રદયરોગના હુમલા બાદ બીજા જ દિવસે અહીં
            ભરૂચમાં જ લથડતી તબિયતે ઠાકોરજીના દર્શન માટે ગયા હતા. તેની સ્મૃતિ
            કરાવતો વિડીયો&nbsp;
            <br />
          </Paragraph>
          <Paragraph>
            વિશેષમાં આ મંદિરના રંગમંડપમાં નર્મદાના નીરથી મહાઅભિષેક કરવા માટે
            નીલકંઠવર્ણીની મૂર્તિની પ્રતિષ્ઠા પણ BAPS માં સૌપ્રથમ અહીં જ કરવામાં
            આવી હતી.
            <br />
          </Paragraph>
          <Paragraph>
            પ્રમુખસ્વામી મહારાજ 2011 માં હ્રદયરોગના હુમલા બાદ બીજા જ દિવસે અહીં
            ભરૂચમાં જ લથડતી તબિયતે પણ ઠાકોરજીના દર્શન માટે ગયા હતા તેની સ્મૃતિ
            કરાવતો વિડીયો
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
`;

export default ImageDetails;
