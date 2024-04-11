import { PagesStyle } from "./MainPage";
import backGround from "../assets/images/backGround.svg";
import styled from "styled-components";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";
import { useNavigate } from "react-router-dom";

const ResultWrapper = styled.div`
  width: 300px;
  height: 450px;

  margin: 120px auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  gap: 24px;

  padding-top: 30px;

  border-radius: 12px;
  box-shadow: 0 0 0 0.4px;

  background-color: #fff;
`;

const ResultMessage = styled.h4`
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;

  color: #000;
  font-size: 1.2rem;
`;

const MBTIResult = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;

  color: #0897b4;
  font-size: 2rem;
`;

const LovePowerResult = styled.span`
  flex-grow: 0;
  flex-shrink: 0;
  text-align: center;

  color: #000;
  font-size: 1.2rem;
`;

const ResultStory = styled.div`
  width: 200px;
  height: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;

  padding: 15px;
  white-space: pre-line;

  border-radius: 12px;
  border-width: 1px;
  border-style: dashed;
  border-color: #001376;
`;

const GobacktoMainBtn = styled.button`
  width: 230px;
  height: 40px;

  margin-top: 10px;

  background-color: #0897b4;
  color: #fff;

  border: none;
  border-radius: 12px;
`;

const ResultScript = [
  `둘은 그 뒤로도  꽁냥꽁냥 잘 만나며\n
  함께 행복하게 졸업했습니다.`,
  `여전히 티격태격 싸우기도 \n
  안 맞는 부분이 많지만 그래도 좋아!`,
  `너무 안 맞아서 대판 싸우고\n
  헤어진 전설의 동아리 CC...\n
  나는 동아리 활동을 그만뒀다.`,
];

const ResultPage = () => {
  const { myResult, lovePower } = useContext(PageContext);
  const navigate = useNavigate();

  const selectScript = () => {
    if (lovePower >= 70 && lovePower < 100) return ResultScript[0];
    if (lovePower >= 40 && lovePower < 70) return ResultScript[1];
    if (lovePower >= 0 && lovePower < 40) return ResultScript[2];
  };

  const gobacktoMain = () => {
    navigate("/select");
  };

  const result = selectScript();

  return (
    <>
      <PagesStyle $image={backGround}>
        <ResultWrapper>
          <ResultMessage>나의 연애 유형은...</ResultMessage>
          <MBTIResult>{JSON.stringify(myResult.mbti)}</MBTIResult>
          <LovePowerResult>❤️나의 호감도 점수: {lovePower}</LovePowerResult>
          <ResultStory>{result}</ResultStory>

          <GobacktoMainBtn onClick={gobacktoMain}>
            홈으로 돌아가기
          </GobacktoMainBtn>
        </ResultWrapper>
      </PagesStyle>
    </>
  );
};

export default ResultPage;
