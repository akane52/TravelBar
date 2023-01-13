import './App.css';
import CocktailCards from './components/CocktailCardComponent';
import logo from "../src/resources/martinez.jpg"

function App() {
  return (
    <div>
        <CocktailCards
          picture={logo}
          title="Martinez"
        ></CocktailCards>
    </div>
  );
}

export default App;
