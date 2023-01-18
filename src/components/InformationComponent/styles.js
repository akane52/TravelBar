import styled from "@emotion/styled";

export const Title = styled.h1`
    align-content: center;
    color: #892CDC;
    font-size: 25px;
    margin-left: 2%;
`
export const InformationSquare = styled.p`
    @media (max-width: 700px) {
        top: 29%;
        font-size: 15px;
    }
    font-size: 25px;
    text-align: justify;
    padding-right:6%;
    padding-left: 5%;
    padding-top: 3%;
    padding-bottom: 3%;
`
export const Information = styled.div`
    @media (max-width: 700px) {
        display: block;
    }
    display: flex;
    height: 100%;
    width: 100%;
`
export const PurpleSquare = styled.div`
    @media (max-width: 700px) {
        margin-right: 0%;
        margin-left: -2%;
    }
    color: white;
    background-color: #892CDC;
    border-radius: 10px;
    align-content: center;
    margin-right: 4%;
    margin-left: -1%;
`
export const Picture = styled.div`
    @media (max-width: 700px) {
        width: 50%;
        margin-left: 25%;
    }
    width: 100%;
`

export const BarPicture = styled.img`
    border-radius: 10px;
    height: 100%;
    width: 100%;
    margin-right: 5%;
`