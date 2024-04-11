import { PagesStyle } from "./MainPage";
import backGround from "../assets/images/backGround.svg";
import { Title, Content } from "../Styles/TextStyle";
import { Button, LogoutBtn } from "../Styles/ButtonStyle";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import axios from "axios";

import { BOYENUM } from "../enum";
import { PageContext } from "./../contexts/PageContext";
import { useNavigate } from "react-router-dom";

const TitleContainer = styled.div`
  display: inline-box;
  text-align: center;

  margin-top: 130px;
`;

const ContentContainer = styled.div`
  display: inline-box;
  text-align: center;

  margin-top: 70px;
`;

const ButtonContainer = styled.div`
  display: inline-box;
  text-align: center;
  margin-top: 50px;
`;

const ButtonItem = styled.div`
  margin-top: 20px;
`;

const SelectionPage = () => {
  const { accessToken, setAccessToken } = useContext(LoginContext);
  const { typeValue } = useContext(PageContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isClear, setIsClear] = useState([false, false, false]);

  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken === "") return;
    (async () => {
      try {
        const response = await axios.get("/api/play", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const gameClear = response.data;
        setIsClear([
          gameClear[0].isPlayed,
          gameClear[1].isPlayed,
          gameClear[2].isPlayed,
        ]);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        navigate("/signin");
      }
    })();
  }, [accessToken, navigate]);

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "api/user/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
      localStorage.clear();
      setAccessToken("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const isAllCleared = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/clear",
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const startGame = (type) => () => {
    typeValue(type);
    navigate("/main");
  };

  return (
    <>
      <PagesStyle $image={backGround}>
        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
        <TitleContainer>
          <Title>좋아하게 되었습니다 ...</Title>
          <Title>그런데 누구를?</Title>
        </TitleContainer>
        <ContentContainer>
          <Content>기다리던 대학 사진 동아리 입부!</Content>
          <Content>
            <br />
            나와 가장 잘 맞는 사람은 누구일까?
          </Content>
        </ContentContainer>
        <ButtonContainer>
          {!isLoading && (
            <>
              <ButtonItem>
                <Button
                  onClick={startGame(BOYENUM.OLDER)}
                  variant={!isClear[0] ? "active" : undefined}
                  disabled={isClear[0]}
                >
                  선배 만나러 가기
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button
                  onClick={startGame(BOYENUM.PEER)}
                  variant={!isClear[1] ? "active" : undefined}
                  disabled={isClear[1]}
                >
                  동기 만나러 가기
                </Button>
              </ButtonItem>
              <ButtonItem>
                <Button
                  onClick={startGame(BOYENUM.YOUNGER)}
                  variant={!isClear[2] ? "active" : undefined}
                  disabled={isClear[2]}
                >
                  후배 만나러 가기
                </Button>
              </ButtonItem>
              <br />
              <br />
              <ButtonItem>
                <Button
                  onClick={isAllCleared}
                  variant={isClear.every((e) => e) ? "active" : undefined}
                >
                  게임 다시 시작하기
                </Button>
              </ButtonItem>
            </>
          )}
        </ButtonContainer>
      </PagesStyle>
    </>
  );
};

export default SelectionPage;
