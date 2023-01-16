import React from "react";
import { Image, BarName, QuoteOfTheDay  } from "./styles";

const FirstPagePhoto = ({picture}) =>{

    return (
        <div>
           <Image src={picture}></Image>
           <BarName>TravelBar</BarName>
           <QuoteOfTheDay>prueba</QuoteOfTheDay>
        </div>
    )
}
export default FirstPagePhoto