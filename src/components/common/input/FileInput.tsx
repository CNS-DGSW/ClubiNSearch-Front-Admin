import React, { Dispatch, SetStateAction, ChangeEvent, useState } from "react";
import * as S from "@/components/common/input/FileInputStyle";
import fileImage from "../../../asset/file.svg";

interface File extends Blob {
  readonly lastModified: number;
  readonly name: string;
}

interface IFileInputProps {
  value: File | undefined;
  setValue: Dispatch<SetStateAction<any>>;
  title: string;
  isEssential: boolean;
  placehorderContext: string;
  errorAlertContext: string;
  isExplane?: boolean;
  explaneContent?: string[];
}

const FileInput = (props: IFileInputProps) => {
  const [isContext, setIsContext] = useState<boolean>(false);
  const ImageOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    props.setValue(file);
  };

  return (
    <S.FileInputWrap>
      <S.FileInputTitleWrap>
        <p>{props.title}</p>
        {props.isEssential ? <S.EssentialContent>*</S.EssentialContent> : null}
      </S.FileInputTitleWrap>
      <S.FileInputLabel isError={true}>
        <S.FileInputStyle type="file" onChange={ImageOnChangeHandler} />
        <S.FileImageStyle src={fileImage} alt="file" />
        <S.FileInputContext isContext={isContext}>
          {props.value ? props.value.name : props.placehorderContext}
        </S.FileInputContext>
      </S.FileInputLabel>
      <S.ErrorAlert isError={true}>{props.errorAlertContext}</S.ErrorAlert>
      {props.isExplane ? (
        <ul>
          {props.explaneContent?.map((explaneValue, i) => {
            return <S.ExplaneContext key={i}>{explaneValue}</S.ExplaneContext>;
          })}
        </ul>
      ) : null}
    </S.FileInputWrap>
  );
};

export default FileInput;
