import NavBarType from "../NavbarType"
import SelectionOfCocktails from "../SelectionOfCocktail"
import DrinksSelectionTitle from "../DrinksSelectionTitle"
import Button from "../Button"

const AllDrinksPage = ({ data, setSee }) => {
    return(
      <div>
        <NavBarType view={ setSee }></NavBarType>
        <DrinksSelectionTitle textTitle='All Cocktails' />
        {!data ? (<p>oops...something went wrong</p>) 
        : (<SelectionOfCocktails list={ data.drinks } ></SelectionOfCocktails>)
        }
        <Button text= 'Return' state= { setSee } more={'main'}/>
      </div>
    )
}

export default AllDrinksPage