import React from 'react';
import styled from "styled-components";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { useNavigate } from "react-router-dom";
import QuizStarter from "../components/QuizStarter";

const ActivityPage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton onClick={() => navigate('/home')}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
        alt="Back icon"
      />
      <BottomNavigationBar />
      <Header>
        <Profile>
          <ProfileImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab67d02a8b8ad216eae4c696c2a0e629a71d161cc2bc274895d9505e7b4ec172?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Profile"
          />
          <ProfileName>Your Score</ProfileName>
        </Profile>
      </Header>
      <Content>
        <Card>
          <CardHeader>
            <CardTitle>Know my guru</CardTitle>
            <CardDescription>
              Let's dive into the divine life of our beloved Guruhari Pramukh Swami Maharaj
            </CardDescription>
          </CardHeader>
          <CardBody>
            <CardImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba2932fbe8a110926d9f90421f1ad2cb5b5560f4bc9f4535c3dbfcb58ecdf4fe?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="Guruhari Pramukh Swami Maharaj"
            />
            <ScoreDisplay>
              <ScoreEmoji>🎉</ScoreEmoji>
              <ScoreLabel>Your Score</ScoreLabel>
              <ScoreValue>
                12<MaxScore>/15</MaxScore>
              </ScoreValue>
            </ScoreDisplay>
          </CardBody>
        </Card>
      </Content>
      <QuizStarter />
    </Container>
  )
}


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  display: flex;
  flex-direction: column;
  position: relative;
`;


const BackButton = styled.img`
  width: 13px;
  aspect-ratio: 0.65;
  object-fit: auto;
  position: absolute;
  top: 20px;
  left: 20px;
`;


const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 24px;
  margin-top: 2rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 25px;
  aspect-ratio: 0.96;
  object-fit: auto;
  margin-right: 8px;
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const Content = styled.main`
  padding: 0 24px;
  width: 100%;
`;

const Card = styled.article`
  border-radius: 16px;
  border: 0px solid #1d0f2a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(168deg, #fff 0%, #e2c2ff 70.31%);
  margin-top: 10px;
  padding: 24px;
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;
`;

const CardTitle = styled.h2`
  font: 600 18px/130% Sora, sans-serif;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #270025;
`;

const CardDescription = styled.p`
  font: 400 14px/20px Sora, sans-serif;
  color: var(--BG-Pink, #270025);
  letter-spacing: -0.17px;
  margin-top: 8px;
`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 120px;
  max-width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    width: 150px;
  }
`;

const ScoreDisplay = styled.div`
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
  width: 100%;
`;

const ScoreEmoji = styled.span`
  font-size: 24px;
  line-height: 100%;
  margin: auto 0;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const ScoreLabel = styled.span`
  font: 500 16px Sora, sans-serif;
  flex: 1;
  color: #1d0f2a;
  margin: auto 0;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const ScoreValue = styled.span`
  font-size: 24px;
  color: #1d0f2a;
  font-family: Sora, sans-serif;
  @media (min-width: 768px) {
    font-size: 32px;
  }
  @media (min-width: 1024px) {
    font-size: 40px;
  }
`;

const MaxScore = styled.span`
  font-weight: 400;
  color: #1d0f2a;
  font-size: 16px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const BottomNavContainer = styled.div`
  position: realtive;
  top: 4rem;
  width: 100%;
`;

export default ActivityPage