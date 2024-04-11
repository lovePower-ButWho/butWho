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

  background-color: ${(props) => (props.variant ? "#fff" : "#405b76")};
  color: ${(props) => {
    switch (props.variant) {
      case "active":
        return "#131e29";
      default:
        return "#fff";
    }
  }};
  opacity: ${(props) => {
    switch (props.variant) {
      case "active":
        return "100%";
      default:
        return "80%";
    }
  }};

  &:active {
    background-color: #fff;
    color: #405b76;
    opacity: 50%;
  }
`;

export const LogoutBtn = styled.button`
  position: absolute;
  top: 20px;
  bottom: auto;
  right: 20px;
  left: auto;

  background-color: transparent;
  color: #fff;
  border: none;

  font-size: 1.1rem;

  &:active {
    color: #2f8ef5;
  }
`;
