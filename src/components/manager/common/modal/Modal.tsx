import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./Modal.style";
import { IMemberBoxValue } from "../../../../types/IMemberBoxValue";

const Modal = ({
  setModal,
  setMemberContentsValue,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
  setMemberContentsValue: Dispatch<SetStateAction<IMemberBoxValue[]>>;
}) => {
  const [NewMemberBox, setNewMemberBox] = useState<IMemberBoxValue>({
    title: "",
    member: [],
  });
  const AddEvaluation = () => {
    if (NewMemberBox.title === "") {
      alert("값을 제대로 입력해주세요");
      return;
    }
    if (!window.confirm(NewMemberBox.title + "의 평가과정을 추가하시겠습니까?"))
      return;
    setModal(false);
    setMemberContentsValue((prev) => {
      console.log([...prev, NewMemberBox]);

      return [...prev, NewMemberBox];
    });
  };
  return (
    <S.MainContainer>
      <S.MainBackground>
        <S.ModalHeader>
          <S.EvaluationTitle>평가 과정 추가</S.EvaluationTitle>
          <S.ExitBtn onClick={() => setModal(false)}>X</S.ExitBtn>
        </S.ModalHeader>
        <S.InputContentsWrap>
          <S.InputContext>제목</S.InputContext>
          <S.InputContent
            type="text"
            placeholder="평가 제목을 입력해주세요."
            value={NewMemberBox.title}
            onChange={(e) =>
              setNewMemberBox((prev) => {
                return { ...prev, title: e.target.value };
              })
            }
          />
        </S.InputContentsWrap>
        <S.InputContentsWrap>
          <S.InputContext>날짜</S.InputContext>
          <S.InputContent type="date" required />
        </S.InputContentsWrap>
        <S.PlusBtn onClick={AddEvaluation}>추가하기</S.PlusBtn>
      </S.MainBackground>
    </S.MainContainer>
  );
};

export default Modal;
