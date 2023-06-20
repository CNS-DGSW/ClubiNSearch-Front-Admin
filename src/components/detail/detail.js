import * as S from "./detail.style";
import Image from "next/image";
import Link from "next/link";
import Ask from "../common/Ask/Ask";
import Ad from "../../asset/Ad.svg";
import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {CGS} from "./detail.style"

export default function Detail({ data }) {
  const router = useRouter();
  const [pageId, setPageID] = useState(null);
  const { title, clubName, position, detailContent, employmentType } = data;

  useEffect(() => {
    const { slug } = router.query;
    setPageID(slug);
  }, [router]);
  return (
    <div>
      <S.AdWrapper>
        <Image src={Ad} alt="Ad" width="1512" height="107" />
      </S.AdWrapper>
      <S.ContentWrapper>
        <div>
          <S.Content
            dangerouslySetInnerHTML={{ __html: md().render(`# ${title}`) }}
          />
          <S.Content
            dangerouslySetInnerHTML={{ __html: md().render(detailContent) }}
          />
        </div>
        <S.Box>
          <S.Hr />

          <S.EachBox>
            <S.Label>소속</S.Label>
            <S.Introduce>{clubName}</S.Introduce>
          </S.EachBox>

          <S.Hr />

          <S.EachBox>
            <S.Label>채용 형태</S.Label>
            <S.Introduce>{employmentType}</S.Introduce>
          </S.EachBox>

          <S.Hr />

          <S.EachBox>
            <S.Label>직군</S.Label>
            <S.Introduce>{position}</S.Introduce>
          </S.EachBox>

          <S.ApplyLink href={`/apply/${pageId}`}>
            <S.ApplyBtn>
              지원하기
            </S.ApplyBtn>
          </S.ApplyLink>

        </S.Box>
      </S.ContentWrapper>

      <Ask />
    </div>
  );
}
