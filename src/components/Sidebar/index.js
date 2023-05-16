import { useNavigate } from "react-router-dom";
import {
  ImageContainer,
  LogoutContainer,
  TopOptionsContainer,
} from "./index.styled";

import NavbarLogo from "../../assests/logo/logo.png";
import Category from "../../assests/icons/category.svg";
import Logout from "../../assests/icons/logout.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleMainScreen = (e) => {
    navigate("/");
  };

  const handleLogout = (e) => {
    navigate("/mainPage");
  };
  return (
    <>
      <TopOptionsContainer>
        <ImageContainer onClick={handleMainScreen}>
          <img src={NavbarLogo} alt="navbar_logo" />
        </ImageContainer>
        <ImageContainer>
          <img src={Category} alt="navbar_logo" />
        </ImageContainer>
      </TopOptionsContainer>
      <LogoutContainer onClick={handleLogout}>
        <img src={Logout} alt="navbar_logo" />
      </LogoutContainer>
    </>
  );
};

export default Sidebar;
