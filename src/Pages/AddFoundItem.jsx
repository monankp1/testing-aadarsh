import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { BACKEND_ENDPOINT } from '../api/api';
import { ToastContainer, toast } from "react-toastify"


function AddFoundItem() {
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const reference = useRef();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();


        const user = JSON.parse(localStorage.getItem('user'));
        const id = user?.id;
        console.log("id", id)
        const data = {
            shibir_id: id,
            description: message
        };

        axios.post(`${BACKEND_ENDPOINT}/lost_and_found/post_lost_and_found`, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });

        navigate(-1);
    }

    useEffect(() => {
        reference.current.focus();
    }, [])

    return (
        <AppBackground>
            <Header>
                <BackIcon onClick={() => navigate(-1)}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a9737027d53672d51e861c036db609e65e7478afbce397041e33ffa50b82a036?apiKey=3250d16d0ad044539de68d3e33600ce8&"
                    alt="Back icon"
                />
                <SaveButton type='submit' form="foundForm">Save</SaveButton>
            </Header>
            <form id="foundForm" onSubmit={handleSubmit}>

                <InputBox>
                    <StyledInput
                        type='text'
                        ref={reference}
                        value={message}
                        onChange={handleChange}
                        required
                        placeholder='Type the short description of item'
                    />
                </InputBox>
            </form>
            <ToastContainer position="top-center" autoClose={5000} />

        </AppBackground>
    )
}

const AppBackground = styled.div`
  background: linear-gradient(180deg, #ffffff 0%, #e2c2ff 100%);
  min-height: 100vh; // Ensure it covers the full viewport height
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

const StyledInput = styled.textarea`
  width: 90vw;
  height: 80vh;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: #000;
  background: transparent;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  outline: none;
  resize: none;
  overflow-wrap: break-word; 
`;

const BackIcon = styled.img`
  width: 13px;
  aspect-ratio: 0.65;
  object-fit: auto;
  fill: var(--BG-Gredient, linear-gradient(180deg, #270025 0%, #1d0f2a 100%));
  cursor: pointer;
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #e2c2ff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  &:hover {
    background-color: #3700b3;
  }

  &:active {
    background-color: #290082;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 5px;
  z-index: 
`;


export default AddFoundItem;
