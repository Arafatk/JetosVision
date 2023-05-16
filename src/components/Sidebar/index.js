import { useNavigate } from "react-router-dom";
import {
  ImageContainer,
  LogoutContainer,
  TopOptionsContainer,
  Letter
} from "./index.styled";

import NavbarLogo from "../../assests/logo/logo.png";
import Category from "../../assests/icons/category.svg";
import Logout from "../../assests/icons/logout.svg";
import { useEffect, useState } from "react";
import { apiUrl } from "../../constants";

const Sidebar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const handleMainScreen = (e) => {
    navigate("/");
  };

  const handleLogout = (e) => {
    localStorage.removeItem("token");
    navigate("/mainPage");
  };

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await fetch(apiUrl+"/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.email);
          
        } else {
          console.log("error");
        }
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <TopOptionsContainer>
        <ImageContainer onClick={handleMainScreen}>
          <img src={NavbarLogo} alt="navbar_logo" />
        </ImageContainer>
        <ImageContainer>
          <Letter>
          {user.charAt(0).toUpperCase()}
          </Letter>
        </ImageContainer>
      </TopOptionsContainer>
      <LogoutContainer onClick={handleLogout}>
        <img src={Logout} alt="navbar_logo" />
      </LogoutContainer>
    </>
  );
};

export default Sidebar;
