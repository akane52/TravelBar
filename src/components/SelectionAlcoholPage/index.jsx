import NavBarType from "../NavbarType"
import SelectionOfCocktails from "../SelectionOfCocktail"
import DrinksSelectionTitle from "../DrinksSelectionTitle"
import Button from "../Button"
import { useState,useEffect } from 'react';
import Axios from 'axios';

const SelectionAlcoholPage = ({ setSee }) => {
    const [alcohol, setAlcohol] = useState()

    useEffect(() => {
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then(response => {
          setAlcohol(response.data)
        })
      },[setAlcohol])

    return(
      <div>
        <NavBarType view={ setSee }></NavBarType>
        <DrinksSelectionTitle textTitle='Cocktails With alcohol' />
        {!alcohol ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ alcohol.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={'main'}/>
      </div>
    )
}

export default SelectionAlcoholPage