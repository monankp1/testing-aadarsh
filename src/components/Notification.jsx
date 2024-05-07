import * as React from "react";
import styled from "styled-components";

const notifications = [
  {
    id: 1,
    name: "P. Anirdesh Swami",
    time: "12:42 PM",
    message:
      "All the yuvak-yuvati shibirarthi will be held at the yagnapurush sabha mandapam after lunch for the first session of our shibir latest by 2.00 PM Keep diary and pen with you for note down the memories of the shibir session.",
  },
];

export function Notification() {
  return (
    <main>
      <Header>
        <ShibirIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/197f4e4d4003a76749d4e3eb18b0791c4198df0367c4fbb643279406995244d8?apiKey=3250d16d0ad044539de68d3e33600ce8&"
          alt="Shibir Icon"
        />
        <ShibirUpdateTitle>Shibir Update</ShibirUpdateTitle>
        <ViewAllLink>View All</ViewAllLink>
      </Header>
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} notification={notification} />
      ))}
    </main>
  );
}

function NotificationCard({ notification }) {
  return (
    <Card>
      <CardHeader>
        <SenderName>{notification.name}</SenderName>
        <Timestamp>{notification.time}</Timestamp>
      </CardHeader>
      <Message>{notification.message}</Message>
      <CardActions>
        <ReminderButton>Set Reminder</ReminderButton>
        <AcknowledgeButton>Acknowledge</AcknowledgeButton>
      </CardActions>
    </Card>
  );
}

const Card = styled.article`
  border-radius: 16px;
  border: 0.5px solid var(--new-stroke-gradient, #1d0f2a);
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

const CardHeader = styled.header`
  display: flex;
  gap: 16px;
  font-weight: 300;
`;

const SenderName = styled.h3`
  color: rgba(29, 15, 42, 0.8);
  flex: 1;
  font: 16px/50% Rubik, sans-serif;
`;

const Timestamp = styled.time`
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
