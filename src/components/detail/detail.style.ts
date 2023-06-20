import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

export const CGS = createGlobalStyle`
    @font-face {
        font-family: "Inter";
        src: url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
    }
`;

export const AdWrapper = styled.div`
    width: 100%;
    height: 5rem;
    background: #1A1F27;

    display: flex;
    align-items: center;
    justify-content: center;
    >img{
        padding-top: 1.2rem;
    }
`

export const Content = styled.div`
    width: 75%;
    word-break: keep-all;
    margin-bottom: 3vh;

    > h1, h2, h3{
        margin-top: 1vh;
    }
    > ul, p{
        margin-top: 0.6rem;
        line-height: 1.7rem;
        color: #858585;
        font-weight: 700;
    }
`

export const Box = styled.div`
    width: 15vw;
    height: 11rem;
    margin-top: 10vh;
`

export const ContentWrapper = styled.div`
    margin-top: 4rem;
    margin-left: 22vw;
    margin-right: 22vw;
    display: flex;
    justify-content: space-between;
`

export const EachBox = styled.div`
    margin : 1rem 0;

    display: flex;
    position: relative;
`

export const Hr = styled.hr`
    background: #D9D9D9;
    width: 15vw;
`

export const Label = styled.div`
    margin-left: 0.2rem;
    position: absolute;

    //font-family: "Pangolin";
    font-family: 'Inter';
    font-weight: 700;
    font-size: 0.9rem;
    // line-height: 0.7rem;
    color: #858585;
`

export const Introduce = styled.div`
    margin-left: 37%;

    font-family: 'Inter';
    font-weight: 700;
    font-size: 0.9rem;
    //line-height: 0.7rem;
    
    color: #4980EE;
`

export const ApplyBtn = styled.button`
    width: 15vw;
    height: 3vh;
    border: hidden;
    border-radius: 5px;
    background-color: #4980EE;
    margin-top: 0.5rem;
    
    text-decoration: none;
    color:  #FFFFFF ;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 0.7rem;  
    `

export const ApplyLink = styled(Link)`

`
