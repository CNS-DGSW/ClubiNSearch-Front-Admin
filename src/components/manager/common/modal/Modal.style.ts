import styled from "styled-components";

export const MainBackground = styled.div`
  width: 90%;
  height: 90%;
`;

export const MainContainer = styled.div`
  position: fixed;
  z-index: 1;
  width: 40%;
  height: 80%;
  left: 50%;
  background-color: white;
  border-radius: 1rem;
  margin: 5%;
  box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ExitBtn = styled.button`
  border: none;
  border-radius: 0.3rem;
  background-color: #4478f9;
  color: white;
  width: 2rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    background-color: #2d5bce;
  }
  &:active {
    background-color: #254baa;
  }
`;

export const EvaluationTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const InputContext = styled.p`
  font-size: 1rem;
  color: #666666;
`;

export const InputContent = styled.input`
  background-color: none;
  border: none;
  box-shadow: none;
  border-bottom: 1px solid #d9d9d9;
  padding: 0.5rem;
  width: 50%;
  color: #6a6a6a;
  &::placeholder {
    color: #999;
  }
  &:invalid::-webkit-datetime-edit {
    color: #999;
  }
`;

export const InputContentsWrap = styled.nav`
  margin-bottom: 2rem;
`;

export const PlusBtn = styled.button`
  border: none;
  border-radius: 0.3rem;
  background-color: #4478f9;
  color: white;
  width: 6rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 500;
  &:hover {
    background-color: #2d5bce;
  }
  &:active {
    background-color: #254baa;
  }
`;
