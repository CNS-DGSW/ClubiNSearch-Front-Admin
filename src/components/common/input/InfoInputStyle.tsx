import Image from "next/image";
import styled from "styled-components";
interface IErrorProps {
  isError: boolean | null;
}

export const InputWrap = styled.nav`
  margin-bottom: 2.5rem;
`;

export const InputTitleWrap = styled.nav`
  display: flex;
  margin-bottom: 0.5rem;
  margin-top: 2.375rem;
  font-size: 13px;
  color: #666;
`;

export const EssentialContent = styled.p`
  color: #e03b3b;
  margin-left: 0.2rem;
  font-size: 1rem;
`;

export const InputStyle = styled.input`
  display: flex;
  padding: 0.8rem;
  font-size: 0.8rem;
  width: 22.125rem;
  box-shadow: none;
  color: #666;
  border-radius: 5px;
  border: ${(props: IErrorProps) =>
    props.isError == null
      ? "1px solid #c0c0c0"
      : props.isError
      ? "1px solid #c0c0c0"
      : "1px solid #FF4F4F"};
  ::placeholder,
  ::-webkit-input-placeholder {
    color: #c0c0c0;
  }
  :-ms-input-placeholder {
    color: #c0c0c0;
  }
  &:hover {
    border: ${(props: IErrorProps) =>
      props.isError == null
        ? "1px solid #a9c0f6"
        : props.isError
        ? "1px solid #a9c0f6"
        : "1px solid #FF4F4F"};
  }
  &:active {
    border: ${(props: IErrorProps) =>
      props.isError == null
        ? "1px solid #1556F7"
        : props.isError
        ? "1px solid #1556F7"
        : "1px solid #FF4F4F"};
  }
`;

export const ExplaneContext = styled.li`
  color: rgba(0, 0, 0, 0.4);
  font-weight: bold;
  font-size: 0.7rem;
  margin-left: 1.5rem;
`;

export const ErrorAlert = styled.p`
  margin: 0.4rem;
  color: #ff4f4f;
  font-size: 0.7rem;
  opacity: ${(props: IErrorProps) =>
    props.isError == null ? "0" : !props.isError ? "1" : "0"};
`;
