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

    return (
      <Main className="App">
        <NavBar title='TravelBar' view = { setSee } />
        {see === 'main'?
        (<MainPage data= { data } setSee = { setSee } />)
        : see === 'all'?
        (<AllDrinksPage data= { data } setSee = { setSee } />)
        : see === 'alcohol'?
        (<SelectionAlcoholPage setSee = { setSee } />)
        : see === 'noAlcohol'?
        (<SelectionNoAlcoholPage setSee = { setSee } />)
        : (<p>oops...something went wrong</p>)
        }
      </Main>
    )
}
export default App;