import { PagesStyle } from "./MainPage";
import backGround from "../assets/images/backGround.svg";
import {
  InputWrapper,
  InputItem,
  InputLabel,
  InputElement,
} from "../Styles/InputStyle";
import { Button } from "../Styles/ButtonStyle";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
import axios from "axios";
import { LoginContext } from "../contexts/LoginContext";

const TextItem = styled.div`
  margin-top: 20px;

  display: flex;
  justify-content: space-between;
`;

const GuideText = styled.span`
  color: #fff;
  font-size: 1rem;
`;

const GotoSignup = styled.button`
  color: #adb5ff;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: underline;
  background-color: transparent;
  border: none;
`;

const SigninPage = () => {
  const navigate = useNavigate();
  const idRef = useRef();
  const pwRef = useRef();
  const { setAccessToken } = useContext(LoginContext);

  const gotoSignup = () => {
    navigate("/signup");
  };

  const gotoSelection = async (e) => {
    e.preventDefault();
    try {
      const email = idRef.current.value;
      const password = pwRef.current.value;

      const response = await axios.post("/api/user/login", {
        email: email,
        password: password,
      });

      const jwtToken = response.data.jwt;
      localStorage.setItem("access_token", jwtToken);
      setAccessToken(jwtToken);

      navigate("/select");
    } catch (err) {
      console.log(err);
      alert("일치하는 회원이 존재하지 않습니다. 다시 로그인을 시도해 주세요.");
    }
  };

  return (
    <>
      <PagesStyle $image={backGround}>
        <InputWrapper>
          <InputItem>
            <InputLabel>이메일</InputLabel>
            <InputElement type="text" ref={idRef} />
          </InputItem>
          <InputItem>
            <InputLabel>비밀번호</InputLabel>
            <InputElement type="password" ref={pwRef} />
          </InputItem>
          <InputItem>
            <Button onClick={gotoSelection}>로그인</Button>
          </InputItem>
          <TextItem>
            <GuideText>아직 계정이 없으신가요?</GuideText>
            <GotoSignup onClick={gotoSignup}>회원가입</GotoSignup>
          </TextItem>
        </InputWrapper>
      </PagesStyle>
    </>
  );
};

export default SigninPage;
