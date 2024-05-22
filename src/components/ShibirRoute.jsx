import * as React from "react";
import styled from "styled-components";
// import InfoIcon from "@mui/icons-material/Info";
import InfoIcon from "@mui/icons-material/InfoTwoTone";
import { useNavigate } from "react-router-dom";
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


export function ShibirRoute() {
  const navigate = useNavigate(); // Hook to handle navigation

  // Handler to navigate to the details page
  const handleIcon = () => {
    navigate("/shibir-routes"); // Navigate to the ImageDetails component page
  };

  const handleClick = (location) => {
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


  const TimeSlot = ({ date, location }) => (
    <TimeSlotWrapper>
      <TimeDisplay>{date}</TimeDisplay>
      <LocationDisplay onClick={() => handleClick(location)}>
        <LocationName>{location}</LocationName>
        <LocationMarker>
          <InfoIcon className="icon" /> {/* MUI Icon is used here */}
        </LocationMarker>
      </LocationDisplay>
    </TimeSlotWrapper>
  );

  return (
    <>
      <RouteContainer style={{ margin: "5px 10px" }}>
        <RouteIcon
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1748993d8450ee1bcce7efb0b04e5d91974a0de7e3bf14584193c83fe6dfbbd0?apiKey=3250d16d0ad044539de68d3e33600ce8&"
          alt="Route Icon"
        />
        <RouteTitle>Shibir Yatra Route</RouteTitle>
        <RouteLink onClick={handleIcon}>View All</RouteLink>
      </RouteContainer>
      <TimeSlotContainer style={{ margin: "20px 0" }}>
        <MobileTimeSlots>
          {timeSlots.slice(0, 8).map((slot, index) => (
            <TimeSlot key={index} date={slot.date} location={slot.location} />
          ))}
        </MobileTimeSlots>
        <DesktopTimeSlots>
          {timeSlots.map((slot, index) => (
            <TimeSlot key={index} date={slot.date} location={slot.location} />
          ))}
        </DesktopTimeSlots>
      </TimeSlotContainer>
    </>
  );
}





const TimeSlotContainer = styled.div`
  display: flex;
  overflow-x: auto;
  padding-left: 15px;
  gap: 8px;
  text-align: center;
  justify-content: space-between;
`;

const MobileTimeSlots = styled.div`
  display: flex;
  gap: 8px;

  @media (min-width: 640px) {
    display: none;
  }
`;

const DesktopTimeSlots = styled.div`
  display: none;
  gap: 8px;

  @media (min-width: 640px) {
    display: flex;
  }
`;

const TimeSlotWrapper = styled.div`
  margin: 2px;
  border-radius: 24px 24px 0 0;
  display: flex;
  width: 103px;
  flex-direction: column;
  box-shadow: 0px 3px 4px rgba(39, 0, 37, 0.25);
`;

const TimeDisplay = styled.div`
  padding: 16px;
  border-radius: 24px 24px 0 0;
  background: var(--again-new-gradient, linear-gradient(180deg, #C86FFF 0%, #BFA1FF 100%));
  color: rgba(39, 0, 37, 0.5);
  font: 500 12px/67% Rubik, sans-serif;
  font-weight: bold;a
  justify-content: center;
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
  white-space: nowrap;
  // justify-content: center;
`;

const LocationName = styled.div`
  font-family: Nexa Bold, sans-serif;
`;

const LocationMarker = styled.div`
  width: 26px;
  height: 25px;
  margin-top: 10px;
  // border: 2px solid rgba(0, 0, 0, 1);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 26px; // You can adjust the size as needed
    color: rgba(
      0,
      0,
      0,
      0.5
    ); // Adjust the color to fit your design if necessary
  }

  @media (max-width: 640px) {
    height: 20px;
    .icon {
      font-size: 22px; // Adjust for smaller screens if necessary
    }
  }
`;
const RouteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;
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

const RouteLink = styled.a`
  margin: auto 0;
  color: #270025;
  font: 400 15px Poppins, sans-serif;
  text-decoration: none;
  cursor: pointer;
`;

export default ShibirRoute;
