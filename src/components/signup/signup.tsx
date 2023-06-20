import { useEffect, useState } from "react"
import * as S from "./signup.style"
import axios from "axios"
import API from "@/util/api"
import { useRouter } from "next/router"

// 회원가입
const signup = () => {
    const router = useRouter()

    // useEffect(()=>{
    //     API.get('/api/resume/list/9',{
    //         headers : { Authorization : 'Bearer eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFMyNTYifQ.eyJlbWFpbCI6ImFAZGdzdy5ocy5rciIsInR5cGUiOiJBQ0NFU1MiLCJpYXQiOjE2ODY2NTIwMDEsImV4cCI6MTY4NjY1NTYwMX0.VWJno0ia5NGVGj1RU87DBEVnxl4f6f1mJQcG59FRzUg' }
    //     })
    //     .then((res)=>{
    //         console.log(res)
    //     })
    //     .catch((err)=>{
    //         console.error(err)
    //     })
    // },[])

    const [UserInformation, setUserInformation] = useState({
        accountId : "",
        name : "",
        email : "",
        password : ""
    })
    const [accept, setAccept] = useState<boolean>(false)

    const [errOrNot, setErrOrNot] = useState<any>({
        id : {
            isErr : false,
            content : ""
        },
        password : {
            isErr : false,
            content : ""
        },
        name : {
            isErr : false,
            content : ""
        },
        email : {
            isErr : false,
            content : ""
        },
        accept : {
            isErr : false,
            content : ""
        },
    });

    const valueCheck = () : boolean => {
        let isContinue = true
        const regId = /^(?=.+[a-zA-Z])(?=.+[0-9]).{3,}$/
        const regPw = /^(?=.+[a-zA-Z])(?=.+[!@#$%^*+=-])(?=.+[0-9]).{5,}$/
        const regName = /^(?=[ㄱ-ㅎ가-힣a-zA-Z]+).{1,}$/
        const regEmail = /[a-z0-9]+@[a-z]+\.[a-z]/
        
        let data = {
            id : {
                isErr : false,
                content : ""
            },
            password : {
                isErr : false,
                content : ""
            },
            name : {
                isErr : false,
                content : ""
            },
            email : {
                isErr : false,
                content : ""
            },
            accept : {
                isErr : false,
                content : ""
            },
        }

        // 아이디
        if( !regId.test(UserInformation.accountId) ){
            data.id.isErr = true
            if(UserInformation.accountId === ""){
                data.id.content = "아이디는 필수 입력 항목 입니다."
            }
            else {
                data.id.content = "규칙에 맞지 않습니다."
            }
            isContinue = false
        }

        // 비밀번호
        if( !regPw.test(UserInformation.password) ){
            data.password.isErr = true
            if(UserInformation.password === ""){
                data.password.content = "비밀번호는 필수 입력 항목 입니다."
            }
            else {
                data.password.content = "규칙에 맞지 않습니다."
            }
            isContinue = false
        }

        // 이름
        if( !regName.test(UserInformation.name) ){
            data.name.isErr = true
            if(UserInformation.name === ""){
                data.name.content = "이름은 필수 입력 항목 입니다."
            }
            else {
                data.name.content = "규칙에 맞지 않습니다."
            }
            isContinue = false
        }

        // 이메일
        if( !regEmail.test(UserInformation.email) ){
            data.email.isErr = true
            if(UserInformation.email === ""){
                data.email.content = "이메일은 필수 입력 항목 입니다."
            }
            else {
                data.email.content = "규칙에 맞지 않습니다."
            }
            isContinue = false
        }

        // 체크박스
        if(!accept){
            data.accept.isErr = true
            data.accept.content = "개인정보 수집에 동의하지 않으시면 회원가입하실 수 없습니다."
            isContinue = false
        }
        setErrOrNot(data)

        return isContinue
    }

    const submitHandler = (e:any) => {
        e.preventDefault()
        // 정규식으로 값 정확한지 확인
        // null일 때 / 조건 안 지켰을 때 다른 경고
        // 정확하지 않으면 빨간색 띄우기

        
        // true면 통과
        const isContinue = valueCheck()
        
        if(isContinue){
            API.post('/api/auth/join', UserInformation)
            .then((res)=>{
                alert("회원가입 성공")
                router.push('/signin')
            })
            .catch((err)=>{
                console.error(err)
            })
        }
    }

    return (
        <S.Wrapper>
            <S.GlobalStyle/>
            <S.ContentWrapper onSubmit={submitHandler}>
                <S.Title>관리자 회원가입</S.Title>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>아이디</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="영어 / 숫자를 섞어 3자 이상 입력해주세요." 
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, accountId : e.target.value }}
                        )
                    }}></S.Input>
                    {errOrNot.id.isErr && <S.ErrorMsg>{errOrNot.id.content}</S.ErrorMsg>}
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>비밀번호</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="영어 / 숫자 / 특수문자를 섞어 5자 이상 입력해주세요."
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, password : e.target.value }}
                        )
                    }}></S.Input>
                    {errOrNot.password.isErr && <S.ErrorMsg>{errOrNot.password.content}</S.ErrorMsg>}
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>                            
                        <S.Label>이름</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="이름을 한 글자 이상 입력해주세요."
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, name : e.target.value }}
                        )
                    }}></S.Input>
                    {errOrNot.name.isErr && <S.ErrorMsg>{errOrNot.name.content}</S.ErrorMsg>}
                </S.InputWrapper>

                <S.InputWrapper>
                    <S.InputLabel>
                        <S.Label>이메일</S.Label>
                        <S.Require>*</S.Require>
                    </S.InputLabel>
                    <S.Input placeholder="이메일을 입력해주세요."
                    onChange={(e)=>{
                        setUserInformation((prevState)=>{
                            return{...prevState, email : e.target.value }}
                        )
                    }}></S.Input>
                    {errOrNot.email.isErr && <S.ErrorMsg>{errOrNot.email.content}</S.ErrorMsg>}
                </S.InputWrapper>

                <S.AgreeWrapper>
                    <S.AgreeLabel>
                        <S.CheckAgree type="checkbox" onChange={()=>{setAccept(!accept)}} id="accept"/>
                        개인정보 수집 및 이용에 동의합니다.
                    </S.AgreeLabel>
                    {errOrNot.accept.isErr && <S.ErrorMsg>{errOrNot.accept.content}</S.ErrorMsg>}
                </S.AgreeWrapper>

                <S.SubmitBtn type="submit">가입하기</S.SubmitBtn>

            </S.ContentWrapper>
        </S.Wrapper>
    )
}

export default signup