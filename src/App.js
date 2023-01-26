import { Main, SelectionTitle } from './styles.js';
import Button from './components/Button'
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import SelectionOfCocktails from './components/SelectionOfCocktail/index.jsx';
import NavBarType from './components/NavbarType';
import MainPage from './components/MainPage/index.jsx';

function App() {
  const [data, setData] = useState()
  const [alcohol, setAlcohol] = useState()
  const [noAlcohol, setNoAlcohol] = useState()
  
  const [see, setSee] = useState('main')

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => {
      setData(response.data)
    })
  },[setData])

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(response => {
      setAlcohol(response.data)
    })
  },[setAlcohol])

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
    .then(response => {
      setNoAlcohol(response.data)
    })
  },[setNoAlcohol])

  if(see === 'main'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view= { setSee }/>
        <MainPage data= { data } />
        <Button text= 'See More' state= { setSee } more={'all'}/>
      </Main>
    )
  }
  if(see === 'all'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view={ setSee } />
        <NavBarType view={ setSee }></NavBarType>
        <SelectionTitle data-testid='selection'>All Cocktails</SelectionTitle>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ data.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={'main'}/>
      </Main>
    )
  }
  if(see === 'alcohol'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view={ setSee } />
        <NavBarType view={ setSee }></NavBarType>
        <SelectionTitle data-testid='selection'>Cocktails With alcohol</SelectionTitle>
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ alcohol.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={'main'}/>
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