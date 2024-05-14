import * as React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { BottomNavigationBar } from "../components/BottomNavigationBar";





const messages = [
    {
        sender: "P. Anirdesh Swami",
        time: "12:42 PM",
        message:
            "All the yuvak-yuvati shibirarthi will be held at the yagnapurush sabha mandapam after lunch for the first session of our shibir latest by 2.00 PM Keep diary and pen with you for note down the memories of the shibir session.",
    },
    {
        sender: "P. Anirdesh Swami",
        time: "12:42 PM",
        message:
            "All the yuvak-yuvati shibirarthi will be held at the yagnapurush sabha mandapam after lunch for the first session of our shibir latest by 2.00 PM Keep diary and pen with you for note down the memories of the shibir session.",
    },
    {
        sender: "P. Anirdesh Swami",
        time: "12:42 PM",
        message:
            "All the yuvak-yuvati shibirarthi will be held at the yagnapurush sabha mandapam after lunch for the first session of our shibir latest by 2.00 PM Keep diary and pen with you for note down the memories of the shibir session.",
    },
    {
        sender: "P. Anirdesh Swami",
        time: "12:42 PM",
        message:
            "All the yuvak-yuvati shibirarthi will be held at the yagnapurush sabha mandapam after lunch for the first session of our shibir latest by 2.00 PM Keep diary and pen with you for note down the memories of the shibir session.",
    },
];

function Notifications() {
    const navigate = useNavigate(); // Hook to handle navigation

    return (
        <Page>
            <TopBar>
                <IconButton onClick={() => navigate(-1)}>
                    {" "}
                    {/* Navigate back */}
                    {/* <ArrowBackIosNewIcon /> */}
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd569ca716b29d7f1a98071e37fd2287542114cc8243ecad11b40ab9ef936c8?apiKey=65b9bef5a9974c109a4afdb193963080&"
                        alt="Back button"
                    />
                </IconButton>
            </TopBar>

            <Heading>
                <NotificationIcon
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/beeef19836738d120f203a42aa33b0f35d36da57ca206abb0ff77ade567aeaad?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    alt="Notification Icon"
                />
                <HeadingText>Shibir Updates</HeadingText>
            </Heading>

            <div>
                {messages.map((message, index) => (
                    <NotificationCard key={index} >
                        <CardName >
                            <Author >
                                {message.sender}
                            </Author>
                            <Time >
                                {message.time}
                            </Time>
                        </CardName>
                        <Message >
                            {message.message}
                        </Message>
                    </NotificationCard>
                ))}
            </div>
            <BottomNavigationBar />

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
    width: 390px;
    height: 844px;
    flex-shrink: 0;
    background: var(--Light-Pink-Gradient, linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%));
`
const TopBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
     
`;

const NotificationIcon = styled.img`
    width: 25.4px;
    height: 27px;
    flex-shrink: 0;
    fill: var(--BG-Gredient, linear-gradient(180deg, #270025 0%, #1D0F2A 100%));
`

const NotificationCard = styled.div`
    margin: 1rem;
    padding: 1rem;
    border: 1px solid purple;
    border-radius: 25px;
    display: flex;
    padding: 19.951px;
    width: 325px;
    flex-direction: column;
    justify-content: center;
    gap: 13.301px;
    margin-left: 2rem;
    border-radius: 13.301px;
    border: 0.831px solid var(--New-Blue-Purple, #E2C2FF);
    background: var(--Light-Pink-Gradient, linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%));
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CardName = styled.div`
    display: flex;
    justify-content: space-between;
`
const Author = styled.div`
    color: rgba(29, 15, 42, 0.75);
    font-family: Rubik;
    font-size: 13.301px;
    font-style: normal;
    font-weight: 300;
    line-height: 6.65px;
`

const Time = styled.div`
    color: rgba(29, 15, 42, 0.50);
    font-family: Poppins;
    font-size: 11.638px;
    font-style: normal;
    font-weight: 300;
    line-height: 6.65px;
`

const Message = styled.div`
    color: var(--BG-Purple, #1D0F2A);
    font-family: Overlock;
    font-size: 11.638px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export default Notifications;