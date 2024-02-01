import { styled } from "styled-components";

import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
    height: 75px;
    background-color: #0B2545;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 3px solid #7BBDFC;
`
export const StyledNav = styled.nav`
    
`
export const StyledUl = styled.ul`
    height: 75px;
    display: flex;
    gap: 20px;
    align-items: center;
`
export const StyledLi = styled.li`

`
export const StyledNavLink = styled(NavLink)`
    color:#0B2545;
    font-weight: 600;
    padding: 8px 12px;
    background-color: #BFDCF8;
    border-radius: 4px;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: #7BBDFC;
    }
    &.active{
      background-color: #7BBDFC;
    }
`