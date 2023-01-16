import React,  {useEffect, useState} from "react";
import { Image, BarName, QuoteOfTheDay  } from "./styles";
import Axios from "axios";

const URL = "http://quotes.rest/qod.json?category=management";

const FirstPagePhoto = ({picture}) =>{
    const [data, setData] = useState()

    useEffect(() => {
        Axios.get(URL)
        .then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    })

    return (
        <div>
           <Image src={picture}></Image>
           <BarName>TravelBar</BarName>
           <QuoteOfTheDay>Quote of the day</QuoteOfTheDay>
        </div>
    )
}
export default FirstPagePhoto