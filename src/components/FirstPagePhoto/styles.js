import styled from '@emotion/styled'

export const Image = styled.img`
    width: 100%;
    opacity: 20%;
`
export const BarName = styled.h1`
    @media screen and (min-width: 320px) and (max-width: 480px) {
        top: 20%;
        font-size: 40px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        top: 20%;
        font-size: 40px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        top: 26%;
        font-size: 40px;
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        top: 26%;
        font-size: 40px;
    }
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #892CDC;
    font-size: 50px;
    text-shadow: 1px 1px 2px black;
`
export const QuoteOfTheDay = styled.h3`
    @media screen and (min-width: 320px) and (max-width: 480px) {
        top: 30%;
        font-size: 13px;
    }
    @media screen and (min-width: 481px) and (max-width: 768px) {
        top: 26%;
        font-size: 19px;
    }
    @media screen and (min-width: 769px) and (max-width: 1024px) {
        top: 31%;
        font-size: 19px;
    }
    @media screen and (min-width: 1025px) and (max-width: 1200px) {
        top: 31%;
        font-size: 19px;
    }
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`
