import { styled } from "styled-components";

export const StyledForm = styled.form`
    width: 600px;
    margin: 135px auto 65px;
    display: flex;
`

export const StyledInput = styled.input`
    width: calc(100% - 85px);
    height: 45px;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-top: 2px solid #7BBDFC;
    border-bottom: 2px solid #7BBDFC;
    border-left: 2px solid #7BBDFC;
    border-right: none;
    padding-left: 16px;
    outline: none;
    &::placeholder {
        color: #13315C; 
        opacity: 0.7; 
        font-size: 14px;

    }
`

export const StyledButton = styled.button`
    width: 85px;
    height: 45px;
    border-top: 2px solid #7BBDFC;
    border-bottom: 2px solid #7BBDFC;
    border-right: 2px solid #7BBDFC;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
    border-left: 1px solid #7BBDFC;
    background-color: #BFDCF8;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: #7BBDFC;
    }

`

