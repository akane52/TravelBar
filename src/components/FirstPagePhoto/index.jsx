import React from "react";
import { Image, BarName, QuoteOfTheDay  } from "./styles";

const FirstPagePhoto = ({picture, quote}) =>{
    return (
        <div>
           <Image src={picture}></Image>
           <BarName>TravelBar</BarName>
           <QuoteOfTheDay>{quote}</QuoteOfTheDay>
        </div>
    )
}
export default FirstPagePhoto