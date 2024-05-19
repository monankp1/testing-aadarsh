import * as React from "react";
import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LogoutIcon from "@mui/icons-material/Logout";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BottomNavigationBar } from "../components/BottomNavigationBar";
import QRScanner from "../components/QRScanner";

export function UserProfile() {
  const [result, setResult] = useState("");
  const [scanError, setScanError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { logout, user: authUser } = useAuth(); // Get the logged-in user's details if needed for authentication
  const [showScanner, setShowScanner] = useState(false);

  const handleToggleScanner = () => {
    setShowScanner(!showScanner); // Toggle the visibility of the scanner
  };
  const handleScan = async (data) => {
    if (data) {
      console.log(data.text, "<<<<-data.text");
      setResult(data.text);
      setShowScanner(false); // Close the scanner after getting the result

      // API call with the scanned data
      try {
        const response = await axios.post("YOUR_API_ENDPOINT", {
          scannedData: data.text,
        });
        console.log(response.data, "<<--API response");

        // Handle the response data here
        // For example, if you want to update user state or navigate
      } catch (error) {
        console.error("Error calling API:", error);
        setScanError(error);
      }
    }
  };

  const handleError = (err) => {
    setScanError(err);
  };

  const handleScanIconClick = () => {
    setShowScanner(true);
  };

  const handleCloseScanner = () => {
    setShowScanner(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/"); // Assuming your login route is the root
  };

  // console.log(user, "<<----- user");
  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        // Assume that you pass the user ID somehow, here's an example URL
        const response = await axios.post(
          "https://bharuchbaps.in/bharuchbaps.in/index.php/user/get_by_id",
          { shibir_id: authUser?.id }
        );
        console.log(response, "<--response");
        if (response.data.status === "true") {
          setUser(response.data.user);
        } else {
          throw new Error("Failed to fetch user details");
        }
      } catch (err) {
        console.error(err, "errorrrr");
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []); // Depend on user ID
  return (
    <>
      <Div
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%)",
        }}
      >
        <TopBar>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </TopBar>

        {loading ? (
          <div className=" loading">Loading...</div>
        ) : (
          <>
            <IconButton onClick={handleToggleScanner}>
              {showScanner ? "" : "Open Scanner"}{" "}
              {/* Display appropriate text based on state */}
            </IconButton>

            {showScanner && (
              <QRScanner
                handleScan={handleScan}
                handleError={handleError}
                handleClose={handleCloseScanner} // Pass this if you want to handle close inside the QRScanner component
              />
            )}
            <Div2>
              <Div5>
                <Img2
                  loading="lazy"
                  src="http://api.qrserver.com/v1/create-qr-code/?color=112844&bgcolor=ffffff&data=YK0003%20Tarang%20K.%20Patel&qzone=1&margin=0&size=400x400&ecc=L"
                />
                <Div6>{user?.shibir_id}</Div6>
              </Div5>
            </Div2>

            <Div7>
              <Div8>
                <Div9>
                  <Div10>
                    <span style={{ "font-size": "12px" }}>Name</span>
                    <br />
                    <span
                      style={{
                        "font-size": "20px",
                        "line-height": "20px",
                        color: "rgba(29,15,42,1)",
                      }}
                    >
                      {user?.name}
                    </span>
                  </Div10>
                  <Div11>
                    <span style={{ "font-size": "12px" }}>Mandal</span>
                    <br />
                    <span
                      style={{
                        "font-size": "20px",
                        "line-height": "20px",
                        color: "rgba(29,15,42,1)",
                      }}
                    >
                      {user?.mandal}
                    </span>
                  </Div11>
                  <Div12>
                    <span style={{ "font-size": "12px" }}>Mobile No.</span>
                    <br />
                    <span
                      style={{
                        "font-size": "20px",
                        "line-height": "20px",
                        color: "rgba(29,15,42,1)",
                      }}
                    >
                      {user?.phone_number}
                    </span>
                  </Div12>
                  <Div13>
                    <span style={{ "font-size": "20px" }}>
                      Emergency Contact No.
                    </span>

                    <br />
                    <span
                      style={{
                        "font-size": "20px",
                        "line-height": "20px",
                        color: "rgba(29,15,42,1)",
                      }}
                    >
                      {user?.Emergency_number}
                    </span>
                  </Div13>
                </Div9>
              </Div8>
              <Div14>
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
                        <span style={{ "font-size": "20px" }}>
                          Mo. 89658 95645
                        </span>
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
                    <span style={{ "font-size": "20px" }}>
                      Nashik Utara Details
                    </span>
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
                    <span style={{ "font-size": "20px" }}>
                      Pune Utara Details
                    </span>
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
              <Diva>
                <Diva2>
                  <Diva3>Emergency Helpline No.</Diva3>
                  <Diva4>
                    <Diva5>
                      <Imgs
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f01616e0b48fe211740b08583c18ce275de08ee7055eb9dbddca44b3a0c8b?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                      />
                      <Diva6>99989 91271</Diva6>
                    </Diva5>
                    <Diva5>
                      <img
                        alt=""
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c2f01616e0b48fe211740b08583c18ce275de08ee7055eb9dbddca44b3a0c8b?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                      />
                      <Diva8>99740 34938</Diva8>
                    </Diva5>
                  </Diva4>
                </Diva2>
              </Diva>
            </Div7>
          </>
        )}
      </Div>

      <BottomNavigationBar />
    </>
  );
}
const Div = styled.div`
  justify-content: center;
  align-content: flex-start;
  flex-wrap: wrap;
  display: flex;
  max-width: 100%;
  padding: 15px;
  flex-direction: column;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Div = styled.div`
