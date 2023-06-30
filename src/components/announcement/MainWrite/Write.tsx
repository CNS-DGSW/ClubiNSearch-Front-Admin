import React, { useState } from "react";
import * as S from "./Write.style";
import API from "@/util/api";
import {
  clubNameAtom,
  titleAtom,
  positionAtom,
  startDateAtom,
  endDateAtom,
  employmentTypeAtom,
  detailContentAtom,
} from "@/store/WriteAtom";
import { useRecoilState } from "recoil";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import breaks from "remark-breaks";
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

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleDetailContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDetailContent(event.target.value);
  };

  const handleSubmit = async () => {
    const payload = {
      clubName: clubName,
      title: title,
      position: position,
      employmentType: employmentType,
      detailContent: detailContent,
      startDate: startDate,
      endDate: endDate,
      isOpen: true,
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
        isOpen: true,
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
      .catch((_) => {});
  };

  return (
    <>
      <S.mainContainer>
        <S.mainTitle>작성</S.mainTitle>
        <S.content>
          <S.contentTitle>제목</S.contentTitle>
          <S.contentPoint>*</S.contentPoint>
        </S.content>
        <S.titleInput
          type="text"
          name="title"
          placeholder="제목을 입력해주세요."
          value={title}
          onChange={handleTitleChange}
        ></S.titleInput>
        <S.content>
          <S.contentTitle>내용</S.contentTitle>
          <S.contentPoint>*</S.contentPoint>
        </S.content>
        <S.EditTextareaForm>
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
          <S.MarkdownViewWrap>
            {isEditMarkdown ? (
              <S.mainTextarea
                placeholder="내용을 입력해주세요. (기본 마크다운 문법 사용가능)"
                name="detailContent"
                value={detailContent}
                onChange={handleDetailContentChange}
              ></S.mainTextarea>
            ) : (
              <S.PreviewMarkdown>
                <ReactMarkdown
                  components={{
                    ul: ({ ...props }) => <div>{props.children}</div>,
                  }}
                  children={
                    detailContent ? detailContent : "표시할 내용이 없습니다."
                  }
                  remarkPlugins={[remarkGfm, breaks]}
                />
              </S.PreviewMarkdown>
            )}
          </S.MarkdownViewWrap>
        </S.EditTextareaForm>
      </S.mainContainer>
      <S.subButton onClick={handleSubmit}>게시하기</S.subButton>
    </>
  );
};

export default Write;
