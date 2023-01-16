import React from "react";
import { Image, BarName, QuoteOfTheDay  } from "./styles";

const FirstPagePhoto = ({picture}) =>{
    return (
        <div>
           <Image src={picture}></Image>
           <BarName>TravelBar</BarName>
           <QuoteOfTheDay>Quote of the day</QuoteOfTheDay>
        </div>
    )
}
export default FirstPagePhoto