import styled from '@emotion/styled'

export const Header = styled.header`
    background-color: #1E1E1E;
    color: #892CDC;
    border-bottom: 7px solid #52057B;
    position: relative;
    margin-bottom: 1%;
    text-shadow: 1px 1px 2px black;
    display: flex;
`

export const Title = styled.h1`
    display: inline-block;
    padding-left: 3%;
`
export const Button = styled.button`
    color: #D9D9D9;
    background: none;
    border: none;
    &:hover{
        color: #892CDC;
    }
    padding-top: 15%;
    font-size: 20px;
    cursor:pointer;
`
export const Buttons = styled.div`
    margin-left: 70%;
`