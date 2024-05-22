import { IconButton } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Map from './../../img10.jpg';

export function Imagicaa() {
  const navigate = useNavigate();
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
            <Title>Imagicaa</Title>
          </Header>
          <TempleImageWrapper>
            <TempleImage
              src="https://www.imagicaaworld.com/wp-content/uploads/2023/08/about_imagicaa_1.jpg"
              alt="BAPS Shree Swaminarayan Mandir, Imagicaa"
            />
          </TempleImageWrapper>
        </TemplePageContainer>

        <Content>
          <Paragraph>
            2013 માં શરૂ થયેલ આ થીમ પાર્ક 130 એકરમાં ફેલાયેલ છે. મુખ્ય પાર્ક 6 વિભાગમાં વહેંચાયેલો છે. એકવામેજિકા વોટર પાર્કમાં વોટર સ્લાઇડ્સ, રાફ્ટિંગ રાઇડ, મેટ રેસર, લેઝી રિવર, વેવ પૂલ અને કિડી પૂલ વગેરે માણવા લાયક છે. 2016 માં ઇન્ડોર સ્નો પાર્કની પણ શરૂઆત થઈ.
            <br />
          </Paragraph>



          <div>
            <a href="https://www.dropbox.com/scl/fi/5038zuenkbygmkgu2p0wr/Theme-Park-Map-16x8-1.pdf?rlkey=5jno1o7glgdgw5e2pec3bzjli&e=1&dl=0">
              <h1>Imagicaa's Map</h1>
            </a>
          </div>
        </Content>
      </MainContainer>
    </>
  );
}

const Page = styled.div`
    width: 390px;
    height: 844px;
    flex-shrink: 0;
`

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
  text-align: center;

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

export default Imagicaa;
