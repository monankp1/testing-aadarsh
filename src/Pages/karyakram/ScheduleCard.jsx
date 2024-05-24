import React from 'react';
import styled from 'styled-components';

const ScheduleCard = () => {
  return (
    <CardContainer>
      <Header>
        <Title>નાશિક</Title>
      </Header>
      <ScheduleList>
        <ScheduleItem>
          <Time>૦૬:૦૦ થી 0૬:૪૫</Time>
          <Activity> સમુહ પૂજા </Activity>
        </ScheduleItem>
        <ScheduleItem>
          <Time>૦૬:૪૫ થી ૦૮:૦૦</Time>
          <Activity> ગ્રુપફોટો, મંદિર દર્શન, આરતી, અલ્પાહાર</Activity>
        </ScheduleItem>
        <ScheduleItem>
          <Time>૦૮:૦૦ થી ૧૨:૩૦</Time>
          <Activity>શિબિર પ્રથમ સત્ર </Activity>
        </ScheduleItem>
        <ScheduleItem>
          <Time>૧૨:૩૦ થી ૦૩:૩૦</Time>
          <Activity> બપોરનું ભોજન અને આરામ</Activity>
        </ScheduleItem>
        <ScheduleItem>
          <Time>૦૩:૩૦ થી ૦૫:૦૦</Time>
          <Activity> શિબિર દ્વિતીય સત્ર </Activity>
        </ScheduleItem>
        <ScheduleItem>
          <Time>૦૫:૦૦ થી ૦૯:૦૦ </Time>
          <Activity>જૂનું મંદિર, કાલારામ મંદિર, રામઘાટ, સુપર્ણા નાક કટાઈ - ભોજન </Activity>
        </ScheduleItem>
        <ScheduleItem>
          <Time>૦૯:૦૦ થી ૧૦:૦૦ </Time>
          <Activity>શિબિર તૃતીય સત્ર (નાશિક ઢોલ, સાંસ્કૃતિક કાર્યક્રમ)</Activity>
        </ScheduleItem>
      </ScheduleList>
    </CardContainer>
  );
};

const CardContainer = styled.div`
background: linear-gradient(180deg, #e2c2ff 100%,#e2c2ff 50%, #fff 0%, );  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100vw;
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
  padding: 5px;
  width: 100%;
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
