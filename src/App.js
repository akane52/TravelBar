import { Main, SelectionTitle } from './styles.js';
import Button from './components/Button'
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import TravelBarInformation from './components/InformationComponent/index'
import barPhoto from "../src/resources/barPhoto.jpg"
import SelectionOfCocktails from './components/SelectionOfCocktail/index.jsx';

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => {
      setData(response.data)
    })
  },[setData])
  console.log(data)

  return (
    <Main className="App">
      <NavBar title='TravelBar' 
      />
      <TravelBarInformation
        picture={barPhoto}
      ></TravelBarInformation>
      <SelectionTitle>Selection of Cocktail</SelectionTitle> 
      {!data ? (<p>oops...something went wrong</p>) 
      : (<SelectionOfCocktails list={ data.drinks.slice(60,70) } ></SelectionOfCocktails>)
      }
      <Button text= 'See More' />
    </Main>
  );
}

export default App;
