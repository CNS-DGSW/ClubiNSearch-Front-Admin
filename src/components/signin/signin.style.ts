import styled, {GlobalStyleComponent, createGlobalStyle} from "styled-components";
import Image from "next/image"
import Link from "next/link";

// export const Wrapper = styled.div`
//     display: flex;
//     justify-content: center;
// `

export const ContentWrapper = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    
`

// export const GlobalStyle = createGlobalStyle`
//     body{
//         height: 100vh;
//         display: flex;
//         flex-direction: column;
//     }
// `

export const TitleLogo = styled(Image)`
    margin-top: 6vh;
`

export const Title = styled.div`
    margin-top: 1vh;

    font-weight: 700;
    font-size: 1.9rem;
    color: #394050;
`

export const AllWithoutTitle = styled.form`
    margin-top: 4vh;
`

export const InputWrapper = styled.div`
    margin: 2.8vh 0;

`

export const InputLabel = styled.p`
    font-weight: 900;
    font-size: 0.9rem;
    color: #666666;
`

export const Input = styled.input`
    margin-top: 0.5vh;
    width: 23rem;
    height: 2rem;

    padding-left: 0.5rem;

    border: 1px solid #C0C0C0;
    border-radius: 5px;
    :hover{
        outline: none;
    }
    :focus{
        border: 1px solid #1556F7;
        outline: none;
    }
`

export const SubmitBtn = styled.button`
    margin-bottom: 0.5rem;

    width: 23rem;
    height: 3rem;
    background-color: rgba(21, 86, 247, 0.8);
    border: none;
    border-radius: 5px;

    font-weight: 900;
    font-size: 1rem;
    color: #FFFFFF;

`

export const GrayLink = styled(Link)`

    font-weight: 700;
    font-size: 0.9rem;
    color: #C0C0C0;
    text-decoration: none;
`