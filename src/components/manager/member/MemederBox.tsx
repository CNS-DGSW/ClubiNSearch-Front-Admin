import { IMemberBoxPropsValue } from "@/types/IMemberBoxValue";
import React from "react";
import * as S from "./MemberBox.style";
import MemberContents from "./memberContents/MemberContents";
import { useDrop } from "react-dnd";

const MemederBox = (props: IMemberBoxPropsValue) => {
  const [, drop] = useDrop(() => ({
    accept: "BOX",
    drop: () => ({ index: props.Boxindex }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop,
      endDrop: monitor.getDropResult(),
    }),
  }));

  return (
    <S.MainContainer>
      <S.SubContainer>
        <S.TitleConatainer>
          <S.Title>{props.title}</S.Title>
        </S.TitleConatainer>
        <S.MemberContainer ref={drop}>
          {props.member?.map((value, index) => {
            return (
              <MemberContents
                key={index}
                state={props.state}
                setState={props.setState}
                userIndex={index}
                BeforeContainerIndex={props.Boxindex}
                memberValue={value}
              ></MemberContents>
            );
          })}
        </S.MemberContainer>

        <S.FooterNumOfPeople>
          전체 인원 : ({props.member?.length})
        </S.FooterNumOfPeople>
      </S.SubContainer>
    </S.MainContainer>
  );
};

export default MemederBox;
