import { Main, SelectionTitle } from './styles.js';
import Button from './components/Button'
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import SelectionOfCocktails from './components/SelectionOfCocktail/index.jsx';
import NavBarType from './components/NavbarType';
import MainPage from './components/MainPage/index.jsx';
import AllDrinksPage from './components/AllDrinksPage/index.jsx';
import SelectionAlcoholPage from './components/SelectionAlcoholPage/index.jsx';

function App() {
  const [data, setData] = useState()
  const [noAlcohol, setNoAlcohol] = useState()
  const [see, setSee] = useState('main')

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => {
      setData(response.data)
    })
  },[setData])

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(response => {
      setNoAlcohol(response.data)
    })
  },[setNoAlcohol])

  if(see === 'main'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view= { setSee } />
        <MainPage data= { data } setSee = { setSee } />
      </Main>
    )
  }
  if(see === 'all'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view={ setSee } />
        <AllDrinksPage data= { data } setSee = { setSee } />
      </Main>
    )
  }
  if(see === 'alcohol'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view={ setSee } />
        <SelectionAlcoholPage setSee = { setSee } />
      </Main>
    )
  }
  if(see === 'noAlcohol'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view={ setSee } />
        <NavBarType view={ setSee }></NavBarType>
        <SelectionTitle data-testid='selection'>Cocktails Without alcohol</SelectionTitle>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ noAlcohol.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={'main'}/>
      </Main>
    )
  }
}

export default App;