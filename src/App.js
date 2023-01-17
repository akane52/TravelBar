import { Main } from './styles.js';
import Button from './components/Button'
import CocktailCards from './components/CocktailCardComponent';
import logo from "../src/resources/martinez.jpg"
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import TravelBarInformation from './components/InformationComponent/index'
import barPhoto from "../src/resources/barPhoto.jpg"

import NavBarType from './components/NavbarType';

async function si(data){
  data.map(id => 
    console.log(id.strDrink)
  )
}
function App() {
  const [data, setData] = useState()
  useEffect(() => {
    Axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(response => {
      console.log(response.data.drinks)
      setData(response.data.drinks)
    })
  },[setData])


  console.log(data)
  si(data)  

  return (
    <Main className="App">
      <NavBar title='TravelBar' 
      />
      <NavBarType/>
      <TravelBarInformation
        picture={barPhoto}
      ></TravelBarInformation>
      <Button text= 'See More' />
      <CocktailCards
          picture={logo}
          title="Martinez"
        ></CocktailCards>
    </Main>
  );
}

export default App;
