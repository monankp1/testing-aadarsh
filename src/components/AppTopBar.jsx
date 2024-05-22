import * as React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthProvider";

export function AppTopBar() {
  const navigate = useNavigate(); // Hook to handle navigation
  const [user, setUser] = useState(null);
  const { user: authUser } = useAuth(); // Get the logged-in user's details if needed for authentication
  console.log(user, "<< user");
  useEffect(() => {
    console.log(authUser, "user----");
    setUser(authUser);
  }, [authUser]); // Depend on user ID

  // Handler to navigate to the details page
  const handleIcon = () => {
    navigate("/user-profile"); // Navigate to the ImageDetails component page
  };
  return (
    <>
      <Div>
        <Div2>
          <Div3>Hello, {authUser.name}</Div3>
          <Div4>
            <span
              style={{
                "font-weight": "400",
                "font-size": "14px",
                color: "rgba(29, 15, 42, 1)",
              }}
            >
              Jay Swaminarayan
            </span>
          </Div4>
        </Div2>
        <Img
          onClick={handleIcon}
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/55f06f002806fe3e473a108b24fe570bc3cc7f1e0579751b128084dd56066bde?apiKey=3250d16d0ad044539de68d3e33600ce8&"
        />
      </Div>
    </>
  );
}

const Div = styled.div`
  background-color: #f3e5ff;
  display: flex;
  max-width: 100%;
  gap: 20px;
  justify-content: space-between;
  padding: 8px 19px;
  color: rgba(29, 15, 42, 0.8);
  margin-top: 4px;
  font-size: 16px;
  font-family: Rubik, sans-serif;
  font-weight: 300;
  line-height: 10px;

  span {
    color: rgba(29, 15, 42, 1);
  }

  span:first-child {
    font-weight: 400;
  }
`;

const Div2 = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Div3 = styled.div`
  color: var(--BG-Pink, #270025);
  font: 600 25px Overlock, sans-serif;
`;

const Div4 = styled.div`
  color: rgba(29, 15, 42, 0.8);
  margin-top: 4px;
  font: 300 16px/10px Rubik, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 74px;
`;
