import { Header, Title } from './styles'
import MusicIcon from '../MusicIcon'

const NavBar = ({ title }) => {
    return (
      <Header>
        <Title>{title}</Title>
        <MusicIcon />
      </Header>
    )
  }
  
  export default NavBar