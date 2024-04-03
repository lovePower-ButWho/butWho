import styled from "styled-components";

export const Button = styled.button`
  width: 300px;
  height: 60px;
  font-size: 1.1rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  border-radius: 12px;

  background-color: #405b76;
  color: #fff;
  opacity: 80%;

  &:active {
    background-color: #fff;
    color: #405b76;
    opacity: 50%;
  }
`;
