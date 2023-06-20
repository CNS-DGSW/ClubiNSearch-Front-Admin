import styled from "styled-components";
import Image from "next/image";

export const MainContainer = styled.nav`
  width: 20rem;
  height: 100%;
  margin-right: 2rem;
`;

export const SubContainer = styled.nav`
  width: 20rem;
  height: 98%;
  background-color: #f3f3f3;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const TitleConatainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  padding: 5%;
  border-bottom: 1px solid #d7d7d7;
`;

export const Title = styled.p`
  font-size: 0.875rem;
  font-weight: bold;
`;

export const TitleDateInput = styled.input`
  border: none;
  background-color: transparent;
  filter: opacity(30%);
  width: 8rem;
  text-align: right;
  letter-spacing: -0.05rem;
  &:hover {
    filter: opacity(60%);
  }
`;

export const TrashCanIcon = styled(Image)`
  width: 1rem;
  height: 1rem;
  margin-left: 0.75rem;
  &:hover {
    filter: brightness(50%);
  }
`;

export const TitleLeftContainer = styled.div`
  display: flex;
`;

export const FooterNumOfPeople = styled.div`
  background-color: blue;
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 1rem;
  padding: 8% 10%;
  border-radius: 5px;
  color: #394050;
  font-weight: bold;
  background-color: #f3f3f3;
  box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, 0.5);
`;

export const MemberContainer = styled.div`
  height: 48rem;
  overflow: auto;
`;
