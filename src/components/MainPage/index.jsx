import FirstPagePhoto from "../FirstPagePhoto"
import TravelBarInformation from "../InformationComponent"
import SelectionOfCocktails from "../SelectionOfCocktail"
import DrinksSelectionTitle from "../DrinksSelectionTitle";
import { useState,useEffect } from 'react';
import Axios from 'axios';
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
        <DrinksSelectionTitle textTitle='Selection of Cocktails'/>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ data.drinks.slice(70,80) } ></SelectionOfCocktails>)
        }
      </div>
    )
  }
  
  export default MainPage