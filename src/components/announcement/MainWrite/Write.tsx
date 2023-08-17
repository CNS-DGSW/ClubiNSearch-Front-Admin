import React, { useState } from "react";
import * as S from "./Write.style";
import API from "@/util/api";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {
  clubNameAtom,
  titleAtom,
  positionAtom,
  startDateAtom,
  endDateAtom,
  employmentTypeAtom,
  detailContentAtom,
  isOpenAtom,
} from "@/store/WriteAtom";
import { useRecoilState } from "recoil";
import { useRouter } from "next/router";

const Write = () => {
  const router = useRouter();
  const [isEditMarkdown, setIsEditMarkdown] = useState<boolean>(true);
  const [clubName] = useRecoilState<string>(clubNameAtom);
  const [employmentType] = useRecoilState<string>(employmentTypeAtom);
  const [position] = useRecoilState<string>(positionAtom);
  const [startDate] = useRecoilState<string>(startDateAtom);
  const [endDate] = useRecoilState<string>(endDateAtom);
  const [title, setTitle] = useRecoilState<string>(titleAtom);
  const [detailContent, setDetailContent] =
    useRecoilState<string>(detailContentAtom);
  const [isOpen, setIsOpen] = useRecoilState<boolean>(isOpenAtom);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDetailContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetailContent(event.target.value);
  };

  const handleSubmit = async () => {
    setIsOpen(true);

    const payload = {
      clubName: clubName,
      title: title,
      position: position,
      employmentType: employmentType,
      detailContent: detailContent,
      startDate: startDate,
      endDate: endDate,
      isOpen: isOpen,
    };

    const Token: string | null = localStorage.getItem("accessToken");
    await API.post(
      "/api/recruitment/create",
      {
        clubName: clubName,
        title: title,
        position: position,
        employmentType: employmentType,
        detailContent: detailContent,
        startDate: startDate,
        endDate: endDate,
        isOpen: isOpen,
      },
      {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }
    )
      .then((_) => {
        alert("작성하신 공고가 게시되었습니다.");
        router.push("/");
      })
      .catch((_) => {
        alert("모든 필드를 채워주세요.");
        window.scrollTo(0, 0);
      });
  };

  return (
    <>
      <S.mainContainer>
        <S.content>
          <S.contentTitle>제목</S.contentTitle>
          <S.contentPoint>*</S.contentPoint>
        </S.content>
        <S.titleInput
          isOpen={isOpen}
          title={title}
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={handleTitleChange}
        ></S.titleInput>
        {isOpen && title == "" && (
          <div
            style={{
              color: "red",
              fontSize: "13px",
              marginTop: "-4%",
              marginBottom: "1.3%",
            }}
          >
            *필수 입력 항목입니다.*
          </div>
        )}
        <S.content>
          <S.contentTitle>내용</S.contentTitle>
          <S.contentPoint>*</S.contentPoint>
        </S.content>
        <S.EditTextareaForm isOpen={isOpen} detailContent={detailContent}>
          <>
            <S.StatusButton
              isEdit={isEditMarkdown}
              onClick={() => setIsEditMarkdown(true)}
            >
              Edit
            </S.StatusButton>
            <S.StatusButton
              isEdit={!isEditMarkdown}
              onClick={() => setIsEditMarkdown(false)}
            >
              Preview
            </S.StatusButton>
          </>
          <S.MarkdownViewWrap isOpen={isOpen} detailContent={detailContent}>
            {isEditMarkdown ? (
              <S.mainTextarea
                placeholder="내용을 입력해주세요. (기본 마크다운 문법 사용가능)"
                name="detailContent"
                value={detailContent}
                onChange={handleDetailContentChange}
              ></S.mainTextarea>
            ) : (
              <S.PreviewMarkdown></S.PreviewMarkdown>
            )}
          </S.MarkdownViewWrap>
        </S.EditTextareaForm>
        {isOpen && detailContent == "" && (
          <div
            style={{
              color: "red",
              fontSize: "13px",
              marginTop: "-4%",
              marginBottom: "1.3%",
            }}
          >
            *필수 입력 항목입니다.*
          </div>
        )}
      </S.mainContainer>
      <S.subButton onClick={handleSubmit}>게시하기</S.subButton>
    </>
  );
};

export default Write;
