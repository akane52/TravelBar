import { Header, Title, Button, Buttons } from './styles'

const NavBar = ({ title,state}) => {
 
    return (
      <Header>
        <Title>{title}</Title>
        <Buttons>
          <Button>Alcoholic</Button>
          <Button>Non alcoholic</Button>
        </Buttons>
      </Header>
    )
  }
  
  export default NavBar