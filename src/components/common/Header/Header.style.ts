
import Link from "next/link";
import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1.2rem;
    padding : 0 2.5vw 0 4.3vw;
    margin-bottom: 1.2rem;
`

export const NavItem = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1rem;
    color: #767676;
    cursor: pointer;

    margin-right: 2.5vw;
`

export const headerLogo = styled.div`
    flex-grow: 1;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #767676;
`
