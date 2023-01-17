import { Main, SelectionTitle } from './styles.js';
import Button from './components/Button'
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import TravelBarInformation from './components/InformationComponent/index'
import barPhoto from "../src/resources/barPhoto.jpg"
import FirstPagePhoto from './components/FirstPagePhoto/index.jsx';
import barPrincipal from "../src/resources/bar.jpg"
import SelectionOfCocktails from './components/SelectionOfCocktail/index.jsx';


function App() {
  const [data, setData] = useState()
  const [see, setSee] = useState()
  const [dataQuote, setDataQuote] = useState()

  useEffect(() => {
    Axios.get('http://quotes.rest/qod.json?category=management')
    .then(response => {
      setDataQuote(response.dataQuote)
    })
  },[setData])

  console.log(dataQuote)

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => {
      setData(response.data)
    })
  },[setData])

  if(!see){
    return (
      <Main className="App">
        <NavBar title='TravelBar' />
        <FirstPagePhoto
          picture={barPrincipal}
          // quote={data.quote}
        ></FirstPagePhoto>
        <TravelBarInformation
          picture={barPhoto}
        ></TravelBarInformation>
        <SelectionTitle>Random selection of Cocktails</SelectionTitle>
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
        <SelectionTitle>All Cocktails</SelectionTitle>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ data.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={false}/>
      </Main>
    );
  }
}

export default App;
