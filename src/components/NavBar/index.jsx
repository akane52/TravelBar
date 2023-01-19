import { Header, Title, Button, Buttons } from './styles'

const NavBar = ({ title,eventHandler}) => {
 
    return (
      <Header>
        <Title onClick={eventHandler}>{title}</Title>
        <Buttons>
          <Button>Alcoholic</Button>
          <Button>Non alcoholic</Button>
        </Buttons>
      </Header>
    )
  }
  
  export default NavBar