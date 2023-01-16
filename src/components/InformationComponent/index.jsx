import React from "react";
import { Title, InformationSquare, PurpleSquare, BarPicture, Information, Picture } from "./styles";

const TravelBarInformation = ({picture}) =>{
    return (
        <div>
            <Title>¿What's TravelBar?</Title>
            <Information>
                <PurpleSquare>
                    <InformationSquare>
                        Set within a historic 17th century Dutch house in picturesque Central Amsterdam, TravelBar is the first international venue from Mr Lyan and team who brought you Seed Library, Silver Lyan, Cub, Lyaness and more.
                        A casual cocktail bar offering kick ass cocktails, beers, wine and bites late into the night.
                        The playful sibling in the family uses all the experience across our history to create expanded versions of familiar serves, alongside some unexpected gems.
                        <br></br>A bar where you can dance, play board games, listen to music... We also have karaoke and open mic nights where you can get to know new talents.
                        <br></br>Your kids are more than welcomed here. We have cocktails without alcohol just for them.
                        <br></br><br></br>Just come and have fun!!
                    </InformationSquare>
                </PurpleSquare>
                <Picture>
                    <BarPicture src={picture}></BarPicture>
                </Picture>
            </Information>
        </div>
    )
}
export default TravelBarInformation