import * as React from "react";
import styled from "styled-components";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_ENDPOINT } from "../api/api";
import { createContext } from "react";

export const DataContext = createContext(0);

const formatDatestamp = (dateString) => {
  const notificationDate = new Date(dateString);
  const today = new Date();

  if (notificationDate.toDateString() === today.toDateString()) {
    return 'Today';
  } else {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = notificationDate.toLocaleDateString('en-US', options);
    return formattedDate;
  }
}

const formatTimestamp = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  let formattedHours = parseInt(hours);
  const ampm = formattedHours >= 12 ? 'PM' : 'AM';
  formattedHours = formattedHours % 12 || 12;
  const formattedTime = `${formattedHours}:${minutes} ${ampm}`;
  return formattedTime;
}

function SadgunLekhan() {
  const [sadguns, setSadguns] = useState([]);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/add-sadgun");
  }

  const fetchData = async () => {
    try {
      let response = await axios.get(`${BACKEND_ENDPOINT}/sadgun/get_all`);
      setSadguns(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, [])

  return (
    <Container>
      <BackButton onClick={() => navigate('/home')}
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
        alt="Back icon"
      />
      <Header>
        <Profile>
          <ProfileImage
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab67d02a8b8ad216eae4c696c2a0e629a71d161cc2bc274895d9505e7b4ec172?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Profile"
          />
          <ProfileName>Sadgun Lekhan</ProfileName>
          <AddButton onClick={handleClick}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c694fe63eee666fe1ae7b582df3d2174962135b8c9920c689ab652682988add?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Add New Sadgun"
          />
        </Profile>
      </Header>
      <Content>
        {Array.isArray(sadguns) && sadguns.map((item) => (
          <Card key={item.id}>
            <DateTime>
              {formatDatestamp(item.date)}, {formatTimestamp(item.time)}
            </DateTime>
            <SadgunText>
              {item.sadgun}
            </SadgunText>
            <Author>
              by: {item.by?.name}
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

const AddButton = styled.img`
  width: 26px;
  aspect-ratio: 1;
  object-fit: auto;
  margin-left: 8px;
`;

const Content = styled.main`
  flex: 1;
  padding: 0 24px;
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

const SadgunText = styled.p`
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

export default SadgunLekhan;
