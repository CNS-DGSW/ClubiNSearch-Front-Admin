import styled, {createGlobalStyle} from "styled-components";
import Image from "next/image"

export const GlobalStyle = createGlobalStyle`
    height: 100vh;
    width: 100vw;
`

export const Wrapper = styled.div`
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ContentWrapper = styled.form`
`

export const TitleLogo = styled(Image)`
    margin-top: 6vh;
`

export const Title = styled.div`
    font-weight: 700;
    font-size: 1.9rem;
    color: #394050;
`

export const AllWithoutTitle = styled.div`
    margin-top: 4vh;
`

export const InputWrapper = styled.div`
    margin: 3vh 0;

`

export const InputLabel = styled.div`
`

export const Label = styled.span`
    font-weight: 900;
    font-size: 0.9rem;
    color: #666666;
    `

export const Require = styled.span`
    margin-left: 0.1rem;
    
    font-weight: 900;
    font-size: 0.9rem;
    color: #E03B3B;
    `
export const Input = styled.input`
    margin-top: 0.5vh;
    width: 23rem;
    height: 2rem;
    
    padding-left: 0.5rem;
    
    border: 1px solid #C0C0C0;
    border-radius: 5px;

    ::placeholder{
        font-weight: 700;
        font-size: 11px;
        color: #C0C0C0;
    }
    :hover{
        outline: none;
    }
    :focus{
        outline: none;
        border: 1px solid #1556F7;
    }
`

export const SubmitBtn = styled.button`
    width: 23rem;
    height: 3rem;
    background-color: rgba(21, 86, 247, 0.8);
    border: none;
    border-radius: 5px;

    font-weight: 900;
    font-size: 1rem;
    color: #FFFFFF;

`

export const GrayLabel = styled.p`
    margin-top: 0.5rem;

    font-weight: 700;
    font-size: 0.9rem;
    color: #C0C0C0;

`

export const AgreeWrapper = styled.div`
    margin: 2vh 0;
    `

export const CheckAgree = styled.input`
    margin-right: 1vh;

`

export const AgreeLabel = styled.label`
`

export const ErrorMsg = styled.div`
    margin: 0.4rem;
    color: #ff4f4f;
    font-size: 0.7rem;
`


