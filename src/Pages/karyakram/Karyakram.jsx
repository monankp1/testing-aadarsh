import React from 'react';
import styled from 'styled-components';

const ScheduleCard = () => {
    return (
        <CardContainer>
            <Header>
                <Title>ધૂલે</Title>
            </Header>
            <ScheduleList>
                <ScheduleItem>
                    <Time>05:00 થી 11:00</Time>
                    <Activity>આરામ, સ્નાન, નિત્ય પૂજા, મંદિર દર્શન</Activity>
                </ScheduleItem>
                <ScheduleItem>
                    <Time>11:00 થી 12:00</Time>
                    <Activity>બપોરનું ભોજન</Activity>
                </ScheduleItem>
                <ScheduleItem>
                    <Time>12:00 થી 03:30</Time>
                    <Activity>શિબિર પ્રથમ સત્ર (પ્રવૃત્તિ સત્ર)</Activity>
                </ScheduleItem>
                <ScheduleItem>
                    <Time>03:30 થી 04:30</Time>
                    <Activity>સમૂહ વિહાર, ગ્રુપફોટો, ડ્રોન શૂટિંગ</Activity>
                </ScheduleItem>
                <ScheduleItem>
                    <Time>04:30 થી 05:00</Time>
                    <Activity>રાતી ભોજન</Activity>
                </ScheduleItem>
                <ScheduleItem>
                    <Time>06:00 કાળેક</Time>
                    <Activity>ભજતા તલક પ્રવાસ</Activity>
                </ScheduleItem>
            </ScheduleList>
        </CardContainer>
    );
};

const CardContainer = styled.div`
background: linear-gradient(180deg, #e2c2ff 100%,#e2c2ff 50%, #fff 0%, );  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 95vw;
  height: 40vh;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 0px;
`;

const Logo = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 20px;
  font-family: 'Gujarati', sans-serif;
  color: purple;
  font-weight: 700;
`;

const ScheduleList = styled.ul`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  list-style: none;
  margin-bottom: 1rem;
`;

const ScheduleItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Time = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #ff6600;
`;

const Activity = styled.span`
  color: #333;
  font-size: 12px;
`;

export default ScheduleCard;
