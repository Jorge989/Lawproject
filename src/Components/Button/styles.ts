import styled from "styled-components";

export const Container = styled.button`
  outline: 0;
  box-shadow: 0px 5px 5px #a4a4a4;
  cursor: pointer;
  margin-top: 1.2%;
  margin-left: 62.5%;
  border-radius: 5px;
  background-color: #0000ff;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  width: 35%;
  height: 9.5%;
  > a {
    text-decoration: none;
    color: #fff;
  }
  &:hover {
    background-color: #2828fc;

    :after {
      content: "";
      animation: spin 500ms linear infinite;
      position: absolute;
      margin-top: 3.5%;
      margin-left: 2%;
      top: calc(50% - 0.5rem);
      left: calc(50% -0.5rem);
      width: 1rem;
      height: 1rem;
      border: 2px solid #fff;
      border-top-color: transparent;
      border-left-color: transparent;
      border-radius: 50%;
      animation:spin 500ms linear infinite;
      opacity:0;
    }

:after{
      opacity:1;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(380deg);
      }
    }
  }
`;
