import * as React from "react";
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

export const ShibirRoutes = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  // Handler to navigate to the details page
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
    // Navigate to the ImageDetails component page
  };
  return (
    <>
      <Background>
        <BackIcon onClick={() => navigate("/home")}>
          {/* Navigate back */}
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1fd569ca716b29d7f1a98071e37fd2287542114cc8243ecad11b40ab9ef936c8?apiKey=65b9bef5a9974c109a4afdb193963080&"
            alt="Back button"
          />
        </BackIcon>
        <RouteContainer>
          <RouteIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1748993d8450ee1bcce7efb0b04e5d91974a0de7e3bf14584193c83fe6dfbbd0?apiKey=3250d16d0ad044539de68d3e33600ce8&"
            alt="Route Icon"
          />
          <RouteTitle>Shibir Yatra Route</RouteTitle>
        </RouteContainer>
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

      </Background>
    </>
  );
};



const Background = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  min-height: 100vh;
  height: 100%;

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
const BackIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-left: 1.5rem;
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

const RouteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 15px;
  padding: 0 8px;
  margin-left: 1rem;
  margin-right: 1rem;
`;

const RouteIcon = styled.img`
  width: 22px;
  aspect-ratio: 0.85;
  object-fit: cover;
  object-position: center;
`;

const RouteTitle = styled.h2`
  flex: 1;
  margin: auto 0;
  color: #1d0f2a;
  font: 700 20px/1 Arial, sans-serif;
`;

const Div14 = styled.div`
  border-radius: 25px;
  background: linear-gradient(180deg, #ffffff 0%, #d29cfd 100%);
  // margin: 25px;
  border-color: rgba(29, 15, 42, 1);
  // border-style: solid;
  border-width: 2px;
  display: flex;
  margin-top: 18px;
  width: 100%;
  flex-direction: column;
  padding: 19px 23px;
`;

const Div15 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div16 = styled.div`
  display: flex;
  gap: 7px;
`;

const Div17 = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #270025;
  line-height: 19px;
`;

const Div18 = styled.div`
  font-family: Overlock, sans-serif;
`;

const Div19 = styled.div`
  font-family: Overlock, sans-serif;
  margin-top: 20px;
`;

const Div20 = styled.div`
  justify-content: space-between;
  border-radius: 7.073px;
  border-color: rgba(255, 255, 255, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #270025;
  align-self: end;
  display: flex;
  margin-top: 84px;
  gap: 8px;
  font-size: 21px;
  color: var(--Title, #fff);
  white-space: nowrap;
  line-height: 136%;
  padding: 0 6px;
`;

const Img3 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 17px;
  fill: var(--Title, #fff);
  margin: auto 0;
`;

const Div21 = styled.div`
  font-family: Overlock, sans-serif;
`;

const Div22 = styled.div`
  color: #270025;
  margin-top: 19px;
  font: 14px/19px Overlock, sans-serif;
`;

const Div23 = styled.div`
  color: #270025;
  margin-top: 20px;
  font: 14px/19px Overlock, sans-serif;
`;

export default ShibirRoutes;
