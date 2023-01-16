import { Header, Title, Button, Buttons } from './styles'

const NavBar = ({ title }) => {
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