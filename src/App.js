import { Main } from './styles.js';
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import MainPage from './components/MainPage/index.jsx';
import AllDrinksPage from './components/AllDrinksPage/index.jsx';
import SelectionAlcoholPage from './components/SelectionAlcoholPage/index.jsx';
import SelectionNoAlcoholPage from './components/SelectionNoAlcoholPage/index.jsx';

function App() {
  const [data, setData] = useState()
  const [see, setSee] = useState('main')

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(response => {
      setData(response.data)
    })
  },[setData])

  if(see === 'main'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view = { setSee } />
        <MainPage data= { data } setSee = { setSee } />
      </Main>
    )
  }
  if(see === 'all'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view = { setSee } />
        <AllDrinksPage data= { data } setSee = { setSee } />
      </Main>
    )
  }
  if(see === 'alcohol'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view= { setSee } />
        <SelectionAlcoholPage setSee = { setSee } />
      </Main>
    )
  }
  if(see === 'noAlcohol'){
    return (
      <Main className="App">
        <NavBar title='TravelBar' view={ setSee } />
        <SelectionNoAlcoholPage setSee = { setSee } />
      </Main>
    )
  }
}

export default App;