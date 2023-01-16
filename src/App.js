import { Main } from './styles.js';
import Button from './components/Button'
import CocktailCards from './components/CocktailCardComponent';
import logo from "../src/resources/martinez.jpg"
import NavBar from './components/NavBar';
import { useState,useEffect } from 'react';
import Axios from 'axios';
import TravelBarInformation from './components/InformationComponent/index'
import barPhoto from "../src/resources/barPhoto.jpg"
import FirstPagePhoto from './components/FirstPagePhoto/index.jsx';
import barPrincipal from "../src/resources/bar.jpg"

function App() {
  const [data, setData] = useState()

  useEffect(() => {
    Axios.get('http://quotes.rest/qod.json?category=management')
    .then(response => {
      setData(response.data)
    })
  },[setData])

  console.log(data)

  return (
    <Main className="App">
      <NavBar title='TravelBar' 
      />
        <FirstPagePhoto
          picture={barPrincipal}
          // quote={data.quote}
        ></FirstPagePhoto>
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
