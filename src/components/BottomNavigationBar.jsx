import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export function BottomNavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isQRVisible, setQRVisible] = useState(false);

  // Define icons and paths
  const icons = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a343ccdcce999f0fce3cc9992d8afd046297e73806a21fe358a773221ddc157c?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "Home",
      path: "/home",
    },

    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/db776e3120bbe66a07054011a8d4645a6b70297fde6f443a4b2da0c0d2ac61e9?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "sadgun-lekhan",
      path: "/sadgun-lekhan",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/112475a7ce727cec319e3cf3a0311c6f7fbaab1c57e83e3eba57c86efb4d498c?apiKey=3250d0ad044539de68d3e33600ce8&",
      alt: "Favorites",
      path: "/favorites",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4ec071698ef697d634e355a1086ef4b075e4e25237d4d2049a13f429d8050fad?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "Profile",
      path: "/profile",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/32a9b4a7c852db6bafce147211031a18de646b8c1ae12b2db146a9146aeaeccd?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "shibir-route",
      path: "/shibir-route",
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/98c3f0d8408fc6b68aee66633805752e1540a37031e53bc40962ee35ed752270?apiKey=3250d16d0ad044539de68d3e33600ce8&",
      alt: "user-profile",
      path: "/user-profile",
    },
  ];

  const handleIconClick = (path) => {
    if (path === "/profile") {
      setQRVisible(!isQRVisible); // Toggle QR visibility for profile
    } else {
      navigate(path);
      setQRVisible(false); // Ensure QR is hidden if other icons are clicked
    }
  };

  return (
    <AppContainer>
      <NavBar>
        <IconContainer>
          {icons.map((icon, index) => (
            <NavIcon
              key={index}
              src={icon.src}
              alt={icon.alt}
              onClick={() => handleIconClick(icon.path)}
              isActive={location.pathname === icon.path}
            />
          ))}
        </IconContainer>
      </NavBar>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed; /* Ensure the navbar is fixed at the bottom */
  left: 0; /* Align to the far left */
  right: 0; /* Stretch to the far right */
  bottom: 0; /* Align to the bottom */
  width: 100%; /* Ensure it takes full width */
`;

const NavBar = styled.nav`
  background: linear-gradient(180deg, #1d0f2a 0%, #270025 100%);
  display: flex;
  align-items: center; /* Center items vertically within the navbar */
  justify-content: center; /* Center items horizontally */
  width: 100%; /* Ensure it takes full width */
  padding: 10px 20px; /* Adjust padding to your preference */
`;

const IconContainer = styled.div`
  display: flex;
  gap: 35px; /* Adjust or remove gap based on your visual requirement */
  justify-content: space-between; /* This will space out the icons evenly */
  width: 100%; /* Ensure container takes full width to distribute icons */
`;

const NavIcon = styled.img`
  width: 30px; /* Adjust icon size */
  height: 30px; /* Adjust icon height */
  object-fit: contain;
  cursor: pointer;
  opacity: ${({ isActive }) =>
    isActive ? 1 : 0.4}; /* Highlight active icon */
`;
