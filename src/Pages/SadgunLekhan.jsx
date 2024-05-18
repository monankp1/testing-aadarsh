import * as React from "react";
import styled from "styled-components";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_ENDPOINT } from "../api/api";

// const blogPosts = [
//   {
//     id: 1,
//     date: "May 29, 2024, 12:42 PM",
//     title: "Mandir, one of the base pillars of Hindu culture",
//     excerpt:
//       "The Mandir, or Hindu temple, stands as one of the foundational pillars of Hindu culture, serving as a sacred space where devotees connect with the divine, partake in rituals, and uphold their religious heritage. Rooted in centuries of tradition, these architectural marvels hold not only spiritual significance but also cultural and historical importance. The Mandir is a testament to the profound and diverse aspects of Hinduism, encompassing devotion, art, architecture, and communal identity.",
//   },
//   {
//     id: 2,
//     date: "May 29, 2024, 12:42 PM",
//     title: "My first shibir yatra towards history of BAPS mandirs",
//     excerpt:
//       "The spiritual journey undertaken by devotees of the BAPS Swaminarayan Mandir from Rajkot to various locations, including Bochaasan, Navasari, Nasik, Pune, and Chansad, holds profound significance in their spiritual growth and connection with their faith. This journey encompasses not only physical travel but also a deep internal exploration of one's beliefs, values, and relationship with the divine.",
//   },
//   {
//     id: 3,
//     date: "May 29, 2024, 12:42 PM",
//     title: "Why mandir is a must in society?",
//     excerpt:
//       "The journey typically involves a series of stops at various Swaminarayan temples and centers, where devotees engage in shibir sessions and spiritual discourses. These sessions are guided by spiritual leaders and scholars, offering profound insights into the teachings of Swaminarayan Bhagwan and the principles of the BAPS organization. Participants are encouraged to reflect on their lives, cultivate inner virtues, and strengthen their bond with God.",
//   },
// ];

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


function SadgunLekhan() {
  const [sadguns, setSadguns] = useState([]);
  const navigate = useNavigate(); // Hook to handle navigation

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

    // Clear interval on component unmount
    return () => clearInterval(interval);

  }, [])
  console.log(sadguns)



  return (
    <AppBackground>
      <AppContainer>
        <Main>
          <BackIcon onClick={() => navigate(-1)}
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Back icon"
          />
          <ProfileHeader>
            <ProfileImage
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab67d02a8b8ad216eae4c696c2a0e629a71d161cc2bc274895d9505e7b4ec172?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="Profile"
            />
            <ProfileName>Sadgun Lekhan</ProfileName>
            <SettingsIcon onClick={handleClick}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c694fe63eee666fe1ae7b582df3d2174962135b8c9920c689ab652682988add?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="Add New Sadgun"
            />
          </ProfileHeader>
          {sadguns && sadguns.map((item) => (
            <Card>
              <DateTime>
                {formatDatestamp(item.date)},{formatTimestamp(item.time)}
              </DateTime>
              <Sadgun>
                {item.sadgun}
              </Sadgun>
              <Name>
                by:  {item.by.name}
              </Name>
            </Card>
          ))}


        </Main>
      </AppContainer>
    </AppBackground>
  );
}

const AppBackground = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  height: 100%; // Ensure it covers the full viewport height
`;
const AppContainer = styled.div`
  border-radius: 30px;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  overflow: hidden; // Add this to contain the border radius effect
  font-family: "Arial", sans-serif;
  color: #1d0f2a;
`;

const Main = styled.main`
  padding: 0 16px;
  margin-top: 17px;
`;

const BackIcon = styled.img`
  width: 13px;
  aspect-ratio: 0.65;
  object-fit: auto;
  fill: var(--BG-Gredient, linear-gradient(180deg, #270025 0%, #1d0f2a 100%));
  margin-left: 10px;
`;

const ProfileHeader = styled.div`
  border-radius: 10px;
  background-color: var(--Title, #fff);
  color: var(--BG-Purple, #1d0f2a);
  font-size: 20px;
  font-weight: 700;
  line-height: 40%;
  padding: 5px 10px;
  margin-top: 24px;
  display: flex;
  gap: 8px;
`;

const ProfileImage = styled.img`
  width: 25px;
  aspect-ratio: 0.96;
  object-fit: auto;
`;

const ProfileName = styled.div`
  font-family: Arial, sans-serif;
  margin: auto 0;
`;

const SettingsIcon = styled.img`
  width: 26px;
  aspect-ratio: 1;
  object-fit: auto;
`;

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

const DateTime = styled.div`
color: rgba(39, 0, 37, 0.50);

font-family: Overlock;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: 136%; /* 16.32px */
`;

const Sadgun = styled.p`
  margin-top: 16px;
  overflow: hidden;
  color: rgba(39, 0, 37, 0.50);

  text-align: justify;
  font-family: Overlock;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 136%;
`;

const Name = styled.div`
  color: black;
`;

const PostDate = styled.div`
  font-family: Overlock, sans-serif;
  padding: 2px 0;
`;

const CalendarIcon = styled.img`
  width: 21px;
  aspect-ratio: 4.17;
  object-fit: auto;
  fill: var(--BG-Gredient, linear-gradient(180deg, #270025 0%, #1d0f2a 100%));
  margin: auto 0;
`;

const ReadMoreText = styled.div`
  font-family: Poppins, sans-serif;
  background: linear-gradient(
    180deg,
    rgba(39, 0, 37, 0.5) 0%,
    rgba(29, 15, 42, 0.5) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex: 1;
`;

const ArrowIcon = styled.img`
  width: 16px;
  aspect-ratio: 1;
  object-fit: auto;
`;

const BlogPostList = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  border-radius: 25px;
  padding: 20px;
  /* Rest of the styles */
`;

// ... other styled components

const PostHeader = styled.div`
  /* This might contain the date and possibly a calendar icon */
  display: flex;
  justify-content: space-between; /* Align items to the left and right */
  color: #6f6f6f; /* A light grey for the secondary text */
  margin-bottom: 8px; /* Space between the header and the title */
`;

const PostTitle = styled.h2`
  color: #1d0f2a; /* Main text color for the title */
  font-size: 16px; /* Adjust the font size as needed */
  margin-bottom: 8px; /* Space between the title and the excerpt */
`;

const PostExcerpt = styled.p`
  color: #6f6f6f; /* A light grey for the excerpt */
  font-size: 14px; /* Adjust the font size as needed */
  margin-bottom: 8px; /* Space between the excerpt and 'read more' */
`;

const ReadMore = styled.div`
  text-align: right;
  color: #8e44ad; /* Purple color for 'read more' */
  font-size: 14px; /* Adjust the font size as needed */
  display: flex
`;
const BlogPost = styled.article`
  border-radius: 25px;
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  padding: 15px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px; /* Space between posts, adjust as needed */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional shadow for depth */
`;


export default SadgunLekhan;