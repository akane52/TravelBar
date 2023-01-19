import styled from "@emotion/styled";

export const Title = styled.h1`
    align-content: center;
    color: #892CDC;
    font-size: 25px;
    margin-left: 2%;
`
export const InformationSquare = styled.p`
    @media only screen and (max-width:500px)  {
        top: 29%;
        font-size: 15px;
    }
    @media only screen and (max-width:800px) {
        top: 29%;
        font-size: 15px;
        font-size: 20px;
    }
    font-size: 25px;
    text-align: justify;
    padding-right:6%;
    padding-left: 5%;
    padding-top: 3%;
    padding-bottom: 3%;
`
export const Information = styled.div`
    @media only screen and (max-width:500px) {
        display: block;
    }
    @media only screen and (max-width:800px){
        display: block;
    }
    display: flex;
    height: 50%;
    width: 100%;
`
export const PurpleSquare = styled.div`
    @media only screen and (max-width:500px) {
        margin-right: 0%;
        margin-left: -2%;
    }
    @media only screen and (max-width:800px){
        margin-right: 0%;
        margin-left: 0%;
    }
    color: white;
    background-color: #892CDC;
    border-radius: 10px;
    align-content: center;
    margin-right: 4%;
    margin-left: -1%;
    height: 50%;
`
export const Picture = styled.div`
    @media only screen and (max-width:500px){
        width: 50%;
        margin-left: 25%;
    }
    @media only screen and (max-width:800px) {
        width: 50%;
        margin-left: 25%;
    }
    width: 40%;
`

export const BarPicture = styled.img`
    border-radius: 10px;
    height: 100%;
    width: 100%;
    margin-right: 5%;
`