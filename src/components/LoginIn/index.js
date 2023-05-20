import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import OtherSignUpOptions from "../OtherSignUpOptions";

import { LoginOptions } from "../../constants";

const LoginIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);
    const response = await fetch("/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (response.ok) {
      // console.log(data);
      localStorage.setItem("token", data.access_token);
      navigate("/");
    } else {
      console.error("Error logging in");
    }
  };

  return (
    <MainContainer>
    <SecondaryContainer>
      <TextContainer>
        <Text1>Log In</Text1>
      </TextContainer>
      <OtherOptionsContainer >
      <OtherSignUpOptions options={LoginOptions} />
      </OtherOptionsContainer>
     
      <InputContainer>
        <TextLabel>Email</TextLabel>
        <TextInput
          placeholder="Enter Email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          value={email}
        ></TextInput>
      </InputContainer>
      <InputContainer>
        <TextLabel>Password</TextLabel>
        <TextInput
          placeholder="Enter Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          value={password}
        ></TextInput>
      </InputContainer>

      <ButtonContainer onClick={handleSubmit}>Login</ButtonContainer>
      <BottomText>
        <BottomText1>Don't have an account <Link to="/signIn" style={{ color: 'white' }} >Sign Up</Link></BottomText1>
        <BottomText2>
         
        </BottomText2>
      </BottomText>
    </SecondaryContainer>
  </MainContainer>
  );
};

export default LoginIn;

export const MainContainer = styled.div`
  margin-top: 92px;
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;
  color: red;
  align-items: center;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  align-self: center;
  width: 570px;
  height: 752px;
  color: red;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  border: 4px solid #575757;
  border-radius: 32px;
`;

export const TextInput = styled.input`
  width: 261px;
  height: 52px;
  background: #000000;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  color: #ffffff;
  padding: 16px 32px;
  font-size: 16px;
`;

export const TextLabel = styled.label`
  font-family: "inter";
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.3px;
  color: #bdbdbd;
  mix-blend-mode: normal;
  flex: none;
  order: 0;
  flex-grow: 0;
  letter-spacing: 0.3px;
  width: 54px;
  height: 12px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 72px;
  padding: 12px;
`;

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 261px;
  height: 51px;
  background: #5d5fef;
  border-radius: 64px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  border: 4px solid #03045e;
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
  border-radius: 64px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text1 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #f2f2f2;
  height: 39px;
`;
export const Text2 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #bdbdbd;
  width: 333px;
  height: 48px;
`;

export const BottomText = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BottomText1 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #f2f2f2;
`;
export const BottomText2 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 24px;
  color: #bdbdbd;
`;

export const OtherOptionsContainer= styled.div`
 margin-top: 12px
`