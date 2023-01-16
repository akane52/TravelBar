import { Main } from './styles.js';
import Button from './components/Button'
import CocktailCards from './components/CocktailCardComponent';
import logo from "../src/resources/martinez.jpg"
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';


function App() {
  const [data, setData] = useState()

  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(response => {
      setData(response.data)
    })
  },[setData])

  console.log(data)


  return (
    <Main className="App">
      <NavBar title='TravelBar' />
      <Button text= 'See More' />
      <CocktailCards
          picture={logo}
          title="Martinez"
        ></CocktailCards>
    </Main>
  );
}

export default App;
