import { SelectionList } from './styles'
import CocktailCards from '../CocktailCardComponent';

const SelectionOfCocktails = ({ list }) => {
    return (
      <SelectionList>
        {list.map((item) => {
        return <li key={item.idDrink} ><CocktailCards
        picture={item.strDrinkThumb}
        title={item.strDrink}
      ></CocktailCards></li>
      })}
      </SelectionList>
    )
  }
  
  export default SelectionOfCocktails