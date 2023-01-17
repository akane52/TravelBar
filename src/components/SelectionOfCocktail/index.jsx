import { SelectionList, DrinkItem } from './styles'
import CocktailCards from '../CocktailCardComponent';

const SelectionOfCocktails = ({ list }) => {
    return (
      <SelectionList>
        {list.map((item) => {
        return <DrinkItem key={item.idDrink} ><CocktailCards
        picture={item.strDrinkThumb}
        title={item.strDrink}
      ></CocktailCards></DrinkItem>
      })}
      </SelectionList>
    )
  }
  
  export default SelectionOfCocktails