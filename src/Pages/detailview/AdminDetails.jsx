import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import styles from './AdminDetails.css';
import { BACKEND_ENDPOINT } from '../../api/api';
import { useState } from 'react';
import axios from 'axios';

const AdminDetails = () => {
    const [details, setDetails] = useState([]);
    const [singleData, setSingleData] = useState(null);
    const [detailedView, setDetailedView] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDetails = async () => {
            const user = JSON.parse(localStorage.getItem('user'));
            console.log(user.id);
            try {
                const response = await axios.post(`${BACKEND_ENDPOINT}/user/get_all_user`, {
                    shibir_id: user.id
                });
                setDetails(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchDetails();

    }, []);

    const handleClick = (yuvak) => {
        setSingleData(yuvak);
        setDetailedView(true);
    };

    const handleCloseDetailedView = () => {
        setDetailedView(false);
        setSingleData(null);
    };


    return (
        <Background>
            <BackIcon onClick={() => navigate('/user-profile')}
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                alt="Back icon"
            />

            <input
                placeholder='Search name here'
            />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mandal</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(details) && details.map((yuvak, index) => (
                        <tr>
                            <td>{yuvak.name}</td>
                            <td>{yuvak.mandal}</td>
                            <td>
                                <Details onClick={() => handleClick(yuvak)}>View Details</Details>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {detailedView && (
                <>
                    <TransparentBackground onClick={handleCloseDetailedView} />
                    <DetailedViewModal>
                        <CloseButton onClick={handleCloseDetailedView}>X</CloseButton>
                        {singleData && (
                            <DetailedViewData>
                                <p><strong>Name:-</strong> {singleData.name}</p>
                                <p><strong>Shibir Id:-</strong> {singleData.shibir_id}</p>
                                <p><strong>Xetra:-</strong> {singleData.xetra}</p>
                                <p><strong>Mandal:-</strong> {singleData.mandal}</p>
                                <p><strong>Phone no:- </strong>{singleData.phone_number}</p>
                                <p><strong>Emergency no:- </strong>{singleData.emergency_number}</p>
                                <p><strong>Bus:- </strong>{singleData.bus_detail}</p>
                                <p><strong>Bus Leader1:- </strong>{singleData.bus_leader_1}</p>
                                <p><strong>Bus Leader1 no:- </strong>{singleData.bus_leader_1_no}</p>
                                <p><strong>Bus Leader2:- </strong>{singleData.bus_leader_2}</p>
                                <p><strong>Bus Leader2 no:- </strong>{singleData.bus_leader_2_no}</p>
                                <p><strong>Nashik Utara:- </strong>{singleData.nasik_utara}</p>
                                <p><strong>Pune Utara:- </strong>{singleData.pune_utara}</p>
                                <p><strong>Tithal Utara:- </strong>{singleData.tithal_utara}</p>
                                <p><strong>Quiz :- </strong>{singleData.quiz_score}</p>

                            </DetailedViewData>
                        )}
                    </DetailedViewModal>
                </>
            )}


        </Background>
    )
}

const Background = styled.div`
    background: #e2c2ff;
    min-height: 100vh; // Ensure it covers the full viewport height
    display: flex;
    flex-direction: column;
`;

const TransparentBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Details = styled.button`
    display: flex;
    padding: 8px 10px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 8px;
    background: var(--again-new-gradient, linear-gradient(180deg, #C86FFF 0%, #BFA1FF 100%));
    color: var(--BG-Purple, #1D0F2A);
    font-family: arial;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 140%; /* 22.4px */
    letter-spacing: -0.165px;
    margin-left: 15px;
`;


const DetailedViewModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90vw;
    height: 80vh;
    transform: translate(-50%, -50%);
    background: var(--Light-Pink-Gradient, linear-gradient(168deg, #FFF 0%, #E2C2FF 70.31%));  padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  // background-color: red;
  border: none;
  border-radius: 100px;
  color: #red;
  font-size: 16px;
  cursor: pointer;
`;

const DetailedViewData = styled.p`
  color: #333333;
  font-size: 16px;
`;
const BackIcon = styled.img`
    width: 13px;
    aspect-ratio: 0.65;
    object-fit: auto;
    fill: var(--BG-Gredient, linear-gradient(180deg, #270025 0%, #1d0f2a 100%));
    cursor: pointer;
    margin: 1.5rem;
`;
export default AdminDetails