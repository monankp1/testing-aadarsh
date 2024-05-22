import React from 'react'
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/InfoTwoTone";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import { BottomNavigationBar } from "../components/BottomNavigationBar";


const timeSlots = [
    { date: "May 28", location: "Bharuch" },
    { date: "May 29", location: "Dhule" },
    { date: "May 29", location: "Ellora" },
    { date: "May 30", location: "Nashik" },
    { date: "May 31", location: "Pune" },
    { date: "June 1", location: "Imagicaa" },
    { date: "June 2", location: "Tithal" },
    { date: "June 2", location: "Bharuch" },
];


const ShibirRoutess = () => {
    const navigate = useNavigate();

    const handleIcon = (location) => {
        switch (location) {
            case 'Bharuch':
                navigate("/Bharuch-details");
                break;

            case 'Navsari':
                navigate("/Navsari-details");
                break;

            case 'Pune':
                navigate("/Pune-details");
                break;

            case 'Tithal':
                navigate("/Tithal-details");
                break;

            case 'Imagicaa':
                navigate("/Imagicaa-details");
                break;

            case 'Nashik':
                navigate("/Nashik-details");
                break;

            case 'Dhule':
                navigate("/Dhule-details");
                break;

            case 'Ellora':
                navigate("/Ellora-details");
                break;


            default:
                break;
        }
    };

    return (
        <PageContainer>
            <BackButton onClick={() => navigate(-1)}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                alt="Back icon"
            />
            <Header>
                <Profile>
                    <ProfileImage
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1748993d8450ee1bcce7efb0b04e5d91974a0de7e3bf14584193c83fe6dfbbd0?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                        alt="Route Icon"
                    />

                    <ProfileName>Shibir Yatra Route</ProfileName>

                </Profile>

            </Header>
            <TimeSlotContainer>
                <DesktopTimeSlots>
                    {timeSlots.map((slot, index) => (
                        <TimeSlotWrapper>
                            <TimeDisplay>
                                <span style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--BG-Purple, #1D0F2A)' }}>{slot.date}</span>
                            </TimeDisplay>
                            <LocationDisplay>
                                <LocationName>{slot.location}</LocationName>
                                <LocationMarker onClick={() => handleIcon(slot.location)}>
                                    <InfoIcon className="icon" />
                                </LocationMarker>
                            </LocationDisplay>
                        </TimeSlotWrapper>
                    ))}

                </DesktopTimeSlots>
            </TimeSlotContainer>
            <BottomNavigationBar />

        </PageContainer>
    )
}

const PageContainer = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  min-height: 100vh;
  height: 100%;
  padding-bottom: 70px; /* Space for the bottom navigation bar */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackButton = styled.img`
  width: 13px;
  aspect-ratio: 0.65;
  object-fit: auto;
  position: absolute;
  top: 20px;
  left: 20px;
`;


const TimeSlotContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const DesktopTimeSlots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TimeSlotWrapper = styled.div`
  margin: 6px;
  border-radius: 24px 24px 0px 0px;
  display: flex;
  width: 100px;
  flex-direction: column;
  background: var(--Title, #FFF);
  box-shadow: 0px 3px 4px rgba(39, 0, 37, 0.25);
`;



const TimeDisplay = styled.div`
  padding: 16px;

  border-radius: 24px 24px 0px 0px;
  background: var(--again-new-gradient, linear-gradient(180deg, #C86FFF 0%, #BFA1FF 100%));
  color: rgba(39, 0, 37, 0.5);
  font: 300 12px/67% Rubik, sans-serif;
  text-align: center;
`;

const LocationDisplay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: var(--Title, #fff);
  color: #000;
  font-size: 16px;
  font-weight: 700;
  line-height: 50%;
  align-items: center;
`;

const LocationName = styled.div`
  font-family: Nexa Bold, sans-serif;
`;

const LocationMarker = styled.div`
  width: 26px;
  height: 25px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 26px;
    color: rgba(0, 0, 0, 0.5);
  }
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 24px;
  margin-top: 2rem;
  width: 100%;
`;


const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileName = styled.div`
  font-weight: bold;
  font-size: 20px;
`;
const ProfileImage = styled.img`
  width: 25px;
  aspect-ratio: 0.96;
  object-fit: auto;
  margin-right: 8px;
`;


export default ShibirRoutess