//   justify-content: center;
//   align-content: flex-start;
//   flex-wrap: wrap;
//   display: flex;
//   max-width: 100%;
//   padding: 15px;
//   flex-direction: column;
// `;

const Div2 = styled.div`
  align-self: center;
  display: flex;
  width: 100%;
  max-width: 299px;
  gap: 20px;
  font-weight: 400;
  white-space: nowrap;
  justify-content: center;
`;
const Diva2 = styled.div`
  display: flex;
  flex-direction: column;
`;

const Div5 = styled.div`
  justify-content: center;
  align-self: start;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #1d0f2a;
  letter-spacing: -0.17px;
  line-height: 140%;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 100px;
  align-self: center;
`;

const Div6 = styled.div`
  font-family: Sora, sans-serif;
  justify-content: center;
  border-radius: 5px;
  background-color: var(
    --again-new-gradient,
    linear-gradient(180deg, #c86fff 0%, #bfa1ff 100%)
  );
  margin-top: 6px;
  padding: 0 7px;
`;

const Div7 = styled.div`
  display: flex;
  margin-top: 17px;
  width: 100%;

  flex-direction: column;
  font-weight: 700;
`;

const Div8 = styled.div`
  border-radius: 25px;
  background: linear-gradient(180deg, #ffffff 0%, #d29cfd 100%);

  border-color: rgba(29, 15, 42, 1);
  // border-style: solid;
  border-width: 2px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  font-size: 14px;
  color: var(--BG-Purple, #1d0f2a);
  line-height: 19px;
  justify-content: center;
  padding: 16px 23px;
`;

const Div9 = styled.div`
  display: flex;
  width: 211px;
  max-width: 100%;
  flex-direction: column;
`;

const Div10 = styled.div`
  font-family: Overlock, sans-serif;
`;

const Div11 = styled.div`
  font-family: Overlock, sans-serif;
  margin-top: 20px;
`;

const Div12 = styled.div`
  font-family: Overlock, sans-serif;
  margin-top: 20px;
`;

const Div13 = styled.div`
  font-family: Overlock, sans-serif;
  margin-top: 20px;
`;

const Div14 = styled.div`
  border-radius: 25px;
  background: linear-gradient(180deg, #ffffff 0%, #d29cfd 100%);

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
const Diva3 = styled.div`
  color: black;
  font-weight: bold;
  font-size: 18px;
`;

const Diva4 = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  font-size: 30px;
  color: var(--BG-Pink, #270025);
`;

const Diva5 = styled.div`
  justify-content: center;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  gap: 12px;
  margin: 7px;

  padding: 10px 8px;
`;

const Imgs = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 25px;
  fill: var(--BG-Pink, #270025);
  margin: auto 0;
`;

const Diva6 = styled.div`
  font-family: Overlock, sans-serif;
`;

const Diva8 = styled.div`
  font-family: Overlock, sans-serif;
`;
const Diva = styled.div`
  border-radius: 25px;
  background: #d29cfd;
  border-color: rgba(29, 15, 42, 1);
  // border-style: solid;
  border-width: 2px;
  display: flex;
  max-width: 100%;
  flex-direction: column;
  font-weight: 700;
  text-align: center;
  line-height: 136%;
  justify-content: center;
  padding: 21px 58px;
  margin: 20px 0;
`;
export default UserProfile;
