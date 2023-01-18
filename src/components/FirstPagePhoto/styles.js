import styled from '@emotion/styled'

export const Image = styled.img`
    width: 100%;
    opacity: 20%;
`
export const BarName = styled.h1`
    @media (max-width: 700px) {
        top: 20%;
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
    @media (max-width: 700px) {
        top: 29%;
        font-size: 15px;
    }
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
`
