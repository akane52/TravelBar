import { Main } from './styles.js';
import Button from './components/Button'
import CocktailCards from './components/CocktailCardComponent';
import logo from "../src/resources/martinez.jpg"
import NavBar from './components/NavBar';


function App() {
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
