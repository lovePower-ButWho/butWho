import { PagesStyle } from "./MainPage";
import splash from "../assets/images/splash.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Styles/ButtonStyle";
import styled from "styled-components";
import { useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";

const ButtonItem = styled.div`
  margin: 700px 30px;
`;

const SplashPage = () => {
  const navigate = useNavigate();
  const { accessToken } = useContext(LoginContext);

  const onClickImg = () => {
    console.log(accessToken);
    if (accessToken) return navigate("/select");
    navigate("/signin");
  };

  return (
    <>
      <PagesStyle onClick={onClickImg} $image={splash}>
        <ButtonItem>
          <Button onClick={onClickImg}>Tap to start</Button>
        </ButtonItem>
      </PagesStyle>
    </>
  );
};

export default SplashPage;
