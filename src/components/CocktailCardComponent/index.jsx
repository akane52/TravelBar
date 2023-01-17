import React from "react";
import {  Container, CocktailPicture, CocktailTitle } from "./styles";

const CocktailCards = ({picture, title}) =>{
    return (
            <Container>
                <CocktailPicture src={picture}></CocktailPicture>
                <CocktailTitle>{title}</CocktailTitle>
            </Container>
    )
}
export default CocktailCards
