import Image from "next/image";
import styled from "styled-components";

interface IErrorProps {
  isError: boolean | null;
}
interface IContextProps {
  isContext: boolean;
}

export const FileInputWrap = styled.nav`
  margin-bottom: 2.5rem;
`;

export const FileInputTitleWrap = styled.nav`
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

export const FileInputStyle = styled.input`
  position: absolute;
  opacity: 0;
`;

export const FileInputContext = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props: IContextProps) => (props.isContext ? "#666" : "#c0c0c0")};
`;

export const FileInputLabel = styled.label`
  display: flex;
  padding: 0.8rem 0.5rem;
  font-size: 0.8rem;
  width: 22.125rem;
  box-shadow: none;
  border-radius: 5px;
  color: #c0c0c0;
  border: ${(props: IErrorProps) =>
    props.isError == null
      ? "1px solid #c0c0c0"
      : props.isError
      ? "1px solid #c0c0c0"
      : "1px solid #FF4F4F"};
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

export const FileImageStyle = styled(Image)`
  width: 1rem;
  height: 1rem;
  margin: 0rem 0.5rem;
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
