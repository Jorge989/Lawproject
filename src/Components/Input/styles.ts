import styled, { css } from "styled-components";
import Tooltip from "../Tolltip";

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #fff;
  padding-left: 5px;

  border: 2px solid #fff;
  margin-top: 5px;
  width: 35%;
  height: 47px;
  border-radius: 5px;
  margin-left: 62.5%;
  outline: 0;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 4%;
  }
  ${(props) =>
    props.isErrored &&
    css`
      color: #f90909;
      border-color: #ff0045;
    `}
  ${(props) =>
    props.isFocused &&
    css`
      color: #4040ff;
      border-color: #4040ff;
    `}

${(props) =>
    props.isFilled &&
    css`
      color: #4040ff;
    `}

>input {
    z-index: 999;
    outline: 0;
    border: 0;
    flex: 1;
    background: transparent;
    &::placeholder {
      color: #666360;
    }
  }

  > svg {
    margin-right: 10px;
    color: #666360;
    ${(props) =>
      props.isFocused &&
      css`
        color: #4040ff;
      `}
    ${(props) =>
      props.isFilled &&
      css`
        color: #4040ff;
      `}
  }
`;
export const Error = styled(Tooltip)`
  svg {
    margin-right: 16px;
  }
`;
