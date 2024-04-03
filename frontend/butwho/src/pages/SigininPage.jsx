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

  const gotoSignup = () => {
    navigate("/signup");
  };

  return (
    <>
      <PagesStyle $image={backGround}>
        <InputWrapper>
          <InputItem>
            <InputLabel>이메일</InputLabel>
            <InputElement type="text" />
          </InputItem>
          <InputItem>
            <InputLabel>비밀번호</InputLabel>
            <InputElement type="password" />
          </InputItem>
          <InputItem>
            <Button>로그인</Button>
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
