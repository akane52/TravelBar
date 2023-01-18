import { Main, SelectionTitle } from './styles.js';
import Button from './components/Button'
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import TravelBarInformation from './components/InformationComponent/index'
import barPhoto from "../src/resources/barPhoto.jpg"
import SelectionOfCocktails from './components/SelectionOfCocktail/index.jsx';

import NavBarType from './components/NavbarType';

async function si(data){
  data.map(id => 
    console.log(id.strDrink)
  )
}
function App() {
  const [data, setData] = useState()
  const [see, setSee] = useState()

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => {
      console.log(response.data.drinks)
      setData(response.data.drinks)
    })
  },[setData])

  if(!see){
    return (
      <Main className="App">
        <NavBar title='TravelBar' />
        <TravelBarInformation
          picture={barPhoto}
        ></TravelBarInformation>
        <SelectionTitle>Selection of Cocktail</SelectionTitle>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ data.drinks.slice(70,80) } ></SelectionOfCocktails>)
        }
        <Button text= 'See More' state= { setSee } more={true}/>
      </Main>
    );
  }
  if(see){
    return (
      <Main className="App">
        <NavBar title='TravelBar' />
        <SelectionTitle>All Cocktail</SelectionTitle>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ data.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={false}/>
      </Main>
    );
  }
}

export default App;
