import FirstPagePhoto from "../FirstPagePhoto"
import TravelBarInformation from "../InformationComponent"
import SelectionOfCocktails from "../SelectionOfCocktail"
import { useState,useEffect } from 'react';
import Axios from 'axios';
import { SelectionTitle } from "../../styles"
import barPrincipal from "../../resources/bar.jpg"
import barPhoto from "../../resources/barPhoto.jpg"

const MainPage = ({ data }) => {
    const [dataQuote, setDataQuote] = useState()

    useEffect(() => {
        Axios.get('https://type.fit/api/quotes')
        .then(response => {
          setDataQuote(response.data)
        })
      },[setDataQuote])

    return (
      <div>
        {!dataQuote ? (<p>oops...something went wrong </p>) 
        : (<FirstPagePhoto picture={barPrincipal} quote={dataQuote[Math.floor(Math.random() * 1400)].text}></FirstPagePhoto>)}
        <TravelBarInformation
          picture={barPhoto}
        ></TravelBarInformation>
        <SelectionTitle data-testid='selection'>Selection of Cocktails</SelectionTitle>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ data.drinks.slice(70,80) } ></SelectionOfCocktails>)
        }
      </div>
    )
  }
  
  export default MainPage