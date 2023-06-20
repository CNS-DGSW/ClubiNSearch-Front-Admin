import AskCNS from '../../../asset/AskCNS.svg';
import Image from 'next/image';
import * as S from "./Ask.style";

export default function Ask() {
    return(
        <S.Ask>
            <p >채용팀에<br/>문의하기</p>
            <Image src={AskCNS} alt='Ask'/>
        </S.Ask>
    )
}