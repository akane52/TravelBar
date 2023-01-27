import NavBarType from "../NavbarType"
import SelectionOfCocktails from "../SelectionOfCocktail"
import DrinksSelectionTitle from "../DrinksSelectionTitle"
import Button from "../Button"
import { useState,useEffect } from 'react';
import Axios from 'axios';

const SelectionNoAlcoholPage = ({ setSee }) => {
    const [noAlcohol, setNoAlcohol] = useState()
    
    useEffect(() => {
        Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then(response => {
          setNoAlcohol(response.data)
        })
      },[setNoAlcohol])

    return(
      <div>
        <NavBarType view={ setSee }></NavBarType>
        <DrinksSelectionTitle textTitle = 'Cocktails Without alcohol' />
        {!noAlcohol ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ noAlcohol.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={'main'}/>
      </div>
    )
}

export default SelectionNoAlcoholPage