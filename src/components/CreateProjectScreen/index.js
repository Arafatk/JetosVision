import { useNavigate } from "react-router-dom";
import { Box1, Box2, CreateProjectBox, ImageContainer, LogoutContainer, MainContainer, TopOptionsContainer, CreateText } from "./index.styled";
import NavbarLogo from "../../assests/logo/logo.png";
import Category from "../../assests/icons/category.svg";
import Logout from "../../assests/icons/logout.svg";
import Create from "../../assests/icons/create.svg";

const CreateProjectScreen = () => {
  const navigate = useNavigate();
  const handleMainScreen = (e) => {
    navigate("/mainPage");
  };

  const handleLogout = (e) => {
    navigate("/mainPage");
  };

  return (
    <MainContainer>
      <Box1>
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
      </Box1>
      <Box2>

        <CreateProjectBox>
        <img src={Create} alt="navbar_logo" />
        <CreateText>Create Project</CreateText>
        </CreateProjectBox>
      </Box2>
    </MainContainer>
  );
};

export default CreateProjectScreen;
