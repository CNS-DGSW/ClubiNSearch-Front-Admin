import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as S from "./Sidebar.style";
import { Logo, AnnounceIcon } from "./useSideBar";
import { IRecruitment } from "@/types/IRecruitment";
import API from "@/util/api";
import { useRouter } from "next/router";

interface ISidebarProps {
  pageid: number;
  stateValue: IRecruitment[];
  setStateValue: Dispatch<SetStateAction<IRecruitment[]>>;
}

const Sidebar = (props: ISidebarProps) => {
  const router = useRouter();
  const [clubNameTitle, setClubNameTitle] = useState<string>("");
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      API.get(`api/recruitment/${id}`)
        .then((e) => setClubNameTitle(e.data.clubName))
        .catch((_) => {});
    }
  }, [router]);

  return (
    <S.MainContainer>
      <S.TitleContainer>
        <S.TitleImage src={Logo} alt="dd" />
        <S.TitleContext>{clubNameTitle}</S.TitleContext>
      </S.TitleContainer>
      <S.ContentsContainer>
        <S.AnnounceContentsContainer>
          <S.AnnounceTitleContainer>
            <S.AnnounceIcon src={AnnounceIcon} alt="announceIcon" />
            <p>공고 리스트</p>
          </S.AnnounceTitleContainer>
        </S.AnnounceContentsContainer>
        <S.SubContentsContainer>
          {props.stateValue.map((value, index) => {
            return (
              <S.PositionMainContainer
                key={index}
                isActive={value.id === props.pageid}
              >
                <S.LinkTag href={`/manager/${value.id}`}>
                  <S.PositionTitleContaiver>
                    <S.PositionTitle>{value.title}</S.PositionTitle>
                  </S.PositionTitleContaiver>
                </S.LinkTag>
              </S.PositionMainContainer>
            );
          })}
        </S.SubContentsContainer>
      </S.ContentsContainer>
      <S.InquiryBox></S.InquiryBox>
    </S.MainContainer>
  );
};

export default Sidebar;
