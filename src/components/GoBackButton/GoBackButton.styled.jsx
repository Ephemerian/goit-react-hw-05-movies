import { styled } from "styled-components";

export const StyledButton = styled.button`
background-color: inherit;
font-weight: 600;
border: none;
padding-bottom: 3px;
border-bottom: 1px solid #BFDCF8;
color: #BFDCF8;
transition: color 0.3s ease, border0.3s ease;
    &:hover{
        color: #7BBDFC;
        border-bottom: 1px solid #7BBDFC;
    }
`