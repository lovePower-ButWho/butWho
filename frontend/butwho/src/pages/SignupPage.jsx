import { PagesStyle } from "../pages/MainPage";
import backGround from "../assets/images/backGround.svg";
import {
  InputWrapper,
  InputItem,
  InputLabel,
  InputElement,
} from "../Styles/InputStyle";
import { Button } from "../Styles/ButtonStyle";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const finishSignup = () => {
    alert("회원가입이 완료되었습니다. 로그인해 주세요.");
    navigate("/signin");
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
            <InputLabel>비밀번호 확인</InputLabel>
            <InputElement type="password" />
          </InputItem>
          <InputItem>
            <InputLabel>이름</InputLabel>
            <InputElement type="text" />
          </InputItem>
          <InputItem>
            <Button onClick={finishSignup}>회원가입</Button>
          </InputItem>
        </InputWrapper>
      </PagesStyle>
    </>
  );
};

export default SignupPage;
