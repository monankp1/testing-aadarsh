import * as React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";
import Questions from "../components/Questions";


function PlayQuiz() {
  const navigate = useNavigate(); //
  return (
    <>
      <TopBar>
        <IconButton onClick={() => navigate(-1)}>
          {" "}
          {/* Navigate back */}
          <ArrowBackIosNewIcon />
        </IconButton>
      </TopBar>
      <MemoriesHeader>
        <MemoriesIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/48e32c756171dfd83384040b5add7bdfba0735f59c6cb31f5a40dc08aa7053da?apiKey=3250d16d0ad044539de68d3e33600ce8&"
          alt="Memories Icon"
        />
        <MemoriesTitle>Your Activity Score</MemoriesTitle>
      </MemoriesHeader>
      <Div14>
        <Questions />
      </Div14>
    </>
  );
}

const Div14 = styled.div`
  border-radius: 25px;
  background: linear-gradient(180deg, #ffffff 0%, #d29cfd 100%);
  // margin: 25px;
  border-color: rgba(29, 15, 42, 1);
  // border-style: solid;
  border-width: 2px;
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: column;
  padding: 19px 23px;
  box-shadow: 0px 0px 41px -1px #000000;
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
const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin: 0 auto;

  color: #1d0f2a;
  padding: 0 8px;
`;

const MemoriesIcon = styled.img`
  width: 28px;
  object-fit: contain;
  height: 28px;
  margin-top: 60px;
`;
const MemoriesTitle = styled.h2`
  flex: 1;
  margin: auto 0;
  margin-top: 60px;
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

export default PlayQuiz;
