import React from "react";
import {  Container, CocktailPicture, CocktailTitle } from "./styles";

const CocktailCards = ({picture, title}) =>{
    return (
        <div>
            <Container>
                <CocktailPicture src={picture}></CocktailPicture>
                <CocktailTitle>{title}</CocktailTitle>
            </Container>
        </div>
    )
}
export default CocktailCards
