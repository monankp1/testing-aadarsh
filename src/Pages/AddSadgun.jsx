import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

function AddSadgun() {
    const navigate = useNavigate();

    return (
        <AppBackground>

            <BackIcon onClick={() => navigate(-1)}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                alt="Back icon"
            />

            <ProfileHeader>
                <div style={{ display: "flex" }}>
                    <ProfileImage
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab67d02a8b8ad216eae4c696c2a0e629a71d161cc2bc274895d9505e7b4ec172?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                        alt="Profile"
                    />
                    <ProfileName>Sadgun</ProfileName>
                </div>
                <div>
                    <EditIcon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9f56142362a559defafc29aa548926f7fb8e117a7358468604dd0021cbc1f9?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    />
                    <ShareIcon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/327e9842161cffc0e8bf443682725a7f26bd11bd2a3236feda354ec08eeb9fda?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    />
                    <DeleteIcon
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c314bb94f1387b222d4a470d229d43cdce914acf79587c9c9ea52526c8ae4ac?apiKey=65b9bef5a9974c109a4afdb193963080&"
                    />
                </div>
            </ProfileHeader>
        </AppBackground>
    )
}

const AppBackground = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  min-height: 100vh; // Ensure it covers the full viewport height
  Rest of your styles...
`;

const BackIcon = styled.img`
  width: 13px;
  aspect-ratio: 0.65;
  object-fit: auto;
  fill: var(--BG-Gredient, linear-gradient(180deg, #270025 0%, #1d0f2a 100%));
  margin-top: 1.5rem;
  margin-left: 1.5rem;
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
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: space-between;
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

const EditIcon = styled.img`
`

const ShareIcon = styled.img`
    margin-left: 0.5rem;
`

const DeleteIcon = styled.img`
    margin-left: 0.5rem;
`

export default AddSadgun