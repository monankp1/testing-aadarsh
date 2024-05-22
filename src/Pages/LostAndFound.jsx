import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BACKEND_ENDPOINT } from "../api/api";
import { BottomNavigationBar } from "../components/BottomNavigationBar";

const formatDatestamp = (dateString) => {
  const notificationDate = new Date(dateString);
  const today = new Date();

  if (notificationDate.toDateString() === today.toDateString()) {
    return 'Today';
  } else {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return notificationDate.toLocaleDateString('en-US', options);
  }
};

const formatTimestamp = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  let formattedHours = parseInt(hours);
  const ampm = formattedHours >= 12 ? 'PM' : 'AM';
  formattedHours = formattedHours % 12 || 12;
  return `${formattedHours}:${minutes} ${ampm}`;
};

function LostAndFound() {
  const [lostItems, setLostItems] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-foundItem");
  };

  const fetchData = async () => {
    try {
      let response = await axios.get(`${BACKEND_ENDPOINT}/lost_and_found/get_all`);
      setLostItems(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Header>
        <BackButton
          onClick={() => navigate('/home')}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
          alt="Back icon"
        />
        <Profile>
          <ProfileImage src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab67d02a8b8ad216eae4c696c2a0e629a71d161cc2bc274895d9505e7b4ec172?apiKey=3250d16d0ad044539de68d3e33600ce8&" alt="Profile" />
          <ProfileName>Lost and Found
            <AddButton
              onClick={handleClick}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c694fe63eee666fe1ae7b582df3d2174962135b8c9920c689ab652682988add?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="Add New found item"
            /></ProfileName>

        </Profile>
      </Header>
      <Content>
        {Array.isArray(lostItems) && lostItems.map((item, index) => (
          <Card key={index}>
            <DateTime>
              {formatDatestamp(item.date)}, {formatTimestamp(item.time)}
            </DateTime>
            <Description>
              {item.description}
            </Description>
            <Author>
              by: {item.by.name}
            </Author>
          </Card>
        ))}
      </Content>
      <BottomNavigationBar />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 24px;
  margin-top: 2rem;
`;

const BackButton = styled.img`
  width: 13px;
  aspect-ratio: 0.65;
  object-fit: auto;
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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
  flex-grow: 1;
`;

const AddButton = styled.img`
  width: 26px;
  aspect-ratio: 1;
  object-fit: auto;
  position: relative;
  left: 5px;
  bottom: 2px;
`;

const Content = styled.main`
  flex: 1;
  padding: 0 24px;
  overflow-y: auto;
`;

const Card = styled.article`
  border-radius: 16px;
  border: 0px solid #1d0f2a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(168deg, #fff 0%, #e2c2ff 70.31%);
  margin-top: 10px;
  padding: 24px;
`;

const DateTime = styled.div`
  color: rgba(39, 0, 37, 0.50);
  font-weight: bold;
  font-size: 1rem;
`;

const Description = styled.p`
  margin-top: 16px;
  overflow: hidden;
  color: rgba(39, 0, 37, 0.50);
  text-align: justify;
  font-weight: bold;
  font-size: 1rem;
`;

const Author = styled.div`
  color: black;
  margin-top: 8px;
`;

export default LostAndFound;
