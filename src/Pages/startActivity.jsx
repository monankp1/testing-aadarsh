import * as React from "react";
import styled from "styled-components";

const data = [
  {
    year: 1986,
    isSelected: false,
  },
  {
    year: 1994,
    isSelected: true,
  },
  {
    year: 2002,
    isSelected: false,
  },
  {
    year: 2010,
    isSelected: false,
  },
];

export function startActivity() {
  return (
    <AppContainer>
      <AppHeader>
        <HeaderContent>
          <Time>9:41</Time>
          <SignalIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f1f3c9c48baa1e63d5401d7b43d90fa64ff0101819e11843d4791dca2836a92?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Signal icon"
          />
        </HeaderContent>
      </AppHeader>
      <AppContent>
        <DateHeader>
          <CalendarIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/05e934569c5aab35766d3bbd05030e8158d6ed2d91423aadf7b4ab164d867d2c?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Calendar icon"
          />
          <DateText>03/10</DateText>
        </DateHeader>
        <QuestionSection>
          <QuestionCard>
            <QuestionContent>
              <QuestionTitle>Do you know?</QuestionTitle>
              <QuestionText>
                What mandir gives to the society and the population connected
                with its divine environment?
              </QuestionText>
            </QuestionContent>
            {data.map((item) => (
              <YearButton key={item.year} isSelected={item.isSelected}>
                <YearText>{item.year}</YearText>
                {item.isSelected ? (
                  <SelectedIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/431bd25f-7cd6-48ef-bb9d-1217c67c1673?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                    alt="Selected icon"
                  />
                ) : (
                  <UnselectedIcon />
                )}
              </YearButton>
            ))}
          </QuestionCard>
          <NavigationButtons>
            <PreviousButton>
              <PreviousButtonText>Previous</PreviousButtonText>
            </PreviousButton>
            <NextButton>Next</NextButton>
          </NavigationButtons>
        </QuestionSection>
      </AppContent>
      <AppFooter>
        <FooterText>I'm the chosen yuvak of BAPS.</FooterText>
      </AppFooter>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  border-radius: 30px;
  background-color: #fff;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
`;

const AppHeader = styled.header`
  background: var(
    --BG-Gredient,
    linear-gradient(180deg, #270025 0%, #1d0f2a 100%)
  );
  padding: 10px 18px;
  color: #fff;
  text-align: center;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Time = styled.div`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.38px;
  line-height: 129%;
  font-feature-settings: "case" on;
  font-family: SF Pro Text, sans-serif;
`;

const SignalIcon = styled.img`
  width: 71px;
`;

const AppContent = styled.main`
  background: var(
    --Light-Pink-Gradient,
    linear-gradient(168deg, #fff 0%, #e2c2ff 70.31%)
  );
  padding: 0 16px;
`;

const DateHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  margin: 16px 0 0 10px;
`;

const CalendarIcon = styled.img`
  width: 13px;
`;

const DateText = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: Baloo 2, sans-serif;
  background: var(
    --BG-Gredient,
    linear-gradient(180deg, #270025 0%, #1d0f2a 100%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const QuestionSection = styled.section`
  margin-top: 79px;
`;

const QuestionCard = styled.div`
  border-radius: 16px;
  border: 1px solid var(--again-new-gradient, #c86fff);
  background: var(
    --Light-Pink-Gradient,
    linear-gradient(168deg, #fff 0%, #e2c2ff 70.31%)
  );
  padding: 24px 9px;
`;

const QuestionContent = styled.div`
  color: var(--BG-Purple, #1d0f2a);
`;

const QuestionTitle = styled.h2`
  font: 600 18px/130% Sora, sans-serif;
`;

const QuestionText = styled.p`
  font: 400 14px/20px Poppins, sans-serif;
  letter-spacing: -0.17px;
  margin-top: 8px;
`;

const YearButton = styled.button`
  border-radius: 20px;
  background: ${(props) =>
    props.isSelected
      ? "var(--again-new-gradient, linear-gradient(180deg, #c86fff 0%, #bfa1ff 100%))"
      : "#fff"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;
  padding: 15px 28px;
  margin: 16px 0 0 10px;
`;

const YearText = styled.span`
  font-family: Baloo 2, sans-serif;
  background: var(
    --BG-Gredient,
    linear-gradient(180deg, #270025 0%, #1d0f2a 100%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SelectedIcon = styled.img`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: var(
    --BG-Gredient,
    linear-gradient(180deg, #270025 0%, #1d0f2a 100%)
  );
`;

const UnselectedIcon = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 1px solid var(--BG-Gredient, #270025);
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  margin-top: 177px;
  font-size: 25px;
  font-weight: 600;
`;

const PreviousButton = styled.button`
  border-radius: 10px;
  border: 1px solid var(--BG-Gredient, #270025);
  padding: 16px 27px;
`;

const PreviousButtonText = styled.span`
  font-family: Poppins, sans-serif;
  background: var(
    --BG-Gredient,
    linear-gradient(180deg, #270025 0%, #1d0f2a 100%)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const NextButton = styled.button`
  border-radius: 10px;
  background: var(
    --BG-Gredient,
    linear-gradient(180deg, #270025 0%, #1d0f2a 100%)
  );
  color: #fff;
  font-family: Poppins, sans-serif;
  padding: 17px 53px;
`;

const AppFooter = styled.footer`
  margin-top: 23px;
  text-align: center;
`;

const FooterText = styled.p`
  font-size: 20px;
  color: var(--Title, #fff);
  font-weight: 400;
  line-height: 137.2%;
  font-family: Overlock, sans-serif;
  background-color: #270025;
  border: 1px solid rgba(255, 255, 255, 1);
  padding: 11px 60px 5px;
`;
