import { ChangeEventHandler, Dispatch, SetStateAction } from "react";
import * as S from "./InfoInputStyle";

interface IInformation {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  title: string;
  isEssential: boolean;
  placehorderContext: string;
  errorAlertContext: string;
  isExplane?: boolean;
  explaneContent?: string[];
  isError?: boolean;
}

const InfoInput = ({
  value,
  setValue,
  title,
  isEssential,
  placehorderContext,
  errorAlertContext,
  isExplane,
  explaneContent,
  isError,
}: IInformation) => {
  const OnChangeHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <S.InputWrap>
      <S.InputTitleWrap>
        <p>{title}</p>
        {isEssential && <S.EssentialContent>*</S.EssentialContent>}
      </S.InputTitleWrap>
      <S.InputStyle
        isError={isError ? false : true}
        type="text"
        placeholder={placehorderContext}
        value={value}
        onChange={OnChangeHandler}
      />
      <S.ErrorAlert isError={isError ? false : true}>
        {errorAlertContext}
      </S.ErrorAlert>
      {isExplane ? (
        <ul>
          {explaneContent?.map((explaneValue, i) => (
            <S.ExplaneContext key={i}>{explaneValue}</S.ExplaneContext>
          ))}
        </ul>
      ) : null}
    </S.InputWrap>
  );
};

export default InfoInput;
