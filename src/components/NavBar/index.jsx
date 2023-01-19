import { Header, Title, Button, Buttons } from './styles'

const NavBar = ({ title, view }) => {
    return (
      <Header>
        <Title>{title}</Title>
        <Buttons>
          <Button data-testid='btnAlcohol' onClick={() => {view('alcohol')}}>Alcoholic</Button>
          <Button data-testid='btnNOAlcohol' onClick={() => {view('noAlcohol')}}>Non alcoholic</Button>
        </Buttons>
      </Header>
    )
  }
  
  export default NavBar