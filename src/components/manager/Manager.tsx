import React, { useEffect, useState } from "react";
import * as S from "./Manager.style";
import MemederBox from "./member/MemederBox";
import { IMemberBoxValue } from "@/types/IMemberBoxValue";
import { IRecruitment } from "@/types/IRecruitment";
import Sidebar from "./sidebar/Sidebar";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import NullMember from "./nullMember/NullMember";
import API from "@/util/api";
import { useRouter } from "next/router";
import Title from "./contentsBox/Title";

const Manager = () => {
  const router = useRouter();
  const [pageId, setPageId] = useState<number>(0);
  const [sidebarValue, setSidebarValue] = useState<IRecruitment[]>([]);
  const [memberContentsValue, setMemberContentsValue] = useState<
    IMemberBoxValue[]
  >([]);
  const ServerConnect = (Token: string, id: string | string[]) => {
    let copy: IMemberBoxValue[] = [];
    API.get(`api/resume/admin/list/${id}`, {
      headers: { Authorization: `Bearer ${Token}` },
    })
      .then((e) => {
        if (e.data) {
          copy = [...e.data];
          setMemberContentsValue([...copy]);
        }
      })
      .catch(() => {
        setMemberContentsValue([]);
      });
  };

  useEffect(() => {
    API.get(`api/recruitment/`)
      .then((value) => {
        let arr: IRecruitment[] = [];
        let copy = [...value.data];
        copy.map((val) => {
          arr.push({ ...val, isActive: false });
        });
        setSidebarValue(arr);
      })
      .catch((_) => {});
  }, []);

  useEffect(() => {
    const { id } = router.query;
    const Token: string | null = localStorage.getItem("accessToken");
    if (id) {
      setPageId(Number(id));
      if (!Token) return;
      ServerConnect(Token, id);
    }
  }, [router]);

  return (
    <DndProvider backend={HTML5Backend}>
      <S.ManagerMainContainer>
        <Sidebar
          stateValue={sidebarValue}
          setStateValue={setSidebarValue}
          pageid={pageId}
        />
        <S.ContentsBox>
          <Title setStateValue={setMemberContentsValue} pageid={pageId} />
          <S.MemberContentsContainer>
            {memberContentsValue[0] ? (
              memberContentsValue.map((value, index) => (
                <MemederBox
                  key={index}
                  state={memberContentsValue}
                  setState={setMemberContentsValue}
                  Boxindex={index}
                  title={value.state}
                  member={value.member}
                />
              ))
            ) : (
              <NullMember />
            )}
          </S.MemberContentsContainer>
        </S.ContentsBox>
      </S.ManagerMainContainer>
    </DndProvider>
  );
};

export default Manager;
