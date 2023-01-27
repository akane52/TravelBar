import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: #BC6FF1;
    border-radius: 10%;
    display: inline-block;
    padding-top: 14%;
    margin: 1%;
    &:hover{
        color: #D9D9D9;
        cursor: pointer;
    }
    height: 190px;
`
export const CocktailPicture = styled.img`
    height: 100px;
    border-radius: 10%;
    width: 100px;
`
export const CocktailTitle = styled.div`
    width: 130px;
    font-size: 15px;
    display: flex;
    padding-left: 5px;
    margin-top: 15%;
    text-align: justify-all;
`