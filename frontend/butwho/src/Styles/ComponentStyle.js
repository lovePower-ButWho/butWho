import styled from "styled-components";
import { NAMEENUM } from "./../enum/index";

export const BottomContainer = styled.div`
  position: absolute;
  top: 70%;
  width: 100%;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5em;
`;

export const Name = styled.div`
  font-family: "pretendard-regular";
  font-size: 0.9em;
  text-align: right;
  padding: 5px 10px;
  color: #fff;
  background-color: #afadff;
  min-height: 1.2em;
  width: 40%;
  z-index: 10;
`;

export const ScriptBox = styled.div`
  font-family: "pretendard-regular";
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0em 0.5em;
  gap: 0.5em;
  z-index: 10;
  user-select: none;
  background: linear-gradient(
    0deg,
    rgba(255, 248, 248, 0.7) 0%,
    rgba(255, 248, 248, 0.7) 80%,
    rgba(255, 255, 255) 100%
  );
  min-height: ${({ $minheight }) => $minheight}rem;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 5em;
  width: 70%;
  ${(props) => (props.$name === NAMEENUM.GIRL ? "left: 0;" : "right: 0;")}
`;

export const ScriptText = styled.div`
  color: #000;
  font-size: 0.9em;
`;
