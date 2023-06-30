import styled from "styled-components";
import Logo from "../../../asset/CNSLogo.svg";
import Image from "next/image";
import Link from "next/link";

interface IisActiveProps {
  isActive: boolean;
}

export const MainContainer = styled.nav`
  width: 20%;
  height: 100%;
  background-color: #fafafa;
  box-shadow: inset -0.25rem -0rem 1rem rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const TitleContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0rem auto;
  padding: 2rem 0rem;
  height: 5%;
`;

export const TitleImage = styled(Image)`
  background-image: url(${Logo});
  background-size: cover;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  margin-right: 0.8rem;
  box-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.5);
`;

export const TitleContext = styled.p`
  font-size: 1.25rem;
  color: #394050;
  font-weight: bold;
  text-shadow: 0rem 0.2rem 0.3rem rgba(0, 0, 0, 0.4);
`;

export const InquiryBox = styled.nav`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 5%;
  background-color: transparent;
  border-top: 1px solid #d9d9d9;
  background-color: #fafafa;
`;

export const ContentsContainer = styled.div`
  height: 84%;
  padding-bottom: 1rem;
  overflow: auto;
`;

export const DetailBtn = styled(Image)`
  width: 0.9rem;
  height: 0.9rem;
  margin-left: 1.5rem;
  margin-right: 0.75rem;

  transform: ${(props: IisActiveProps) =>
    props.isActive ? "rotate(90deg)" : "rotate(0deg)"};
`;

export const PositionTitleContaiver = styled.nav`
  display: flex;
  ailgn-items: center;
  width: 86%;
  height: 2.25rem;
  padding: 0% 7%;
  align-items: center;
`;

export const PositionTitle = styled.p`
  color: #666666;
  font-weight: bold;
  font-size: 1rem;
`;

export const PositionName = styled.div`
  color: #777777;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  width: 80%;
  padding: 0% 10%;
  height: 2.5rem;
  &:hover {
    background-color: #ebebeb;
  }
`;

export const PositionRadioBtn = styled.input`
  margin-left: 2rem;
  margin-right: 0.5rem;
`;

export const SubContentsContainer = styled.nav`
  border-bottom: 2px solid #d9d9d9;
  padding: 5% 0%;
`;
export const AnnounceContentsContainer = styled.nav`
  border-bottom: 2px solid #d9d9d9;
  padding: 5% 0%;
  display: flex;
  justify-content: space-between;
`;

export const AnnounceTitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #777777;
  fon-size: 0.8rem;
  width :100%;
  padding 0% 10%;
`;

export const AnnounceEditContainer = styled.div`
  display: flex;
  align-items: center;
  width : 10%;
  padding 0% 10%;
`;

export const AnnounceImage = styled(Image)`
  width: 2rem;
  height: 2rem;
`;
export const AnnounceIcon = styled(Image)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.75rem;
`;

export const FileIcon = styled(Image)`
  width: 1.125rem;
  height: 1.125rem;
  margin-right: 0.2rem;
`;

export const LinkTag = styled(Link)`
  text-decoration: none;
`;

export const FavPosition = styled.div`
  margin: 1rem 0rem 0rem 0.5rem;
`;

export const PositionMainContainer = styled.nav`
  padding: 0.5rem 0;
  background-color: ${(props: IisActiveProps) =>
    props.isActive ? "#ebebeb" : "transparent"};
  &:hover {
    background-color: #ebebeb;
  }
  &:active {
    background-color: #dbdbdb;
  }
`;
