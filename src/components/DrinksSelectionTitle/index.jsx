import { SelectionTitle } from "./styles";

const DrinksSelectionTitle = ({ textTitle }) => {
    return(
        <SelectionTitle data-testid='selection'>{ textTitle }</SelectionTitle>
    )
}

export default DrinksSelectionTitle