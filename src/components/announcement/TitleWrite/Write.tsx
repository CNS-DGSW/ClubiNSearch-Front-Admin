import * as S from "./Write.style";
import Position from "../Select/Position";
import ClubName from "../Select/ClubName";
import EmploymentType from "../Select/EmploymentType";
import MainWrite from "@/components/announcement/MainWrite/Write";
import { useRecoilState } from "recoil";
import { titleAtom, startDateAtom, endDateAtom } from "@/store/WriteAtom";

const Write = () => {
  const [title, setTitle] = useRecoilState(titleAtom);
  const [startDate, setStartDate] = useRecoilState(startDateAtom);
  const [endDate, setEndDate] = useRecoilState(endDateAtom);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartDate(event.target.value);
  };
  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  };

  return (
    <S.MainContainer>
      <S.parentTitle>공고 작성하기</S.parentTitle>
      <S.titleContainer>
        <S.titleContent>
          <S.content>
            <S.contentTitle>채용 동아리</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <ClubName />

          <S.content>
            <S.contentTitle>채용 직급</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <EmploymentType />

          <S.content>
            <S.contentTitle>채용 포지션</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <Position />
          <S.content>
            <S.contentTitle>채용 기간</S.contentTitle>
            <S.contentPoint>*</S.contentPoint>
          </S.content>
          <S.selectContainer>
            <S.dateSelect
              type="date"
              name="startDate"
              value={startDate}
              onChange={handleStartDateChange}
            ></S.dateSelect>
            <S.dateSign> ~ </S.dateSign>
            <S.dateSelect
              type="date"
              name="endDate"
              value={endDate}
              onChange={handleEndDateChange}
            ></S.dateSelect>
          </S.selectContainer>
        </S.titleContent>
      </S.titleContainer>
      <MainWrite />
    </S.MainContainer>
  );
};

export default Write;
