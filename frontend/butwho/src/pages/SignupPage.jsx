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
import { useState, useCallback, useContext } from "react";
import { LoginContext } from "../contexts/LoginContext";
import axios from "axios";

const SignupPage = () => {
  const navigate = useNavigate();
  const { setAccessToken } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [name, setName] = useState("");

  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const onChangeName = useCallback((e) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다.");
      setIsName(true);
    }
  }, []);

  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다. 다시 입력하세요.");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다.");
      setIsEmail(true);
    }
  }, []);

  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호입니다.");
      setIsPassword(true);
    }
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e) => {
      const confirmCurrent = e.target.value;
      setConfirm(confirmCurrent);

      if (password === confirmCurrent) {
        setConfirmMessage("비밀번호 확인에 성공했습니다.");
        setIsConfirm(true);
      } else {
        setConfirmMessage("비밀번호가 틀립니다. 다시 시도해주세요.");
        setIsConfirm(false);
      }
    },
    [password]
  );

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/user/register", {
        email: email,
        password: password,
        name: name,
      });
      console.log(response);
      const jwtToken = response.data.jwt;
      localStorage.setItem("access_token", jwtToken);
      setAccessToken(jwtToken);
      navigate("/select");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <PagesStyle $image={backGround}>
        <InputWrapper onSubmit={onSubmit}>
          <InputItem>
            <InputLabel>이메일</InputLabel>
            <InputElement
              type="text"
              required
              value={email}
              onChange={onChangeEmail}
              placeholder="이메일 주소"
            />{" "}
            {email.length > 0 && (
              <span
                className={`message ${isEmail ? "success" : "error"}`}
                style={{ color: "white", fontSize: "12px" }}
              >
                {emailMessage}
              </span>
            )}
          </InputItem>
          <InputItem>
            <InputLabel>비밀번호</InputLabel>
            <InputElement
              type="password"
              required
              value={password}
              onChange={onChangePassword}
              placeholder="숫자+영문+특수문자 조합 8자리 이상"
            />{" "}
            {password.length > 0 && (
              <span
                className={`message ${isPassword ? "success" : "error"}`}
                style={{ color: "white", fontSize: "12px" }}
              >
                {passwordMessage}
              </span>
            )}
          </InputItem>
          <InputItem>
            <InputLabel>비밀번호 확인</InputLabel>
            <InputElement
              type="password"
              required
              value={confirm}
              onChange={onChangePasswordConfirm}
              placeholder="비밀번호 재입력"
            />{" "}
            {password.length > 0 && (
              <span
                className={`message ${isConfirm ? "success" : "error"}`}
                style={{ color: "white", fontSize: "12px" }}
              >
                {confirmMessage}
              </span>
            )}
          </InputItem>
          <InputItem>
            <InputLabel>이름</InputLabel>
            <InputElement
              type="text"
              required
              value={name}
              onChange={onChangeName}
              placeholder="이름(2글자 이상 5글자 미만)"
            />
            <span
              className={`message ${isName ? "success" : "error"}`}
              style={{ color: "white", fontSize: "12px" }}
            >
              {nameMessage}
            </span>
          </InputItem>
          <InputItem>
            <Button type="submit">회원가입</Button>
          </InputItem>
        </InputWrapper>
      </PagesStyle>
    </>
  );
};

export default SignupPage;
