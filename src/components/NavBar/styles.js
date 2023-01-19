import styled from '@emotion/styled'

export const Header = styled.header`
    @media (max-width: 700px) {
        display: block;
    }
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
    &:hover {
        color: #EEDCFB;
        cursor: pointer;
     }
`
export const Button = styled.button`
    @media only screen and (max-width:500px) {
        font-size: 15px;
    }
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
    @media (max-width: 700px) {
        margin-top: -15%;
        margin-left: 33%;
        position: relative;
    }
    position: absolute;
    right: 4%;
    display: flex;
`