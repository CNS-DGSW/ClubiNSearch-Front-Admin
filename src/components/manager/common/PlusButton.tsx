import React, { Dispatch, SetStateAction } from "react";
import * as S from "./PlusButton.style";

const PlusButton = ({
  setModal,
}: {
  setModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <S.ContentsPlusButton onClick={() => setModal(true)}>
      +
    </S.ContentsPlusButton>
  );
};

export default PlusButton;
