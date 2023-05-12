import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MainConatiner,
  ImageContainer,
  ButtonContainer,
  Textbox1,
} from "./index.styled";
import NavbarLogo from "../../assests/logo/logo.png";
import styled from "styled-components";
import { Bluetext } from "../MainScreen/index.styled";

const LOGIN_SIGNUP = {
  login: "LOGIN",
  signUp: "SIGNUP",
};

export default function Navbar() {
  const navigate = useNavigate();

  const isAuth = localStorage.getItem("token");
  const [isSignUp, setIsSignUp] = useState();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleLogin = (e) => {
    navigate("/login");
    setIsSignUp(LOGIN_SIGNUP.login);
  };

  const handleMainScreen = (e) => {
    navigate("/mainPage");
    setIsSignUp(LOGIN_SIGNUP.login);
  };

  const handleTryNow = (e) => {
    navigate("/signIn");
    setIsSignUp(LOGIN_SIGNUP.signUp);
  };
 

  // useEffect(() => {
  //   if (location.pathname === "/signIn") {
  //     setIsSignUp(true);
  //   } else {
  //     setIsSignUp(false);
  //   }
  // }, [isSignUp]);

  return (
    <>
      <MainConatiner>
        <ImageContainer onClick={handleMainScreen}>
          <img src={NavbarLogo} alt="navbar_logo" />
        </ImageContainer>
        {isAuth ? (
          <ButtonContainer onClick={handleLogout}>
            <Textbox1>Logout</Textbox1>
          </ButtonContainer>
        ) : (
          <Buttons>
            <LoginText onClick={handleLogin}>Log in</LoginText>
            {isSignUp === LOGIN_SIGNUP.signUp ? null : (
              <ButtonContainer onClick={handleTryNow}>
                <Textbox1>Try Now</Textbox1>
              </ButtonContainer>
            )}
          </Buttons>
        )}
      </MainConatiner>
    </>
  );
}

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6;
`;

export const LoginText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #f2f2f2;
  margin-right: 18px;
  cursor: pointer;
`;
