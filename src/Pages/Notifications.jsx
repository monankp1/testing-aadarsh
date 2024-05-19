import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import axios from 'axios';
import { BACKEND_ENDPOINT } from "../api/api";
import { useEffect, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';



const formatDatestamp = (dateString) => {
    const notificationDate = new Date(dateString);
    const today = new Date();

    // Check if the notification date is today
    if (notificationDate.toDateString() === today.toDateString()) {
        // If it's today, return 'Today'
        return 'Today';
    } else {
        // If it's not today, format the date as "3rd May, 2024"
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = notificationDate.toLocaleDateString('en-US', options);
        return formattedDate;
    }
}

const formatTimestamp = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':');
    let formattedHours = parseInt(hours);
    const ampm = formattedHours >= 12 ? 'PM' : 'AM';
    formattedHours = formattedHours % 12 || 12;
    const formattedTime = `${formattedHours}:${minutes} ${ampm}`;
    return formattedTime;
}


function Notifications() {
    const [lastFetchTimestamp, setLastFetchTimestamp] = useState(null); // Track the timestamp of the last fetch
    const [showDetailedAnnouncement, setShowDetailedAnnouncement] = useState(false);

    const detailedAnnouncementRef = useRef(null);


    const navigate = useNavigate(); // Hook to handle navigation
    const location = useLocation();
    const { state } = location;
    const notifications = state ? state.notifications : [];


    console.log(notifications);
    const handleShowDetailedAnnouncement = () => {
        setShowDetailedAnnouncement(true);
    };

    const handleCloseDetailedAnnouncement = () => {
        setShowDetailedAnnouncement(false);
    };

    return (
        <Page>
            <BackIcon onClick={() => navigate(-1)}>
                {/* Navigate back */}
                <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd569ca716b29d7f1a98071e37fd2287542114cc8243ecad11b40ab9ef936c8?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    alt="Back button"
                />
            </BackIcon>

            <Heading>
                <NotificationIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/beeef19836738d120f203a42aa33b0f35d36da57ca206abb0ff77ade567aeaad?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    alt="Notification Icon"
                />
                <HeadingText>Shibir Updates</HeadingText>
            </Heading>

            {Array.isArray(notifications) && notifications.map((item, idx) => {
                return (
                    <Card key={idx}>
                        <CardHeader>
                            <SenderName>{item.by?.name}</SenderName>
                            <Datestamp>{formatDatestamp(item.date)} at {formatTimestamp(item.time)}</Datestamp>
                        </CardHeader>
                        <Message>
                            {item.announcement}
                        </Message>
                    </Card>
                )
            })}



        </Page >

    );
}



const Heading = styled.div`
    display: flex;
    width: 358px;
    padding: 5px 10px;
    margin: 1rem;
    align-items: center;
    gap: 8px;
    border-radius: 10px;
    background: var(--Title, #FFF);
`
const HeadingText = styled.h1`
    color: var(--BG-Purple, #1D0F2A);
    font-family: Arial;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 8px; 
`
const Page = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    flex-shrink: 0;
    background: var(--Light-Pink-Gradient, linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%));
`
const BackIcon = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
    margin-left: 1.5rem;
     
`;

const NotificationIcon = styled.img`
    width: 25.4px;
    height: 27px;
    flex-shrink: 0;
    fill: var(--BG-Gredient, linear-gradient(180deg, #270025 0%, #1D0F2A 100%));
`

const Card = styled.article`
  border-radius: 16px;
  border: 0.5px  var(--new-stroke-gradient, #1d0f2a);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: var(
    --light-pink-gradient,
    linear-gradient(168deg, #fff 0%, #e2c2ff 70.31%)
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  position:relative;
  left: 1.25rem;
  margin-top: 10px;
  padding: 24px;
  width: 90%;
`;

const ShowMoreButton = styled.button`
background-color: transparent;
border: transparent;
color: #333333;
padding: 5px;
cursor: pointer;
`;

const TransparentBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const DetailedAnnouncementModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 65vh;
  transform: translate(-50%, -50%);
  background: var(--Light-Pink-Gradient, linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%));  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: red;
  border: none;
  border-radius: 100px;
  color: #red;
  font-size: 16px;
  cursor: pointer;
`;

const DetailedAnnouncement = styled.p`
  color: #333333;
  font-size: 16px;
`;

const CardHeader = styled.header`
  gap: 16px;
  font-weight: 300;
`;

const SenderName = styled.h3`
  color: rgba(29, 15, 42, 0.8);
  flex: 1;
  font: 16px/50% Rubik, sans-serif;
`;

const Datestamp = styled.time`
  color: rgba(29, 15, 42, 0.7);
  font: 14px/57% Poppins, sans-serif;
`;

const Message = styled.p`
  color: var(--bg-purple, #1d0f2a);
  font: 700 14px Overlock, sans-serif;
  margin-top: 16px;
`;



export default Notifications;