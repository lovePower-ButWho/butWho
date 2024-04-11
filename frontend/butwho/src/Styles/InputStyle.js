import styled from "styled-components";

export const InputWrapper = styled.form`
  margin: 220px 28px;
`;
export const InputItem = styled.div`
  width: 300px;
  height: 60px;

  margin-bottom: 40px;
`;

export const InputLabel = styled.span`
  font-size: 0.8rem;
  color: #fff;
`;

export const InputElement = styled.input`
  width: 300px;
  height: 45px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 0;
  background-color: transparent;
  border-bottom: 1px solid #ebedef;

  font-size: 1rem;
  color: #fff;

  &:focus {
    outline: none;
    background-color: #fff;
    opacity: 50%;
    border-bottom: 3px solid #131e29;
    color: #131e29;
  }
`;
