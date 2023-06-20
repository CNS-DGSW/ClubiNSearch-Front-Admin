import React from "react";
import * as S from "./MemberContents.style";
import { IMemberPropsValue } from "@/types/IMemberValue";
import { useDrag } from "react-dnd";
import ChangeValue from "@/util/ChangeValue";
interface IMonitorProps {
  index: number;
}

const MemberContents = (props: IMemberPropsValue) => {
  const [{}, drag] = useDrag(() => ({
    type: "BOX",
    item: {},
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
    end: (_, monitor) => {
      const a = monitor.getDropResult<IMonitorProps>();
      if (a !== null) {
        ChangeValue({
          State: {
            stateValue: props.state,
            setState: props.setState,
          },
          Dnd: {
            resumeId: String(props.memberValue.resumeId),
            state: props.state[a.index].state,
            containerIndex: a.index,
            userIndex: props.userIndex,
            BeforeContainerIndex: props.BeforeContainerIndex,
          },
        });
      }
    },
  }));

  return (
    <S.MemberContainer ref={drag}>
      <S.MemberContents>
        <S.MemberName>{props.memberValue.name}</S.MemberName>
        <S.MemberContentsContainer>
          학번 :
          <S.MemberEachContent>
            {props.memberValue.studentNo}
          </S.MemberEachContent>
        </S.MemberContentsContainer>
        <S.MemberContentsContainer>
          연락처 :
          <S.MemberEachContent>{props.memberValue.contact}</S.MemberEachContent>
        </S.MemberContentsContainer>
        <S.MemberContentsContainer>한줄 자기소개 :</S.MemberContentsContainer>
        <S.MemberEachContent>
          {props.memberValue.introduction}
        </S.MemberEachContent>
        <S.DetailBtnWrap>
          <S.UserDetailBtn
            onClick={() => {
              if (
                props.memberValue.fileUrl === "" ||
                props.memberValue.fileUrl == null
              ) {
                alert("포트폴리오가 없습니다.");
                return;
              } else {
                window.open(props.memberValue.fileUrl);
              }
            }}
          >
            포트폴리오
          </S.UserDetailBtn>
          <S.UserDetailBtn
            onClick={() => {
              if (
                props.memberValue.link.length <= 8 ||
                props.memberValue.link == null
              ) {
                alert("포트폴리오 링크가 없습니다.");
                return;
              } else {
                window.open(props.memberValue.link);
              }
            }}
          >
            포트폴리오 링크
          </S.UserDetailBtn>
        </S.DetailBtnWrap>
      </S.MemberContents>
    </S.MemberContainer>
  );
};

export default MemberContents;
