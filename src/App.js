import './App.css';
import Button from './components/Button'
import CocktailCards from './components/CocktailCardComponent';
import logo from "../src/resources/martinez.jpg"
import TravelBarInformation from './components/InformationComponent';


function App() {
  return (
    <div className="App">
      <Button text= 'See More' />
      <CocktailCards
          picture={logo}
          title="Martinez"
        ></CocktailCards>
      <TravelBarInformation></TravelBarInformation>
    </div>
  );
}

export default App;
