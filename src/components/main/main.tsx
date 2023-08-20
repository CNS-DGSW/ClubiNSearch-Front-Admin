// import fs from 'fs';
import Ask from "../common/Ask/Ask";
import Image from "next/image";
import Ad from "../../asset/Ad.svg";
import SearchIcon from "../../asset/SearchIcon.svg";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as S from "./index.style";
import API from "@/util/api";
import { recuitment } from "@/types/Recuitment";

export default function Main({
  getposts,
  posi,
}: {
  getposts: recuitment[];
  posi: string[];
}) {
  // 한 페이지에 보여줄 게시글 개수
  const ONEPAGEPOST = 7;
  const [posts, setPosts] = useState(getposts);
  // 전체 페이지 수
  const [totalPages] = useState(Math.ceil(posts.length / ONEPAGEPOST));
  const [itemOffset, setItemOffset] = useState(0);
  // 게시글 제목, 포지션, 채용 형태 검색에 사용
  const [search, setSearch] = useState({
    position: "",
    employmentType: "",
    title: "",
  });
  // 채용 형태 옵션들 (typescript로 바꾸고 enum으로 고치기)
  const employmentTypeOption = ["INTERN", "REGULAR"];
  const employmentTypeOption2 = ["인턴", "부원"];

  useEffect(() => {
    // 세 개 중에 값이 하나가 바뀌면 나머지에 다 undefined가 들어가는데 왜 그런지 모르겠어서 일단 if문으로 처리해둠
    if (search.title === undefined) {
      search.title = "";
    }
    if (search.position === undefined) {
      search.position = "";
    }
    if (search.employmentType === undefined) {
      search.employmentType = "";
    }

    let query =
      "search=" +
      search.title +
      "&" +
      "position=" +
      search.position +
      "&" +
      "employmentType=" +
      search.employmentType;
    API.get(`api/recruitment/?${query}`)
      .then((res) => {
        const { data } = res;
        setPosts(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [search]);

  const thisPagePosts = posts.slice(itemOffset, itemOffset + 7);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * ONEPAGEPOST) % posts.length;
    setItemOffset(newOffset);
  };

  const ShowPosts = thisPagePosts.map((post: recuitment, index: number) => {
    return (
      <S.EachPostBox key={post.id}>
        <Link href={`/Detail/${post.id}`}>{post.title}</Link>
        <S.PostPositionHow>{post.position}</S.PostPositionHow>
        <S.PostPositionHow>{post.employmentType}</S.PostPositionHow>
      </S.EachPostBox>
    );
  });

  return (
    <S.Wrapper>
      <S.AdWrapper>
        <Image src={Ad} alt="Ad" />
      </S.AdWrapper>

      <S.ContentWrapperWithoutPagination>
        <S.IntroH1>
          가슴 뛰는 미래,
          <br />
          내일이 있는 삶
        </S.IntroH1>
        <S.IntroDiv>
          우리는 “세상을 이롭게 하는 소프트웨어 개발자가 되겠다”는 같은 목표에
          마음이 움직여
          <br />
          이곳 “DGSW”에 모이게 되었습니다. DGSW는 모두가 협동하여 서로의 목표를
          향해 나아갑니다.
          <br />
          동료들과 함께 서로 도우며 불가능한 가능하게 하며 열정적으로 유능한
          개발자로 성장하고 있습니다.
          <br />
          가슴이 설레시나요?지금이 바로 “DGSW”동아리에 합류할 때입니다.
        </S.IntroDiv>

        <S.SearchBox>
          <S.SearchPosition>
            <Image src={SearchIcon} alt="SearchIcon" />
            <S.SearchTitleInput
              placeholder="포지션 역할 검색하기"
              value={search.title}
              onChange={(e) =>
                setSearch((prevState) => {
                  return { ...prevState, title: e.target.value };
                })
              }
            />
          </S.SearchPosition>

          <S.ChoosePositionHow
            value={search.position}
            onChange={(e) =>
              setSearch((prevState) => {
                return { ...prevState, position: e.target.value };
              })
            }
          >
            <option value="">채용 포지션</option>
            {posi.map(
              (p: string, index: number) =>
                posi.indexOf(p) === index && (
                  <option key={p} value={p}>
                    {p}
                  </option>
                )
            )}
          </S.ChoosePositionHow>
          <S.ChoosePositionHow
            value={search.employmentType}
            onChange={(e) =>
              setSearch((prevState) => {
                return { ...prevState, employmentType: e.target.value };
              })
            }
          >
            <option value="">채용 형태</option>
            {employmentTypeOption2.map((e, index) => (
              <option value={employmentTypeOption[index]} key={index}>
                {e}
              </option>
            ))}
          </S.ChoosePositionHow>
        </S.SearchBox>

        <S.PostWrapper>{ShowPosts}</S.PostWrapper>
      </S.ContentWrapperWithoutPagination>

      <S.StyledReactPaginate
        pageCount={totalPages}
        previousLabel=""
        nextLabel=""
        onPageChange={handlePageClick}
        containerClassName="containerPaginate"
        pageClassName="pagePaginate"
      ></S.StyledReactPaginate>

      {/* <Ask /> */}
    </S.Wrapper>
  );
}
