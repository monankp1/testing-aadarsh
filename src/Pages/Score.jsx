import * as React from "react";
import styled from "styled-components";
import { BottomNavigation, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import QuizStarter from "../components/QuizStarter";
import { BottomNavigationBar } from "../components/BottomNavigationBar";

function Score() {
  const navigate = useNavigate(); //

  const handleClick = () => {
    navigate("/play-activity");
  };

  return (
    <>
      <Background>
        <BackIcon onClick={() => navigate("/home")}>
          {/* Navigate back */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd569ca716b29d7f1a98071e37fd2287542114cc8243ecad11b40ab9ef936c8?apiKey=65b9bef5a9974c109a4afdb193963080&"
            alt="Back button"
          />
        </BackIcon>
        <MemoriesHeader>
          <MemoriesIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48e32c756171dfd83384040b5add7bdfba0735f59c6cb31f5a40dc08aa7053da?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Memories Icon"
          />
          <MemoriesTitle>Your Score</MemoriesTitle>
        </MemoriesHeader>
        <Div14>
          <KnowMyGuruContainer>
            <KnowMyGuruHeader>
              <KnowMyGuruInfo>
                <KnowMyGuruTitle>Know my guru</KnowMyGuruTitle>
                <KnowMyGuruDescription>
                  Let's dive into the divine life of our beloved Guruhari Pramukh
                  Swami Maharaj
                </KnowMyGuruDescription>
              </KnowMyGuruInfo>
              <KnowMyGuruImage
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2932fbe8a110926d9f90421f1ad2cb5b5560f4bc9f4535c3dbfcb58ecdf4fe?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                alt="Guruhari Pramukh Swami Maharaj"
              />
            </KnowMyGuruHeader>
            <ScoreContainer>
              <ScoreEmoji>🎉</ScoreEmoji>
              <ScoreLabel>Your Score</ScoreLabel>
              <ScoreValue>
                12<ScoreMaxValue>/15</ScoreMaxValue>
              </ScoreValue>
            </ScoreContainer>
          </KnowMyGuruContainer>
        </Div14>



        <QuizStarter />


        <BottomNavigation
          sx={{
            backgroundColor: "#0c1225",
            marginTop: "100px",
            position: "fixed",
            bottom: "0px",
            width: "100%", // Make sure BottomNavigation spans the full width
          }}
        >
          <BottomNavigationBar />
        </BottomNavigation>

      </Background>
    </>
  );
}

const Background = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #d29cfd 100%);
  min-height: 100vh;
  height: 100%

`;

const Quiz = styled.div`
  display: flex;
  padding: 9px 15px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 50vw;
  position: relative;
  left: 6rem;
  border-radius: 8px;
  background: var(--again-new-gradient, linear-gradient(180deg, #C86FFF 0%, #BFA1FF 100%));
  box-shadow: 0px 2px 1px 0px #270025;
`;

const PlayButtonIcon = styled.img`
  width: 18px;
  aspect-ratio: 1;
  object-fit: cover;
`;

const Div14 = styled.div`
  border-radius: 25px;
  background: transparent;
  // margin: 25px;
  border-color: rgba(29, 15, 42, 1);
  // border-style: solid;
  border-width: 2px;
  display: flex;
  margin-top: 18px;
  width: 100%;
  flex-direction: column;
  padding: 19px 23px;
`;
const KnowMyGuruContainer = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 358px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid var(--again-new-gradient, #c86fff);
  background: linear-gradient(168deg, #fff 0%, #e2c2ff 70.31%);
  justify-content: center;
`;

const KnowMyGuruHeader = styled.header`
  display: flex;
  gap: 16px;
`;

const KnowMyGuruInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin: auto 0;
`;

const KnowMyGuruTitle = styled.h2`
  font: 600 18px/130% Sora, sans-serif;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #270025;
`;
const BackIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
`;
const KnowMyGuruDescription = styled.p`
  font: 400 14px/20px Sora, sans-serif;
  color: var(--BG-Pink, #270025);
  letter-spacing: -0.17px;
  margin-top: 8px;
`;

const KnowMyGuruImage = styled.img`
  width: 120px;
  max-width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
`;

const ScoreContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 8px 16px;
  gap: 8px;
  border-radius: 8px;
  background-color: var(
    --BG-Gredient,
    linear-gradient(180deg, #270025 0%, #1d0f2a 100%)
  );
  color: #fff;
  font-weight: 600;
  letter-spacing: -0.17px;
  line-height: 140%;
`;

const ScoreEmoji = styled.span`
  font-size: 24px;
  line-height: 100%;
  margin: auto 0;
`;

const ScoreLabel = styled.span`
  font: 500 16px Sora, sans-serif;
  flex: 1;
  color: #1d0f2a;
  margin: auto 0;
`;

const ScoreValue = styled.span`
  font-size: 24px;
  color: #1d0f2a;

  font-family: Sora, sans-serif;
`;

const ScoreMaxValue = styled.span`
  font-weight: 400;
  color: #1d0f2a;

  font-size: 16px;
`;

const MemoriesHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px 10px 0 10px;

  border-radius: 10px;
  background: var(--Title, #FFF);
    padding: 0 8px;
`;

const MemoriesIcon = styled.img`
  width: 28px;
  object-fit: contain;
  height: 28px;
`;
const MemoriesTitle = styled.h2`
  flex: 1;
  margin: auto 0;
  font: 700 20px Arial, sans-serif;
`;
const MemoriesLink = styled.a`
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  color: #0000ee; // Default link color
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default Score;
