import * as React from "react";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/InfoTwoTone";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { BottomNavigationBar } from "../components/BottomNavigationBar";

const timeSlots = [
  { time: "06:00 AM", location: "Dhule" },
  { time: "01:00 PM", location: "Ellora" },
  { time: "09:00 PM", location: "Nashik" },
  { time: "01:00 PM", location: "Trambak" },
  { time: "09:00 AM", location: "Pune" },
  { time: "11:30 AM", location: "Imagicaa" },
  { time: "02:30 AM", location: "Tithal" },
  { time: "06:30 PM", location: "Navsari" },
  { time: "11:30 PM", location: "Bharuch" },
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


      default:
        break;
    }
    // Navigate to the ImageDetails component page
  };
  return (
    <>
      <TopBar>
        <IconButton onClick={() => navigate(-1)}>
          {" "}
          {/* Navigate back */}
          <ArrowBackIosNewIcon />
        </IconButton>
      </TopBar>
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
            <TimeSlot
              key={index}
              time={slot.time}
              location={slot.location}
              handleIcon={() => handleIcon(slot.location)}
            />
          ))}
        </DesktopTimeSlots>
        <Div14 style={{ padding: "20px" }}>
          <Div15>
            <Div16>
              <Div17>
                <Div18>
                  <span style={{ "font-size": "18px" }}>
                    Bus No. / Seat No.
                  </span>
                  <br />
                  <span
                    style={{
                      "font-size": "20px",
                      "line-height": "20px",
                      color: "rgba(39,15,42,1)",
                    }}
                  >
                    GJ 16 KD 2256 (SN. 05)
                  </span>
                </Div18>
                <Div19>
                  <span style={{ "font-size": "18px" }}>Bus Leader</span>
                  <br />
                  <span
                    style={{
                      "font-size": "20px",
                      "line-height": "20px",
                      color: "rgba(39,15,42,1)",
                    }}
                  >
                    Rutvik A. Patel
                  </span>
                  <br />
                  <span style={{ "font-size": "20px" }}>Mo. 89658 95645</span>
                </Div19>
              </Div17>
              <Div20>
                <Img3
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/dab3fe720cafe3f45cd87ea8087c9f1299946422feccd4f79687519a32f33f8f?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                />
                <Div21>Call</Div21>
              </Div20>
            </Div16>

            <Div22>
              <span style={{ "font-size": "20px" }}>Nashik Utara Details</span>
              <br />
              <span
                style={{
                  "font-size": "20px",
                  "line-height": "20px",
                  color: "rgba(39,15,42,1)",
                }}
              >
                Room No. 229
              </span>
              <br />
              <span
                style={{
                  "font-size": "20px",
                  "line-height": "20px",
                  color: "rgba(39,15,42,1)",
                }}
              >
                Yogi Sadan, 2nd Floor
              </span>
            </Div22>
            <Div23>
              <span style={{ "font-size": "20px" }}>Pune Utara Details</span>
              <br />
              <span
                style={{
                  "font-size": "20px",
                  "line-height": "20px",
                  color: "rgba(39,15,42,1)",
                }}
              >
                Room No. 122
              </span>
              <br />
              <span
                style={{
                  "font-size": "20px",
                  "line-height": "20px",
                  color: "rgba(39,15,42,1)",
                }}
              >
                Pramukh Bhavan, 1st Floor
              </span>
            </Div23>
          </Div15>
        </Div14>
      </TimeSlotContainer>
      <BottomNavigationBar />
    </>
  );
};

const TimeSlot = ({ time, location, handleIcon }) => (
  <TimeSlotWrapper>
    <TimeDisplay>{time}</TimeDisplay>
    <LocationDisplay>
      <LocationName>{location}</LocationName>
      <LocationMarker onClick={handleIcon}>
        <InfoIcon className="icon" />
      </LocationMarker>
    </LocationDisplay>
  </TimeSlotWrapper>
);

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

  display: flex;
  width: 100px;
  flex-direction: column;
  box-shadow: 0px 3px 4px rgba(39, 0, 37, 0.25);
`;
const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TimeDisplay = styled.div`
  padding: 16px;

  border-radius: 24px 24px 0 0;
  background-color: var(--New-Light-Dark, #c394ff);
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
