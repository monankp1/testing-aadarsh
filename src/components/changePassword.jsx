import * as React from "react";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Header = styled.header`
  display: flex;
  padding-right: 28px;
  gap: 20px;
  font-size: 20px;
  color: var(--BG-Purple, #1d0f2a);
  font-weight: 700;
  text-align: center;
  justify-content: space-between;
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
`;

const Title = styled.h1`
  font-family: Poppins, sans-serif;
  margin: auto 0;
  font-weight: 700;
`;

const CloseIcon = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 20px;
  stroke-width: 2px;
  stroke: var(--BG-Purple, #1d0f2a);
`;

const Content = styled.main`
  display: flex;
  margin-top: 29px;
  flex-direction: column;
  font-size: 14px;
  letter-spacing: -0.17px;
`;

const InputField = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(29, 15, 42, 0.5);
  background-color: rgba(226, 194, 255, 0.5);
  display: flex;
  gap: 10px;
  line-height: 140%;
  padding: 16px;

  &:not(:first-child) {
    margin-top: 16px;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  font-family: Sora, sans-serif;
  color: var(--BG-Purple, #1d0f2a);

  ::placeholder {
    color: #9670b3; /* Lighter shade of purple for placeholders */
  }
`;

const SubmitButton = styled.button`
  font-family: Poppins, sans-serif;
  border-radius: 8px;
  border: 1px solid rgba(29, 15, 42, 0.5);
  background-color: var(--BG-Purple, #1d0f2a);
  align-self: center;
  margin-top: 36px;
  color: var(--Title, #fff);
  font-weight: 600;
  white-space: nowrap;
  text-align: center;
  justify-content: center;
  padding: 15px 16px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ChangePasswordForm = styled.form`
  border-radius: 40px;
  box-shadow: 10px 10px 20px 3px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(12.5px);
  background-color: #fff;
  display: flex;
  max-width: 340px;
  flex-direction: column;
  padding: 31px 15px;
`;

// [Existing styled components here]

const ChangePassword = ({ isOpen, onClose }) => {
  const [shibirID, setShibirID] = React.useState("");
  const [phoneNo, setPhoneNo] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!shibirID.trim()) newErrors.shibirID = "Shibir ID is required";
    if (!phoneNo.trim()) newErrors.phoneNo = "Phone number is required";
    if (!newPassword.trim()) newErrors.newPassword = "Password is required";
    else if (newPassword.length < 8)
      newErrors.newPassword = "Password must be at least 8 characters long";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please correct the errors in the form");
      return;
    }
    try {
      const response = await axios.post(
        "https://bharuchbaps.in/bharuchbaps.in/index.php/login/forgot_password",
        {
          shibir_id: shibirID,
          phone_number: phoneNo,
          password: newPassword,
        }
      );
      console.log(response);
      if (response.data.status === false) {
        toast.error(response.data.message);
        // throw new Error(response.data.message);
      }
      if (response.data.status === true) {
        alert(response.data.status);
        toast.success(response.data.message);
        // setShibirID("");
        // phoneNo("");
        // newPassword("");
      }
    } catch (error) {
      console.error("Failed to change password:", error);
    }
  };

  if (!isOpen) return null;

  const isDisabled = !shibirID || !phoneNo || !newPassword;

  return (
    <ModalOverlay>
      <ChangePasswordForm onSubmit={handleSubmit}>
        <Header>
          <Title>Change Password</Title>
          <CloseIcon
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0e49864ad72fadb2451c6cbb211bf83802489e5c9b24009e56cff78069f0d02?placeholderIfAbsent=true"
            alt="Close"
            onClick={onClose}
          />
        </Header>
        <Content>
          <InputField>
            <Icon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bcf2ffcf55c9f1e30abd23abd7f2cc977b0fb920559330f286d35fbe49fa93d?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="Shibir ID"
            />
            <Input
              value={shibirID}
              onChange={(e) => setShibirID(e.target.value)}
              placeholder="Shibir ID"
              isInvalid={errors.shibirID}
            />
          </InputField>
          {errors.shibirID && <p>{errors.shibirID}</p>}
          <InputField>
            <Icon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bcf2ffcf55c9f1e30abd23abd7f2cc977b0fb920559330f286d35fbe49fa93d?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="Phone No."
            />
            <Input
              value={phoneNo}
              onChange={(e) => setPhoneNo(e.target.value)}
              placeholder="Phone No."
              type="number"
              isInvalid={errors.phoneNo}
            />
          </InputField>
          {errors.phoneNo && <p>{errors.phoneNo}</p>}
          <InputField>
            <Icon
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9407cedc0a0cef3167b34758951b95d1d6453fc95de4ef862f6f6a94c8ad26ee?apiKey=3250d16d0ad044539de68d3e33600ce8&"
              alt="New Password"
            />
            <Input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              isInvalid={errors.newPassword}
            />
          </InputField>
          {errors.newPassword && <p>{errors.newPassword}</p>}
          <SubmitButton
            onClick={handleSubmit}
            type="submit"
            disabled={isDisabled}
          >
            Submit
          </SubmitButton>
        </Content>
      </ChangePasswordForm>
      <ToastContainer position="top-center" autoClose={5000} />
    </ModalOverlay>
  );
};

export default ChangePassword;
