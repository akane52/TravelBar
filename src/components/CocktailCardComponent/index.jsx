import React from "react";
import {  Container, CocktailPicture, CocktailTitle } from "./styles";

const CocktailCards = ({picture, title}) =>{
    return (
            <Container>
                <CocktailPicture src={picture} alt="noImage" data-testid="cocktailPicture"></CocktailPicture>
                <CocktailTitle data-testid="cocktailTitle" title="noText">{title}</CocktailTitle>
            </Container>
    )
}
export default CocktailCards
