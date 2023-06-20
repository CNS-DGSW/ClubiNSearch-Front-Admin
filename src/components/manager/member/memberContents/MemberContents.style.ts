import styled from "styled-components";
import Image from "next/image";

export const MemberContainer = styled.div`
  width: 90%;
  margin: 5%;
`;

export const MemberContents = styled.div`
  width: 88%;
  background-color: white;
  border-radius: 5px;
  padding: 6%;
  box-shadow: 0rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
  position: relative;
`;

export const MemberDeleteButton = styled(Image)`
  position: absolute;
  width: 1rem;
  height: 1rem;
  right: 0;
  margin-right: 1rem;
  &:hover {
    filter: opacity(50%);
  }
`;

export const MemberContentsContainer = styled.nav`
  display: flex;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-weight: bold;
  font-size: 0.875rem;
  color: #394050;
`;

export const MemberName = styled.p`
  font-size: 1.125rem;
  color: #394050;
  font-weight: bold;
`;

export const MemberEachContent = styled.p`
  color: #7a7878;
  font-weight: bold;
  font-size: 0.875rem;
`;

export const UserDetailBtn = styled.button`
  border: 1px solid #ccc;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  width: 40%;
  background-color: white;
  padding: 2%;
  color: #999;
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;

export const DetailBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.5rem;
`;
