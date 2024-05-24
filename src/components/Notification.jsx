import * as React from "react";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { BACKEND_ENDPOINT } from "../api/api";



function Notification() {
  const navigate = useNavigate();
  const [allNotifications, setAllNotifications] = useState([]);
  const [latestNotification, setLatestNotification] = useState(null);
  const [lastFetchTimestamp, setLastFetchTimestamp] = useState(null); // Track the timestamp of the last fetch
  const [showDetailedAnnouncement, setShowDetailedAnnouncement] = useState(false);


  const detailedAnnouncementRef = useRef(null);


  const fetchNotifications = async () => {
    try {
      const response = await axios.get(`${BACKEND_ENDPOINT}/announcement/get_announcement`);
      setAllNotifications(response.data);
      setLastFetchTimestamp(Date.now()); // Update the timestamp of the last fetch
    } catch (error) {
      console.error(error);
    }
  }



  useEffect(() => {
    fetchNotifications();
  }, []);


  //We store the latest notification in the state whenever there is change in all notifications
  useEffect(() => {
    setLatestNotification(allNotifications[0]);
  }, [allNotifications]);



  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      // Check if 30 seconds has passed since the last fetch
      if (lastFetchTimestamp && currentTime - lastFetchTimestamp >= 10000) {
        fetchNotifications();
      }
    }, 1000); // Check every second for timeout

    return () => clearInterval(intervalId);

  }, [allNotifications, lastFetchTimestamp]);


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






  const handleClick = () => {
    navigate("/notifications", { state: { notifications: allNotifications } });
  }


  const handleShowDetailedAnnouncement = () => {
    setShowDetailedAnnouncement(true);
  };

  const handleCloseDetailedAnnouncement = () => {
    setShowDetailedAnnouncement(false);
  };




  return (
    <main style={{ margin: "10px" }}>
      <Header>
        <ShibirIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/197f4e4d4003a76749d4e3eb18b0791c4198df0367c4fbb643279406995244d8?apiKey=3250d16d0ad044539de68d3e33600ce8&"
          alt="Shibir Icon"
        />
        <ShibirUpdateTitle>Shibir Update</ShibirUpdateTitle>
        <ViewAllLink onClick={handleClick}>View All</ViewAllLink>
      </Header>

      {latestNotification &&
        (<Card>
          <CardHeader>
            <SenderName>{latestNotification.by?.name}</SenderName>
            <Datestamp>{formatDatestamp(latestNotification.date)} at {formatTimestamp(latestNotification.time)}</Datestamp>
          </CardHeader>
          <Message>
            {latestNotification.announcement.length > 250
              ? latestNotification.announcement.substring(0, 250) + '...'
              : latestNotification.announcement}
            {latestNotification.announcement.length > 250 && (
              <ShowMoreButton onClick={handleShowDetailedAnnouncement}>Show more</ShowMoreButton>
            )}
          </Message>
          {/* <CardActions>
            <ReminderButton>Set Reminder</ReminderButton>
            <AcknowledgeButton>Acknowledge</AcknowledgeButton>
          </CardActions> */}
        </Card>
        )}
      {showDetailedAnnouncement && (<>
        <TransparentBackground onClick={handleCloseDetailedAnnouncement} />

        <DetailedAnnouncementModal>
          <CloseButton onClick={handleCloseDetailedAnnouncement}>X</CloseButton>
          <DetailedAnnouncement>
            <CardHeader>
              <SenderName>{latestNotification.by?.name}</SenderName>
              <Datestamp>{formatDatestamp(latestNotification.date)} at {formatTimestamp(latestNotification.time)}</Datestamp>
            </CardHeader>
            <br />
            {latestNotification.announcement}
          </DetailedAnnouncement>
        </DetailedAnnouncementModal>
      </>
      )}

    </main>
  );
}

// function NotificationCard({ notification }) {
//   return (
//     <Card>
//       <CardHeader>
//         <SenderName>{notification.name}</SenderName>
//         <Timestamp>{notification.time}</Timestamp>
//       </CardHeader>
//       <Message>{notification.message}</Message>
//       <CardActions>
//         <ReminderButton>Set Reminder</ReminderButton>
//         <AcknowledgeButton>Acknowledge</AcknowledgeButton>
//       </CardActions>
//     </Card>
//   );
// }

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
  margin-top: 10px;
  padding: 24px;
  width: 100%;
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
  // background-color: red;
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

const CardActions = styled.div`
  color: var(--bg-purple, #1d0f2a);
  display: flex;
  font-size: 16px;
  font-weight: 600;
  gap: 8px;
  letter-spacing: -0.17px;
  line-height: 140%;
  margin-top: 16px;
`;

const ReminderButton = styled.button`
  background: var(--title, #fff);
  border-radius: 8px;
  flex: 1;
  font-family: Sora, sans-serif;
  justify-content: center;
  padding: 8px 10px;
`;

const AcknowledgeButton = styled.button`
  background: var(
    --again-new-gradient,
    linear-gradient(180deg, #c86fff 0%, #bfa1ff 100%)
  );
  border-radius: 8px;
  flex: 1;
  font-family: Sora, sans-serif;
  justify-content: center;
  padding: 8px 10px;
  white-space: nowrap;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 8px;
`;

const ShibirIcon = styled.img`
  width: 25px;
  aspect-ratio: 0.93;
  object-fit: cover;
  object-position: center;
`;

const ShibirUpdateTitle = styled.h2`
  flex: 1;
  margin: auto 0;
  color: #1d0f2a;
  font: 700 20px/40% Arial, sans-serif;
`;

const ViewAllLink = styled.a`
  margin: auto 0;
  color: var(--BG-Pink, #270025);
  font: 400 15px Poppins, sans-serif;
  cursor: pointer;
`;

export default Notification;
