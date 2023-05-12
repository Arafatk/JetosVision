import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AskMe from "./components/AskMe";
import LoginIn from "./components/LoginIn";
import SignIn from "./components/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import MainScreen from "./components/MainScreen";

const MainContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<ProtectedRoute  />}>
          <Route path="/askme" element={<AskMe />} />
        </Route>
        <Route exact path="/login" element={<LoginIn />} />
        <Route exact path="/mainPage" element={<MainScreen />} />
        <Route path="/signin" element={<SignIn />} />

       
      </Routes>
    </MainContainer>
  );
}

export default App;
