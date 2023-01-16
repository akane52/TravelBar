import './App.css';
import Button from './components/Button'
import CocktailCards from './components/CocktailCardComponent';
import logo from "../src/resources/martinez.jpg"
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <Button text= 'See More' />
      <CocktailCards
          picture={logo}
          title="Martinez"
        ></CocktailCards>
      <NavBar title='TravelBar' />
    </div>
  );
}

export default App;
